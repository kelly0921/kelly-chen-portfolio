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
    status: 'Sandbox MVP / not production-certified',
    description:
      'A TypeScript reliability layer that helps AI agents reconcile uncertain external writes instead of executing them twice.',
    image: '/assets/project-writeguard-operation-flow.svg',
    imageFit: 'contain',
    imageAlt: 'Diagram showing two AI-agent invocations merging into one stable WriteGuard operation that reconciles an uncertain result and confirms one external action.',
    systemQuestion: 'How can AI-agent workflows recover from uncertain external actions without repeating the same consequential write?',
    problem: 'Agent retries, crashes, and replayed tool calls can repeat refunds, bookings, messages, access changes, or other external effects.',
    user: 'TypeScript agent teams, AI platform teams, developer-tool builders, and teams automating costly external writes.',
    role: 'Product architect and AI-assisted builder directing the thesis, architecture, validation plan, and Codex-assisted implementation.',
    learned: 'Infrastructure products need more than a clever abstraction. They need clear failure boundaries, validation evidence, and proof that teams would adopt the reliability layer instead of custom logic.',
    proof: 'Installable TypeScript package, PostgreSQL-backed reliability model, MCP and Stripe test-mode validation, shadow mode, adapter tests, and 39 passing automated tests.',
    tags: ['AI infrastructure', 'TypeScript', 'Distributed systems', 'PostgreSQL', 'MCP'],
  },
  {
    group: 'Built and in Progress',
    title: 'BeamCash',
    mark: { text: 'BC', label: 'BeamCash', tone: 'gold', src: '/assets/project-beamcash-icon.svg' },
    status: 'Seller feedback wanted',
    description:
      'A mobile-first QR payment MVP that helps local sellers, performers, and vendors accept payments through branded checkout pages.',
    image: '/assets/project-beamcash-seller-dashboard-mobile.png',
    imageFit: 'contain',
    imageFrame: 'phone',
    imageAlt: 'BeamCash seller dashboard showing available balance, payment stats, and a branded QR code.',
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
      'WriteGuard is a sandbox MVP for teams testing AI-agent workflows that perform consequential external writes. It is design-partner ready, not production-certified.',
    primaryLabel: 'Discuss Sandbox Pilot',
    primaryHref: 'mailto:kellychenmeiyi@gmail.com?subject=WriteGuard%20sandbox%20pilot',
    secondaryLabel: 'View Technical Case Study',
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
    primaryLabel: 'Join ApplyFirst Early Access',
    primaryHref: 'https://applyfirst-careers.pages.dev/',
  },
};

