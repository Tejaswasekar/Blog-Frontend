import React from 'react';

export default function KeyComponentsGovernanceSection() {
  return (
    <div className="space-y-6">
      <p className="text-lg mb-8">
        Effective data governance in educational institutions relies on several important components. These components work together to ensure that institutional data remains accurate, secure, and well-managed.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        <div className="border border-slate-200 rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
           <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
           </div>
           <h3 className="font-sans font-bold text-slate-900 text-lg mb-2">Data Policies & Standards</h3>
           <p className="text-slate-600 text-sm leading-relaxed">
             These policies define how data should be collected, stored, and maintained across the institution. Standardized formats and procedures help ensure consistency between different departments.
           </p>
        </div>

        <div className="border border-slate-200 rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
           <div className="bg-emerald-100 text-emerald-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
           </div>
           <h3 className="font-sans font-bold text-slate-900 text-lg mb-2">Data Quality Management</h3>
           <p className="text-slate-600 text-sm leading-relaxed">
             Involves monitoring and improving the accuracy, completeness, and reliability of institutional data. Institutions often implement data validation processes and regular audits to maintain high data quality.
           </p>
        </div>

        <div className="border border-slate-200 rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
           <div className="bg-purple-100 text-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>
           </div>
           <h3 className="font-sans font-bold text-slate-900 text-lg mb-2">Management Infrastructure</h3>
           <p className="text-slate-600 text-sm leading-relaxed">
             Institutions must use reliable systems such as student information systems, LMS, and research management platforms to store and manage data efficiently, integrating information into centralized databases.
           </p>
        </div>

        <div className="border border-slate-200 rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
           <div className="bg-rose-100 text-rose-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
           </div>
           <h3 className="font-sans font-bold text-slate-900 text-lg mb-2">Security & Access Control</h3>
           <p className="text-slate-600 text-sm leading-relaxed">
             Not all institutional data should be accessible to every user. Sensitive information must be protected through secure access mechanisms.
           </p>
        </div>
        
        <div className="border border-slate-200 rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow md:col-span-2">
           <div className="bg-amber-100 text-amber-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
           </div>
           <h3 className="font-sans font-bold text-slate-900 text-lg mb-2">Data Stewardship & Oversight</h3>
           <p className="text-slate-600 text-sm leading-relaxed">
             Institutions often appoint data stewards or administrators responsible for monitoring data quality and ensuring compliance with institutional policies.
           </p>
        </div>
      </div>

      <p className="mt-8 font-medium">
        Together, these components create a structured environment where institutional data can be managed effectively and securely.
      </p>
    </div>
  );
}
