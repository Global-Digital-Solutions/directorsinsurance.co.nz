export interface LandingPage {
  slug: string
  title: string
  metaTitle: string
  metaDesc: string
  hero: string
  intro: string
  sections: { heading: string; body: string }[]
}

export const landingPages: LandingPage[] = [
  {
    slug: 'cheap',
    title: 'Cheap D&O Insurance NZ',
    metaTitle: 'Cheap D&O Insurance NZ | Affordable Directors Cover from NZ$800/year',
    metaDesc: 'Find affordable D&O insurance in NZ. Directors and officers cover from NZ$800/year. Compare quotes from licensed brokers and protect your directorship.',
    hero: 'Affordable D&O Insurance for Directors',
    intro: "Finding cheap D&O insurance does not mean sacrificing the protection you need. It means working with a specialist broker who can find the most competitive policy for your company's size, industry, and risk profile.",
    sections: [
      {
        heading: 'What Does D&O Insurance Cost?',
        body: "D&O insurance costs depend on your company's revenue, industry, number of directors, and claims history. For a small private company, D&O cover can start from around NZ$800–$1,500 per year. A management liability package covering D&O, employment practices, and statutory liability might cost NZ$2,500–$5,000 for an SME.\n\nThe most effective way to find affordable cover is through a specialist broker who can compare multiple insurers and find the best value for your specific risk profile.",
      },
      {
        heading: 'How to Reduce Your D&O Premium',
        body: "Several factors can reduce your D&O premium:\n\n- **Clean governance:** Companies with strong governance frameworks, proper board processes, and no prior claims attract lower premiums\n- **Appropriate limits:** Choose limits that match your actual exposure — not the highest available\n- **Bundled cover:** Management liability packages are often more cost-effective than standalone D&O\n- **Use a specialist broker:** Brokers access wholesale pricing not available directly to consumers",
      },
      {
        heading: "Cheap D&O Is Not Cut-Price Protection",
        body: "Avoid policies with very low premiums that contain major exclusions or inadequate Side A protection. The purpose of D&O insurance is to fund your defence when you need it most — a policy that does not respond properly in a claim is worthless, regardless of its price.\n\nA specialist broker can help you find genuinely competitive pricing without compromising the cover you need.",
      },
    ],
  },
  {
    slug: 'best',
    title: 'Best D&O Insurance NZ',
    metaTitle: 'Best D&O Insurance NZ 2026 | Top Directors Cover Compared',
    metaDesc: 'Find the best D&O insurance in NZ for 2026. Compare top providers including Chubb, QBE, Vero, AIG, and Berkley. Broker matching service.',
    hero: 'Find the Best D&O Insurance in 2026',
    intro: "The best D&O insurance for directors is the policy that provides the broadest protection for your specific risk profile at a competitive price — from an insurer with the financial strength and claims reputation to support you when you need it.",
    sections: [
      {
        heading: 'What Makes a Great D&O Policy?',
        body: "Key features to look for in a D&O policy:\n\n**Side A adequacy:** Strong Side A (personal director) cover that responds even when the company cannot indemnify\n\n**Broad definition of insured persons:** All directors, officers, and in some cases key employees\n\n**No major exclusions:** Watch for securities exclusions, pollution exclusions, or prior notice exclusions that could undermine cover\n\n**Financial strength:** Choose an insurer with an A-rating or better from AM Best or Standard & Poors",
      },
      {
        heading: 'Top D&O Providers in the NZ Market',
        body: "Leading D&O insurers include Chubb (widely regarded as market-leading for policy breadth), QBE (strong management liability packages), Vero (competitive for SME directors), AIG (best for listed companies and complex risks), and Berkley Insurance (flexible underwriting for specialist risks).\n\nThe best provider for your company depends on your specific risk profile. A specialist broker can compare all options.",
      },
      {
        heading: 'The Broker Advantage',
        body: "D&O is a specialist product that requires specialist advice. A broker who focuses on management liability and D&O insurance will:\n\n- Access exclusive policy wordings not available directly\n- Compare coverage terms across multiple insurers — not just price\n- Negotiate on your behalf at renewal\n- Advocate for you in the event of a claim\n\nUse our free referral service to connect with a specialist D&O broker today.",
      },
    ],
  },
  {
    slug: 'compare',
    title: 'Compare D&O Insurance NZ',
    metaTitle: 'Compare D&O Insurance NZ | Get Quotes from Multiple Providers',
    metaDesc: 'Compare D&O insurance quotes from multiple NZ providers. Broker matching to find the best directors cover for your company. Expert advice, no obligation.',
    hero: 'Compare D&O Insurance Quotes',
    intro: 'Comparing D&O insurance requires looking beyond price to assess coverage quality, policy terms, and insurer financial strength. Our broker matching service connects you with specialist brokers who do this comparison on your behalf.',
    sections: [
      {
        heading: 'What to Compare in a D&O Policy',
        body: "When comparing D&O insurance, the key factors are:\n\n- **Policy structure:** Does the policy have adequate Side A, B, and C components?\n- **Coverage breadth:** What acts are covered and what are excluded?\n- **Defence costs:** Are defence costs paid in addition to or within the policy limit?\n- **Run-off:** What run-off provisions apply when directors leave?\n- **Insolvency:** Does Side A cover continue if the company becomes insolvent?",
      },
      {
        heading: 'How Our Comparison Service Works',
        body: "Our service connects you with specialist D&O brokers who access quotes from Chubb, QBE, Vero, AIG, Berkley, and other specialist insurers. The broker:\n\n1. Assesses your company's risk profile\n2. Obtains competing quotes from multiple insurers\n3. Compares policy terms as well as price\n4. Recommends the best option for your needs\n5. Arranges cover and provides ongoing advice",
      },
      {
        heading: 'Getting Started',
        body: "Submit your details using our quote form and we will match you with a specialist D&O insurance broker within 24 hours. The broker will contact you to discuss your requirements and provide comparative quotes. There is no cost to you — the broker is remunerated by the insurer.",
      },
    ],
  },
  {
    slug: 'auckland',
    title: 'D&O Insurance Auckland',
    metaTitle: 'D&O Insurance Auckland | Directors & Officers Cover for Auckland Companies',
    metaDesc: 'D&O insurance for Auckland directors and companies. Expert broker matching for directors and officers cover. Protect your directorship in Auckland and NZ.',
    hero: "D&O Insurance for Auckland's Directors and Companies",
    intro: "Auckland is home to the majority of New Zealand's largest companies, most active start-up ecosystem, and many of the country's NZX-listed entities. Auckland directors face a concentrated range of D&O risks — from investor claims and regulatory scrutiny to employment disputes and shareholder activism.",
    sections: [
      {
        heading: 'D&O for Auckland Businesses of All Sizes',
        body: "Whether you are a director of a small Ponsonby business, a growing tech company in the CBD, or a listed company on the NZX, D&O and management liability insurance is essential. Auckland's dense business environment means more regulatory scrutiny, more sophisticated shareholders, and more employee claims than regional centres.",
      },
      {
        heading: 'FMA and Regulatory Risk for Auckland Directors',
        body: "Auckland directors — particularly those in financial services, technology, and professional services — face significant FMA oversight. The Financial Markets Authority is headquartered in Auckland and actively supervises companies operating in its regulatory perimeter. D&O and statutory liability cover is essential for any Auckland director whose company interacts with the FMA.",
      },
      {
        heading: 'Get a D&O Quote in Auckland',
        body: "Our free referral service connects Auckland directors with specialist D&O brokers who understand the local market. Submit your details and we will match you with a broker who can provide comparative quotes within 24 hours.",
      },
    ],
  },
  {
    slug: 'wellington',
    title: 'D&O Insurance Wellington',
    metaTitle: 'D&O Insurance Wellington | Directors Cover for Wellington Companies',
    metaDesc: 'D&O insurance for Wellington directors and companies. Specialist broker matching for government, professional services, and corporate directors in Wellington.',
    hero: 'D&O Insurance for Wellington Directors',
    intro: "Wellington is New Zealand's capital and home to central government, regulatory agencies, professional services firms, and a thriving tech sector. Directors in Wellington face unique D&O risks including government procurement disputes, regulatory investigations, and employment claims from a sophisticated workforce.",
    sections: [
      {
        heading: 'Wellington D&O for Government and Professional Services',
        body: "Wellington's economy is dominated by central government, SOEs, and professional services. Directors of government-related entities, law firms, accounting firms, and consulting companies face specific D&O risks including procurement disputes, professional negligence claims, and regulatory investigation costs.",
      },
      {
        heading: 'SOE and Crown Entity Directors',
        body: "Directors of State-Owned Enterprises (SOEs) and Crown entities in Wellington face additional governance obligations under the State Sector Act and specific Crown entity legislation. D&O insurance for government-connected directors should be reviewed to ensure it addresses the specific liability profile of these roles.",
      },
      {
        heading: 'Get a D&O Quote in Wellington',
        body: "Our free referral service connects Wellington directors with specialist D&O brokers. Submit your details using our quote form and we will arrange a broker introduction within 24 hours.",
      },
    ],
  },
  {
    slug: 'christchurch',
    title: 'D&O Insurance Christchurch',
    metaTitle: 'D&O Insurance Christchurch | Directors Cover for Canterbury Companies',
    metaDesc: 'D&O insurance for Christchurch and Canterbury directors. Specialist broker matching for construction, manufacturing, and corporate directors in the South Island.',
    hero: 'D&O Insurance for Christchurch and Canterbury Directors',
    intro: "Christchurch and Canterbury are home to New Zealand's strongest construction sector, significant agricultural and food processing industries, and a growing technology scene. Directors across these sectors face specific D&O risks from contracting disputes, regulatory compliance, and employment claims.",
    sections: [
      {
        heading: 'D&O for Christchurch Construction Directors',
        body: "Christchurch's continued rebuild and development means significant activity in construction and infrastructure. Directors of construction companies face D&O risks from subcontractor disputes, building consent issues, and WorkSafe prosecutions. D&O and management liability cover is essential for construction sector directors.",
      },
      {
        heading: 'Manufacturing and Export Company Directors',
        body: "Canterbury's strong agricultural and manufacturing sectors create specific D&O risks around export compliance, product liability, and employment management. Directors of these companies should ensure their D&O cover extends to regulatory proceedings in both NZ and export markets.",
      },
      {
        heading: 'Get a D&O Quote in Christchurch',
        body: "Our free referral service connects Christchurch directors with specialist D&O brokers who understand the Canterbury business environment. Submit your details and we will match you with a broker within 24 hours.",
      },
    ],
  },
  {
    slug: 'small-business',
    title: 'D&O Insurance for Small Business Directors NZ',
    metaTitle: 'D&O Insurance Small Business NZ | Directors Cover for SMEs',
    metaDesc: 'D&O insurance for small business directors in New Zealand. Affordable directors cover from NZ$800/year. Protect your personal assets as an SME director.',
    hero: 'D&O Insurance for Small Business Directors',
    intro: "Many small business directors assume D&O insurance is only for large corporates. In fact, SME directors often face greater personal liability risk than directors of large companies — without the institutional support structures that large organisations provide.",
    sections: [
      {
        heading: 'Why SME Directors Need D&O Cover',
        body: "As an SME director, your personal assets are exposed if the company faces claims. Common SME director liability scenarios include:\n\n- Creditor claims if the company becomes insolvent\n- Shareholder disputes between co-owners\n- Employment claims from staff\n- Regulatory proceedings from WorkSafe or the Commerce Commission\n- Supplier or customer disputes alleging director misrepresentation",
      },
      {
        heading: 'Affordable D&O for Small Businesses',
        body: "D&O and management liability insurance for small businesses is more affordable than many directors assume. Basic D&O cover for a small company can start from NZ$800/year. A management liability package covering D&O, employment practices, and statutory liability can be arranged for NZ$2,500–$4,000/year for most SMEs.",
      },
      {
        heading: 'Get a Quote for Your Small Business',
        body: "Submit your details using our quote form and we will match you with a specialist broker who understands SME D&O requirements. You will receive comparative quotes from multiple insurers within 24 hours.",
      },
    ],
  },
  {
    slug: 'startup',
    title: 'D&O Insurance for Startups NZ',
    metaTitle: 'D&O Insurance for Startups NZ | Founder and Director Cover',
    metaDesc: 'D&O insurance for NZ startup founders and directors. Meet investor requirements and protect yourself from claims as your company scales. Broker matching.',
    hero: 'D&O Insurance for NZ Startup Founders and Directors',
    intro: "New Zealand startup founders who are directors face significant personal liability from investor claims, employment disputes, and regulatory scrutiny — often without the corporate governance infrastructure of established companies. D&O insurance is increasingly required by investors as a condition of funding.",
    sections: [
      {
        heading: 'D&O as an Investor Requirement',
        body: "Institutional investors — including venture capital funds and angel syndicates — increasingly require D&O insurance as a condition of investment. It demonstrates governance maturity and protects the investor's interest in having the founding team available to run the company without being distracted by personal liability claims.",
      },
      {
        heading: 'What Startup Directors Need',
        body: "A management liability package is the most cost-effective solution for most NZ startups. It combines D&O (personal director cover), employment practices liability (for the growing team), statutory liability (for regulatory compliance), and sometimes professional indemnity (if the company provides professional services). Pre-revenue startups can typically obtain appropriate cover from NZ$1,000–$3,000/year.",
      },
      {
        heading: 'Get D&O Cover for Your Startup',
        body: "Our free referral service connects startup founders with specialist brokers who understand the NZ startup environment. We will match you with a broker who can provide investor-grade D&O cover quickly and cost-effectively.",
      },
    ],
  },
  {
    slug: 'nz',
    title: 'D&O Insurance NZ | Directors & Officers Cover',
    metaTitle: 'D&O Insurance NZ | Directors & Officers Insurance New Zealand',
    metaDesc: 'D&O insurance in New Zealand. Compare directors and officers cover from leading NZ providers. Broker matching service for all directors.',
    hero: 'D&O Insurance: Protect Your Directorship',
    intro: "Directors and Officers (D&O) insurance is one of the most important protections a director can have. Under the Companies Act 1993, directors can be held personally liable for company decisions — making personal protection essential for every board member.",
    sections: [
      {
        heading: 'The NZ D&O Insurance Market',
        body: "New Zealand's D&O insurance market is served by a range of specialist insurers including Chubb, QBE, Vero, AIG, and Berkley. The market has hardened in recent years due to increased claims frequency — particularly from regulatory investigations and insolvency-related director claims. Working with a specialist broker gives you access to the full market and the best available terms.",
      },
      {
        heading: 'Key NZ Legislation Creating Director Risk',
        body: "directors face personal liability under multiple pieces of legislation:\n\n- **Companies Act 1993:** Director duties, insolvent trading, and reckless trading\n- **Health and Safety at Work Act 2015:** Officer due diligence obligations\n- **Financial Markets Conduct Act 2013:** Regulated entity obligations\n- **Incorporated Societies Act 2022:** Society officer duties\n- **Charities Act 2005:** Trustee obligations",
      },
      {
        heading: 'Get D&O Cover',
        body: "Our free referral service connects directors with specialist D&O brokers who can compare multiple insurers and find the right cover for your specific situation. Submit your details and receive a broker introduction within 24 hours.",
      },
    ],
  },
  {
    slug: 'cost',
    title: 'D&O Insurance Cost NZ | How Much Does Directors Cover Cost?',
    metaTitle: 'D&O Insurance Cost NZ 2026 | Director Insurance Pricing Guide',
    metaDesc: 'How much does D&O insurance cost in NZ? 2026 pricing guide for directors and officers cover. Compare quotes from NZ brokers for your company size.',
    hero: 'How Much Does D&O Insurance Cost?',
    intro: "D&O insurance costs vary significantly based on company size, industry, and risk profile. This guide provides indicative pricing to help directors understand what to budget for directors and officers cover.",
    sections: [
      {
        heading: 'Indicative D&O Insurance Prices for 2026',
        body: "Indicative annual D&O premiums for companies:\n\n- Small private company (revenue under $2M): NZ$800 – $1,500\n- SME (revenue $2M – $10M): NZ$1,500 – $4,000\n- Mid-market private (revenue $10M – $50M): NZ$4,000 – $15,000\n- NZX-listed company: NZ$20,000 – $150,000+\n- Charitable trust or incorporated society: NZ$600 – $3,000\n- Pre-revenue startup: NZ$1,000 – $3,000\n\nThese are indicative ranges only. Actual premiums depend on specific risk factors.",
      },
      {
        heading: 'What Drives D&O Cost?',
        body: "The key rating factors for D&O insurance pricing include: company revenue (the primary driver), industry sector (financial services and construction attract higher premiums), number and experience of directors, claims history, policy limits and deductibles, and whether the company is publicly listed.",
      },
      {
        heading: 'Get Accurate Pricing',
        body: "The only way to get accurate D&O pricing for your specific company is to obtain quotes from multiple insurers through a specialist broker. Our service connects you with specialist D&O brokers who can provide comparative quotes within 24 hours.",
      },
    ],
  },
  {
    slug: 'online',
    title: 'D&O Insurance Online NZ | Get Directors Cover Quickly',
    metaTitle: 'D&O Insurance Online NZ | Quick Directors Cover Quotes',
    metaDesc: 'Get D&O insurance online in NZ. Quick broker matching for directors and officers cover. Submit your details online and receive quotes within 24 hours.',
    hero: 'Get D&O Insurance Online',
    intro: "Getting D&O insurance online is straightforward through our broker matching service. Submit your company details using our online form and we will match you with a specialist D&O broker who can provide comparative quotes quickly.",
    sections: [
      {
        heading: 'How the Online Process Works',
        body: "Our online process is designed to be fast and simple:\n\n1. Submit your company details using our quote form\n2. We match you with a specialist D&O broker within 24 hours\n3. The broker contacts you to discuss your requirements\n4. You receive comparative quotes from multiple insurers\n5. Choose the best option and arrange cover — often within the same day for standard risks",
      },
      {
        heading: 'What Information You Will Need',
        body: "To get accurate D&O quotes, have ready:\n\n- Company name and NZ Business Number\n- Annual revenue and number of employees\n- Industry sector and nature of business\n- Number and names of directors\n- Any prior D&O claims or circumstances in the last 5 years\n- Required policy limit (or ask the broker for guidance)",
      },
      {
        heading: 'Start Your Online Application',
        body: "Use our quote form to get started. A specialist D&O broker will contact you within 24 hours to discuss your requirements and provide competitive quotes from the leading NZ D&O insurers.",
      },
    ],
  },
  {
    slug: 'sme',
    title: 'D&O Insurance for SMEs',
    metaTitle: 'D&O Insurance SME NZ | Directors Cover for Small & Medium Companies',
    metaDesc: 'D&O insurance for NZ SMEs. Affordable directors and officers cover for small and medium companies. Compare quotes from specialist brokers. Free referral.',
    hero: 'D&O Insurance for NZ Small and Medium Enterprises',
    intro: "SME directors are among the most exposed to personal liability — yet many operate without D&O insurance. The Companies Act 1993 imposes the same duties on SME directors as on directors of large listed companies, and the personal consequences of a claim can be financially devastating.",
    sections: [
      {
        heading: 'The SME Director Liability Reality',
        body: "For an SME director, personal liability is not theoretical. Common SME D&O scenarios include creditor claims following insolvency, co-owner or shareholder disputes, employee personal grievance claims naming directors personally, supplier or customer disputes alleging director misrepresentation, and WorkSafe prosecutions for health and safety failures.",
      },
      {
        heading: 'Management Liability for SMEs',
        body: "For most NZ SMEs, a management liability package is more appropriate than standalone D&O. The package combines D&O cover with employment practices liability (EPL) and statutory liability — addressing the three most common claim types for SME directors. Management liability packages for SMEs typically cost NZ$2,500–$5,000/year.",
      },
      {
        heading: 'Get SME D&O Cover',
        body: "Submit your details using our quote form and we will match you with a specialist D&O broker who understands SME requirements. Comparative quotes from multiple insurers within 24 hours.",
      },
    ],
  },
  {
    slug: 'trustee-liability-nz',
    title: 'Trustee Liability Insurance NZ',
    metaTitle: 'Trustee Liability Insurance NZ | D&O Cover for Trustees | DirectorsInsurance.co.nz',
    metaDesc: 'Trustee liability insurance in NZ protects charity trustees, trust board members, and incorporated society officers from personal liability claims. Free broker quotes.',
    hero: 'Trustee Liability Insurance for NZ Trustees & Board Members',
    intro: "Trustees and board members of charities, trusts, and incorporated societies carry the same personal liability risks as company directors — but many assume they are protected simply because they serve a not-for-profit organisation. Under the Charities Act 2005, Trusts Act 2019, and Incorporated Societies Act 2022, trustees face significant personal exposure if things go wrong.",
    sections: [
      {
        heading: 'What Is Trustee Liability Insurance?',
        body: "Trustee liability insurance — a form of D&O insurance tailored for not-for-profit and trust entities — protects trustees, board members, officers, and committee members from the cost of defending legal claims made against them personally for their decisions and actions in their governance roles.\n\nCover typically includes legal defence costs, settlements, judgments, regulatory investigations, employment disputes, and wrongful dismissal claims. The cover protects trustees personally — meaning their own savings, property, and other assets are protected when the trust or charity cannot or will not indemnify them.",
      },
      {
        heading: 'Who Needs Trustee Liability Insurance in NZ?',
        body: "Any volunteer or paid trustee, board member, or committee member of a:\n\n- Registered charity under the Charities Act 2005\n- Incorporated society under the Incorporated Societies Act 2022\n- Trust established under the Trusts Act 2019\n- Religious body, sports club, or community organisation with a governance board\n- Marae trust or hapū entity\n- School board of trustees\n\nThe Incorporated Societies Act 2022 significantly increased the duties and personal liability exposure of officers — all incorporated societies should review their cover under the new Act.",
      },
      {
        heading: 'Key Risks for Trustees',
        body: "Common claim scenarios for NZ trustees include:\n\n**Employment disputes:** A former employee claims unfair dismissal or discrimination against trustees personally where the organisation lacks funds to defend or settle.\n\n**Financial mismanagement:** Beneficiaries or donors allege funds were misapplied or invested improperly.\n\n**Regulatory investigation:** Charities Services or the Charities Registration Board investigates governance failures, requiring the board to engage legal representation.\n\n**Conflicts of interest:** A decision challenged on the basis that a trustee had an undisclosed interest in the outcome.\n\nTrustees serve voluntarily in most cases but are not protected from personal liability simply because of their volunteer status.",
      },
      {
        heading: 'Cost of Trustee Liability Insurance',
        body: "Trustee liability insurance for small charities and incorporated societies typically starts from NZ$500–$800 per year — making it accessible even for volunteer-run organisations. Larger trusts managing significant assets, employing staff, or operating in higher-risk areas (health and disability services, social services) will pay more — typically NZ$1,500–$4,000/year.\n\nMany charities secure trustee liability as part of a broader charity insurance package that also covers public liability and property. Contact our specialist brokers for a quote tailored to your organisation.",
      },
    ],
  },
  {
    slug: 'management-liability-insurance',
    title: 'Management Liability Insurance NZ',
    metaTitle: 'Management Liability Insurance NZ | Bundled Directors Cover | DirectorsInsurance.co.nz',
    metaDesc: 'Management liability insurance NZ bundles D&O, employment practices liability, and statutory liability in one policy. Best-value protection for NZ SME directors and executives.',
    hero: 'Management Liability Insurance for NZ Companies',
    intro: "Management liability insurance is the most cost-effective way for companies to protect their directors, officers, and the company itself from the three most common and financially damaging management claims: wrongful decisions by directors (D&O), employment disputes (EPL), and regulatory prosecutions (statutory liability). Available from NZ$2,500/year for SMEs.",
    sections: [
      {
        heading: 'What Is Management Liability Insurance?',
        body: "Management liability is a package policy — usually a single policy document with a single aggregate limit — that combines Directors & Officers (D&O) liability, Employment Practices Liability (EPL), and Statutory Liability into one comprehensive management protection.\n\nSome insurers also include Crime cover (employee theft), Fiduciary Liability, and Cyber liability as optional extensions. The bundled approach is almost always more cost-effective than purchasing these covers separately, and it eliminates coverage gaps between policies.",
      },
      {
        heading: 'What Does Management Liability Cover?',
        body: "**Directors & Officers (D&O):** Personal liability of directors and officers for their management decisions — shareholder claims, creditor claims, regulatory investigations, and insolvent trading allegations.\n\n**Employment Practices Liability (EPL):** Claims by current, former, or prospective employees for wrongful termination, discrimination, harassment, bullying, or breach of employment contract. EPL is now the most frequently triggered section of most management liability policies.\n\n**Statutory Liability:** Fines, penalties, and defence costs arising from prosecution under NZ statutes — including the Health and Safety at Work Act 2015, Resource Management Act, Commerce Act, Fair Trading Act, and others.\n\n**Crime (optional):** Theft, fraud, or dishonest acts by employees or third parties, covering direct financial loss to the company.",
      },
      {
        heading: 'Who Should Buy Management Liability?',
        body: "Management liability is appropriate for virtually any NZ private company that has:\n\n- Two or more directors\n- One or more employees\n- Any regulatory or compliance obligations\n\nIt is particularly important for fast-growing companies, companies undergoing change (restructuring, redundancies), companies in regulated industries, and companies with outside investors or lenders who expect governance protection to be in place.",
      },
      {
        heading: 'Management Liability vs Standalone D&O',
        body: "Most NZ private companies are better served by a management liability package than standalone D&O insurance. Standalone D&O only covers directors' personal liability — it does not respond to employment claims (the most common management claim type) or statutory prosecutions.\n\nManagement liability adds these critical protections at modest incremental cost. For a typical NZ SME, a management liability package might cost NZ$2,500–$5,000/year compared to NZ$1,500–$2,500 for standalone D&O — the additional protection is well worth the difference.\n\nFor listed companies, large private companies, or companies with complex requirements, standalone D&O with higher limits may be more appropriate. A specialist broker can advise.",
      },
    ],
  },
  {
    slug: 'professional-indemnity-directors',
    title: 'Professional Indemnity Insurance for Directors NZ',
    metaTitle: 'Professional Indemnity for Directors NZ | PI vs D&O | DirectorsInsurance.co.nz',
    metaDesc: 'Do NZ directors need professional indemnity insurance? Understand the difference between PI and D&O cover, when you need both, and how to get the right protection.',
    hero: 'Professional Indemnity Insurance for Directors: What You Need to Know',
    intro: "Professional Indemnity (PI) and Directors & Officers (D&O) insurance are frequently confused — but they cover different types of claims. Understanding which one you need (and whether you need both) is essential for directors who also provide professional services.",
    sections: [
      {
        heading: 'PI vs D&O Insurance: What Is the Difference?',
        body: "**D&O insurance** covers directors and officers for claims arising from their management decisions in their governance capacity — the decisions they make as directors running the company. It protects their personal assets against claims by shareholders, creditors, employees, and regulators.\n\n**Professional Indemnity (PI) insurance** covers individuals and companies for claims arising from the professional services or advice they provide to clients — negligent advice, errors in professional work, breach of professional duty.\n\nThe key distinction: D&O covers your role as a director of a company. PI covers your professional expertise when you provide services or advice to clients. Both cover different gaps and respond to different claim scenarios.",
      },
      {
        heading: 'When Do Directors Need Both PI and D&O?',
        body: "Directors often need both when they:\n\n- Are directors of a professional services firm (law firm, accounting firm, engineering firm, financial advisory firm) — in this case PI covers the firm's professional work and D&O covers directors' governance decisions\n\n- Act as a Non-Executive Director (NED) on a company board while also operating as a consultant in their field — the NED role needs D&O, their consulting work needs PI\n\n- Are directors of a company that provides professional services to clients — the company needs PI, the directors personally need D&O",
      },
      {
        heading: 'Professional Directors (NEDs & Portfolio Directors)',
        body: "Career non-executive directors who sit on multiple boards face a specific risk: their company's D&O policy may not cover them if the claim relates to a board they are leaving or have left. Run-off cover and Side A-only policies are important considerations for professional directors.\n\nProfessional directors who provide governance consulting or board advisory services to other companies should also consider PI for that advisory work — it is a different risk to the directorship itself and falls outside most D&O policies.",
      },
      {
        heading: 'Getting the Right Cover',
        body: "The right combination of PI and D&O depends on your specific professional and governance roles. A specialist broker can review all your roles and ensure there are no gaps between your policies.\n\nCommon mistakes include directors assuming their company's PI policy covers their directorship claims, or NEDs assuming their governance role is covered by the operating company's PI policy.\n\nContact our specialist brokers for a free review of your current cover and a recommendation on the right combination of PI and D&O for your situation.",
      },
    ],
  },
  {
    slug: 'startup-founder-insurance',
    title: 'Startup Founder D&O Insurance NZ',
    metaTitle: 'D&O Insurance for NZ Startup Founders | Startup Director Cover | DirectorsInsurance.co.nz',
    metaDesc: "D&O insurance for NZ startup founders. Protect yourself from investor claims, employment disputes, and regulatory actions. Essential cover from your first funding round.",
    hero: 'D&O Insurance for NZ Startup Founders: Essential Protection from Day One',
    intro: "Startup founders often assume D&O insurance is something to think about later — after series A, after the team grows, after revenues are stable. But the reality is that the early-stage period is often the highest-risk time for a founder's personal liability. Investor disputes, employment claims from early hires, and regulatory issues can all emerge before your company has the cash to fight them.",
    sections: [
      {
        heading: 'Why Startup Founders Need D&O Insurance Early',
        body: "The startup phase carries unique personal liability risks:\n\n**Investor claims:** Angel investors, friends-and-family investors, and seed-round investors have all the legal rights of shareholders. If the startup fails or underperforms, investors can claim directors misrepresented the company's financial position, failed to disclose material risks, or breached their duties in allocating resources.\n\n**Early hire disputes:** Startup employment is often high-risk — equity promises, vague contracts, fast growth and fast cuts create employment disputes. A former CTO or early employee who was let go during a pivot can bring a personal claim against founders as directors.\n\n**Director duties from day one:** The Companies Act 1993 applies to every NZ company from the day of incorporation. Founders are directors with full legal duties from their first day — there is no grace period for early-stage companies.",
      },
      {
        heading: 'When Investors Require D&O Insurance',
        body: "Many NZ venture investors and angel networks require portfolio companies to have D&O insurance in place as a condition of investment or as a closing condition. This is standard in the US and is increasingly common in NZ as the local VC market matures.\n\nIf you are approaching a Series A or institutional funding round, having D&O insurance in place signals governance maturity and protects the board — including any investor directors who join your board post-investment.",
      },
      {
        heading: 'What Cover Does a Startup Actually Need?',
        body: "For a pre-revenue or early-revenue startup, a basic management liability package typically provides the most appropriate protection:\n\n- D&O Side A (personal director cover) at NZ$2M–$5M\n- Employment Practices Liability (EPL) — critical if you have or are about to hire\n- Statutory liability — for HSWA and other regulatory obligations\n\nAs you grow and take on institutional investors, you may need to increase limits and consider adding Side B and Side C cover for the company entity.\n\nStart-up D&O typically costs NZ$1,500–$3,000/year for early-stage companies with small teams and seed-level funding.",
      },
      {
        heading: 'D&O at Every Stage of Startup Growth',
        body: "**Pre-seed / bootstrapped:** Even with no outside investors, founder protection and EPL cover is worthwhile if you have employees or contractors.\n\n**Seed round:** Implement management liability package before closing. Investor will likely require it.\n\n**Series A:** Increase limits. Investor directors joining your board will want confirmation of coverage. Consider run-off for departing directors.\n\n**Series B+:** Full management liability with higher limits. D&O becomes a board governance issue — your audit and risk committee should review insurance annually.",
      },
    ],
  },
  {
    slug: 'listed-company-do-insurance',
    title: 'Listed Company D&O Insurance NZ',
    metaTitle: 'D&O Insurance for NZ Listed Companies | NZX Directors Cover | DirectorsInsurance.co.nz',
    metaDesc: 'D&O insurance for NZX-listed companies and directors. Complex securities litigation, regulatory investigations, and shareholder class actions need specialist listed company D&O cover.',
    hero: 'D&O Insurance for NZX-Listed Company Directors',
    intro: "Listed company directors in New Zealand face significantly more complex D&O risks than their private company counterparts. NZX continuous disclosure obligations, FMA enforcement, securities class action risk, and media scrutiny create a legal and reputational exposure that demands a different class of D&O protection.",
    sections: [
      {
        heading: 'Why Listed Company D&O Is Different',
        body: "D&O insurance for listed companies covers fundamentally different risk scenarios than private company D&O:\n\n**Securities claims:** Shareholders claim directors misrepresented the company's financial position, failed to meet continuous disclosure obligations, or made misleading statements in prospectuses or market announcements. These are the most expensive claims in the D&O market.\n\n**FMA investigations:** The Financial Markets Authority has broad investigative and enforcement powers. A formal FMA investigation can cost millions in legal fees before any prosecution decision is made.\n\n**Shareholder class actions:** Litigation funders (IMF Bentham, Omni Bridgeway) have actively developed NZ class action capacity. A securities class action by a funded group of shareholders can generate claims that make private company disputes look small.\n\n**Derivative actions:** Shareholders can bring derivative claims on behalf of the company against its own directors for governance failures.",
      },
      {
        heading: 'Side A, B, and C Coverage for Listed Companies',
        body: "Listed company D&O insurance typically involves all three coverage sides:\n\n**Side A:** Pays when the company cannot or will not indemnify directors — including insolvency scenarios, regulatory refusal to allow indemnification, or where indemnification is not permitted by law. The most critical coverage for individual directors.\n\n**Side B:** Reimburses the company when it indemnifies directors — the most commonly triggered coverage in defence of claims.\n\n**Side C (Entity Coverage):** Covers the company itself for securities claims — particularly important for NZX-listed companies facing shareholder litigation. This is unique to listed company D&O and typically requires a separate policy limit.\n\nListed company D&O policies require specialist placement and typically involve multiple insurers co-insuring in layers.",
      },
      {
        heading: 'Suggested Cover Levels for NZX Companies',
        body: "Cover requirements vary significantly by market capitalisation and risk profile:\n\n- **NZX Small Cap (under $100M market cap):** NZ$10M–$20M aggregate\n- **NZX Mid Cap ($100M–$500M):** NZ$25M–$50M aggregate\n- **NZX Large Cap (over $500M):** NZ$50M–$150M aggregate\n\nThese are indicative figures only. The FMA's enforcement history, the company's claims history, and specific sector risks (financial services, healthcare, resources) all affect the appropriate limit. Listed company D&O is placed by specialist brokers through London and overseas insurance markets.",
      },
      {
        heading: 'Getting Listed Company D&O Right',
        body: "Listed company D&O insurance requires specialist broking expertise. Policy wording differences between insurers can be material — a clause that appears minor in private company D&O can have significant impact in a securities claim involving hundreds of millions of dollars.\n\nKey considerations include: the definition of securities claims, the scope of continuous disclosure coverage, Side A DIC (Difference in Conditions) towers, run-off terms for departing directors, and the financial strength of each insurer in the tower.\n\nContact our specialist brokers for a full review of your listed company D&O programme.",
      },
    ],
  },
  {
    slug: 'charity-board-insurance',
    title: 'Charity Board Insurance NZ',
    metaTitle: 'Charity Board Insurance NZ | D&O Cover for Charity Trustees | DirectorsInsurance.co.nz',
    metaDesc: 'Charity board insurance protects NZ charity trustees, committee members, and board officers from personal liability. Specialist cover under the Charities Act 2005 and Incorporated Societies Act 2022.',
    hero: 'Charity Board Insurance for NZ Charity Trustees & Governance Volunteers',
    intro: "Running a charity in New Zealand is rewarding — but it comes with real governance responsibilities and personal liability risks that many trustees do not appreciate. Under the Charities Act 2005 and the updated Incorporated Societies Act 2022, charity trustees and board members are personally accountable for the financial and operational decisions of their organisation.",
    sections: [
      {
        heading: 'What Risks Do NZ Charity Board Members Face?',
        body: "**Employment claims:** Charity staff are employees with full legal rights under the Employment Relations Act. Wrongful dismissal, discrimination, and bullying claims against charity boards are common — particularly during restructuring or when funding is withdrawn.\n\n**Financial mismanagement allegations:** Donors, beneficiaries, or Charities Services can challenge trustees for misapplying charitable funds, poor investment decisions, or failing to maintain minimum asset requirements.\n\n**Regulatory compliance:** The Charities Registration Board can investigate governance failures. An investigation is costly even if it does not result in deregistration.\n\n**Incorporated Societies Act 2022:** The new Act significantly increased officer duties for incorporated societies — committees and governance volunteers are now subject to explicit duty of care, conflict of interest, and financial management obligations.",
      },
      {
        heading: 'What Does Charity Board Insurance Cover?',
        body: "A charity board D&O policy typically covers:\n\n- Legal defence costs for claims against trustees and officers personally\n- Settlements and judgments arising from alleged wrongful acts in a governance capacity\n- Employment Practices Liability — dismissal, discrimination, harassment claims by charity staff\n- Regulatory investigation costs (Charities Services, Employment Relations Authority)\n- Statutory liability for prosecutions under charity-relevant legislation\n\nThe cover protects trustees personally — their home, savings, and other personal assets are protected when the charity cannot or is not permitted to indemnify them.",
      },
      {
        heading: 'Do NZ Charities Need Insurance?',
        body: "Many small NZ charities assume their charity trust deed or constitution protects individual trustees from personal liability. This is a misunderstanding — trust deeds can provide limited indemnification from the charity's assets, but they do not eliminate personal liability and they cannot indemnify against intentional wrongdoing, fraudulent acts, or serious legal breaches.\n\nFor charities with staff, significant assets, or community-facing services, charity board insurance is essential protection for the volunteers who govern them. Without it, a single claim can expose trustees to life-changing personal financial liability.",
      },
      {
        heading: 'Cost of Charity Board Insurance in NZ',
        body: "Charity board insurance is among the most affordable types of D&O cover — reflecting the smaller scale and lower-risk profile of most NZ charities:\n\n- **Small charities (under NZ$500K revenue, no staff):** NZ$400–$700/year\n- **Medium charities (NZ$500K–$2M, 1–10 staff):** NZ$700–$1,500/year\n- **Large charities / NGOs (NZ$2M+, significant staff):** NZ$1,500–$5,000/year\n\nFor most NZ charities, the annual premium is a fraction of the cost of defending even one employment or governance claim. Contact our specialist brokers for a quote.",
      },
    ],
  },
]

export function getLandingPageBySlug(slug: string): LandingPage | undefined {
  return landingPages.find((p) => p.slug === slug)
}
