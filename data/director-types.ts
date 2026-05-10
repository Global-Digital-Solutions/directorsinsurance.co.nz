export interface DirectorType {
  slug: string
  name: string
  icon: string
  description: string
  risks: string[]
  coverNeeds: string[]
  metaTitle: string
  metaDesc: string
  h1: string
  intro: string
}

export const directorTypes: DirectorType[] = [
  {
    slug: 'sme-directors',
    name: 'SME Directors',
    icon: '🏢',
    description: 'Directors of small and medium-sized enterprises face unique risks including personal liability for company debts in some circumstances, creditor claims, and regulatory compliance under the Companies Act 1993.',
    risks: [
      'Personal liability under Companies Act 1993 for reckless trading',
      'Creditor claims if the company becomes insolvent',
      'Employee claims for wrongful dismissal or workplace issues',
      'Regulatory fines from WorkSafe NZ or the Commerce Commission',
    ],
    coverNeeds: [
      'D&O insurance to protect personal assets',
      'Management liability for employment practices cover',
      'Statutory liability for regulatory breach defence',
      'Run-off cover when retiring from the board',
    ],
    metaTitle: 'D&O Insurance for SME Directors NZ | Protect Your Personal Assets',
    metaDesc: 'D&O insurance for NZ SME directors. Protect your personal assets from company claims, creditor actions, and regulatory proceedings. Free broker referral.',
    h1: 'D&O Insurance for SME Directors in New Zealand',
    intro: 'As an SME director in New Zealand, you carry significant personal liability for the decisions you make in your management role. The Companies Act 1993 imposes strict duties on directors — and failing to meet those duties can expose your personal assets to claims from shareholders, creditors, and regulators.',
  },
  {
    slug: 'startup-founders',
    name: 'Startup Founders',
    icon: '🚀',
    description: 'Startup founders who serve as directors face investor disputes, regulatory scrutiny, employment claims, and the unique risks of rapid growth — often without the corporate governance infrastructure of established companies.',
    risks: [
      'Investor claims arising from capital raising representations',
      'Employment claims from rapid hiring and restructuring',
      'Regulatory scrutiny from the FMA and Commerce Commission',
      'IP and contractual disputes with co-founders or partners',
    ],
    coverNeeds: [
      'D&O insurance required by most institutional investors',
      'Employment practices liability for scaling team',
      'Professional indemnity if providing tech or advisory services',
      'Broad management liability package as the company grows',
    ],
    metaTitle: 'D&O Insurance for Startup Founders NZ | Investor-Ready Cover',
    metaDesc: 'D&O insurance for NZ startup founders. Meet investor requirements and protect yourself from claims as your company scales. Free broker matching.',
    h1: 'D&O Insurance for Startup Founders in New Zealand',
    intro: 'Building a startup in New Zealand means moving fast — but personal liability does not wait for your company to mature. Investors increasingly require D&O insurance as a condition of funding, and the decisions you make in the early stages of your company can have long-lasting personal liability consequences.',
  },
  {
    slug: 'non-executive-directors',
    name: 'Non-Executive Directors',
    icon: '👔',
    description: 'Non-executive directors (NEDs) sit on boards in an oversight capacity but face the same legal liabilities as executive directors under the Companies Act 1993. Many NEDs serve on multiple boards, compounding their exposure.',
    risks: [
      'Same personal liability as executive directors under Companies Act',
      'Risk of multiple-board exposure if serving as NED on several companies',
      'Inadequate disclosure of company information to make informed decisions',
      'Relying on management information that proves incorrect',
    ],
    coverNeeds: [
      'Personal D&O cover in case company policy does not extend',
      'Verification that each company\'s D&O policy covers NEDs',
      'Run-off cover on each board when tenure ends',
      'Independent legal advice cover for conflicts of interest',
    ],
    metaTitle: 'D&O Insurance for Non-Executive Directors NZ | Personal Protection',
    metaDesc: 'D&O insurance for NZ non-executive directors. Protect yourself personally across every board you serve on. Expert broker advice, free referral.',
    h1: 'D&O Insurance for Non-Executive Directors in New Zealand',
    intro: 'Being a non-executive director in New Zealand carries the same legal responsibilities as being an executive director — without the operational control. As a NED, you rely on the information management provides you, yet you can still be personally liable for board decisions that lead to harm.',
  },
  {
    slug: 'listed-company-directors',
    name: 'Listed Company Directors',
    icon: '📈',
    description: 'Directors of NZX-listed companies face heightened scrutiny from the Financial Markets Authority (FMA), shareholder activist groups, and institutional investors. Securities litigation and regulatory enforcement actions are significant risks.',
    risks: [
      'FMA enforcement action for continuous disclosure breaches',
      'Securities class actions from shareholders for market misleading conduct',
      'Insider trading allegations and investigation costs',
      'High media and public scrutiny of board decisions',
    ],
    coverNeeds: [
      'High-limit D&O with securities entity cover (Side C)',
      'Regulatory defence extension for FMA investigations',
      'Crisis communications costs cover',
      'Broad policy with no securities exclusions',
    ],
    metaTitle: 'D&O Insurance for Listed Company Directors NZ | FMA & Securities Cover',
    metaDesc: 'D&O insurance for NZX-listed company directors. Cover FMA investigations, securities claims, and shareholder disputes. Expert broker referral service.',
    h1: 'D&O Insurance for Listed Company Directors in New Zealand',
    intro: 'Directors of NZX-listed companies operate in one of the most demanding regulatory environments in New Zealand. The Financial Markets Conduct Act 2013 imposes strict continuous disclosure obligations, and the Financial Markets Authority actively pursues breaches. A single disclosure failure can trigger a shareholder class action and a regulatory investigation simultaneously.',
  },
  {
    slug: 'trustees-and-charities',
    name: 'Trustees & Charity Directors',
    icon: '❤️',
    description: 'Trustees of charitable trusts and incorporated societies carry personal liability for their governance decisions under the Charities Act 2005 and the Incorporated Societies Act 2022. Many assume their volunteer status protects them — it does not.',
    risks: [
      'Personal liability for misuse of charitable funds',
      'Claims from beneficiaries for breach of trustee duty',
      'Regulatory action from Charities Services or the Department of Internal Affairs',
      'Employment claims from charity staff',
    ],
    coverNeeds: [
      'Trustee liability cover as part of a management liability package',
      'D&O cover specifically extending to charitable entities',
      'Employment practices liability for charity workforce',
      'Affordable cover suited to not-for-profit budgets',
    ],
    metaTitle: 'Trustee Liability Insurance NZ | Charity Directors & Board Members',
    metaDesc: 'Trustee and charity director liability insurance NZ. Protect yourself personally while serving on charity and trust boards. Free broker referral.',
    h1: 'Trustee Liability Insurance for Charity Directors in New Zealand',
    intro: 'Serving as a trustee or director of a New Zealand charitable trust or incorporated society is a meaningful commitment — but it comes with real personal liability. The Charities Act 2005, the Incorporated Societies Act 2022, and the general law of trusts all impose duties on trustees that, if breached, can result in personal claims.',
  },
  {
    slug: 'ceo-and-senior-management',
    name: 'CEOs & Senior Management',
    icon: '💼',
    description: 'Chief executives and senior managers who are not formally directors can still be personally liable as "officers" under the Companies Act 1993 and the Health and Safety at Work Act 2015. D&O and management liability policies typically extend to cover officers as well as directors.',
    risks: [
      'Personal liability as an "officer" under the HSWA 2015',
      'Employment claims from direct reports',
      'Regulatory investigation costs from Commerce Commission or FMA',
      'Contractual liability arising from management decisions',
    ],
    coverNeeds: [
      'Confirmation that company D&O policy extends to officers',
      'Employment practices liability coverage',
      'Statutory liability for HSWA and other legislation',
      'Personal D&O cover if company policy has gaps',
    ],
    metaTitle: 'D&O Insurance for CEOs & Senior Managers NZ | Officer Liability Cover',
    metaDesc: 'D&O and management liability insurance for NZ CEOs and senior managers. Protect yourself as an officer under NZ law. Free broker matching service.',
    h1: 'D&O Insurance for CEOs and Senior Management in New Zealand',
    intro: 'You do not need to hold the title of director to face director-level personal liability in New Zealand. The Companies Act 1993 and the Health and Safety at Work Act 2015 both impose significant obligations on "officers" of companies — a category that includes chief executives and senior managers who exercise significant influence over company decisions.',
  },
]

export function getDirectorTypeBySlug(slug: string): DirectorType | undefined {
  return directorTypes.find((d) => d.slug === slug)
}
