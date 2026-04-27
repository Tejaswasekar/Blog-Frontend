import React, { useState, useEffect } from 'react';

const API_BASE = 'https://blog-backend-sepia-theta.vercel.app/api';

export default function CommentSection() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetch(`${API_BASE}/stats`)
      .then(res => res.json())
      .then(data => setComments(data.comments || []))
      .catch(err => console.error('Fetch comments failed:', err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newComment.trim() || !authorName.trim()) return;

    setIsSubmitting(true);
    fetch(`${API_BASE}/comment`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ author: authorName, text: newComment })
    })
    .then(res => res.json())
    .then(comment => {
      setComments(prev => [comment, ...prev]);
      setNewComment('');
      setIsSubmitting(false);
    })
    .catch(err => {
      console.error('Post comment failed:', err);
      setIsSubmitting(false);
    });
  };

  // Deterministic color generator for avatars
  const getAvatarColor = (name) => {
    const colors = [
      'bg-emerald-500', 'bg-indigo-500', 'bg-rose-500', 'bg-amber-500', 
      'bg-sky-500', 'bg-violet-500', 'bg-teal-500', 'bg-orange-500'
    ];
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
  };

  return (
    <div className="relative mt-20 group/section transition-transform duration-1000">
      {/* Pastel Bloom Backgrounds (Static behind glass) */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-emerald-200/30 rounded-full blur-[120px] mix-blend-multiply transition-all duration-1000 group-hover/section:-translate-x-10 group-hover/section:-translate-y-10 group-hover/section:bg-emerald-300/40"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-violet-100/20 rounded-full blur-[150px] mix-blend-multiply"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-sky-200/30 rounded-full blur-[120px] mix-blend-multiply transition-all duration-1000 group-hover/section:translate-x-10 group-hover/section:translate-y-10 group-hover/section:bg-sky-300/40"></div>

      <div id="comments-section" className="relative bg-white/60 backdrop-blur-[40px] rounded-[3rem] p-10 md:p-16 border border-white/80 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] shadow-inner group/main transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] hover:-translate-y-1">
        
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
            <h3 className="text-4xl font-serif font-black text-slate-900 tracking-tight">
              Reflections
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="mb-20 bg-white/40 backdrop-blur-md rounded-[2rem] p-8 md:p-10 border border-white/60 shadow-xl shadow-slate-200/10 flex flex-col gap-8 transition-all duration-500 hover:bg-white/60">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1 relative group">
                <input 
                  type="text" 
                  placeholder="Your Name"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  className="w-full px-6 py-4 rounded-2xl border border-white/80 outline-none focus:border-emerald-400 focus:bg-white/80 bg-white/20 transition-all font-sans font-bold text-slate-800 shadow-sm"
                  required
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 opacity-0 group-focus-within:opacity-100 transition-opacity">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                </div>
              </div>
            </div>

            <div className="relative group">
              <textarea 
                placeholder="Share your perspective..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="w-full px-8 py-6 rounded-3xl border border-white/80 outline-none focus:border-emerald-400 focus:bg-white/80 bg-white/20 transition-all font-serif italic text-slate-700 text-xl font-medium resize-none h-40 shadow-sm scrollbar-hide"
                required
              />
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className="group/btn relative self-end overflow-hidden px-14 py-5 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-[11px] transition-all duration-500 hover:shadow-[0_20px_40px_-10px_rgba(16,185,129,0.3)] hover:scale-105 active:scale-95 disabled:opacity-50"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
              
              {/* Shimmer Effect */}
              <div className="absolute inset-0 translate-x-[-100%] group-hover/btn:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

              <span className="relative z-10 flex items-center gap-3">
                {isSubmitting ? 'Synthesizing...' : 'Publish Insight'}
                <div className="relative w-4 h-4 overflow-hidden">
                  <svg className="absolute inset-0 w-4 h-4 group-hover/btn:translate-x-6 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                  <svg className="absolute inset-0 w-4 h-4 -translate-x-6 group-hover/btn:translate-x-0 transition-transform duration-500 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </span>
            </button>
          </form>

          <div className="space-y-14">
            {comments.length > 0 ? (
              comments.map((c, idx) => (
                <div key={c.id} className="flex gap-10 group/card slide-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <div className={`w-20 h-20 rounded-3xl ${getAvatarColor(c.author)} flex items-center justify-center text-white text-3xl font-black shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] shadow-current/20 shrink-0 transform group-hover/card:rotate-6 group-hover/card:scale-105 transition-all duration-700 border-4 border-white/40 backdrop-blur-sm`}>
                    {c.author[0].toUpperCase()}
                  </div>
                  <div className="flex-1 pb-14 border-b border-slate-200/30 last:border-0 relative">
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex flex-col">
                        <span className="font-serif font-black text-2xl text-slate-900 group-hover/card:text-emerald-600 transition-colors tracking-tight">{c.author}</span>
                        <span className="text-[11px] font-black text-slate-400 uppercase tracking-[0.3em] mt-2 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                          {new Date(c.timestamp).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })}
                        </span>
                      </div>
                      <div className="text-[10px] bg-slate-100/50 text-slate-500 px-4 py-2 rounded-xl border border-white/80 font-mono font-black group-hover/card:bg-emerald-50 group-hover/card:text-emerald-700 group-hover/card:border-emerald-100 transition-all shadow-sm">
                        REF_{c.id?.toString().slice(-4) || 'NULL'}
                      </div>
                    </div>
                    <p className="text-slate-700 text-xl leading-relaxed font-serif italic opacity-90 group-hover/card:opacity-100 transition-opacity">
                      "{c.text}"
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-28 bg-white/20 rounded-[3rem] border-4 border-dashed border-white/60 backdrop-blur-sm">
                 <div className="w-24 h-24 bg-emerald-100/50 rounded-full flex items-center justify-center mx-auto mb-8 text-emerald-600 shadow-xl shadow-emerald-200/20 border-2 border-white/80">
                   <svg className="w-10 h-10 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                   </svg>
                 </div>
                 <p className="text-slate-800 font-serif font-black text-2xl mb-3 tracking-tight italic">Waiting for your reflection...</p>
                 <p className="text-slate-500 font-sans font-bold uppercase tracking-widest text-[11px]">be the first to weave wisdom into this discussion</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
