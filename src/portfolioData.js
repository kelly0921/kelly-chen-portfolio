export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Speaking', href: '#speaking' },
  { label: 'Community', href: '#community' },
  { label: 'Content', href: '#media' },
];

export const pillars = [
  {
    id: 'experience',
    title: 'Experience',
    description: 'Software engineering internships, fellowships, and technical work in financial services and data.',
    href: '#experience',
  },
  {
    id: 'projects',
    title: 'Projects',
    description: 'Startup ideas, fintech experiments, AI-assisted builds, and product prototypes.',
    href: '#projects',
  },
  {
    id: 'speaking',
    title: 'Speaking',
    description: 'Presentations, workshops, panels, ambassador work, and public-facing tech events.',
    href: '#speaking',
  },
  {
    id: 'community',
    title: 'Community',
    description: 'Women in tech, student access, event organizing, mentorship, and opportunity building.',
    href: '#community',
  },
  {
    id: 'media',
    title: 'Content',
    description: 'Informal LinkedIn ideas, newsletter-style posts, and useful resources for students and builders.',
    href: '#media',
  },
];

export const highlights = [
  {
    type: 'Experience',
    title: 'Software Engineer at Bloomberg',
    description: 'Working in Fixed Income - Private Securities with C++ and systems design.',
    href: '#experience',
  },
  {
    type: 'Experience',
    title: 'Software Engineering Intern at JPMorgan Chase',
    description: 'Built CIU onboarding automation with React, Spring Boot, Cassandra, and Kafka, reducing onboarding from hours to minutes.',
    href: '#experience',
  },
  {
    type: 'Community',
    title: 'Organized access to Harvard WECode',
    description: 'Helped 15 students attend a fully funded women-in-tech conference experience through outreach, funding, logistics, and community coordination.',
    href: '#community',
  },
  {
    type: 'Project',
    title: 'SkanPay / QR payment concept',
    description: 'Explored a single-scan payment and redemption flow for coupons, gift cards, small sellers, and checkout friction.',
    href: '#projects',
  },
  {
    type: 'Speaking',
    title: 'Public speaking & events',
    description: 'Presented, facilitated, represented, and organized through conferences, tech programs, student groups, and ambassador roles.',
    href: '#speaking',
  },
  {
    type: 'Content',
    title: 'LinkedIn to newsletter ideas',
    description: 'Turns short posts, opportunity lists, and lessons from events into a stronger public archive across notes and resources.',
    href: '#media',
  },
];

export const personalityNotes = [
  {
    label: 'I notice',
    text: 'where people get stuck in a flow, then try to make the next step easier.',
  },
  {
    label: 'I build',
    text: 'small systems, payment ideas, portfolio experiments, and AI-assisted workflows.',
  },
  {
    label: 'I share',
    text: 'opportunities, lessons from tech spaces, and resources students can actually use.',
  },
  {
    label: 'I care about',
    text: 'making technical spaces feel more navigable, human, and possible.',
  },
];

