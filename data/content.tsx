import React from 'react';
import { 
  ShieldCheck, 
  Scale, 
  FileText, 
  Activity, 
  Truck, 
  Building2, 
  AlertCircle,
  CheckCircle2,
  BookOpen,
  Search
} from 'lucide-react';
import { SectionContent, FAQItem, TimelineStep, RiskClass } from '../types';

export const comprehensiveQuestions: FAQItem[] = [
  {
    question: "1. What is the primary difference between the old RDC 185/2001 and the new RDC 751/2022?",
    answer: "RDC 751/2022 updates the definitions, classification rules, and labeling requirements to align closer with the European MDR and IMDRF guidelines. It introduces specific rules for 'Notification' vs. 'Registration' and incorporates RDC 185 requirements into a more modern framework."
  },
  {
    question: "2. Can a foreign manufacturer submit directly to ANVISA?",
    answer: "No. Foreign manufacturers must appoint a Brazil Registration Holder (BRH). The BRH must be a company legally established in Brazil with local operating permits (AFE)."
  },
  {
    question: "3. What is the difference between 'Notificação' and 'Registro'?",
    answer: "Notificação is a simplified pathway for Class I and II devices, with faster review times and no expiration date on the certificate. Registro is for Class III and IV devices, requiring a more in-depth technical review and is valid for 10 years (renewable)."
  },
  {
    question: "4. Is INMETRO certification mandatory for all devices?",
    answer: "No. INMETRO certification is generally required for electro-medical devices (IEC 60601 series) and some other specific categories (e.g., needles, syringes) before ANVISA submission."
  },
  {
    question: "5. Does ANVISA accept MDSAP reports for BGMP compliance?",
    answer: "Yes, ANVISA is an MDSAP participating member. An MDSAP audit report can be used to satisfy Brazilian Good Manufacturing Practice (BGMP) certification requirements, often expediting the process."
  },
  {
    question: "6. What are the language requirements for technical documentation?",
    answer: "The legal documents and Instructions for Use (IFU) must be in Portuguese. Technical reports (testing, clinical) can often be submitted in English, but summaries or specific parts may need translation depending on the reviewer."
  },
  {
    question: "7. How does ANVISA classify Software as a Medical Device (SaMD)?",
    answer: "Regulated under RDC 657/2022, SaMD is classified based on risk (I to IV) similar to hardware. It requires validation, version control, and cybersecurity documentation."
  },
  {
    question: "8. What is the 'Economic Information Report' (RIE)?",
    answer: "The RIE is a requirement to provide pricing comparisons to other markets. While previously strictly enforced for registration, regulations have evolved, but economic data transparency remains a component of market entry."
  },
  {
    question: "9. Are clinical trials in Brazil mandatory for registration?",
    answer: "Not always. ANVISA often accepts foreign clinical data if it is applicable to the Brazilian population. However, for high-risk innovative devices without predicates, local data might be requested."
  },
  {
    question: "10. What is the validity period of a BGMP certificate?",
    answer: "A BGMP certificate is valid for two years. Renewal applications should be submitted before expiration to maintain market access."
  },
  {
    question: "11. Can registrations be transferred between distributors?",
    answer: "Yes, RDC 102/2016 allows for the transfer of registration ownership between companies in Brazil, provided both parties agree and meet regulatory requirements."
  },
  {
    question: "12. What are the labeling requirements for ANVISA?",
    answer: "Labels must be in Portuguese and include the registration number, technical responsibility name, manufacturer details, and importer details. Symbols (ISO 15223) are widely accepted."
  },
  {
    question: "13. How does the family grouping concept work in Brazil?",
    answer: "Devices can be grouped into a family if they share the same manufacturer, same intended use, same technology, and similar risk profile. This allows one registration for multiple models."
  },
  {
    question: "14. What are the post-market surveillance obligations?",
    answer: "Holders must have a Techno-vigilance system to report adverse events (RDC 67/2009). Serious adverse events must be reported to ANVISA within specific timeframes (e.g., 72 hours for death/serious injury)."
  },
  {
    question: "15. Is it possible to import devices without registration?",
    answer: "Generally no, but exceptions exist for 'Compassionate Use', personal use, or research purposes, which require specific import petitions."
  },
  {
    question: "16. How does ANVISA handle refurbished medical equipment?",
    answer: "Importation of used or refurbished medical equipment is heavily restricted and generally prohibited unless the equipment is not manufactured in Brazil and meets strict technical criteria."
  },
  {
    question: "17. What is the timeline for Class I/II Notification approval?",
    answer: "It is administrative and typically takes 30-60 days. It is not a full technical review, but a documentation check."
  },
  {
    question: "18. What is the timeline for Class III/IV Registration approval?",
    answer: "Timelines vary widely, typically 6 to 12 months, depending on the queue and whether BGMP certification is already in place."
  },
  {
    question: "19. Can I use e-IFU (Electronic Instructions for Use) in Brazil?",
    answer: "Yes, for professional use devices (RDC 751/2022), e-IFUs are permitted provided the user is informed how to access them. Lay-use devices usually require paper format."
  },
  {
    question: "20. What happens if my device fails INMETRO testing?",
    answer: "You cannot proceed with ANVISA registration. The device must be modified to pass IEC standards, and re-tested by an INMETRO-accredited lab (or accepted foreign ILAC lab)."
  }
];

