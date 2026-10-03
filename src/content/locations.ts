import type { Faq } from "./services";

export type Location = {
  slug: string;
  city: string;
  region: string;
  country: string;
  seoTitle: string; // ≤ 46 chars
  metaDescription: string;
  primaryKeyword: string;
  h1: string;
  intro: string;
  landscape: string[];
  hubs: string[];
  focus: string[]; // service slugs most relevant here
  hasOffice: boolean;
  faqs: Faq[];
};

export const locations: Location[] = [
  {
    slug: "bangalore",
    city: "Bengaluru",
    region: "Karnataka",
    country: "India",
    seoTitle: "Recruitment Agency in Bangalore",
    metaDescription:
      "Recruitment agency in Bangalore for finance, analytics, AI and leadership hiring. Women-led Stellaspire hires for GCCs and startups. Book a hiring consult.",
    primaryKeyword: "recruitment agency in bangalore",
    h1: "Recruitment agency in Bangalore for finance, analytics and GCC hiring",
    intro:
      "Bengaluru is home. Our office is at WeWork Prestige Central on Infantry Road, and most of our searches start here. We know the city's finance, analytics and technology talent because we work with it every day.",
    landscape: [
      "Bengaluru has the largest concentration of global capability centres in India, and its startup ecosystem is the country's deepest. That makes it the most competitive hiring market for finance, analytics and AI talent. Good candidates hold multiple offers, and slow processes lose them.",
      "GCCs of global banks, retailers and technology companies compete with funded startups and unicorns for the same FP&A leads, controllers, data scientists and ML engineers. We help clients stand out with a clear pitch, a fast process and realistic pay advice.",
    ],
    hubs: ["Outer Ring Road", "Whitefield", "Manyata Tech Park", "Electronic City", "CBD and Indiranagar", "HSR Layout and Koramangala"],
    focus: ["finance-accounting-recruitment", "gcc-hiring", "ai-ml-recruitment", "analytics-data-recruitment", "startup-hiring", "cfo-executive-search"],
    hasOffice: true,
    faqs: [
      {
        q: "Where is Stellaspire's office in Bangalore?",
        a: "Our office is at WeWork Prestige Central, 36 Infantry Road, Bengaluru, Karnataka 560001.",
      },
      {
        q: "Which roles does Stellaspire hire for in Bangalore?",
        a: "Finance and accounting, CFO and leadership, analytics and data, AI/ML, and startup hiring, for GCCs, fintechs, NBFCs and growth companies.",
      },
      {
        q: "Are recruitment agencies in Bangalore free for candidates?",
        a: "Reputable agencies, including Stellaspire, never charge candidates for job placement. Employers pay the recruitment fee.",
      },
      {
        q: "How long does hiring take in Bangalore?",
        a: "Most roles we handle are filled in 7 to 30 days. Leadership roles take longer, and notice periods of 30 to 90 days are common in Bengaluru.",
      },
    ],
  },
  {
    slug: "hyderabad",
    city: "Hyderabad",
    region: "Telangana",
    country: "India",
    seoTitle: "Recruitment Agency in Hyderabad",
    metaDescription:
      "Recruitment agency in Hyderabad for GCC, finance, analytics and AI hiring. Stellaspire builds diverse teams for global capability centres. Talk to us.",
    primaryKeyword: "recruitment agency in hyderabad",
    h1: "Recruitment agency in Hyderabad for GCC, finance and analytics hiring",
    intro:
      "Hyderabad has become one of India's fastest-growing GCC destinations. Global companies choose it for strong finance operations and technology talent, good infrastructure and competitive costs. We help them build those teams.",
    landscape: [
      "Many of the largest GCC set-ups of recent years have chosen Hyderabad, particularly for finance and accounting operations, analytics and technology. That has made experienced finance leads, controllers and analytics managers highly sought-after.",
      "We hire for Hyderabad GCCs from Bengaluru, with candidates sourced from Hyderabad and from professionals who want to relocate there.",
    ],
    hubs: ["HITEC City", "Gachibowli", "Financial District", "Madhapur", "Nanakramguda"],
    focus: ["gcc-hiring", "finance-accounting-recruitment", "analytics-data-recruitment", "ai-ml-recruitment"],
    hasOffice: false,
    faqs: [
      {
        q: "Does Stellaspire hire in Hyderabad?",
        a: "Yes. We recruit for GCCs and companies in Hyderabad, mainly in finance, analytics, AI/ML and leadership roles.",
      },
      {
        q: "Is Hyderabad good for setting up a GCC?",
        a: "Hyderabad is one of India's leading GCC hubs, known for finance operations and technology talent, good infrastructure and competitive costs.",
      },
      {
        q: "Can you hire a GCC finance head in Hyderabad?",
        a: "Yes. GCC finance leadership is one of our core searches.",
      },
    ],
  },
  {
    slug: "pune",
    city: "Pune",
    region: "Maharashtra",
    country: "India",
    seoTitle: "Recruitment Agency in Pune",
    metaDescription:
      "Recruitment agency in Pune for GCC, finance, analytics and engineering-led AI hiring. Stellaspire builds diverse, specialist teams. Book a hiring consult.",
    primaryKeyword: "recruitment agency in pune",
    h1: "Recruitment agency in Pune for GCC, finance and analytics hiring",
    intro:
      "Pune combines deep engineering and manufacturing roots with a growing finance, analytics and GCC base. We hire for companies there that need specialist talent without Bengaluru's intensity.",
    landscape: [
      "Pune's strength in engineering, automotive and manufacturing gives it a strong pool of finance professionals with plant, cost and supply-chain experience, alongside fast-growing analytics and GCC teams.",
      "We have worked with engineering-led industrial companies and understand how finance and analytics roles differ in these businesses.",
    ],
    hubs: ["Hinjewadi", "Kharadi", "Magarpatta", "Baner", "Viman Nagar"],
    focus: ["gcc-hiring", "finance-accounting-recruitment", "analytics-data-recruitment", "ai-ml-recruitment"],
    hasOffice: false,
    faqs: [
      {
        q: "Does Stellaspire recruit in Pune?",
        a: "Yes. We recruit finance, analytics, AI/ML and leadership talent for GCCs and companies in Pune.",
      },
      {
        q: "What kind of finance talent is available in Pune?",
        a: "Pune has a strong pool of finance professionals with manufacturing, cost accounting and supply-chain experience, plus growing GCC finance and analytics talent.",
      },
    ],
  },
  {
    slug: "mumbai",
    city: "Mumbai",
    region: "Maharashtra",
    country: "India",
    seoTitle: "Finance Recruitment Agency in Mumbai",
    metaDescription:
      "Finance recruitment agency in Mumbai for BFSI, NBFC, fintech and leadership roles. Stellaspire hires CFOs, controllers and analytics talent. Talk to us.",
    primaryKeyword: "recruitment agency in mumbai",
    h1: "Recruitment agency in Mumbai for finance, BFSI and leadership hiring",
    intro:
      "Mumbai is India's financial capital: banks, NBFCs, insurers, asset managers and fintechs all compete here for senior finance and risk talent. We recruit for that market.",
    landscape: [
      "Finance roles in Mumbai sit close to regulators and capital markets. Our clients need people who understand RBI and SEBI requirements, treasury, credit and investor reporting.",
      "We recruit CFOs, finance controllers, risk and credit leaders and analytics talent for Mumbai's BFSI and fintech companies.",
    ],
    hubs: ["Bandra Kurla Complex", "Lower Parel", "Andheri", "Powai", "Navi Mumbai"],
    focus: ["finance-accounting-recruitment", "cfo-executive-search", "analytics-data-recruitment"],
    hasOffice: false,
    faqs: [
      {
        q: "Does Stellaspire hire in Mumbai?",
        a: "Yes. We recruit finance, BFSI, NBFC, fintech and leadership roles in Mumbai.",
      },
      {
        q: "Can you hire NBFC finance leaders in Mumbai?",
        a: "Yes. NBFC and fintech finance hiring, including regulatory and credit expertise, is one of our specialisations.",
      },
    ],
  },
  {
    slug: "delhi-ncr",
    city: "Delhi NCR",
    region: "Delhi, Gurugram and Noida",
    country: "India",
    seoTitle: "Recruitment Agency in Gurgaon & Delhi NCR",
    metaDescription:
      "Recruitment agency in Gurgaon, Delhi and Noida for finance, analytics, AI and leadership hiring. Stellaspire hires for GCCs, startups and fintechs.",
    primaryKeyword: "recruitment agency in gurgaon",
    h1: "Recruitment agency in Gurgaon, Delhi and Noida for finance and analytics hiring",
    intro:
      "Delhi NCR covers three very different markets: Gurugram's GCCs, consulting firms and startups, Noida's technology and product companies, and Delhi's corporate and government-linked businesses. We recruit specialist finance, analytics and leadership talent across all three.",
    landscape: [
      "Gurugram has a dense cluster of GCCs, consulting firms, fintechs and unicorns, which makes it a strong market for FP&A, controllership and analytics talent. Noida is growing fast in technology and product development.",
      "We hire for NCR from Bengaluru, with candidates sourced locally and from professionals who want to relocate to the region.",
    ],
    hubs: ["Cyber City, Gurugram", "Golf Course Road", "Udyog Vihar", "Noida Sector 62", "Noida Expressway", "Connaught Place"],
    focus: ["finance-accounting-recruitment", "gcc-hiring", "analytics-data-recruitment", "startup-hiring"],
    hasOffice: false,
    faqs: [
      {
        q: "Does Stellaspire recruit in Gurgaon and Noida?",
        a: "Yes. We recruit finance, analytics, AI/ML and leadership roles across Delhi, Gurugram and Noida.",
      },
      {
        q: "Which industries do you hire for in Delhi NCR?",
        a: "Mainly GCCs, fintechs, consulting-led businesses and funded startups.",
      },
    ],
  },
  {
    slug: "dubai",
    city: "Dubai",
    region: "United Arab Emirates",
    country: "UAE",
    seoTitle: "Finance Recruitment Agency in Dubai",
    metaDescription:
      "Finance and leadership recruitment in Dubai and the UAE. Stellaspire hires finance, fintech, Web3 and technology leaders from India and the GCC region.",
    primaryKeyword: "finance recruitment agency dubai",
    h1: "Finance and leadership recruitment in Dubai and the UAE",
    intro:
      "Dubai is a global hub for finance, fintech, Web3 and technology, and it runs on international talent. We help UAE companies hire finance and technology leaders, including experienced professionals from India.",
    landscape: [
      "Tax-free income and a strong business environment attract senior talent from around the world, particularly in finance and technology leadership. We have supported clients in the UAE across fintech, Web3 and technology.",
      "We search across India and the wider region, and handle the practicalities of cross-border hiring conversations, from compensation expectations to relocation timelines.",
    ],
    hubs: ["DIFC", "Business Bay", "Dubai Internet City", "Dubai Silicon Oasis", "Abu Dhabi (ADGM)"],
    focus: ["finance-accounting-recruitment", "cfo-executive-search", "ai-ml-recruitment"],
    hasOffice: false,
    faqs: [
      {
        q: "Does Stellaspire recruit in Dubai?",
        a: "Yes. We recruit finance, fintech, Web3 and technology leadership roles for companies in Dubai and the UAE.",
      },
      {
        q: "Can you hire Indian professionals for UAE roles?",
        a: "Yes. Many of our UAE searches include experienced professionals from India who are open to relocating.",
      },
    ],
  },
];

export const getLocation = (slug: string) => locations.find((l) => l.slug === slug);
