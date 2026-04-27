import React from 'react';

export default function DataGovernanceSection() {
  return (
    <div className="space-y-6">
      <p>
        While data integrity focuses on maintaining correct data, data governance focuses on how that data is managed, controlled, and protected.
      </p>
      <p>
        Data governance refers to the set of policies, rules, and responsibilities that ensure institutional data is properly handled across different departments. Universities generate data from many sources such as admission systems, examination systems, learning management systems, and research databases. Without proper governance, this data can become disorganized or inconsistent.
      </p>
      <p>
        A strong data governance framework helps institutions clearly define who is responsible for collecting, updating, and maintaining specific data. For example, student performance data may be managed by the examination department, while faculty research data may be managed by the research cell.
      </p>
      <p>
        Good governance practices also ensure that data is stored securely and accessed only by authorized individuals. This prevents misuse of sensitive information such as student records or confidential research data.
      </p>
      
      <div className="my-8 rounded-xl overflow-hidden shadow-sm">
        <div className="bg-slate-900 h-64 w-full flex items-center justify-center relative">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-400 via-slate-900 to-black"></div>
          <div className="relative z-10 flex flex-col items-center">
            <svg className="w-16 h-16 text-emerald-400 mb-4 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
            <div className="w-48 h-1 bg-emerald-900 rounded-full overflow-hidden">
               <div className="w-2/3 h-full bg-emerald-400"></div>
            </div>
          </div>
        </div>
      </div>
      
      <p>
        For accreditation processes, data governance plays a very important role. Accreditation reports require data collected from multiple departments, including academics, administration, research, and student services. A well-organized governance system helps institutions compile this information efficiently and accurately.
      </p>
      <p>
        Therefore, data governance not only supports accreditation but also strengthens the overall management of educational institutions.
      </p>
    </div>
  );
}
