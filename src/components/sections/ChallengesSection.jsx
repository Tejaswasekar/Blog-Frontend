import React from 'react';

export default function ChallengesSection() {
  return (
    <div className="space-y-6">
      <p>
        Managing institutional data is not an easy task for most universities and colleges. Many institutions face several challenges while collecting and organizing data for accreditation purposes.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="bg-white p-6 rounded-xl border border-rose-100 shadow-[0_4px_20px_rgb(225,29,72,0.05)]">
          <h3 className="text-xl font-sans font-bold text-slate-900 mb-3 flex items-center gap-2">
            <span className="text-rose-500">✗</span> Data Fragmentation
          </h3>
          <p className="text-base m-0">
            Different departments often maintain their own records separately, which leads to inconsistencies. For example, the data maintained by the examination department may not match the data stored by the academic department.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-xl border border-rose-100 shadow-[0_4px_20px_rgb(225,29,72,0.05)]">
          <h3 className="text-xl font-sans font-bold text-slate-900 mb-3 flex items-center gap-2">
            <span className="text-rose-500">✗</span> Manual Management
          </h3>
          <p className="text-base m-0">
            Some institutions still rely on spreadsheets or paper-based records. This increases the chances of errors, duplication, and missing information.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-xl border border-rose-100 shadow-[0_4px_20px_rgb(225,29,72,0.05)]">
          <h3 className="text-xl font-sans font-bold text-slate-900 mb-3 flex items-center gap-2">
            <span className="text-rose-500">✗</span> Poor Coordination
          </h3>
          <p className="text-base m-0">
            Lack of proper coordination between departments creates difficulties. During accreditation preparation, institutions need data from multiple sources, and delays in collecting this information can slow down the entire process.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-xl border border-rose-100 shadow-[0_4px_20px_rgb(225,29,72,0.05)]">
          <h3 className="text-xl font-sans font-bold text-slate-900 mb-3 flex items-center gap-2">
            <span className="text-rose-500">✗</span> Data Security
          </h3>
          <p className="text-base m-0">
            Educational institutions store sensitive information such as student personal details, academic results, and research data. If this information is not protected properly, it can lead to data breaches and privacy issues.
          </p>
        </div>
      </div>
      
      <p className="bg-rose-50 p-4 rounded-lg text-rose-900 italic font-medium border-l-4 border-rose-400">
        Addressing these challenges requires the implementation of better data management systems and governance practices.
      </p>
    </div>
  );
}
