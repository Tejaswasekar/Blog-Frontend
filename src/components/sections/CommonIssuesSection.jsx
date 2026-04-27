import React from 'react';

export default function CommonIssuesSection() {
  return (
    <div className="space-y-6">
      <p>
        Despite the importance of maintaining accurate data, many educational institutions face several challenges related to data integrity. These issues often arise due to manual processes, lack of coordination between departments, and outdated information systems.
      </p>

      <div className="space-y-4 my-8">
        <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm flex gap-4">
          <div className="text-rose-500 mt-1">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
          </div>
          <div>
            <h3 className="font-sans font-bold text-slate-900 mb-1">Manual Data Entry Errors</h3>
            <p className="text-sm m-0">When data is entered manually into spreadsheets or databases, there is a high possibility of mistakes such as incorrect numbers, spelling errors, or misplaced values. For instance, a faculty member's research publication count might be recorded incorrectly due to human error.</p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm flex gap-4">
           <div className="text-rose-500 mt-1">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
          </div>
          <div>
            <h3 className="font-sans font-bold text-slate-900 mb-1">Duplicate Data Records</h3>
            <p className="text-sm m-0">Duplicate entries occur when the same information is stored multiple times in different systems without proper synchronization. For example, a student's record may exist in both the admission system and examination database but with slightly different details.</p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm flex gap-4">
           <div className="text-rose-500 mt-1">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>
          </div>
          <div>
            <h3 className="font-sans font-bold text-slate-900 mb-1">Data Inconsistency</h3>
            <p className="text-sm m-0">When multiple departments manage their own data separately, inconsistencies may occur between different records. A student's academic information recorded by the academic department may not match the data maintained by the examination department.</p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm flex gap-4">
           <div className="text-rose-500 mt-1">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
          <div>
            <h3 className="font-sans font-bold text-slate-900 mb-1">Outdated Information</h3>
            <p className="text-sm m-0">Institutional databases must be updated regularly. If faculty promotions, research publications, or infrastructure upgrades are not updated promptly, accreditation reports may include outdated data.</p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm flex gap-4">
           <div className="text-rose-500 mt-1">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
          </div>
          <div>
            <h3 className="font-sans font-bold text-slate-900 mb-1">Lack of Standardized Formats</h3>
            <p className="text-sm m-0">Different departments may store information using different formats or naming conventions. For example, one department may record dates as DD/MM/YYYY while another may use MM/DD/YYYY. Such inconsistencies make data analysis difficult.</p>
          </div>
        </div>
      </div>

      <p className="bg-slate-50 p-4 rounded-lg text-slate-700 italic border-l-4 border-slate-300">
        These issues can reduce the reliability of institutional data and complicate the accreditation process. Therefore, institutions must implement systematic methods to identify and correct data integrity problems.
      </p>
    </div>
  );
}
