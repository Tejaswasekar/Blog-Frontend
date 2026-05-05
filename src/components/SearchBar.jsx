import React, { useState, useRef, useEffect, useCallback } from 'react';

// Search index: each entry maps to a page index in articleSections
const SEARCH_INDEX = [
  { label: 'Introduction to Data Integrity in Accreditation', keywords: ['introduction', 'data integrity', 'accreditation', 'overview'], pageIndex: 0 },
  { label: 'Importance of Data Governance in Educational Institutions', keywords: ['importance', 'data governance', 'educational', 'university', 'higher education'], pageIndex: 1 },
  { label: 'Overview of Accreditation Bodies', keywords: ['accreditation bodies', 'naac', 'nba', 'council', 'board'], pageIndex: 2 },
  { label: 'Challenges in Managing Institutional Data', keywords: ['challenges', 'managing', 'institutional data', 'problems', 'issues'], pageIndex: 3 },
  { label: 'Role of Digital Transformation in Accreditation', keywords: ['digital transformation', 'technology', 'digital', 'transformation'], pageIndex: 4 },
  { label: 'What is Data Integrity? Types and Principles', keywords: ['data integrity types', 'principles', 'entity integrity', 'referential', 'domain'], pageIndex: 5 },
  { label: 'Common Data Integrity Issues in Colleges', keywords: ['common issues', 'colleges', 'errors', 'duplicate', 'incomplete'], pageIndex: 6 },
  { label: 'Techniques to Ensure Data Accuracy', keywords: ['techniques', 'accuracy', 'ensure', 'methods', 'practices'], pageIndex: 7 },
  { label: 'Data Validation and Verification Methods', keywords: ['validation', 'verification', 'methods', 'checks', 'rules'], pageIndex: 8 },
  { label: 'Case Study: Data Failure in Accreditation', keywords: ['case study', 'failure', 'example', 'consequences', 'impact'], pageIndex: 9 },
  { label: 'Case Study: Ransomware Attack on UCSF (Detailed Explanation)', keywords: ['case study', 'ransomware', 'ucsf', 'attack', 'cybersecurity', 'breach'], pageIndex: 10 },
  { label: 'What is a Data Governance Framework?', keywords: ['governance framework', 'structure', 'policies', 'framework', 'system'], pageIndex: 11 },
  { label: 'Key Components of Institutional Data Governance', keywords: ['key components', 'quality management', 'standards', 'infrastructure', 'stewardship'], pageIndex: 12 },
  { label: 'Roles and Responsibilities in Data Governance', keywords: ['roles', 'responsibilities', 'data owner', 'data steward', 'leadership', 'it'], pageIndex: 13 },
  { label: 'Data Ownership and Accountability in Universities', keywords: ['ownership', 'accountability', 'responsible', 'university', 'department'], pageIndex: 14 },
  { label: 'Policy Design for Secure Data Governance', keywords: ['policy design', 'access control', 'retention', 'backup', 'classification', 'audit'], pageIndex: 15 },
  { label: 'Importance of Data Security in Accreditation', keywords: ['data security', 'security', 'breach', 'protection', 'confidentiality'], pageIndex: 16 },
  { label: 'Cybersecurity Threats in Educational Data Systems', keywords: ['cybersecurity', 'threats', 'hacking', 'phishing', 'malware', 'ransomware', 'insider'], pageIndex: 17 },
  { label: 'Role of Encryption in Protecting Institutional Data', keywords: ['encryption', 'decryption', 'at-rest', 'in-transit', 'secure', 'encoded'], pageIndex: 18 },
  { label: 'Compliance Standards for Educational Data Security', keywords: ['compliance', 'iso 27001', 'gdpr', 'it act', 'standards', 'regulations'], pageIndex: 19 },
  { label: 'Audit and Monitoring for Data Security', keywords: ['audit', 'monitoring', 'log management', 'vulnerability', 'assessment'], pageIndex: 20 },
  { label: 'Role of AI and Automation in Data Governance', keywords: ['ai', 'automation', 'artificial intelligence', 'predictive analytics', 'machine learning'], pageIndex: 21 },
  { label: 'Using Cloud Computing for Institutional Data Management', keywords: ['cloud computing', 'cloud', 'remote servers', 'backup', 'storage', 'saas'], pageIndex: 22 },
  { label: 'Database Management Systems for Accreditation Data', keywords: ['dbms', 'database', 'management system', 'sql', 'queries', 'tables'], pageIndex: 23 },
  { label: 'Blockchain for Secure Academic Records', keywords: ['blockchain', 'ledger', 'decentralized', 'immutable', 'certificates', 'tamper'], pageIndex: 24 },
  { label: 'Building a Secure Data Management System (Step-by-Step Guide)', keywords: ['step by step', 'guide', 'building', 'implementation', 'secure system'], pageIndex: 25 },
  { label: 'References & Further Reading', keywords: ['references', 'further reading', 'sources', 'bibliography', 'citations'], pageIndex: 26 },
];

