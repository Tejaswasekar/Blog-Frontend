import React from 'react';

export default function SecureDataManagementStepByStepSection() {
  return (
    <div className="space-y-6">
      <p className="leading-relaxed text-lg mb-8">
        Developing a secure data management system requires careful planning and implementation. Educational institutions can follow a structured approach to establish effective data management practices.
      </p>

      <div className="space-y-6 my-8">
         <div className="flex gap-4">
            <div className="flex flex-col items-center">
               <div className="w-10 h-10 rounded-full bg-slate-100 border-2 border-slate-300 text-slate-500 font-bold font-sans flex items-center justify-center shrink-0 z-10 relative">1</div>
               <div className="w-px h-full bg-slate-200 mt-2"></div>
            </div>
            <div className="pb-6">
               <h3 className="text-xl font-sans font-bold text-slate-900 mb-2">Data Identification & Classification</h3>
               <p className="text-slate-700 text-sm leading-relaxed m-0">
                 Institutions must identify the different types of data they generate and categorize them based on their importance and sensitivity. For example, student personal records may require higher levels of protection compared to publicly available information.
               </p>
            </div>
         </div>

         <div className="flex gap-4">
            <div className="flex flex-col items-center">
               <div className="w-10 h-10 rounded-full bg-slate-100 border-2 border-slate-300 text-slate-500 font-bold font-sans flex items-center justify-center shrink-0 z-10 relative">2</div>
               <div className="w-px h-full bg-slate-200 mt-2"></div>
            </div>
            <div className="pb-6">
               <h3 className="text-xl font-sans font-bold text-slate-900 mb-2">Developing Governance Policies</h3>
               <p className="text-slate-700 text-sm leading-relaxed m-0">
                 Institutions should create policies that define how data should be collected, stored, accessed, and shared. These policies provide guidelines for maintaining data quality and security.
               </p>
            </div>
         </div>

         <div className="flex gap-4">
            <div className="flex flex-col items-center">
               <div className="w-10 h-10 rounded-full bg-slate-100 border-2 border-slate-300 text-slate-500 font-bold font-sans flex items-center justify-center shrink-0 z-10 relative">3</div>
               <div className="w-px h-full bg-slate-200 mt-2"></div>
            </div>
            <div className="pb-6">
               <h3 className="text-xl font-sans font-bold text-slate-900 mb-2">Technological Infrastructure</h3>
               <p className="text-slate-700 text-sm leading-relaxed m-0">
                 Institutions should adopt reliable database systems, cloud storage platforms, and cybersecurity tools to support their data management processes.
               </p>
            </div>
         </div>

         <div className="flex gap-4">
            <div className="flex flex-col items-center">
               <div className="w-10 h-10 rounded-full bg-slate-100 border-2 border-slate-300 text-slate-500 font-bold font-sans flex items-center justify-center shrink-0 z-10 relative">4</div>
               <div className="w-px h-full bg-slate-200 mt-2"></div>
            </div>
            <div className="pb-6">
               <h3 className="text-xl font-sans font-bold text-slate-900 mb-2">Access Control Mechanisms</h3>
               <p className="text-slate-700 text-sm leading-relaxed m-0">
                 Access to institutional data should be restricted based on user roles and responsibilities. This ensures that sensitive information is accessed only by authorized individuals.
               </p>
            </div>
         </div>

         <div className="flex gap-4">
            <div className="flex flex-col items-center">
               <div className="w-10 h-10 rounded-full bg-slate-100 border-2 border-slate-300 text-slate-500 font-bold font-sans flex items-center justify-center shrink-0 z-10 relative">5</div>
               <div className="w-px h-full bg-slate-200 mt-2"></div>
            </div>
            <div className="pb-6">
               <h3 className="text-xl font-sans font-bold text-slate-900 mb-2">Backup & Recovery Systems</h3>
               <p className="text-slate-700 text-sm leading-relaxed m-0">
                 Regular data backups ensure that information can be restored in case of system failures, cyberattacks, or accidental data loss.
               </p>
            </div>
         </div>

         <div className="flex gap-4">
            <div className="flex flex-col items-center">
               <div className="w-10 h-10 rounded-full bg-slate-100 border-2 border-slate-300 text-slate-500 font-bold font-sans flex items-center justify-center shrink-0 z-10 relative">6</div>
               <div className="w-px h-full bg-slate-200 mt-2"></div>
            </div>
            <div className="pb-6">
               <h3 className="text-xl font-sans font-bold text-slate-900 mb-2">Staff Training</h3>
               <p className="text-slate-700 text-sm leading-relaxed m-0">
                 Faculty and administrative staff should understand how to handle institutional data responsibly and follow established governance policies.
               </p>
            </div>
         </div>

         <div className="flex gap-4">
            <div className="flex flex-col items-center">
               <div className="w-10 h-10 rounded-full bg-emerald-100 border-2 border-emerald-500 text-emerald-600 font-bold font-sans flex items-center justify-center shrink-0 z-10 relative">
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
               </div>
               <div className="w-px h-full bg-transparent mt-2"></div>
            </div>
            <div className="pb-0">
               <h3 className="text-xl font-sans font-bold text-emerald-600 mb-2">Audits & Assessments</h3>
               <p className="text-slate-700 text-sm leading-relaxed m-0">
                 Finally, institutions should conduct regular data audits and security assessments. These evaluations help identify potential vulnerabilities and ensure that data management systems remain effective over time.
               </p>
            </div>
         </div>
      </div>

      <div className="pt-6 border-t border-slate-200 mt-8">
        <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">Final Conclusion</h3>
        <p className="font-sans text-lg text-slate-700 italic">
          "By following these steps, educational institutions can develop secure and efficient data management systems that support accreditation requirements and institutional transparency."
        </p>
      </div>
    </div>
  );
}
