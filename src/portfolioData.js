export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Speaking', href: '#speaking' },
  { label: 'Community', href: '#community' },
  { label: 'Content', href: '#content' },
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
    id: 'content',
    title: 'Content',
    description: 'Informal LinkedIn ideas, newsletter-style posts, and useful resources for students and builders.',
    href: '#content',
  },
];

export const currentFocusNotes = [
  {
    type: 'Building',
    title: 'BeamCash payment flow',
    description: 'Shaping a QR checkout experience for sellers who need buyers, donors, or supporters to pay without creating another account.',
    note: 'Seller setup, QR checkout, buyer flow',
  },
  {
    type: 'Testing',
    title: 'Product feedback loops',
    description: 'Using BeamCash, WebPilot, SkanPay, and Tandem as focused builds for usability feedback instead of abstract concepts.',
    note: 'Beta conversations and case studies',
  },
  {
    type: 'Publishing',
    title: 'Conference leverage resources',
    description: 'Turning the LinkedIn conference series into guides, trackers, and templates once the delivery flow is clear.',
    note: 'Resource packaging',
  },
  {
    type: 'Learning',
    title: 'Financial systems in practice',
    description: 'Building production habits through fixed income private securities work and bringing that lens back into product decisions.',
    note: 'C++, systems, reliability',
  },
];

