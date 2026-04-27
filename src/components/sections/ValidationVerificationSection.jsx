import React from 'react';

export default function ValidationVerificationSection() {
  return (
    <div className="space-y-6">
      <p>
        Data validation and verification are essential processes used to ensure that institutional data remains accurate and reliable.
      </p>

      <div className="flex flex-col md:flex-row gap-6 my-8">
        <div className="flex-1 bg-slate-900 text-white rounded-2xl p-6 relative overflow-hidden shadow-lg shadow-slate-900/20">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
          </div>
          <div className="relative z-10">
            <h3 className="text-xl font-sans font-bold text-accent mb-3 flex items-center gap-2">
              Data Validation
            </h3>
            <p className="text-slate-300 text-sm mb-4">
              Data validation refers to the process of checking whether data follows predefined rules and formats before it is stored in a system. For example, admission forms may include validation rules that prevent users from entering invalid dates or incorrect identification numbers.
            </p>
            <p className="text-slate-300 text-sm m-0">
              Validation techniques often include range checks, format checks, and mandatory field requirements. If the entered value does not match the expected format, the system automatically rejects the entry.
            </p>
          </div>
        </div>

        <div className="flex-1 bg-white rounded-2xl p-6 relative overflow-hidden shadow-lg border border-slate-200">
          <div className="absolute top-0 right-0 p-4 opacity-[0.03]">
             <svg className="w-24 h-24 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
          </div>
          <div className="relative z-10">
            <h3 className="text-xl font-sans font-bold text-slate-900 mb-3 flex items-center gap-2">
              Data Verification
            </h3>
            <p className="text-slate-600 text-sm mb-4">
              On the other hand, data verification involves confirming that the stored data matches the original source information. This process ensures that no errors occurred during data entry or data transfer.
            </p>
            <p className="text-slate-600 text-sm m-0">
              Verification methods may include double-entry verification, where the same data is entered twice and compared for consistency. Another method is document verification, where digital records are compared with official documents such as certificates or transcripts.
            </p>
          </div>
        </div>
      </div>

      <p>
        Modern institutions also use automated verification tools to detect inconsistencies in large datasets. These tools can identify duplicate records, missing values, and unusual patterns that may indicate errors.
      </p>
      <p className="font-medium text-slate-800">
        Together, validation and verification processes help institutions maintain high standards of data quality, which is essential for accurate accreditation reporting.
      </p>
    </div>
  );
}
