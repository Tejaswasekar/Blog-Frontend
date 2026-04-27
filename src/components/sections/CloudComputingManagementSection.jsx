import React from 'react';

export default function CloudComputingManagementSection() {
  return (
    <div className="space-y-6">
      <p className="leading-relaxed text-lg mb-6">
        Cloud computing has become an essential technology for managing large volumes of institutional data. Cloud computing allows organizations to store and process data using remote servers instead of relying solely on local hardware systems.
      </p>

      <div className="my-8 flex gap-6 items-start bg-slate-50 p-6 rounded-2xl border border-slate-200">
         <div className="bg-sky-100 text-sky-600 rounded-full p-4 shrink-0 shadow-sm border border-sky-200">
           <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg>
         </div>
         <div>
            <p className="text-slate-700 text-base m-0 leading-relaxed font-medium">
              Educational institutions generate vast amounts of data related to admissions, academic records, research activities, and administrative operations. Managing this data using traditional on-premise systems can be costly and difficult to maintain. Cloud computing offers a scalable and flexible solution for handling these data requirements.
            </p>
         </div>
      </div>

      <div className="space-y-4 my-8 pl-4 border-l-2 border-slate-200">
         <div>
            <h3 className="text-lg font-sans font-bold text-slate-900 mb-1 flex items-center gap-2">
               <span className="w-2 h-2 rounded-full bg-sky-500 block"></span>
               Centralized Data Storage
            </h3>
            <p className="text-slate-700 text-sm leading-relaxed pl-4 m-0">
               Instead of storing data in separate departmental systems, institutions can maintain a centralized cloud-based repository. This allows authorized users from different departments to access updated information whenever necessary.
            </p>
         </div>

         <div>
            <h3 className="text-lg font-sans font-bold text-slate-900 mb-1 flex items-center gap-2">
               <span className="w-2 h-2 rounded-full bg-indigo-500 block"></span>
               Automatic Backup & Disaster Recovery
            </h3>
            <p className="text-slate-700 text-sm leading-relaxed pl-4 m-0">
               If a local system fails due to hardware issues or natural disasters, cloud systems can quickly restore the lost data from backup servers. This ensures that critical institutional information remains safe and accessible.
            </p>
         </div>

         <div>
            <h3 className="text-lg font-sans font-bold text-slate-900 mb-1 flex items-center gap-2">
               <span className="w-2 h-2 rounded-full bg-emerald-500 block"></span>
               Improved Collaboration
            </h3>
            <p className="text-slate-700 text-sm leading-relaxed pl-4 m-0">
               Faculty members, administrators, and researchers can easily share documents and data through cloud-based platforms. This improves coordination between departments, especially during the preparation of accreditation reports.
            </p>
         </div>

         <div>
            <h3 className="text-lg font-sans font-bold text-slate-900 mb-1 flex items-center gap-2">
               <span className="w-2 h-2 rounded-full bg-amber-500 block"></span>
               Advanced Security Measures
            </h3>
            <p className="text-slate-700 text-sm leading-relaxed pl-4 m-0">
               Cloud service providers also implement advanced security measures such as encryption, access control, and network monitoring. These security features help institutions protect sensitive information stored in cloud systems.
            </p>
         </div>
      </div>

      <p className="leading-relaxed font-medium pt-4 border-t border-slate-200 text-slate-900">
        As educational institutions continue to expand their digital infrastructure, cloud computing provides a reliable and cost-effective platform for managing institutional data efficiently.
      </p>
    </div>
  );
}
