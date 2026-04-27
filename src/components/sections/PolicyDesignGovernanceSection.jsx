import React from 'react';

export default function PolicyDesignGovernanceSection() {
  return (
    <div className="space-y-6">
      <p className="leading-relaxed">
        A strong data governance framework must be supported by well-designed policies. These policies guide how institutional data should be handled, protected, and shared.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-slate-400">
          <h3 className="font-sans font-bold text-slate-900 text-lg mb-2">Data Classification</h3>
          <p className="text-slate-700 text-sm m-0">Institutions should categorize their data based on sensitivity levels. For example, publicly available information such as course catalogs may be classified differently from confidential student records.</p>
        </div>

        <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-slate-400">
          <h3 className="font-sans font-bold text-slate-900 text-lg mb-2">Access Control</h3>
          <p className="text-slate-700 text-sm m-0">Institutions must define who is allowed to access specific types of data. Access should be granted based on job responsibilities, ensuring that sensitive information is available only to authorized individuals.</p>
        </div>

        <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-slate-400">
          <h3 className="font-sans font-bold text-slate-900 text-lg mb-2">Data Retention</h3>
          <p className="text-slate-700 text-sm m-0">These policies specify how long institutional data should be stored and when it should be archived or deleted. Maintaining unnecessary data for long periods can increase security risks.</p>
        </div>

        <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-slate-400">
          <h3 className="font-sans font-bold text-slate-900 text-lg mb-2">Backup & Recovery</h3>
          <p className="text-slate-700 text-sm m-0">These policies ensure that important information can be restored in case of system failures, cyberattacks, or accidental data loss.</p>
        </div>
      </div>

      <p className="leading-relaxed mb-6">
        Regular data governance audits are another important aspect of policy implementation. These audits help institutions evaluate whether their governance practices are functioning effectively and identify areas that need improvement.
      </p>

      <div className="pt-6 border-t border-slate-200 mt-8">
        <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">Conclusion</h3>
        <p className="font-sans text-lg text-slate-700 italic">
          "By establishing clear policies and enforcing them consistently, institutions can build a secure and reliable data governance environment that supports accreditation and institutional transparency."
        </p>
      </div>
    </div>
  );
}
