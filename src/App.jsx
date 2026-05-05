import React, { useState, useEffect, useRef } from 'react';
import { articleSections, topics } from './data/articleContent';
import SearchBar from './components/SearchBar';
import CommentSection from './components/CommentSection';
import SocialInteraction from './components/SocialInteraction';

function App() {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [hoveredProgressItem, setHoveredProgressItem] = useState(null);
  const pillRefs = useRef([]);
  const pillContainerRef = useRef(null);

  const totalPages = articleSections.length;
  const currentSection = articleSections[currentPageIndex];

  // Reading progress bar — page-level + scroll-within-page combined
  const updateProgressBar = (pageIdx, scrollFrac) => {
    const bar = document.getElementById('reading-progress');
    if (!bar) return;
    // (pageIdx+1) so page 1 already shows some progress, not 0%
    const pageBase = (pageIdx + 1) / totalPages;
    const pageSlice = (1 / totalPages) * scrollFrac;
    bar.style.width = `${Math.min((pageBase + pageSlice) * 100, 100)}%`;
  };

  // Jump bar to current page's base position whenever page changes
  useEffect(() => {
    updateProgressBar(currentPageIndex, 0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPageIndex]);

  // Animate bar as user scrolls within the current page + Back to Top visibility
  useEffect(() => {
    const onScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollFrac = docHeight > 0 ? window.scrollY / docHeight : 0;
      updateProgressBar(currentPageIndex, scrollFrac);
      
      // Show back to top after 400px
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPageIndex]);

  // Auto-scroll the topic pill bar so the active pill stays centred in view
  useEffect(() => {
    const activePill = pillRefs.current[currentPageIndex];
    if (activePill) {
      activePill.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }, [currentPageIndex]);

  const handlePageChange = (newIndex) => {
    if (newIndex >= 0 && newIndex < totalPages && newIndex !== currentPageIndex) {
      setIsFading(true);
      setTimeout(() => {
        setCurrentPageIndex(newIndex);
        setIsFading(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 300);
    }
  };

  const handleProgressMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const frac = x / rect.width;
    const targetIdx = Math.floor(frac * totalPages);
    const safeIdx = Math.min(Math.max(0, targetIdx), totalPages - 1);
    setHoveredProgressItem({
      title: articleSections[safeIdx].title,
      left: x
    });
  };

  const handleProgressClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const frac = x / rect.width;
    const targetIdx = Math.floor(frac * totalPages);
    handlePageChange(Math.min(targetIdx, totalPages - 1));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollPills = (direction) => {
    if (pillContainerRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      pillContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      {/* Interactive Reading Progress Track */}
      <div 
        id="reading-progress-track" 
        onClick={handleProgressClick}
        onMouseMove={handleProgressMouseMove}
        onMouseLeave={() => setHoveredProgressItem(null)}
        className="cursor-pointer group h-[8px] hover:h-[12px] transition-all relative overflow-visible"
      >
        <div id="reading-progress"></div>
        {/* Dynamic Tooltip on hover */}
        {hoveredProgressItem && (
          <div 
            className="absolute top-full bg-slate-900 text-white text-[10px] px-2 py-1 rounded shadow-xl pointer-events-none whitespace-nowrap mt-2 z-[10000] -translate-x-1/2 before:content-[''] before:absolute before:bottom-full before:left-1/2 before:-translate-x-1/2 before:border-4 before:border-transparent before:border-b-slate-900"
            style={{ left: `${hoveredProgressItem.left}px` }}
          >
            {hoveredProgressItem.title}
          </div>
        )}
      </div>
      
      {/* Top Header */}
      <header className="w-full flex justify-center py-4 px-6 border-b border-gray-100 sticky top-0 z-[60] bg-white">
        <div className="w-full max-w-[1200px] flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="font-serif font-bold text-2xl tracking-tight text-slate-900 ml-1">EG Insights</span>
          </div>

          {/* Nav Links - Center (hidden on mobile) */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#" className="nav-link hover:text-black">Explore</a>
            <a href="#" className="nav-link hover:text-black">Stories</a>
            <a href="#" className="nav-link hover:text-black">Topics</a>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <SearchBar onNavigate={(idx) => handlePageChange(idx)} />
            <button className="bg-[#292929] hover:bg-black text-white px-5 py-2 rounded-md font-medium text-sm transition-colors">
              Subscribe
            </button>
          </div>

        </div>
      </header>

      {/* Hero Section (Title & Author) */}
      <section className="w-full flex justify-center pt-16 pb-12 px-6">
        <div className="w-full max-w-[1200px] flex flex-col items-center text-center">
          <h1 className="text-[44px] md:text-[56px] leading-[1.1] font-serif font-black text-slate-900 tracking-tight max-w-[950px] mb-12">
            Ensuring Data Integrity: The Foundation of Reliable Insights in the Digital Age
          </h1>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-4 md:gap-x-12 mt-4 justify-items-center w-full max-w-[1000px]">
            {[
              "Tejas Wasekar", "Shubham Tambe", 
              "Aniket Thenge", "Siddharth Vaskar", "Shashank Daga"
            ].map((name, i) => (
              <div key={name} className="flex items-center gap-4 px-5 py-3 rounded-2xl transition-all duration-500 hover:bg-white/80 hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.06)] hover:backdrop-blur-lg group border border-transparent hover:border-white/90 w-full max-w-[240px]">
                <div className="relative shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gray-100 overflow-hidden ring-4 ring-white shadow-md group-hover:shadow-2xl group-hover:ring-emerald-50 transition-all duration-700">
                    <div className={`w-full h-full flex items-end justify-center pt-2 ${
                      ['bg-amber-100', 'bg-blue-100', 'bg-emerald-100', 'bg-rose-100', 'bg-indigo-100', 'bg-slate-100'][i % 6]
                    }`}>
                      <div className={`w-8 h-8 rounded-t-full opacity-80 ${
                        ['bg-amber-800', 'bg-blue-800', 'bg-emerald-800', 'bg-rose-800', 'bg-indigo-800', 'bg-slate-800'][i % 6]
                      }`}></div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col text-left overflow-hidden">
                  <div className="font-sans font-black text-[14px] text-slate-900 group-hover:text-emerald-700 transition-colors tracking-tight uppercase">
                    {name}
                  </div>
                  <div className="text-[10px] text-slate-400 font-sans font-black uppercase tracking-widest opacity-80">
                    V.I.T. Scholar
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mt-12 border-t border-slate-100 pt-8 w-full max-w-[850px] group/meta">
            <div className="flex items-center gap-4 text-[13px] text-slate-400 font-sans font-black uppercase tracking-[0.2em]">
              <span>March 15, 2026</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-200"></span>
              <span className="flex items-center gap-2 text-emerald-600/80">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                15 Min Read
              </span>
            </div>
            <div className="w-full md:w-auto transform transition-all duration-500 group-hover/meta:translate-x-[-4px]">
              <SocialInteraction mode="compact" />
            </div>
          </div>
        </div>
      </section>

      {/* Full Width Topic Pill Bar - Glass Navigator */}
      <div className="w-full bg-white/40 backdrop-blur-2xl py-4 border-y border-white/40 flex justify-center px-6 sticky top-[73px] z-50 group/bar transition-all duration-500 shadow-sm">
        <div className="w-full max-w-[1200px] flex items-center relative">
          
          {/* Scroll Fade Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white/40 to-transparent z-10 pointer-events-none transition-opacity duration-500 group-hover/bar:from-white/60"></div>
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white/40 to-transparent z-10 pointer-events-none transition-opacity duration-500 group-hover/bar:from-white/60"></div>

          {/* Scroll Left Button */}
          <button 
            onClick={() => scrollPills('left')}
            className="absolute -left-12 z-20 p-2.5 bg-white/60 backdrop-blur-xl rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/80 text-slate-400 hover:text-emerald-600 hover:bg-white transition-all scale-90 hover:scale-100 opacity-0 group-hover/bar:opacity-100 hidden md:flex items-center justify-center transform active:scale-90"
            aria-label="Scroll topics left"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3.5 h-3.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          <div 
            ref={pillContainerRef}
            className="w-full flex items-center gap-4 overflow-x-auto no-scrollbar scroll-smooth py-1"
          >
            {topics.map((topic, index) => (
              <button 
                key={topic}
                ref={el => pillRefs.current[index] = el}
                onClick={() => handlePageChange(index)}
                className={`whitespace-nowrap rounded-full px-6 py-2 text-[13px] font-sans font-black uppercase tracking-widest transition-all duration-500 border-2
                  ${index === currentPageIndex
                    ? 'bg-slate-900 text-white border-slate-900 shadow-[0_15px_30px_-10px_rgba(15,23,42,0.3)] scale-105' 
                    : 'bg-white/40 text-slate-400 border-white/60 hover:border-emerald-500/30 hover:text-emerald-700 hover:bg-white/80 hover:translate-y-[-2px] hover:shadow-lg hover:shadow-slate-200/50'}`}
              >
                {topic}
              </button>
            ))}
          </div>

          {/* Scroll Right Button */}
          <button 
            onClick={() => scrollPills('right')}
            className="absolute -right-12 z-20 p-2.5 bg-white/60 backdrop-blur-xl rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/80 text-slate-400 hover:text-emerald-600 hover:bg-white transition-all scale-90 hover:scale-100 opacity-0 group-hover/bar:opacity-100 hidden md:flex items-center justify-center transform active:scale-90"
            aria-label="Scroll topics right"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3.5 h-3.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>

      {/* Two Column Main Content Layout */}
      <main className="w-full flex justify-center px-6 py-12">
        <div className="w-full max-w-[1200px] flex flex-col lg:flex-row gap-16">
          
          {/* Left Column: Article Body */}
          <article className="lg:w-[68%] flex-shrink-0">
            <div 
              key={currentPageIndex}
              className="font-serif text-[19px] leading-[1.75] text-gray-800 min-h-[400px] text-justify slide-up"
            >
               {currentPageIndex !== 0 && (
                 <h2 className="text-[28px] font-serif font-bold text-slate-900 mt-2 mb-6 tracking-tight">
                   {currentSection.title}
                 </h2>
               )}
               {currentSection.content}
            </div>

            {/* Persistence-based Social Interactions */}

            {/* Pagination Implementation below content */}
            <div className="flex items-center justify-between mt-16 pt-8 border-t border-gray-200 font-sans">
              <button 
                className={`flex items-center gap-2 px-5 py-2 rounded-full font-medium text-sm transition-all border
                  ${currentPageIndex === 0 
                    ? 'border-transparent text-gray-300 cursor-not-allowed hidden sm:flex' 
                    : 'border-gray-300 text-gray-700 hover:border-gray-400'}`}
                onClick={() => handlePageChange(currentPageIndex - 1)}
                disabled={currentPageIndex === 0}
              >
                <span className="text-lg leading-none mb-0.5">&lsaquo;</span> PREVIOUS
              </button>
              
              <div className="flex-1 text-center">
                <div className="text-[13px] font-semibold text-gray-400 uppercase tracking-widest">
                  Page {currentPageIndex + 1} of {totalPages}
                </div>
              </div>
              
              <button 
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-medium text-sm transition-all border tracking-wide btn-shimmer
                  ${currentPageIndex === totalPages - 1 
                    ? 'border-transparent text-gray-300 cursor-not-allowed hidden sm:flex' 
                    : 'border-[#0f5c40] bg-[#0f5c40] text-white hover:bg-[#0a4530]'}`}
                onClick={() => handlePageChange(currentPageIndex + 1)}
                disabled={currentPageIndex === totalPages - 1}
              >
                NEXT TOPIC <span className="text-lg leading-none mb-0.5">&rsaquo;</span>
              </button>
            </div>
          </article>


          {/* Right Column: Sidebar */}
          <aside className="lg:w-[32%] hidden lg:block border-l border-gray-100 pl-10">
            
            {/* Popular Posts */}
            <div className="mb-12">
              <h3 className="font-sans font-bold text-slate-900 text-base mb-6">Popular posts</h3>
              <div className="space-y-6">
                
                <div className="flex gap-4 group cursor-pointer popular-post">
                  <div className="w-16 h-16 rounded-md bg-slate-800 flex-shrink-0 overflow-hidden relative thumbnail-wrap">
                     <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400 via-slate-800 to-black"></div>
                     <svg className="w-6 h-6 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                  </div>
                  <h4 className="font-sans font-bold text-[14px] leading-snug text-slate-900 group-hover:text-amber-700 transition-colors">
                    Ensuring Data Integrity: The Foundation of Reliable Insights in the Digital Age
                  </h4>
                </div>

                <div className="flex gap-4 group cursor-pointer popular-post">
                  <div className="w-16 h-16 rounded-md bg-slate-800 flex-shrink-0 overflow-hidden relative thumbnail-wrap">
                     <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400 via-slate-800 to-black"></div>
                     <svg className="w-6 h-6 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                  </div>
                  <h4 className="font-sans font-bold text-[14px] leading-snug text-slate-900 group-hover:text-amber-700 transition-colors">
                    Reneans Data analvose Secured Rellable insights in the Digital Age
                  </h4>
                </div>

              </div>
            </div>

            {/* Recent Topics Cloud */}
            <div className="mb-12">
              <h3 className="font-sans font-bold text-slate-900 text-base mb-5">Recent topics</h3>
              <div className="flex flex-wrap gap-2">
                {['Data Integrity', 'Analytics', 'Technology', 'AI & ML', 'Governance', 'Security', 'Strategy', 'Innovation'].map(tag => (
                  <span key={tag} className="topic-tag bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Sub Footer inside Sidebar */}
            <div className="pt-8 border-t border-gray-100">
               <div className="font-serif font-bold text-xl tracking-tight text-slate-900 mb-4">EG Insights</div>
               <div className="flex flex-wrap gap-x-4 gap-y-2 text-[13px] text-gray-500 mb-6">
                 <a href="#" className="hover:text-black">Links</a>
                 <a href="#" className="hover:text-black">Stories</a>
                 <a href="#" className="hover:text-black">Topics</a>
                 <a href="#" className="hover:text-black">Rnager</a>
                 <a href="#" className="hover:text-black">Contact</a>
                 <a href="#" className="hover:text-black">Pnvam</a>
               </div>
               <div className="text-[12px] text-gray-400">© Copyright Insights</div>
            </div>
            
          </aside>
        </div>
      </main>

      {/* Comments Section */}
      <section className="w-full flex justify-center px-6 mt-12">
        <div className="w-full max-w-[800px]">
          <CommentSection />
        </div>
      </section>

      {/* Global Brand Footer */}
      <footer className="w-full bg-[#0a0a0a] pt-20 pb-10 px-6 mt-20 relative overflow-hidden border-t border-emerald-900/30">
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-600/10 rounded-full mix-blend-screen filter blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full mix-blend-screen filter blur-[120px] pointer-events-none"></div>

        <div className="w-full max-w-[1200px] mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
            {/* Brand Section */}
            <div className="md:col-span-12 lg:col-span-5">
              <div className="group cursor-default mb-6">
                <span className="text-3xl font-serif font-black tracking-tighter text-white inline-flex items-center gap-2 group-hover:text-emerald-400 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white text-base">EG</div>
                  EG Insights
                </span>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md mb-8">
                Unlocking institutional excellence through data integrity, governance, and advanced analytics in the digital age.
              </p>
              <div className="flex gap-4">
                {['twitter', 'linkedin', 'github', 'youtube'].map((social) => (
                  <a key={social} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all transform hover:-translate-y-1">
                    <span className="sr-only">{social}</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      {social === 'twitter' && <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>}
                      {social === 'linkedin' && <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>}
                      {social === 'github' && <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>}
                      {social === 'youtube' && <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>}
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-4 lg:col-span-2 lg:col-start-7">
              <h4 className="text-white font-sans font-bold mb-6">Discovery</h4>
              <ul className="space-y-4">
                {['Home', 'Latest Insights', 'Data Security', 'AI Analytics', 'Case Studies'].map(item => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-4 lg:col-span-2">
              <h4 className="text-white font-sans font-bold mb-6">Company</h4>
              <ul className="space-y-4">
                {['About Us', 'Contact Team', 'Careers', 'Privacy Policy', 'Terms of Service'].map(item => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-4 lg:col-span-3">
              <h4 className="text-white font-sans font-bold mb-6">Stay Updated</h4>
              <div className="relative group">
                <input 
                  type="email" 
                  placeholder="name@email.com" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white text-sm focus:outline-none focus:border-emerald-500/50 transition-colors"
                />
                <button className="mt-4 w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg shadow-emerald-900/20 active:scale-95">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 text-[12px] text-gray-500">
            <div className="mb-4 md:mb-0">
              © 2026 EG Insights. Built with passion for Institutional Growth.
            </div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
              <a href="#" className="hover:text-white transition-colors">Accessibility</a>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[70] bg-emerald-600 hover:bg-emerald-700 text-white p-3 rounded-full shadow-2xl transition-all hover:scale-110 active:scale-95 group"
          aria-label="Back to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 transition-transform group-hover:-translate-y-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
          </svg>
        </button>
      )}

    </div>
  );
}

export default App;
