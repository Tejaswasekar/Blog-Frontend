import React from 'react';

export default function IntroductionSection() {
  return (
    <div className="space-y-6">
      <p className="first-letter:text-5xl first-letter:font-bold first-letter:mr-1 first-letter:float-left first-letter:text-accent">
        In modern higher education, universities and colleges collect a large amount of information every day. This includes student records, faculty details, research publications, placement statistics, infrastructure data, and academic results. All this information becomes extremely important when an institution applies for accreditation.
      </p>
      <p>
        Accreditation bodies such as the National Assessment and Accreditation Council (NAAC) and the National Board of Accreditation (NBA) evaluate institutions based on the quality and reliability of their data. The reports submitted during accreditation must represent the real performance of the institution.
      </p>
      
      <p className="font-sans font-medium text-xl text-primary mt-8 mb-4">
        This is where data integrity becomes essential.
      </p>
      
      <p>
        Data integrity means that institutional data must remain accurate, complete, consistent, and trustworthy throughout its lifecycle. If the data used in accreditation reports is incorrect or manipulated, it can lead to wrong evaluation results and loss of credibility.
      </p>
      <p>
        For example, if a college reports incorrect placement statistics or outdated faculty information, the accreditation committee may question the authenticity of the entire report. Therefore, institutions must ensure that all their academic and administrative data is properly maintained and verified before submission.
      </p>
      <p>
        Maintaining data integrity also improves transparency and accountability in educational institutions. When accurate data is available, administrators can make better decisions regarding curriculum improvement, faculty development, and infrastructure planning.
      </p>
      <p>
        In simple terms, data integrity acts as the foundation of a reliable accreditation system. Without trustworthy data, the accreditation process cannot accurately evaluate the quality of an institution.
      </p>
    </div>
  );
}
