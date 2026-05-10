export interface Provider {
  slug: string
  name: string
  logo: string
  specialty: string
  description: string
}

export const providers: Provider[] = [
  {
    slug: 'chubb',
    name: 'Chubb',
    logo: '/providers/chubb.svg',
    specialty: 'D&O & Management Liability',
    description: 'Chubb is one of the world\'s leading D&O insurers, offering comprehensive directors and officers liability, management liability, and professional indemnity solutions. Their D&O policies are widely regarded as market-leading in breadth of cover.',
  },
  {
    slug: 'qbe',
    name: 'QBE Insurance',
    logo: '/providers/qbe.svg',
    specialty: 'Management Liability Packages',
    description: 'QBE provides tailored management liability packages for businesses of all sizes. Their policies combine D&O, EPL, statutory liability, and crime cover, with a strong reputation for claims handling in the ANZ market.',
  },
  {
    slug: 'vero',
    name: 'Vero Insurance',
    logo: '/providers/vero.svg',
    specialty: 'SME Management Liability',
    description: 'Vero offers competitive management liability solutions for SME directors and officers. Their packaged products are accessible for smaller companies that need broad cover without complex policy structures.',
  },
  {
    slug: 'aig',
    name: 'AIG',
    logo: '/providers/aig.svg',
    specialty: 'Listed Company & Complex Risks',
    description: 'AIG is a global leader in D&O insurance for listed companies and complex corporate risks. Their policies include sophisticated securities entity cover (Side C) and broad regulatory defence extensions suitable for NZX-listed directors.',
  },
  {
    slug: 'berkley',
    name: 'Berkley Insurance',
    logo: '/providers/berkley.svg',
    specialty: 'Specialist D&O Solutions',
    description: 'Berkley Insurance Australia provides specialist D&O and management liability solutions for the Australasian market. They are known for their flexible underwriting approach for SMEs and not-for-profit organisations.',
  },
]