export const writeGuardCaseStudy = {
  eyebrow: 'WriteGuard',
  title: 'Transactional Reliability for AI Agents',
  subtitle:
    'An experimental TypeScript reliability layer for AI agents that perform consequential external writes such as refunds, bookings, record creation, access changes, and provider updates.',
  status: 'Design-partner-ready sandbox MVP / not production-certified',
  role: 'Product architect and AI-assisted builder',
  stack: ['TypeScript', 'Node.js', 'pnpm', 'PostgreSQL', 'Stripe test mode', 'MCP TypeScript SDK', 'Zod', 'Docker Compose'],
  valuePitch: {
    eyebrow: 'For TypeScript agent teams',
    title: 'Recover from uncertain writes without repeating them.',
    body:
      'WriteGuard gives an agent one durable business-operation identity, then reconciles uncertain provider outcomes before another external write is allowed.',
    audience: ['AI Platform Teams', 'Support Agents', 'Developer Tools', 'TypeScript SDKs', 'Stripe Test Flows'],
    storyboard: [
      {
        mark: '01',
        label: 'Identify',
        title: 'One intended business effect',
        text: 'Different tool-call IDs can map to the same stable operation key when the intended refund, booking, or access change is the same.',
      },
      {
        mark: '02',
        label: 'Hold',
        title: 'Unknown is not failure',
        text: 'If the provider may have succeeded but the worker lost confirmation, WriteGuard records UNKNOWN instead of retrying blindly.',
      },
      {
        mark: '03',
        label: 'Close',
        title: 'Reconcile before acting again',
        text: 'The runtime checks provider evidence, verifies the postcondition, and confirms, fails, or escalates the operation for review.',
      },
    ],
  },
  systemLens: {
    eyebrow: 'Product Thesis',
    title: 'The Missing Question Is Closure',
    body:
      'Agent frameworks can manage tool calls, workflow runtimes can resume execution, and providers can offer idempotency. WriteGuard focuses on the business-level question that sits between them: did this intended external effect already happen?',
    items: [
      {
        label: 'Business Identity',
        text: 'Framework call IDs can change after replay or restart, so the protected identity has to come from the intended business effect.',
      },
      {
        label: 'Uncertainty',
        text: 'Success and failure are not enough for external writes. UNKNOWN is a first-class state when provider success cannot yet be proven.',
      },
      {
        label: 'Evidence',
        text: 'The system stores redacted receipts, transitions, attempts, reconciliation evidence, and final status so teams can inspect what happened.',
      },
    ],
  },
  overview:
    'WriteGuard explores what happens when an AI agent successfully performs an external action, such as issuing a refund, but loses confirmation and resumes with a new tool call. Instead of treating uncertainty as a normal retry condition, it durably records the operation, reconciles against the provider, verifies the result, and suppresses duplicate execution.',
  overviewEyebrow: 'Why I Built This',
  overviewTitle: 'Make External Writes Recoverable',
  problem:
    'A successful external action and a successful local response are not the same thing. A refund can be created moments before a worker crashes or a network response disappears. If the agent retries with a new call ID, the same customer can receive another refund, booking, message, record, or access change.',
  problemEyebrow: 'What Improves',
  problemTitle: 'Prevent Duplicate Side Effects',
  whatIBuilt: [
    'Stable business-operation keys that survive changing agent tool-call IDs.',
    'PostgreSQL-backed durable claims, attempts, events, and execution receipts.',
    'An explicit UNKNOWN state for provider outcomes that may have succeeded but cannot yet be confirmed.',
    'Provider reconciliation and postcondition verification before another external write is allowed.',
    'MCP tool integration, Stripe test-mode validation, shadow mode, and adapter conformance scenarios.',
    'Validation coverage across ordinary retries, ten concurrent callers, worker crash recovery, delayed reconciliation, and ambiguous matches.',
  ],
  buildLabels: ['Stable Identity', 'Durable Records', 'UNKNOWN State', 'Reconciliation', 'Agent Integration', 'Validation'],
  decisionEyebrow: 'Product Logic',
  decisionTitle: 'Why the Boundary Matters',
  decisionIntro:
    'WriteGuard is not a full agent platform. It is a reliability boundary for external effects.',
  productDecisions: [
    {
      title: 'Narrow the scope',
      text: 'I cut the broader agent-infrastructure idea down to one reliability primitive: prevent duplicate external effects when confirmation is uncertain.',
    },
    {
      title: 'Treat UNKNOWN as real state',
      text: 'Uncertainty is not failure. It means the provider may have acted, so the system must reconcile before retrying.',
    },
    {
      title: 'Separate business identity',
      text: 'A fresh tool-call ID can still represent the same refund, booking, payout, or access change.',
    },
    {
      title: 'Fit beside existing tools',
      text: 'It complements workflow runtimes, MCP, provider idempotency, and observability instead of replacing them.',
    },
    {
      title: 'Defer the dashboard',
      text: 'The UI should come after pilot feedback clarifies whether teams need queues, receipts, timelines, or mostly SDK hooks.',
    },
  ],
  technicalHighlights: [
    'Installable TypeScript package with explicit exports, declarations, migrations, and clean consumer-project install validation.',
    'PostgreSQL storage for durable claims, append-only operation events, attempts, receipts, and redacted invocation tracing.',
    'Concurrency protection demonstrated with ten callers producing exactly one external effect.',
    'Crash recovery demonstrated when a replacement worker reconciled provider success instead of repeating the write.',
    'MCP integration guards a real agent tool while preserving framework call IDs as trace metadata.',
    'Stripe test-mode validation showed unsafe calls producing duplicate partial refunds and guarded calls resolving to one confirmed refund.',
    'Shadow mode lets teams observe operation identity and likely duplicate invocations before allowing suppression.',
    'Reliability validation passed 22 unit tests, 17 PostgreSQL integration tests, typecheck, build, migration, package-install, and secret-scan checks.',
  ],
  heroImage: {
    title: 'Runtime Preview',
    src: '/assets/project-writeguard-hero.svg',
    alt: 'Compact WriteGuard runtime preview showing repeated agent calls entering one protected operation that reconciles uncertainty and confirms one external effect.',
    kind: 'diagram',
  },
  images: [
    {
      title: 'Operation Flow',
      src: '/assets/project-writeguard-operation-flow.svg',
      alt: 'Diagram showing two AI-agent invocations merging into one stable WriteGuard operation that reconciles an uncertain result and confirms one external action.',
      caption: 'The core failure mode: the provider may have succeeded, but the agent lost proof. WriteGuard records UNKNOWN and reconciles before another write is allowed.',
      fit: 'contain',
      kind: 'diagram',
    },
    {
      title: 'Infrastructure Architecture',
      src: '/assets/project-writeguard-infrastructure.svg',
      alt: 'Infrastructure diagram showing an AI agent and MCP tool calling the WriteGuard SDK, which coordinates PostgreSQL storage, provider adapters, external providers, reconciliation workers, receipts, and shadow telemetry.',
      caption: 'WriteGuard sits between agent tools, durable PostgreSQL state, provider adapters, external providers, and reconciliation workers.',
      fit: 'contain',
      kind: 'diagram',
    },
    {
      title: 'Sandbox Demo Comparison',
      src: '/assets/project-writeguard-unsafe-vs-guarded.svg',
      alt: 'Sandbox demo comparison showing two unsafe agent calls creating two partial refunds while the guarded flow treats two calls as one stable refund operation that reconciles and confirms once.',
      caption: 'The demo uses partial refunds because duplicate execution is visible: unsafe calls created two effects, while the guarded path confirmed one stable operation.',
      fit: 'contain',
      kind: 'diagram',
    },
    {
      title: 'State Machine',
      src: '/assets/project-writeguard-state-machine.svg',
      alt: 'WriteGuard state machine moving through planned, claimed, submitted, unknown, reconciling, confirmed, failed, and needs review states.',
      caption: 'UNKNOWN is first-class, which makes reconciliation part of the runtime instead of an ad hoc manual cleanup step.',
      fit: 'contain',
      kind: 'diagram',
    },
    {
      title: 'Validation Evidence',
      src: '/assets/project-writeguard-validation-scorecard.svg',
      alt: 'Engineering validation summary showing 39 automated tests, one external effect across ten concurrent calls, worker crash recovery, MCP integration, and Stripe test-mode validation.',
      caption: 'The current proof is technical validation and sandbox readiness, not production certification or external adoption.',
      fit: 'contain',
      kind: 'diagram',
    },
  ],
  galleryImages: [
    {
      title: 'Sandbox Demo Comparison',
      src: '/assets/project-writeguard-unsafe-vs-guarded.svg',
      alt: 'Sandbox demo comparison showing two unsafe agent calls creating two partial refunds while the guarded flow treats two calls as one stable refund operation that reconciles and confirms once.',
      caption: 'Ordinary replay can duplicate writes; WriteGuard reconciles once.',
      fit: 'contain',
      kind: 'diagram',
    },
    {
      title: 'Infrastructure Architecture',
      src: '/assets/project-writeguard-infrastructure.svg',
      alt: 'Infrastructure diagram showing an AI agent and MCP tool calling the WriteGuard SDK, which coordinates PostgreSQL storage, provider adapters, external providers, reconciliation workers, receipts, and shadow telemetry.',
      caption: 'SDK, ledger, adapter, provider, reconciler, and receipt stay separate.',
      fit: 'contain',
      kind: 'diagram',
    },
    {
      title: 'State Machine',
      src: '/assets/project-writeguard-state-machine.svg',
      alt: 'WriteGuard state machine moving through planned, claimed, submitted, unknown, reconciling, confirmed, failed, and needs review states.',
      caption: 'UNKNOWN becomes a runtime state, not manual cleanup.',
      fit: 'contain',
      kind: 'diagram',
    },
    {
      title: 'Validation Evidence',
      src: '/assets/project-writeguard-validation-scorecard.svg',
      alt: 'Engineering validation summary showing 39 automated tests, one external effect across ten concurrent calls, worker crash recovery, MCP integration, and Stripe test-mode validation.',
      caption: 'Evidence passed; pilot feedback is the next test.',
      fit: 'contain',
      kind: 'diagram',
    },
  ],
  screenshotEyebrow: 'System Diagrams',
  screenshotTitle: 'Demo Flow, Architecture, and Validation Evidence',
  buildEyebrow: 'Implementation',
  buildTitle: 'Reliability Pieces Built',
  technicalEyebrow: 'Runtime Logic',
  technicalTitle: 'How WriteGuard Handles Uncertain Writes',
  technicalSummary:
    'This section is not another architecture diagram. It shows the rule WriteGuard enforces around the unsafe moment: when an external provider may have acted, but the agent no longer has proof.',
  technicalFlow: [
    {
      label: 'Identity',
      title: 'Name the business effect',
      text: 'Repeated tool calls can point back to one intended refund, booking, payout, or access change.',
    },
    {
      label: 'Uncertainty',
      title: 'Hold instead of retrying',
      text: 'UNKNOWN means the provider may have acted, so the next move is evidence collection, not another write.',
    },
    {
      label: 'Closure',
      title: 'Resolve with a receipt',
      text: 'The operation closes as confirmed, failed, or needs review with durable evidence attached.',
    },
  ],
  lessons: [
    'Provider-native idempotency helps, but it does not fully answer whether an intended business operation already happened after a crash, replay, or lost confirmation.',
    'A reliability abstraction does not need fewer lines of code to be valuable if it replaces difficult correctness machinery that teams would otherwise maintain by hand.',
    'AI-assisted building still depends on architecture, milestone design, kill criteria, technical review, product judgment, and honest boundary-setting.',
    'External pilot feedback is more valuable now than adding more internal features or a dashboard before the operational interface is proven.',
  ],
  nextSteps: [
    'Run one focused external TypeScript design-partner pilot with a team issuing Stripe test-mode partial refunds or similar consequential writes.',
    'Validate whether teams value the abstraction enough to adopt it instead of keeping custom idempotency, reconciliation, and retry logic.',
    'Decide the public repository, final name, domain, package publication path, security posture, and operational UI only after pilot feedback.',
  ],
  ctaTitle: 'Interested in Testing WriteGuard?',
  ctaBody:
    'I am looking for a focused sandbox design partner building TypeScript agent workflows with consequential external writes. WriteGuard is experimental and not production-certified.',
  ctaLabel: 'Discuss Sandbox Pilot',
  ctaHref: 'mailto:kellychenmeiyi@gmail.com?subject=WriteGuard%20sandbox%20pilot',
};