export const experiences = [
  {
    organization: 'Bloomberg',
    logo: { text: 'B', label: 'Bloomberg', tone: 'blue', src: '/assets/company-bloomberg.png' },
    role: 'Software Engineer',
    context: 'Fixed Income - Private Securities',
    dates: 'Full-time',
    dateRange: 'Jul 2025 - Present',
    summary:
      'Software engineer working on Fixed Income - Private Securities in New York.',
    bullets: [
      'Builds and maintains systems in the fixed income private securities space.',
      'Works with C++ and systems design in a production engineering environment.',
      'Applies financial technology context across data, reliability, and product-facing workflows.',
    ],
    skills: ['C++', 'Systems design', 'Fixed income', 'Private securities', 'Financial technology'],
  },
  {
    organization: 'CodePath',
    logo: { text: 'CP', label: 'CodePath', tone: 'teal', src: '/assets/company-codepath.png' },
    role: 'Tech Fellow, Data Structures & Algorithms',
    context: 'Coaching and mentoring',
    dates: 'Fellowship',
    dateRange: 'Sep 2024 - May 2025',
    summary:
      'Supported students learning data structures and algorithms through coaching, mentoring, and technical guidance.',
    bullets: [
      'Mentored students through technical problem-solving and interview-style preparation.',
      'Helped make data structures and algorithms more approachable through coaching and explanation.',
      'Practiced translating technical concepts into clear learning paths for peers.',
    ],
    skills: ['Data structures', 'Algorithms', 'Coaching', 'Mentoring', 'Technical communication'],
  },
  {
    organization: 'Oracle',
    logo: { text: 'OR', label: 'Oracle', tone: 'rose', src: '/assets/company-oracle.png' },
    role: 'Software Engineer Intern',
    context: 'Central Bank Digital Currency capstone project',
    dates: 'Internship',
    dateRange: 'Jan 2024 - Dec 2024',
    summary:
      'Worked on a Central Bank Digital Currency capstone project with blockchain-focused product and engineering context.',
    bullets: [
      'Explored engineering concepts around Central Bank Digital Currency systems.',
      'Worked with blockchain-oriented technical and product constraints.',
      'Built deeper context around financial infrastructure and emerging payment systems.',
    ],
    skills: ['Blockchain', 'CBDC', 'Financial infrastructure', 'Product thinking'],
  },
  {
    organization: 'JPMorgan Chase & Co.',
    logo: { text: 'JPMC', label: 'JPMorgan Chase & Co.', tone: 'ink', src: '/assets/company-jpmc.png' },
    role: 'Software Engineer Intern',
    context: 'Customer Interaction Utility',
    dates: 'Internship',
    dateRange: 'Jun 2024 - Aug 2024',
    summary:
      'Built self-service onboarding automation and real-time data processing workflows for Customer Interaction Utility systems.',
    bullets: [
      'Developed a self-service onboarding tool that reduced onboarding time from hours to minutes while lowering operational risk and cost.',
      'Built frontend and backend integration using React, Spring Boot, Cassandra, and Kafka.',
      'Created a data processing pipeline to retrieve and validate topic metadata for stronger throughput and producer-rate insights.',
      'Used Apache Kafka and user-defined configurations to improve onboarding reliability and flexibility.',
    ],
    skills: ['Spring Boot', 'React.js', 'Apache Kafka', 'Cassandra', 'Java', 'Data pipelines', 'Enterprise systems'],
  },
  {
    organization: 'Visa',
    logo: { text: 'VISA', label: 'Visa', tone: 'gold', src: '/assets/company-visa.png' },
    role: 'Software Engineering Intern',
    context: 'Global Billing Platform',
    dates: 'Internship',
    dateRange: 'May 2023 - Aug 2023',
    summary:
      'Built backend tools and reusable services using Spring Boot, MongoDB, Swagger, and REST APIs. Worked on password encryption/decryption infrastructure and an approval workflow state machine for uploaded business objects.',
    bullets: [
      'Implemented an approval workflow state machine connected to RESTful APIs with visualization using Spring Boot, Angular, MongoDB, and Swagger.',
      'Enabled users to track uploaded billing line object status and standardized workflow states.',
      'Created a reusable Spring Boot library with an API for password encryption and decryption across multiple team applications.',
      'Collaborated in an Agile engineering environment.',
    ],
    skills: ['Spring Boot', 'Angular', 'MongoDB', 'Swagger', 'REST APIs', 'Agile', 'Security'],
  },
  {
    organization: 'MLH Fellowship',
    logo: { text: 'MLH', label: 'MLH Fellowship', tone: 'indigo', src: '/assets/company-mlh.png' },
    role: 'Production Engineering Fellow, Meta',
    context: 'Production engineering and open source systems',
    dates: 'Fellowship',
    dateRange: 'Jun 2022 - Aug 2022',
    summary:
      'Completed a 12-week production engineering fellowship covering systems, open source, monitoring, testing, and deployment.',
    bullets: [
      'Completed structured curriculum on core Production Engineering topics with workshops hosted by industry experts.',
      'Created an open-source personal portfolio website template using Python, Flask, Jinja, MySQL, Nginx, and unittest.',
      'Automated testing and deployment workflows using CI/CD.',
      'Set up system and container monitoring, alerting, and visualization using Prometheus and Grafana.',
    ],
    skills: ['Python', 'Flask', 'MySQL', 'Nginx', 'CI/CD', 'Prometheus', 'Grafana'],
  },
  {
    organization: 'Correlation One',
    logo: { text: 'C1', label: 'Correlation One', tone: 'mint', src: '/assets/company-correlation-one.png' },
    role: 'Data Science for All / Women Fellow',
    context: 'NLP sentiment analysis project',
    dates: 'Fellowship',
    dateRange: 'Jun 2022 - Aug 2022',
    summary:
      'Worked on an NLP sentiment analysis project using Apple tweets to explore relationships between public sentiment and stock movement.',
    bullets: [
      'Selected for a project-based fellowship with technical training, workshops, and mentorship for high-achieving women from over 8,000 applications.',
      'Analyzed tweets with natural language processing to identify market sentiment toward Apple.',
      'Built and compared logistic regression and k-nearest neighbors models to predict Apple stock price movement.',
      'Presented findings through a collaborative data science workflow.',
    ],
    skills: ['Data analysis', 'Data modeling', 'NLP', 'Logistic regression', 'KNN', 'Python'],
  },
];