function highlightMatch(text, query) {
  if (!query) return text;
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <mark className="bg-emerald-100 text-emerald-800 rounded px-0.5 not-italic font-semibold">
        {text.slice(idx, idx + query.length)}
      </mark>
      {text.slice(idx + query.length)}
    </>
  );
}

export default function SearchBar({ onNavigate }) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [activeIdx, setActiveIdx] = useState(-1);
  const inputRef = useRef(null);
  const containerRef = useRef(null);

  const getSuggestions = useCallback((q) => {
    if (!q.trim()) return [];
    const lower = q.toLowerCase();
    return SEARCH_INDEX.filter(item =>
      item.label.toLowerCase().includes(lower) ||
      item.keywords.some(k => k.includes(lower))
    ).slice(0, 6);
  }, []);

  useEffect(() => {
    const results = getSuggestions(query);
    setSuggestions(results);
    setActiveIdx(-1);
  }, [query, getSuggestions]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setQuery('');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navigate = (item) => {
    onNavigate(item.pageIndex);
    setQuery('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIdx(prev => Math.min(prev + 1, suggestions.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIdx(prev => Math.max(prev - 1, -1));
    } else if (e.key === 'Enter') {
      if (activeIdx >= 0 && suggestions[activeIdx]) {
        navigate(suggestions[activeIdx]);
      }
    } else if (e.key === 'Escape') {
      setQuery('');
    }
  };

  return (
    <div ref={containerRef} className="relative flex items-center">
      <div className="search-expand">
        <div className="relative flex items-center bg-white border border-gray-300 rounded-full shadow-sm px-4 py-1.5 gap-2 min-w-[280px] md:min-w-[360px] focus-within:border-emerald-500 focus-within:shadow-emerald-100 focus-within:shadow-lg transition-all">
          <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search topics..."
            className="flex-1 outline-none text-sm text-gray-800 placeholder-gray-400 bg-transparent"
          />
          {query && (
            <button onClick={() => setQuery('')} className="text-gray-400 hover:text-gray-600">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {/* Suggestions Dropdown */}
        {query && (
          <div className="search-dropdown absolute top-full right-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50" style={{minWidth: '360px', maxWidth: '420px'}}>
            {suggestions.length > 0 ? (
              <>
                <div className="px-4 py-2 border-b border-gray-50 flex items-center justify-between">
                  <span className="text-[11px] text-gray-400 font-medium uppercase tracking-wider">
                    {suggestions.length} result{suggestions.length !== 1 ? 's' : ''}
                  </span>
                  <span className="text-[11px] text-gray-400">↑↓ navigate · Enter to go</span>
                </div>
                <ul className="py-1 max-h-72 overflow-y-auto">
                  {suggestions.map((item, i) => (
                    <li
                      key={item.pageIndex}
                      onMouseDown={() => navigate(item)}
                      onMouseEnter={() => setActiveIdx(i)}
                      className={`px-4 py-3 cursor-pointer flex items-start gap-3 transition-colors ${
                        activeIdx === i ? 'bg-emerald-50' : 'hover:bg-slate-50'
                      }`}
                    >
                      <div className={`w-6 h-6 rounded flex items-center justify-center shrink-0 mt-0.5 text-[11px] font-bold font-sans ${
                        activeIdx === i ? 'bg-emerald-500 text-white' : 'bg-gray-100 text-gray-500'
                      }`}>
                        {item.pageIndex + 1}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-900 leading-snug m-0">
                          {highlightMatch(item.label, query)}
                        </p>
                        <p className="text-xs text-gray-400 mt-0.5 m-0">
                          Page {item.pageIndex + 1} of {SEARCH_INDEX.length}
                        </p>
                      </div>
                      <svg className={`w-4 h-4 ml-auto shrink-0 mt-1 ${activeIdx === i ? 'text-emerald-500' : 'text-gray-300'}`} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <div className="px-4 py-8 text-center text-gray-400 text-sm">
                <svg className="w-10 h-10 mx-auto mb-3 text-gray-200" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                No results for "<strong className="text-gray-600">{query}</strong>"
              </div>
            )}

            {/* Quick access footer */}
            <div className="border-t border-gray-50 px-4 py-3 bg-gray-50">
              <p className="text-[11px] text-gray-400 mb-2 uppercase tracking-wider font-medium">Quick Access</p>
              <div className="flex flex-wrap gap-1.5">
                {['Data Security', 'AI', 'Blockchain', 'Governance', 'DBMS'].map(shortcut => (
                  <button
                    key={shortcut}
                    onMouseDown={() => setQuery(shortcut)}
                    className="text-[11px] px-2.5 py-1 bg-white border border-gray-200 rounded-full text-gray-600 hover:border-emerald-400 hover:text-emerald-600 transition-colors"
                  >
                    {shortcut}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
