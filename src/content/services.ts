export type Faq = { q: string; a: string };

export type Service = {
  slug: string;
  name: string; // short label for navigation and cards
  card: string; // one-line card summary
  seoTitle: string; // ≤ 46 chars (brand suffix is added)
  metaDescription: string;
  primaryKeyword: string;
  h1: string;
  intro: string;
  shortAnswer: string;
  forWho: string[];
  roles: { role: string; level: string }[];
  sections: { heading: string; body: string[] }[];
  diversity: string;
  cities: string[]; // location slugs
  faqs: Faq[];
  related: string[]; // other service slugs
};

export const services: Service[] = [
  {
    slug: "finance-accounting-recruitment",
    name: "Finance & Accounting",
    card: "Chartered accountants, controllers, FP&A, tax and treasury talent for GCCs, NBFCs and growth companies.",
    seoTitle: "Finance & Accounting Recruitment Agency",
    metaDescription:
      "Finance and accounting recruitment agency in Bengaluru. We hire CAs, controllers, FP&A, tax and treasury talent for GCCs, NBFCs and startups. Talk to us.",
    primaryKeyword: "finance and accounting recruitment agency",
    h1: "Finance and accounting recruitment for GCCs, NBFCs and growth companies",
    intro:
      "Finance hiring fails quietly. A controller who can't close the books on time, or an FP&A lead who can't tell the story behind the numbers, costs you a quarter before anyone notices. We recruit finance people who have already done the job you need done.",
    shortAnswer:
      "Stellaspire is a finance and accounting recruitment agency based in Bengaluru. We hire chartered accountants, financial controllers, FP&A, tax, treasury and audit professionals, from analyst to finance head, for GCCs, NBFCs, fintechs and growth companies across India and the UAE. Most roles are filled in 7 to 30 days.",
    forWho: [
      "GCCs building record-to-report, FP&A or controllership teams in India",
      "NBFCs and fintechs that need finance leaders who understand RBI regulation",
      "Founders and CFOs scaling a finance function after a funding round",
      "Companies replacing a key finance hire without disrupting the close",
    ],
    roles: [
      { role: "Chartered Accountant (CA)", level: "Analyst to manager" },
      { role: "Financial Controller", level: "Manager to director" },
      { role: "FP&A Analyst / Manager / Head", level: "All levels" },
      { role: "Record-to-report / GL Lead", level: "Lead to manager" },
      { role: "Tax Manager (direct and indirect)", level: "Manager to head" },
      { role: "Treasury and Cash Management", level: "Manager to head" },
      { role: "Internal Audit and SOX", level: "Senior to director" },
      { role: "Finance Business Partner", level: "Manager to director" },
    ],
    sections: [
      {
        heading: "Why specialist finance recruitment matters",
        body: [
          "Generalist recruiters screen finance profiles on keywords: CA, SAP, Excel. That tells you almost nothing. Two controllers with the same title can have very different experience: one has run a month-end close for a US-listed parent with SOX controls, the other has managed statutory compliance for a domestic entity.",
          "We screen on what the role actually needs: the close calendar, ERP and consolidation tools, reporting standards (Ind AS, IFRS, US GAAP), regulators, and the stakeholders the person will face. You see fewer CVs, and the ones you see are worth interviewing.",
        ],
      },
      {
        heading: "Finance hiring for GCCs",
        body: [
          "Global capability centres are moving beyond transaction processing into FP&A, controllership, finance transformation and decision support. That shift needs people who can work with a global CFO's office, not just process invoices.",
          "We help GCCs hire finance leaders who have done this transition before, and build the teams under them. Read more on our GCC hiring page.",
        ],
      },
      {
        heading: "Finance hiring for NBFCs and fintechs",
        body: [
          "NBFC and fintech finance roles sit close to the regulator. Our clients need people who understand RBI reporting, ALM, credit cost, co-lending and collections economics. We have hired across fintech and NBFC finance and understand how these businesses make and lose money.",
        ],
      },
    ],
    diversity:
      "Finance has strong women talent at analyst and manager levels, and it thins out sharply at controller and head level. We actively bring qualified women into every senior finance shortlist, including career returners who are ready to step back in.",
    cities: ["bangalore", "mumbai", "hyderabad", "pune", "delhi-ncr", "dubai"],
    faqs: [
      {
        q: "What finance roles does Stellaspire recruit for?",
        a: "We recruit chartered accountants, financial controllers, FP&A analysts and heads, tax, treasury, internal audit, record-to-report and finance business partner roles, from analyst level to finance director.",
      },
      {
        q: "How long does it take to hire a finance professional?",
        a: "Most finance roles are filled in 7 to 30 days. Specialist or senior roles such as a financial controller for a US GCC can take longer, and we share a realistic timeline after the first briefing.",
      },
      {
        q: "Do you hire chartered accountants for GCCs?",
        a: "Yes. GCC finance hiring is one of our core areas, including CAs for record-to-report, FP&A, controllership and finance transformation teams.",
      },
      {
        q: "How much does a finance recruitment agency charge?",
        a: "Agency fees are usually a percentage of the candidate's first-year CTC and depend on seniority and how many roles you are hiring for. We agree the fee in writing before we start. See how we work for details.",
      },
      {
        q: "Do you recruit finance talent outside Bengaluru?",
        a: "Yes. We hire across Bengaluru, Mumbai, Hyderabad, Pune, Delhi NCR and Dubai, and have supported clients in the UAE, UK and USA.",
      },
      {
        q: "Do candidates pay Stellaspire anything?",
        a: "No. Employers pay our recruitment fees. Candidates never pay to be considered for a role.",
      },
    ],
    related: ["cfo-executive-search", "gcc-hiring", "analytics-data-recruitment"],
  },
  {
    slug: "cfo-executive-search",
    name: "CFO & Leadership Search",
    card: "Confidential search for CFOs, finance directors and business leaders, run by the founder.",
    seoTitle: "CFO Recruitment & Executive Search in India",
    metaDescription:
      "CFO recruitment and executive search in India. Confidential, founder-led search for CFOs, finance directors and leadership roles at GCCs and growth companies.",
    primaryKeyword: "cfo recruitment agency india",
    h1: "CFO recruitment and executive search, led by the founder",
    intro:
      "A CFO hire shapes your next fundraise, your audit and your board's confidence. It shouldn't be handed to a junior recruiter working through a database. Every Stellaspire leadership search is led personally by our founder.",
    shortAnswer:
      "Stellaspire runs confidential executive searches for CFOs, finance directors, heads of FP&A and other leadership roles in India and the UAE. We map the market, approach passive candidates directly, assess them against your board's priorities, and manage the process through to offer and joining. CFO hiring is a core specialisation.",
    forWho: [
      "Founders preparing for a fundraise, IPO readiness or a first institutional audit",
      "Boards replacing a CFO confidentially",
      "Global companies appointing an India CFO or GCC finance head",
      "Mid-size companies professionalising finance leadership",
    ],
    roles: [
      { role: "Chief Financial Officer (CFO)", level: "CXO" },
      { role: "Finance Director / VP Finance", level: "Director to VP" },
      { role: "Head of FP&A / Strategic Finance", level: "Head" },
      { role: "Financial Controller (group / India)", level: "Director" },
      { role: "GCC Finance Head / Site Leader", level: "Head to VP" },
      { role: "Chief Risk Officer / Head of Credit (NBFC)", level: "CXO to head" },
      { role: "Head of Analytics / Chief Data Officer", level: "Head to CXO" },
    ],
    sections: [
      {
        heading: "How our executive search works",
        body: [
          "We start with your board or founders, not a job description. What does success look like in 18 months: a clean audit, a Series C, a turnaround, an IPO? That defines the profile.",
          "We then map the market: who holds comparable roles, who has done this transition before, and who might be open to a conversation. Most strong CFO candidates are not looking. We approach them directly and confidentially.",
          "You receive a short, assessed shortlist with our written view on each candidate's strengths, risks and motivations. We manage references, offer negotiation and the notice period through to day one.",
        ],
      },
      {
        heading: "Retained or contingent?",
        body: [
          "For CFO and other CXO roles we recommend a retained search: a dedicated, exclusive process with staged fees. It gives you market mapping, confidentiality and a committed team. For finance director and head-level roles, a contingent or hybrid model can work well. We'll recommend the right model after the first conversation.",
        ],
      },
      {
        heading: "What we assess in a CFO",
        body: [
          "Beyond technical finance: board communication, investor and lender relationships, capital-raising track record, the ability to build a finance team, and judgement under pressure. We check each claim through structured referencing, not just a reference call.",
        ],
      },
    ],
    diversity:
      "Women hold a small share of CFO roles in India, and many qualified women are never approached for them. Every leadership shortlist we present includes qualified women candidates. This widens the pool rather than lowering the bar.",
    cities: ["bangalore", "mumbai", "delhi-ncr", "hyderabad", "pune", "dubai"],
    faqs: [
      {
        q: "How long does a CFO search take?",
        a: "A CFO search usually takes 6 to 12 weeks to reach an accepted offer, depending on the market and how specific the brief is. Notice periods for senior finance leaders in India are often 60 to 90 days on top of that.",
      },
      {
        q: "Do you run confidential searches?",
        a: "Yes. Many CFO searches are confidential because the current role-holder is still in place. We use an anonymised brief and approach candidates discreetly.",
      },
      {
        q: "What is retained executive search?",
        a: "Retained search is an exclusive engagement where the fee is paid in stages, typically at the start, at the shortlist and at hire. It suits CXO roles that need market mapping, confidentiality and a dedicated team.",
      },
      {
        q: "Can you hire a CFO for a startup?",
        a: "Yes. We hire first CFOs and finance heads for funded startups, including candidates with fundraising, investor reporting and audit-readiness experience.",
      },
      {
        q: "Do you hire leadership roles outside finance?",
        a: "Yes, mainly in analytics, data, AI and technology leadership, and business heads at fintechs and NBFCs.",
      },
    ],
    related: ["finance-accounting-recruitment", "gcc-hiring", "diversity-hiring"],
  },
  {
    slug: "gcc-hiring",
    name: "GCC Hiring",
    card: "Finance, analytics and leadership teams for global capability centres in India.",
    seoTitle: "GCC Hiring in India: Finance & Leadership",
    metaDescription:
      "GCC hiring in India for global capability centres. Stellaspire hires finance, analytics, AI and leadership teams in Bengaluru, Hyderabad and Pune.",
    primaryKeyword: "gcc hiring in india",
    h1: "GCC hiring in India: finance, analytics and leadership talent for global capability centres",
    intro:
      "Setting up or scaling a GCC is a hiring problem first. The entity, office and payroll can be arranged in weeks. Finding a site leader, a finance head and the first fifty people who will set the culture is what decides whether the centre succeeds.",
    shortAnswer:
      "Stellaspire helps global companies hire finance, analytics, AI/data and leadership teams for their global capability centres (GCCs) in India, mainly in Bengaluru, Hyderabad and Pune. We hire the first leaders, then build the teams under them, with diversity-balanced shortlists and one point of contact from first hire to full team.",
    forWho: [
      "Global companies setting up their first India GCC",
      "Existing GCCs moving from transactions to FP&A, analytics and decision support",
      "GCC leaders who need a site lead, finance head or analytics head",
      "HR teams with GCC diversity targets to meet",
    ],
    roles: [
      { role: "GCC Site Leader / Centre Head", level: "VP to MD" },
      { role: "GCC Finance Head / Controller", level: "Director to VP" },
      { role: "FP&A and Decision Support Teams", level: "Analyst to head" },
      { role: "Record-to-Report / Accounting Ops Leads", level: "Lead to director" },
      { role: "Analytics, BI and Data Engineering", level: "Analyst to head" },
      { role: "AI/ML Engineers and Data Scientists", level: "Engineer to principal" },
      { role: "Risk, Compliance and Controls", level: "Manager to head" },
      { role: "HR, TA and Operations Leaders", level: "Manager to head" },
    ],
    sections: [
      {
        heading: "What is a GCC?",
        body: [
          "A global capability centre (GCC) is an offshore unit owned by a multinational that delivers finance, technology, analytics, operations and other services to the parent company. India hosts a large and growing share of the world's GCCs, with Bengaluru, Hyderabad and Pune as the main hubs.",
        ],
      },
      {
        heading: "GCC hiring vs IT staffing vs outsourcing",
        body: [
          "IT staffing firms supply contractors who stay on their payroll. Outsourcing firms deliver a service from their own teams. GCC hiring is different: you are building your own permanent team, with your culture and your standards, on your own payroll. That calls for a recruitment partner who hires for long-term fit and understands what the parent company expects.",
        ],
      },
      {
        heading: "How we build a GCC team",
        body: [
          "We start with the leadership layer, because the first leaders will hire everyone else. Then we agree role families, levels and pay bands with you, and run them as hiring waves with a weekly pipeline report.",
          "We understand the difference between a finance professional who has worked in a shared-services model and one who has partnered a global CFO. We hire accordingly.",
        ],
      },
      {
        heading: "GCC hiring across India's hubs",
        body: [
          "Bengaluru has the deepest pool for analytics, AI and product finance. Hyderabad offers strong finance operations and technology talent with competitive costs. Pune combines engineering depth with a growing finance and analytics base. We'll help you decide where each team should sit based on the talent available.",
        ],
      },
    ],
    diversity:
      "Most GCCs have published diversity goals, and the leadership layer is where they are hardest to meet. We bring qualified women into every leadership and specialist shortlist, and use our women-returner network to widen the pool.",
    cities: ["bangalore", "hyderabad", "pune", "delhi-ncr", "mumbai"],
    faqs: [
      {
        q: "What is GCC hiring?",
        a: "GCC hiring is recruiting permanent employees for a multinational's global capability centre, the company's own offshore unit. It covers leadership, finance, technology, analytics and operations roles.",
      },
      {
        q: "Which cities are best for a GCC in India?",
        a: "Bengaluru, Hyderabad and Pune are the main GCC hubs, followed by Chennai, Delhi NCR and Mumbai. The right choice depends on the roles you need, cost targets and where the talent pool for those roles is deepest.",
      },
      {
        q: "Can Stellaspire hire a GCC site leader?",
        a: "Yes. We run leadership searches for GCC site leaders, finance heads and analytics heads, usually before building the teams beneath them.",
      },
      {
        q: "How quickly can you build a GCC team?",
        a: "Individual roles are typically filled in 7 to 30 days. A full team is delivered in planned hiring waves, and we agree the timeline once role families and levels are defined.",
      },
      {
        q: "Do you help GCCs meet diversity targets?",
        a: "Yes. Every shortlist we present for leadership and specialist roles includes qualified women candidates, and we can run dedicated diversity and returnship hiring drives.",
      },
    ],
    related: ["finance-accounting-recruitment", "analytics-data-recruitment", "cfo-executive-search"],
  },
  {
    slug: "analytics-data-recruitment",
    name: "Analytics & Data",
    card: "Data analysts, data scientists, BI and analytics leaders who turn numbers into decisions.",
    seoTitle: "Data & Analytics Recruitment Agency India",
    metaDescription:
      "Data and analytics recruitment agency in India. We hire data analysts, data scientists, BI, data engineering and analytics leaders for GCCs and growth companies.",
    primaryKeyword: "data analyst recruitment agency",
    h1: "Data and analytics recruitment for teams that make decisions with numbers",
    intro:
      "Every company now says it is data-driven. Few have the analysts and leaders to make it true. We hire analytics people who can frame the business question, not just run the query.",
    shortAnswer:
      "Stellaspire recruits data analysts, data scientists, BI developers, data engineers and analytics leaders for GCCs, fintechs, NBFCs and growth companies in India and the UAE. We test for business judgement as well as technical skill, and most roles are filled in 7 to 30 days.",
    forWho: [
      "GCCs building analytics and decision-support centres",
      "Fintechs and NBFCs hiring risk, credit and growth analytics teams",
      "Startups making their first data hires",
      "Finance teams adding FP&A analytics and BI capability",
    ],
    roles: [
      { role: "Data Analyst / Business Analyst", level: "Analyst to lead" },
      { role: "Data Scientist", level: "Analyst to principal" },
      { role: "BI Developer (Power BI, Tableau)", level: "Developer to lead" },
      { role: "Data Engineer / Analytics Engineer", level: "Engineer to lead" },
      { role: "Risk and Credit Analytics", level: "Analyst to head" },
      { role: "Marketing and Growth Analytics", level: "Analyst to head" },
      { role: "Head of Analytics / Chief Data Officer", level: "Head to CXO" },
    ],
    sections: [
      {
        heading: "Why analytics hiring goes wrong",
        body: [
          "Analytics CVs all look the same: SQL, Python, Power BI. Interviews test syntax. The analyst who gets hired can write queries but can't tell a business leader what to do next.",
          "Our screening covers both sides: the technical stack you use, and the ability to structure a business problem, choose the right metric and explain the result simply. For senior roles we look at the decisions a candidate's work has actually changed.",
        ],
      },
      {
        heading: "Analytics in finance, fintech and NBFCs",
        body: [
          "Because we also recruit in finance, we understand the analytics roles that sit closest to money: credit risk models, collections analytics, pricing, FP&A analytics and revenue intelligence. These roles need domain fluency as well as data skills.",
        ],
      },
    ],
    diversity:
      "Analytics has a healthy pipeline of women early in their careers, but far fewer at lead and head level. We make sure qualified women appear in every senior analytics shortlist.",
    cities: ["bangalore", "hyderabad", "pune", "mumbai", "delhi-ncr"],
    faqs: [
      {
        q: "What analytics roles do you hire for?",
        a: "Data analysts, business analysts, data scientists, BI developers, data and analytics engineers, risk and credit analytics, growth analytics, and heads of analytics.",
      },
      {
        q: "Do you hire data scientists in India?",
        a: "Yes. We hire data scientists from analyst to principal level for GCCs, fintechs and growth companies, mainly in Bengaluru, Hyderabad and Pune.",
      },
      {
        q: "How do you assess analytics candidates?",
        a: "We check the technical stack against your brief and assess business judgement: how candidates frame problems, choose metrics and explain results to non-technical stakeholders.",
      },
      {
        q: "Can you hire a head of analytics?",
        a: "Yes. Analytics leadership is part of our executive search practice, alongside CFO and finance leadership roles.",
      },
    ],
    related: ["ai-ml-recruitment", "gcc-hiring", "finance-accounting-recruitment"],
  },
  {
    slug: "ai-ml-recruitment",
    name: "AI & ML",
    card: "AI engineers, ML engineers, MLOps and AI product talent for companies building with AI.",
    seoTitle: "AI & ML Recruitment Agency in India",
    metaDescription:
      "AI and ML recruitment agency in India. We hire AI engineers, ML engineers, MLOps, data scientists and AI product managers for GCCs, startups and enterprises.",
    primaryKeyword: "ai ml recruitment agency india",
    h1: "AI and machine learning recruitment for teams building real products",
    intro:
      "The AI talent market is noisy. Thousands of profiles now list LLMs and GenAI. Far fewer people have shipped a model to production and kept it working. We find the second group.",
    shortAnswer:
      "Stellaspire recruits AI engineers, machine learning engineers, MLOps engineers, data scientists, IoT engineers and AI product managers for GCCs, startups and enterprises in India and abroad. We verify production experience, not just keywords, and most roles are filled in 7 to 30 days.",
    forWho: [
      "Startups making their first AI/ML hires",
      "GCCs setting up AI and data science centres of excellence",
      "Enterprises moving GenAI pilots into production",
      "Product companies hiring AI product managers",
    ],
    roles: [
      { role: "AI Engineer / GenAI Engineer", level: "Engineer to principal" },
      { role: "Machine Learning Engineer", level: "Engineer to staff" },
      { role: "MLOps / ML Platform Engineer", level: "Engineer to lead" },
      { role: "Data Scientist", level: "Analyst to principal" },
      { role: "AI Researcher", level: "Researcher to lead" },
      { role: "AI Product Manager", level: "PM to director" },
      { role: "IoT and Embedded AI Engineer", level: "Engineer to lead" },
      { role: "Head of AI / Director of ML", level: "Head to VP" },
    ],
    sections: [
      {
        heading: "How we screen AI talent",
        body: [
          "We ask what the candidate built, what data it ran on, how it was evaluated, how it was deployed and what broke. Production experience shows up in the detail. We also check fundamentals in statistics, ML theory and software engineering, so you don't hire someone who can only call an API.",
        ],
      },
      {
        heading: "Resources for AI hiring",
        body: [
          "Our job description templates for AI engineers and AI researchers are free to use, and our guide to becoming an AI engineer explains the skills the market is paying for.",
        ],
      },
    ],
    diversity:
      "Women are under-represented in AI and ML engineering, especially at senior levels. We search beyond the usual networks so that every AI shortlist includes qualified women engineers and researchers.",
    cities: ["bangalore", "hyderabad", "pune", "delhi-ncr", "mumbai"],
    faqs: [
      {
        q: "What AI roles does Stellaspire hire for?",
        a: "AI and GenAI engineers, machine learning engineers, MLOps engineers, data scientists, AI researchers, IoT engineers, AI product managers and heads of AI.",
      },
      {
        q: "How do you verify AI experience?",
        a: "We discuss real projects in depth: the data, model choice, evaluation, deployment and monitoring. This separates production experience from tutorial projects.",
      },
      {
        q: "Do you hire AI talent for international companies?",
        a: "Yes. We have supported clients in the UAE, UK and USA, and hire for GCCs of global companies in India.",
      },
      {
        q: "Is there an AI engineer job description template?",
        a: "Yes. Our free AI engineer job description template is in our blog, along with a template for AI researchers.",
      },
    ],
    related: ["analytics-data-recruitment", "gcc-hiring", "startup-hiring"],
  },
  {
    slug: "diversity-hiring",
    name: "Diversity Hiring",
    card: "Qualified women in every shortlist, returnship drives and inclusive hiring support.",
    seoTitle: "Diversity Hiring Agency in India",
    metaDescription:
      "Diversity hiring agency in India. Women-led Stellaspire puts qualified women in every shortlist and runs returnship and gender-diversity hiring drives.",
    primaryKeyword: "diversity hiring agency india",
    h1: "Diversity hiring that widens the pool without lowering the bar",
    intro:
      "Diversity targets are easy to set and hard to meet, especially in senior finance, analytics and technology roles. As a women-led firm, diversity isn't a separate service for us. It's how we run every search.",
    shortAnswer:
      "Stellaspire is a women-led diversity hiring agency in India. We include qualified women in every shortlist we present, run gender-diversity and women-returner hiring drives, and help companies remove bias from job descriptions and interviews. We focus on finance, analytics, AI and leadership roles at GCCs and growth companies.",
    forWho: [
      "GCCs and enterprises with gender-diversity goals for leadership",
      "HR and TA leaders who need diverse shortlists without slowing hiring",
      "Companies launching or scaling a returnship programme",
      "Startups that want to build diverse teams from the start",
    ],
    roles: [
      { role: "Women leaders in finance and analytics", level: "Manager to CXO" },
      { role: "Women in AI, data and technology", level: "Engineer to head" },
      { role: "Career returners (after a break)", level: "All levels" },
      { role: "Diversity hiring drives (multiple roles)", level: "Project" },
    ],
    sections: [
      {
        heading: "How our diversity hiring works",
        body: [
          "We start with the job description, because biased language and inflated requirements shrink the pool before a single CV arrives. Then we source beyond the usual networks, including our women-returner community, and assess every candidate against the same criteria.",
          "We report the diversity of every pipeline at each stage, so you can see where candidates drop out and fix it.",
        ],
      },
      {
        heading: "Women returnship hiring",
        body: [
          "Many experienced women step away for caregiving and find it hard to return. We help companies design returnship roles and connect them with returners who are ready to step back in. See our women returnship page.",
        ],
      },
      {
        heading: "Diversity hiring resources",
        body: [
          "We publish practical guides on diversity recruiting strategies, tools, metrics and DEI certifications for recruiters. They're free on our blog.",
        ],
      },
    ],
    diversity:
      "Diversity is built into everything above. It is the reason Stellaspire exists.",
    cities: ["bangalore", "hyderabad", "pune", "mumbai", "delhi-ncr", "dubai"],
    faqs: [
      {
        q: "What is diversity hiring?",
        a: "Diversity hiring is recruiting in a way that removes bias and actively includes under-represented groups, such as women in leadership, so that companies hire from the widest possible pool of qualified people.",
      },
      {
        q: "Does diversity hiring mean lowering the bar?",
        a: "No. Every candidate is assessed against the same criteria. Diversity hiring widens the pool you choose from. It doesn't change the standard.",
      },
      {
        q: "Can Stellaspire run a diversity hiring drive?",
        a: "Yes. We run gender-diversity and women-returner hiring drives for multiple roles, with pipeline reporting at every stage.",
      },
      {
        q: "Do you help women return to work after a career break?",
        a: "Yes. We work with career returners and with employers who want to hire them. See our women returnship page.",
      },
      {
        q: "Which diversity metrics should we track?",
        a: "Start with the diversity of applicants, shortlists, interviews, offers and joiners, plus offer-acceptance and 12-month retention. Our guide to diversity recruitment metrics explains each one.",
      },
    ],
    related: ["gcc-hiring", "cfo-executive-search", "finance-accounting-recruitment"],
  },
  {
    slug: "startup-hiring",
    name: "Startup Hiring",
    card: "First finance, data and leadership hires for funded startups, at startup speed.",
    seoTitle: "Recruitment Agency for Startups in India",
    metaDescription:
      "Recruitment agency for startups in India. Stellaspire hires first finance, analytics, AI and leadership roles for funded startups in Bengaluru and beyond.",
    primaryKeyword: "recruitment agency for startups",
    h1: "Startup hiring for your first finance, data and leadership hires",
    intro:
      "Your first finance hire, first data scientist or first VP will shape the company for years. Startups can't afford a slow process or a wrong hire. We move at your pace and tell you plainly when a profile isn't right.",
    shortAnswer:
      "Stellaspire is a recruitment agency for startups in India. We help funded startups make their first and most important hires in finance, analytics, AI/ML and leadership, mainly in Bengaluru. We work closely with founders, move quickly, and most roles are filled in 7 to 30 days.",
    forWho: [
      "Seed to Series C startups making first hires in finance or data",
      "Founders who need a CFO or finance head before a fundraise",
      "Fintechs scaling risk, credit and finance teams",
      "AI startups hiring their first ML engineers",
    ],
    roles: [
      { role: "First finance hire / Finance Manager", level: "Manager" },
      { role: "Head of Finance / CFO", level: "Head to CXO" },
      { role: "First data analyst / data scientist", level: "Analyst to lead" },
      { role: "AI / ML Engineer", level: "Engineer to lead" },
      { role: "Business and strategy roles", level: "Associate to head" },
    ],
    sections: [
      {
        heading: "What startups get from us",
        body: [
          "A founder-to-founder conversation, not an account manager. A short list of candidates who want to work at a startup and understand the trade-offs. Honest advice on pay, equity and what the market will accept.",
        ],
      },
      {
        heading: "Startup hiring guides",
        body: [
          "Read our guides on choosing a staffing agency for startups, how AI is changing startup recruitment, and how to write a job description that attracts top talent.",
        ],
      },
    ],
    diversity:
      "It's far easier to build a diverse team from your first ten hires than to fix it at a hundred. We help startups get there from the start.",
    cities: ["bangalore", "mumbai", "delhi-ncr", "hyderabad", "pune"],
    faqs: [
      {
        q: "Why should a startup use a recruitment agency?",
        a: "Founders' time is the scarcest resource. A specialist agency brings a ready network, screens out poor fits and runs the process, so founders only meet candidates worth hiring.",
      },
      {
        q: "Can you hire a CFO for a startup?",
        a: "Yes. We hire first CFOs and heads of finance for funded startups, including candidates with fundraising and investor reporting experience.",
      },
      {
        q: "How fast can you hire for a startup?",
        a: "Most roles are filled in 7 to 30 days. We share qualified profiles quickly and keep the process tight.",
      },
      {
        q: "Do you work with early-stage startups?",
        a: "Yes, from seed stage onwards, mainly for finance, analytics, AI and leadership roles.",
      },
    ],
    related: ["cfo-executive-search", "ai-ml-recruitment", "finance-accounting-recruitment"],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
