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
    group: 'Startup Concept',
    title: 'QR payments for small sellers',
    mark: { text: 'QR', label: 'QR payments for small sellers', tone: 'gold' },
    status: 'MVP idea',
    description:
      'A lightweight payment flow where buyers scan a seller QR code, enter an amount, and pay through a familiar method without creating a new account.',
    image: '/assets/project-qr-sellers.svg',
    imageAlt: 'QR payment preview showing a small seller payment link, amount entry, and mobile checkout.',
    problem: 'Small sellers often need a simple way to accept payments without complex setup.',
    user: 'Street artists, garage sales, pop-up sellers, student fundraisers, and local vendors.',
    role: 'Product flow and MVP concept exploration.',
    learned: 'The best checkout flow is often the one that removes a step people did not want to take.',
    proof: 'Ability to simplify payment flows for nontechnical sellers and reason through real adoption barriers.',
    tags: ['Merchant tools', 'QR codes', 'Apple Pay', 'Google Pay', 'Small sellers'],
  },
  {
    group: 'Built / In Progress',
    title: 'AI-assisted website workflows',
    mark: { text: 'AI', label: 'AI-assisted website workflows', tone: 'indigo' },
    status: 'Exploration',
    description:
      'Experiments with using AI tools to prototype websites, product flows, and internal assistants.',
    image: '/assets/project-ai-workflows.svg',
    imageAlt: 'AI workflow preview showing prompts, review states, and generated website sections.',
    problem: 'Building useful tools quickly still requires clear structure, review, and human judgment.',
    user: 'Builders, students, small teams, and people turning ideas into working prototypes.',
    role: 'Prototype builder and product thinker.',
    learned: 'AI is most useful when paired with taste, review, and a concrete workflow.',
    proof: 'Ability to turn ambiguous ideas into structured, reviewable web prototypes with AI-assisted iteration.',
    tags: ['AI tools', 'Web workflows', 'Product prototypes'],
  },
];

export const projectActions = {
  SkanPay: {
    body:
      'I can walk through the checkout concept, coupon redemption flow, and the product questions behind merchant adoption.',
    label: 'Ask to See the Demo',
    href: 'https://www.linkedin.com/in/kellychen0921/',
  },
  'QR payments for small sellers': {
    body:
      'This concept is useful for conversations around lightweight seller tools, trust, checkout setup, and small-business payment behavior.',
    label: 'Ask to See the Flow',
    href: 'https://www.linkedin.com/in/kellychen0921/',
  },
  'AI-assisted website workflows': {
    body:
      'I can share how I use AI tools to move from rough idea to structured pages, review states, visual direction, and production-ready iteration.',
    label: 'Ask to See the Workflow',
    href: 'https://www.linkedin.com/in/kellychen0921/',
  },
};

export const speakingEvents = [
  {
    event: 'Harvard WECode 2024',
    role: 'Distinguished Fellow Leadership Award',
    topic: 'Women in tech, student access, conference outreach',
    location: 'Cambridge, MA',
    audience: 'Students and women-in-tech community members',
    description:
      'Recognized through Harvard WECode while helping expand access to women-in-tech conference opportunities.',
  },
  {
    event: 'Women in Computer Science events',
    role: 'Organizer / Facilitator',
    topic: 'Student community, career pathways, opportunity sharing',
    location: 'Lehigh University',
    audience: 'Computer science students and campus community',
    description:
      'Supported events and conversations that helped students find resources, build confidence, and connect with technical opportunities.',
  },
  {
    event: 'Cyber Sentinel Ambassador work',
    role: 'Ambassador / Representative',
    topic: 'Cybersecurity opportunities and student awareness',
    location: 'Student and program communities',
    audience: 'Students exploring cybersecurity and tech pathways',
    description:
      'Shared cybersecurity-related opportunities and helped make technical programs more visible to students.',
  },
  {
    event: 'Hackathons and student programs',
    role: 'Presenter / Organizer / Participant',
    topic: 'Building, collaboration, and technical problem solving',
    location: 'Campus and tech community events',
    audience: 'Student builders and early-career technologists',
    description:
      'Participated in and supported spaces where students could build projects, present ideas, and learn through collaboration.',
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
    title: 'Free Resources',
    description: 'Curated fellowships, conferences, scholarships, programs, and useful links for students finding their next step.',
    posts: [
      'Fellowships and conferences worth tracking',
      'Application resources I wish more students knew about',
      'Programs for students exploring software, fintech, and AI',
    ],
  },
  {
    title: 'LinkedIn Highlights',
    description: 'A selected archive of public posts, event takeaways, career lessons, and resource threads.',
    posts: [
      'Opportunity-sharing posts',
      'Women-in-tech and conference reflections',
      'Fintech, product, and early-career lessons',
    ],
  },
  {
    title: 'Future Resource Packs',
    description: 'A future home for deeper guides, templates, and newsletter resources if the free archive proves useful.',
    posts: [
      'Student opportunity guides',
      'Fintech and AI starter notes',
      'Templates, checklists, and repeat-use resources',
    ],
  },
];

export const skillGroups = [
  { title: 'Languages', items: ['C++', 'Java', 'Python', 'JavaScript', 'SQL'] },
  { title: 'Backend / Systems', items: ['Systems design', 'Spring Boot', 'REST APIs', 'Apache Kafka', 'Cassandra', 'MongoDB'] },
  { title: 'Frontend / Product UI', items: ['React.js', 'Angular', 'Swagger', 'Workflow visualization', 'Self-service tools'] },
  { title: 'Infrastructure / DevOps', items: ['CI/CD', 'Nginx', 'Prometheus', 'Grafana', 'Monitoring', 'Automated testing'] },
  { title: 'Data / Applied ML', items: ['Data analysis', 'Data modeling', 'NLP', 'Logistic regression', 'KNN'] },
  { title: 'Fintech / Product', items: ['Fixed income', 'Private securities', 'Blockchain', 'CBDC', 'QR payments', 'Product thinking'] },
  { title: 'Leadership / Communication', items: ['Coaching', 'Mentoring', 'Technical communication', 'Public speaking', 'Outreach'] },
];
