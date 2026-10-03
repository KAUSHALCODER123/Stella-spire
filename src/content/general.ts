import type { Faq } from "./services";

// Testimonials are taken from the current stellaspire.com.
// TODO: replace initials with full names, titles and companies once clients approve.
export const testimonials = [
  {
    quote:
      "We struggled to find high-calibre talent for leadership roles until we worked with Stellaspire. Their expertise in fintech and NBFC hiring meant we found the right fit, and their consultative approach makes them a trusted partner.",
    name: "Meera R.",
    title: "HR Director, leading NBFC",
    kind: "employer",
  },
  {
    quote:
      "I have worked with many recruitment agencies and consultants, but Stellaspire truly stands out. Their professionalism, organisation and, most importantly, patience are unparalleled.",
    name: "Siham Halabi",
    title: "Chief People and Operations Officer, Dubai",
    kind: "employer",
  },
  {
    quote:
      "Partnering with Stellaspire transformed our hiring process. Their understanding of diversity hiring helped us build a stronger, more inclusive team, and every candidate they sent was top-tier.",
    name: "Ankit M.",
    title: "Head of Talent Acquisition, fintech startup",
    kind: "employer",
  },
  {
    quote:
      "Stellaspire was a game-changer for me as I re-entered the workforce after a career break. They helped me find an organisation that supports work-life balance and flexible policies.",
    name: "Sarah M.",
    title: "Marketing Specialist",
    kind: "candidate",
  },
] as const;

export const processSteps = [
  {
    title: "Briefing",
    body: "A 30-minute call to understand the role, the team, what success looks like and what the market will pay.",
  },
  {
    title: "Market mapping and sourcing",
    body: "We search our network, approach passive candidates directly and use AI-assisted screening to cover the market quickly.",
  },
  {
    title: "Assessed shortlist",
    body: "You receive a short list of screened candidates, each with our written view of strengths, gaps and motivation, and qualified women in every list.",
  },
  {
    title: "Interviews and offer",
    body: "We schedule interviews, collect feedback, run references and help you negotiate an offer the candidate accepts.",
  },
  {
    title: "Joining and follow-up",
    body: "We stay in touch through the notice period and the first months, so your new hire actually joins and settles in.",
  },
];

export const engagementModels = [
  {
    name: "Contingent search",
    best: "Specialist and mid-level roles",
    how: "You pay a fee only when a candidate we introduce joins. The fee is a percentage of first-year CTC, agreed in writing upfront.",
  },
  {
    name: "Retained search",
    best: "CFO, CXO and confidential leadership roles",
    how: "An exclusive, dedicated search with market mapping. The fee is paid in stages: at the start, at the shortlist and at hire.",
  },
  {
    name: "Dedicated hiring partner",
    best: "GCC set-ups and multi-role hiring waves",
    how: "A recruiter team embedded in your hiring plan for a fixed period, with weekly pipeline reporting.",
  },
];

export const generalFaqs: { group: string; items: Faq[] }[] = [
  {
    group: "About Stellaspire",
    items: [
      {
        q: "What is Stellaspire?",
        a: "Stellaspire is a women-led recruitment consultancy in Bengaluru. We specialise in finance, analytics, AI/ML and leadership hiring for GCCs and growth companies, with diversity built into every shortlist.",
      },
      {
        q: "Where is Stellaspire located?",
        a: "WeWork Prestige Central, 36 Infantry Road, Bengaluru, Karnataka 560001. We hire across India and have supported clients in the UAE, UK and USA.",
      },
      {
        q: "Which industries does Stellaspire specialise in?",
        a: "GCCs, fintech, NBFC and BFSI, AI and technology companies, and engineering-led businesses.",
      },
      {
        q: "Which companies have worked with Stellaspire?",
        a: "Clients include Bharat Forge, Fraunhofer, Assurekit and EasemyDeal, along with GCCs, fintechs and startups.",
      },
      {
        q: "What does 'We take hiring personally' mean?",
        a: "It means a consultative, relationship-first approach. We get to know your team and our candidates properly, and we stay involved until the hire has joined and settled.",
      },
    ],
  },
  {
    group: "For employers",
    items: [
      {
        q: "How do I start hiring with Stellaspire?",
        a: "Share a role brief through our contact page, call +91 70247 66117 or email connect@stellaspire.com. We'll set up a 30-minute briefing call.",
      },
      {
        q: "What is your hiring process?",
        a: "Briefing, market mapping and sourcing, an assessed shortlist, interviews and offer, then follow-up through joining.",
      },
      {
        q: "How quickly can a role be filled?",
        a: "Usually 7 to 30 days depending on seniority and complexity. Leadership searches take longer.",
      },
      {
        q: "How much does Stellaspire charge?",
        a: "Fees depend on the role and the engagement model, usually a percentage of first-year CTC. We agree them in writing before we start.",
      },
      {
        q: "Do you offer retained search?",
        a: "Yes, for CFO, CXO and confidential leadership roles.",
      },
      {
        q: "Do you support bulk hiring?",
        a: "We focus on specialist and leadership roles. For GCC set-ups we run planned multi-role hiring waves, and we discuss larger volumes case by case.",
      },
    ],
  },
  {
    group: "For candidates",
    items: [
      {
        q: "How can I apply?",
        a: "Browse our open jobs or submit your CV to our talent pool. We'll contact you when a suitable role comes up.",
      },
      {
        q: "Does Stellaspire charge candidates?",
        a: "No. We never charge candidates for job placement.",
      },
      {
        q: "Do you help career returners?",
        a: "Yes. We work with professionals, especially women, returning after a career break. See our women returnship page.",
      },
      {
        q: "Do you offer interview preparation or career counselling?",
        a: "Yes, as optional paid sessions. Interview preparation starts from ₹700 per session. Job placement itself is always free for candidates.",
      },
    ],
  },
];
