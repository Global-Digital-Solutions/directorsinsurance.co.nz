export interface ClaimExample {
  title: string
  situation: string
  outcome: string
  lesson: string
}

export interface DirectorType {
  slug: string
  name: string
  icon: string
  description: string
  longDesc: string
  risks: string[]
  claimExamples: ClaimExample[]
  coverNeeds: string[]
  checklistItems: string[]
  pricingGuide: string
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
    longDesc: `Small and medium enterprise directors are, statistically, among the most exposed to personal liability of any director category in New Zealand. This is not because SME decisions are riskier — it is because SME directors typically lack the institutional support infrastructure that large company directors take for granted: in-house legal counsel, dedicated risk management teams, and comprehensive board governance processes.

When something goes wrong at an SME, the director often stands alone. Creditors, liquidators, employees, and suppliers all have a clear line to the person at the top — and under the Companies Act 1993, that person can be personally pursued for losses sustained through the company's decisions.

The three most common liability triggers for SME directors are insolvent trading (continuing to trade while unable to pay debts), employment claims from staff, and WorkSafe prosecutions for health and safety failures. Each of these can result in personal financial ruin without adequate insurance.

Insolvent trading is particularly insidious because the moment of actual insolvency is rarely obvious. Directors who continue operating a struggling business in good faith — believing conditions will improve — can still face liquidator claims years later alleging they should have stopped trading earlier. The personal liability here is not limited by the company's assets: creditors can pursue the director personally.

A management liability package is the right solution for most SME directors. It combines D&O cover (for director liability claims), employment practices liability (for staff disputes), and statutory liability (for regulatory proceedings) in a cost-effective bundle. For many SME directors, the total cost is less than their annual membership subscription to a professional body.`,
    risks: [
      'Personal liability under Companies Act 1993 for reckless trading — liquidators can pursue directors personally for creditor losses',
      'Insolvent trading exposure — difficulty identifying the precise moment of insolvency means good-faith directors can face retrospective claims',
      'Employee personal grievance claims — New Zealand\'s Employment Relations Act 2000 creates significant claim exposure for employers of all sizes',
      'WorkSafe NZ prosecution for health and safety failures under the HSWA 2015 — officer due diligence obligations apply to all directors regardless of company size',
      'Creditor claims from suppliers, landlords, and banks — particularly in sectors with thin margins or cyclical demand',
      'Co-director or minority shareholder disputes — common in family businesses and partnerships converted to companies',
    ],
    claimExamples: [
      {
        title: 'Liquidator pursues construction director for insolvent trading',
        situation: 'A Tauranga construction company director continued operating the business through a deteriorating cash position, drawing on credit facilities and extending creditor terms. When the company was placed in liquidation 10 months later, the liquidator identified the point of insolvency and commenced proceedings against the director personally for NZ$720,000 in creditor losses.',
        outcome: 'The director\'s management liability policy covered NZ$165,000 in legal defence costs and a NZ$260,000 contribution to the settlement. The director retained personal liability for the remainder but avoided bankruptcy through the insurance contribution.',
        lesson: 'Directors should seek independent legal and accounting advice as soon as the company struggles to meet obligations. Once insolvency is established retrospectively, the director\'s liability can extend to all creditor losses from that date.',
      },
      {
        title: 'Employment claim names SME director personally',
        situation: 'A Dunedin retail company director was personally named in a personal grievance claim by a dismissed manager who alleged her termination was unjustified and motivated by pregnancy discrimination. The claim sought NZ$85,000 in compensation and lost wages.',
        outcome: 'The management liability policy (EPL component) covered NZ$28,000 in legal defence costs at the Employment Relations Authority and a NZ$52,000 settlement. Without insurance, the director would have faced both the legal costs and any award personally.',
        lesson: 'Employment claims routinely name directors personally in smaller companies. Employment practices liability cover is as important for SME directors as D&O cover.',
      },
    ],
    coverNeeds: [
      'Management liability package (D&O + EPL + statutory liability) rather than standalone D&O — provides broader protection for the SME environment at better value',
      'Employment practices liability as a standalone priority — the most frequent claim type for businesses with employees',
      'Statutory liability for WorkSafe and regulatory defence — HSWA prosecutions of individual directors are increasing',
      'Run-off cover when retiring from the board — claims can emerge years after resignation',
      'Crime cover if the company processes client funds or has high-value stock',
    ],
    checklistItems: [
      'Does the company have a current D&O or management liability policy in place?',
      'Is the policy limit adequate for the company\'s current scale and creditor exposure?',
      'Are all directors (including non-executive or advisory directors) listed as insureds?',
      'Does the policy include employment practices liability cover?',
      'Has the company had any employment claims, WorkSafe notices, or regulatory inquiries in the last 5 years? (Disclose these to the insurer)',
      'Is run-off cover arranged when any director departs the board?',
      'Is the policy renewed annually and reviewed for adequacy against the company\'s growth?',
    ],
    pricingGuide: 'Management liability packages for SME directors typically range from NZ$1,200 to NZ$5,000 per year depending on company revenue, number of employees, and industry. A sole-director company with no employees can obtain basic D&O cover from around NZ$800/year. A small company with 10–30 staff across manufacturing or construction should budget NZ$2,500–$5,000/year for a comprehensive management liability package.',
    metaTitle: 'D&O Insurance for SME Directors NZ | Protect Your Personal Assets',
    metaDesc: 'D&O insurance for SME directors. Protect your personal assets from creditor claims, employment disputes, and WorkSafe prosecutions. Free broker referral.',
    h1: 'D&O Insurance for SME Directors',
    intro: 'As an SME director, you carry significant personal liability for the decisions you make in your management role. The Companies Act 1993 imposes strict duties on directors — and failing to meet those duties can expose your personal assets to claims from shareholders, creditors, regulators, and employees.',
  },
  {
    slug: 'startup-founders',
    name: 'Startup Founders',
    icon: '🚀',
    description: 'Startup founders who serve as directors face investor disputes, regulatory scrutiny, employment claims, and the unique risks of rapid growth — often without the corporate governance infrastructure of established companies.',
    longDesc: `The startup environment creates a specific and often underappreciated liability profile for founding directors. Speed — the core competitive advantage of a startup — is also one of its greatest governance risks. Decisions are made fast, with limited information, under pressure from investors, and with teams that are growing (and sometimes departing) rapidly.

The investor relationship is perhaps the most significant liability generator for startup founders acting as directors. When founders raise capital — whether from angels, seed funds, or Series A investors — they make representations about the company's technology, its market opportunity, its team, and its financial projections. If those representations later prove to be inaccurate or optimistic, investors may have grounds to claim damages. D&O insurance covers the personal director liability arising from these claims.

New Zealand's startup ecosystem has matured significantly, and institutional investors have brought the governance expectations of larger markets. Venture capital funds and angel syndicates increasingly require founders to have D&O insurance in place as a condition of funding — not because they want to sue the founders, but because they want assurance that the founder team can continue operating without personal financial distraction if a claim arises.

Employment claims are the other major risk vector for startup founders. Rapid hiring, strong company cultures that can tip into inappropriate conduct, and the painful reality of layoffs during pivots all generate employment claims. New Zealand's Employment Relations Act 2000 is strongly protective of employees, and personal grievance claims are common in the startup context.

The good news is that D&O and management liability cover for early-stage startups is genuinely affordable — often less than a single month's cloud infrastructure costs. Pre-revenue startups can typically obtain appropriate management liability cover from NZ$1,000–$3,000/year.`,
    risks: [
      'Investor claims arising from capital raising representations — even unintentionally misleading statements about the company\'s prospects can generate claims',
      'Employment claims from rapid hiring, culture incidents, and restructuring — particularly as the team scales',
      'Co-founder disputes leading to claims for breach of shareholder agreements, fiduciary duty, and IP misappropriation',
      'Regulatory scrutiny in regulated sectors — fintech, health tech, and proptech founders face FMA and other regulator attention',
      'Personal liability as the company scales and governance processes lag behind operational complexity',
      'Post-investment governance disputes — conflicts between founder directors and investor-appointed directors',
    ],
    claimExamples: [
      {
        title: 'Investor claims misrepresentation in seed round information memorandum',
        situation: 'An Auckland fintech startup founder was sued by three angel investors who alleged that the company\'s seed round information memorandum had overstated the stage of the company\'s regulatory approvals. After the company pivoted and the original product was shelved, the investors sought the return of their NZ$450,000 combined investment plus NZ$180,000 in consequential losses.',
        outcome: 'The founder\'s management liability policy covered NZ$140,000 in legal defence costs and provided a NZ$200,000 contribution to the settlement. The insurer\'s appointment of specialist securities litigation lawyers significantly strengthened the defence — the investors\' counsel confirmed the representations had been based on genuine (though optimistic) projections.',
        lesson: 'Capital raising documents are the single biggest liability risk for startup founders. All representations should be accurate at the time of making, properly caveated, and documented. D&O cover should be in place before any capital raise.',
      },
      {
        title: 'Employee claims constructive dismissal after pivot',
        situation: 'A Wellington SaaS startup underwent a significant pivot, resulting in the discontinuation of a product line and the redundancy of four engineers. One of the engineers, a senior developer who had taken equity, claimed constructive dismissal and breach of employment agreement. The claim named the founding director personally and sought NZ$95,000.',
        outcome: 'The EPL component of the management liability policy covered NZ$32,000 in legal and negotiation costs. The claim was settled for NZ$45,000 — significantly less than the original demand. The broker\'s experience in employment matters helped structure the response effectively.',
        lesson: 'Equity-holding employees present unique risks in startup disputes — they combine employment rights with potential shareholder rights. Management liability cover should be in place before any significant team restructure.',
      },
    ],
    coverNeeds: [
      'Management liability package as the core — D&O for investor and personal liability, EPL for the growing team, statutory liability for regulated sectors',
      'D&O insurance required by investors — most institutional investors and angel syndicates now require this as a funding condition; have it ready before term sheet',
      'Professional indemnity if the startup provides SaaS, advisory, or professional services to clients',
      'Crime cover if the company processes payments or holds client funds',
      'Review limits at each funding round — policy limits should grow with company scale and investor exposure',
    ],
    checklistItems: [
      'Is D&O or management liability insurance in place before any capital raise?',
      'Have all capital raising documents been reviewed for accuracy and appropriate caveats?',
      'Is there an employment agreement in place with every team member, including co-founders?',
      'Are vesting schedules and founder departure provisions documented in the shareholders\' agreement?',
      'Does the policy limit reflect the total capital raised and potential investor claim exposure?',
      'Are all directors (including investor-appointed directors) covered by the company\'s policy?',
      'Is there a process for disclosing material adverse events to investors promptly?',
    ],
    pricingGuide: 'Pre-revenue and early-stage startups can typically obtain management liability cover from NZ$1,000–$3,000/year. As the company raises capital and grows, policy limits should be reviewed and increased. A startup that has raised NZ$5M in seed funding should typically carry D&O limits of at least NZ$3M–$5M. A Series A company (NZ$10M+ raised) should carry NZ$5M–$10M in cover. Premium costs at these levels typically range from NZ$2,000–$8,000/year.',
    metaTitle: 'D&O Insurance for Startup Founders NZ | Investor-Ready Cover',
    metaDesc: 'D&O insurance for NZ startup founders. Meet investor requirements and protect yourself from claims as your company scales. Broker matching.',
    h1: 'D&O Insurance for Startup Founders',
    intro: 'Building a startup means moving fast — but personal liability does not wait for your company to mature. Investors increasingly require D&O insurance as a condition of funding, and the decisions you make in the early stages of your company can have long-lasting personal liability consequences.',
  },
  {
    slug: 'non-executive-directors',
    name: 'Non-Executive Directors',
    icon: '👔',
    description: 'Non-executive directors (NEDs) sit on boards in an oversight capacity but face the same legal liabilities as executive directors under the Companies Act 1993. Many NEDs serve on multiple boards, compounding their exposure.',
    longDesc: `Non-executive directors occupy a uniquely exposed position in the liability landscape. They carry the same legal duties as executive directors — and bear the same personal liability for breaches — but exercise far less day-to-day control over the company's affairs. They rely on management for information, attend a limited number of board meetings, and are rarely involved in operational decisions. Yet under the Companies Act 1993, none of this reduces their personal liability.

The classic NED challenge is information dependency. NEDs make board decisions based on information prepared and presented by management. If that information is incomplete, misleading, or simply wrong, the NED may still be personally liable for decisions made in reliance on it. Courts in New Zealand and Australia have consistently rejected the argument that NEDs can defer entirely to executive management — they have an active obligation to probe, question, and satisfy themselves that decisions are appropriate.

The multiple-board exposure of many NEDs compounds this risk significantly. A director serving on five boards faces five times the claims exposure — and must ensure that D&O cover is adequate on each. Company policies may have inadequate limits or may not extend appropriately to NEDs. Some policies have insured-versus-insured exclusions that can prevent a NED from claiming coverage if sued by another insured person on the same board.

The IoD's 2025 D&O report highlighted rising litigation funding as a specific concern for NED exposure. Litigation funders enable claimants to pursue directors who would previously have been judgment-proof due to litigation costs. This is particularly relevant for NEDs serving on failed or distressed companies, where liquidators backed by litigation funders can now economically pursue claims that would previously have been abandoned.

NEDs should treat personal D&O cover as essential professional infrastructure — not a luxury. The cost is modest; the personal financial protection is significant.`,
    risks: [
      'Same personal liability as executive directors under the Companies Act 1993 — the "non-executive" title provides no legal protection',
      'Information dependency — reliance on management information that later proves incomplete or misleading',
      'Multiple-board exposure — serving on several boards multiplies claims exposure; each board\'s D&O policy must be independently verified',
      'Policy exhaustion — if the company faces multiple simultaneous claims, the D&O limit may be insufficient to cover all directors',
      'Litigation funding enabling claims — funders can now economically support liquidator claims against NEDs that would previously have been cost-prohibitive',
      'Inadequate Side A cover on company policies — if the company becomes insolvent, weak Side A provisions may leave NEDs personally unprotected',
    ],
    claimExamples: [
      {
        title: 'NED personally pursued by liquidator in failed property company',
        situation: 'A NED on a Wellington property development company received minimal board papers and attended meetings where management consistently reported positive trading conditions. When the company was liquidated 18 months later, the liquidator\'s investigation revealed the company had been insolvent for much of the NED\'s tenure. The NED was personally pursued for NZ$1.2M in alleged losses sustained through insolvent trading.',
        outcome: 'The NED\'s personal D&O policy (purchased independently because the company\'s policy had weak Side A provisions) covered NZ$220,000 in legal defence costs over two years of litigation. The claim was ultimately settled with the liquidator for a reduced amount.',
        lesson: 'A NED should independently verify that the company\'s D&O policy has adequate Side A cover. If it does not — or if there is any doubt about the company\'s financial position — personal D&O cover is essential.',
      },
      {
        title: 'NED faces FMA investigation for disclosure failure',
        situation: 'A NED on an NZX-listed company was included in an FMA investigation following the company\'s failure to disclose a material contract. The NED had flagged the disclosure obligation in board papers but was unable to demonstrate that adequate follow-up had occurred. Legal costs of responding to the FMA investigation exceeded NZ$95,000 before any formal proceedings.',
        outcome: 'The company\'s D&O policy covered the investigation costs. The FMA ultimately issued a public warning to the company rather than commencing proceedings against individual directors. The NED resigned and ensured adequate run-off cover was in place.',
        lesson: 'On listed company boards, it is not sufficient to raise disclosure obligations — NEDs must document their interventions and, where management fails to act, escalate. Run-off cover is essential when leaving any listed company board.',
      },
    ],
    coverNeeds: [
      'Verification that each board\'s D&O policy covers NEDs adequately — review the policy, not just management\'s assurance',
      'Confirm adequate Side A (personal protection) in each company policy — particularly critical if the company has any financial stress',
      'Personal D&O cover as a wrap around any gaps in company policies — particularly valuable for NEDs on multiple boards',
      'Run-off cover on every board when tenure ends — minimum 6-year run-off period',
      'Independent legal advice on policy terms before joining any board with significant governance risk',
    ],
    checklistItems: [
      'Before joining any board: request and review the current D&O policy wording (not just the schedule)',
      'Confirm that NEDs are specifically included in the definition of "insured persons"',
      'Check the policy limit — is it adequate for the company\'s scale and risk profile?',
      'Confirm adequate Side A protection — does it respond when the company cannot indemnify?',
      'Check for insured-versus-insured exclusions that could affect NED claims',
      'Confirm policy coverage extends to subsidiary and associated company boards if relevant',
      'Negotiate run-off cover as a condition of agreeing to serve — at least 6 years',
      'Consider personal D&O cover as a supplement to company policy if any doubt about adequacy',
    ],
    pricingGuide: 'Personal D&O cover for individual NEDs (wrapping around company policy) is available from around NZ$500–$1,500/year depending on the number of boards served and the risk profile of those boards. Run-off cover when departing a board typically costs 150–250% of the annual policy premium as a one-time payment — for a NED on a private company paying NZ$800/year, run-off for 6 years might cost NZ$1,200–$2,000 as a one-time charge.',
    metaTitle: 'D&O Insurance for Non-Executive Directors NZ | Personal Protection',
    metaDesc: 'D&O insurance for NZ non-executive directors. Protect yourself personally across every board you serve on. Expert broker advice, free referral.',
    h1: 'D&O Insurance for Non-Executive Directors',
    intro: 'Being a non-executive director carries the same legal responsibilities as being an executive director — without the operational control. As a NED, you rely on the information management provides you, yet you can still be personally liable for board decisions that lead to harm.',
  },
  {
    slug: 'listed-company-directors',
    name: 'Listed Company Directors',
    icon: '📈',
    description: 'Directors of NZX-listed companies face heightened scrutiny from the Financial Markets Authority (FMA), shareholder activist groups, and institutional investors. Securities litigation and regulatory enforcement actions are significant risks.',
    longDesc: `Directors of NZX-listed companies operate at the intersection of the most demanding regulatory environment and the most sophisticated liability risks in New Zealand corporate law. The Financial Markets Conduct Act 2013 (FMCA) imposes continuous disclosure obligations, fair dealing requirements, and licensed activity obligations that do not apply to private companies. The Financial Markets Authority actively supervises compliance and has demonstrated willingness to pursue enforcement actions against individual directors.

The continuous disclosure obligation is particularly challenging. Listed company directors must ensure that the company discloses material information to the market immediately when the company becomes aware of it. "Material" means information that a reasonable person would expect to have a material effect on the price or value of the company's securities. This is a real-time obligation — not a quarterly reporting matter. Directors who delay disclosure, or who fail to identify information as material, face personal enforcement risk.

The IoD's 2025 D&O report specifically highlighted litigation funding as a significant and growing concern for listed company directors. Litigation funders — commercial entities that finance lawsuits in exchange for a share of any recovery — have made securities class actions economically viable in New Zealand for the first time. The Law Commission's 2022 review of class actions and litigation funding has increased certainty around the enforcement framework. Listed company directors must now assume that any significant market event — a profit downgrade, a delayed disclosure, a governance failure — may attract the attention of litigation funders who can aggregate small individual losses into material class action claims.

ESG governance is emerging as a significant D&O exposure for listed company directors. New Zealand's mandatory climate-related disclosures (TCFD requirements under the Financial Sector (Climate-related Disclosures and Other Matters) Amendment Act 2021) apply to large listed companies, registered banks, and large insurers. Directors who fail to ensure adequate climate governance and disclosure face regulatory and litigation risk as climate accountability expectations intensify.

The scale of D&O protection required for listed company directors is significantly higher than for private company boards. Policy limits of NZ$20M–$50M are standard; major listed companies may need NZ$100M or more. The investment in specialist D&O advisory is proportionate.`,
    risks: [
      'FMA enforcement action for continuous disclosure breaches — the FMCA requires immediate disclosure of material information and the FMA actively enforces this',
      'Securities class actions funded by litigation funders — increasingly viable following the Law Commission\'s litigation funding framework review',
      'Insider trading allegations and investigation costs — even allegations without substance are expensive to defend',
      'ESG and climate disclosure failures — mandatory TCFD reporting creates specific director liability for inadequate climate governance',
      'Shareholder activist campaigns and derivative actions — institutional investors and activist funds are increasingly willing to pursue board accountability',
      'Continuous disclosure failures — particularly around profit downgrades, material contracts, and related-party transactions',
    ],
    claimExamples: [
      {
        title: 'FMA investigation of continuous disclosure breach',
        situation: 'A director of an NZX-listed technology company participated in board discussions about a major customer contract that later fell through. The FMA commenced an investigation alleging the company should have disclosed the risk to the contract earlier, with the delay causing investor losses. Two non-executive directors were personally included in the investigation alongside the CEO.',
        outcome: 'The company\'s D&O policy covered NZ$280,000 in legal and expert costs for the two NEDs during the FMA investigation. The FMA ultimately resolved the matter with the company through an agreed statement of facts and public censure — no personal enforcement action was taken against the directors. Run-off cover was subsequently reviewed and increased.',
        lesson: 'FMA investigations are expensive even when resolved without prosecution. Listed company boards must have robust disclosure protocols and D&O policies with adequate regulatory defence extensions.',
      },
      {
        title: 'Shareholder class action following profit downgrade',
        situation: 'Following a significant profit downgrade by an NZX-listed manufacturing company, a litigation funder aggregated claims from multiple shareholders who alleged the company had failed to disclose the deteriorating trading conditions in a timely manner. The class action named all five board members personally and sought NZ$18M in damages.',
        outcome: 'The company\'s D&O programme (with entity cover at NZ$30M) engaged specialist securities litigation counsel. After three years of proceedings, the matter was settled for NZ$6.5M across the entity and individual directors. The D&O programme covered the full settlement and legal costs.',
        lesson: 'Securities class actions funded by litigation funders are a reality for NZX-listed companies. Policy limits must be adequate for worst-case scenarios — underinsured listed company boards face catastrophic personal exposure.',
      },
    ],
    coverNeeds: [
      'High-limit D&O with entity securities cover (Side C) — NZ$20M minimum for small-cap listed companies; NZ$50M+ for mid-cap and large-cap',
      'Regulatory defence extension — specifically covering FMA investigations and enforcement proceedings under the FMCA',
      'Litigation response cover — crisis communications and specialist legal counsel from the moment a claim or investigation arises',
      'Side A cover that survives insolvency — essential for all listed company directors given potential for company financial distress',
      'Broad definition of wrongful act — covering securities law obligations, governance failures, and ESG-related claims',
    ],
    checklistItems: [
      'Does the company maintain adequate D&O cover with a policy limit appropriate for market capitalisation?',
      'Is there a specific regulatory defence extension covering FMA investigations?',
      'Does the policy include Side C (entity securities cover) for class action exposure?',
      'Is Side A protection robust and does it survive insolvency?',
      'Is the continuous disclosure protocol documented and regularly reviewed by the board?',
      'Are ESG and climate disclosure obligations being met under TCFD requirements?',
      'Is run-off cover in place or committed for all departing directors?',
      'Has the policy been reviewed by specialist counsel (not just the broker) in the last 12 months?',
    ],
    pricingGuide: 'D&O insurance for NZX-listed companies is the most expensive director insurance category, reflecting the heightened regulatory and litigation exposure. Annual premiums typically range from NZ$20,000 for small-cap listed companies to NZ$150,000+ for large-cap companies. The policy structure — including the allocation between Side A, B, and C, the regulatory defence extension, and the run-off provisions — matters as much as the limit. Specialist D&O brokers with listed company expertise are essential for this category.',
    metaTitle: 'D&O Insurance for Listed Company Directors NZ | FMA & Securities Cover',
    metaDesc: 'D&O insurance for NZX-listed company directors. Cover FMA investigations, securities claims, and shareholder disputes. Expert broker referral service.',
    h1: 'D&O Insurance for Listed Company Directors',
    intro: 'Directors of NZX-listed companies operate in one of the most demanding regulatory environments. The Financial Markets Conduct Act 2013 imposes strict continuous disclosure obligations, and the Financial Markets Authority actively pursues breaches. A single disclosure failure can trigger a shareholder class action and a regulatory investigation simultaneously.',
  },
  {
    slug: 'trustees-and-charities',
    name: 'Trustees & Charity Directors',
    icon: '❤️',
    description: 'Trustees of charitable trusts and incorporated societies carry personal liability for their governance decisions under the Charities Act 2005 and the Incorporated Societies Act 2022. Many assume their volunteer status protects them — it does not.',
    longDesc: `Serving on a charity board or as a trustee is one of the most meaningful governance roles available — and one of the most misunderstood from a liability perspective. The persistent myth is that volunteer trustees are protected from personal liability by the nature of their role. law is clear: they are not.

The Incorporated Societies Act 2022 fundamentally changed the liability landscape for incorporated society officers. Where the old 1908 Act was largely silent on officer duties, the 2022 Act introduced formal, Companies Act-style duties: the duty to act in good faith, in the best interests of the society, and to exercise reasonable care, diligence, and skill. These duties are owed to the society and, through it, to its members and beneficiaries. Breach of these duties can result in personal liability.

The Trusts Act 2019 similarly codified trustee duties in a way that makes personal accountability clearer. Charitable trust trustees now have explicit, documented duties that courts can enforce. Misapplication of trust funds — even if inadvertent — can result in trustees being personally required to make good the loss.

Employment exposure is a significant and often overlooked risk for charity trustees. Charities are employers. When staff are dismissed — even for genuine performance reasons — personal grievance claims against the organisation and its individual officers are common. New Zealand's Employment Relations Act 2000 gives employees strong protections, and Employment Relations Authority awards can be substantial relative to charity budgets.

The financial pressure on the charitable sector means that insolvency risk is also real for some incorporated societies and charitable trusts. An incorporated society that becomes unable to pay its debts creates officer liability exposure in the same way as a company in financial distress.

The good news is that charity and not-for-profit management liability insurance is genuinely affordable — often NZ$600–$2,500/year — reflecting the sector's risk profile. Many charities operate without it, not because they have made an informed risk decision, but because no one has explained what it covers. Every charitable trustee should insist that their organisation carries adequate cover.`,
    risks: [
      'Personal liability under the Incorporated Societies Act 2022 — the 2022 Act introduced Companies Act-style officer duties for incorporated society officers',
      'Misapplication of charitable funds — using charitable assets for purposes outside the trust deed or society rules can result in personal liability to beneficiaries',
      'Employment claims from charity staff — personal grievance claims frequently arise in the NFP sector, often in the context of volunteer/staff boundary disputes',
      'Regulatory action from Charities Services — deregistration and investigation can expose trustees to reputational and personal consequences',
      'Insolvent trading by an incorporated society — officers can face creditor claims if the society continues operating while insolvent',
      'Trustee duties under the Trusts Act 2019 — codified duties make personal accountability clear and enforceable',
    ],
    claimExamples: [
      {
        title: 'Employment claim at a community foundation',
        situation: 'A trustee of a Wellington community foundation was personally named in a personal grievance claim by a former programme manager who alleged constructive dismissal following a conflict with the board over programme delivery. The claim sought NZ$72,000 in compensation and named two individual trustees personally alongside the foundation entity.',
        outcome: 'The foundation\'s management liability policy (EPL component) covered NZ$24,000 in legal defence costs at the Employment Relations Authority and a NZ$38,000 settlement contribution. The trustees were personally protected by the policy\'s extension to individual officers.',
        lesson: 'Charity trustees are exposed to employment claims from staff in the same way as company directors. Every charity with employees should carry EPL cover.',
      },
      {
        title: 'Incorporated society faces insolvency, officers pursued',
        situation: 'The officers of a regional sports club (incorporated society) continued operating the club for eight months after it became technically insolvent, drawing on credit facilities to fund competitions. When the society was wound up, creditors pursued the three principal officers for NZ$65,000 in unpaid debts.',
        outcome: 'The society\'s management liability policy covered legal defence costs of NZ$18,000. A settlement was reached with creditors for NZ$40,000, significantly below the original claim. Without insurance, the individual officers would have been personally liable for the full amount.',
        lesson: 'Incorporated societies face the same insolvent trading risks as companies. Officers should treat financial sustainability with the same seriousness as corporate directors.',
      },
    ],
    coverNeeds: [
      'Management liability package designed for the NFP/charity sector — covers trustee liability, EPL, and statutory liability in a single, affordable policy',
      'Employment practices liability as a priority for any charity with paid staff',
      'Trustee liability extension confirming cover extends to all board members, including volunteer officers',
      'Affordable limits scaled to the charity\'s asset base and operational scale — specialist NFP brokers can find appropriate cover within budget',
      'Run-off cover when trustees retire or the charity is wound up',
    ],
    checklistItems: [
      'Does the charity carry management liability or trustee liability insurance?',
      'Does the policy extend to all trustees and officers, including volunteer positions?',
      'Is the employment practices liability component adequate for the number of paid staff?',
      'Are the charity\'s financial controls adequate to prevent misapplication of funds?',
      'Is the organisation\'s trust deed or constitution up to date and does it reflect current activities?',
      'Are annual returns filed with Charities Services on time?',
      'Is there a documented process for trustee conflict of interest disclosure?',
    ],
    pricingGuide: 'Charity and not-for-profit management liability insurance is among the most affordable in the sector. Small charities with modest assets and few staff can typically obtain appropriate cover for NZ$600–$1,500/year. Larger charities with significant assets, many staff, or complex programmes should budget NZ$1,500–$3,000/year. NFP-specialist insurers offer specific products that recognise the sector\'s risk profile and governance culture.',
    metaTitle: 'Trustee Liability Insurance NZ | Charity Directors & Board Members',
    metaDesc: 'Trustee and charity director liability insurance NZ. Protect yourself personally while serving on charity and trust boards. Free broker referral.',
    h1: 'Trustee Liability Insurance for Charity Directors',
    intro: 'Serving as a trustee or director of a New Zealand charitable trust or incorporated society is a meaningful commitment — but it comes with real personal liability. The Charities Act 2005, the Incorporated Societies Act 2022, and the Trusts Act 2019 all impose duties on trustees that, if breached, can result in personal claims.',
  },
  {
    slug: 'ceo-and-senior-management',
    name: 'CEOs & Senior Management',
    icon: '💼',
    description: 'Chief executives and senior managers who are not formally directors can still be personally liable as "officers" under the Companies Act 1993 and the Health and Safety at Work Act 2015. D&O and management liability policies typically extend to cover officers as well as directors.',
    longDesc: `The personal liability exposure of chief executives and senior managers is a consistently underappreciated governance issue. Many CEOs and senior managers assume that personal liability is the domain of the board — that their role is to manage, while the directors bear governance responsibility. law does not support this distinction.

The Companies Act 1993 defines "officer" broadly to include persons who exercise significant management responsibilities, including chief executives. The Health and Safety at Work Act 2015 goes further, explicitly imposing due diligence obligations on "officers" — a category that includes CEOs and senior managers with significant influence over the management of the business. The HSWA's officer due diligence obligation is personal, active, and enforceable.

The consequence is that chief executives face a dual liability profile. They bear both formal director duties if they sit on the board and officer duties under the HSWA regardless of their board status. A CEO who is not a board member is still an officer under the HSWA and can be personally prosecuted by WorkSafe NZ for failing to ensure the company meets its health and safety obligations.

The HSWA prosecutorial environment has become increasingly demanding. WorkSafe NZ's prosecution of the former CEO of Ports of Auckland — upheld on appeal by the High Court in 2026 — reinforced the court's expectations of active, documented due diligence by officers. CEOs and senior managers who cannot demonstrate that they personally verified the company's health and safety systems and processes are at real risk of prosecution following a serious workplace incident.

Employment claims are a particular exposure for senior managers who manage large or complex teams. Personal grievance claims from direct reports — particularly those involving constructive dismissal, workplace bullying, or discrimination allegations — frequently name the managing director personally.

The critical first step for any CEO or senior manager is to confirm that the company's D&O policy explicitly extends to "officers" in addition to directors. Many policies do, but some are narrowly defined. A specialist broker can review the policy wording and identify any gaps.`,
    risks: [
      'Personal liability as an "officer" under the HSWA 2015 — WorkSafe NZ can prosecute individual CEOs and senior managers for failure to exercise due diligence, regardless of board membership',
      'The Ports of Auckland precedent (2026) — High Court upheld the officer due diligence standard for CEOs, reinforcing that active personal oversight is required',
      'Employment claims from direct reports — personal grievance, bullying, and discrimination claims often target the individual manager as well as the company',
      'Regulatory investigation costs — Commerce Commission, FMA, and sector-specific regulators may investigate individual senior managers',
      'Contractual liability arising from management decisions — particularly in relation to major contracts entered into with officer authority',
      'Gap in company D&O policy — policies that do not clearly extend to "officers" leave CEOs and senior managers personally unprotected',
    ],
    claimExamples: [
      {
        title: 'CEO prosecuted under HSWA following workplace injury',
        situation: 'Following a serious hand injury to a machine operator at a Palmerston North food processing facility, WorkSafe NZ investigated and prosecuted the CEO under the HSWA 2015. The prosecution alleged the CEO had failed to exercise due diligence as an officer — specifically, that there was no documented evidence the CEO had personally reviewed the machine guarding risk assessment or verified that adequate controls were in place.',
        outcome: 'The company\'s statutory liability policy covered NZ$145,000 in legal defence costs for the CEO, including specialist H&S counsel and expert witness fees for a four-day defended hearing. The CEO provided evidence of general oversight but was ultimately convicted because specific documented verification could not be established. A fine of NZ$65,000 was imposed.',
        lesson: 'HSWA due diligence requires documented, active personal oversight — not just general management. CEOs must be able to demonstrate specifically how they verified the company\'s H&S systems. Insurance covers the legal costs but cannot prevent conviction where due diligence was not exercised.',
      },
      {
        title: 'CFO claims personal liability from company restatement',
        situation: 'A CFO of a private equity-backed company was pursued personally by the PE fund\'s co-investors following a significant restatement of the company\'s historical financial accounts. The investors alleged the CFO had known or should have known about accounting irregularities that inflated performance against earn-out targets. Legal costs and investigation fees exceeded NZ$190,000.',
        outcome: 'The management liability policy (D&O component) covered NZ$190,000 in legal and investigation costs. The claim was ultimately resolved without personal judgment against the CFO, who demonstrated the irregularities arose from a revenue recognition dispute rather than dishonesty.',
        lesson: 'Officers at below-board level who have authority over financial reporting carry significant D&O exposure, particularly in PE-backed companies. Confirm that the company\'s D&O policy extends to officers including the CFO and other C-suite executives.',
      },
    ],
    coverNeeds: [
      'Confirm company D&O policy explicitly extends to "officers" — not all policies do; verify the wording, not management\'s assurance',
      'Statutory liability coverage as a priority — HSWA prosecutions of CEOs and senior managers are increasing and can generate extraordinary legal costs',
      'Employment practices liability — particularly for managers who directly manage large teams',
      'Personal D&O cover if the company policy has gaps or inadequate officer provisions',
      'Document HSWA due diligence activities meticulously — insurance covers costs but not convictions',
    ],
    checklistItems: [
      'Does the company\'s D&O policy explicitly include "officers" (not just "directors") as insureds?',
      'Does the policy include statutory liability cover for HSWA and other regulatory prosecutions?',
      'Can you document your personal HSWA due diligence activities — site visits, H&S reporting review, risk register engagement?',
      'Is there an employment agreement and performance framework for all direct reports?',
      'Are employment management decisions (performance, dismissal) documented and HR-reviewed?',
      'Is the company\'s D&O limit adequate for your specific role\'s liability profile?',
      'Is run-off cover in place for when you leave your current role?',
    ],
    pricingGuide: 'CEOs and senior managers are typically covered under the company\'s management liability policy rather than individual personal policies. The company should ensure the policy limit is adequate for the officer\'s specific liability profile. If the company policy is inadequate, personal D&O cover for individual officers is available from specialist brokers at NZ$800–$2,500/year depending on company size and sector.',
    metaTitle: 'D&O Insurance for CEOs & Senior Managers NZ | Officer Liability Cover',
    metaDesc: 'D&O and management liability insurance for NZ CEOs and senior managers. Protect yourself as an officer under NZ law. Broker matching service.',
    h1: 'D&O Insurance for CEOs and Senior Management',
    intro: 'You do not need to hold the title of director to face director-level personal liability. The Companies Act 1993 and the Health and Safety at Work Act 2015 both impose significant obligations on "officers" of companies — a category that includes chief executives and senior managers who exercise significant influence over company decisions.',
  },
  {
    slug: 'family-business-directors',
    name: 'Family Business Directors',
    icon: '🏡',
    description: 'Directors of closely-held family companies face unique risks including minority shareholder disputes, family member employment claims, and co-director conflicts — often without the governance infrastructure of larger companies.',
    longDesc: `Family businesses represent the majority of private companies in New Zealand. They are often the most successful form of commercial enterprise — but they carry a distinctive liability profile that standard governance frameworks do not always address. When family relationships are layered over governance obligations, the result can be disputes that are simultaneously commercial, legal, and personal.

The most common D&O liability trigger for family business directors is the minority shareholder claim. When a family company has multiple director-shareholders — siblings, parents and children, or business partners who married into the family — disagreements about distributions, strategic direction, or remuneration can escalate into formal legal action. Under the Companies Act 1993, a minority shareholder who can demonstrate their interests have been oppressed or unfairly prejudiced can seek court orders including a compulsory buy-out at a court-assessed price, or a winding-up of the company.

The litigation involved in minority shareholder oppression claims is often protracted and expensive. Three or four years of litigation is not uncommon, with legal costs accumulating on both sides. D&O insurance provides the financial capacity to mount a proper defence — and to engage the commercial negotiation process that often, eventually, resolves these disputes.

Employment claims involving family members create a second category of liability that is both legally serious and personally painful. A family member who is also an employee and is dismissed — particularly in circumstances involving a family breakdown or a shareholder dispute — can bring personal grievance claims that name the director-employer personally. New Zealand's Employment Relations Act 2000 provides employees with broad protections, and the ERA does not treat family relationships as a defence.

The practical reality for most family business directors is that governance processes are informal, documentation is sparse, and decisions are made in conversations rather than board meetings. This creates real liability exposure: without documented processes for conflict-of-interest disclosure, financial decisions, and employment management, defending any formal claim becomes substantially harder.

D&O insurance for family business directors should include D&O cover for shareholder and creditor claims, employment practices liability for family and non-family staff disputes, and crime cover if the business processes client funds or has high-value inventory accessible to multiple family members.`,
    risks: [
      'Minority shareholder oppression claims — can result in compulsory buy-out at court-assessed price, or winding-up proceedings under the Companies Act 1993',
      'Family member employment claims — personal grievance, unjustified dismissal, and discrimination claims following relationship breakdowns or disputes',
      'Co-director conflicts — closely-held company governance disputes frequently escalate to derivative actions or directors\' duty proceedings',
      'Insolvent trading exposure — family businesses often lack formal financial governance, increasing the risk of continuing to trade past the point of insolvency',
      'Absence of documented governance processes — makes defending any claim substantially harder and increases litigation risk',
      'Crime and fraud exposure — multiple family members with system access and high trust environments can create internal theft vulnerabilities',
    ],
    claimExamples: [
      {
        title: 'Minority shareholder oppression claim in family retail company',
        situation: 'Following a breakdown in the relationship between two siblings who were co-directors and shareholders of an Auckland retail company, the minority shareholder commenced oppression proceedings under the Companies Act 1993. The claim alleged that the majority director-shareholder had increased their own salary without board approval, failed to declare dividends despite strong profits, and taken personal loans from the company. Three years of litigation followed.',
        outcome: 'The majority director\'s D&O policy covered NZ$285,000 in legal defence costs over the litigation period and contributed NZ$120,000 toward an expert valuation. The dispute was ultimately resolved with the minority shareholder\'s interest bought out at a price determined by an independent valuer.',
        lesson: 'Minority shareholder oppression claims in family companies are common, protracted, and extremely expensive. Without insurance, legal costs alone can threaten the business. D&O cover provides the financial capacity to manage the process professionally.',
      },
      {
        title: 'Personal grievance from dismissed family employee',
        situation: 'A Christchurch family company director dismissed their sibling from an operations manager role following a serious dispute over the direction of the business. The sibling brought personal grievance proceedings naming both the company and the director personally, alleging unjustified dismissal and constructive dismissal. There was no written employment agreement and no documented performance management process.',
        outcome: 'The management liability policy (EPL component) covered NZ$48,000 in legal costs at the Employment Relations Authority and a NZ$65,000 settlement. The absence of documentation made the company\'s position difficult to defend — the policy covered the costs of a commercially acceptable resolution.',
        lesson: 'Family member employees have the same employment rights as any other employee. The absence of written employment agreements, documented performance processes, and proper dismissal procedures creates significant personal liability for director-employers.',
      },
    ],
    coverNeeds: [
      'D&O cover with specific Side A protection for shareholder and creditor claims — the most common litigation type for family business directors',
      'Employment practices liability — essential for any family business with both family and non-family staff',
      'Crime cover if the business involves client funds, inventory, or high-value assets accessible to multiple family members',
      'Adequate policy limits — shareholder litigation costs can exceed NZ$300,000 in legal costs alone for complex disputes',
      'Run-off cover for directors who leave following a family dispute — claims often follow departure',
    ],
    checklistItems: [
      'Is there a shareholders\' agreement in place that governs the relationship between director-shareholders?',
      'Are all director decisions (salary, distributions, loans from the company) documented in board minutes?',
      'Do all family employees have written employment agreements and documented performance frameworks?',
      'Is the company\'s D&O policy limit adequate for the scale of the business and the value of assets at stake?',
      'Is crime cover in place for internal theft or fraud risk?',
      'Is run-off cover considered when any director or major shareholder exits?',
      'Has the company obtained independent legal advice on governance processes?',
    ],
    pricingGuide: 'Management liability insurance for family business directors typically ranges from NZ$1,500 to NZ$6,000 per year depending on company revenue, number of shareholders, and industry. Family businesses with multiple shareholders and employees should budget toward the upper end. Adding employment practices liability cover typically increases premium by 20–40% above standalone D&O. Crime cover may add NZ$300–$800/year.',
    metaTitle: 'D&O Insurance for Family Business Directors NZ | Personal Liability Cover',
    metaDesc: 'D&O insurance for NZ family business directors. Protect against shareholder disputes, employment claims, and creditor liability. Licensed broker referral.',
    h1: 'D&O Insurance for Family Business Directors',
    intro: 'Family businesses are the backbone of the New Zealand economy — but they carry a distinctive director liability profile. Minority shareholder disputes, family member employment claims, and informal governance processes combine to create real personal liability exposure for directors of closely-held companies.',
  },

  {
    slug: 'financial-services-directors',
    name: 'Financial Services Directors',
    icon: '💳',
    description: 'Directors of NZ financial services companies operate under direct FMA and RBNZ oversight. The CBL case confirmed that personal liability for continuous disclosure failures is real — and increasing.',
    longDesc: `Directors and officers of New Zealand financial services companies operate in the most heavily regulated commercial environment in the country. They face direct oversight from the Financial Markets Authority (FMA) and — for banks, non-bank deposit takers, and insurers — the Reserve Bank of New Zealand (RBNZ). The consequence is a dual D&O liability profile: the standard Companies Act director duties, plus a further layer of personal liability risk arising from sector-specific regulatory obligations.

The landmark February 2025 FMA case against CBL Insurance's former CFO Carden Mulholland confirmed that the FMA will pursue individual officers — not just companies — for failures in continuous disclosure and financial reporting obligations. This precedent extends the liability profile from board-level directors to include CFOs, compliance officers, and senior managers who carry accountability for financial market obligations. It is the clearest signal yet that FMA enforcement in New Zealand will look more like ASIC's aggressive individual accountability approach in Australia.

Directors and officers of financial advice providers (licensed under the FMCA 2013) carry specific personal accountability for the quality, suitability, and fairness of advice given by their organisations. The FMA's conduct and culture reviews — which have resulted in formal findings and agreed remediation programmes at multiple large providers — create D&O exposure even without a formal prosecution. The costs of responding to a conduct review, providing legal representation, and implementing remediation programmes can run to hundreds of thousands of dollars before any formal action is taken.

RBNZ-regulated entities — banks, non-bank deposit takers, and insurers — must report material cyber incidents within 72 hours under the Banking (Prudential Supervision) Act. Non-compliance carries penalties of up to NZ$1 million. Directors who are responsible for risk governance and who cannot demonstrate appropriate oversight of the company's cyber security framework face personal exposure.

The FMA's 2024 strategic framework emphasised fair treatment of customers, appropriate conduct oversight, and governance as the three pillars of its supervisory approach. For financial services directors, this means board-level accountability for customer outcomes is not merely a governance aspiration — it is an enforcement priority.

D&O insurance for financial services directors must specifically address the costs of FMA and RBNZ investigations, regulatory defence (including expert witnesses and specialist financial regulation counsel), civil penalty exposure, and the extended definition of "officer" that regulators apply in the sector.`,
    risks: [
      'FMA enforcement action — CBL precedent confirms FMA will pursue CFOs and senior officers personally for disclosure and financial reporting failures',
      'FMCA compliance failures — personal accountability for advice quality, suitability, and fair treatment obligations as a licensed financial advice provider',
      'RBNZ prudential obligations — cyber incident reporting, capital adequacy governance, and liquidity management responsibilities',
      'Civil penalty exposure — FMA can seek civil penalties against individuals under the Financial Markets Conduct Act 2013',
      'Conduct and culture reviews — FMA\'s supervisory reviews create significant legal costs even without formal enforcement action',
      'Securities class action exposure — NZX-listed financial service company directors face rising litigation funding activity',
    ],
    claimExamples: [
      {
        title: 'FMA investigation of fintech director for misleading investor disclosure',
        situation: 'The FMA commenced an investigation into a Wellington fintech company director following allegations that the company\'s crowdfunding information memorandum contained materially misleading statements about the company\'s regulatory status and financial position. Two directors were investigated. The investigation extended over 14 months with multiple information requests and document production obligations.',
        outcome: 'The company\'s management liability policy covered NZ$165,000 in legal costs for both directors during the investigation, including specialist financial regulation counsel. The investigation was resolved with a formal warning and agreed corrective statements — no civil penalties were imposed. Without insurance, the directors would have faced the legal costs personally.',
        lesson: 'FMA investigations are expensive to respond to even when they do not result in prosecution. The management liability policy provides access to specialist regulatory counsel from the moment of investigation — not just at prosecution stage.',
      },
      {
        title: 'Insurance company director faces RBNZ breach allegation',
        situation: 'Following a significant cyber incident at a licensed insurer, RBNZ commenced a review of whether the company\'s directors had fulfilled their obligations under the Insurance (Prudential Supervision) Act, specifically regarding governance of cyber risk. Three board members were asked to appear for formal interviews. Expert cyber governance evidence was required.',
        outcome: 'The management liability policy covered NZ$220,000 in legal representation, expert evidence, and preparation costs for the three directors over an eight-month regulatory review process. The review resulted in agreed enhancements to the board\'s cyber governance framework rather than formal sanctions.',
        lesson: 'RBNZ regulatory reviews involve personal director obligations — not just company-level compliance. D&O insurance should specifically cover the costs of responding to prudential regulator enquiries about governance.',
      },
    ],
    coverNeeds: [
      'D&O coverage with specific FMA and RBNZ investigation defence provisions — the primary regulatory risk for financial services directors',
      'Civil penalty coverage — FMA can seek penalties against individuals under the FMCA; confirm your policy responds',
      'Extended definition of officer — ensure the policy covers CFOs, compliance officers, and senior managers, not just board directors',
      'Adequate limit — FMA investigation and defence costs for complex matters can exceed NZ$500,000 before any formal proceedings',
      'Run-off cover when leaving a financial services board or officer role — FMA investigations can commence months or years after the relevant conduct',
    ],
    checklistItems: [
      'Does the company\'s D&O policy specifically cover FMA and RBNZ regulatory investigation costs?',
      'Does the policy extend to officers — including the CFO and compliance function — not just directors?',
      'Is the policy limit adequate for the regulatory complexity of the entity?',
      'Is the policy\'s definition of "wrongful act" broad enough to cover alleged continuous disclosure failures and financial reporting obligations?',
      'Are civil penalty exposure and defence costs both covered?',
      'Is run-off cover arranged for any director or officer departing the entity?',
      'Have board-level cyber governance obligations been documented and reviewed?',
    ],
    pricingGuide: 'D&O insurance for financial services directors is among the most expensive in the market due to regulatory complexity and claims experience. For licensed financial advice providers and smaller fintech companies, management liability cover typically ranges from NZ$3,000–$8,000/year. For RBNZ-regulated entities (banks, insurers, non-bank deposit takers), standalone D&O for the board may cost NZ$10,000–$50,000+ per year depending on balance sheet size and complexity. Specialist financial services insurance brokers can structure appropriate coverage.',
    metaTitle: 'D&O Insurance for Financial Services Directors NZ | FMA & RBNZ Cover',
    metaDesc: 'D&O insurance for NZ financial services directors. Covers FMA investigations, RBNZ regulatory reviews, and FMCA civil penalty defence. Specialist broker referral.',
    h1: 'D&O Insurance for Financial Services Directors',
    intro: 'Directors and officers of New Zealand financial services companies face the most heavily regulated governance environment in the commercial sector. The February 2025 CBL/FMA case confirmed that the FMA will pursue individual officers personally — making specialist D&O cover essential for anyone serving on the board or in a senior officer role at a licensed financial services entity.',
  },

  {
    slug: 'construction-directors',
    name: 'Construction Directors',
    icon: '🏗️',
    description: 'Construction company directors face New Zealand\'s highest rates of HSWA prosecution and significant insolvent trading risk — as the Mainzeal case demonstrated at the Supreme Court level.',
    longDesc: `The construction sector in New Zealand carries one of the most demanding director liability profiles of any industry. Two distinct and serious risk categories converge: health and safety prosecution risk under the Health and Safety at Work Act 2015, and insolvent trading risk that the Mainzeal Supreme Court decision has placed firmly in the regulatory spotlight.

Construction is consistently the highest-risk sector for WorkSafe NZ prosecutions. The physical nature of construction work — heavy machinery, working at height, excavation, confined spaces, and complex multi-party site management — creates environments where serious injury and death remain far more common than in office-based industries. Under the HSWA 2015, directors of construction companies are "officers" who owe active personal due diligence duties. WorkSafe's prosecution of individual officers has become more frequent following the Ports of Auckland case, and the construction sector accounts for a disproportionate share of those prosecutions.

The insolvent trading risk for construction directors is particularly acute. Construction companies operate on thin margins, with project-based revenue, long payment cycles from head contractors and developers, and significant committed overhead — staff, plant, and materials commitments that cannot be easily reduced when cash flow deteriorates. The gap between a company appearing viable and crossing the legal threshold of insolvency can be narrow and is rarely obvious in real time.

The Mainzeal Supreme Court decision in August 2023 — ordering the directors of Mainzeal Property and Construction to pay NZ$39.8 million — is the most significant New Zealand director liability precedent in recent memory. The Supreme Court found that the directors had breached sections 135 and 136 of the Companies Act 1993 by allowing the company to trade while insolvent, and by incurring obligations they knew the company could not perform. The practical lesson from Mainzeal is that construction directors must seek independent financial and legal advice urgently when the company shows signs of financial distress — not when insolvency is certain.

Subcontractor disputes represent a third liability category specific to construction. Disputes over variations, payment, defect liability, and delay claims between head contractors and subcontractors frequently escalate into legal proceedings that can name directors personally. In the construction sector, the volume and complexity of concurrent contractual obligations means directors carry ongoing commercial litigation exposure throughout any significant project.

D&O and management liability insurance for construction company directors must be structured to address all three risks: HSWA prosecution defence (through statutory liability cover), insolvent trading and creditor claims (through D&O), and employment disputes from construction staff (through employment practices liability).`,
    risks: [
      'WorkSafe NZ prosecution under HSWA 2015 — construction is the highest-risk sector for officer prosecutions following workplace injuries and fatalities',
      'Insolvent trading liability — Mainzeal Supreme Court precedent confirms personal liability for directors who allow trading past the point of insolvency',
      'Subcontractor and head contractor disputes — variation claims, defect liability, delay disputes, and payment disputes frequently escalate to proceedings naming directors',
      'Leaky building legacy liability — directors of companies that participated in leaky building construction still face historical claims in some cases',
      'Employment disputes — construction workforces have high turnover and employment practices litigation is common',
      'Personal guarantees to lenders and suppliers — construction directors often provide personal guarantees that create direct personal financial exposure separate from D&O',
    ],
    claimExamples: [
      {
        title: 'WorkSafe prosecution of construction director following scaffolding collapse',
        situation: 'Following a serious workplace injury in which a labourer fell from inadequately braced scaffolding on an Auckland residential site, WorkSafe NZ investigated and prosecuted both the company and its director as an officer under the HSWA 2015. The prosecution alleged the director had failed to exercise due diligence — specifically, that there was no documented scaffold inspection regime and no evidence the director had personally verified contractor safety protocols.',
        outcome: 'The company\'s statutory liability policy covered NZ$175,000 in specialist health and safety legal defence costs for a three-day defended hearing. The director ultimately entered a guilty plea to a lesser charge in exchange for a reduced fine. Insurance covered all defence costs. A fine of NZ$90,000 was imposed on the company; a NZ$35,000 fine on the director.',
        lesson: 'Construction directors must be able to document their personal due diligence on health and safety — site visits, contractor approval processes, risk assessment reviews. Insurance covers the defence costs but cannot substitute for actual documented oversight.',
      },
      {
        title: 'Liquidator pursues construction director under Mainzeal principles',
        situation: 'A Wellington commercial construction company entered liquidation after a major developer client failed to pay on a significant contract. The liquidator identified a three-month period during which the company had continued to incur obligations (staff wages, subcontractor commitments, material orders) after the company had become technically insolvent. The liquidator commenced proceedings against the sole director personally seeking NZ$680,000 in losses.',
        outcome: 'The director\'s management liability policy covered NZ$145,000 in legal defence costs and a NZ$185,000 settlement contribution. The director retained personal liability for the balance but the insurance substantially reduced personal financial exposure. The case reinforced the importance of taking early independent advice when cash flow deteriorates.',
        lesson: 'Following Mainzeal, liquidators are more likely to pursue construction directors personally. The key defence is demonstrating reasonable business judgment in continuing to trade — which requires documented financial assessment and evidence of seeking independent advice.',
      },
    ],
    coverNeeds: [
      'Statutory liability cover as the highest priority — WorkSafe prosecutions of construction officers generate extraordinary legal costs for defended hearings',
      'D&O cover with specific insolvent trading protection — the primary financial liability for construction directors in a challenging economic environment',
      'Employment practices liability — construction workforces have high turnover, which increases employment dispute frequency',
      'Adequate policy limits — a serious HSWA prosecution with expert evidence can cost NZ$200,000+ in legal fees before any fine is determined',
      'Crisis management cover if a workplace fatality occurs — reputational management alongside legal defence is essential',
    ],
    checklistItems: [
      'Is statutory liability cover (WorkSafe/HSWA defence) included in the company\'s insurance programme?',
      'Can all directors document their personal HSWA due diligence — site visits, safety system reviews, contractor approval processes?',
      'Is the company\'s financial position reviewed at each board meeting with clear solvency assessment?',
      'Is independent financial and legal advice obtained when cash flow deteriorates significantly?',
      'Are all employment agreements, performance processes, and dismissal procedures documented?',
      'Are subcontractor relationships governed by written contracts with documented variation and defect procedures?',
      'Is the D&O policy limit adequate for the scale of the company\'s contractual commitments?',
    ],
    pricingGuide: 'Management liability insurance for construction company directors typically ranges from NZ$2,500 to NZ$8,000 per year, with statutory liability cover adding NZ$1,000–$2,500 on top for most policies. Companies with significant revenues, large workforces, or complex multi-party projects should budget toward the upper end. A serious HSWA prosecution can generate legal costs of NZ$150,000–$250,000 for a defended hearing — making the premium cost modest by comparison.',
    metaTitle: 'D&O Insurance for Construction Directors NZ | HSWA & Insolvent Trading Cover',
    metaDesc: 'D&O insurance for NZ construction directors. Covers WorkSafe HSWA prosecutions, insolvent trading claims, and subcontractor disputes. Broker referral.',
    h1: 'D&O Insurance for Construction Company Directors',
    intro: 'Construction company directors carry two of the most serious director liability risks in New Zealand: WorkSafe prosecution under the HSWA 2015 and insolvent trading exposure following the Mainzeal Supreme Court decision. Both risks are real, both are increasing, and both require specialist insurance protection.',
  },

  {
    slug: 'incorporated-societies-officers',
    name: 'Incorporated Society Officers',
    icon: '🤝',
    description: 'The Incorporated Societies Act 2022 introduced express officer duties for the first time — creating personal liability for officers of 24,000+ NZ sports clubs, community groups, and professional associations.',
    longDesc: `The Incorporated Societies Act 2022 is the most significant reform to the governance of New Zealand community organisations in over a century. It replaced the Incorporated Societies Act 1908 and introduced, for the first time, express statutory duties for officers of incorporated societies. The result is that officers of New Zealand's 24,000-plus incorporated societies — sports clubs, community groups, professional associations, Māori organisations, resident associations, hobby groups, and similar bodies — now face personal liability obligations that closely mirror those imposed on directors of limited liability companies.

Until the 2022 Act came into force, officers of incorporated societies operated in a largely unregulated space. The 1908 Act imposed minimal governance requirements and created essentially no personal liability for officers acting in good faith. The 2022 Act changed this comprehensively. Officers of incorporated societies now owe duties that include: acting in good faith in the best interests of the society, exercising powers for proper purposes, avoiding conflicts of interest, not causing detriment to creditors when the society cannot pay its debts, and exercising care, diligence, and skill. These duties can be enforced by the society itself, by members, or by the Registrar of Incorporated Societies.

Most officers of incorporated societies — sports club presidents, school association chairpersons, professional body committee members, Māori land trust officers — have no awareness that they now carry personal liability exposure comparable to a company director. Many serve as volunteers and assume that their volunteer status provides protection. It does not. The 2022 Act applies to all officers regardless of whether they are paid or unpaid.

The practical liability exposures for incorporated society officers extend across several categories. Employment disputes from paid staff members are the most frequent claim type — personal grievance proceedings, unjustified dismissal claims, and harassment or bullying complaints from employees of the organisation can name officers personally. Health and safety obligations under the HSWA 2015 apply to incorporated societies as employers and event operators — officers have the same due diligence duties as company directors. Financial mismanagement — whether through poor governance, inadequate controls, or actual dishonesty by members — creates liability for officers who failed to exercise appropriate oversight.

Sporting bodies and event organisers carry specific H&S exposure for participant safety at events. A serious injury to a competitor or spectator at a club event can trigger both ACC and WorkSafe obligations, with officer accountability if adequate safety planning was not in place.

The good news is that trustee and officer liability insurance for incorporated societies is among the most affordable available. The relatively small scale of most incorporated societies, combined with good risk profiles, means most organisations can obtain appropriate cover for NZ$600–$2,000 per year.`,
    risks: [
      'Personal liability under the Incorporated Societies Act 2022 — express officer duties include good faith, proper purpose, conflict avoidance, and care, diligence, and skill',
      'Employment disputes — organisations with paid staff face personal grievance, unjustified dismissal, and harassment claims that can name officers personally',
      'Health and safety obligations under the HSWA 2015 — officers are "officers" under the Act and owe due diligence duties for events, premises, and activities',
      'Financial mismanagement liability — officers who failed to exercise adequate oversight of finances can face personal liability for losses',
      'Registrar of Incorporated Societies enforcement — the 2022 Act empowers the Registrar to take action against officers who breach their duties',
      'Volunteer immunity misconceptions — many officers incorrectly believe volunteer status or good faith intent protects them from personal liability',
    ],
    claimExamples: [
      {
        title: 'Personal grievance from dismissed sports club employee',
        situation: 'A regional sports club dismissed its paid general manager following a performance management process that lacked documented warnings or formal review steps. The general manager brought a personal grievance claim naming both the club and three committee members (officers) personally, alleging unjustified dismissal and failure to follow a fair process. The Employment Relations Authority required full discovery of the performance management records — which were largely absent.',
        outcome: 'The club\'s management liability policy covered NZ$38,000 in legal costs at the Employment Relations Authority and a NZ$42,000 settlement. The absence of documented performance management processes made a favourable outcome impossible. The officers were individually protected from personal financial liability by the insurance.',
        lesson: 'Sports clubs and community organisations with paid staff face the same employment law obligations as commercial employers. Formal employment agreements, documented performance processes, and HR advice for complex dismissals are essential. Insurance covers the costs when process failures occur.',
      },
      {
        title: 'WorkSafe investigation following sporting event injury',
        situation: 'A participant at a club motorsport event suffered serious injuries when a safety barrier failed at a track event organised by an incorporated society. WorkSafe NZ investigated the event and issued notices to both the society and two of its officer-committee members, alleging a failure to exercise adequate due diligence in risk management and safety planning for the event.',
        outcome: 'The club\'s management liability policy (statutory liability component) covered NZ$68,000 in specialist health and safety legal representation. WorkSafe ultimately accepted a formal improvement undertaking from the club rather than proceeding to prosecution. The officers were able to engage specialist counsel throughout the process.',
        lesson: 'Event organisers owe officer-level due diligence under the HSWA. Officers of incorporated societies that run events must be able to demonstrate documented risk assessments, safety plans, and officer-level oversight of safety arrangements.',
      },
    ],
    coverNeeds: [
      'Management liability or trustee liability insurance that specifically extends to incorporated society officers — not all policies do; verify the wording',
      'Employment practices liability as a core cover for any society with paid staff — the most common claim type for community organisations',
      'Statutory liability cover for HSWA prosecution defence — essential for societies that run events, activities, or have paid staff',
      'Crime cover if the society handles significant funds, particularly through fundraising, membership fees, or grant income',
      'Affordable limits scaled to the society\'s actual asset base and revenue — specialist NFP brokers can find proportionate cover',
    ],
    checklistItems: [
      'Is the society re-registered under the Incorporated Societies Act 2022? (All societies must re-register by December 2025)',
      'Do all officers understand their personal duties under the 2022 Act?',
      'Does the society carry management liability or trustee liability insurance extending to officers?',
      'Are all paid employees covered by written employment agreements?',
      'Is there a documented health and safety plan for all events and premises?',
      'Are financial controls in place to prevent and detect misapplication of funds?',
      'Are conflicts of interest disclosed and documented by officers at each meeting?',
    ],
    pricingGuide: 'Management liability and officer indemnity insurance for incorporated societies is among the most affordable available, reflecting the sector\'s risk profile. Small societies with modest assets and few paid staff can obtain appropriate cover for NZ$600–$1,200 per year. Larger organisations with significant assets, many employees, or high-risk activities (motorsport, water sport, contact sports) should budget NZ$1,500–$3,000 per year. Specialist NFP and community sector brokers offer tailored products.',
    metaTitle: 'Officer Liability Insurance NZ | Incorporated Societies Act 2022 Cover',
    metaDesc: 'Officer liability insurance for NZ incorporated societies under the 2022 Act. Covers sports clubs, community groups, professional associations. Broker referral.',
    h1: 'Officer Liability Insurance for Incorporated Societies',
    intro: 'The Incorporated Societies Act 2022 introduced personal liability obligations for officers of New Zealand\'s 24,000-plus incorporated societies for the first time. Sports club presidents, community group committee members, and professional association officers now carry director-equivalent duties — and need appropriate insurance protection.',
  },

  {
    slug: 'healthcare-directors',
    name: 'Healthcare Directors',
    icon: '🏥',
    description: 'Directors of NZ private hospitals, aged care providers, and medical practices operate under Health NZ oversight, the HSWA 2015, and the Privacy Act\'s health information obligations — a demanding triple liability profile.',
    longDesc: `Directors of New Zealand's private healthcare sector carry a liability profile shaped by three distinct and demanding regulatory frameworks. Health NZ (Te Whatu Ora) oversight of private hospital and specialist services, the Health and Safety at Work Act 2015 in clinical environments, and the Privacy Act 2020's heightened provisions for health information combine to create governance obligations that go well beyond the standard Companies Act director duties.

The healthcare sector is unique in that its primary legal obligation — patient safety — is also its primary commercial purpose. When governance failures occur, they are simultaneously clinical failures, regulatory failures, and personal liability events. Directors who fail to ensure adequate patient safety frameworks are in place carry both regulatory and civil exposure.

Health NZ's audit and licensing of private hospitals and specialist medical facilities creates ongoing director accountability. Licence conditions require governance-level oversight of clinical quality, infection control, staffing ratios, and adverse event reporting. A licence suspension or revocation following a serious adverse event can be commercially devastating and carries reputational consequences that extend to individual directors. The governance documentation required to defend a licence review creates significant legal costs.

The HSWA 2015 applies to healthcare facilities as employers of clinical and support staff, and as operators of environments that carry inherent risks. Healthcare has persistently high workplace injury rates — patient handling injuries, needle-stick injuries, aggression from patients — and directors are personally accountable for the governance of these risks. The duty extends to protection of staff health and wellbeing as well as physical safety, making the mental health and stress management provisions of the Act increasingly relevant in a sector under significant staffing pressure.

Health information under the Privacy Act 2020 and the Health Information Privacy Code (HIPC) carries heightened protection obligations. Healthcare directors are responsible for ensuring the organisation meets both standard Privacy Act obligations and the sector-specific HIPC. A breach of patient health records — increasingly common as healthcare digitises and as ransomware targets healthcare systems globally — triggers mandatory notification obligations to both affected patients and the Privacy Commissioner. The notification and remediation process can cost NZ$50,000–$200,000 for a mid-sized facility, with regulatory investigation costs on top.

Aged care sector directors face additional stress: the sector is under sustained financial pressure from funding constraints, staffing shortages, and rising operating costs. This creates insolvent trading risk for directors of aged care facilities that are financially distressed — with the additional moral complexity that the organisation's residents are among the most vulnerable in society.`,
    risks: [
      'Health NZ regulatory audit and licence compliance — directors are personally accountable for governance of patient safety and clinical quality standards',
      'HSWA 2015 due diligence in clinical environments — healthcare has high workplace injury rates and directors face personal prosecution for system-level failures',
      'Privacy Act 2020 and HIPC obligations — health information breaches trigger mandatory notification, regulatory investigation, and potential third-party claims',
      'Insolvent trading risk in aged care — sector funding pressures and staffing costs create financial distress risk for directors of aged care providers',
      'Employment disputes from clinical and support staff — high-stress environments with significant staff turnover create frequent employment claim exposure',
      'Adverse patient event governance — failure to maintain adequate clinical governance frameworks creates civil liability exposure for directors',
    ],
    claimExamples: [
      {
        title: 'Privacy Commissioner investigation following patient records breach',
        situation: 'A ransomware attack on a private specialist medical centre encrypted the practice management system and resulted in patient health records being posted on a dark web site by the attackers. The Privacy Commissioner commenced an investigation into the governance adequacy of the organisation\'s data security framework. Three board members were required to provide personal evidence of their oversight of the organisation\'s data governance processes.',
        outcome: 'The management liability policy covered NZ$145,000 in legal representation for the three board members during the Privacy Commissioner investigation, and NZ$48,000 in specialist data governance expert evidence. The investigation found inadequate board oversight and resulted in a formal compliance programme. Without insurance, the directors would have faced both the legal costs and the remediation process without support.',
        lesson: 'Healthcare directors are personally accountable for the organisation\'s data governance framework. Board-level oversight of cyber security and data protection — documented in board minutes and reporting processes — is both a Privacy Act obligation and a critical defence in any investigation.',
      },
      {
        title: 'Employment dispute from dismissed clinical manager',
        situation: 'A regional private hospital dismissed its head of nursing following a series of patient safety incidents and a performance management process that was conducted under significant time pressure. The nursing director brought personal grievance proceedings alleging unjustified dismissal and bullying, naming both the company and the CEO personally. The ERA process required extensive factual evidence about the performance management process and clinical safety review.',
        outcome: 'The management liability policy (EPL component) covered NZ$72,000 in legal costs and NZ$95,000 in settlement. The complexity of the clinical context — which required both employment law counsel and clinical governance evidence — drove costs above the typical employment dispute range.',
        lesson: 'Healthcare employment disputes are more complex than standard commercial disputes because clinical performance management involves dual accountability to the employer and to professional registration bodies. Specialist employment law advice is essential, and the costs of complex healthcare employment litigation are higher than general employment claims.',
      },
    ],
    coverNeeds: [
      'D&O cover with specific Health NZ regulatory defence provisions — licence reviews and audit compliance proceedings create significant legal costs',
      'Management liability including employment practices liability — high staff turnover and complex employment environments make EPL essential',
      'Privacy liability cover — health information breaches trigger mandatory notification and regulatory investigation costs',
      'Statutory liability for HSWA defence — healthcare directors face personal prosecution risk for workplace health and safety failures',
      'Cyber insurance (separate or embedded) — ransomware targeting healthcare systems is increasing globally and in New Zealand',
    ],
    checklistItems: [
      'Does the board receive regular reporting on clinical quality, patient safety, and adverse event data?',
      'Is there documented evidence of director-level oversight of the organisation\'s health and safety framework?',
      'Does the board receive reporting on Privacy Act compliance, including data security controls and breach incident management?',
      'Is the organisation\'s Health NZ licence current and are all conditions documented and monitored?',
      'Are all clinical and non-clinical staff covered by written employment agreements with documented performance frameworks?',
      'Is cyber and data governance included in board risk reporting?',
      'Is the management liability policy limit adequate for the scale and regulatory complexity of the organisation?',
    ],
    pricingGuide: 'Management liability insurance for private healthcare directors typically ranges from NZ$3,000 to NZ$12,000 per year, depending on the size of the facility, the number of employees, revenue, and the regulatory complexity of the services provided. Aged care facilities and private hospitals should budget toward the upper end. Adding privacy liability and cyber cover typically increases the total programme cost by NZ$2,000–$5,000/year depending on the volume of patient health records held.',
    metaTitle: 'D&O Insurance for Healthcare Directors NZ | Private Hospital & Aged Care Cover',
    metaDesc: 'D&O insurance for NZ private hospital, aged care, and healthcare directors. Covers Health NZ regulation, HSWA, Privacy Act, and employment disputes.',
    h1: 'D&O Insurance for Healthcare Company Directors',
    intro: 'Directors of New Zealand\'s private healthcare sector face governance obligations shaped by three demanding regulatory frameworks: Health NZ oversight, the HSWA 2015 in clinical environments, and the Privacy Act\'s heightened provisions for health information. This combination requires specialist management liability protection.',
  },

  {
    slug: 'technology-company-directors',
    name: 'Technology Company Directors',
    icon: '💻',
    description: 'Directors of NZ tech companies and AI startups face emerging personal liability from Privacy Act data breaches, AI governance failures, and FMA regulation of fintech operations — and often without adequate D&O protection.',
    longDesc: `Directors of New Zealand technology companies occupy a position at the intersection of rapid commercial growth and emerging regulatory liability. The sector is characterised by fast-moving governance challenges that are outpacing the awareness of many boards: the Privacy Act 2020's application to data-heavy business models, the FMA's increasing oversight of fintech operations, and the emerging global framework for AI governance that is beginning to shape director accountability in ways that few technology company boards have fully addressed.

Technology companies in New Zealand range from early-stage SaaS startups backed by venture or angel capital, to established scale-ups processing personal data for thousands of customers, to regulated fintech operations subject to FMCA licensing, to AI companies deploying systems that make consequential decisions. Each of these business models carries a distinct D&O liability profile.

The Privacy Act 2020 is the most immediate regulatory framework for technology company directors. Software companies, SaaS platforms, and data-driven businesses collect and process personal information at scale. The mandatory breach notification obligations under the Privacy Act — requiring notification to the Privacy Commissioner and affected individuals when a breach is likely to cause serious harm — apply to any breach, not just those caused by external attacks. A misconfigured database, an accidental data exposure, or a third-party vendor breach can all trigger the notification obligation.

Under the Companies Act 1993 sections 131 and 137, directors have duties of good faith and reasonable care, diligence, and skill. The application of these duties to cyber and data governance has been evolving in both Australia and New Zealand following the ASIC v RI Advice case in Australia, which established that a financial licensee could be found liable for inadequate cyber governance. The FMA has signalled it is monitoring this space closely, and NZ liquidators have begun to include data governance failures in their post-insolvency director duty assessments.

AI governance is a rapidly emerging liability frontier. The GCSB has issued guidance on the risks of AI adoption by New Zealand organisations. Global AI governance frameworks — the EU AI Act, the G7 Hiroshima process, ASIC's AI guidance — are beginning to influence the expectations regulators place on boards that deploy AI systems in consequential contexts. Directors who approve the use of AI systems for credit decisions, hiring, content moderation, or customer service without adequate governance frameworks are increasingly exposed to regulatory and civil liability if those systems cause harm.

Fintech directors face the additional layer of FMA licensing and FMCA obligations. The FMA's enforcement approach — confirmed by the CBL case — includes personal accountability for officers and key personnel, not just institutional sanctions.

Venture-backed and high-growth technology companies face investor dispute risk as a specific liability category. SAFE note holders, convertible note investors, and shareholders who believe they were misled about the company's regulatory status, financial position, or product capabilities can bring claims against individual directors. The information asymmetry inherent in early-stage investment — and the tendency of founders to project optimism — creates disclosure liability that D&O cover needs to address.`,
    risks: [
      'Privacy Act 2020 director liability — mandatory breach notification, board cyber governance obligations, and OPC investigation following data breach incidents',
      'AI governance liability — directors who approve AI deployment without adequate governance frameworks face emerging regulatory and civil liability',
      'FMA regulation of fintech operations — FMCA licensing obligations, capital raising disclosure requirements, and the CBL precedent for personal officer liability',
      'Investor disputes — SAFE note, convertible note, and shareholder claims alleging misleading financial or product representations',
      'Cyber incident governance — Companies Act sections 131/137 are increasingly applied to director oversight of cyber security frameworks',
      'Third-party data processor liability — technology companies acting as processors of client data face downstream liability when security failures expose client customer data',
    ],
    claimExamples: [
      {
        title: 'Privacy Commissioner investigation following SaaS data breach',
        situation: 'A Wellington SaaS company experienced a data breach when a misconfigured API endpoint exposed customer personal information to unauthenticated access for a period of several weeks before discovery. The Privacy Commissioner commenced an investigation focused on the board\'s oversight of data security governance. Two directors were required to provide personal evidence of their involvement in data protection decision-making.',
        outcome: 'The management liability policy covered NZ$88,000 in legal representation during the OPC investigation and NZ$35,000 in expert evidence costs. The investigation resulted in a compliance programme requiring enhanced board-level reporting on data governance. Without insurance, the directors would have faced the legal costs personally while also managing the business impact of the investigation.',
        lesson: 'Technology company directors are personally accountable for the organisation\'s data governance framework — not just the technical team. Board-level reporting on data security controls, breach incident management, and Privacy Act compliance should be a standing agenda item.',
      },
      {
        title: 'Investor claim against AI startup directors for misleading representation',
        situation: 'A group of angel investors in an Auckland AI company made a claim against the company\'s two founder-directors, alleging that the directors had made materially misleading representations about the company\'s compliance with Privacy Act obligations and the performance of its AI system during the fundraising round. The investors sought rescission of their investment and damages. The claim was lodged 18 months after investment.',
        outcome: 'The management liability policy covered NZ$120,000 in legal defence costs. The claim was ultimately resolved through mediation with a partial return of investment. The directors\' defence was substantially assisted by the documentation of the investor presentations — which had been carefully prepared and retained.',
        lesson: 'Founders and directors of technology companies making representations to investors about product capabilities, regulatory compliance, and financial position carry disclosure liability. Careful documentation of investor materials and presentations is critical. D&O cover provides financial protection when investor disputes escalate to formal proceedings.',
      },
    ],
    coverNeeds: [
      'D&O cover with specific privacy liability and data breach coverage — the primary regulatory risk for technology company directors',
      'Investor dispute coverage — SAFE note and convertible note claims are a common claim type for venture-backed technology companies',
      'Employment practices liability — technology companies have competitive labour markets with high turnover and frequent restructuring',
      'FMA investigation defence if operating in fintech or providing financial services — CBL precedent confirms personal officer liability',
      'Run-off cover when directors leave — investor and regulatory claims often follow company events by months or years',
    ],
    checklistItems: [
      'Does the board receive regular reporting on Privacy Act compliance, including data security controls and breach incident management?',
      'Are all investor presentations, financial projections, and product capability representations documented and retained?',
      'Is there a documented AI governance framework covering the company\'s use and deployment of AI systems?',
      'If the company is FMA-licensed or raises money from the public, are FMCA continuous disclosure obligations understood at board level?',
      'Does the company\'s D&O policy extend to officers and founders, not just formal directors?',
      'Is run-off cover arranged when any director or founder departs?',
      'Are employment agreements in place for all staff with documented equity, IP assignment, and confidentiality provisions?',
    ],
    pricingGuide: 'D&O and management liability insurance for technology company directors typically ranges from NZ$2,000 to NZ$8,000 per year. Early-stage startups with modest revenue can access basic D&O cover from NZ$1,500/year. Scale-ups processing significant personal data or operating in regulated fintech sectors should budget NZ$4,000–$8,000+ for a comprehensive management liability programme including privacy liability. Specialist technology sector brokers are recommended.',
    metaTitle: 'D&O Insurance for Technology Company Directors NZ | AI & Fintech Cover',
    metaDesc: 'D&O insurance for NZ tech company directors and founders. Covers Privacy Act liability, AI governance, FMA regulation, and investor disputes. Broker referral.',
    h1: 'D&O Insurance for Technology Company Directors',
    intro: 'Directors of New Zealand technology companies face governance challenges that are evolving faster than most boards\' awareness: Privacy Act data breach liability, AI governance obligations, FMA fintech regulation, and investor disputes are reshaping the personal liability profile for anyone serving on a tech company board.',
  },
]

export function getDirectorTypeBySlug(slug: string): DirectorType | undefined {
  return directorTypes.find((d) => d.slug === slug)
}
