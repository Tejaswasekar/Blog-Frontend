import React from 'react';

export default function CaseStudyFailureSection() {
  return (
    <div className="space-y-6">
      <p>
        To understand the importance of data integrity, it is useful to examine situations where poor data management has negatively affected institutional evaluation.
      </p>

      <div className="my-8 border-l-4 border-rose-500 bg-rose-50 p-6 rounded-r-xl">
        <h3 className="text-xl font-serif font-bold text-rose-900 mb-4 whitespace-nowrap overflow-hidden text-ellipsis">⚠️ Real-World Consequences</h3>
        <ul className="space-y-4 list-disc pl-5 text-rose-900">
          <li>
            In some cases, institutions have faced difficulties during accreditation because the data submitted in their reports could not be verified. For example, a university may report a high number of research publications in its accreditation report. However, when the accreditation committee checks the sources, they may find inconsistencies or missing documentation.
          </li>
          <li>
            Similarly, inaccurate student performance data can create serious problems. If examination results reported by the institution do not match the records maintained by the university examination board, the accreditation committee may question the authenticity of the entire dataset.
          </li>
          <li>
            Another example involves infrastructure data. Institutions sometimes report facilities such as laboratories, equipment, or digital resources that are not fully operational or properly documented. During accreditation visits, evaluators verify these claims, and discrepancies may negatively impact the institution's rating.
          </li>
        </ul>
      </div>

      <p>
        These examples highlight the importance of maintaining accurate and well-documented institutional data. Accreditation bodies expect institutions to provide evidence-based information that reflects their true academic performance.
      </p>
      
      <div className="pt-6 border-t border-slate-200 mt-8">
        <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">Final Thought</h3>
        <p className="font-sans text-lg text-slate-700 italic">
          "To avoid such issues, institutions must establish strong data management practices, implement governance policies, and regularly audit their data systems."
        </p>
      </div>
    </div>
  );
}
