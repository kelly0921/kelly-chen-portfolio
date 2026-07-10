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
    label: 'I test',
    text: 'ideas with real users, feedback loops, and small validation experiments before overbuilding.',
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
    mark: { src: '/assets/tandem-reference-mark-centered.png', label: 'Tandem', tone: 'rose' },
    status: 'Early validation MVP',
    description:
      'A NYC dating experiment for ambitious singles in their 20s, testing whether ambition type, lifestyle rhythm, risk tolerance, and future direction can become meaningful dating signals.',
    image: '/assets/project-tandem.svg',
    imageFit: 'contain',
    imageAlt: 'Tandem concept card for Dating for Complementary Ambition.',
    problem: 'Most dating apps ask what someone does, but not what era of life they are in or what kind of partner energy complements their direction.',
    user: 'Ambitious NYC singles ages 21-30: students, new grads, interns, early-career professionals, startup employees, creators, and side-project builders.',
    role: 'Product strategist, validation MVP builder, brand direction lead, and archetype-system designer.',
    learned: 'For consumer products, validation should test trust, emotional framing, and demand before building accounts, matching, chat, or app infrastructure.',
    proof: 'Built a landing page, Ambition Archetype quiz and waitlist flow, Tally-ready integration, local CSV/JSON export fallback, and lightweight analytics hooks.',
    tags: ['Validation MVP', 'Landing page', 'Ambition archetypes', 'Tally-ready', 'Consumer research'],
  },
  {
    group: 'Startup Concept',
    title: 'ApplyFirst',
    mark: { text: 'AF', label: 'ApplyFirst', tone: 'indigo' },
    status: 'Phase 1 internal MVP',
    description:
      'An early-career program monitor that helps students discover, track, and prepare for high-signal opportunities before applications open.',
    image: '/assets/project-applyfirst.svg',
    imageFit: 'contain',
    imageAlt: 'ApplyFirst concept dashboard showing opportunity signals, eligibility filters, and preparation timing.',
    problem: 'High-value internships, fellowships, insight programs, scholarships, and career-launch opportunities are scattered across lists and official pages, so students often find them too late.',
    user: 'First-year, sophomore, and emerging technical students looking for SWE, product, quant, finance tech, data, AI, fellowship, conference, and prep opportunities.',
    role: 'Product strategist, frontend MVP builder, data-model designer, and opportunity systems researcher.',
    learned: 'A useful opportunity product is not just a list. It needs timing, eligibility, confidence, verification, and next-action guidance.',
    proof: 'Built a standalone React/Vite MVP direction with searchable records, role and class-year filters, shortlist behavior, confidence labels, alert-readiness framing, and source-signal notes.',
    tags: ['React', 'Vite', 'Career tech', 'Data modeling', 'Product strategy'],
  },
];

