require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { connectDB, Stat, Comment } = require('./models');

const app = express();
const PORT = process.env.PORT || 5005;

app.use(cors());
app.use(bodyParser.json());

// Initialize Database connection
connectDB();

// Get stats
app.get('/api/stats', async (req, res) => {
    try {
        let stats = await Stat.findOne();
        if (!stats) stats = await Stat.create({ visits: 0, likes: 0, dislikes: 0 });
        
        const comments = await Comment.find().sort({ timestamp: -1 });
        
        res.json({
            visits: stats.visits,
            likes: stats.likes,
            dislikes: stats.dislikes,
            comments: comments.map(c => ({
                id: c._id,
                author: c.author,
                text: c.text,
                timestamp: c.timestamp
            }))
        });
    } catch (err) {
        console.error('Error fetching stats:', err);
        res.status(500).json({ error: 'Failed to fetch stats' });
    }
});

// Increment visit
app.post('/api/visit', async (req, res) => {
    try {
        let stat = await Stat.findOne();
        if (!stat) stat = await Stat.create({ visits: 0, likes: 0, dislikes: 0 });
        
        stat.visits += 1;
        await stat.save();
        res.json({ visits: stat.visits });
    } catch (err) {
        console.error('Error updating visit:', err);
        res.status(500).json({ error: 'Failed to update visit' });
    }
});

// Like/Dislike with undo/switch support
app.post('/api/react', async (req, res) => {
    try {
        const { type, previousAction } = req.body; 
        let stat = await Stat.findOne();
        if (!stat) stat = await Stat.create({ visits: 0, likes: 0, dislikes: 0 });
        
        let actionApplied = type;

        // If it's a toggle (clicking same action again)
        if (type === previousAction) {
            if (type === 'like') stat.likes = Math.max(0, stat.likes - 1);
            if (type === 'dislike') stat.dislikes = Math.max(0, stat.dislikes - 1);
            actionApplied = null;
        } else {
            // If it's a switch (switching from like to dislike or vice versa)
            if (previousAction) {
                if (previousAction === 'like') stat.likes = Math.max(0, stat.likes - 1);
                if (previousAction === 'dislike') stat.dislikes = Math.max(0, stat.dislikes - 1);
            }

            // Apply new action
            if (type === 'like') stat.likes += 1;
            if (type === 'dislike') stat.dislikes += 1;
        }

        await stat.save();
        res.json({ likes: stat.likes, dislikes: stat.dislikes, actionApplied });
    } catch (err) {
        console.error('Error handling reaction:', err);
        res.status(500).json({ error: 'Failed to update reaction' });
    }
});

// Comments
app.post('/api/comment', async (req, res) => {
    try {
        const { author, text } = req.body;
        if (!author || !text) return res.status(400).json({ error: 'Author and text required' });
        
        const newComment = await Comment.create({ author, text });
        
        res.json({
            id: newComment._id,
            author: newComment.author,
            text: newComment.text,
            timestamp: newComment.timestamp
        });
    } catch (err) {
        console.error('Error adding comment:', err);
        res.status(500).json({ error: 'Failed to add comment' });
    }
});

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Social Backend running at http://localhost:${PORT}`);
    });
}

module.exports = app;