export const projects = [
  {
    group: 'Startup Concept',
    title: 'SkanPay',
    mark: { text: 'SP', label: 'SkanPay', tone: 'teal' },
    status: 'Concept / product exploration',
    description:
      'A QR-based payment and coupon redemption concept focused on reducing checkout friction.',
    image: '/assets/project-skanpay.svg',
    imageAlt: 'SkanPay product preview showing a QR checkout flow, coupon stack, and payment confirmation.',
    problem: 'Coupon redemption, gift cards, and payments often happen through separate steps.',
    user: 'Customers, merchants, restaurants, small sellers, and staff handling checkout.',
    role: 'Co-founder, product thinker, payment flow researcher, patent contributor.',
    learned: 'Reducing friction is not just a technical problem. It depends on user flow, trust, onboarding, and merchant behavior.',
    proof: 'Product thinking across checkout systems, merchant onboarding, and fintech user experience.',
    tags: ['QR payments', 'Product strategy', 'Checkout', 'MVP', 'Fintech'],
  },
  {
    group: 'Built / In Progress',
    title: 'BeamCash',
    mark: { text: 'BC', label: 'BeamCash', tone: 'gold', src: '/assets/project-beamcash-icon.svg' },
    status: 'In-progress local MVP',
    description:
      'A mobile-first QR payment MVP that helps local sellers, performers, and vendors accept payments through branded checkout pages.',
    image: '/assets/project-beamcash-seller-dashboard-mobile.png',
    imageFit: 'contain',
    imageFrame: 'phone',
    imageAlt: 'BeamCash seller dashboard showing available balance, payment stats, and a branded QR code.',
    problem: 'Small in-person sellers lose payments when customers do not carry cash, use different payment apps, or hesitate to scan an unbranded QR code.',
    user: 'Street performers, food vendors, pop-up shops, handmade sellers, nonprofits, and donation-based groups.',
    role: 'Founder, product builder, mobile app developer, and payment UX designer.',
    learned: 'Payment UX is a trust problem as much as a checkout problem. A QR sign needs to make the seller look credible before a buyer enters payment details.',
    proof: 'End-to-end mobile MVP work across seller setup, branded QR signage, buyer checkout, payment state, alerts, and Stripe-ready architecture.',
    tags: ['React Native', 'Expo', 'TypeScript', 'Stripe', 'QR payments'],
  },
  {
    group: 'Built / In Progress',
    title: 'WebPilot',
    mark: { text: 'WP', label: 'WebPilot', tone: 'indigo', src: '/assets/project-webpilot-icon.svg' },
    status: 'Local MVP / active prototype',
    description:
      'An AI website operations dashboard that helps consultants turn audits, client notes, and page content into actionable recommendations and implementation plans.',
    image: '/assets/project-webpilot-command-center.png',
    imageFit: 'contain',
    imageAlt: 'WebPilot website command center showing guided workflow steps and reusable website context.',
    problem: 'Small businesses and nonprofits often know their websites need work, but they do not know what to fix first or how to turn an audit into implementation.',
    user: 'Website consultants, small nonprofits, local businesses, and agencies managing website improvement work.',
    role: 'Product strategist, full-stack builder, AI workflow designer, and local MVP validator.',
    learned: 'The value of an AI product is often the workflow around the generation: intake, context, review, client delivery, implementation, and follow-up.',
    proof: 'Structured AI task architecture, prompt versioning, editable outputs, client request tracking, PageSpeed evidence, and local backup/restore workflows.',
    tags: ['Next.js', 'TypeScript', 'OpenAI API', 'Product design', 'AI workflows'],
  },
  {
    group: 'Startup Concept',
    title: 'Tandem',
    mark: { text: 'TD', label: 'Tandem', tone: 'rose' },
    status: 'Concept / early validation',
    description:
      'A dating concept for ambitious NYC singles that matches people by career archetype, risk tolerance, lifestyle rhythm, and long-term compatibility.',
    image: '/assets/project-tandem.svg',
    imageAlt: 'Tandem product concept preview showing complementary ambition archetypes and curated matching signals.',
    problem: 'Most dating apps optimize for surface-level signals, but ambitious professionals often need compatibility around career rhythm, risk tolerance, and future goals.',
    user: 'NYC singles ages 24-35 who are career-driven, dating intentionally, and interested in long-term partnership.',
    role: 'Founder, product strategist, validation planner, and matching-framework designer.',
    learned: 'A consumer product needs more than a feature hook. Trust, community quality, emotional framing, and validation strategy shape whether people feel comfortable joining.',
    proof: 'Ability to translate a cultural insight into a testable product thesis, MVP scope, archetype system, waitlist strategy, and manual matching experiment.',
    tags: ['Product strategy', 'Consumer app', 'Dating tech', 'UX research', 'MVP validation'],
  },
];

