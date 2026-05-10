export interface CoverageType {
  slug: string
  name: string
  icon: string
  fromPrice: string
  description: string
  keyFacts: string[]
  whoNeeds: string[]
}

export const coverageTypes: CoverageType[] = [
  {
    slug: 'directors-and-officers',
    name: 'Directors & Officers (D&O)',
    icon: '🛡️',
    fromPrice: 'NZ$800/year',
    description:
      'Directors and Officers (D&O) insurance protects individual directors and officers from personal financial liability arising from wrongful acts in their management capacity. It covers legal defence costs, settlements, and judgments if a director is sued by shareholders, regulators, employees, or creditors. Under the Companies Act 1993, directors can be held personally liable for company decisions.',
    keyFacts: [
      'Covers individual directors and officers personally',
      'Protects against shareholder, regulator, and creditor claims',
      'Covers legal defence costs and judgments',
      'Three-part structure: Side A (personal), Side B (company reimbursement), Side C (entity cover)',
    ],
    whoNeeds: [
      'Directors of NZ limited companies',
      'Officers and senior executives',
      'Non-executive directors and independent board members',
      'Directors of subsidiaries and associate companies',
    ],
  },
  {
    slug: 'management-liability',
    name: 'Management Liability',
    icon: '⚖️',
    fromPrice: 'NZ$1,200/year',
    description:
      'Management liability insurance is a broader package that bundles D&O cover with employment practices liability (EPL), crime cover, and statutory liability into a single policy. It is designed to protect the company as an entity and its management team from a wide range of managerial liability risks, including employment disputes, fiduciary breaches, and regulatory investigations.',
    keyFacts: [
      'Combines D&O, EPL, crime, and statutory liability in one policy',
      'Covers employment disputes including wrongful dismissal',
      'Includes cover for fiduciary liability',
      'Protects both the company and individual managers',
    ],
    whoNeeds: [
      'SME companies wanting comprehensive management protection',
      'Companies with employees who face employment claims',
      'Businesses subject to regulatory oversight',
      'Companies that handle client funds or have fiduciary duties',
    ],
  },
  {
    slug: 'professional-indemnity',
    name: 'Professional Indemnity',
    icon: '📋',
    fromPrice: 'NZ$600/year',
    description:
      'Professional indemnity (PI) insurance covers directors and companies against claims arising from professional advice, errors, or omissions that cause a third party financial loss. For directors who provide professional services — such as legal, accounting, consulting, or engineering — PI insurance complements D&O cover by addressing the professional services dimension of their liability.',
    keyFacts: [
      'Covers claims arising from professional advice or services',
      'Includes legal defence costs and compensation',
      'Claims-made policy structure',
      'Can be combined with D&O for comprehensive protection',
    ],
    whoNeeds: [
      'Directors who provide professional advice or services',
      'Companies in professional services sectors',
      'Directors of law, accounting, or consulting firms',
      'Any director whose decisions could cause financial loss to third parties',
    ],
  },
  {
    slug: 'statutory-liability',
    name: 'Statutory Liability',
    icon: '📜',
    fromPrice: 'NZ$400/year',
    description:
      'Statutory liability insurance covers directors and officers against fines and legal costs arising from unintentional breaches of New Zealand legislation. This includes the Companies Act 1993, the Health and Safety at Work Act 2015, the Financial Markets Conduct Act 2013, and the Resource Management Act. Directors can face personal prosecution under these statutes.',
    keyFacts: [
      'Covers unintentional breaches of NZ legislation',
      'Includes Companies Act, HSWA, and FMCA exposure',
      'Covers legal defence costs and fines where insurable',
      'Does not cover deliberate or criminal acts',
    ],
    whoNeeds: [
      'All company directors with statutory obligations',
      'Directors with health and safety oversight responsibilities',
      'Directors of regulated entities under the FMCA',
      'Officers responsible for environmental compliance',
    ],
  },
]

export function getCoverageBySlug(slug: string): CoverageType | undefined {
  return coverageTypes.find((c) => c.slug === slug)
}
