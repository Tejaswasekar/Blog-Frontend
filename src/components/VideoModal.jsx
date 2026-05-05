import React, { useEffect } from 'react';

export default function VideoModal({ isOpen, onClose, videoUrl }) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
      {/* Backdrop with glassmorphism */}
      <div 
        className="absolute inset-0 bg-slate-900/80 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-5xl bg-black rounded-2xl shadow-2xl overflow-hidden flex flex-col transform transition-all scale-100 opacity-100 animate-in fade-in zoom-in-95 duration-300 border border-white/10">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-b from-black/80 to-transparent absolute top-0 w-full z-10 pointer-events-none">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-white/90 text-sm font-medium tracking-wide">Simulation Overview</span>
          </div>
          <button 
            onClick={onClose}
            className="pointer-events-auto w-8 h-8 flex items-center justify-center rounded-full bg-black/50 text-white/80 hover:bg-white/10 hover:text-white backdrop-blur-md transition-all active:scale-95"
            aria-label="Close video"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Video Container (16:9 Aspect Ratio) */}
        <div className="relative w-full pt-[56.25%] bg-slate-900">
          {videoUrl ? (
            <video 
              src={videoUrl} 
              className="absolute inset-0 w-full h-full object-cover"
              controls 
              autoPlay 
              playsInline
            >
              Your browser does not support the video tag.
            </video>
          ) : (
            // Placeholder if no video URL is provided yet
            <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-500">
              <svg className="w-16 h-16 mb-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <p className="text-lg font-medium text-slate-400">Video Simulation Ready</p>
              <p className="text-sm mt-2 max-w-md text-center">Please provide the video file or URL to embed it here.</p>
            </div>
          )}
        </div>
        
      </div>
    </div>
  );
}