export const processSteps: TimelineStep[] = [
  {
    title: "1. Classification & Gap Analysis",
    description: "Determine the Risk Class (I, II, III, IV) per RDC 751/2022 and identify the product code.",
    details: ["Class I: Low Risk", "Class II: Medium Risk", "Class III: High Risk", "Class IV: Maximum Risk"]
  },
  {
    title: "2. Brazil Representation",
    description: "Appoint a Brazil Registration Holder (BRH).",
    details: ["Must hold AFE (Company Operating Authorization)", "Legal responsibility for the product"]
  },
  {
    title: "3. BGMP & Certification",
    description: "Ensure Quality Management System compliance.",
    details: ["Class I/II: MDSAP or ISO 13485 usually sufficient for file", "Class III/IV: Requires BGMP Certificate (inspection or MDSAP use)", "INMETRO: Required for electro-medical devices"]
  },
  {
    title: "4. Technical File Compilation",
    description: "Prepare the dossier according to RDC 751/2022.",
    details: ["Legal documents (Portuguese)", "Technical testing reports", "Clinical evaluation summary", "IFU and Labels in Portuguese"]
  },
  {
    title: "5. Submission",
    description: "Submit to ANVISA via the Sollicita system.",
    details: ["Pay regulatory fees", "Submit 'Notificação' for Class I/II", "Submit 'Registro' for Class III/IV"]
  },
  {
    title: "6. Approval & Market Entry",
    description: "Receive publication in the Official Gazette (DOU).",
    details: ["Class I/II: Notification number issued", "Class III/IV: Registration number issued", "Valid for 5 years (Class III/IV) or Indefinite (Class I/II)"]
  }
];