export const projectActions = {
  SkanPay: {
    body:
      'I can walk through the checkout concept, coupon redemption flow, and the product questions behind merchant adoption.',
    label: 'Ask to See the Demo',
    href: 'https://www.linkedin.com/in/kellychen0921/',
  },
  BeamCash: {
    body:
      'I can share the seller setup, branded QR sign, buyer checkout flow, and the Stripe-ready payment architecture behind the MVP.',
    label: 'View Case Study',
    href: '#beamcash',
  },
  WebPilot: {
    body:
      'I can walk through how WebPilot turns audit evidence, client notes, and AI outputs into implementation-ready website operations work.',
    label: 'View Case Study',
    href: '#webpilot',
  },
  Tandem: {
    body:
      'This is currently a validation-first concept around complementary ambition, archetype-based matching, and a curated NYC launch wedge.',
    label: 'Explore Concept',
    href: 'https://www.linkedin.com/in/kellychen0921/',
  },
};

export const beamCashCaseStudy = {
  eyebrow: 'BeamCash',
  title: 'QR Payments For Local Sellers',
  subtitle:
    'A mobile-first payment MVP that helps local sellers, performers, vendors, and donation-based groups accept in-person payments through branded QR checkout.',
  status: 'In-progress local MVP',
  role: 'Founder, product builder, mobile app developer, and payment UX designer',
  stack: ['React Native', 'Expo', 'TypeScript', 'Expo Router', 'Stripe-ready architecture', 'QR generation', 'Express backend'],
  overview:
    'BeamCash is designed for small in-person sellers who need a fast, professional way to get paid without asking customers to join another app. Sellers create a payment profile, generate a branded BeamCash QR sign, and let buyers scan into a mobile checkout flow.',
  overviewTitle: 'From QR Code To Trusted Checkout',
  problem:
    'Small sellers often lose payments because checkout is awkward. Customers may not carry cash, may not use the same payment app, or may hesitate when a QR code feels random or untrustworthy. BeamCash reduces that friction by pairing seller identity, branded signage, amount selection, and a familiar checkout flow.',
  problemTitle: 'Payment Friction Costs Small Sellers',
  whatIBuilt: [
    'Seller profile setup with business type, photo, category, intro, and payment message.',
    'Seller dashboard with balance summary, recent payment stats, QR access, and payout readiness state.',
    'Branded BeamCash QR signage that changes language by seller type: pay, tip, or give.',
    'Buyer checkout flow with seller profile, preset/custom amount selection, payment confirmation, and test payment support.',
    'Local/backend hybrid MVP architecture with mock payment services and Stripe PaymentSheet / Connect integration direction.',
  ],
  productDecisions: [
    {
      title: 'Trust Before Payment',
      text: 'The QR code is part of the product experience. It needs to look branded and seller-specific before a buyer feels comfortable entering payment details.',
    },
    {
      title: 'Seller Setup Stays Lightweight',
      text: 'The seller flow collects enough identity and payment context to feel credible without overwhelming small sellers before they can generate a code.',
    },
    {
      title: 'Stripe Underneath, BeamCash In Front',
      text: 'The product should feel like a BeamCash checkout experience while Stripe remains the processor and payout infrastructure underneath.',
    },
    {
      title: 'Mock Now, Real Payments Later',
      text: 'The MVP keeps test payments and mock services available while preserving a path toward PaymentSheet, Connect onboarding, hosted checkout URLs, and production storage.',
    },
  ],
  technicalHighlights: [
    'Expo Router mobile app structure with TypeScript models for merchants, payments, payouts, and notifications.',
    'QR generation and branded sign capture for printable or shareable seller signage.',
    'Buyer checkout state and amount selection flow designed around future Stripe PaymentSheet integration.',
    'Backend setup and local persistence layer for MVP development without requiring production hosting too early.',
    'Payment alerts settings for future push and voice notification concepts.',
  ],
  images: [
    {
      title: 'Home Entry',
      src: '/assets/project-beamcash-home-mobile.png',
      alt: 'BeamCash home screen with logo, seller-focused tagline, and code creation actions.',
      caption: 'The app starts with a simple seller-oriented entry point: create or recover a BeamCash code.',
      kind: 'mobile',
    },
    {
      title: 'Seller Dashboard',
      src: '/assets/project-beamcash-seller-dashboard-mobile.png',
      alt: 'BeamCash seller dashboard showing available balance, payment stats, and a branded QR code.',
      caption: 'The seller dashboard keeps QR access, payment stats, payout state, and branded signage in one place.',
      kind: 'mobile',
    },
    {
      title: 'Buyer Checkout',
      src: '/assets/project-beamcash-buyer-checkout-mobile.png',
      alt: 'BeamCash checkout screen showing a seller profile and payment amount options.',
      caption: 'The buyer flow is designed to feel familiar: confirm the seller, choose an amount, and send support.',
      kind: 'mobile',
    },
    {
      title: 'Find My Code',
      src: '/assets/project-beamcash-find-code-mobile.png',
      alt: 'BeamCash find code screen for recovering an existing seller payment code.',
      caption: 'The recovery flow helps sellers return to their payment code without rebuilding their setup.',
      kind: 'mobile',
    },
  ],
  workflowImage: {
    src: '/assets/project-beamcash-product-flow.svg',
    alt: 'BeamCash product flow from seller setup to QR checkout and payment confirmation.',
  },
  screenshotTitle: 'Mobile Product Screens',
  technicalTitle: 'Built For QR Payment Flows',
  lessons: [
    'Payment UX depends on trust, not just transaction speed.',
    'A branded QR sign can be the difference between a random code and a credible checkout moment.',
    'A payment MVP needs clean boundaries between test flows, future processor integrations, payout readiness, and legal production requirements.',
  ],
  nextSteps: [
    'Decide whether BeamCash should be framed publicly as a solo project, startup concept, or launch-ready product direction.',
    'Add production hosting, authentication, public checkout URLs, image storage, and real Stripe configuration when ready.',
    'Test the flow with real sellers or performers to validate trust, signage, and checkout behavior.',
  ],
  ctaTitle: 'Want To Talk Through BeamCash?',
  ctaBody:
    'I can walk through the seller flow, buyer checkout, branded QR signage, and how the MVP is structured around future payment processing and payout infrastructure.',
};