export const projectActions = {
  SkanPay: {
    body:
      'SkanPay is a concept-stage checkout idea. I am interested in feedback from merchants, fintech builders, and people who think about redemption or payment friction.',
    label: 'Reach Out',
    href: 'mailto:kellychenmeiyi@gmail.com?subject=SkanPay%20concept%20feedback',
  },
  BeamCash: {
    body:
      'If you sell, perform, vend, collect donations, or run pop-ups in person, I am looking for early feedback on the BeamCash QR payment flow.',
    primaryLabel: 'I Want to Try BeamCash',
    primaryHref: 'mailto:kellychenmeiyi@gmail.com?subject=I%20want%20to%20try%20BeamCash',
    secondaryLabel: 'Learn More',
    secondaryHref: '#beamcash',
  },
  WebPilot: {
    body:
      'If your nonprofit, local business, or community organization needs a clearer website revamp plan, WebPilot is built around that workflow.',
    primaryLabel: 'Need a Website Revamp?',
    primaryHref: 'mailto:kellychenmeiyi@gmail.com?subject=Website%20revamp%20with%20WebPilot',
    secondaryLabel: 'Learn More',
    secondaryHref: '#webpilot',
  },
  Tandem: {
    body:
      'Tandem is live as a validation site with a landing page, Ambition Archetype quiz, and waitlist flow for ambitious NYC singles. It is not a full dating app yet.',
    primaryLabel: 'Join the Tandem Waitlist',
    primaryHref: 'https://tandem-dating.pages.dev/tandem/',
    secondaryLabel: 'Learn More',
    secondaryHref: '#tandem',
  },
  ApplyFirst: {
    body:
      'ApplyFirst is an early internal MVP for students who want to track high-signal programs before they open. I am looking for feedback from students, campus orgs, and opportunity-sharing communities.',
    primaryLabel: 'Share ApplyFirst Feedback',
    primaryHref: 'mailto:kellychenmeiyi@gmail.com?subject=ApplyFirst%20feedback',
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
    'I am looking for sellers, vendors, performers, pop-up shops, nonprofits, and donation-based groups who want to try or give feedback on a branded QR payment flow.',
  ctaLabel: 'I Want to Try BeamCash',
  ctaHref: 'mailto:kellychenmeiyi@gmail.com?subject=I%20want%20to%20try%20BeamCash',
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
  ctaTitle: 'Need A Website Revamp?',
  ctaBody:
    'I am looking for nonprofits, local businesses, and community organizations that want help turning a messy website into a clearer audit, content plan, and implementation roadmap.',
  ctaLabel: 'Ask About WebPilot',
  ctaHref: 'mailto:kellychenmeiyi@gmail.com?subject=Website%20revamp%20with%20WebPilot',
};

export const tandemCaseStudy = {
  eyebrow: 'Tandem',
  title: 'Dating For Complementary Ambition',
  subtitle:
    'An early-stage NYC dating experiment for ambitious singles in their 20s who care about lifestyle, ambition, and future direction.',
  status: 'Early validation MVP',
  role: 'Product strategist, validation MVP builder, brand direction lead, and archetype-system designer',
  stack: ['Product strategy', 'Landing page', 'Ambition Archetype quiz', 'Tally embed', 'Local CSV/JSON export', 'Analytics hooks'],
  overview:
    'Tandem is a validation-first NYC dating experiment for ambitious singles ages 21-30. The live first version is a public landing page, Ambition Archetype quiz, and waitlist flow designed to test whether ambition and life-direction compatibility can become a meaningful dating signal.',
  overviewTitle: 'A Dating Experiment Built Around Direction',
  problem:
    'Dating apps often focus on photos, prompts, location, hobbies, and job titles. They rarely capture the deeper compatibility signals that matter to people still forming their career identities: ambition type, lifestyle rhythm, risk tolerance, emotional maturity, relationship intention, and future direction.',
  problemTitle: 'Surface-Level Matching Misses The Real Fit',
  buildEyebrow: 'Validation',
  buildTitle: 'Validation MVP',
  whatIBuilt: [
    'Built a public landing page that explains the thesis, status, and quiz call to action.',
    'Developed the Ambition Archetype quiz and waitlist flow to test compatibility around career mode, risk, lifestyle, and partner energy.',
    'Added a Tally embed path for public launch, while keeping a local CSV and JSON export fallback for early testing.',
    'Instrumented lightweight analytics hooks around landing views, CTA clicks, quiz starts, waitlist completion, mixer interest, and export events.',
    'Kept the MVP intentionally scoped to landing page, quiz, and waitlist only, avoiding premature app features.',
  ],
  productDecisions: [
    {
      title: 'Validate Before Building',
      text: 'The first version is intentionally not a dating app. It has no accounts, swiping, matching, chat, payments, or backend database. The goal is to test demand before investing in product complexity.',
    },
    {
      title: 'Start With NYC',
      text: 'NYC offers a dense mix of students, interns, new grads, startup employees, creators, side-project builders, and young professionals, making it a focused launch market for intentional dating.',
    },
    {
      title: 'Archetypes As Research',
      text: 'Builder, Anchor, Accelerator, Creator, Operator, and Explorer archetypes give users a warm way to engage while collecting structured signals about ambition and lifestyle compatibility.',
    },
    {
      title: 'Dating-First, Not Corporate',
      text: 'The tone should feel warm, premium, intentional, and honest: ambitious without sounding corporate, NYC-coded without cliche, and never framed as LinkedIn dating.',
    },
  ],
  images: [
    {
      title: 'Concept Brand Card',
      src: '/assets/project-tandem.svg',
      alt: 'Tandem concept card introducing a dating product for complementary ambition.',
      caption: 'The portfolio keeps the visual intentionally brand-led while the live validation site tests positioning, quiz intent, and waitlist demand.',
    },
  ],
  workflowImage: {
    src: '/assets/project-tandem-validation-flow.svg',
    alt: 'Tandem validation flow from portfolio or landing page to Ambition Archetype quiz, waitlist, response database, and manual matching.',
  },
  screenshotEyebrow: 'Concept Visual',
  screenshotTitle: 'Connected Intent Brand Direction',
  technicalTitle: 'Lightweight MVP Funnel',
  technicalHighlights: [
    'Public landing page explains the thesis, audience, and transparent early-validation status.',
    'Tally-ready quiz path can replace the local fallback form before public traffic.',
    'Local fallback form stores submissions in the visitor browser and supports CSV/JSON export.',
    'Analytics events track landing views, CTA clicks, quiz intent, waitlist completion, mixer interest, and exports.',
    'Validation target is 100 qualified NYC singles ages 21-30 completing the quiz and joining the waitlist.',
  ],
  lessons: [
    'A cultural insight becomes stronger when it is translated into a testable product hypothesis.',
    'Early consumer validation should measure trust, intent, and qualified demand before product complexity increases.',
    'Dating products need emotional clarity and safety; the brand cannot feel like finance, networking, or fake startup hype.',
  ],
  nextSteps: [
    'Use the live validation site to gather waitlist interest, quiz completions, and qualitative feedback from the first NYC audience.',
    'Add a real analytics provider such as Plausible, Google Analytics, or Google Tag Manager.',
    'Refine the launch funnel, Open Graph preview metadata, and mobile polish as early users interact with the site.',
  ],
  ctaTitle: 'Join The Tandem Waitlist',
  ctaBody:
    'Tandem is live as an early validation MVP. The current goal is to learn whether ambitious NYC singles ages 21-30 want a dating experience built around lifestyle, ambition, and future direction.',
  ctaLabel: 'Join the Tandem Waitlist',
  ctaHref: 'https://tandem-dating.pages.dev/tandem/',
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

export const speakingMoments = [
  {
    src: '/assets/speaking-conferences-careers-presenting.jpg',
    alt: 'Kelly Chen presenting From Conferences to Careers in a lecture room.',
    caption: 'Presenting From Conferences to Careers, a student-focused session on networking and career leverage.',
  },
  {
    src: '/assets/speaking-conferences-careers-room.jpg',
    alt: "Audience attending Kelly Chen's From Conferences to Careers presentation.",
    caption: 'A wider room view from the session, showing the audience and workshop setup.',
  },
];

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
    icon: 'access',
    description: 'Conference pathways, student communities, sponsorship access, and making technical spaces easier to enter.',
  },
  {
    title: 'Early-Career Engineering',
    icon: 'engineering',
    description: 'Internship lessons, technical growth, mentoring, interview preparation, and learning how to explain systems clearly.',
  },
  {
    title: 'Fintech, Product & Payments',
    icon: 'fintech',
    description: 'Financial infrastructure, payment friction, QR payment concepts, product thinking, and customer-facing systems.',
  },
  {
    title: 'AI-Assisted Building',
    icon: 'ai',
    description: 'Using AI tools to prototype workflows, organize ideas, review output, and turn rough concepts into usable products.',
  },
];

