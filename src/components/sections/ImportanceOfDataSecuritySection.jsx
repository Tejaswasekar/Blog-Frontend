import React from 'react';

export default function ImportanceOfDataSecuritySection() {
  return (
    <div className="space-y-6">
      
      <p className="text-lg text-slate-700 leading-relaxed font-medium">
        In modern educational institutions, large amounts of sensitive data are generated and stored every day. This data includes student records, academic results, faculty information, research publications, financial details, and infrastructure information. When institutions undergo accreditation, much of this data is compiled and submitted as evidence of academic quality and institutional performance.
      </p>
      
      <p className="leading-relaxed">
        Because accreditation decisions rely heavily on institutional data, maintaining strong data security becomes extremely important. <strong className="text-slate-900">Data security</strong> refers to the protection of data from unauthorized access, misuse, corruption, or loss.
      </p>

      <div className="my-8 relative rounded-xl overflow-hidden shadow-lg border border-slate-200">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-slate-900 z-0"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -mr-10 -mt-10"></div>
        <div className="relative z-10 p-8 flex flex-col md:flex-row items-center gap-8">
            <div className="text-indigo-400 opacity-90 p-4 bg-indigo-400/10 rounded-full shrink-0 border border-indigo-400/20">
               <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
            </div>
            <div>
               <h3 className="text-white font-sans font-bold text-xl mb-3">Authentic and Verifiable</h3>
               <p className="text-slate-300 text-base m-0 leading-relaxed">
                 Accreditation bodies such as the National Assessment and Accreditation Council and the National Board of Accreditation require institutions to provide authentic and verifiable data during evaluation processes. If the submitted data is compromised or manipulated, it can affect the credibility of the institution and lead to serious consequences.
               </p>
            </div>
        </div>
      </div>

      <p className="leading-relaxed">
        Data security helps ensure that institutional information remains confidential, accurate, and accessible only to authorized individuals. For example, student examination results should only be accessible to relevant academic staff and authorized administrators.
      </p>
      
      <p className="leading-relaxed">
        Another important reason for implementing strong data security is to maintain trust among stakeholders. Students, faculty members, researchers, and administrators all rely on institutional systems to manage their information securely. A data breach can damage the reputation of an institution and reduce confidence in its administrative processes.
      </p>
      
      <p className="bg-indigo-50 text-indigo-900 border-l-4 border-indigo-500 p-4 rounded-r mt-6 font-medium">
        Therefore, educational institutions must implement strong security mechanisms such as secure authentication systems, controlled access to data, encrypted storage, and regular monitoring of information systems. These measures help protect institutional data and ensure that accreditation reports are based on reliable and secure information.
      </p>
    </div>
  );
}
