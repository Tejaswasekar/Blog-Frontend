import React from 'react';

const references = [
  {
    category: "Data Integrity",
    links: [
      { title: "IBM – What is Data Integrity", url: "https://www.ibm.com/think/topics/data-integrity" },
      { title: "Oracle Database Documentation", url: "https://docs.oracle.com/database/" },
      { title: "Microsoft Data Quality Services", url: "https://learn.microsoft.com/en-us/sql/data-quality-services/data-quality-services" },
      { title: "ResearchGate – Data Integrity in Information Systems", url: "https://www.researchgate.net/" },
      { title: "Springer – Data and Information Quality", url: "https://link.springer.com/book/10.1007/978-3-319-24106-7" }
    ]
  },
  {
    category: "Data Governance",
    links: [
      { title: "DAMA International", url: "https://www.dama.org/" },
      { title: "Data Governance Institute", url: "https://datagovernance.com/" },
      { title: "Gartner – Data Governance", url: "https://www.gartner.com/en/information-technology/glossary/data-governance" },
      { title: "IBM – Data Governance", url: "https://www.ibm.com/topics/data-governance" },
      { title: "Oracle – Data Governance", url: "https://www.oracle.com/in/data-management/what-is-data-governance/" }
    ]
  },
  {
    category: "Accreditation Bodies",
    links: [
      { title: "NAAC Official Website", url: "https://www.naac.gov.in/" },
      { title: "NAAC Assessment Process", url: "https://www.naac.gov.in/index.php/en/assessment-accreditation" },
      { title: "NBA Official Website", url: "https://www.nbaind.org/" },
      { title: "NBA Accreditation Manual", url: "https://www.nbaind.org/accreditation.php" },
      { title: "UGC India", url: "https://www.ugc.gov.in/" }
    ]
  },
  {
    category: "Security & Compliance",
    links: [
      { title: "NIST Cybersecurity Framework", url: "https://www.nist.gov/cyberframework" },
      { title: "NIST SP 800-53", url: "https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final" },
      { title: "ISO 27001", url: "https://www.iso.org/isoiec-27001-information-security.html" },
      { title: "GDPR Official Website", url: "https://gdpr.eu/" },
      { title: "India IT Act 2000", url: "https://www.meity.gov.in/content/information-technology-act-2000" }
    ]
  },
  {
    category: "Cybersecurity Threats in Education",
    links: [
      { title: "EDUCAUSE Cybersecurity", url: "https://www.educause.edu/focus-areas-and-initiatives/policy-and-security/cybersecurity-program" },
      { title: "Cisco Cybersecurity Guide", url: "https://www.cisco.com/c/en/us/products/security/what-is-cybersecurity.html" },
      { title: "Kaspersky Threats", url: "https://www.kaspersky.com/resource-center/threats" }
    ]
  }
];

export default function ReferencesSection() {
  return (
    <div className="space-y-8 slide-up">
      <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl mb-8">
        <p className="text-emerald-900 font-medium">
          The following references provide the academic and technical foundation for the concepts discussed in this project. Explore these resources to deepen your understanding of institutional data management.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {references.map((section, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
            <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-3">
              <span className="w-1.5 h-6 bg-emerald-500 rounded-full"></span>
              {section.category}
            </h3>
            <ul className="space-y-3">
              {section.links.map((link, lIdx) => (
                <li key={lIdx} className="flex items-start gap-2 group">
                  <svg className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  <a 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-emerald-600 hover:text-emerald-700 hover:underline transition-colors text-sm font-medium leading-relaxed"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