export const beamCashCaseStudy = {
  eyebrow: 'BeamCash',
  title: 'QR Payments for Sellers',
  subtitle:
    'A mobile-first MVP for sellers, performers, vendors, and donation-based groups accepting in-person payments.',
  status: 'In-progress local MVP',
  role: 'Founder, product builder, mobile app developer, and payment UX designer',
  stack: ['React Native', 'Expo', 'TypeScript', 'Expo Router', 'Stripe-ready architecture', 'QR generation', 'Express backend'],
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
      src: '/assets/project-beamcash-seller-dashboard-mobile.png',
      alt: 'BeamCash seller dashboard showing available balance, payment stats, and a branded QR code.',
      caption: 'The seller can keep QR access, payment readiness, balance, and activity together instead of managing scattered payment handles.',
      kind: 'mobile',
    },
    {
      title: 'Buyer Checkout',
      src: '/assets/project-beamcash-buyer-checkout-mobile.png',
      alt: 'BeamCash checkout screen showing a seller profile and payment amount options.',
      caption: 'The buyer can scan into checkout, confirm the seller, choose an amount, and continue without creating a BeamCash account.',
      kind: 'mobile',
    },
    {
      title: 'Home Entry',
      src: '/assets/project-beamcash-home-mobile.png',
      alt: 'BeamCash home screen with logo, seller-focused tagline, and code creation actions.',
      caption: 'The entry screen keeps the app focused: view an existing BeamCash code or recover one quickly.',
      kind: 'mobile',
    },
    {
      title: 'Code Recovery',
      src: '/assets/project-beamcash-find-code-mobile.png',
      alt: 'BeamCash find code screen for recovering an existing seller payment code.',
      caption: 'The recovery flow supports repeat use, so sellers can return to an existing payment code without rebuilding setup.',
      kind: 'mobile',
    },
  ],
  galleryImages: [
    {
      title: 'Buyer Checkout',
      src: '/assets/project-beamcash-buyer-checkout-mobile.png',
      alt: 'BeamCash checkout screen showing a seller profile and payment amount options.',
      caption: 'The buyer sees who they are paying, chooses a preset or custom amount, and moves into payment without joining another app.',
      kind: 'mobile',
    },
    {
      title: 'Seller Dashboard',
      src: '/assets/project-beamcash-seller-dashboard-mobile.png',
      alt: 'BeamCash seller dashboard showing available balance, payment stats, and a branded QR code.',
      caption: 'The seller side still matters: the dashboard gives them QR access, payment readiness, balance, and recent activity in one place.',
      kind: 'mobile',
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