export const communityMoments = [
  {
    src: '/assets/community-summer-hub-group.jpg',
    alt: 'Group photo from a Rewriting the Code NYC Summer Tech Hub event.',
  },
  {
    src: '/assets/community-summer-hub-room.jpg',
    alt: 'Attendees gathered in a room during a NYC Summer Tech Hub event.',
  },
  {
    src: '/assets/community-summer-hub-hosted-room.jpg',
    alt: 'RTC NYC Summer Tech Hub attendees gathered around a conference table during a hosted event.',
  },
  {
    src: '/assets/community-summer-hub-facilitation.jpg',
    alt: 'Students gathered around a table during a Rewriting the Code board game night organized by Kelly Chen.',
  },
];

export const communityConferenceMoments = [
  {
    src: '/assets/community-conference-campus-workshop.jpg',
    alt: 'Students gathered after a From Conferences to Careers campus workshop.',
    label: 'Campus Workshop',
  },
  {
    src: '/assets/community-conference-anitab.jpg',
    alt: 'Kelly Chen with students at an AnitaB.org conference space.',
    label: 'GHC 2024',
  },
  {
    src: '/assets/community-conference-cohort.jpg',
    alt: 'Large student conference cohort gathered outdoors in a city setting.',
    label: 'Forte C2B NYC 2024 Attendees',
  },
  {
    src: '/assets/community-conference-leadership.jpg',
    alt: 'Student group at the National Campus to Business Leadership Conference.',
    label: 'Lehigh at Forte C2B NYC 2024',
  },
];

