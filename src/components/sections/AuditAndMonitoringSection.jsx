import React from 'react';

export default function AuditAndMonitoringSection() {
  return (
    <div className="space-y-6">
      <p className="leading-relaxed text-lg mb-8">
        Regular auditing and monitoring are essential components of effective data security management. Even the most secure systems require continuous evaluation to ensure that security measures remain effective.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
         <div className="space-y-4">
            <h3 className="text-xl font-sans font-bold text-indigo-600 flex items-center border-b border-indigo-100 pb-2">
               <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>
               Data Security Audits
            </h3>
            <p className="text-slate-700 text-sm leading-relaxed">
               A data security audit involves systematically reviewing institutional data systems to identify potential vulnerabilities and weaknesses. During an audit, security experts examine various aspects of the system, including data storage practices, access control mechanisms, and network security configurations.
            </p>
            <p className="text-slate-700 text-sm leading-relaxed">
               Audits help institutions detect issues such as unauthorized access attempts, outdated security software, or improperly configured systems. Identifying these issues early allows institutions to implement corrective measures before major problems occur.
            </p>
         </div>

         <div className="space-y-4">
            <h3 className="text-xl font-sans font-bold text-emerald-600 flex items-center border-b border-emerald-100 pb-2">
               <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
               Continuous Monitoring
            </h3>
            <p className="text-slate-700 text-sm leading-relaxed">
               Monitoring systems also play an important role in maintaining data security. Monitoring tools track system activities and detect suspicious behavior in real time. For example, if an unauthorized user attempts to access confidential data, the monitoring system can generate alerts and notify administrators.
            </p>
            <p className="text-slate-700 text-sm leading-relaxed">
               Another important aspect of security monitoring is log management. Institutional systems maintain logs that record user activities such as login attempts, file access, and data modifications. Analyzing these logs helps administrators identify unusual patterns that may indicate security threats.
            </p>
         </div>
      </div>
      
      <p className="leading-relaxed bg-slate-50 p-4 border border-slate-200 rounded-lg italic">
         Regular security training for staff members is also important. Employees should understand the importance of protecting institutional data and following security protocols.
      </p>

      <div className="pt-6 border-t border-slate-200 mt-8">
        <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">Conclusion</h3>
        <p className="font-sans text-lg text-slate-700">
          By conducting regular audits and implementing continuous monitoring systems, institutions can maintain strong data security practices and ensure that their data management processes remain reliable and compliant.
        </p>
      </div>
    </div>
  );
}