export const webPilotCaseStudy = {
  eyebrow: 'WebPilot',
  title: 'AI Website Operations Platform',
  subtitle:
    'A local MVP that helps consultants turn messy website audits, client notes, and page content into structured recommendations, client-ready delivery, and implementation work.',
  status: 'Local MVP / active prototype',
  role: 'Product strategist, full-stack builder, AI workflow designer, and local MVP validator',
  stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js API routes', 'OpenAI API', 'Google PageSpeed Insights', 'Local JSON storage'],
  overview:
    'WebPilot is an internal-first website operations platform for people improving client websites over time. Instead of acting like a one-time AI generator, it organizes website context, AI tasks, saved outputs, client requests, delivery readiness, and implementation handoff into one guided workflow.',
  overviewTitle: 'From AI Output To Website Operations',
  problem:
    'Small businesses and nonprofits often know their websites need improvement, but they do not know what to fix first, what assets are missing, how to rewrite pages, or how to turn recommendations into real implementation work. Traditional audits can be too broad, while generic AI tools produce advice that still needs structure, review, and follow-through.',
  problemTitle: 'Generic Advice Is Not Enough',
  whatIBuilt: [
    'Organization and website management built around the website as the core unit of work.',
    'Reusable AI task generation for audits, SEO, copywriting, FAQs, accessibility, donation pages, and WordPress-ready content.',
    'Editable AI outputs with review and approval statuses so generated work becomes a reusable asset, not a disposable response.',
    'Client-ready delivery view with QA checks, client requests, and implementation handoff.',
    'Page capture, PageSpeed evidence, local backup/restore, and workflow smoke testing for a more reliable internal MVP.',
  ],
  productDecisions: [
    {
      title: 'Website-first, not project-first',
      text: 'I centered the product around websites because clients and consultants think in terms of improving a website, not managing abstract projects.',
    },
    {
      title: 'Service-first MVP',
      text: 'I positioned WebPilot as an internal tool for delivering better client work before turning it into customer-facing SaaS.',
    },
    {
      title: 'Human-reviewed AI',
      text: 'I avoided treating AI output as final. WebPilot keeps generated work editable, reviewable, versioned, and tied to delivery readiness.',
    },
    {
      title: 'Manual capture before full crawling',
      text: 'Instead of overbuilding automation early, I supported manual page capture, pasted copy, PageSpeed evidence, and structured context.',
    },
  ],
  technicalHighlights: [
    'Reusable AI engine and prompt template architecture with prompt version tracking.',
    'Structured AIOutput model with model, prompt version, status, generated sections, and review state.',
    'Local JSON storage with atomic write improvements plus backup and restore flows.',
    'Google PageSpeed Insights integration for supporting technical evidence.',
    'Health endpoint and smoke test workflow for local validation.',
  ],
  images: [
    {
      title: 'Dashboard',
      src: '/assets/project-webpilot-dashboard.png',
      alt: 'WebPilot dashboard showing internal website operations, backup, and production readiness checks.',
      caption: 'The internal operations hub tracks readiness before using the tool for client website work.',
    },
    {
      title: 'Website Command Center',
      src: '/assets/project-webpilot-command-center.png',
      alt: 'WebPilot website command center showing guided workflow steps and reusable website context.',
      caption: 'The core workflow keeps context, AI tasks, delivery, and implementation connected to a specific website.',
    },
    {
      title: 'Client Delivery View',
      src: '/assets/project-webpilot-delivery-view.png',
      alt: 'WebPilot client delivery view showing package readiness checks and approval workflow.',
      caption: 'The delivery view turns generated recommendations into a reviewable package with QA and follow-up steps.',
    },
  ],
  workflowImage: {
    src: '/assets/project-webpilot-workflow-diagram.svg',
    alt: 'WebPilot workflow diagram showing intake, AI generation, review, delivery, and implementation handoff.',
  },
  screenshotTitle: 'Workflow Screens',
  technicalTitle: 'Built For Reviewable AI Work',
  lessons: [
    'The highest-value AI product is often not the generator itself, but the workflow around it.',
    'Useful AI tools need context collection, review states, client delivery, implementation tracking, and follow-up.',
    'A smaller internal MVP can be more valuable than a broad SaaS surface when the goal is to validate real service work.',
  ],
  nextSteps: [
    'Validate the workflow with real client website improvement projects.',
    'Add hosted storage, authentication, and stronger automated tests.',
    'Explore a customer-facing portal after the internal operator workflow is proven.',
  ],
  ctaTitle: 'Want To Talk Through WebPilot?',
  ctaBody:
    'I can walk through the product decisions, local MVP architecture, AI workflow design, and how the screenshots map to the operator experience.',
};