export const communityWork = [
  {
    title: 'Girls Who Code College Loop at Lehigh',
    type: 'Past leadership',
    role: 'Founder & President',
    timeframe: 'Apr 2024 - May 2025',
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
    type: 'Past leadership',
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
    type: 'Ongoing focus',
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
    type: 'Past involvement',
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
    title: 'Resource Kits & Trackers',
    description: 'Reusable guides, checklists, and trackers for students navigating programs, fellowships, and technical communities.',
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

export const opportunitySystems = {
  eyebrow: 'Tools from the notes',
  title: 'Opportunity Systems',
  description:
    'The conference series is turning into a practical resource layer: a library, tracker ideas, and planning tools that help emerging engineers know what to watch, when to prepare, and how to turn access into leverage.',
  cta: {
    label: 'Follow the notes on LinkedIn',
    href: 'https://www.linkedin.com/in/kellychen0921/',
  },
  items: [
    {
      status: 'Resource layer',
      title: 'Student Opportunity Library',
      description:
        'A curated base of programs, fellowships, scholarships, technical communities, and conference funding paths worth watching.',
      tags: ['Curated programs', 'Timing notes', 'Student access'],
    },
    {
      status: 'Researching',
      title: 'Opportunity Signal Tracker',
      description:
        'A tracker concept for monitoring high-value opportunities through application season patterns, page changes, and verified opening signals.',
      tags: ['Opening signals', 'Confidence scores', 'Alerts'],
    },
    {
      status: 'Building',
      title: 'Conference Leverage Planner',
      description:
        'A planning system that helps students decide if a conference is worth it, what funding to pursue, and how to prepare before the room gets crowded.',
      tags: ['ROI filter', 'Funding paths', 'Prep plan'],
    },
    {
      status: 'Prototype idea',
      title: 'Sponsor List Analyzer',
      description:
        'A feature idea inside the conference planner: turn sponsor lists into booth priorities, research prompts, and better questions for engineers.',
      tags: ['Sponsor signals', 'Booth strategy', 'Question bank'],
    },
  ],
};

export const conferenceSeries = {
  label: 'Featured series',
  title: 'Conference Strategy Series',
  status: '11-part series',
  description:
    'A no-sugarcoat guide to deciding whether tech conferences are worth it, getting funded, reading sponsor signals, and turning events into career leverage.',
  primaryCta: {
    label: 'Read on LinkedIn',
    href: 'https://www.linkedin.com/in/kellychen0921/recent-activity/all/',
  },
  brief: [
    {
      label: 'For',
      text: 'Students and emerging engineers deciding where to spend time, money, and attention.',
    },
    {
      label: 'Format',
      text: 'Short LinkedIn posts that can later become a conference kit, planner, and resource pack.',
    },
    {
      label: 'Core idea',
      text: 'Conferences are not automatically worth it. They work when you use them for leverage, not just effort.',
    },
  ],
  phases: [
    {
      kicker: 'Phase 1',
      title: 'Reality Check',
      description: 'Signal inflation, student stage, DEI budget shifts, AI hiring, and the real question of whether a conference is worth it.',
      posts: [
        { day: 'Day 1', title: 'Is a conference worth it for you this year?' },
        { day: 'Day 2', title: 'Underclassmen vs. upperclassmen: conferences are not equal' },
        { day: 'Day 3', title: 'How budget cuts changed the room' },
        { day: 'Day 4', title: 'Why systems thinking is becoming the stronger signal' },
        { day: 'Day 5', title: 'Paying out of pocket? Use the skin-in-the-game filter' },
      ],
    },
    {
      kicker: 'Phase 2',
      title: 'Strategy & ROI',
      description: 'How to compare conferences against referrals and internships, read sponsor intent, and spend your time where signal is highest.',
      posts: [
        { day: 'Day 6', title: 'ROI breakdown: conferences vs. referrals vs. internships' },
        { day: 'Day 7', title: 'The quiet mistakes students make before day one' },
        { day: 'Day 8', title: 'What sponsor tiers actually tell you' },
        { day: 'Day 9', title: 'How to stay visible when resume systems filter by data' },
      ],
    },
    {
      kicker: 'Phase 3',
      title: 'Execution',
      description: 'The practical moves before and during the event: funding, private rooms, social signup windows, follow-up, workshops, and peer intel.',
      posts: [
        { day: 'Day 10', title: 'How to navigate workshops, panels, peers, and the social layer' },
        { day: 'Day 11', title: 'Where conference funding actually comes from' },
      ],
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
