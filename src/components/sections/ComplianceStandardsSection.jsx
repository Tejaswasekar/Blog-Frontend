import React from 'react';

export default function ComplianceStandardsSection() {
  return (
    <div className="space-y-6">
      <p className="leading-relaxed">
        Educational institutions must follow various compliance standards and regulations to ensure the proper management and protection of institutional data. Compliance refers to the process of adhering to established rules, guidelines, and legal requirements related to data management and security.
      </p>

      <div className="my-8 flex flex-col gap-4">
        <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl flex gap-6 items-center">
           <div className="text-4xl font-serif text-slate-300 font-bold shrink-0 hidden sm:block">01</div>
           <div>
             <h3 className="text-xl font-sans font-bold text-slate-900 mb-2">ISO/IEC 27001</h3>
             <p className="text-slate-700 text-sm m-0 leading-relaxed">
               One widely recognized international standard for information security management. This standard provides a framework for establishing, implementing, and maintaining an effective information security management system. Institutions that follow this standard can systematically identify risks and implement security controls to protect their data.
             </p>
           </div>
        </div>

        <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl flex gap-6 items-center">
           <div className="text-4xl font-serif text-slate-300 font-bold shrink-0 hidden sm:block">02</div>
           <div>
             <h3 className="text-xl font-sans font-bold text-slate-900 mb-2">General Data Protection Regulation (GDPR)</h3>
             <p className="text-slate-700 text-sm m-0 leading-relaxed">
               Although GDPR is primarily implemented in the European Union, its principles have influenced global data protection practices. GDPR emphasizes the protection of personal data and requires organizations to implement strong privacy safeguards.
             </p>
           </div>
        </div>
        
        <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl flex gap-6 items-center border-l-4 border-l-emerald-500">
           <div className="text-4xl font-serif text-emerald-200 font-bold shrink-0 hidden sm:block">03</div>
           <div>
             <h3 className="text-xl font-sans font-bold text-slate-900 mb-2">Information Technology Act, 2000 (India)</h3>
             <p className="text-slate-700 text-sm m-0 leading-relaxed">
               In India, institutions must comply with this Act, which includes provisions related to cybersecurity, electronic records, and data protection.
             </p>
           </div>
        </div>
      </div>

      <p className="leading-relaxed">
        Compliance with these standards helps institutions establish clear security practices and maintain accountability in their data management processes. It also ensures that institutional data systems follow internationally recognized security guidelines.
      </p>

      <p className="leading-relaxed font-medium">
        Following compliance standards not only protects institutional data but also strengthens the credibility of institutions during accreditation evaluations.
      </p>
    </div>
  );
}