export const audiencePathways = [
  {
    label: 'Engineering Work',
    tone: 'blue',
    title: 'See how the systems come together',
    description: 'Experience, resume, and case studies across fintech, AI workflows, and MVP architecture.',
    href: '#experience',
  },
  {
    label: 'Product / Beta',
    tone: 'teal',
    title: 'Explore the active builds',
    description: 'BeamCash, WebPilot, Tandem, ApplyFirst, and SkanPay with clear next steps for feedback or access.',
    href: '#projects',
  },
  {
    label: 'Student Resources',
    tone: 'gold',
    title: 'Find practical opportunity resources',
    description: 'ApplyFirst, conference guides, beta resources, and future tools for early-career paths.',
    href: '#content',
  },
  {
    label: 'Speaking / Partners',
    tone: 'indigo',
    title: 'Start a conversation or event',
    description: 'Workshops, talks, community programs, and partnerships around leverage and access.',
    href: '#speaking',
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
    bullets: [
      'Developed and implemented a self-service onboarding tool to automate the CIU onboarding event process, reducing risk and operational costs while cutting onboarding time from hours to minutes.',
      'Built frontend, backend integration, and data management using React, Spring Boot, Cassandra, and Kafka.',
      'Created a data processing pipeline that dynamically retrieves and validates topic metadata for improved system performance and reliability.',
      'Used Apache Kafka for real-time data ingestion and user-defined configurations to improve throughput, producer-rate insight, and onboarding flexibility.',
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
    bullets: [
      'Implemented an approval workflow state machine connected to RESTful APIs with visualization using Spring Boot, Angular, MongoDB, and Swagger.',
      'Enabled users to track the status of uploaded billing line objects and standardized workflow states.',
      'Created a reusable Spring Boot library with an API for password encryption and decryption, facilitating code reuse across multiple team applications.',
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
    bullets: [
      'Completed 12 weeks of structured curriculum-based learning covering core Production Engineering topics, supplemented with events and workshops hosted by industry experts.',
      'Created an open-source personal portfolio website template using Python, Flask, Jinja, MySQL, Nginx, and unittest.',
      'Automated testing and deployment workflow using CI/CD.',
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
    bullets: [
      'Selected for a project-based fellowship with 7 weeks of technical training, workshops, and mentorship for high-achieving women from over 8,000 applications with less than 5% acceptance rate.',
      'Analyzed tweets using natural language processing to identify market sentiment toward Apple.',
      'Built and compared logistic regression and k-nearest neighbors models to predict Apple stock price movement.',
      'Presented findings through a collaborative data science workflow with other top PhDs.',
    ],
    skills: ['Data analysis', 'Data modeling', 'NLP', 'Logistic regression', 'KNN', 'Python'],
  },
];

export const projects = [
  {
    group: 'Startup Concept',
    title: 'SkanPay',
    mark: { text: 'SP', label: 'SkanPay', tone: 'teal' },
    status: 'Public concept site',
    description:
      'A QR-based payment and coupon redemption concept focused on reducing checkout friction.',
    image: '/assets/project-skanpay.svg',
    imageAlt: 'SkanPay product preview showing a QR checkout flow, coupon stack, and payment confirmation.',
    systemQuestion: 'How can payment and redemption happen in one checkout moment without adding work for the customer or merchant?',
    problem: 'Coupon redemption, gift cards, and payments often happen through separate steps.',
    user: 'Customers, merchants, restaurants, small sellers, and staff handling checkout.',
    role: 'Co-founder, product thinker, payment flow researcher, patent contributor.',
    learned: 'Reducing friction is not just a technical problem. It depends on user flow, trust, onboarding, and merchant behavior.',
    proof: 'Product thinking across checkout systems, merchant onboarding, and fintech user experience.',
    tags: ['QR payments', 'Product strategy', 'Checkout', 'MVP', 'Fintech'],
  },
  {
    group: 'Experimental Infrastructure',
    title: 'WriteGuard',
    mark: { src: '/assets/project-writeguard-mark.svg', label: 'WriteGuard protected operation mark', tone: 'teal' },
    status: 'OpenAI Build Week MVP / external validation next',
    description:
      'A TypeScript execution-safety layer for analyzing, approving, generating, verifying, and coordinating consequential AI-agent actions.',
    image: '/assets/project-writeguard-thumbnail.png',
    imageAlt: 'WriteGuard product thumbnail showing AI-agent execution safety, a protected action pipeline, and a guarded simulation result.',
    systemQuestion: 'How can agent teams trust consequential actions when the external provider outcome becomes uncertain?',
    problem: 'Permission checks can decide whether an agent should act, but they cannot prove whether a timed-out refund, message, order, or access change already happened.',
    user: 'Developers building MCP tools and AI agents, backend/platform engineers, reliability teams, and teams evaluating agentic commerce or consequential automation.',
    role: 'Founder, product architect, and founding engineer responsible for the product thesis, architecture, validation strategy, and evidence boundaries.',
    learned: 'AI can recommend safety policy, but trust depends on deterministic approval, generation, verification, durable execution memory, and honest evidence claims.',
    proof: 'Build Week MVP with GPT-5.6 recommendation-only analysis, deterministic generation, verification receipts, packed simulated pilots, and credential-free Windows/Ubuntu evaluation.',
    tags: ['AI infrastructure', 'TypeScript', 'GPT-5.6', 'MCP', 'PostgreSQL'],
  },
  {
    group: 'Experimental Infrastructure',
    title: 'Ticket Assistant',
    mark: { text: 'TA', label: 'Ticket Assistant', tone: 'teal' },
    status: 'Private personal MVP',
    description:
      'A private TypeScript and Cloudflare workflow that coordinates movie and live-event discovery, labeled email signals, provider comparisons, and safe official-site handoffs.',
    image: '/assets/project-ticket-assistant.svg',
    imageFit: 'contain',
    imageAlt: 'Ticket Assistant private workflow preview showing Movies, Live Events, Inbox, and official-site handoff layers with synthetic data.',
    systemQuestion: 'How can ticket planning feel calmer without automating purchases or taking control away from the user?',
    problem: 'Ticket planning spreads across showtimes, sale windows, inbox signals, provider tabs, vouchers, and deadline reminders.',
    user: 'Built for one private user; the broader pattern fits frequent moviegoers and event fans who want organized signals without handing over accounts or checkout.',
    role: 'End-to-end product designer and builder across workflow design, safety boundaries, TypeScript architecture, API integrations, encrypted storage, and private deployment.',
    learned: 'The useful boundary was not maximum automation. It was automating attention, comparison, and preparation while preserving human control over sign-in, checkout, and payment.',
    proof: 'Implemented a private Node.js/SQLite and Cloudflare Workers/D1 workflow with provider adapters, read-only Gmail signals, OAuth, Pub/Sub, scheduled reconciliation, encrypted sensitive data, notifications, and synthetic tests.',
    tags: ['TypeScript', 'Cloudflare Workers', 'D1', 'Gmail API', 'Provider APIs'],
  },
  {
    group: 'Built and in Progress',
    title: 'BeamCash',
    mark: { text: 'BC', label: 'BeamCash', tone: 'gold', src: '/assets/project-beamcash-icon.svg' },
    status: 'Seller feedback wanted',
    description:
      'A mobile-first QR payment MVP that lets in-person sellers collect through one branded checkout without buyers joining another payment app.',
    image: '/assets/project-beamcash-mobile-seller-dashboard.png',
    imageFit: 'contain',
    imageFrame: 'phone',
    imageAlt: 'BeamCash mobile seller dashboard showing balance, payment activity, and a ready QR code.',
    systemQuestion: 'How can a seller collect from anyone without depending on the buyer having the same payment app?',
    problem: 'Small in-person sellers lose payments when customers do not carry cash or use the same payment app.',
    user: 'Street performers, food vendors, pop-up shops, handmade sellers, nonprofits, and donation-based groups.',
    role: 'Founder, product builder, mobile app developer, and payment UX designer.',
    learned: 'The strongest value is payment reach: buyers and donors should be able to pay without creating another account or matching the seller on the same app.',
    proof: 'End-to-end mobile MVP work across seller setup, branded QR signage, buyer checkout, payment state, alerts, and Stripe-ready architecture.',
    tags: ['React Native', 'Expo', 'TypeScript', 'Stripe', 'QR payments'],
  },
  {
    group: 'Built and in Progress',
    title: 'WebPilot',
    mark: { text: 'WP', label: 'WebPilot', tone: 'indigo', src: '/assets/project-webpilot-icon.svg' },
    status: 'Prototype feedback wanted',
    description:
      'An AI website operations dashboard that turns messy website feedback into a reviewed action plan consultants can actually deliver.',
    image: '/assets/project-webpilot-command-center.png',
    imageFit: 'contain',
    imageAlt: 'WebPilot website command center showing guided workflow steps and reusable website context.',
    systemQuestion: 'How can AI-generated website advice become reviewed, organized, and ready for real implementation?',
    problem: 'Small businesses and nonprofits often know their websites need work, but feedback gets scattered across audits, notes, screenshots, and unclear priorities.',
    user: 'Website consultants, small nonprofits, local businesses, and agencies managing website improvement work.',
    role: 'Product strategist, full-stack builder, AI workflow designer, and local MVP validator.',
    learned: 'The value of an AI product is often the workflow around the generation: intake, context, review, client delivery, implementation, and follow-up.',
    proof: 'Structured AI task architecture, prompt versioning, editable outputs, client request tracking, PageSpeed evidence, and local backup/restore workflows.',
    tags: ['Next.js', 'TypeScript', 'OpenAI API', 'Product design', 'AI workflows'],
  },
  {
    group: 'Startup Concept',
    title: 'Tandem',
    mark: { src: '/assets/tandem-reference-mark-centered.png', label: 'Tandem Connected Intent mark', tone: 'rose' },
    status: 'Live validation site',
    description:
      'A NYC dating experiment for ambitious singles in their 20s, testing whether ambition type, lifestyle rhythm, risk tolerance, and future direction can become meaningful dating signals.',
    image: '/assets/project-tandem-home-hero.png',
    imageAlt: 'Tandem landing page hero for Dating for Complementary Ambition.',
    systemQuestion: 'How can a dating experience match people by complementary ambition, lifestyle rhythm, and future direction?',
    problem: 'Most dating apps ask what someone does, but not what era of life they are in or what kind of partner energy complements their direction.',
    user: 'Ambitious NYC singles ages 21-30: students, new grads, interns, early-career professionals, startup employees, creators, and side-project builders.',
    role: 'Product strategist, validation MVP builder, brand direction lead, and archetype-system designer.',
    learned: 'For consumer products, validation should test trust, emotional framing, and demand before building accounts, matching, chat, or app infrastructure.',
    proof: 'Built a public landing page, Ambition Archetype quiz and waitlist flow, Typeform-ready integration path, local CSV/JSON export fallback, and lightweight analytics hooks.',
    tags: ['Validation MVP', 'Landing page', 'Ambition archetypes', 'Typeform-ready', 'Consumer research'],
  },
  {
    group: 'Startup Concept',
    title: 'ApplyFirst',
    mark: { text: 'AF', label: 'ApplyFirst', tone: 'indigo', src: '/assets/applyfirst-mark.svg' },
    status: 'Private beta / early access',
    description:
      'An early-career opportunity system in private beta, built to help students discover, track, and prepare for high-signal programs before applications open.',
    image: '/assets/project-applyfirst-programs-desktop.png',
    imageFit: 'contain',
    imageFrame: 'desktop',
    imageAlt: 'ApplyFirst programs page showing searchable opportunity records, filters, shortlist actions, and status labels.',
    systemQuestion: 'How can early-discovery programs become easier for students to find, track, and act on before the window closes?',
    problem: 'High-value internships, fellowships, insight programs, scholarships, and career-launch opportunities are scattered across lists and official pages, so students often find them too late.',
    user: 'First-year, sophomore, and emerging technical students looking for SWE, product, quant, finance tech, data, AI, fellowship, conference, and prep opportunities.',
    role: 'Product strategist, frontend MVP builder, data-model designer, and opportunity systems researcher.',
    learned: 'A useful opportunity product is not just a list. It needs timing, eligibility, confidence, verification, and next-action guidance.',
    proof: 'Built a standalone React/Vite MVP direction with searchable records, student preference filters, shortlist behavior, confidence labels, contribution flow, and alert-readiness framing.',
    tags: ['React', 'Vite', 'Career tech', 'Data modeling', 'Product strategy'],
  },
];

export const projectActions = {
  SkanPay: {
    body:
      'SkanPay has a public website for the QR payment and redemption concept. It is useful context for merchants, fintech builders, and people thinking about checkout friction.',
    label: 'Visit SkanPay',
    href: 'https://skanpay.us/',
  },
  BeamCash: {
    body:
      'If you sell, perform, vend, collect donations, or run pop-ups in person, I am looking for feedback on a QR checkout buyers can use without matching your payment app.',
    primaryLabel: 'Try BeamCash as a Seller',
    primaryHref: 'mailto:kellychenmeiyi@gmail.com?subject=I%20want%20to%20try%20BeamCash',
    secondaryLabel: 'Learn More',
    secondaryHref: '#beamcash',
  },
  WebPilot: {
    body:
      'If your nonprofit, local business, or community organization has scattered website feedback, WebPilot is built to turn it into a reviewed revamp plan.',
    primaryLabel: 'Ask About a Website Revamp',
    primaryHref: 'mailto:kellychenmeiyi@gmail.com?subject=Website%20revamp%20with%20WebPilot',
    secondaryLabel: 'Learn More',
    secondaryHref: '#webpilot',
  },
  WriteGuard: {
    body:
      'WriteGuard is a Build Week MVP for teams evaluating AI-agent workflows that perform consequential external actions. It is ready for external evaluation, not production-certified.',
    primaryLabel: 'Evaluate WriteGuard',
    primaryHref: 'mailto:kellychenmeiyi@gmail.com?subject=WriteGuard%20external%20evaluation',
    secondaryLabel: 'View Case Study',
    secondaryHref: '#writeguard',
  },
  Tandem: {
    body:
      'Tandem is live as a validation site with a landing page, Ambition Archetype quiz, and waitlist flow for ambitious NYC singles. It is not a full dating app yet.',
    primaryLabel: 'Join Tandem Waitlist',
    primaryHref: 'https://tandem-dating.pages.dev/tandem/',
  },
  ApplyFirst: {
    body:
      'ApplyFirst is in early access while I validate which opportunity signals, alerts, and student resource views are actually useful.',
    primaryLabel: 'Join ApplyFirst Waitlist',
    primaryHref: 'https://applyfirst-careers.pages.dev/',
    secondaryLabel: 'View Product Details',
    secondaryHref: '#applyfirst',
  },
};

export const writeGuardCaseStudy = {
  eyebrow: 'WriteGuard',
  title: 'Execution Safety for Consequential AI Actions',
  subtitle:
    'A TypeScript developer-infrastructure layer that helps agent teams turn consequential MCP tools into explicitly approved, deterministically generated, and independently verified integrations.',
  status: 'OpenAI Build Week MVP / private repository / external validation next',
  role: 'Founder, product architect, and founding engineer',
  stack: ['TypeScript', 'Node.js', 'GPT-5.6', 'OpenAI Responses API', 'MCP TypeScript SDK', 'PostgreSQL', 'Zod', 'Vitest'],
  valuePitch: {
    eyebrow: 'For agent teams moving from recommendations to actions',
    title: 'Let AI help analyze risk, but keep authority deterministic.',
    body:
      'WriteGuard separates model recommendations, developer approval, typed generation, independent verification, and runtime enforcement so one intended action does not become repeated real-world effects.',
    audience: ['MCP Tools', 'AI Platform Teams', 'Backend Engineers', 'Stripe Refund Workflows', 'Agentic Commerce'],
    storyboard: [
      {
        mark: '01',
        label: 'Analyze',
        title: 'Recommendations are not authority',
        text: 'GPT-5.6 can recommend consequential-write classification, identity fields, risks, redaction fields, and failure scenarios, but it cannot approve policy.',
      },
      {
        mark: '02',
        label: 'Approve',
        title: 'Developer approval binds the policy',
        text: 'The approved operation identity, reconciliation strategy, redaction fields, and supported failures are bound to validated source artifacts.',
      },
      {
        mark: '03',
        label: 'Verify',
        title: 'Generated work must prove itself',
        text: 'WriteGuard verifies inventory, digests, provenance, imports, compilation, provider boundaries, receipts, and controlled failure tests before integration.',
      },
    ],
  },
  systemLens: {
    eyebrow: 'Product Thesis',
    title: 'The Missing Layer Is Execution Memory',
    body:
      'Permission checks say whether an agent may act. WriteGuard records what happened after the action starts.',
    items: [
      {
        label: 'Business Operation Identity',
        text: 'A new tool-call ID can still point to the same refund, message, order, or access change.',
      },
      {
        label: 'Explicit Uncertainty',
        text: 'UNKNOWN means the provider may have acted, so the next move is evidence, not another write.',
      },
      {
        label: 'Evidence Boundaries',
        text: 'Receipts separate simulated behavior, passed checks, limitations, and not-run provider validation.',
      },
    ],
  },
  overview:
    'WriteGuard is a TypeScript execution-safety layer for consequential actions performed by AI agents. It gives applications the execution memory needed to carry one intent across retries, concurrency, crashes, and uncertain provider outcomes.',
  overviewEyebrow: 'Overview',
  overviewTitle: 'One Intent, Reviewable Execution',
  problem:
    'A concrete example: Stripe can create a refund before the worker loses the response. If the agent retries without execution memory, one approved refund can become two. The same risk applies to emails, orders, bookings, and access changes.',
  problemEyebrow: 'Why It Matters',
  problemTitle: 'Trusting Agents to Act',
  whatIBuilt: [
    'MCP-style tools normalized into runtime-validated contracts.',
    'Optional GPT-5.6 analysis for identity fields, risks, reconciliation constraints, sensitive fields, and missing information.',
    'Approval gates so model recommendations cannot silently become executable policy.',
    'Typed wrapper generation, manifests, content digests, provider boundaries, and failure tests with zero OpenAI calls during standard generation.',
    'Verification receipts for inventory, provenance, imports, compilation, provider boundaries, limitations, and optional controlled tests.',
    'Runtime coordination for stable operation identity, UNKNOWN outcomes, reconciliation, postconditions, and redacted evidence.',
  ],
  buildLabels: ['Tool Contracts', 'AI Analysis', 'Approval Gate', 'Typed Generation', 'Verification', 'Execution Memory'],
  buildSummary:
    'The build is organized as an execution-safety pipeline: understand the tool, review the policy, generate typed code, verify the artifact, and coordinate the runtime outcome.',
  buildSummaryLabel: 'Execution Model',
  decisionEyebrow: 'Product Logic',
  decisionTitle: 'Where AI Stops',
  decisionIntro:
    'WriteGuard does not try to become a general agent framework. It focuses on the boundary where agent intent becomes a real-world operation.',
  productDecisions: [
    {
      title: 'Separate recommendation from authority',
      text: 'GPT-5.6 can help interpret tool semantics, but developer approval owns the final identity, reconciliation strategy, redaction fields, and supported failures.',
    },
    {
      title: 'Use business identity',
      text: 'The protected operation identity comes from the intended business effect, not a transient framework call ID that may change after replay.',
    },
    {
      title: 'Preserve uncertainty',
      text: 'A timeout after provider success is not ordinary failure. UNKNOWN keeps the system conservative until evidence can close the operation.',
    },
    {
      title: 'Make evidence honest',
      text: 'Receipts distinguish static verification, simulated behavior, limitations, not-run real providers, and production readiness instead of hiding gaps behind one green check.',
    },
    {
      title: 'Sequence the product deliberately',
      text: 'A dashboard, hosted control plane, billing, and team workflows should follow external developer demand, not precede the integration workflow.',
    },
  ],
  technicalHighlights: [
    'Package split across core runtime, optional GPT-5.6 analyzer, and deterministic generator.',
    'GPT-5.6 stays in recommendation-only design-time analysis; generation and runtime make zero OpenAI calls.',
    'PostgreSQL-backed state coordinates retries, concurrency, UNKNOWN outcomes, reconciliation, receipts, and redacted tracing.',
    'Packed refund and email pilots run without API keys, provider keys, PostgreSQL, Docker, or workspace-only imports.',
    'Evidence includes 172 unit tests, 20 integration tests, generated failure scenarios, adapter scenarios, packed-pilot tests, and a 9-of-9 sanitized GPT-5.6 analyzer check.',
    'Current refund evidence is simulated. Stripe MCP refund and Stripe Link CLI test-mode pilots are planned provider-specific integrations, not current production claims.',
  ],
  heroImage: {
    title: 'Execution Safety Preview',
    src: '/assets/project-writeguard-thumbnail.png',
    alt: 'WriteGuard product preview showing execution safety for consequential AI actions, a protected action pipeline, and sandbox validation.',
    kind: 'diagram',
  },
  images: [
    {
      title: 'Product Journey',
      src: '/assets/project-writeguard-product-journey.png',
      alt: 'WriteGuard product journey showing tool analysis, developer review, approval, deterministic generation, verification, and integration.',
      caption: 'The product path separates recommendation, approval, generation, verification, and integration.',
      fit: 'contain',
      kind: 'diagram',
    },
    {
      title: 'Unsafe vs Guarded',
      src: '/assets/project-writeguard-unsafe-vs-guarded.png',
      alt: 'Sandbox demo comparison showing unsafe retry creating two external effects while WriteGuard uses stable business-operation identity to reconcile before another provider write.',
      caption: 'The simulated demo shows why the retry decision matters: unsafe retry repeats the external effect; guarded execution resolves one verified operation.',
      fit: 'contain',
      kind: 'diagram',
    },
    {
      title: 'Verification Receipt',
      src: '/assets/project-writeguard-verification-receipt.png',
      alt: 'WriteGuard verification receipt showing passed evidence, limitations, and not-run real-provider checks.',
      caption: 'The receipt keeps evidence precise by separating simulated behavior, passed checks, limitations, and real-provider work that is still not run.',
      fit: 'contain',
      kind: 'diagram',
    },
  ],
  galleryImages: [
    {
      title: 'Product Journey',
      src: '/assets/project-writeguard-product-journey.png',
      alt: 'WriteGuard product journey showing tool analysis, developer review, approval, deterministic generation, verification, and integration.',
      caption: 'Tool -> Analyze -> Review -> Approve -> Generate -> Verify -> Integrate.',
      fit: 'contain',
      kind: 'diagram',
    },
    {
      title: 'Unsafe vs Guarded',
      src: '/assets/project-writeguard-unsafe-vs-guarded.png',
      alt: 'Sandbox demo comparison showing unsafe retry creating two external effects while WriteGuard uses stable business-operation identity to reconcile before another provider write.',
      caption: 'The evidence shown here is simulated and labeled, not real-provider certification.',
      fit: 'contain',
      kind: 'diagram',
    },
    {
      title: 'Verification Receipt',
      src: '/assets/project-writeguard-verification-receipt.png',
      alt: 'WriteGuard verification receipt showing passed evidence, limitations, and not-run real-provider checks.',
      caption: 'Passed checks, limitations, and not-run evidence stay visually separate.',
      fit: 'contain',
      kind: 'diagram',
    },
  ],
  galleryStyle: 'storyboard',
  storyboardScenes: [
    {
      label: 'Design-time safety',
      title: 'Separate AI Recommendation From Approval',
      caption:
        'The project journey shows the safer path: analyze the tool, review the recommendation, approve the policy, generate typed code, verify the artifact, then integrate.',
      layout: 'wide',
      images: [
        {
          title: 'Product Journey',
          src: '/assets/project-writeguard-product-journey.png',
          alt: 'WriteGuard product journey showing tool analysis, developer review, approval, deterministic generation, verification, and integration.',
          fit: 'contain',
          kind: 'diagram',
        },
      ],
    },
    {
      label: 'Sandbox behavior',
      title: 'Compare Unsafe Retry Against Guarded Execution',
      caption:
        'The demo comparison makes the technical risk visible: retrying without operation memory can repeat the effect; guarded execution reconciles before acting again.',
      layout: 'wide',
      images: [
        {
          title: 'Unsafe vs Guarded',
          src: '/assets/project-writeguard-unsafe-vs-guarded.png',
          alt: 'Sandbox demo comparison showing unsafe retry creating two external effects while WriteGuard uses stable business-operation identity to reconcile before another provider write.',
          fit: 'contain',
          kind: 'diagram',
        },
      ],
    },
    {
      label: 'Evidence boundary',
      title: 'Show What Passed, What Is Simulated, and What Is Not Run',
      caption:
        'The receipt keeps validation honest by separating passed checks, simulated behavior, limitations, and real-provider work that still needs external testing.',
      layout: 'wide',
      images: [
        {
          title: 'Verification Receipt',
          src: '/assets/project-writeguard-verification-receipt.png',
          alt: 'WriteGuard verification receipt showing passed evidence, limitations, and not-run real-provider checks.',
          fit: 'contain',
          kind: 'diagram',
        },
      ],
    },
  ],
  screenshotEyebrow: 'Build Week Evidence',
  screenshotTitle: 'Product Journey, Simulation, and Verification Receipts',
  demo: {
    eyebrow: 'Terminal Demo',
    title: 'Credential-Free Evaluation Walkthrough',
    body:
      'The demo walks through the packaged evaluation path and shows how WriteGuard presents simulated behavior, verification output, and limitations without requiring API keys or provider credentials.',
    label: 'Watch Terminal Demo',
    href: 'https://drive.google.com/file/d/1872qjbUBbyZ1tifOpQ0uvWiPesabtdjU/view?usp=drivesdk',
  },
  buildEyebrow: 'Implementation',
  buildTitle: 'What The Build Proves',
  technicalEyebrow: 'Runtime Logic',
  technicalTitle: 'How WriteGuard Handles Execution Uncertainty',
  technicalSummary:
    'The runtime model complements the design-time approval flow. It is the part that preserves one intended business operation when retries, crashes, concurrency, or provider uncertainty make the outcome ambiguous.',
  technicalFlow: [
    {
      label: 'Identity',
      title: 'Bind calls to one operation',
      text: 'Repeated tool calls can point back to one intended refund, message, order, booking, deployment, or access change.',
    },
    {
      label: 'Uncertainty',
      title: 'Preserve UNKNOWN outcomes',
      text: 'If the provider may have acted, the next move is reconciliation where supported, not another consequential attempt.',
    },
    {
      label: 'Closure',
      title: 'Close with evidence',
      text: 'The operation closes as confirmed, failed, or needs review with redacted evidence and limitations attached.',
    },
  ],
  lessons: [
    'The hardest design decision was deciding where AI should stop: semantic analysis can be useful, but trusted runtime policy needs explicit approval and deterministic verification.',
    'Agent reliability is an execution-semantics problem as well as a model-reasoning problem.',
    'Provider idempotency works only when the application chooses and durably reuses the correct logical operation identity.',
    'Cross-platform, packed-package, and clean-consumer validation reveal integration problems that workspace-only tests miss.',
    'A green check is only useful when it says what actually passed, what was simulated, what has limitations, and what has not been run.',
  ],
  nextSteps: [
    'Resolve the current @hono/node-server dependency advisory and rerun the pilot-readiness workflow after the patched dependency path is available.',
    'Validate onboarding with unaffiliated agent and backend developers instead of treating automated command runtime as customer onboarding time.',
    'Run the planned Stripe MCP refund and Stripe Link CLI purchase test-mode pilots with freshly supplied credentials before claiming real-provider readiness.',
    'Decide whether the public card should prioritize case-study reading, demo watching, or evaluator recruitment after external feedback.',
  ],
  ctaTitle: 'Interested in Evaluating WriteGuard?',
  ctaBody:
    'I am looking for focused external feedback from developers building TypeScript agent workflows, MCP tools, or backend integrations with consequential external actions. WriteGuard is a Build Week MVP and not production-certified.',
  ctaLabel: 'Evaluate WriteGuard',
  ctaHref: 'mailto:kellychenmeiyi@gmail.com?subject=WriteGuard%20external%20evaluation',
};

export const beamCashCaseStudy = {
  eyebrow: 'BeamCash',
  title: 'QR Payments for Sellers',
  subtitle:
    'A mobile-first MVP for sellers, performers, vendors, and donation-based groups accepting in-person payments.',
  status: 'In-progress local MVP',
  role: 'Founder, product builder, mobile app developer, and payment UX designer',
  stack: ['React Native', 'Expo', 'TypeScript', 'Expo Router', 'Stripe-ready architecture', 'QR generation', 'Express backend'],
  heroImage: {
    title: 'Seller Dashboard',
    src: '/assets/project-beamcash-mobile-seller-dashboard.png',
    alt: 'BeamCash mobile seller dashboard showing available balance, payment activity, readiness, and QR access.',
    kind: 'mobile',
  },
  valuePitch: {
    title: 'Collect from people outside your payment app.',
    body:
      'BeamCash gives sellers and donation groups one public QR checkout buyers can use without creating a BeamCash account or matching the seller on Venmo, Zelle, Cash App, or another peer-to-peer app.',
    audience: ['Vendors', 'Performers', 'Pop-ups', 'Nonprofits', 'Donation Groups'],
    storyboard: [
      {
        mark: '01',
        label: 'Seller',
        title: 'Set one checkout destination',
        text: 'Choose the pay, tip, or give mode and display one BeamCash QR at the table, booth, performance, or fundraiser.',
      },
      {
        mark: '02',
        label: 'Buyer',
        title: 'Scan without joining another app',
        text: 'The buyer or donor opens checkout, sees who they are paying, and chooses an amount without creating a BeamCash account.',
      },
      {
        mark: '03',
        label: 'Follow-through',
        title: 'Keep the payment handoff organized',
        text: 'The seller keeps QR access, payout readiness, payment state, and activity in one place instead of juggling handles and screenshots.',
      },
    ],
  },
  systemLens: {
    eyebrow: 'Design Lens',
    title: 'What I Was Testing',
    body:
      'BeamCash is not only a QR-code interface. It is a small test of whether the payment handoff can become more flexible for the seller while staying almost invisible to the buyer.',
    items: [
      {
        label: 'Buyer Layer',
        text: 'The buyer should scan, recognize the seller, choose an amount, and leave without learning a new payment app.',
      },
      {
        label: 'Seller Layer',
        text: 'The seller needs one reusable QR destination, clear activity, and enough setup to look prepared without running a full point-of-sale system.',
      },
      {
        label: 'Infrastructure Layer',
        text: 'The MVP keeps test payments, checkout state, payout readiness, and future processor integration separated so the product can grow safely.',
      },
    ],
  },
  overview:
    'I built BeamCash around a small but common moment: someone is ready to pay, but the seller and buyer are not on the same payment app. The product tests whether one public QR checkout can let anyone scan, choose an amount, and pay without creating another account.',
  overviewEyebrow: 'Why I Built This',
  overviewTitle: 'Let Anyone Pay from One QR',
  problem:
    'Cash, Venmo, Zelle, and app-specific payment handles all depend on what the buyer already has. BeamCash is designed around an accountless buyer checkout while still giving the seller a clear payment profile, public QR sign, mode-aware payment language, payout readiness, and dashboard activity.',
  problemEyebrow: 'What Improves',
  problemTitle: 'Remove the Same-App Requirement',
  whatIBuilt: [
    'Seller profile setup for business type, photo, category, intro, and payment message.',
    'Dashboard for balance, recent activity, QR access, and payout readiness.',
    'Mode-aware QR signage that changes language by seller type: pay, tip, or give.',
    'Buyer checkout with seller identity, preset/custom amounts, and confirmation.',
    'MVP payment architecture with mock services and a path toward Stripe integration.',
  ],
  buildLabels: ['Seller Setup', 'Dashboard', 'QR Signage', 'Buyer Checkout', 'Payment Architecture'],
  buildSummary:
    'The build connects seller setup, public QR display, accountless buyer checkout, and payment-readiness states into one in-person payment flow.',
  buildSummaryLabel: 'Payment Flow',
  decisionEyebrow: 'Product Logic',
  decisionTitle: 'Why It Works This Way',
  productDecisions: [
    {
      title: 'Accountless Buyer Checkout',
      text: 'The buyer side should stay lightweight: scan the QR, see the seller, choose an amount, and pay without needing a BeamCash account or the seller\'s preferred payment app.',
    },
    {
      title: 'Seller Setup Stays Lightweight',
      text: 'The seller flow collects enough identity, mode, and payout context to generate a useful QR checkout without making small sellers set up a full point-of-sale system first.',
    },
    {
      title: 'Processor Underneath, BeamCash in Front',
      text: 'The product should feel like a simple BeamCash checkout while a payment processor handles the secure transaction and payout infrastructure underneath.',
    },
    {
      title: 'Mock Now, Real Payments Later',
      text: 'The MVP keeps test payments and mock services available while preserving a path toward PaymentSheet, Connect onboarding, hosted checkout URLs, and production storage.',
    },
  ],
  technicalHighlights: [
    'Expo Router mobile app structure with TypeScript models for merchants, payments, payouts, and notifications.',
    'QR generation and public checkout-link direction for printable or shareable seller signage.',
    'Buyer checkout state and amount selection flow designed around future Stripe PaymentSheet integration.',
    'Backend setup and local persistence layer for MVP development without requiring production hosting too early.',
    'Payment alerts settings for future push and voice notification concepts.',
  ],
  images: [
    {
      title: 'Seller Dashboard',
      src: '/assets/project-beamcash-mobile-seller-dashboard.png',
      alt: 'BeamCash mobile seller dashboard showing available balance, payment activity, readiness, and QR access.',
      caption: 'The mobile app keeps seller readiness, payment activity, and the BeamCash QR code in one place.',
      kind: 'mobile',
    },
    {
      title: 'Buyer Checkout',
      src: '/assets/project-beamcash-mobile-buyer-checkout.png',
      alt: 'BeamCash mobile buyer checkout showing seller identity, suggested amounts, and payment context.',
      caption: 'The buyer sees who they are paying, chooses an amount, and can continue without creating a BeamCash account.',
      kind: 'mobile',
    },
    {
      title: 'Seller Code',
      src: '/assets/project-beamcash-mobile-seller-code.png',
      alt: 'BeamCash mobile seller QR screen showing a branded payment code for in-person checkout.',
      caption: 'The seller can display one branded QR for pay, tip, or donation moments.',
      kind: 'mobile',
    },
    {
      title: 'Seller Entry',
      src: '/assets/project-beamcash-mobile-home.png',
      alt: 'BeamCash mobile home screen with seller-focused entry actions.',
      caption: 'The entry screen stays seller-first: create a BeamCash code or return to an existing one.',
      kind: 'mobile',
    },
    {
      title: 'Web Checkout',
      src: '/assets/project-beamcash-web-checkout.png',
      alt: 'BeamCash web checkout showing a branded browser payment flow after a QR scan.',
      caption: 'The QR opens a lightweight web checkout so buyers do not have to install or join BeamCash.',
      fit: 'zoom',
    },
    {
      title: 'Web Seller Dashboard',
      src: '/assets/project-beamcash-web-seller-dashboard.png',
      alt: 'BeamCash web seller dashboard showing balance, payment activity, and QR access.',
      caption: 'The web dashboard shows the same seller payment hub at a larger screen size.',
      fit: 'contain',
    },
  ],
  galleryStyle: 'storyboard',
  galleryImages: [
    {
      title: 'Prepare The Seller Hub',
      src: '/assets/project-beamcash-mobile-seller-dashboard.png',
      alt: 'BeamCash mobile seller dashboard showing available balance, payment activity, readiness, and QR access.',
      caption: 'A seller keeps balance context, QR access, recent activity, and payout readiness in one place before taking payments.',
      kind: 'mobile',
    },
    {
      title: 'Display One QR',
      src: '/assets/project-beamcash-mobile-seller-code.png',
      alt: 'BeamCash mobile seller QR screen showing a branded payment code for in-person checkout.',
      caption: 'The seller can show one branded QR for pay, tip, fundraiser, donation, booth, table, or performance moments.',
      kind: 'mobile',
    },
    {
      title: 'Scan Into Checkout',
      src: '/assets/project-beamcash-mobile-buyer-checkout.png',
      alt: 'BeamCash mobile buyer checkout showing seller identity, suggested amounts, and payment context.',
      caption: 'The buyer sees who they are paying, chooses a preset or custom amount, and never needs a BeamCash account.',
      kind: 'mobile',
    },
    {
      title: 'Pay In The Browser',
      src: '/assets/project-beamcash-web-checkout.png',
      alt: 'BeamCash web checkout showing a branded browser payment flow after a QR scan.',
      caption: 'The QR opens a lightweight web checkout so the flow works even when the buyer does not share the same payment app.',
      fit: 'zoom',
    },
    {
      title: 'Track The Payment Flow',
      src: '/assets/project-beamcash-web-seller-dashboard.png',
      alt: 'BeamCash web seller dashboard showing balance, payment activity, and QR access.',
      caption: 'The seller dashboard keeps activity, QR access, and payment readiness organized after the in-person moment.',
      fit: 'contain',
    },
  ],
  storyboardScenes: [
    {
      label: 'Seller side',
      title: 'Display One QR Where Buyers Can See It',
      caption:
        'The seller turns the app-generated QR into a visible payment moment at the booth, table, fundraiser, or performance.',
      layout: 'wide-phone',
      images: [
        {
          title: 'Vendor Display',
          src: '/assets/project-beamcash-vendor-display-moment.png',
          alt: 'Seller table with a QR payment sign displayed where buyers can scan it.',
          kind: 'physical',
        },
        {
          title: 'QR Screen',
          src: '/assets/project-beamcash-mobile-seller-code.png',
          alt: 'BeamCash mobile seller QR screen showing a branded payment code for in-person checkout.',
          kind: 'mobile',
        },
      ],
    },
    {
      label: 'In-person scan',
      title: 'Scan The Seller QR',
      caption:
        'The buyer uses their own phone camera to scan the seller QR, then lands in a checkout flow without creating a BeamCash account.',
      layout: 'scan-phone',
      images: [
        {
          title: 'QR Scan Moment',
          src: '/assets/project-beamcash-scan-moment.png',
          alt: 'Buyer holding a phone to scan a seller QR payment sign at an in-person seller table.',
          kind: 'physical',
        },
        {
          title: 'Buyer Checkout',
          src: '/assets/project-beamcash-mobile-buyer-checkout.png',
          alt: 'BeamCash mobile buyer checkout showing seller identity, suggested amounts, and payment context.',
          kind: 'mobile',
        },
      ],
    },
    {
      label: 'Seller follow-up',
      title: 'Track Activity After The Moment',
      caption:
        'After the buyer pays, the seller returns to the mobile dashboard for activity, QR access, and payment readiness.',
      layout: 'phone-single',
      images: [
        {
          title: 'Seller Dashboard',
          src: '/assets/project-beamcash-mobile-seller-dashboard.png',
          alt: 'BeamCash mobile seller dashboard showing available balance, payment activity, readiness, and QR access.',
          kind: 'mobile',
        },
      ],
    },
  ],
  galleryStyle: 'storyboard',
  storyboardScenes: [
    {
      label: 'Discover',
      title: 'Search Programs With Timing and Fit in View',
      caption:
        'Students start from a structured opportunity library instead of a loose spreadsheet, post, or forgotten link thread.',
      layout: 'wide',
      images: [
        {
          title: 'Opportunity Library',
          src: '/assets/project-applyfirst-programs-desktop.png',
          alt: 'ApplyFirst searchable opportunity library with filters and program details.',
          fit: 'contain',
        },
      ],
    },
    {
      label: 'Personalize',
      title: 'Tune The System Around Student Stage',
      caption:
        'Preferences help the product understand class year, direction, and what kind of opportunity support would actually be useful.',
      layout: 'wide-phone',
      images: [
        {
          title: 'Student Preferences',
          src: '/assets/project-applyfirst-preferences-desktop.png',
          alt: 'ApplyFirst preferences screen for tailoring opportunity recommendations.',
          fit: 'contain',
        },
        {
          title: 'Mobile Library',
          src: '/assets/project-applyfirst-programs-mobile.png',
          alt: 'ApplyFirst mobile opportunity library view.',
          kind: 'mobile',
        },
      ],
    },
    {
      label: 'Improve',
      title: 'Let Feedback Strengthen The Opportunity Data',
      caption:
        'The contribution flow makes missing or stale records visible while keeping raw submissions separate from verified opportunity data.',
      layout: 'wide',
      images: [
        {
          title: 'Contribution Flow',
          src: '/assets/project-applyfirst-contribute-desktop.png',
          alt: 'ApplyFirst contribution screen for missing or stale opportunity records.',
          fit: 'contain',
        },
      ],
    },
  ],
  workflowImage: {
    src: '/assets/project-beamcash-product-flow.svg',
    alt: 'BeamCash product flow from seller setup to QR checkout and payment confirmation.',
  },
  workflowStandalone: true,
  screenshotEyebrow: 'How It Works',
  screenshotTitle: 'Buyer and Seller Workflow',
  technicalTitle: 'Built for Accountless QR Checkout',
  lessons: [
    'The strongest BeamCash value is reach: sellers can collect from buyers or donors who do not share the same payment app.',
    'Seller identity and branded signage still matter, but they support the accountless checkout flow instead of being the main selling point.',
    'A payment MVP needs clean boundaries between test flows, future processor integrations, payout readiness, and legal production requirements.',
  ],
  nextSteps: [
    'Decide whether BeamCash should be framed publicly as a solo project, startup concept, or launch-ready product direction.',
    'Add production hosting, authentication, public checkout URLs, image storage, and real Stripe configuration when ready.',
    'Test the flow with real sellers, performers, and donation groups to validate whether accountless checkout increases completed payments.',
  ],
  ctaTitle: 'Want to Try BeamCash?',
  ctaBody:
    'I am looking for sellers, vendors, performers, local groups, nonprofits, and donation-based teams who want to try or give feedback on an accountless QR checkout flow.',
  ctaLabel: 'I Want to Try BeamCash',
  ctaHref: 'mailto:kellychenmeiyi@gmail.com?subject=I%20want%20to%20try%20BeamCash',
};

export const applyFirstCaseStudy = {
  eyebrow: 'ApplyFirst',
  title: 'Early-Career Opportunity System',
  subtitle:
    'A private-beta app that helps students discover, track, and prepare for high-signal programs before applications open.',
  status: 'Private beta / early access',
  role: 'Product strategist, frontend MVP builder, data-model designer, and opportunity systems researcher',
  stack: ['React', 'Vite', 'Opportunity data model', 'Search and filters', 'Shortlist workflows', 'Beta validation'],
  heroImage: {
    title: 'Opportunity Library',
    src: '/assets/project-applyfirst-programs-desktop.png',
    alt: 'ApplyFirst programs page with searchable opportunities, filters, and program details.',
  },
  valuePitch: {
    eyebrow: 'For emerging engineers',
    title: 'Find early programs before they get crowded.',
    body:
      'ApplyFirst organizes recurring internships, fellowships, scholarships, prep programs, and communities with timing, eligibility, confidence, and next-action notes.',
    audience: ['First-years', 'Sophomores', 'Emerging Engineers', 'Fellowship Seekers', 'Opportunity Sharers'],
    storyboard: [
      {
        mark: '01',
        label: 'Find',
        title: 'Search high-signal programs',
        text: 'Filter by role, class year, timing, category, status, and opportunity type.',
      },
      {
        mark: '02',
        label: 'Compare',
        title: 'Understand why it matters',
        text: 'Each record explains fit, timing, source confidence, and what to prepare before the window opens.',
      },
      {
        mark: '03',
        label: 'Track',
        title: 'Save what needs follow-up',
        text: 'Students can shortlist programs and use the product as an early-warning layer instead of a scattered link list.',
      },
    ],
  },
  systemLens: {
    eyebrow: 'Product Lens',
    title: 'What I Was Testing',
    body:
      'ApplyFirst tests whether opportunity discovery becomes more useful when it combines curation, timing, confidence, and preparation guidance.',
    items: [
      {
        label: 'Student Layer',
        text: 'Students need to know what fits their stage and what to do before applications open.',
      },
      {
        label: 'Signal Layer',
        text: 'Records track status, source trust, timing, eligibility, and readiness instead of only storing links.',
      },
      {
        label: 'Community Layer',
        text: 'Contribution flow helps surface missing or stale opportunities while keeping verification visible.',
      },
    ],
  },
  overview:
    'I built ApplyFirst from the pattern that high-value early programs are not always hard because students lack ambition. They are hard because students discover them too late, miss the timing, or do not know which opportunities fit their stage.',
  overviewEyebrow: 'Why I Built This',
  overviewTitle: 'Turn scattered links into a watch system',
  problem:
    'Students often find internships, fellowships, scholarships, and prep programs through LinkedIn posts, Discord threads, spreadsheets, and official pages that change by season. ApplyFirst turns that discovery process into a searchable, trackable product layer.',
  problemEyebrow: 'What Improves',
  problemTitle: 'Make timing and fit easier to see',
  whatIBuilt: [
    'Opportunity library with searchable records, filters, program details, and source-status labels.',
    'Student preference flow for class year, career direction, interests, and opportunity needs.',
    'Saved-program behavior for opportunities that need monitoring or preparation.',
    'Contribution flow for missing or stale records so the library can improve with user feedback.',
    'Beta framing around confidence, verification, and alert-readiness before broader notifications.',
  ],
  buildLabels: ['Opportunity Library', 'Student Preferences', 'Saved Programs', 'Contribution Flow', 'Signal Model'],
  buildSummary:
    'The build turns opportunity discovery into a watch system: records, preferences, saved programs, feedback, and confidence signals all shape what a student should act on next.',
  buildSummaryLabel: 'Opportunity Model',
  decisionEyebrow: 'Product Logic',
  decisionTitle: 'Why It Works This Way',
  productDecisions: [
    {
      title: 'Timing Before Applications',
      text: 'The product is designed around what students should watch and prepare for before a program officially opens.',
    },
    {
      title: 'Confidence Instead of False Certainty',
      text: 'Records can show source confidence and readiness so the product does not pretend every opportunity is fully verified.',
    },
    {
      title: 'Narrower Than a Job Board',
      text: 'ApplyFirst focuses on early-career programs, fellowships, scholarships, prep, and high-signal opportunities instead of every job posting.',
    },
    {
      title: 'Feedback Becomes Product Data',
      text: 'Contribution screens let users flag stale or missing opportunities without turning raw submissions into verified records automatically.',
    },
  ],
  technicalHighlights: [
    'React/Vite app structure for a standalone private-beta product.',
    'Opportunity records modeled around timing, class year, role track, status, source confidence, and recommended next step.',
    'Filter and shortlist behavior designed for student discovery rather than generic job tracking.',
    'Contribution flow for stale or missing records, with verification still visible.',
    'Current screenshots cover landing, opportunity library, preferences, contribution, and mobile views.',
  ],
  images: [
    {
      title: 'Opportunity Library',
      src: '/assets/project-applyfirst-programs-desktop.png',
      alt: 'ApplyFirst searchable opportunity library with filters and program details.',
      caption: 'Students can search and filter high-signal programs while seeing status and recommended next steps.',
    },
    {
      title: 'Student Preferences',
      src: '/assets/project-applyfirst-preferences-desktop.png',
      alt: 'ApplyFirst preferences screen for tailoring opportunity recommendations.',
      caption: 'Preferences make discovery stage-aware instead of dumping every opportunity into one generic list.',
    },
    {
      title: 'Contribution Flow',
      src: '/assets/project-applyfirst-contribute-desktop.png',
      alt: 'ApplyFirst contribution screen for missing or stale opportunity records.',
      caption: 'Students can suggest missing or stale opportunities while verification remains separate from raw submissions.',
    },
    {
      title: 'Mobile Library',
      src: '/assets/project-applyfirst-programs-mobile.png',
      alt: 'ApplyFirst mobile opportunity library view.',
      caption: 'The mobile view keeps the watchlist usable when students discover programs from posts, chats, or events.',
      kind: 'mobile',
    },
  ],
  galleryImages: [
    {
      title: 'Opportunity Library',
      src: '/assets/project-applyfirst-programs-desktop.png',
      alt: 'ApplyFirst searchable opportunity library with filters and program details.',
      caption: 'Searchable records make opportunity discovery feel structured instead of scattered.',
    },
    {
      title: 'Student Preferences',
      src: '/assets/project-applyfirst-preferences-desktop.png',
      alt: 'ApplyFirst preferences screen for tailoring opportunity recommendations.',
      caption: 'Students can tune the product around stage, interests, and the type of support they need.',
    },
    {
      title: 'Contribution Flow',
      src: '/assets/project-applyfirst-contribute-desktop.png',
      alt: 'ApplyFirst contribution screen for missing or stale opportunity records.',
      caption: 'The feedback loop helps the opportunity library improve without hiding verification status.',
    },
  ],
  workflowImage: {
    src: '/assets/project-applyfirst-landing-desktop.png',
    alt: 'ApplyFirst landing page showing early-career opportunity system positioning.',
  },
  workflowStandalone: false,
  screenshotEyebrow: 'Product Screens',
  screenshotTitle: 'Opportunity Discovery Workflow',
  technicalEyebrow: 'Build Notes',
  technicalTitle: 'Built Around Timing, Confidence, and Next Action',
  lessons: [
    'A useful opportunity product is not just a list. It needs timing, eligibility, confidence, verification, and next-action guidance.',
    'Students need stage-aware discovery because the right program for a first-year can be different from the right program for a junior or new grad.',
    'The product should validate what students actually watch, save, and act on before adding heavier alert or subscription features.',
  ],
  nextSteps: [
    'Use beta feedback to identify which opportunity categories and signals students actually trust.',
    'Expand the data foundation with recurring programs, communities, scholarships, conference resources, and prep pathways.',
    'Add notification or monitoring features only after the watchlist and verification workflow prove useful.',
  ],
  ctaTitle: 'Want to Test ApplyFirst?',
  ctaBody:
    'ApplyFirst is in early access while I validate which opportunity signals, filters, and student resource views actually help students prepare earlier.',
  ctaLabel: 'Join ApplyFirst Waitlist',
  ctaHref: 'https://applyfirst-careers.pages.dev/',
};

export const webPilotCaseStudy = {
  eyebrow: 'WebPilot',
  title: 'AI Website Operations Platform',
  subtitle:
    'A local MVP that helps consultants turn messy website audits, client notes, and page content into structured recommendations, client-ready delivery, and implementation work.',
  status: 'Local MVP / active prototype',
  role: 'Product strategist, full-stack builder, AI workflow designer, and local MVP validator',
  stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js API routes', 'OpenAI API', 'Google PageSpeed Insights', 'Local JSON storage'],
  valuePitch: {
    eyebrow: 'For nonprofits and local businesses',
    title: 'Turn messy website work into reviewed next steps.',
    body:
      'WebPilot helps consultants move from scattered notes, AI drafts, and page evidence into work that is reviewed, organized, and ready to hand off.',
    audience: ['Nonprofits', 'Local Businesses', 'Community Orgs', 'Website Revamps'],
    storyboard: [
      {
        mark: '01',
        label: 'Context',
        title: 'Capture what the website needs',
        text: 'Collect goals, page notes, client requests, screenshots, and performance evidence in one workspace.',
      },
      {
        mark: '02',
        label: 'Review',
        title: 'Make AI output accountable',
        text: 'Generate targeted audits, copy, FAQs, or implementation notes, then edit and approve what is actually useful.',
      },
      {
        mark: '03',
        label: 'Handoff',
        title: 'Package work people can act on',
        text: 'Turn approved recommendations into delivery views, readiness checks, client requests, and implementation next steps.',
      },
    ],
  },
  systemLens: {
    eyebrow: 'Design Lens',
    title: 'What I Was Testing',
    body:
      'WebPilot tests the operating layer around AI: how context is captured, how output is reviewed, how evidence is attached, and how the work becomes something another person can act on.',
    items: [
      {
        label: 'Context',
        text: 'A website needs goals, page notes, client requests, screenshots, and performance evidence before AI output can be useful.',
      },
      {
        label: 'Review',
        text: 'Generated work should be editable, versioned, and approved before it becomes a recommendation or implementation task.',
      },
      {
        label: 'Handoff',
        text: 'The product turns approved work into delivery views, readiness checks, client requests, and next steps.',
      },
    ],
  },
  overview:
    'I built WebPilot after noticing that website improvement work rarely fails because there are no ideas. It fails because recommendations, evidence, copy drafts, and next steps are scattered before anyone can turn them into implementation.',
  overviewEyebrow: 'Why I Built This',
  overviewTitle: 'Make AI Output Reviewable',
  problem:
    'WebPilot improves the handoff layer: what was generated, what was reviewed, what evidence supports it, what the client still needs to provide, and what should happen next.',
  problemEyebrow: 'What Improves',
  problemTitle: 'From Generic Advice to Usable Work',
  whatIBuilt: [
    'Website-centered workspace for context, goals, and client notes.',
    'Reusable AI task generation for audits, SEO, copywriting, FAQs, accessibility, donation pages, and WordPress-ready content.',
    'Editable outputs with review and approval states.',
    'Client-ready delivery view with QA checks, requests, and handoff.',
    'Page capture, PageSpeed evidence, backup/restore, and smoke testing.',
  ],
  buildLabels: ['Workspace', 'AI Tasks', 'Review Gate', 'Delivery View', 'Evidence & Backup'],
  buildSummary:
    'WebPilot turns website context, AI drafts, review state, and delivery evidence into one cleaner implementation handoff.',
  buildSummaryLabel: 'Operating Model',
  decisionEyebrow: 'Product Logic',
  decisionTitle: 'Why It Works This Way',
  productDecisions: [
    {
      title: 'Website-First, Not Project-First',
      text: 'I centered the product around websites because clients and consultants think in terms of improving a website, not managing abstract projects.',
    },
    {
      title: 'Service-First MVP',
      text: 'I positioned WebPilot as an internal tool for delivering better client work before turning it into customer-facing SaaS.',
    },
    {
      title: 'Human-Reviewed AI',
      text: 'I avoided treating AI output as final. WebPilot keeps generated work editable, reviewable, versioned, and tied to delivery readiness.',
    },
    {
      title: 'Manual capture before full crawling',
      text: 'Instead of overbuilding automation early, I supported manual page capture, pasted copy, PageSpeed evidence, and structured context.',
    },
  ],
  technicalHighlights: [
    'Structured context keeps client goals, page notes, and website evidence connected before generation.',
    'Review states keep AI drafts editable and approved before they become client-facing work.',
    'Delivery readiness turns recommendations into a handoff someone can actually implement.',
  ],
  images: [
    {
      title: 'Website Command Center',
      src: '/assets/project-webpilot-command-center.png',
      alt: 'WebPilot website command center showing guided workflow steps and reusable website context.',
      caption: 'The strongest product surface: website context, workflow state, next step, and reusable client information are connected in one place.',
      fit: 'contain',
    },
    {
      title: 'Client Delivery View',
      src: '/assets/project-webpilot-delivery-view.png',
      alt: 'WebPilot client delivery view showing package readiness checks and approval workflow.',
      caption: 'The delivery view shows the operational gate between AI-generated work and client-ready implementation.',
      fit: 'contain',
    },
    {
      title: 'Readiness Dashboard',
      src: '/assets/project-webpilot-dashboard.png',
      alt: 'WebPilot dashboard showing internal website operations, backup, and production readiness checks.',
      caption: 'The dashboard makes the internal operator workflow feel safer before using it for real client work.',
      fit: 'contain',
    },
  ],
  galleryStyle: 'storyboard',
  galleryImages: [
    {
      title: 'Collect The Website Context',
      src: '/assets/project-webpilot-command-center.png',
      alt: 'WebPilot website command center showing guided workflow steps and reusable website context.',
      caption: 'Goals, page notes, client requests, screenshots, and performance evidence sit together before AI generates work.',
      fit: 'contain',
    },
    {
      title: 'Review The AI Output',
      src: '/assets/project-webpilot-delivery-view.png',
      alt: 'WebPilot client delivery view showing package readiness checks and approval workflow.',
      caption: 'Drafts stay editable, statused, and tied to approval before they become client-facing recommendations.',
      fit: 'contain',
    },
    {
      title: 'Hand Off The Next Step',
      src: '/assets/project-webpilot-dashboard.png',
      alt: 'WebPilot dashboard showing internal website operations, backup, and production readiness checks.',
      caption: 'The work becomes a delivery surface with readiness checks, backup context, and implementation next steps.',
      fit: 'contain',
    },
  ],
  storyboardScenes: [
    {
      label: 'Context',
      title: 'Collect The Website Situation',
      caption:
        'The workflow starts by putting goals, client notes, page context, screenshots, and performance evidence in one workspace.',
      layout: 'wide',
      images: [
        {
          title: 'Website Command Center',
          src: '/assets/project-webpilot-command-center.png',
          alt: 'WebPilot website command center showing guided workflow steps and reusable website context.',
          fit: 'contain',
        },
      ],
    },
    {
      label: 'Review to handoff',
      title: 'Turn AI Output Into Usable Work',
      caption:
        'The reviewed output and readiness surface show what was approved, what still needs evidence, and what can move into implementation.',
      layout: 'wide-pair',
      images: [
        {
          title: 'Client Delivery View',
          src: '/assets/project-webpilot-delivery-view.png',
          alt: 'WebPilot client delivery view showing package readiness checks and approval workflow.',
          fit: 'contain',
        },
        {
          title: 'Readiness Dashboard',
          src: '/assets/project-webpilot-dashboard.png',
          alt: 'WebPilot dashboard showing internal website operations, backup, and production readiness checks.',
          fit: 'contain',
        },
      ],
    },
  ],
  workflowImage: {
    src: '/assets/project-webpilot-workflow-diagram.svg',
    alt: 'WebPilot workflow diagram showing intake, AI generation, review, delivery, and implementation handoff.',
  },
  screenshotEyebrow: 'How It Works',
  screenshotTitle: 'Website Revamp Workflow',
  technicalEyebrow: 'Operating Layer',
  technicalTitle: 'Making AI Output Operational',
  technicalSummary:
    'WebPilot is less about generating more suggestions and more about making the work traceable: context, evidence, review state, and delivery readiness.',
  technicalFlow: [
    {
      label: 'Context',
      title: 'Capture The Website Situation',
      text: 'Goals, client notes, page copy, screenshots, and evidence sit together before AI generates anything.',
    },
    {
      label: 'Review',
      title: 'Keep Output Editable',
      text: 'Generated audits, copy, FAQs, and implementation notes stay statused, reviewable, and tied to their source context.',
    },
    {
      label: 'Handoff',
      title: 'Package The Next Step',
      text: 'Reviewed work becomes a clearer delivery package for approval, implementation, or follow-up.',
    },
  ],
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
  ctaTitle: 'Need a Website Revamp?',
  ctaBody:
    'I am looking for nonprofits, local businesses, and community organizations that want help turning a messy website into a clearer audit, content plan, and implementation roadmap.',
  ctaLabel: 'Ask About WebPilot',
  ctaHref: 'mailto:kellychenmeiyi@gmail.com?subject=Website%20revamp%20with%20WebPilot',
};

export const tandemCaseStudy = {
  eyebrow: 'Tandem',
  title: 'Tandem - Dating for Complementary Ambition',
  subtitle:
    'An early-stage NYC dating experiment for ambitious singles in their 20s who care about lifestyle, ambition, and future direction.',
  status: 'Early validation MVP',
  role: 'Product strategist, validation MVP builder, brand direction lead, and archetype-system designer',
  stack: ['Product strategy', 'Landing page', 'Ambition Archetype quiz', 'Typeform-ready flow', 'Local CSV/JSON export', 'Analytics hooks'],
  overview:
    'Tandem is a validation-first NYC dating experiment for ambitious singles ages 21-30. The live first version is a public landing page, Ambition Archetype quiz, and waitlist flow designed to test whether ambition and life-direction compatibility can become a meaningful dating signal.',
  overviewTitle: 'A Dating Experiment Built Around Direction',
  problem:
    'Dating apps often focus on photos, prompts, location, hobbies, and job titles. They rarely capture the deeper compatibility signals that matter to people still forming their career identities: ambition type, lifestyle rhythm, risk tolerance, emotional maturity, relationship intention, and future direction.',
  problemTitle: 'Surface-Level Matching Misses the Real Fit',
  buildEyebrow: 'Validation',
  buildTitle: 'Validation MVP',
  whatIBuilt: [
    'Built a public landing page that explains the thesis, status, and quiz call to action.',
    'Developed the Ambition Archetype quiz and waitlist flow to test compatibility around career mode, risk, lifestyle, and partner energy.',
    'Prepared the quiz flow for a Typeform-style result experience, while keeping a local CSV and JSON export fallback for early testing.',
    'Instrumented lightweight analytics hooks around landing views, CTA clicks, quiz starts, waitlist completion, mixer interest, and export events.',
    'Kept the MVP intentionally scoped to landing page, quiz, and waitlist only, avoiding premature app features.',
  ],
  buildLabels: ['Landing Thesis', 'Archetype Quiz', 'Data Fallback', 'Validation Events', 'Scope Boundary'],
  buildSummary:
    'The build tests positioning, archetype logic, waitlist intent, and validation signals before investing in a full dating-app infrastructure.',
  buildSummaryLabel: 'Validation Model',
  productDecisions: [
    {
      title: 'Validate Before Building',
      text: 'The first version is intentionally not a dating app. It has no accounts, swiping, matching, chat, payments, or backend database. The goal is to test demand before investing in product complexity.',
    },
    {
      title: 'Start with NYC',
      text: 'NYC offers a dense mix of students, interns, new grads, startup employees, creators, side-project builders, and young professionals, making it a focused launch market for intentional dating.',
    },
    {
      title: 'Archetypes as Research',
      text: 'Builder, Anchor, Accelerator, Creator, Operator, and Explorer archetypes give users a warm way to engage while collecting structured signals about ambition and lifestyle compatibility.',
    },
    {
      title: 'Dating-First, Not Corporate',
      text: 'The tone should feel warm, premium, intentional, and honest: ambitious without sounding corporate, NYC-coded without cliché, and never framed as LinkedIn dating.',
    },
  ],
  images: [
    {
      title: 'Hero Thesis',
      src: '/assets/project-tandem-home-hero.png',
      alt: 'Tandem landing page hero with the headline Dating for complementary ambition.',
      caption: 'The first screen frames Tandem as dating for complementary ambition, with an immediate quiz CTA and audience qualifier.',
    },
    {
      title: 'Ambition Archetypes',
      src: '/assets/project-tandem-archetypes-section.png',
      alt: 'Tandem archetypes section showing six ambition types with illustrated characters.',
      caption: 'Six archetypes make the product feel more like a personality-test experience than a generic waitlist form.',
    },
    {
      title: 'How It Works',
      src: '/assets/project-tandem-how-it-works-section.png',
      alt: 'Tandem how it works section explaining quiz, archetype, and early list steps.',
      caption: 'The MVP stays honest about the current scope: take the quiz, get an archetype, and join the early list.',
    },
    {
      title: 'Mobile Landing Page',
      src: '/assets/project-tandem-mobile-home.png',
      alt: 'Mobile screenshot of the Tandem landing page.',
      caption: 'The mobile view keeps the validation flow usable for the audience most likely to discover the concept socially.',
      kind: 'mobile',
    },
  ],
  workflowImage: {
    src: '/assets/project-tandem-validation-flow.svg',
    alt: 'Tandem validation flow from portfolio or landing page to Ambition Archetype quiz, waitlist, response database, and manual matching.',
  },
  screenshotEyebrow: 'Screenshots',
  screenshotTitle: 'Live Validation Site Screens',
  technicalTitle: 'Lightweight MVP Funnel',
  technicalHighlights: [
    'Public landing page explains the thesis, audience, and transparent early-validation status.',
    'Typeform-ready quiz direction supports a one-question-at-a-time personality-test rhythm and result reveal.',
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
    'Build the Typeform quiz and archetype result pages using the final question structure.',
    'Replace or generalize the earlier Tally configuration before sending broader public traffic.',
    'Add a real analytics provider such as Plausible, Google Analytics, or Google Tag Manager.',
    'Add Open Graph preview metadata and complete one final mobile polish pass before wider sharing.',
  ],
  ctaTitle: 'Join the Tandem Waitlist',
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
    href: 'https://ncwit.vfairs.com/?mc_cid=48683d8ae6&mc_eid=3414de5471',
    linkLabel: 'Register for the Event',
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
    outcome: 'Clearer routes into rooms that usually feel hard to navigate.',
  },
  {
    title: 'Early-Career Engineering',
    icon: 'engineering',
    description: 'Internship lessons, technical growth, mentoring, interview preparation, and learning how to explain systems clearly.',
    outcome: 'A practical way to turn experience into signal and confidence.',
  },
  {
    title: 'Fintech, Product & Payments',
    icon: 'fintech',
    description: 'Financial infrastructure, payment friction, QR payment concepts, product thinking, and customer-facing systems.',
    outcome: 'How to spot product friction and reason through system tradeoffs.',
  },
  {
    title: 'AI-Assisted Building',
    icon: 'ai',
    description: 'Using AI tools to prototype workflows, organize ideas, review output, and turn rough concepts into usable products.',
    outcome: 'A more reviewable way to use AI without losing product judgment.',
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
    label: 'Forté C2B NYC 2024 Attendees',
  },
  {
    src: '/assets/community-conference-leadership.jpg',
    alt: 'Student group at the National Campus to Business Leadership Conference.',
    label: 'Lehigh at Forté C2B NYC 2024',
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

export const contentResourceGroups = [
  {
    status: 'Live app / private beta',
    title: 'ApplyFirst',
    description:
      'ApplyFirst now carries the opportunity library and early-discovery product direction. It is live as a separate app while the opportunity data, filters, and beta feedback loop mature.',
    href: 'https://applyfirst-careers.pages.dev/',
    ctaLabel: 'Join Waitlist',
    items: [
      {
        title: 'Searchable Program Directory',
        meta: 'Live direction',
        description: 'A searchable early-career resource layer for programs, fellowships, scholarships, prep programs, and high-signal opportunities.',
      },
      {
        title: 'Saved Programs',
        meta: 'Beta workflow',
        description: 'Shortlisting and tracking behavior for students who need to prepare before the application window opens.',
      },
      {
        title: 'Signal Model',
        meta: 'In validation',
        description: 'Timing, eligibility, confidence, source trust, and opening-soon signals are being tested before broader alerts.',
      },
    ],
  },
];

export const contentPipeline = [
  {
    tone: 'teal',
    title: 'Opportunity Timing Notes',
    description:
      'Research on how recurring opportunities open, change, and become easier to prepare for when students know what to watch.',
  },
  {
    tone: 'blue',
    title: 'Sponsor List Reading Guide',
    description:
      'A practical way to understand conference sponsor lists, prioritize conversations, and prepare better questions.',
  },
  {
    tone: 'rose',
    title: 'LinkedIn Notes into Guides',
    description:
      'Turning useful public posts into cleaner guides, checklists, templates, and resource notes.',
  },
  {
    tone: 'indigo',
    title: 'Workshops and Panels',
    description:
      'Possible future sessions around career leverage, conference prep, opportunity access, technical portfolios, and community events.',
  },
];

export const conferencePlannerProduct = {
  label: 'Beta resource bundle',
  status: 'Bundle assembled',
  title: 'Conference Leverage Planner',
  tagline: 'Plan the room before you walk in.',
  description:
    'A practical strategy kit for students deciding whether a conference is worth it, finding funding paths, reading sponsor intent, preparing for interview invites, tracking private socials, and following up after the room closes.',
  note:
    'The Lemon Squeezy storefront is not live yet. Until then, this is request-only beta material and not a public promise of funding, interviews, referrals, or offers.',
  price: 'Storefront next',
  freeLabel: 'Free Lite Kit planned',
  primaryCta: {
    label: 'Request Beta Bundle',
    href: 'mailto:kellychenmeiyi@gmail.com?subject=Conference%20Leverage%20Planner%20Full%20Bundle',
  },
  secondaryCta: {
    label: 'Request Free Lite Kit',
    href: 'mailto:kellychenmeiyi@gmail.com?subject=Conference%20Leverage%20Planner%20Free%20Lite%20Kit',
  },
  includes: [
    'Full Strategy Kit PDF',
    'Template Bank PDF',
    'Tracker Workbook XLSX',
    'One-Page Final Plan',
    'Free Lite Kit',
  ],
  previews: [
    {
      src: '/assets/conference-leverage-planner/01-full-strategy-cover.png',
      alt: 'Conference Leverage Planner full strategy kit cover.',
      eyebrow: 'Strategy kit',
      title: 'Decide if the conference is worth it before you spend.',
      caption: 'A structured guide for ROI, funding, sponsors, interviews, learning, and follow-up.',
    },
    {
      src: '/assets/conference-leverage-planner/06-one-page-final-plan.png',
      alt: 'Conference Leverage Planner one-page final plan preview.',
      eyebrow: 'Final plan',
      title: 'Leave with one clear plan you can actually use in the room.',
      caption: 'A blank planning preview for goals, funding status, sponsor targets, sessions, people, and follow-up.',
      layout: 'landscape',
    },
    {
      src: '/assets/conference-leverage-planner/05-tracker-workbook.png',
      alt: 'Conference Leverage Planner tracker workbook preview.',
      eyebrow: 'Tracker workbook',
      title: 'Keep funding, sponsors, interviews, socials, and follow-up in one place.',
      caption: 'A workbook preview showing the tracking system, not the full working files.',
      layout: 'wide',
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
