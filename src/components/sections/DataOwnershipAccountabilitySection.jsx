import React from 'react';

export default function DataOwnershipAccountabilitySection() {
  return (
    <div className="space-y-6">
      <p className="text-lg text-slate-700 leading-relaxed font-medium">
        Data ownership is a fundamental concept in data governance. It refers to identifying which department or individual is responsible for managing and maintaining a specific set of data.
      </p>

      <p className="leading-relaxed">
        In universities, different types of data are generated across various departments. Student admission data may be managed by the admissions office, while academic records may be maintained by the examination department. Similarly, faculty information may be handled by the human resources department.
      </p>

      <div className="my-8 flex flex-col md:flex-row gap-6">
        <div className="flex-1 bg-white border border-slate-200 p-6 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all">
          <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-4">
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
          </div>
          <h3 className="text-xl font-sans font-bold text-slate-900 mb-2">Clear Ownership</h3>
          <p className="text-slate-600 text-sm leading-relaxed m-0">
            Assigning clear ownership helps ensure that data is properly maintained and regularly updated. When a department knows it is responsible for specific data, it becomes easier to track errors, update records, and maintain accuracy.
          </p>
        </div>

        <div className="flex-1 bg-white border border-slate-200 p-6 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all">
          <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mb-4">
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
          </div>
          <h3 className="text-xl font-sans font-bold text-slate-900 mb-2">Strict Accountability</h3>
          <p className="text-slate-600 text-sm leading-relaxed m-0">
            Accountability is closely linked to data ownership. Departments responsible for specific data must ensure that the information they manage is accurate, complete, and secure, following institutional policies.
          </p>
        </div>
      </div>

      <p className="leading-relaxed">
        For accreditation purposes, accountability becomes especially important. When accreditation committees review institutional reports, they expect that each piece of data has been verified by the appropriate department.
      </p>

      <p className="leading-relaxed font-medium mt-6 text-accent">
        Institutions that establish clear data ownership structures can prepare accreditation reports more efficiently and with greater confidence in the reliability of their data.
      </p>
    </div>
  );
}
