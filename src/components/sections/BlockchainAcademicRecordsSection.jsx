import React from 'react';

export default function BlockchainAcademicRecordsSection() {
  return (
    <div className="space-y-6">
      <p className="leading-relaxed">
        Blockchain technology has recently gained attention as a potential solution for secure and transparent data management. Blockchain is a distributed digital ledger that records transactions in a secure and immutable manner.
      </p>

      <div className="my-10 flex flex-col md:flex-row gap-8 items-center bg-slate-50 p-8 rounded-2xl border border-slate-200">
         <div className="flex-1 space-y-4">
            <h3 className="text-xl font-sans font-bold text-slate-800 border-b border-slate-200 pb-2">
              Traditional Systems
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              In traditional database systems, data is stored in centralized servers that can be modified by authorized administrators. While this approach is efficient, it also creates the possibility of unauthorized modifications or data tampering.
            </p>
         </div>
         
         <div className="w-px h-32 bg-slate-300 hidden md:block relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 border border-slate-300">
              <span className="text-slate-400 text-xs font-bold font-sans">VS</span>
            </div>
         </div>
         <div className="h-px w-full bg-slate-300 block md:hidden relative my-4">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 border border-slate-300">
              <span className="text-slate-400 text-xs font-bold font-sans">VS</span>
            </div>
         </div>
         
         <div className="flex-1 space-y-4">
            <h3 className="text-xl font-sans font-bold text-amber-600 border-b border-amber-100 pb-2">
              Blockchain Systems
            </h3>
            <p className="text-slate-700 text-sm leading-relaxed">
              Blockchain addresses this by creating a decentralized system where data records are stored across multiple network nodes. Once a record is added to the blockchain, it cannot be altered without the consensus of the network participants.
            </p>
         </div>
      </div>

      <p className="text-lg text-slate-700 font-medium leading-relaxed">
        In educational institutions, blockchain can be used to store and verify academic records such as degrees, certificates, transcripts, and research publications. Because blockchain records are tamper-resistant, they provide a reliable method for verifying the authenticity of academic credentials.
      </p>

      <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg my-6">
        <p className="text-amber-900 m-0 leading-relaxed font-sans">
          For example, when a university issues a digital certificate using blockchain technology, the certificate can be verified by employers or other institutions without the need for manual verification processes.
        </p>
      </div>

      <p className="leading-relaxed">
        Blockchain can also improve transparency in accreditation processes. Accreditation bodies can verify institutional data through secure blockchain records, ensuring that submitted information has not been manipulated.
      </p>

      <p className="leading-relaxed">
        Although blockchain implementation in education is still evolving, it has the potential to enhance data security, reduce administrative workload, and increase trust in institutional records.
      </p>
    </div>
  );
}
