import React from 'react';

export default function DigitalTransformationSection() {
  return (
    <div className="space-y-6">
      <p>
        Digital transformation is playing a major role in improving the way institutions manage their data. By adopting modern technologies, universities can simplify the accreditation process and reduce manual errors.
      </p>
      <p>
        Digital systems such as learning management systems, student information systems, and institutional data repositories help institutions collect and store data efficiently. These systems allow administrators to access updated information whenever it is required for reporting or evaluation.
      </p>
      
      <div className="bg-slate-900 text-white p-8 rounded-2xl my-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10">
           <svg className="w-32 h-32 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
        </div>
        <div className="relative z-10">
          <h3 className="text-2xl font-sans font-bold mb-4 text-emerald-400">The Power of Digital Dashboards</h3>
          <p className="text-slate-300 text-lg m-0">
            Digital dashboards help institutions monitor their performance indicators. For example, administrators can easily track graduation rates, research output, and student placements using centralized data systems.
          </p>
        </div>
      </div>
      
      <p>
        Another advantage of digital transformation is improved data transparency. Accreditation teams can verify documents more easily when institutions maintain digital records.
      </p>
      
      <div className="pt-6 border-t border-slate-200 mt-8">
        <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">Conclusion</h3>
        <p>
          Overall, digital transformation helps institutions create a more organized and reliable data environment, which ultimately supports successful accreditation outcomes.
        </p>
      </div>
    </div>
  );
}
