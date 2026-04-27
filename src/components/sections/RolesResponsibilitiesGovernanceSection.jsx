import React from 'react';

export default function RolesResponsibilitiesGovernanceSection() {
  return (
    <div className="space-y-6">
      <p className="leading-relaxed">
        Successful data governance requires clear assignment of responsibilities. Without defined roles, it becomes difficult to maintain accountability for institutional data. In most universities, data governance responsibilities are distributed among different individuals and departments.
      </p>

      <div className="my-8 space-y-4">
        <div className="flex gap-4 p-5 bg-slate-50 border border-slate-200 rounded-lg">
          <div className="w-1.5 bg-indigo-500 rounded-full shrink-0"></div>
          <div>
            <h3 className="font-sans font-bold text-slate-900 mb-1">Institutional Leadership</h3>
            <p className="text-slate-700 text-sm m-0 leading-relaxed">At the highest level, institutional leadership plays an important role in establishing governance policies. University administrators and management committees define the strategic goals and policies related to data management.</p>
          </div>
        </div>
        
        <div className="flex gap-4 p-5 bg-slate-50 border border-slate-200 rounded-lg">
          <div className="w-1.5 bg-blue-500 rounded-full shrink-0"></div>
          <div>
            <h3 className="font-sans font-bold text-slate-900 mb-1">Data Owners</h3>
            <p className="text-slate-700 text-sm m-0 leading-relaxed">Data owners are responsible for specific datasets within the institution. For example, the examination department may act as the data owner for student performance records, while the research office may manage faculty publication data.</p>
          </div>
        </div>

        <div className="flex gap-4 p-5 bg-slate-50 border border-slate-200 rounded-lg">
          <div className="w-1.5 bg-emerald-500 rounded-full shrink-0"></div>
          <div>
            <h3 className="font-sans font-bold text-slate-900 mb-1">Data Stewards</h3>
            <p className="text-slate-700 text-sm m-0 leading-relaxed">Data stewards are responsible for maintaining data quality and ensuring that institutional policies are followed. They monitor data accuracy, identify inconsistencies, and coordinate with departments to correct errors.</p>
          </div>
        </div>
        
        <div className="flex gap-4 p-5 bg-slate-50 border border-slate-200 rounded-lg">
          <div className="w-1.5 bg-amber-500 rounded-full shrink-0"></div>
          <div>
            <h3 className="font-sans font-bold text-slate-900 mb-1">Technical Staff</h3>
            <p className="text-slate-700 text-sm m-0 leading-relaxed">Technical staff such as IT administrators and database managers are responsible for maintaining the technological infrastructure that supports data governance. They manage databases, implement security controls, and ensure system reliability.</p>
          </div>
        </div>

        <div className="flex gap-4 p-5 bg-slate-50 border border-slate-200 rounded-lg">
          <div className="w-1.5 bg-rose-500 rounded-full shrink-0"></div>
          <div>
            <h3 className="font-sans font-bold text-slate-900 mb-1">Faculty & Administrative Staff</h3>
            <p className="text-slate-700 text-sm m-0 leading-relaxed">Faculty members and administrative staff also play a role in maintaining data accuracy. For example, faculty members may update their research publications and academic achievements in institutional databases.</p>
          </div>
        </div>
      </div>

      <p className="leading-relaxed font-medium bg-indigo-50 p-4 rounded-lg text-indigo-900">
        Clearly defining these roles ensures that every stakeholder understands their responsibility in maintaining the integrity and reliability of institutional data.
      </p>
    </div>
  );
}
