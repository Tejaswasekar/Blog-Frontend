import React from 'react';

export default function TechniquesEnsureAccuracySection() {
  return (
    <div className="space-y-6">
      <p className="text-lg">
        Ensuring data accuracy requires a combination of technological tools and organizational practices. Institutions must adopt structured methods to reduce errors and maintain reliable data systems.
      </p>

      <ul className="space-y-6 list-none pl-0 mt-8">
        <li className="flex gap-4 items-start">
          <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 text-accent font-bold mt-1">1</span>
          <div>
            <strong className="text-primary font-sans text-lg block mb-2">Automated Data Entry Systems</strong>
            <p className="m-0 text-base">Instead of manually entering data multiple times, institutions can integrate systems so that data is automatically transferred between platforms. For example, student information entered during admission can automatically populate examination and academic databases.</p>
          </div>
        </li>
        <li className="flex gap-4 items-start">
          <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 text-accent font-bold mt-1">2</span>
          <div>
            <strong className="text-primary font-sans text-lg block mb-2">Standardized Data Collection Procedures</strong>
            <p className="m-0 text-base">Institutions should establish clear guidelines for how data should be collected, formatted, and stored. Standardization helps maintain consistency across different departments.</p>
          </div>
        </li>
        <li className="flex gap-4 items-start">
          <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 text-accent font-bold mt-1">3</span>
          <div>
            <strong className="text-primary font-sans text-lg block mb-2">Regular Data Audits</strong>
            <p className="m-0 text-base">A data audit involves reviewing institutional databases to identify errors, duplicates, and missing information. These audits help ensure that the data used in accreditation reports is reliable.</p>
          </div>
        </li>
        <li className="flex gap-4 items-start">
          <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 text-accent font-bold mt-1">4</span>
          <div>
            <strong className="text-primary font-sans text-lg block mb-2">Training Staff Members</strong>
            <p className="m-0 text-base">Administrative and academic staff should understand the importance of maintaining accurate records and following institutional data policies.</p>
          </div>
        </li>
        <li className="flex gap-4 items-start">
          <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 text-accent font-bold mt-1">5</span>
          <div>
            <strong className="text-primary font-sans text-lg block mb-2">Role-Based Access Control</strong>
            <p className="m-0 text-base">These systems allow only authorized individuals to update specific data fields. For example, only the examination department may be allowed to modify student grade records, while faculty research data may be managed by the research office.</p>
          </div>
        </li>
      </ul>

      <p className="mt-8 font-medium font-sans text-accent">
        By combining technological solutions with effective governance practices, institutions can significantly improve the accuracy of their data.
      </p>
    </div>
  );
}