export const speakingEvents = [
  {
    event: 'ACM NYCWiC 2026',
    status: 'Past',
    role: 'In-person workshop speaker',
    topic: 'The Unspoken Playbook',
    subtitle: 'Building Career Leverage as an Emerging Engineer',
    focus: 'Moving from "Doing Everything Right" to Scaling Your Impact',
    date: 'April 10-11, 2026',
    format: '60-minute in-person workshop-style talk',
    location: 'Hilton Albany, Albany, NY',
    image: '/assets/speaking-nycwic-2026.jpg',
    imageAlt: 'Kelly Chen speaking at NYCWiC with her presentation projected on screen.',
    description:
      'An in-person workshop version of the talk, built around reflection, discussion, and practical career-leverage exercises.',
    href: 'https://www.nycwic.org/',
  },
  {
    event: 'Women in Tech Global Conference 2026',
    status: 'Past',
    role: 'Virtual speaker',
    topic: 'The Unspoken Playbook',
    subtitle: 'Building Career Leverage as an Emerging Engineer',
    focus: 'Moving from "Doing Everything Right" to Scaling Your Impact',
    date: 'May 14, 2026',
    format: '20-minute virtual talk during the Career Growth Summit',
    location: 'Virtual-first global conference',
    image: '/assets/speaking-womentech-global-2026.jpg',
    imageAlt: 'Women in Tech Global Conference 2026 speaker graphic for Kelly Chen.',
    description:
      'A concise virtual version focused on turning effort into visible growth, stronger positioning, and more durable career momentum.',
    href: 'https://www.womentech.net/women-tech-conference',
  },
  {
    event: 'NCWIT Career Fair',
    status: 'Upcoming',
    role: 'Flash talk speaker',
    topic: 'The Unspoken Playbook',
    subtitle: 'Building Career Leverage as an Emerging Engineer',
    focus: 'Moving from "Doing Everything Right" to Scaling Your Impact',
    date: 'August 5, 2026',
    format: '30-minute flash talk session',
    location: 'NCWIT Career Fair',
    description:
      'A fast-moving version designed for a career fair setting, with concrete ways to make experience, projects, and community work compound.',
  },
];

