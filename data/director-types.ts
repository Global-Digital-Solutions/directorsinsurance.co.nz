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
    longDesc: `Serving on a charity board or as a trustee is one of the most meaningful governance roles available — and one of the most misunderstood from a liability perspective. The persistent myth is that volunteer trustees are protected from personal liability by the nature of their role. New Zealand law is clear: they are not.

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
    longDesc: `The personal liability exposure of chief executives and senior managers is a consistently underappreciated governance issue. Many CEOs and senior managers assume that personal liability is the domain of the board — that their role is to manage, while the directors bear governance responsibility. New Zealand law does not support this distinction.

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
]

export function getDirectorTypeBySlug(slug: string): DirectorType | undefined {
  return directorTypes.find((d) => d.slug === slug)
}
