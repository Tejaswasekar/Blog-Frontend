const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

// Stats Schema (visits, likes, dislikes)
const statSchema = new mongoose.Schema({
    visits: { type: Number, default: 0 },
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 }
});
const Stat = mongoose.model('Stat', statSchema);

// Comment Schema
const commentSchema = new mongoose.Schema({
    author: { type: String, required: true },
    text: { type: String, required: true },
    timestamp: { type: Date, default: Date.now }
});
const Comment = mongoose.model('Comment', commentSchema);

// Connect to MongoDB
const connectDB = async () => {
    try {
        const mongoURI = process.env.MONGODB_URI;
        await mongoose.connect(mongoURI);
        console.log(`Connected to MongoDB at ${mongoURI}`);

        await runDataMigration();
    } catch (err) {
        console.error('MongoDB connection error:', err);
    }
};

// Data Migration function
const runDataMigration = async () => {
    const DATA_FILE = path.join(__dirname, 'data.json');

    try {
        // Only migrate if we have no Stats yet
        const statsCount = await Stat.countDocuments();

        if (statsCount === 0) {
            console.log('No stats found in DB. Checking for data.json migration...');

            if (fs.existsSync(DATA_FILE)) {
                const oldData = JSON.parse(fs.readFileSync(DATA_FILE));

                // Migrate stats
                await Stat.create({
                    visits: oldData.visits || 0,
                    likes: oldData.likes || 0,
                    dislikes: oldData.dislikes || 0
                });

                console.log(`Migrated stats: ${oldData.visits} visits, ${oldData.likes} likes, ${oldData.dislikes} dislikes.`);

                // Migrate comments
                if (oldData.comments && oldData.comments.length > 0) {
                    // Reverse to maintain chronological order in DB if needed (old data was newest first)
                    const commentsToInsert = [...oldData.comments].reverse().map(c => ({
                        author: c.author,
                        text: c.text,
                        timestamp: new Date(c.timestamp)
                    }));

                    await Comment.insertMany(commentsToInsert);
                    console.log(`Migrated ${commentsToInsert.length} comments.`);
                }

                console.log('Successfully completed data migration from data.json to MongoDB.');

                // Optionally backup and rename the old JSON so we don't migrate again if db is cleared
                fs.renameSync(DATA_FILE, path.join(__dirname, 'data.backup.json'));
            } else {
                // Initialize default stats document
                await Stat.create({ visits: 0, likes: 0, dislikes: 0 });
                console.log('Created initial Stat document.');
            }
        }
    } catch (err) {
        console.error('Error during data migration:', err);
    }
};

module.exports = {
    Stat,
    Comment,
    connectDB
};