export const speakingMoments = [];

export const communityResources = [
  {
    title: 'Conference Access Starter Pack',
    status: 'Access',
    description:
      'A practical guide for finding women-in-tech conferences, funding, travel support, and application timelines.',
  },
  {
    title: 'Student Opportunity Tracker',
    status: 'Organization',
    description:
      'A simple tracker for fellowships, conferences, scholarships, programs, deadlines, and follow-up steps.',
  },
  {
    title: 'Women-in-Tech Funding Guide',
    status: 'Funding',
    description:
      'A curated resource around sponsorship, travel grants, campus funding, and outreach scripts for students.',
  },
];

export const availableTopics = [
  {
    title: 'Women in Tech & Student Access',
    description: 'Conference pathways, student communities, sponsorship access, and making technical spaces easier to enter.',
  },
  {
    title: 'Early-Career Engineering',
    description: 'Internship lessons, technical growth, mentoring, interview preparation, and learning how to explain systems clearly.',
  },
  {
    title: 'Fintech, Product & Payments',
    description: 'Financial infrastructure, payment friction, QR payment concepts, product thinking, and customer-facing systems.',
  },
  {
    title: 'AI-Assisted Building',
    description: 'Using AI tools to prototype workflows, organize ideas, review output, and turn rough concepts into usable products.',
  },
];

export const communityWork = [
  {
    title: 'Girls Who Code College Loop at Lehigh',
    type: 'Leadership',
    role: 'Founder & President',
    timeframe: 'Apr 2024 - Present',
    scale: '70+ members',
    summary:
      'Founded and led the Girls Who Code College Loop at Lehigh to build a stronger campus community for women in tech.',
    action:
      'Guided an 8-person executive board, hosted professional development programming, grew the club LinkedIn presence past 2,600 followers, and helped organize fully funded conference opportunities.',
    impact:
      'Created a visible support system where students could find community, technical opportunities, and career momentum.',
    tags: ['Women in tech', 'Club leadership', 'Professional development', 'Conference access'],
  },
  {
    title: 'NYC Summer Tech Hub Leader',
    type: 'Leadership',
    role: 'Rewriting the Code',
    timeframe: 'May 2024 - Aug 2024',
    scale: '6+ events',
    summary:
      'Led local event programming for early-career technologists in New York City.',
    action:
      'Planned and executed 6+ community events for 10-30 participants each, managing logistics and budget constraints.',
    impact: 'Helped foster engagement and collaboration within the RTC community in NYC.',
    tags: ['Event planning', 'RTC', 'Community operations', 'NYC tech'],
  },
  {
    title: 'Conference and opportunity access',
    type: 'Access',
    role: 'Organizer / Resource sharer',
    timeframe: 'Ongoing',
    scale: 'Conference pathways',
    summary:
      'Helped students discover and reach opportunities that are easy to miss without the right network.',
    action:
      'Shared fellowships, conferences, scholarships, events, and resources, including women-in-tech conference pathways and student programs.',
    impact: 'Made hidden opportunity networks easier for other students to find and act on.',
    tags: ['Opportunity sharing', 'Student access', 'Women in tech', 'Resources'],
  },
  {
    title: 'Hackathon, ambassador, and campus work',
    type: 'Community',
    role: 'Participant / Ambassador / Member',
    timeframe: '2023 - 2025',
    scale: 'Programs + affiliations',
    summary:
      'Participated in and supported programs where early-career builders could try, present, and connect.',
    action:
      'Contributed through hackathons, ambassador programs, and campus organizations including Visa Campus Ambassador work, LehighSiliconValley2024, CSBA, NCWIT, AnitaB.org, and MLH communities.',
    impact: 'Built more approachable entry points into tech, entrepreneurship, and technical community involvement.',
    tags: ['Hackathons', 'Ambassador work', 'CSBA', 'NCWIT', 'AnitaB.org', 'MLH'],
  },
];