export const sections: SectionContent[] = [
  {
    id: 'background',
    title: 'Background & Context',
    icon: BookOpen,
    description: 'Understanding the regulatory landscape in Brazil.',
    content: (
      <div className="space-y-4">
        <p className="text-gray-700 leading-relaxed">
          The regulatory framework for medical devices in Brazil is governed by the <strong>National Health Surveillance Agency (ANVISA)</strong>. 
          Similar to the EU MDR transition, Brazil has recently modernized its regulations to align with international standards (IMDRF).
        </p>
        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
          <h4 className="font-semibold text-blue-900">Key Legislation: RDC 751/2022</h4>
          <p className="text-sm text-blue-800 mt-2">
            This Resolution replaces the older RDC 185/2001. It establishes the requirements for risk classification, 
            labeling, and instructions for use, aiming for harmonization with MERCOSUR and European standards.
          </p>
        </div>
        <p className="text-gray-700">
          Manufacturers must be aware that ANVISA has strict pre-market approval requirements that vary significantly based on the risk class of the device.
        </p>
      </div>
    )
  },
  {
    id: 'scope',
    title: 'Scope & Definition',
    icon: Search,
    description: 'What qualifies as a medical device in Brazil?',
    content: (
      <div className="space-y-4">
        <p className="text-gray-700">
          Under <strong>RDC 751/2022</strong>, a medical device is any instrument, apparatus, appliance, software, material, or other article, intended by the manufacturer to be used regarding human beings for specific medical purposes.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="p-4 bg-white border rounded-lg shadow-sm">
            <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <Activity className="w-4 h-4 text-anvisa-600" /> Medical Devices
            </h4>
            <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
              <li>Surgical instruments</li>
              <li>Implants</li>
              <li>Diagnostic equipment</li>
              <li>Software (SaMD)</li>
            </ul>
          </div>
          <div className="p-4 bg-white border rounded-lg shadow-sm">
            <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-anvisa-600" /> IVDs
            </h4>
            <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
              <li>Reagents</li>
              <li>Calibrators</li>
              <li>Sample receptacles</li>
              <li>Analyzers</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'classification',
    title: 'Risk Classification',
    icon: Scale,
    description: 'Determining the risk class is the first step.',
    content: (
      <div className="space-y-6">
        <p className="text-gray-700">
          Brazil follows a 4-tier risk classification system. Your regulatory pathway depends entirely on this classification.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { class: RiskClass.I, risk: 'Low Risk', example: 'Non-sterile gauze, hospital beds', color: 'bg-green-100 text-green-800 border-green-200' },
            { class: RiskClass.II, risk: 'Medium Risk', example: 'Syringes, infusion sets', color: 'bg-yellow-100 text-yellow-800 border-yellow-200' },
            { class: RiskClass.III, risk: 'High Risk', example: 'Orthopedic implants, X-ray machines', color: 'bg-orange-100 text-orange-800 border-orange-200' },
            { class: RiskClass.IV, risk: 'Maximum Risk', example: 'Heart valves, pacemakers', color: 'bg-red-100 text-red-800 border-red-200' },
          ].map((item) => (
            <div key={item.class} className={`p-4 rounded-xl border ${item.color} flex flex-col justify-between`}>
              <div>
                <h3 className="font-bold text-lg mb-1">{item.class}</h3>
                <span className="text-xs font-semibold uppercase tracking-wider opacity-75">{item.risk}</span>
              </div>
              <p className="text-sm mt-3 opacity-90">{item.example}</p>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: 'obligations',
    title: 'Manufacturer Obligations',
    icon: Building2,
    description: 'Responsibilities of the manufacturer and local holder.',
    content: (
      <div className="space-y-4">
        <p className="text-gray-700">
          Foreign manufacturers <strong>cannot</strong> register devices directly. You must appoint a Brazil Registration Holder (BRH).
        </p>
        <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
           <h4 className="font-bold text-gray-900 mb-3">Key Requirements</h4>
           <ul className="space-y-3">
             <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-anvisa-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm"><strong>BRH:</strong> Must have an AFE (Operating Authorization) and is legally liable for the product in Brazil.</span>
             </li>
             <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-anvisa-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm"><strong>BGMP:</strong> Manufacturers of Class III and IV devices must pass a BGMP inspection (or use MDSAP). Class I and II need a GMP declaration.</span>
             </li>
             <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-anvisa-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm"><strong>INMETRO:</strong> Electro-medical devices require testing by an INMETRO-accredited lab (or accepted ILAC report) for IEC 60601 certification.</span>
             </li>
           </ul>
        </div>
      </div>
    )
  }
];