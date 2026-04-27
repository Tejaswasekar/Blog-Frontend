import React from 'react';

export default function DataGovernanceFrameworkSection() {
  return (
    <div className="space-y-6">
      
      <p className="text-lg text-slate-700 leading-relaxed font-medium">
        A data governance framework refers to a structured system of policies, rules, responsibilities, and procedures that guide how data is collected, stored, managed, and used within an organization. In higher education institutions, data governance ensures that institutional data remains accurate, secure, and accessible to authorized users.
      </p>
      
      <p className="leading-relaxed">
        Universities generate large volumes of data every day. This includes student enrollment records, faculty information, research publications, examination results, infrastructure data, and administrative records. If this data is not properly organized and controlled, it can lead to confusion, errors, and unreliable reporting.
      </p>

      <div className="my-8 relative rounded-xl overflow-hidden shadow-lg border border-slate-200">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 z-0"></div>
        <div className="relative z-10 p-8 flex flex-col md:flex-row items-center gap-8">
            <div className="text-emerald-400 opacity-90 p-4 bg-emerald-400/10 rounded-full shrink-0">
               <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
            </div>
            <div>
               <h3 className="text-white font-sans font-bold text-xl mb-3">A Clear Structure</h3>
               <p className="text-slate-300 text-base m-0 leading-relaxed">
                 A data governance framework provides a clear structure for managing this data effectively. It defines how data should be created, updated, stored, and shared across different departments within an institution.
               </p>
            </div>
        </div>
      </div>

      <p className="leading-relaxed">
        For accreditation purposes, data governance becomes especially important. Accreditation bodies such as the National Assessment and Accreditation Council and the National Board of Accreditation require institutions to submit detailed reports based on reliable institutional data. A well-designed governance framework ensures that this data is consistent and trustworthy.
      </p>
      
      <p className="leading-relaxed">
        The framework also establishes rules for maintaining data quality, security, and accountability. It ensures that data used for decision-making or accreditation reporting is properly verified and maintained.
      </p>
      
      <p className="bg-emerald-50 text-emerald-900 border-l-4 border-emerald-500 p-4 rounded-r mt-6 font-medium">
        In simple terms, a data governance framework acts as a management system for institutional data, ensuring that the right data is available to the right people at the right time.
      </p>
    </div>
  );
}
