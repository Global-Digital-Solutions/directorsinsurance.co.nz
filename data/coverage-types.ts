export interface ClaimScenario {
  situation: string
  response: string
  lesson: string
}

export interface PolicyLimitGuide {
  entityType: string
  recommendedLimit: string
  rationale: string
}

export interface CoverageFAQ {
  q: string
  a: string
}

export interface CoverageType {
  slug: string
  name: string
  icon: string
  fromPrice: string
  description: string
  longDesc: string
  whatCovers: { title: string; detail: string }[]
  whatExcludes: string[]
  keyFacts: string[]
  whoNeeds: string[]
  claimScenario: ClaimScenario
  pricingFactors: string[]
  policyLimitsGuide: PolicyLimitGuide[]
  regulatoryContext: string
  faqs: CoverageFAQ[]
}

export const coverageTypes: CoverageType[] = [
  {
    slug: 'directors-and-officers',
    name: 'Directors & Officers (D&O)',
    icon: '🛡️',
    fromPrice: 'NZ$800/year',
    description:
      'Directors and Officers (D&O) insurance protects individual directors and officers from personal financial liability arising from wrongful acts in their management capacity. It covers legal defence costs, settlements, and judgments if a director is sued by shareholders, regulators, employees, or creditors.',
    longDesc: `Directors and Officers (D&O) insurance is the cornerstone protection for anyone serving on a company board. Under the Companies Act 1993, every director — executive or non-executive, paid or volunteer — owes statutory duties to the company, its shareholders, and its creditors. Breach those duties, and your personal assets are at risk.

D&O claims are more common than many directors realise. They come from liquidators pursuing insolvent trading, shareholders alleging misrepresentation, the Financial Markets Authority investigating disclosure failures, and employees claiming personal grievances against board members. Legal defence costs alone routinely exceed $100,000 — before any settlement or judgment.

The policy structure matters as much as the premium. A well-structured D&O policy has three components working together: Side A protecting you personally when the company cannot reimburse you (especially critical in insolvency), Side B reimbursing the company when it does indemnify you, and Side C covering the entity itself for securities claims. Policies that are weak on Side A leave directors exposed precisely when they are most vulnerable.

D&O insurance is a claims-made product. It only responds to claims made during the policy period — meaning run-off cover (tail cover) is essential when you leave a board or when a company winds up. Directors who resign without arranging run-off can face claims years later with no insurance protection.`,
    whatCovers: [
      {
        title: 'Legal Defence Costs',
        detail: 'Covers the cost of engaging specialist legal counsel to defend claims — including regulatory investigations, Employment Relations Authority proceedings, and civil litigation. Defence costs can reach hundreds of thousands even for unsuccessful claims.',
      },
      {
        title: 'Settlements and Judgments',
        detail: 'Pays settlements reached with claimants and court-ordered judgments against directors, up to the policy limit. This includes compensation for financial losses suffered by shareholders, creditors, and other parties.',
      },
      {
        title: 'Regulatory Investigation Costs',
        detail: 'Covers the cost of responding to investigations by the Financial Markets Authority (FMA), the Commerce Commission, the Companies Office, WorkSafe NZ, and other regulators — even before formal proceedings are commenced.',
      },
      {
        title: 'Side A — Personal Protection',
        detail: 'Protects individual directors directly when the company is unable or unwilling to indemnify them. This is the most important component — it responds in insolvency, where directors are most at risk but the company cannot fund their defence.',
      },
      {
        title: 'Side B — Company Reimbursement',
        detail: 'Reimburses the company when it indemnifies a director or officer for a covered claim under its constitution. Most companies include director indemnification provisions — Side B covers those payments.',
      },
      {
        title: 'Side C — Entity Securities Cover',
        detail: 'Covers the company itself for securities claims alleging misleading or deceptive conduct in capital raising or continuous disclosure. Most relevant for listed companies and those conducting significant capital raises.',
      },
    ],
    whatExcludes: [
      'Deliberate fraudulent or dishonest acts (once proven, not merely alleged)',
      'Claims arising from personal gain to which the director was not entitled',
      'Criminal fines and penalties (legal defence costs are generally covered)',
      'Claims known to the director before the policy inception (prior known circumstances)',
      'Bodily injury or property damage (covered by other liability policies)',
      'Claims between co-directors where exclusions may apply',
      'Environmental liability (unless specifically endorsed)',
    ],
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
    claimScenario: {
      situation: 'An Auckland technology company director continued operating the business for seven months after it became technically insolvent. When the company was eventually liquidated, the liquidator pursued the director personally under the Companies Act 1993 for reckless trading, seeking NZ$950,000 in losses suffered by creditors. The director had no personal funds to fund a defence.',
      response: 'The director\'s D&O policy paid NZ$185,000 in legal defence costs over 18 months of litigation and contributed NZ$280,000 toward the settlement reached with the liquidator. The insurer also appointed specialist insolvency litigation lawyers from the outset, significantly strengthening the defence position.',
      lesson: 'Insolvent trading claims are among the most common D&O claims. Directors should seek independent legal advice as soon as solvency concerns arise — and must have D&O cover in place before those concerns develop.',
    },
    pricingFactors: [
      'Company annual revenue — the primary rating driver for most insurers',
      'Industry sector — financial services, construction, and healthcare attract higher premiums',
      'Whether the company is publicly listed (NZX) or privately held',
      'Number of directors and their experience and qualifications',
      'Claims history — prior D&O claims increase premiums significantly',
      'Policy limit selected — higher limits cost proportionately more',
      'Policy deductible/excess — higher deductibles reduce premiums',
      'Corporate governance quality — documented board processes can attract discounts',
    ],
    policyLimitsGuide: [
      { entityType: 'Sole-director SME (revenue under $2M)', recommendedLimit: 'NZ$1M – $2M', rationale: 'Sufficient for most creditor and shareholder claims at this scale' },
      { entityType: 'SME with 2–5 directors ($2M–$10M revenue)', recommendedLimit: 'NZ$2M – $5M', rationale: 'Multiple directors increases aggregate exposure; employment claims more likely' },
      { entityType: 'Mid-market private company ($10M–$50M)', recommendedLimit: 'NZ$5M – $10M', rationale: 'Greater creditor exposure; regulatory scrutiny more likely at this scale' },
      { entityType: 'NZX-listed company', recommendedLimit: 'NZ$20M – $50M+', rationale: 'Securities class actions and FMA proceedings can generate very large claims' },
      { entityType: 'Charitable trust or incorporated society', recommendedLimit: 'NZ$1M – $3M', rationale: 'Scaled to typical charitable asset values and employment exposure' },
    ],
    regulatoryContext: `Under the Companies Act 1993, directors have statutory duties of care, skill, and diligence; to act in good faith; to avoid reckless or insolvent trading; and to avoid conflicts of interest. The Financial Markets Conduct Act 2013 imposes additional obligations on directors of issuers and regulated entities. Breach of these obligations can result in personal civil liability and, in serious cases, criminal prosecution. The Companies Office and the Serious Fraud Office both have powers to investigate and prosecute directors.`,
    faqs: [
      {
        q: 'Does D&O insurance cover personal liability for company debts?',
        a: 'D&O insurance covers claims alleging breaches of director duties — including claims by liquidators alleging insolvent or reckless trading. It does not cover personal guarantees you have given for company debts, as these are contractual obligations not covered by D&O policies.',
      },
      {
        q: 'Am I covered if I am a director and shareholder?',
        a: 'Yes, D&O insurance covers you in your capacity as a director — regardless of whether you also hold shares. Shareholder-on-director claims (e.g., minority oppression claims against director-shareholders) are typically covered, though the specifics depend on the policy wording.',
      },
      {
        q: 'What happens to my D&O cover if the company becomes insolvent?',
        a: 'This is where Side A cover is critical. If the company is insolvent and cannot reimburse you, Side A of the D&O policy responds directly to fund your defence. Policies with strong Side A provisions — including DIC (Difference-in-Conditions) Side A — provide the most robust protection in insolvency scenarios.',
      },
      {
        q: 'Do I need D&O insurance if I am a non-executive director?',
        a: 'Absolutely. Non-executive directors face the same legal duties and potential personal liability as executive directors under the Companies Act 1993. Many NEDs check the company\'s policy but fail to verify its adequacy — or fail to arrange run-off cover when they leave.',
      },
      {
        q: 'How long does D&O insurance cover last after I leave a board?',
        a: 'Without specific run-off cover, your protection ends when the current policy is not renewed. Run-off (tail) cover extends protection for 3–7 years after you leave, covering claims made during the run-off period for acts committed during your tenure. Run-off is essential for every director.',
      },
    ],
  },
  {
    slug: 'management-liability',
    name: 'Management Liability',
    icon: '⚖️',
    fromPrice: 'NZ$1,200/year',
    description:
      'Management liability insurance is a broader package that bundles D&O cover with employment practices liability (EPL), crime cover, and statutory liability into a single policy. It protects the company as an entity and its management team from a wide range of managerial liability risks.',
    longDesc: `Management liability (ML) insurance is the most practical choice for the majority of New Zealand companies. Where standalone D&O insurance covers only director liability claims, a management liability package combines four essential covers that address the real and frequent claim types that companies face: director liability, employment disputes, fraud and theft, and regulatory penalties.

The employment practices liability (EPL) component alone makes ML packages essential for any company with employees. Personal grievance claims — alleging unjustified dismissal, constructive dismissal, discrimination, or harassment — are among the most common claims faced by New Zealand businesses. These claims frequently name individual directors personally, particularly in smaller companies where the line between board decisions and operational management is blurred.

Crime cover addresses an often-overlooked risk: employee fraud and theft. Research consistently shows that businesses are most vulnerable to fraud from trusted insiders. A management liability policy's crime component covers the company's direct losses from employee dishonesty, computer fraud, and forgery — losses that can be significant in companies that handle client funds or operate with limited financial controls.

The statutory liability component covers fines and legal defence costs arising from unintentional breaches of New Zealand legislation — including the Companies Act 1993, the Health and Safety at Work Act 2015, and the Financial Markets Conduct Act 2013. WorkSafe prosecutions of individual directors are increasing in frequency, and the legal costs of defending a five-day Health and Safety hearing can exceed $150,000.

For most NZ private companies with employees, a management liability package represents considerably better value than purchasing D&O, EPL, and statutory liability as separate standalone policies.`,
    whatCovers: [
      {
        title: 'Directors & Officers Liability (D&O)',
        detail: 'The D&O component of the package covers directors and officers personally for claims alleging wrongful acts in their management capacity — including shareholder claims, creditor claims, and regulatory proceedings.',
      },
      {
        title: 'Employment Practices Liability (EPL)',
        detail: 'Covers the company and individual directors for claims arising from employment matters: unjustified dismissal, constructive dismissal, sexual harassment, discrimination on any ground (including disability, race, gender, age), bullying, and breach of employment agreement.',
      },
      {
        title: 'Crime Cover',
        detail: 'Covers the company for direct financial losses from employee dishonesty, theft, computer fraud, forgery, and social engineering. Some policies extend to vendor and third-party fraud. Limits typically range from NZ$100,000 to NZ$1M.',
      },
      {
        title: 'Statutory Liability',
        detail: 'Covers directors, officers, and the company for fines and legal defence costs arising from unintentional breaches of NZ legislation — including the HSWA 2015, Companies Act, FMCA, and other regulated areas.',
      },
      {
        title: 'Fiduciary Liability (in some packages)',
        detail: 'Available as an extension, covering directors and trustees for claims arising from breaches of fiduciary duty in managing employee benefit plans, pension funds, or other trust arrangements.',
      },
    ],
    whatExcludes: [
      'Deliberate fraudulent or criminal acts by any insured person',
      'Claims arising from personal profit or advantage not sanctioned by the company',
      'Bodily injury or property damage (covered under public liability or EL policies)',
      'Prior known circumstances not disclosed at policy inception',
      'Contractual liability assumed by agreement (unless the liability would have existed in the absence of the contract)',
      'PAYE, GST, and other tax obligations (statutory liability typically excludes tax debts)',
    ],
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
    claimScenario: {
      situation: 'A Christchurch professional services firm with 45 staff underwent a restructuring that resulted in four redundancies. Three employees filed personal grievance claims alleging unjustified dismissal; one claimed constructive dismissal and workplace bullying. All four claims named two company directors personally as well as the company entity. The combined claims sought NZ$380,000 in compensation.',
      response: 'The firm\'s management liability policy (EPL component) covered NZ$95,000 in legal defence costs across the Employment Relations Authority and Employment Court proceedings. Three claims were settled with contributions totalling NZ$140,000 from the policy. The fourth claim was successfully defended at the Employment Relations Authority.',
      lesson: 'Employment claims are the most frequent trigger for management liability policies. They routinely name directors personally, and even successfully defended claims generate significant legal costs. Any company with employees should carry EPL as a minimum.',
    },
    pricingFactors: [
      'Number of employees — EPL risk scales directly with workforce size',
      'Industry sector — employment-intensive sectors attract higher EPL premiums',
      'Annual payroll — a key rating factor for EPL components',
      'Prior employment claims history — a key adverse rating factor',
      'Quality of HR processes and employment documentation',
      'Company revenue — drives D&O component pricing',
      'Crime limit selected — higher crime cover increases premium proportionately',
    ],
    policyLimitsGuide: [
      { entityType: 'SME (under 20 employees)', recommendedLimit: 'NZ$2M – $5M aggregate', rationale: 'Covers combined EPL, D&O, and statutory liability across the policy period' },
      { entityType: 'Medium company (20–100 employees)', recommendedLimit: 'NZ$5M – $10M aggregate', rationale: 'Higher employment claims frequency; greater regulatory exposure' },
      { entityType: 'Larger private company (100+ employees)', recommendedLimit: 'NZ$10M+', rationale: 'Scale of employment exposure and regulatory proceedings justifies higher limits' },
    ],
    regulatoryContext: `The Employment Relations Act 2000 governs employment relationships and gives rise to personal grievance claims. The Human Rights Act 1993 prohibits discrimination in employment. The Health and Safety at Work Act 2015 creates officer due diligence obligations. The Companies Act 1993 and the Financial Markets Conduct Act 2013 impose statutory duties on directors and officers. Management liability policies address the intersection of these legal frameworks.`,
    faqs: [
      {
        q: 'Is management liability the same as D&O insurance?',
        a: 'No — D&O insurance covers only director and officer personal liability. Management liability is a package that includes D&O cover plus employment practices liability, crime cover, and statutory liability. For most companies with employees, management liability provides significantly broader protection.',
      },
      {
        q: 'Does management liability cover personal grievance claims?',
        a: 'Yes. The employment practices liability (EPL) component covers personal grievance claims, including unjustified dismissal, constructive dismissal, discrimination, and harassment claims. EPL cover includes both the company\'s and individual directors\' defence costs and any settlements or awards.',
      },
      {
        q: 'What is the crime component of a management liability policy?',
        a: 'The crime component covers the company for direct financial losses caused by employee fraud, theft, computer crime (including business email compromise), and forgery. It does not cover the costs of investigating a crime — unless a specific crime investigation extension is added.',
      },
      {
        q: 'Should I buy standalone D&O or a management liability package?',
        a: 'For sole-director companies with no employees, standalone D&O may be sufficient and more cost-effective. For any company with employees, a management liability package is almost always better value — the EPL and statutory liability components address real and frequent claim scenarios that pure D&O does not cover.',
      },
    ],
  },
  {
    slug: 'professional-indemnity',
    name: 'Professional Indemnity',
    icon: '📋',
    fromPrice: 'NZ$600/year',
    description:
      'Professional indemnity (PI) insurance covers directors and companies against claims arising from professional advice, errors, or omissions that cause a third party financial loss. For directors who provide professional services, PI insurance complements D&O cover by addressing the professional services dimension of their liability.',
    longDesc: `Professional indemnity (PI) insurance addresses a different dimension of director liability from D&O cover. While D&O protects directors in their governance and management capacity, professional indemnity protects them — and their company — from claims that the professional services they provided were negligent, inaccurate, or fell below the expected standard of care.

For directors who are also professional practitioners — lawyers, accountants, engineers, architects, IT consultants, financial advisers — PI insurance is essential alongside D&O cover. These professionals owe a duty of care to their clients that goes beyond general corporate governance. When a client suffers financial loss because they acted on advice that proved incorrect or incomplete, the consequences can be severe — and the duty of care applies to the individual as well as the entity.

The claims-made nature of PI policies makes continuity of cover critically important. A claim must be notified during the policy period to trigger cover. This means that professional practitioners should not allow PI cover to lapse, even during periods when they are not actively practicing — the limitation period for professional negligence claims can extend up to six years from the date the client discovered (or should have discovered) the loss.

The intersection of D&O and PI coverage matters for directors of professional services firms. A claim alleging that the firm provided negligent investment advice, for example, might trigger PI coverage for the firm and D&O coverage for the individual directors who were involved in the governance decision to provide that advice. Having both covers — and ensuring they dovetail without gaps — is the work of a specialist broker.

For companies that provide software, technology platforms, or digital services, PI coverage addressing technology errors and omissions (tech E&O) has become as important as traditional professional indemnity. A software failure that causes a client's system to go down, or a data error that leads to financial loss, can generate significant PI claims.`,
    whatCovers: [
      {
        title: 'Negligent Advice or Services',
        detail: 'Covers claims that professional advice, recommendations, or services provided were negligent, inaccurate, or fell below the expected standard of care, resulting in financial loss to the client.',
      },
      {
        title: 'Errors and Omissions',
        detail: 'Covers claims arising from mistakes in professional work — including clerical errors that cause financial loss, missed deadlines with financial consequences, and failures to advise on material matters.',
      },
      {
        title: 'Breach of Duty',
        detail: 'Covers claims alleging breach of professional duty, including the duty to act in the client\'s best interests, duty of confidentiality, and duty to maintain professional competence.',
      },
      {
        title: 'Defamation (in some policies)',
        detail: 'Some PI policies extend to cover defamation claims arising in the course of professional activities — for example, an accountant who publishes an audit report that a third party claims is defamatory.',
      },
      {
        title: 'Intellectual Property Infringement',
        detail: 'Extended PI policies may cover claims alleging unintentional infringement of third-party intellectual property rights in the course of providing professional services.',
      },
      {
        title: 'Technology Errors & Omissions',
        detail: 'For technology and software companies, PI/tech E&O covers claims arising from failures, bugs, or errors in software, platforms, or digital services that cause client financial loss.',
      },
    ],
    whatExcludes: [
      'Deliberate or dishonest acts — PI only covers unintentional errors and omissions',
      'Contractual liability beyond the duty of care that would exist in the absence of a contract',
      'Property damage or bodily injury arising from professional services',
      'Claims arising from known circumstances not disclosed at policy inception',
      'Insolvency of the insured during the policy period (in some policies)',
      'Claims by related entities or associated parties unless specifically endorsed',
      'Regulatory fines and penalties (statutory liability covers this separately)',
    ],
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
    claimScenario: {
      situation: 'A Wellington accounting firm director provided tax structuring advice to a client in connection with a property development. The advice proved incorrect — the structure did not achieve the intended tax outcome, and the client received an unexpected tax assessment and penalties totalling NZ$320,000. The client sued the firm and the individual director for professional negligence.',
      response: 'The firm\'s professional indemnity policy covered NZ$75,000 in legal defence costs and a NZ$195,000 contribution to the settlement reached with the client. The policy limit was NZ$1M, providing adequate headroom. The insurer also arranged specialist tax litigation counsel from the outset.',
      lesson: 'Professional negligence claims in accounting, law, and advisory services are common and can generate significant losses. PI insurance should be maintained with limits that reflect the financial scale of advice being given.',
    },
    pricingFactors: [
      'Profession and nature of services provided — high-risk professions (financial advice, law, engineering) attract higher premiums',
      'Annual fee or revenue — the scale of professional activity is the primary rating driver',
      'Years in practice and claims history',
      'Policy limit and retroactive date selected',
      'Client profile — advice to large institutional clients attracts higher premiums',
      'Quality of professional risk management processes and documentation',
    ],
    policyLimitsGuide: [
      { entityType: 'Small professional firm (revenue under $500K)', recommendedLimit: 'NZ$500K – $1M', rationale: 'Reflects scale of advice given and typical client financial exposure' },
      { entityType: 'Mid-size professional firm ($500K–$5M revenue)', recommendedLimit: 'NZ$1M – $5M', rationale: 'Higher client financial exposure; regulatory requirements may specify minimum limits' },
      { entityType: 'Large professional firm or specialist practice', recommendedLimit: 'NZ$5M+', rationale: 'Single engagement losses can be very large; regulator or contract minimums may apply' },
      { entityType: 'Financial advice provider (FAP)', recommendedLimit: 'As required by FMA', rationale: 'The FMA specifies minimum PI limits for licensed financial advice providers' },
    ],
    regulatoryContext: `Financial advice providers licensed under the Financial Markets Conduct Act 2013 must maintain professional indemnity insurance as part of their licensing conditions set by the Financial Markets Authority. The FMA specifies minimum cover requirements. Architects, engineers, lawyers, and accountants may also face PI requirements under their professional body regulations or specific contract terms.`,
    faqs: [
      {
        q: 'Do I need both D&O and professional indemnity insurance?',
        a: 'For directors of professional services firms — law firms, accounting firms, consulting companies, advisory businesses — yes. D&O covers your governance liability as a director; PI covers your professional services liability as a practitioner. The two policies address different types of claims and should work together.',
      },
      {
        q: 'What is a retroactive date in a PI policy?',
        a: 'The retroactive date is the date from which cover applies. Claims arising from acts before the retroactive date are not covered. When purchasing PI for the first time, always negotiate the earliest possible retroactive date. When switching insurers, ensure the new policy picks up the retroactive date from your previous policy.',
      },
      {
        q: 'Does PI insurance cover regulatory proceedings?',
        a: 'Standard PI policies focus on civil claims from clients. Regulatory investigation costs — such as an FMA investigation into a financial adviser\'s conduct — are more appropriately covered under a statutory liability or D&O policy. Some PI policies include regulatory defence extensions, but this should be confirmed.',
      },
      {
        q: 'How much professional indemnity do I need as a financial adviser?',
        a: 'The Financial Markets Authority sets minimum PI requirements for licensed Financial Advice Providers. The specific minimum depends on your licence scope and the nature of advice provided. Your broker can advise on the FMA\'s current requirements and whether additional cover above the minimum is appropriate.',
      },
    ],
  },
  {
    slug: 'statutory-liability',
    name: 'Statutory Liability',
    icon: '📜',
    fromPrice: 'NZ$400/year',
    description:
      'Statutory liability insurance covers directors and officers against fines and legal costs arising from unintentional breaches of New Zealand legislation. This includes the Companies Act 1993, the Health and Safety at Work Act 2015, the Financial Markets Conduct Act 2013, and the Resource Management Act.',
    longDesc: `Statutory liability insurance is among the most misunderstood — and most undervalued — components of a director insurance programme. Most directors focus on civil liability (D&O claims from shareholders and creditors) but underestimate their exposure to regulatory prosecution under New Zealand's extensive and increasingly enforced regulatory framework.

New Zealand has strict statutory obligations imposed on directors and officers under a wide range of legislation. The Health and Safety at Work Act 2015 alone creates personal due diligence obligations for officers of every business — with fines of up to NZ$600,000 and imprisonment of up to five years for the most serious breaches. WorkSafe NZ has significantly increased its prosecution of individual officers in recent years, and the number of successful HSWA prosecutions naming directors personally has grown substantially.

Beyond health and safety, directors face personal exposure under the Financial Markets Conduct Act 2013 (disclosure obligations), the Companies Act 1993 (director duties and reporting obligations), the Resource Management Act 1991 (environmental compliance), the Privacy Act 2020 (data governance obligations for officers), and numerous sector-specific statutes.

The critical value of statutory liability insurance is in funding legal defence costs. Criminal penalties — fines, reparation orders, and imprisonment — are generally not insurable (and statutory liability insurance does not attempt to insure deliberate criminal acts). But the cost of mounting a proper legal defence against a regulatory prosecution is very much insurable, and those costs can be staggering. A five-day defended hearing before the District Court, with specialist health and safety lawyers, expert witnesses, and counsel, can easily cost NZ$150,000–$200,000.

Statutory liability is almost always more cost-effective as part of a management liability package than as a standalone policy. For companies with meaningful health and safety, employment, or regulatory exposure, it is not optional.`,
    whatCovers: [
      {
        title: 'Health & Safety Prosecution Defence (HSWA 2015)',
        detail: 'Covers legal defence costs for prosecutions by WorkSafe NZ under the Health and Safety at Work Act 2015. Directors and officers prosecuted for failing to exercise due diligence can face individual defence costs exceeding NZ$150,000 for a defended hearing.',
      },
      {
        title: 'Companies Act Proceedings',
        detail: 'Covers defence costs for proceedings alleging breaches of director duties, reporting obligations, and other requirements under the Companies Act 1993 — including Companies Office investigations and court-ordered proceedings.',
      },
      {
        title: 'Financial Markets Conduct Act Defence',
        detail: 'Covers legal costs for FMA investigations and enforcement actions under the FMCA — including investigations into continuous disclosure, misleading conduct in financial markets, and licensing breaches.',
      },
      {
        title: 'Environmental Prosecution Defence (RMA)',
        detail: 'Covers defence costs for Resource Management Act prosecutions — relevant for directors of companies involved in development, construction, manufacturing, and activities with environmental impact.',
      },
      {
        title: 'Fines Where Legally Insurable',
        detail: 'Covers regulatory fines where these are legally insurable under NZ law. Criminal penalties and fines imposed for deliberate breaches are not insurable, but civil penalties and fines for unintentional regulatory breaches may be covered where not prohibited by statute.',
      },
      {
        title: 'Reparation Orders',
        detail: 'Covers court-ordered reparation payments arising from regulatory proceedings — for example, reparation to a workplace injury victim ordered as part of a WorkSafe prosecution.',
      },
    ],
    whatExcludes: [
      'Deliberate, wilful, or criminal breaches of legislation',
      'Fines and penalties that are not legally insurable under NZ law',
      'Taxes, duties, and penalties for non-payment of taxes (GST, PAYE, income tax)',
      'Fines for environmental pollution where deliberate discharge is alleged',
      'Costs of compliance — bringing systems into regulatory compliance is not covered',
      'Claims arising from prior known circumstances not disclosed at inception',
    ],
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
    claimScenario: {
      situation: 'WorkSafe NZ prosecuted the director of a Palmerston North manufacturing company following a serious workplace injury in which a worker\'s hand was caught in unguarded machinery. The prosecution alleged the director failed to exercise due diligence as an officer under the HSWA 2015 — specifically, that the director had not ensured adequate machine guarding processes were in place. A five-day defended hearing was required, with expert witnesses on both sides.',
      response: 'The company\'s management liability policy (statutory liability component) covered NZ$155,000 in legal defence costs, including specialist health and safety counsel fees and expert H&S consultant costs. The director was acquitted after successfully demonstrating they had exercised reasonable due diligence in establishing the company\'s safety systems.',
      lesson: 'Even successfully defended WorkSafe prosecutions generate enormous legal costs. Without insurance, the director would have faced personal financial ruin defending a claim where they were ultimately proven innocent.',
    },
    pricingFactors: [
      'Industry sector — high-risk sectors (construction, manufacturing, healthcare) attract higher premiums',
      'Number of employees and nature of work performed',
      'Whether the company operates in regulated industries under the FMCA',
      'Prior regulatory proceedings or WorkSafe notices',
      'Quality of documented health and safety management systems',
      'Revenue and company size',
    ],
    policyLimitsGuide: [
      { entityType: 'Low-risk office-based company', recommendedLimit: 'NZ$500K – $1M', rationale: 'Lower HSWA exposure; regulatory prosecution risk is modest' },
      { entityType: 'Construction, manufacturing, or site-based company', recommendedLimit: 'NZ$2M – $5M', rationale: 'High HSWA exposure; multi-party prosecutions and major defended hearings are possible' },
      { entityType: 'Regulated financial services entity', recommendedLimit: 'NZ$2M – $5M', rationale: 'FMA investigations and enforcement can be protracted and expensive' },
    ],
    regulatoryContext: `The Health and Safety at Work Act 2015 imposes personal due diligence obligations on all "officers" of businesses — including directors, partners, and senior managers. WorkSafe NZ actively prosecutes individual officers for HSWA breaches. The Financial Markets Conduct Act 2013 imposes strict obligations on directors of regulated entities. The Companies Act 1993, the Resource Management Act 1991, and the Privacy Act 2020 each create further director-level obligations with personal liability consequences.`,
    faqs: [
      {
        q: 'Does statutory liability insurance cover WorkSafe fines?',
        a: 'Yes — to the extent fines are legally insurable under NZ law. Many regulatory fines for unintentional breaches can be covered. However, criminal penalties imposed for deliberate acts cannot be insured. Your broker can advise on which specific fines and penalties are insurable for your industry and risk profile.',
      },
      {
        q: 'Can statutory liability insurance cover imprisonment costs?',
        a: 'No — insurance cannot cover imprisonment itself. However, statutory liability insurance covers the substantial legal defence costs incurred in defending criminal prosecutions where imprisonment is a potential penalty. A well-funded defence is often the difference between conviction and acquittal.',
      },
      {
        q: 'Is statutory liability always included in a management liability package?',
        a: 'Most management liability packages include statutory liability as a standard component, but the scope and limits vary. Always check that the package includes statutory liability and review the limit carefully — particularly if your company has significant health and safety or regulatory exposure.',
      },
      {
        q: 'Does statutory liability cover tax penalties?',
        a: 'No. PAYE, GST, income tax obligations, and associated penalties are specifically excluded from statutory liability policies. Statutory liability is designed for regulatory prosecutions — not tax compliance obligations.',
      },
    ],
  },
]

export function getCoverageBySlug(slug: string): CoverageType | undefined {
  return coverageTypes.find((c) => c.slug === slug)
}
