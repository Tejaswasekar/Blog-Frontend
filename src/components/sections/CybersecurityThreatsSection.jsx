import React from 'react';

export default function CybersecurityThreatsSection() {
  return (
    <div className="space-y-6">
      <p className="text-lg mb-8 text-slate-700">
        Educational institutions are increasingly becoming targets of cybersecurity threats. As universities adopt digital systems for managing academic and administrative data, the risk of cyberattacks also increases.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        <div className="border-t-4 border-rose-500 rounded-b-xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
           <div className="w-16 h-16 bg-rose-50 rounded-full flex items-center justify-center text-rose-500 mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path></svg>
           </div>
           <h3 className="font-sans font-bold text-slate-900 text-lg mb-2">Unauthorized Access</h3>
           <p className="text-slate-600 text-sm leading-relaxed m-0">
             Hackers may attempt to gain access to institutional databases in order to steal sensitive information such as student personal details, examination results, or research data.
           </p>
        </div>

        <div className="border-t-4 border-rose-500 rounded-b-xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
           <div className="w-16 h-16 bg-rose-50 rounded-full flex items-center justify-center text-rose-500 mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
           </div>
           <h3 className="font-sans font-bold text-slate-900 text-lg mb-2">Phishing Attacks</h3>
           <p className="text-slate-600 text-sm leading-relaxed m-0">
             In phishing attacks, attackers send fraudulent emails that appear to come from trusted sources. These emails often attempt to trick users into revealing login credentials or downloading malicious files.
           </p>
        </div>

        <div className="border-t-4 border-rose-500 rounded-b-xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
           <div className="w-16 h-16 bg-rose-50 rounded-full flex items-center justify-center text-rose-500 mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
           </div>
           <h3 className="font-sans font-bold text-slate-900 text-lg mb-2">Malware Attacks</h3>
           <p className="text-slate-600 text-sm leading-relaxed m-0">
             Malware is malicious software designed to damage or disrupt computer systems. If malware infects institutional databases, it can corrupt important records or allow attackers to access confidential data.
           </p>
        </div>

        <div className="border-t-4 border-rose-500 rounded-b-xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
           <div className="w-16 h-16 bg-rose-50 rounded-full flex items-center justify-center text-rose-500 mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
           </div>
           <h3 className="font-sans font-bold text-slate-900 text-lg mb-2">Ransomware Attacks</h3>
           <p className="text-slate-600 text-sm leading-relaxed m-0">
             In a ransomware attack, attackers encrypt institutional data and demand payment in exchange for restoring access. Such attacks can disrupt academic operations and delay important processes like examination result processing or accreditation documentation.
           </p>
        </div>
        
        <div className="border-t-4 border-rose-500 rounded-b-xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow md:col-span-2 flex flex-col items-center text-center">
           <div className="w-16 h-16 bg-rose-50 rounded-full flex items-center justify-center text-rose-500 mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
           </div>
           <h3 className="font-sans font-bold text-slate-900 text-lg mb-2">Insider Threats</h3>
           <p className="text-slate-600 text-sm leading-relaxed m-0">
             Sometimes, data breaches occur due to actions by internal staff members who misuse their access privileges or accidentally expose sensitive information.
           </p>
        </div>
      </div>

      <p className="mt-8 font-medium italic text-slate-700">
        To protect against these threats, institutions must adopt comprehensive cybersecurity strategies. These strategies may include firewalls, intrusion detection systems, regular security updates, and cybersecurity awareness training for staff and students.
      </p>
      
      <p className="font-medium text-slate-900">
        By implementing strong cybersecurity practices, educational institutions can protect their digital infrastructure and ensure the safety of their accreditation-related data.
      </p>
    </div>
  );
}
