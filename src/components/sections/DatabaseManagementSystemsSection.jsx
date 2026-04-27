import React from 'react';

export default function DatabaseManagementSystemsSection() {
  return (
    <div className="space-y-6">
      <p className="leading-relaxed">
        Database Management Systems (DBMS) play a fundamental role in storing, organizing, and managing institutional data. A DBMS is a software system that allows organizations to create structured databases where information can be stored, retrieved, and updated efficiently.
      </p>

      <p className="leading-relaxed">
        In the context of accreditation, institutions must maintain large datasets that include student performance records, faculty qualifications, research publications, infrastructure details, and administrative information. A well-designed database system allows institutions to manage this information in an organized manner.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
          <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded flex items-center justify-center mb-4">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>
          </div>
          <h3 className="font-sans font-bold text-slate-900 text-lg mb-2">Data Consistency</h3>
          <p className="text-slate-700 text-sm m-0 leading-relaxed">Databases store information in structured tables that maintain relationships between different datasets. For example, student records may be linked to course details and examination results within the same database system.</p>
        </div>

        <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
          <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded flex items-center justify-center mb-4">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </div>
          <h3 className="font-sans font-bold text-slate-900 text-lg mb-2">Efficient Data Retrieval</h3>
          <p className="text-slate-700 text-sm m-0 leading-relaxed">Accreditation committees often require specific info such as faculty-student ratios, research output statistics, or placement records. Database systems allow administrators to retrieve this information quickly using queries and reports.</p>
        </div>

        <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
          <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded flex items-center justify-center mb-4">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
          <h3 className="font-sans font-bold text-slate-900 text-lg mb-2">Data Integrity Rules</h3>
          <p className="text-slate-700 text-sm m-0 leading-relaxed">Database systems also support data validation rules that help maintain data integrity. These rules prevent incorrect or incomplete information from being entered into the database.</p>
        </div>

        <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
          <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded flex items-center justify-center mb-4">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
          </div>
          <h3 className="font-sans font-bold text-slate-900 text-lg mb-2">Security Features</h3>
          <p className="text-slate-700 text-sm m-0 leading-relaxed">Modern database systems also include security features such as user authentication, access permissions, and audit logs to ensure only authorized individuals can modify data.</p>
        </div>
      </div>

      <p className="leading-relaxed font-medium bg-slate-900 text-white p-5 rounded-xl mt-8">
        By implementing reliable database management systems, educational institutions can maintain organized and accurate records that support accreditation documentation and reporting.
      </p>
    </div>
  );
}
