import React from 'react';

export default function CaseStudyUCSFSection() {
  return (
    <div className="space-y-6">
      <p>
        The ransomware attack on the University of California, San Francisco (UCSF), as reported by{' '}
        <a 
          href="https://www.bbc.com/news/technology-53214783" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-indigo-600 hover:text-indigo-800 underline font-medium"
        >
          BBC News
        </a>
        , is a significant real-world example that demonstrates the importance of data security, data integrity, and cybersecurity practices in higher education institutions. UCSF is a globally recognized university, particularly known for its advanced research in medicine and healthcare. Due to the nature of its work, the institution manages large volumes of sensitive data, including research data, academic records, and confidential information related to medical studies. This makes it an attractive target for cybercriminals.
      </p>

      <p>
        In June 2020, UCSF became the victim of a ransomware attack carried out by a cybercriminal group known as NetWalker. Ransomware is a type of malicious software that encrypts data and denies access to authorized users until a ransom is paid. In this case, the attackers successfully infiltrated the university’s IT systems, specifically targeting servers used by the School of Medicine. Once inside the system, they encrypted important files and databases, effectively locking the university out of its own data. This created a major disruption, especially because the affected data was crucial for ongoing academic and medical research activities.
      </p>

      <p>
        The attackers demanded a ransom of approximately $3 million in exchange for restoring access to the encrypted data. After negotiations, UCSF agreed to pay around $1.14 million in Bitcoin. The university justified this decision by stating that the encrypted data was extremely important to its academic work and that delaying access could have caused significant setbacks in research progress. This highlights a difficult situation faced by many organizations: whether to pay ransom and recover data quickly or refuse payment and risk losing critical information permanently.
      </p>

      <div className="my-8 border-l-4 border-amber-500 bg-amber-50 p-6 rounded-r-xl">
        <h3 className="text-xl font-serif font-bold text-amber-900 mb-4 whitespace-nowrap overflow-hidden text-ellipsis">⚠️ Serious Implications</h3>
        <ul className="space-y-4 list-disc pl-5 text-amber-900">
          <li>
            <strong>Disruption of Research:</strong> It disrupted the normal functioning of the university’s research systems. Researchers lost access to important datasets, which could have delayed scientific progress and impacted critical healthcare-related studies.
          </li>
          <li>
            <strong>Data Security Concerns:</strong> It raised concerns about data security and the potential risk of sensitive information being leaked. Although UCSF stated that there was no evidence of patient data being compromised, the possibility of data theft remains a major concern in such attacks.
          </li>
          <li>
            <strong>Financial Impact:</strong> The financial impact was significant, as the university had to pay a large sum of money to regain access to its data.
          </li>
        </ul>
      </div>

      <p>
        Following the attack, UCSF took several steps to strengthen its cybersecurity infrastructure. These measures included improving system monitoring, implementing stronger access control mechanisms, enhancing data encryption practices, and ensuring regular data backups. Backup systems are particularly important because they allow organizations to restore data without paying ransom. The incident also highlighted the need for regular cybersecurity audits and employee awareness training to prevent such attacks in the future. Many ransomware attacks exploit human errors, such as clicking on phishing emails or using weak passwords.
      </p>

      <p>
        From a data integrity perspective, this case clearly illustrates how cyberattacks can compromise not only the availability of data but also its reliability and trustworthiness. Data integrity ensures that information remains accurate, consistent, and secure throughout its lifecycle. In the UCSF case, although the data was not altered, its availability was compromised, which is a critical aspect of data integrity. Without access to accurate and timely data, institutions cannot perform their functions effectively, especially in environments like universities where data plays a central role in decision-making, research, and accreditation.
      </p>

      <p>
        This case also emphasizes the growing importance of cybersecurity in higher education institutions. Universities are increasingly becoming targets of cyberattacks because they store valuable data and often have open and distributed network systems. Unlike corporate organizations, universities prioritize accessibility and collaboration, which can sometimes lead to weaker security controls. Therefore, balancing openness with security is a key challenge for educational institutions.
      </p>

      <div className="pt-6 border-t border-slate-200 mt-8">
        <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">Conclusion</h3>
        <p className="font-sans text-lg text-slate-700 italic">
          The ransomware attack on UCSF serves as a powerful example of the risks associated with poor cybersecurity practices and the critical need for robust data protection mechanisms. It highlights the importance of implementing strong security frameworks, maintaining regular backups, and ensuring proper data governance policies. The case also demonstrates that investing in cybersecurity is not optional but essential for safeguarding institutional data, maintaining operational continuity, and preserving trust. For accreditation processes and institutional evaluation, ensuring data integrity and security is crucial, as compromised data can lead to incorrect assessments and loss of credibility. Therefore, institutions must adopt proactive strategies to protect their data and prevent similar incidents in the future.
        </p>
      </div>
    </div>
  );
}
