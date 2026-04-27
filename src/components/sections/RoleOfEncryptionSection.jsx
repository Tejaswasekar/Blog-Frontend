import React from 'react';

export default function RoleOfEncryptionSection() {
  return (
    <div className="space-y-6">
      <p className="leading-relaxed">
        Encryption plays a crucial role in protecting institutional data from unauthorized access. Encryption is a technique that converts readable information into an encoded format that can only be accessed using a specific decryption key.
      </p>

      <p className="leading-relaxed">
        In educational institutions, encryption helps secure sensitive data such as student personal information, academic records, research data, and financial documents. When data is encrypted, even if it is intercepted by unauthorized individuals, it cannot be understood without the correct decryption key.
      </p>

      <div className="my-10 flex flex-col md:flex-row gap-8 items-center bg-slate-50 p-8 rounded-2xl border border-slate-200">
         <div className="flex-1">
            <h3 className="text-xl font-sans font-bold text-emerald-600 mb-3 flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
              Data-at-Rest
            </h3>
            <p className="text-slate-700 text-base m-0 leading-relaxed">
              This type of encryption protects data stored in databases or storage devices. This ensures that institutional data remains secure even if the storage system is compromised.
            </p>
         </div>
         
         <div className="w-px h-24 bg-slate-300 hidden md:block"></div>
         <div className="h-px w-full bg-slate-300 block md:hidden"></div>
         
         <div className="flex-1">
            <h3 className="text-xl font-sans font-bold text-emerald-600 mb-3 flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              Data-in-Transit
            </h3>
            <p className="text-slate-700 text-base m-0 leading-relaxed">
              This protects data while it is being transmitted over networks. For example, when faculty members upload research data to institutional servers or when students access academic portals, encryption ensures that the data transmitted between systems cannot be intercepted by attackers.
            </p>
         </div>
      </div>

      <p className="leading-relaxed">
        Modern institutions often use encryption protocols such as secure communication channels and encrypted databases to protect their information systems.
      </p>
      
      <p className="leading-relaxed font-medium bg-emerald-50 p-4 rounded-lg text-emerald-900 border-l-4 border-emerald-500">
        Implementing encryption not only improves data security but also helps institutions comply with regulatory requirements and international standards related to data protection.
      </p>
    </div>
  );
}
