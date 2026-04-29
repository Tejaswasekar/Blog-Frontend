import React from 'react';

export default function DataIntegrityTypesSection() {
  return (
    <div className="space-y-6">
      <p>
        Data integrity refers to the accuracy, reliability, and consistency of data throughout its lifecycle. According to <a href="https://www.ibm.com/think/topics/data-integrity" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-medium">IBM</a>, maintaining data integrity is crucial for any information system. In educational institutions, data is generated from many sources such as student admission systems, examination departments, research management systems, faculty databases, and administrative records. Maintaining the integrity of this data means ensuring that the information remains correct and unchanged unless properly updated through authorized processes.
      </p>
      <p>
        In the context of accreditation, data integrity is extremely important because accreditation bodies rely heavily on institutional data to evaluate the quality of education. Research published through platforms like <a href="https://www.researchgate.net/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-medium">ResearchGate</a> and <a href="https://link.springer.com/book/10.1007/978-3-319-24106-7" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-medium">Springer</a> highlights how information systems in academia depend on high-quality, trustworthy data for valid evaluation.
      </p>
      
      <p className="font-sans font-medium text-xl text-primary mt-8 mb-4 border-l-4 border-accent pl-4">
        Data integrity is generally categorized into two major types:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
          <h3 className="text-lg font-sans font-bold text-slate-900 mb-2">1. Physical Data Integrity</h3>
          <p className="text-base m-0">
            This refers to the protection of data from physical damage caused by hardware failures, power outages, natural disasters, or system crashes. For example, if a university server storing student records fails due to a hardware malfunction, important data could be lost. To prevent such issues, institutions must implement backup systems and disaster recovery mechanisms.
          </p>
        </div>
        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
          <h3 className="text-lg font-sans font-bold text-slate-900 mb-2">2. Logical Data Integrity</h3>
          <p className="text-base m-0">
            Logical integrity ensures that the structure and relationships within the data remain valid and meaningful. For example, a student's grade should correspond correctly to the specific course and semester. If this relationship is broken due to incorrect data entry or system errors, the information becomes unreliable.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-serif font-bold text-slate-900 mt-8 mb-4">Key Principles of Data Integrity</h3>
      <p>Several key principles help maintain strong data integrity within institutions:</p>
      <ul className="space-y-4 list-disc pl-5 mt-4">
        <li><strong className="text-slate-900">Accuracy:</strong> Data must reflect the real situation without errors. For example, faculty publication records must accurately represent actual research outputs.</li>
        <li><strong className="text-slate-900">Consistency:</strong> The same data should remain uniform across different systems and departments. If a student's enrollment number appears differently in two separate databases, it creates confusion and reduces trust in the data.</li>
        <li><strong className="text-slate-900">Completeness:</strong> All required data fields must be properly filled. Missing information, such as incomplete faculty qualifications or missing research data, can weaken accreditation reports.</li>
        <li><strong className="text-slate-900">Validity:</strong> Ensures that data follows predefined rules and formats. For example, admission systems should not allow invalid dates or incorrect numerical values.</li>
      </ul>
      <p className="mt-6">
        By following these principles, institutions can maintain reliable data systems that support accurate reporting and evaluation during accreditation processes.
      </p>
    </div>
  );
}
