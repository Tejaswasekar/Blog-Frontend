import React from 'react';

export default function RoleOfAIAutomationSection() {
  return (
    <div className="space-y-6">
      
      <p className="text-lg text-slate-700 leading-relaxed font-medium">
        The rapid growth of digital technologies has significantly transformed the way educational institutions manage their data. Artificial Intelligence (AI) and automation are increasingly being used to improve data governance processes and ensure efficient management of institutional data.
      </p>

      <div className="flex gap-4 p-5 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-lg my-8">
        <div className="text-blue-500 shrink-0">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
        </div>
        <div>
          <p className="text-slate-700 text-sm m-0 leading-relaxed">
            AI refers to computer systems that can perform tasks that normally require human intelligence. These systems can analyze large amounts of data, identify patterns, and make predictions based on available information. In the context of institutional data governance, AI can help institutions manage large datasets more effectively and reduce the chances of human error.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
           <div className="text-indigo-600 mb-4 bg-indigo-50 w-12 h-12 flex items-center justify-center rounded-lg group-hover:bg-indigo-600 group-hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
           </div>
           <h3 className="font-sans font-bold text-slate-900 text-lg mb-2">Automated Data Analysis</h3>
           <p className="text-slate-600 text-sm leading-relaxed m-0">
             Universities generate large volumes of data related to student performance, faculty activities, research outputs, and administrative operations. AI tools can analyze this data to identify trends and insights that may support institutional decision-making.
           </p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
           <div className="text-blue-600 mb-4 bg-blue-50 w-12 h-12 flex items-center justify-center rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
           </div>
           <h3 className="font-sans font-bold text-slate-900 text-lg mb-2">Syncing & Manual Task Reduction</h3>
           <p className="text-slate-600 text-sm leading-relaxed m-0">
             Instead of entering the same information multiple times across different systems, automated systems can synchronize data between platforms. For example, when a student's info is entered into admission, it can automatically appear in the examination and LMS systems.
           </p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
           <div className="text-emerald-600 mb-4 bg-emerald-50 w-12 h-12 flex items-center justify-center rounded-lg group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
           </div>
           <h3 className="font-sans font-bold text-slate-900 text-lg mb-2">Validation & Error Detection</h3>
           <p className="text-slate-600 text-sm leading-relaxed m-0">
             Automated systems can identify inconsistencies, duplicate entries, or missing information in databases. These systems can notify administrators about potential errors so that they can be corrected quickly.
           </p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
           <div className="text-purple-600 mb-4 bg-purple-50 w-12 h-12 flex items-center justify-center rounded-lg group-hover:bg-purple-600 group-hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
           </div>
           <h3 className="font-sans font-bold text-slate-900 text-lg mb-2">Predictive Analytics</h3>
           <p className="text-slate-600 text-sm leading-relaxed m-0">
             AI-powered analytics tools can support accreditation preparation. Institutions can use predictive analytics to evaluate their performance indicators and identify areas that require improvement before accreditation reviews.
           </p>
        </div>
      </div>

      <p className="leading-relaxed font-medium mt-8 text-slate-900">
        By integrating AI and automation into their data governance frameworks, educational institutions can improve efficiency, maintain accurate records, and enhance the reliability of their accreditation data.
      </p>
    </div>
  );
}
