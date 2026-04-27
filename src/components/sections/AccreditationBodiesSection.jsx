import React from 'react';

export default function AccreditationBodiesSection() {
  return (
    <div className="space-y-6">
      <p>
        Accreditation is a formal process through which educational institutions are evaluated based on predefined quality standards. The purpose of accreditation is to ensure that institutions provide high-quality education and maintain academic excellence.
      </p>
      
      <p className="font-sans font-medium text-xl text-primary mt-8 mb-4 border-l-4 border-accent pl-4">
        In India, two major accreditation bodies play a significant role:
      </p>
      
      <ul className="space-y-6 list-none pl-0 mt-6">
        <li className="bg-slate-50 p-6 rounded-lg border border-slate-100 flex gap-4 items-start">
          <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 text-accent font-bold mt-1">1</span>
          <div>
            <strong className="text-primary font-sans text-lg block mb-2">National Assessment and Accreditation Council (NAAC)</strong>
            <p className="m-0 text-base">NAAC evaluates universities and colleges based on multiple criteria such as teaching quality, research output, infrastructure, governance, and student support systems.</p>
          </div>
        </li>
        <li className="bg-slate-50 p-6 rounded-lg border border-slate-100 flex gap-4 items-start">
          <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 text-accent font-bold mt-1">2</span>
          <div>
            <strong className="text-primary font-sans text-lg block mb-2">National Board of Accreditation (NBA)</strong>
            <p className="m-0 text-base">NBA focuses mainly on technical and professional programs such as engineering, management, and pharmacy. It evaluates programs based on outcome-based education and industry relevance.</p>
          </div>
        </li>
      </ul>
      
      <p className="mt-8">
        Both NAAC and NBA require institutions to submit detailed data and supporting documents during the accreditation process. These documents include academic results, faculty qualifications, research publications, infrastructure details, and student achievements.
      </p>
      <p>
        Because accreditation decisions are based on this data, institutions must ensure that the information they submit is accurate, verified, and properly documented.
      </p>
    </div>
  );
}