export const mediaChannels = [
  {
    type: 'Series',
    status: 'In progress',
    title: 'Conference Strategy Notes',
    description: 'Practical posts on conference ROI, funding, sponsor signals, and how students can turn events into leverage.',
    posts: [
      { label: 'Conference ROI', format: 'Read' },
      { label: 'Funding options', format: 'Read' },
      { label: 'Sponsor signals', format: 'Read' },
    ],
  },
  {
    type: 'Posts',
    status: 'Public archive',
    title: 'LinkedIn Notes',
    description: 'A selected archive of posts, reflections, career lessons, and opportunity-sharing threads.',
    posts: [
      { label: 'Opportunity roundups', format: 'Read' },
      { label: 'Women-in-tech reflections', format: 'Read' },
      { label: 'Early-career engineering lessons', format: 'Read' },
    ],
  },
  {
    type: 'Templates',
    status: 'Reusable tools',
    title: 'Student Opportunity Library',
    description: 'Reusable guides and trackers for students navigating programs, fellowships, and technical communities.',
    posts: [
      { label: 'Opportunity tracker', format: 'Template' },
      { label: 'Application planning checklist', format: 'Template' },
      { label: 'Programs worth watching', format: 'Guide' },
    ],
  },
  {
    type: 'Ideas',
    status: 'Working notes',
    title: 'Fintech & AI Notes',
    description: 'Informal notes from product experiments, payment concepts, AI-assisted builds, and technical learning.',
    posts: [
      { label: 'QR payment ideas', format: 'Note' },
      { label: 'AI-assisted workflow notes', format: 'Note' },
      { label: 'Product friction observations', format: 'Note' },
    ],
  },
];

export const conferenceSeries = {
  label: 'Featured series',
  title: 'Conference Strategy Series',
  status: '11-part series',
  description:
    'A no-sugarcoat guide to deciding whether tech conferences are worth it, getting funded, reading sponsor signals, and turning events into career leverage.',
  phases: [
    {
      title: 'Reality Check',
      description: 'Signal inflation, student stage, DEI budget shifts, AI hiring, and the real question of whether a conference is worth it.',
      items: ['ROI filter', 'Underclassmen vs. upperclassmen', 'DEI budget shifts', 'AI and systems thinking'],
    },
    {
      title: 'Strategy & ROI',
      description: 'How to compare conferences against referrals and internships, read sponsor intent, and spend your time where signal is highest.',
      items: ['Career lever comparison', 'Sponsor hierarchy', 'Resume parsability', 'Technical positioning'],
    },
    {
      title: 'Execution',
      description: 'The practical moves before and during the event: funding, private rooms, social signup windows, follow-up, workshops, and peer intel.',
      items: ['Funding sources', 'Pre-conference outreach', 'Social layer', 'Conference-day checklist'],
    },
  ],
  takeaways: [
    {
      label: 'Decide',
      text: 'Know when a conference is worth the cost, and when another career move has better ROI.',
    },
    {
      label: 'Prepare',
      text: 'Read the sponsor list, funding paths, and attendee rooms before you spend your energy.',
    },
    {
      label: 'Convert',
      text: 'Turn conversations into useful follow-ups, technical signal, and longer-term career leverage.',
    },
  ],
};

export const skillGroups = [
  { title: 'Languages', items: ['C++', 'Java', 'Python', 'JavaScript', 'SQL'] },
  { title: 'Backend / Systems', items: ['Systems design', 'Spring Boot', 'REST APIs', 'Apache Kafka', 'Cassandra', 'MongoDB'] },
  { title: 'Frontend / Product UI', items: ['React.js', 'Angular', 'Swagger', 'Workflow visualization', 'Self-service tools'] },
  { title: 'Infrastructure / DevOps', items: ['CI/CD', 'Nginx', 'Prometheus', 'Grafana', 'Monitoring', 'Automated testing'] },
  { title: 'Data / Applied ML', items: ['Data analysis', 'Data modeling', 'NLP', 'Logistic regression', 'KNN'] },
  { title: 'Fintech / Product', items: ['Fixed income', 'Private securities', 'Blockchain', 'CBDC', 'QR payments', 'Product thinking'] },
  { title: 'Leadership / Communication', items: ['Coaching', 'Mentoring', 'Technical communication', 'Public speaking', 'Outreach'] },
];
