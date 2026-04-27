import React, { useState, useEffect } from 'react';

const API_BASE = '/api';

export default function SocialInteraction({ mode = 'original' }) {
  const [stats, setStats] = useState({ visits: 0, likes: 0, dislikes: 0, comments: [] });
  const [userAction, setUserAction] = useState(null); // 'like', 'dislike' or null
  const [showShareToast, setShowShareToast] = useState(false);

  useEffect(() => {
    // Increment visit once per session
    const hasVisited = sessionStorage.getItem('hasVisited');
    if (!hasVisited) {
      fetch(`${API_BASE}/visit`, { method: 'POST' })
        .then(res => res.json())
        .then(data => {
          setStats(prev => ({ ...prev, visits: data.visits }));
          sessionStorage.setItem('hasVisited', 'true');
        })
        .catch(err => console.error('Visit increment failed:', err));
    }

    // Fetch initial stats
    fetch(`${API_BASE}/stats`)
      .then(res => res.json())
      .then(data => setStats(data))
      .catch(err => console.error('Fetch stats failed:', err));
  }, []);

  const handleReaction = (type) => {
    const previous = userAction;
    let nextAction = type;

    // Determine next state
    if (type === previous) {
      nextAction = null; // Toggle off
    }

    // Optimistic Update
    setStats(prev => {
      const newStats = { ...prev };

      // Undo previous if it existed
      if (previous === 'like') newStats.likes = Math.max(0, newStats.likes - 1);
      if (previous === 'dislike') newStats.dislikes = Math.max(0, newStats.dislikes - 1);

      // Apply new if not undoing
      if (nextAction === 'like') newStats.likes += 1;
      if (nextAction === 'dislike') newStats.dislikes += 1;

      return newStats;
    });
    setUserAction(nextAction);

    fetch(`${API_BASE}/react`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type, previousAction: previous })
    })
      .then(res => res.json())
      .then(data => {
        // Sync with server (handles actionApplied as well)
        setStats(prev => ({ ...prev, likes: data.likes, dislikes: data.dislikes }));
        setUserAction(data.actionApplied !== undefined ? data.actionApplied : nextAction);
      })
      .catch(err => {
        console.error('Reaction failed:', err);
        // Revert completely on failure
        setStats(prev => {
          const reverted = { ...prev };
          // Re-apply previous if it was there
          if (previous === 'like') reverted.likes += 1;
          if (previous === 'dislike') reverted.dislikes += 1;
          // Remove what we tried to apply
          if (nextAction === 'like') reverted.likes = Math.max(0, reverted.likes - 1);
          if (nextAction === 'dislike') reverted.dislikes = Math.max(0, reverted.dislikes - 1);
          return reverted;
        });
        setUserAction(previous);
      });
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setShowShareToast(true);
      setTimeout(() => setShowShareToast(false), 2000);
    });
  };

  const scrollToComments = () => {
    document.getElementById('comments-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const isCompact = mode === 'compact';

  return (
    <div className={`flex items-center justify-between transition-all duration-500 relative ${isCompact ? '' : 'py-6 border-y border-gray-100 mb-10 px-6 bg-gray-50/20 rounded-2xl'}`}>

      {/* Share Toast */}
      {showShareToast && (
        <div className="absolute -top-12 right-0 bg-gray-900/90 backdrop-blur-sm text-white text-[12px] font-semibold py-1.5 px-3 rounded-lg shadow-xl animate-bounce-subtle pointer-events-none z-10">
          URL Copied!
        </div>
      )}

      <div className="flex items-center gap-10">
        <div className="flex items-center gap-6">
          {/* Like */}
          <button
            onClick={() => handleReaction('like')}
            className={`flex items-center gap-2.5 transition-all duration-300 group
              ${userAction === 'like' ? 'text-emerald-600' : 'text-gray-500 hover:text-emerald-600'}`}
          >
            <div className={`p-2.5 rounded-full transition-all duration-300 transform group-hover:scale-110 group-active:scale-95 shadow-sm border border-transparent
              ${userAction === 'like' ? 'bg-emerald-100/80 shadow-emerald-200/50 border-emerald-200' : 'bg-white group-hover:bg-emerald-50 group-hover:shadow-emerald-100 group-hover:border-emerald-100'}`}>
              <svg className={`w-6 h-6 transition-transform duration-300 ${userAction === 'like' ? 'fill-current scale-110' : 'group-hover:rotate-6'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10h4.708c.954 0 1.76.711 1.88 1.653l1.112 8.513c.159 1.213-.775 2.334-1.992 2.334H8a2 2 0 01-2-2V9.303m3.31-.433L12 4c.477-.477 1.254-.47 1.722.02l.536.559a3.3 3.3 0 01.834 3.19l-.514 1.731" />
              </svg>
            </div>
            <span className="text-[15px] font-sans font-bold tracking-tight">{stats.likes}</span>
          </button>

          {/* Dislike */}
          <button
            onClick={() => handleReaction('dislike')}
            className={`flex items-center gap-2.5 transition-all duration-300 group
              ${userAction === 'dislike' ? 'text-rose-600' : 'text-gray-500 hover:text-rose-600'}`}
          >
            <div className={`p-2.5 rounded-full transition-all duration-300 transform group-hover:scale-110 group-active:scale-95 shadow-sm border border-transparent
              ${userAction === 'dislike' ? 'bg-rose-100/80 shadow-rose-200/50 border-rose-200' : 'bg-white group-hover:bg-rose-50 group-hover:shadow-rose-100 group-hover:border-rose-100'}`}>
              <svg className={`w-6 h-6 transition-transform duration-300 ${userAction === 'dislike' ? 'fill-current scale-110' : 'group-hover:-rotate-6'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 14H5.292c-.954 0-1.76-.711-1.88-1.653L2.3 3.834C2.141 2.621 3.075 1.5 4.292 1.5H16a2 2 0 012 2V14.697m-3.31.433L12 20c-.477.477-1.254.47-1.722-.02l-.536-.559a3.3 3.3 0 01-.834-3.19l.514-1.731" />
              </svg>
            </div>
            <span className="text-[15px] font-sans font-bold tracking-tight">{stats.dislikes}</span>
          </button>

          {/* Comments */}
          <button
            onClick={scrollToComments}
            className="flex items-center gap-2.5 text-gray-500 cursor-pointer group hover:text-indigo-600 transition-all duration-300"
          >
            <div className="p-2.5 rounded-full bg-white group-hover:bg-indigo-50 group-hover:scale-110 transition-all duration-300 shadow-sm border border-transparent group-hover:border-indigo-100 group-hover:shadow-indigo-100">
              <svg className="w-6 h-6 transition-transform duration-300 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <span className="text-[15px] font-sans font-bold tracking-tight">{stats.comments?.length || 0}</span>
          </button>
        </div>
      </div>

      <div className="flex items-center gap-10">
        {/* Views */}
        <div className="flex items-center gap-2.5 text-gray-500 cursor-default group hover:text-emerald-600 transition-all duration-300">
          <div className="p-2.5 rounded-full bg-white group-hover:bg-emerald-50 group-hover:scale-110 transition-all duration-300 shadow-sm border border-transparent group-hover:border-emerald-100 group-hover:shadow-emerald-100">
            <svg className="w-6 h-6 transition-transform duration-300 group-hover:rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
          <span className="text-[15px] font-sans font-bold tracking-tight">{stats.visits.toLocaleString()}</span>
        </div>

        {/* Share */}
        <div className="flex gap-2.5">
          <button
            onClick={handleShare}
            className="p-2.5 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-full transition-all duration-300 transform hover:scale-110 active:scale-95 shadow-sm bg-white hover:shadow-emerald-100 border border-transparent hover:border-emerald-100" title="Share"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
