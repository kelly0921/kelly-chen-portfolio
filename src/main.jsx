import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import { getSiteRoute, isAcceleratorRoute } from './siteRouting';
import {
  applyFirstCaseStudy,
  beamCashCaseStudy,
  communityWork,
  communityMoments,
  communityConferenceMoments,
  communityResources,
  conferencePlannerProduct,
  contentAudienceProfile,
  contentCredibility,
  contentFeaturedItems,
  contentPipeline,
  contentPartnerships,
  contentPostToToolRows,
  contentResourceGroups,
  contentThemes,
  curioCaseStudy,
  experiences,
  availableTopics,
  audiencePathways,
  currentFocusNotes,
  navItems,
  personalityNotes,
  projectActions,
  projects,
  skillGroups,
  speakingEvents,
  speakingMoments,
  webPilotCaseStudy,
  writeGuardCaseStudy,
} from './portfolioData';

const pageNotes = {
  Experience: {
    label: 'Work notes',
    text: 'Technical systems, production habits, and fintech context.',
  },
  Projects: {
    label: 'Build notes',
    text: 'Product ideas, prototypes, screenshots, and what each build taught me.',
  },
  Speaking: {
    label: 'Event notes',
    text: 'Events, rooms, audiences, and the ideas I practice explaining.',
  },
  Community: {
    label: 'Access notes',
    text: 'The organizing work behind opportunity, confidence, and belonging.',
  },
  Content: {
    label: 'Share notes',
    text: 'Informal posts, newsletter ideas, and resources that make useful paths easier to find.',
  },
};

function getRoute() {
  return getSiteRoute(window.location.pathname, window.location.hash);
}

const pageMetadata = {
  home: {
    title: 'Kelly Chen | Systems, Stories, and Access',
    description:
      'Kelly Chen is a software engineer, fintech builder, and community storyteller building at the intersection of systems, stories, and access.',
  },
  experience: {
    title: 'Kelly Chen | Experience',
    description:
      'Kelly Chen experience across software engineering, fintech systems, technical fellowships, and community leadership.',
  },
  projects: {
    title: 'Kelly Chen | Projects',
    description:
      'Product and engineering case studies from Kelly Chen, including fintech MVPs, AI workflow tools, opportunity systems, and technical infrastructure projects.',
  },
  curio: {
    title: 'Kelly Chen | Curio',
    description:
      'Curio is Kelly Chen\'s invite-only private-beta AI knowledge app for turning saved social videos and links into researched, searchable resources.',
  },
  speaking: {
    title: 'Kelly Chen | Speaking',
    description:
      'Talks, workshops, and events from Kelly Chen on career leverage, technical growth, opportunity access, and emerging engineering paths.',
  },
  community: {
    title: 'Kelly Chen | Community',
    description:
      'Community organizing, student access work, and women-in-tech leadership from Kelly Chen.',
  },
  content: {
    title: 'Kelly Chen | Content and Resources',
    description:
      'Public notes, opportunity resources, student strategy guides, and aligned collaboration paths from Kelly Chen.',
  },
};

function usePageMetadata(route) {
  useEffect(() => {
    const meta = pageMetadata[route] || pageMetadata.home;
    document.title = meta.title;

    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute('content', meta.description);
    }
  }, [route]);
}

function useProductPageMotion(route) {
  useEffect(() => {
    const isProjectStory = ['beamcash', 'webpilot', 'writeguard', 'applyfirst', 'curio'].includes(route);
    const sharedMotionSelector = [
      '.page-hero',
      '.section-heading',
      '.audience-pathways',
      '.focus-item',
      '.experience-card',
      '.project-card',
      '.event-card',
      '.topic-card',
      '.community-card',
      '.media-card',
      '.content-desk',
      '.content-ready-item',
      '.content-pipeline-item',
      '.speaking-moment',
      '.community-moment',
    ].join(', ');

    document.body.classList.toggle('motion-ready', isProjectStory);
    document.body.classList.add('page-motion-ready');

    const elements = Array.from(
      document.querySelectorAll(isProjectStory ? `${sharedMotionSelector}, .product-reveal` : sharedMotionSelector),
    );
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return () => {
        document.body.classList.remove('motion-ready');
        document.body.classList.remove('page-motion-ready');
      };
    }

    elements.forEach((element) => element.classList.remove('is-visible'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px 0px 0px', threshold: 0 },
    );

    let secondFrameId = 0;
    const safetyRevealId = window.setTimeout(() => {
      elements.forEach((element) => element.classList.add('is-visible'));
    }, 1200);

    const frameId = window.requestAnimationFrame(() => {
      secondFrameId = window.requestAnimationFrame(() => {
        elements.forEach((element) => {
          const rect = element.getBoundingClientRect();
          if (rect.bottom > 0 && rect.top < window.innerHeight * 0.94) {
            element.classList.add('is-visible');
          }
          observer.observe(element);
        });
      });
    });

    return () => {
      window.clearTimeout(safetyRevealId);
      window.cancelAnimationFrame(frameId);
      window.cancelAnimationFrame(secondFrameId);
      observer.disconnect();
      document.body.classList.remove('motion-ready');
      document.body.classList.remove('page-motion-ready');
    };
  }, [route]);
}

function App() {
  const [route, setRoute] = useState(getRoute);
  const onAcceleratorRoute = isAcceleratorRoute(route);

  useEffect(() => {
    const onHashChange = () => {
      const nextRoute = getRoute();
      setRoute((currentRoute) => {
        if (currentRoute !== nextRoute) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        return nextRoute;
      });
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useProductPageMotion(route);
  usePageMetadata(route);

  const page = useMemo(() => {
    switch (route) {
      case 'experience':
        return <ExperiencePage />;
      case 'projects':
        return <ProjectsPage />;
      case 'beamcash':
        return <ProjectCaseStudyPage caseStudy={beamCashCaseStudy} />;
      case 'webpilot':
        return <ProjectCaseStudyPage caseStudy={webPilotCaseStudy} />;
      case 'writeguard':
        return <ProjectCaseStudyPage caseStudy={writeGuardCaseStudy} />;
      case 'applyfirst':
        return <ProjectCaseStudyPage caseStudy={applyFirstCaseStudy} />;
      case 'curio':
        return <ProjectCaseStudyPage caseStudy={curioCaseStudy} />;
      case 'speaking':
        return <SpeakingPage />;
      case 'community':
        return <CommunityPage />;
      case 'content':
        return <MediaPage />;
      case 'accelerator-redirect':
        return <ExternalProgramRedirect />;
      default:
        return <HomePage />;
    }
  }, [route]);

  return (
    <>
      <a className="site-skip-link" href="#main-content">Skip to content</a>
      {onAcceleratorRoute ? null : <Navbar activeRoute={route} />}
      <main id="main-content">{page}</main>
      {onAcceleratorRoute ? null : <Footer />}
    </>
  );
}

function ExternalProgramRedirect() {
  useEffect(() => {
    window.location.replace('https://recruiting-accelerator-apply.pages.dev/');
  }, []);

  return (
    <section className="section-shell external-redirect" aria-labelledby="external-redirect-title">
      <p className="eyebrow">Mentorship</p>
      <h1 id="external-redirect-title">Opening Recruiting Season Accelerator.</h1>
      <p>
        The program now lives on its dedicated application site.
      </p>
      <a className="button primary" href="https://recruiting-accelerator-apply.pages.dev/">
        Open the Program
      </a>
    </section>
  );
}

function Navbar({ activeRoute }) {
  const navActiveRoute = ['beamcash', 'webpilot', 'writeguard', 'applyfirst'].includes(activeRoute) ? 'projects' : activeRoute;
  const onAcceleratorRoute = isAcceleratorRoute(activeRoute);

  return (
    <header className="site-header">
      <a className="brand" href={onAcceleratorRoute ? '/' : '#home'} aria-label="Kelly Chen home">
        <span className="brand-mark" aria-hidden="true">
          <img src="/assets/kelly-logo.svg" alt="" />
        </span>
        <span>Kelly Chen</span>
      </a>
      <nav className="nav-links" aria-label="Primary navigation">
        {navItems.map((item) =>
          item.href.startsWith('#') ? (
            <a
              key={item.label}
              className={navActiveRoute === item.href.slice(1) ? 'active' : ''}
              href={onAcceleratorRoute ? `/${item.href}` : item.href}
            >
              {item.label}
            </a>
          ) : (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ),
        )}
      </nav>
    </header>
  );
}

function HomePage() {
  return (
    <>
      <section className="hero section-shell">
        <div className="hero-copy reveal">
          <p className="eyebrow">Software engineer / builder / community voice</p>
          <h1>
            Hi, I'm <span className="hero-name">Kelly Chen</span>
          </h1>
          <p className="hero-intro">
            I build systems, resources, and communities that make hidden pathways
            easier to navigate. My work connects fintech engineering, product
            curiosity, real user feedback, AI-assisted workflows, and
            access-minded community building.
          </p>
          <div className="button-row">
            <a className="button primary" href="#experience">
              View Experience
            </a>
            <a className="button secondary" href="#projects">
              See Projects
            </a>
            <a className="button ghost" href="https://www.linkedin.com/in/kellychen0921/" target="_blank" rel="noreferrer">
              Connect
            </a>
          </div>
          <ImpactStrip />
        </div>
        <PersonalSnapshot />
      </section>

      <section className="section-shell current-focus-section">
        <SectionHeading eyebrow="Now" title="Current Focus" />
        <CurrentFocus items={currentFocusNotes} />
      </section>

      <AudiencePathways />

      <PersonalityCollage />

      <CTASection />
    </>
  );
}

function AudiencePathways() {
  return (
    <section className="audience-pathways section-shell" aria-labelledby="audience-pathways-title">
      <div className="audience-pathways-copy">
        <p className="eyebrow">Start Here</p>
        <h2 id="audience-pathways-title">Explore by Interest</h2>
        <p>
          A quick way to find the parts of my work that match what you are here
          to understand, use, or build on.
        </p>
      </div>
      <div className="audience-pathway-list">
        {audiencePathways.map((pathway) => (
          <a className={`audience-pathway-row audience-pathway-${pathway.tone}`} href={pathway.href} key={pathway.label}>
            <span>{pathway.label}</span>
            <div>
              <strong>{pathway.title}</strong>
              <p>{pathway.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function ExperiencePage() {
  return (
    <>
      <PageHero
        eyebrow="Experience"
        title="Work History"
        body="A timeline of software engineering, fintech, data, production systems, and e-commerce work."
      />
      <section className="section-shell two-column">
        <div className="timeline">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.organization} {...experience} />
          ))}
        </div>
        <aside className="skills-panel">
          <SectionHeading eyebrow="Skills" title="Technical Toolkit" />
          {skillGroups.map((group) => (
            <SkillGroup key={group.title} {...group} />
          ))}
          <a className="button primary resume-link" href="/Kelly-Chen-Resume.pdf" target="_blank" rel="noreferrer">
            View Resume
          </a>
        </aside>
      </section>
    </>
  );
}

function ProjectsPage() {
  const built = projects.filter((project) => project.group === 'Built and in Progress');
  const infrastructure = projects.filter((project) => project.group === 'Experimental Infrastructure');
  const concepts = projects.filter((project) => project.group === 'Startup Concept');

  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Projects & Prototypes"
        body="A focused index of products, technical systems, and early ideas I am building or testing through real workflows."
      />
      <ProjectSection title="Built and in Progress" projects={built} />
      <ProjectSection title="Experimental Infrastructure" projects={infrastructure} />
      <ProjectSection title="Startup Concepts" projects={concepts} fintech />
      <PageCTA
        eyebrow="Open to conversation"
        title="Fintech, Product, AI"
        body="I like talking with people who care about reducing product friction and turning rough ideas into useful workflows."
        href="https://github.com/kelly0921"
        label="View GitHub"
      />
    </>
  );
}

function SpeakingPage() {
  const upcomingEvents = speakingEvents.filter((event) => event.status === 'Upcoming');
  const pastEvents = speakingEvents.filter((event) => event.status !== 'Upcoming');

  return (
    <>
      <PageHero
        eyebrow="Speaking"
        title="Speaking & Events"
        body="Workshops, virtual talks, flash sessions, and conversations that help students and communities turn effort into leverage, direction, and practical next steps."
      />
      {upcomingEvents.length ? (
        <section className="section-shell">
          <SectionHeading eyebrow="Next" title="Upcoming Talk" />
          <div className="event-grid event-grid-featured">
            {upcomingEvents.map((event) => (
              <EventCard key={event.event} {...event} />
            ))}
          </div>
        </section>
      ) : null}
      <section className="section-shell">
        <SectionHeading eyebrow="Speaker Archive" title="Past Talks" />
        <div className="event-grid">
          {pastEvents.map((event) => (
            <EventCard key={event.event} {...event} />
          ))}
        </div>
      </section>
      {speakingMoments.length ? (
        <section className="section-shell">
          <SectionHeading eyebrow="Moments" title="Speaking Moments" />
          <div className="speaking-moment-grid">
            {speakingMoments.map((moment) => (
              <SpeakingMoment key={moment.src} {...moment} />
            ))}
          </div>
        </section>
      ) : null}
      <section className="section-shell topic-section">
        <SectionHeading eyebrow="Available Topics" title="What I Can Speak About" />
        <p className="section-lede topic-lede">
          I design talks to leave people with a clearer strategy, a useful framework,
          and something they can act on after the room ends.
        </p>
        <div className="topic-grid">
          {availableTopics.map((topic) => (
            <TopicCard key={topic.title} {...topic} />
          ))}
        </div>
      </section>
      <PageCTA
        eyebrow="Speaking inquiries"
        title="Bring This Talk to Your Room"
        body="Reach out for workshops, panels, student events, and community rooms around women in tech, fintech, student opportunities, AI-assisted building, and early-career pathways."
        href="https://www.linkedin.com/in/kellychen0921/"
        label="Start a Speaking Idea"
      />
    </>
  );
}

function CommunityPage() {
  const girlsWhoCodeStats = [
    { label: 'Members', value: '70+' },
    { label: 'Executive board', value: '8' },
    { label: 'LinkedIn reach', value: '2.6k+' },
    { label: 'Funded conference access', value: '15' },
  ];
  const currentCommunityWork = communityWork.filter((item) => item.type === 'Ongoing focus');
  const pastCommunityWork = communityWork.filter((item) => item.type !== 'Ongoing focus');

  return (
    <>
      <PageHero
        eyebrow="Community"
        title="Community Building"
        body="Leadership, organizing, and access work that helps students find information, support, and spaces that feel meant for them."
      />
      <section className="section-shell community-overview">
        <div className="community-overview-copy">
          <p className="eyebrow">Community system</p>
          <h2>Past leadership, current access work.</h2>
          <p>
            Most of my formal student leadership roles were tied to specific seasons.
            The through-line that continues now is helping students find useful rooms,
            resources, and opportunity signals earlier.
          </p>
        </div>
        <div className="community-now-list" aria-label="Current community focus">
          <span>Now</span>
          <h3>Opportunity sharing, speaking, and resource systems.</h3>
          <p>
            The current layer is less about holding a club title and more about turning
            what I learned from those roles into useful resources, talks, and event ideas.
          </p>
        </div>
      </section>
      <section className="section-shell community-impact-split">
        <div>
          <p className="eyebrow">Girls Who Code at Lehigh</p>
          <h2>Building a campus home for women in tech.</h2>
          <p>
            As founder and president, I focused on structure: a real executive board,
            visible programming, conference access, and a student community that could
            keep momentum beyond one event.
          </p>
        </div>
        <div className="community-stat-grid" aria-label="Girls Who Code impact highlights">
          {girlsWhoCodeStats.map((stat) => (
            <span key={stat.label}>
              <strong>{stat.value}</strong>
              {stat.label}
            </span>
          ))}
        </div>
      </section>
      <section className="section-shell community-moments">
        <div className="community-moments-copy">
          <p className="eyebrow">Rewriting the Code NYC Summer Tech Hub Leader</p>
          <h2>Organizing rooms where students could meet, ask, and stay connected.</h2>
          <p>
            As a NYC Summer Tech Hub Leader, I helped turn community programming into
            repeatable touchpoints: gatherings, small-group discussions, and informal
            spaces where students could build confidence and relationships across 6+
            RTC events.
          </p>
        </div>
        <div className="community-moment-grid" aria-label="NYC Summer Tech Hub moments">
          {communityMoments.map((moment) => (
            <figure className="community-moment" key={moment.src}>
              <img src={moment.src} alt={moment.alt} loading="lazy" />
              {moment.label ? <figcaption>{moment.label}</figcaption> : null}
            </figure>
          ))}
        </div>
      </section>
      <section className="section-shell">
        <SectionHeading eyebrow="Current" title="Current Focus" />
        <div className="community-grid community-grid-current">
          {currentCommunityWork.map((item) => (
            <CommunityCard key={item.title} {...item} />
          ))}
        </div>
      </section>
      <section className="section-shell">
        <SectionHeading eyebrow="Past roles" title="Leadership Passed Forward" />
        <div className="community-grid">
          {pastCommunityWork.map((item) => (
            <CommunityCard key={item.title} {...item} />
          ))}
        </div>
      </section>
      <section className="section-shell community-conference-access">
        <div className="community-conference-copy">
          <p className="eyebrow">Conference access</p>
          <h2>Helping students turn big rooms into usable pathways.</h2>
          <p>
            This part is a visual archive of conference-facing work: campus prep,
            GHC 2024, and the Forté National Campus to Business Leadership Conference
            trip I helped organize for Lehigh students in New York City.
          </p>
        </div>
        <div className="conference-access-list" aria-label="Conference access themes">
          <p><strong>Prepare.</strong> Help students understand the room before they arrive.</p>
          <p><strong>Fund.</strong> Make travel, tickets, and logistics less random.</p>
          <p><strong>Convert.</strong> Turn one event into follow-up, confidence, and direction.</p>
        </div>
        <div className="community-conference-grid" aria-label="Conference access moments">
          {communityConferenceMoments.map((moment) => (
            <figure className="community-moment" key={moment.src}>
              <img src={moment.src} alt={moment.alt} loading="lazy" />
              {moment.label ? <figcaption>{moment.label}</figcaption> : null}
            </figure>
          ))}
        </div>
      </section>
      <section className="section-shell resource-strip-section">
        <SectionHeading eyebrow="Resources" title="Resources from This Work" />
        <ResourceList items={communityResources} />
      </section>
      <PageCTA
        eyebrow="Community"
        title="Let's Organize Something Together"
        body="Reach out if you want to host a student workshop, build an opportunity resource, organize a conference prep session, or make a technical community event feel more useful and welcoming."
        href="mailto:kellychenmeiyi@gmail.com?subject=Community%20event%20idea"
        label="Start a Community Idea"
      />
    </>
  );
}

function CaseStudyImage({ image, loading = 'lazy' }) {
  const imageElement = <img src={image.src} alt={image.alt} loading={loading} />;

  if (image.kind === 'mobile') {
    return <span className="phone-device">{imageElement}</span>;
  }

  if (image.fit === 'zoom') {
    return <span className="screenshot-zoom-frame">{imageElement}</span>;
  }

  return imageElement;
}

const caseStudyPageProfiles = {
  BeamCash: {
    mode: 'product',
    badge: 'Seller beta',
    audienceEyebrow: 'For sellers collecting in person',
    promise: 'Collect from people who do not use the same payment app.',
    storyTitle: 'One QR, accountless buyer checkout, organized seller follow-through.',
    storyBody:
      'A seller can keep one branded code at the table, booth, performance, or fundraiser. The buyer scans from their own phone, confirms who they are paying, and checks out without creating a BeamCash account.',
    proofEyebrow: 'Buyer and seller workflow',
    proofTitle: 'The payment handoff from table to dashboard.',
    proofBody:
      'The workflow focuses on the moments that matter most: display the QR, let the buyer confirm and pay, then give the seller one place to track readiness and activity.',
    signalTitle: 'Build Signal',
    signalBody:
      'The build connects payment reach, mobile UX, QR signage, seller readiness, and future processor boundaries into one testable checkout MVP.',
  },
  WebPilot: {
    mode: 'product',
    badge: 'Prototype',
    audienceEyebrow: 'For website revamps',
    promise: 'Turn scattered website feedback into reviewed work people can act on.',
    storyTitle: 'Context, AI drafts, review state, and handoff stay connected.',
    storyBody:
      'The important part is not that AI can generate suggestions. It is that the suggestions become traceable, editable, reviewed, and ready for implementation.',
    proofEyebrow: 'Workflow screens',
    proofTitle: 'From website context to reviewed handoff.',
    proofBody:
      'The product surfaces the operating layer around AI: context capture, review, client-ready delivery, readiness checks, and backup evidence.',
    signalTitle: 'Operational AI Signal',
    signalBody:
      'The build makes AI output accountable by tying generated work to context, evidence, review state, and implementation readiness.',
  },
  WriteGuard: {
    mode: 'technical',
    badge: 'Technical case study',
    audienceEyebrow: 'For agent infrastructure reviewers',
    promise: 'Keep one intended external action from becoming repeated real-world effects.',
    storyTitle: 'A runtime boundary for uncertain writes.',
    storyBody:
      'When a provider may have succeeded but the worker loses confirmation, retrying blindly can repeat the external effect. WriteGuard keeps the operation traceable until evidence can close it.',
    proofEyebrow: 'Architecture and evidence',
    proofTitle: 'Show the system boundary clearly.',
    proofBody:
      'The diagrams trace where AI can recommend, where developers approve, where generation stays deterministic, and how runtime state handles UNKNOWN outcomes.',
    signalTitle: 'Technical Proof',
    signalBody:
      'The engineering signal is the boundary: typed contracts, deterministic generation, verification receipts, provider limits, and recovery from uncertain external writes.',
  },
  ApplyFirst: {
    mode: 'student-product',
    badge: 'Beta testing',
    audienceEyebrow: 'For students tracking early programs',
    promise: 'Find high-signal opportunities before the application window gets crowded.',
    storyTitle: 'Discovery, timing, confidence, and next action in one place.',
    storyBody:
      'ApplyFirst gives students a clearer way to see what programs exist, whether they fit, when to watch them, and what to do next.',
    proofEyebrow: 'Product preview',
    proofTitle: 'A clearer way to track opportunity timing.',
    proofBody:
      'The preview shows searchable opportunities, preference filters, contribution loops, and the early-access shape without burying students in raw links.',
    signalTitle: 'Product Signal',
    signalBody:
      'The product value comes from combining timing, eligibility, confidence, verification, and action guidance instead of stopping at a static opportunity list.',
  },
  Curio: {
    mode: 'product',
    badge: 'Private beta',
    audienceEyebrow: 'For people who save useful content',
    promise: 'Turn saved videos and links into knowledge you can actually find again.',
    storyTitle: 'A mobile-first knowledge layer above social saves.',
    storyBody:
      'Curio starts with one familiar action: save or share a useful source. From there, it extracts what the source actually says, researches important claims, preserves provenance, and folds repeated ideas into living resources.',
    proofEyebrow: 'Mobile product flow',
    proofTitle: 'From saved source to reusable knowledge.',
    proofBody:
      'The product flow focuses on the useful moments: capture a source, turn it into a researched resource, then resurface patterns across saves without creating another content feed.',
    signalTitle: 'Product and Technical Signal',
    signalBody:
      'The build connects mobile capture, AI extraction, cited research, source provenance, user-scoped storage, search, and evidence-gated synthesis into a private-beta knowledge workflow.',
  },
};

function getCaseStudyPageProfile(caseStudy) {
  return caseStudyPageProfiles[caseStudy.eyebrow] || {
    mode: 'product',
    badge: caseStudy.status,
    audienceEyebrow: caseStudy.valuePitch?.eyebrow || 'Project case study',
    promise: caseStudy.valuePitch?.title || caseStudy.title,
    storyTitle: caseStudy.overviewTitle,
    storyBody: caseStudy.overview,
    proofEyebrow: caseStudy.screenshotEyebrow || 'Screens',
    proofTitle: caseStudy.screenshotTitle,
    proofBody: caseStudy.problem,
    signalTitle: 'Build Signal',
    signalBody: caseStudy.buildSummary || caseStudy.learned,
  };
}

function compactCaseStudyImages(caseStudy, heroImage, profile) {
  const allImages = caseStudy.galleryImages || (heroImage?.kind === 'mobile' ? caseStudy.images : caseStudy.images.slice(1));
  const limit = profile.mode === 'technical' ? 4 : 3;

  return allImages.slice(0, limit);
}

function CaseStudyAction({ href, label, secondary = false }) {
  const isExternal = href?.startsWith('http');

  return (
    <a
      className={secondary ? 'button secondary-button' : 'button primary'}
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
    >
      {label}
    </a>
  );
}

function CaseJournalChapter({ number, eyebrow, title, body }) {
  return (
    <div className="case-journal-chapter">
      <span aria-hidden="true">{number}</span>
      <div>
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2>{title}</h2>
        {body ? <p>{body}</p> : null}
      </div>
    </div>
  );
}

function CaseJournalVisual({ image, loading = 'lazy' }) {
  if (!image) {
    return null;
  }

  return (
    <figure
      className={[
        'case-journal-visual',
        'product-shot',
        image.kind === 'mobile' ? 'case-journal-visual-mobile' : '',
        image.kind === 'diagram' ? 'case-journal-visual-diagram' : '',
        image.kind === 'physical' ? 'case-journal-visual-physical' : '',
        image.fit === 'contain' ? 'case-journal-visual-contain' : '',
        image.fit === 'zoom' ? 'case-journal-visual-zoom' : '',
        image.crop === 'wide' ? 'case-journal-visual-crop-wide' : '',
      ].filter(Boolean).join(' ')}
    >
      <CaseStudyImage image={image} loading={loading} />
      <figcaption>
        <strong>{image.title}</strong>
        {image.caption ? <span>{image.caption}</span> : null}
      </figcaption>
    </figure>
  );
}

function CaseJournalProof({ images, scenes }) {
  if (scenes.length) {
    return (
      <div className="case-journal-storyboard">
        {scenes.slice(0, 3).map((scene, index) => (
          <article className="case-journal-scene product-reveal" key={scene.title}>
            <span className="case-journal-scene-number">{String(index + 1).padStart(2, '0')}</span>
            <div
              className={[
                'case-journal-scene-media',
                scene.layout ? `case-journal-scene-media-${scene.layout}` : '',
                `case-journal-scene-media-count-${scene.images.length}`,
              ].filter(Boolean).join(' ')}
            >
              {scene.images.slice(0, 2).map((image) => (
                <CaseJournalVisual image={image} key={image.title} />
              ))}
            </div>
            <div className="case-journal-scene-copy">
              {scene.label ? <p>{scene.label}</p> : null}
              <h3>{scene.title}</h3>
              <span>{scene.caption}</span>
            </div>
          </article>
        ))}
      </div>
    );
  }

  return (
    <div className={`case-journal-proof-grid case-journal-proof-count-${Math.min(images.length, 4)}`}>
      {images.map((image) => (
        <CaseJournalVisual image={image} key={image.title} />
      ))}
    </div>
  );
}

function ProjectCaseStudyPage({ caseStudy }) {
  const caseSlug = caseStudy.eyebrow.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const caseMark = caseStudy.eyebrow.slice(0, 2).toUpperCase();
  const heroImage = caseStudy.heroImage || caseStudy.images[0];
  const profile = getCaseStudyPageProfile(caseStudy);
  const projectCard = projects.find((project) => project.title === caseStudy.eyebrow);
  const galleryImages = compactCaseStudyImages(caseStudy, heroImage, profile);
  const storyboardScenes = caseStudy.storyboardScenes || [];
  const valuePitch = caseStudy.valuePitch;
  const valueSteps = valuePitch?.storyboard || valuePitch?.steps || [];
  const buildHighlights = (caseStudy.whatIBuilt || []).slice(0, 6);
  const decisionHighlights = (caseStudy.productDecisions || []).slice(0, 4);
  const technicalNotes = caseStudy.technicalFlow?.length
    ? caseStudy.technicalFlow.map((step) => ({ title: step.title, text: step.text })).slice(0, 3)
    : (caseStudy.technicalHighlights || []).slice(0, 3).map((text) => ({
        title: null,
        text,
      }));
  const lessons = (caseStudy.lessons || []).slice(0, 3);
  const nextSteps = (caseStudy.nextSteps || []).slice(0, 3);
  const signalItems = [
    {
      label: 'Current stage',
      title: caseStudy.status,
      text: projectCard?.proof || profile.signalBody,
    },
    technicalNotes.length
      ? {
          label: caseStudy.technicalEyebrow || 'Technical signal',
          title: caseStudy.technicalTitle || 'Implementation Shape',
          text: technicalNotes[0].text,
        }
      : null,
  ].filter(Boolean);
  const ctaHref = caseStudy.ctaHref || 'https://www.linkedin.com/in/kellychen0921/';
  const ctaLabel = caseStudy.ctaLabel || 'Connect';
  const scrollToBuild = (event) => {
    event.preventDefault();
    document.getElementById('case-study-proof')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <main className={`case-journal case-journal-${profile.mode} case-showcase-${caseSlug}`} data-mark={caseMark}>
      <section className="case-journal-hero section-shell product-page-stage">
        <a className="back-link" href="#projects">Back to Projects</a>
        <div className="case-journal-hero-copy product-reveal">
          <p className="case-study-profile-badge">{profile.badge}</p>
          <h1>{caseStudy.eyebrow}</h1>
          <p className="case-study-product-line">{caseStudy.title}</p>
          <p className="case-journal-promise">{profile.promise}</p>
          <p>{profile.storyBody}</p>
          <div className="case-study-hero-actions">
            <CaseStudyAction href={ctaHref} label={ctaLabel} />
            <a className="text-link" href="#case-study-proof" onClick={scrollToBuild}>See the Build</a>
          </div>
        </div>
        <div className="case-journal-hero-side product-reveal product-reveal-delay-1">
          <CaseJournalVisual image={heroImage} loading="eager" />
        </div>
        <div className="case-journal-meta product-reveal product-reveal-delay-2" aria-label={`${caseStudy.eyebrow} project snapshot`}>
          <article>
            <span>Status</span>
            <strong>{caseStudy.status}</strong>
          </article>
          <article>
            <span>Role</span>
            <strong>{caseStudy.role}</strong>
          </article>
          <article>
            <span>Stack</span>
            <TagCloud tags={caseStudy.stack} />
          </article>
        </div>
      </section>

      <section className="case-journal-noticed section-shell product-reveal">
        <CaseJournalChapter
          number="01"
          eyebrow={caseStudy.overviewEyebrow || 'Noticed'}
          title={caseStudy.overviewTitle || profile.storyTitle}
          body={caseStudy.overview}
        />
        <div className="case-journal-noticed-grid">
          <article>
            <span>{caseStudy.problemEyebrow || 'What changed'}</span>
            <h3>{caseStudy.problemTitle || 'What needed to improve'}</h3>
            <p>{caseStudy.problem}</p>
          </article>
          {caseStudy.systemLens ? (
            <article>
              <span>{caseStudy.systemLens.eyebrow}</span>
              <h3>{caseStudy.systemLens.title}</h3>
              <p>{caseStudy.systemLens.body}</p>
            </article>
          ) : null}
        </div>
      </section>

      <section className="case-journal-built section-shell product-reveal" id="case-study-proof">
        <CaseJournalChapter
          number="02"
          eyebrow={caseStudy.buildEyebrow || 'Built'}
          title={caseStudy.buildTitle || 'What I Built'}
          body={caseStudy.buildSummary}
        />
        <div className="case-journal-build-grid">
          {buildHighlights.map((item, index) => (
            <article key={item}>
              <span>{caseStudy.buildLabels?.[index] || `Part ${index + 1}`}</span>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="case-journal-flow section-shell product-reveal">
        <CaseJournalChapter
          number="03"
          eyebrow={profile.proofEyebrow}
          title={profile.proofTitle}
          body={profile.proofBody}
        />
        {valueSteps.length ? (
          <ol className="case-journal-flow-strip" aria-label={`${caseStudy.eyebrow} core flow`}>
            {valueSteps.slice(0, 3).map((step, index) => (
              <li key={step.title}>
                <span>{step.label || String(index + 1).padStart(2, '0')}</span>
                <strong>{step.title}</strong>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        ) : null}
        <CaseJournalProof
          images={galleryImages.length ? galleryImages : caseStudy.images}
          scenes={storyboardScenes}
        />
      </section>

      {caseStudy.demo ? (
        <section className="case-study-demo-link section-shell product-reveal">
          <div>
            <p className="eyebrow">{caseStudy.demo.eyebrow || 'Demo'}</p>
            <h2>{caseStudy.demo.title}</h2>
            <p>{caseStudy.demo.body}</p>
          </div>
          <a className="button secondary-button" href={caseStudy.demo.href} target="_blank" rel="noreferrer">
            {caseStudy.demo.label || 'Watch Demo'}
          </a>
        </section>
      ) : null}

      <section className="case-journal-signal section-shell product-reveal">
        <CaseJournalChapter
          number="04"
          eyebrow="Signal"
          title={profile.signalTitle}
          body={profile.signalBody}
        />
        <div className="case-journal-signal-grid">
          {signalItems.map((item) => (
            <article key={`${item.label}-${item.title}`}>
              <span>{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="case-journal-decisions section-shell product-reveal">
        <CaseJournalChapter
          number="05"
          eyebrow={caseStudy.decisionEyebrow || 'Design choices'}
          title={caseStudy.decisionTitle || 'Why It Works This Way'}
          body={caseStudy.decisionIntro || caseStudy.systemLens?.body}
        />
        <div className="case-journal-decision-list">
          {decisionHighlights.map((decision) => (
            <article key={decision.title}>
              <h3>{decision.title}</h3>
              <p>{decision.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="case-journal-reflection section-shell product-reveal">
        <article>
          <CaseJournalChapter
            number="06"
            eyebrow="Learned"
            title="What This Taught Me"
          />
          <ul>
            {lessons.map((lesson) => (
              <li key={lesson}>{lesson}</li>
            ))}
          </ul>
        </article>
        <article>
          <p className="eyebrow">Next</p>
          <h2>Where It Goes Next</h2>
          <ul>
            {nextSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>
        </article>
      </section>

      <PageCTA
        eyebrow="Project conversation"
        title={caseStudy.ctaTitle}
        body={caseStudy.ctaBody}
        href={ctaHref}
        label={ctaLabel}
      />
    </main>
  );
}

function MediaPage() {
  return (
    <>
      <PageHero
        eyebrow="Content"
        title="Content & Resources"
        body="Notes, tools, and resources from what I am learning across software engineering, building, speaking, mentoring, and community work."
      />
      <section className="section-shell content-editorial-section">
        <ContentDesk themes={contentThemes} tools={contentResourceGroups} product={conferencePlannerProduct} />
      </section>
      <section className="section-shell content-featured-section">
        <FeaturedContentList items={contentFeaturedItems} />
      </section>
      <section className="section-shell content-product-section">
        <ContentPostToTools rows={contentPostToToolRows} />
      </section>
      <section className="section-shell content-audience-section">
        <ContentAudienceKit profile={contentAudienceProfile} credibility={contentCredibility} />
      </section>
      <section className="section-shell content-pipeline-section">
        <ContentPipeline items={contentPipeline} />
      </section>
      <section className="section-shell content-partnership-section" id="partnerships">
        <ContentPartnerships partnerships={contentPartnerships} />
      </section>
      <PageCTA
        eyebrow="Selective collaborations"
        title="Have Something Genuinely Useful for This Audience?"
        body="Reach out if the idea fits students, emerging engineers, builders, or technical communities, and still gives people something useful even before any partnership layer."
        href="mailto:kellychenmeiyi@gmail.com?subject=Content%20collaboration"
        label="Start the Conversation"
      />
    </>
  );
}

function ContentDesk({ themes, tools, product }) {
  const primaryTool = tools[0];

  return (
    <div className="content-desk">
      <div className="content-desk-intro">
        <p className="eyebrow">What I talk about</p>
        <h2>Useful Notes From Building, Working, and Organizing</h2>
        <p>
          I share what I am noticing in technical work, early-career decisions,
          product experiments, conferences, and communities. The best ideas become
          resources people can actually use.
        </p>
        <div className="content-theme-chips" aria-label="Content themes">
          {themes.map((theme) => (
            <span className={`content-theme-chip content-tone-${theme.tone}`} key={theme.label}>
              {theme.title}
            </span>
          ))}
        </div>
      </div>

      <div className="content-ready-list" aria-label="Ready and requestable resources">
        <p className="content-ready-kicker">Current resource layer</p>
        {primaryTool ? (
          <article className="content-ready-item content-tone-blue">
            <span>{primaryTool.status}</span>
            <h3>{primaryTool.title}</h3>
            <p>{primaryTool.description}</p>
            <a className="text-link" href={primaryTool.href} target="_blank" rel="noreferrer">
              {primaryTool.ctaLabel}
            </a>
          </article>
        ) : null}
        <article className="content-ready-item content-tone-teal">
          <span>{product.label}</span>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <div className="content-ready-actions">
            <a className="text-link" href={product.primaryCta.href}>
              {product.primaryCta.label}
            </a>
            <a className="text-link muted-link" href={product.secondaryCta.href}>
              {product.secondaryCta.label}
            </a>
          </div>
        </article>
        <p className="content-desk-note">
          I only show resources here when there is a real next step.
        </p>
      </div>
    </div>
  );
}

function FeaturedContentList({ items }) {
  return (
    <div className="featured-content">
      <div className="featured-content-heading">
        <p className="eyebrow">Published samples</p>
        <h2>See the Actual Content</h2>
        <p>
          Real post screenshots belong here so visitors can see the format,
          voice, and proof. I do not use recreated LinkedIn graphics or guessed
          performance numbers.
        </p>
      </div>
      <div className="featured-content-list">
        {items.map((item) => (
          <article className={`featured-content-item content-tone-${item.tone}`} key={item.title}>
            <div className="featured-content-visual">
              {item.image ? (
                <a href={item.href} target="_blank" rel="noreferrer" aria-label={`Open ${item.title}`}>
                  <img src={item.image} alt={item.imageAlt} loading="lazy" />
                </a>
              ) : (
                <div className="content-screenshot-needed" aria-label="LinkedIn post screenshot needed">
                  <span>{item.slot}</span>
                  <strong>Real LinkedIn screenshot needed</strong>
                  <p>Add a cropped screenshot and exact post URL before this becomes a published proof card.</p>
                </div>
              )}
            </div>
            <div className="featured-content-copy">
              <div className="featured-content-meta">
                <span>{item.theme}</span>
                <em>{item.format}</em>
                {item.publishedDate ? <time>{item.publishedDate}</time> : <em>Date Needed</em>}
              </div>
              <h3>{item.title}</h3>
              <p className="featured-content-reason">
                <strong>What this demonstrates:</strong> {item.demonstrates}
              </p>
              {item.performance?.length ? (
                <div className="featured-performance" aria-label="Verified content performance">
                  {item.performance.map((metric) => (
                    <span key={metric.label}>
                      <strong>{metric.value}</strong> {metric.label}
                    </span>
                  ))}
                  {item.performanceLastUpdated ? <small>Updated {item.performanceLastUpdated}</small> : null}
                </div>
              ) : null}
              <div className="featured-content-footer">
                {item.href ? (
                  <a className="text-link" href={item.href} target="_blank" rel="noreferrer">
                    {item.ctaLabel}
                  </a>
                ) : (
                  <span>Exact post URL needed</span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function ContentPostToTools({ rows }) {
  return (
    <div className="content-tool-bridge">
      <div className="content-section-intro">
        <p className="eyebrow">From Posts to Practical Tools</p>
        <h2>How Public Notes Become Usable Systems</h2>
        <p>
          The content is not only commentary. The strongest posts become apps,
          planning resources, workshops, and concrete student workflows.
        </p>
      </div>
      <div className="content-tool-rows">
        {rows.map((row) => (
          <article className={`content-tool-row content-tone-${row.tone}`} key={row.toolTitle}>
            <div className="tool-row-post">
              <span>{row.postLabel}</span>
              {row.postScreenshot ? (
                <img src={row.postScreenshot} alt={row.postImageAlt} loading="lazy" />
              ) : (
                <div className="tool-row-placeholder">Post screenshot</div>
              )}
              <strong>{row.postTitle}</strong>
            </div>
            <div className="tool-row-product">
              <span>{row.toolLabel}</span>
              <figure>
                <img src={row.toolImage} alt={row.toolImageAlt} loading="lazy" />
              </figure>
              <h3>{row.toolTitle}</h3>
            </div>
            <div className="tool-row-result">
              <span>{row.resultTitle}</span>
              <p>{row.result}</p>
              <a className="text-link" href={row.href} target={row.href.startsWith('http') ? '_blank' : undefined} rel={row.href.startsWith('http') ? 'noreferrer' : undefined}>
                {row.ctaLabel}
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function ContentAudienceKit({ profile, credibility }) {
  const hasMetrics = profile.metrics?.some((metric) => metric.value);

  return (
    <div className="content-audience-panel">
      <div className="content-section-intro">
        <p className="eyebrow">Audience and credibility</p>
        <h2>Who the Content Is For</h2>
        <p>{profile.summary}</p>
        <div className="creator-platforms" aria-label="Content platforms">
          {profile.platforms.map((platform) => (
            <a href={platform.href} key={platform.label} target="_blank" rel="noreferrer">
              {platform.label}
            </a>
          ))}
        </div>
        {hasMetrics ? (
          <div className="audience-metric-grid">
            {profile.metrics
              .filter((metric) => metric.value)
              .map((metric) => (
                <article key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </article>
              ))}
          </div>
        ) : null}
      </div>
      <div className="content-audience-details">
        <div className="audience-group-list">
          {profile.audienceGroups.map((group) => (
            <article className={`audience-group content-tone-${group.tone}`} key={group.title}>
              <span>{group.label}</span>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
            </article>
          ))}
        </div>
        <div className="content-proof-list" aria-label="Credibility beyond impressions">
          {credibility.map((item) => (
            <article className={`content-proof-item content-tone-${item.tone}`} key={item.title}>
              <span>{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              {item.href ? <a className="text-link" href={item.href}>{item.ctaLabel}</a> : null}
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

function ContentPipeline({ items }) {
  return (
    <div className="content-pipeline">
      <div className="content-pipeline-heading">
        <p className="eyebrow">In progress</p>
        <h2>What is Still Being Shaped</h2>
        <p>
          These ideas stay small until they have real links, files, screenshots,
          or a clear way to use them.
        </p>
      </div>
      <ol>
        {items.map((item) => (
          <li className={`content-pipeline-item content-pipeline-${item.tone}`} key={item.title}>
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

function ContentPartnerships({ partnerships }) {
  return (
    <div className="content-partnerships">
      <div className="content-section-intro">
        <p className="eyebrow">Partnerships and collaborations</p>
        <h2>{partnerships.title}</h2>
        <p>{partnerships.description}</p>
      </div>
      <div className="partnership-body">
        <div className="partnership-options">
          {partnerships.options.map((option) => (
            <article className={`partnership-option content-tone-${option.tone}`} key={option.title}>
              <span>{option.label}</span>
              <h3>{option.title}</h3>
              <p>{option.description}</p>
            </article>
          ))}
        </div>
        <aside className="partnership-principles">
          <span>{partnerships.philosophyLabel}</span>
          <p>{partnerships.philosophy}</p>
          <ul>
            {partnerships.principles.map((principle) => (
              <li key={principle}>{principle}</li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
}

function PersonalSnapshot() {
  return (
    <aside className="personal-snapshot reveal" aria-label="Kelly Chen portfolio snapshot">
      <div className="signal-panel" aria-hidden="true">
        <div className="signal-header">
          <span>Working board</span>
        </div>
        <div className="working-board">
          <article className="board-note board-note-primary">
            <span>Current focus</span>
            <strong>Fintech systems, product friction, and useful resources.</strong>
          </article>
          <article className="board-note">
            <span>Building</span>
            <strong>Backend work, QR payment ideas, AI-assisted prototypes.</strong>
          </article>
          <article className="board-note">
            <span>Community</span>
            <strong>Conference access, student pathways, opportunity sharing.</strong>
          </article>
          <article className="board-note">
            <span>Public voice</span>
            <strong>Speaking, LinkedIn notes, newsletter ideas.</strong>
          </article>
        </div>
      </div>
    </aside>
  );
}

function ImpactStrip() {
  return (
    <div className="impact-strip" aria-label="Portfolio highlights">
      <span>
        <strong>Current</strong>
        Bloomberg - Fixed Income Private Securities
      </span>
      <span>
        <strong>Fintech</strong>
        Bloomberg + JPMorganChase + Visa
      </span>
      <span>
        <strong>Community</strong>
        Rewriting the Code + Girls Who Code + CodePath
      </span>
    </div>
  );
}

function PersonalityCollage() {
  return (
    <section className="personality-collage section-shell" aria-label="Kelly Chen personality notes">
      <div className="collage-intro">
        <p className="eyebrow">A little more Kelly</p>
        <h2>How I Think and Build</h2>
      </div>
      <div className="collage-band" role="list">
        {personalityNotes.map((note) => (
          <article key={note.label} className="collage-band-item" role="listitem">
            <span>{note.label}</span>
            <p>{note.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title }) {
  return (
    <div className="section-heading reveal">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
    </div>
  );
}

function PageHero({ eyebrow, title, body }) {
  const note = pageNotes[eyebrow];
  const heroClass = `page-hero section-shell reveal page-hero-${eyebrow.toLowerCase()}`;

  return (
    <section className={heroClass}>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
      {note ? (
        <aside className="page-field-mark" aria-label={`${eyebrow} field note`}>
          <span>{note.label}</span>
          <p>{note.text}</p>
        </aside>
      ) : null}
    </section>
  );
}

function PillarCard({ id, title, description, href }) {
  return (
    <article className={`pillar-card pillar-${id}`}>
      <div className="pillar-card-top">
        <SignatureMark variant={id} />
        <span className="pillar-label">{title}</span>
      </div>
      <p>{description}</p>
      <a href={href}>Explore</a>
    </article>
  );
}

function SignatureMark({ variant }) {
  return (
    <span className={`signature-mark mark-${variant}`} aria-hidden="true">
      <i />
      <b />
      <em />
    </span>
  );
}

function CurrentFocus({ items }) {
  return (
    <div className="focus-canvas">
      <div className="focus-canvas-copy">
        <p>
          The current through-line is technical systems, practical product
          validation, and access work that turns useful paths into something
          easier to act on.
        </p>
        <div className="focus-thread-list">
          {items.map((item) => (
            <HighlightCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

function HighlightCard({ type, title, description, note, visual }) {
  return (
    <article className={`focus-item focus-item-${visual?.kind || 'text'}`}>
      {visual ? <FocusVisual {...visual} /> : null}
      <div className="focus-copy">
        <span className="focus-mode">{type}</span>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <span className="focus-note">{note}</span>
    </article>
  );
}

function FocusVisual({ kind, src, alt }) {
  const className = `focus-visual focus-visual-${kind}`;

  if (kind === 'phone') {
    return (
      <span className={className}>
        <span className="phone-device focus-phone-device">
          <img src={src} alt={alt} loading="lazy" />
        </span>
      </span>
    );
  }

  return (
    <span className={className}>
      <img src={src} alt={alt} loading="lazy" />
    </span>
  );
}

function ExperienceCard({ organization, logo, role, context, dates, dateRange, summary, bullets, skills }) {
  return (
    <article className="experience-card">
      <div className="experience-heading">
        <div className="experience-title-row">
          <CompanyLogo logo={logo} organization={organization} />
          <div>
            <div className="experience-meta">
              <span>{dates}</span>
              {dateRange ? <time>{dateRange}</time> : null}
            </div>
            <h3>{organization}</h3>
            <p>{role}</p>
          </div>
        </div>
        <strong>{context}</strong>
      </div>
      {summary ? <p>{summary}</p> : null}
      <ul>
        {bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
      <TagCloud tags={skills} />
    </article>
  );
}

function CompanyLogo({ logo, organization }) {
  const text = logo?.text || organization.slice(0, 2).toUpperCase();
  const tone = logo?.tone || 'blue';
  const label = logo?.label || organization;
  const hasImage = Boolean(logo?.src);

  return (
    <span className={`company-logo logo-${tone}${hasImage ? ' has-image' : ''}`} aria-label={`${label} logo`} title={label}>
      {hasImage ? <img src={logo.src} alt="" loading="lazy" /> : text}
    </span>
  );
}

function ProjectSection({ title, projects: projectItems, fintech = false }) {
  return (
    <section className={`section-shell project-showcase-section${fintech ? ' fintech-section' : ''}`}>
      <SectionHeading title={title} />
      <div className="project-showcase-list">
        {projectItems.map((project, index) => (
          <ProjectCard key={project.title} index={index} {...project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ title, mark, status, description, image, imageFit, imageFrame, imageAlt, problem, user, proof, tags, index }) {
  const projectAction = projectActions[title];
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const visualClasses = [
    'project-visual',
    `project-visual-${slug}`,
    imageFit === 'contain' ? 'project-visual-contain' : '',
    imageFrame === 'desktop' ? 'project-visual-desktop' : '',
    imageFrame === 'phone' ? 'project-visual-phone' : '',
  ].filter(Boolean).join(' ');

  return (
    <article className={`project-card project-showcase project-showcase-${slug}${index % 2 === 1 ? ' reverse' : ''}`}>
      <div className={visualClasses}>
        {imageFrame === 'phone' ? (
          <span className="phone-device project-phone-device">
            <img src={image} alt={imageAlt} loading="lazy" />
          </span>
        ) : (
          <img src={image} alt={imageAlt} loading="lazy" />
        )}
      </div>
      <div className="project-copy">
        <div className="project-heading">
          <ProjectMark mark={mark} title={title} />
          <div>
            <span>{status}</span>
            <h3>{title}</h3>
          </div>
        </div>
        <div className="project-card-callout">
          <p>{description}</p>
        </div>
        <dl>
          <div>
            <dt>Problem</dt>
            <dd>{problem}</dd>
          </div>
          <div>
            <dt>Built for</dt>
            <dd>{user}</dd>
          </div>
          <div>
            <dt>Proof</dt>
            <dd>{proof}</dd>
          </div>
        </dl>
        <TagCloud tags={tags} />
        {projectAction ? <ProjectAction {...projectAction} /> : null}
      </div>
    </article>
  );
}

function ProjectMark({ mark, title }) {
  const text = mark?.text || title.slice(0, 2).toUpperCase();
  const tone = mark?.tone || 'teal';
  const label = mark?.label || title;
  const src = mark?.src;
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');

  return (
    <span className={`project-mark project-mark-${tone} project-mark-${slug}`} aria-label={`${label} mark`} title={label}>
      {src ? <img src={src} alt="" loading="lazy" /> : text}
    </span>
  );
}

function EventCard({ event, role, topic, subtitle, focus, date, format, location, description, href, linkLabel, image, imageAlt }) {
  return (
    <article className="event-card">
      {image ? (
        <figure className="event-photo">
          <img src={image} alt={imageAlt || `${event} visual`} loading="lazy" />
        </figure>
      ) : null}
      <span>{role}</span>
      <h3>{event}</h3>
      <div className="event-talk">
        <p>{topic}</p>
        {subtitle ? <p>{subtitle}</p> : null}
        {focus ? <p>{focus}</p> : null}
      </div>
      <dl>
        <div>
          <dt>Date</dt>
          <dd>{date}</dd>
        </div>
        <div>
          <dt>Format</dt>
          <dd>{format}</dd>
        </div>
        <div>
          <dt>Location</dt>
          <dd>{location}</dd>
        </div>
      </dl>
      <p>{description}</p>
      {href ? (
        <a className={linkLabel ? 'event-link event-link-cta' : 'event-link'} href={href} target="_blank" rel="noreferrer">
          {linkLabel || 'Event site'}
        </a>
      ) : null}
    </article>
  );
}

function SpeakingMoment({ src, alt, caption }) {
  return (
    <figure className="speaking-moment">
      <img src={src} alt={alt} loading="lazy" />
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}

function TopicCard({ title, description, icon, outcome }) {
  return (
    <article className="topic-card">
      <span className="topic-icon" aria-hidden="true">
        <TopicIcon name={icon} />
      </span>
      <h3>{title}</h3>
      <p>{description}</p>
      {outcome ? (
        <div className="topic-outcome">
          <span>Takeaway</span>
          <p>{outcome}</p>
        </div>
      ) : null}
    </article>
  );
}

function TopicIcon({ name }) {
  const common = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.8',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  };

  if (name === 'engineering') {
    return (
      <svg {...common}>
        <path d="M8.5 8 4.5 12l4 4" />
        <path d="m15.5 8 4 4-4 4" />
        <path d="m13.5 6-3 12" />
      </svg>
    );
  }

  if (name === 'fintech') {
    return (
      <svg {...common}>
        <rect x="4" y="6.5" width="16" height="11" rx="2.5" />
        <path d="M4 10h16" />
        <path d="M8 14h3" />
        <path d="M15.5 14h.01" />
      </svg>
    );
  }

  if (name === 'ai') {
    return (
      <svg {...common}>
        <path d="M12 4.5v3" />
        <path d="M12 16.5v3" />
        <path d="M4.5 12h3" />
        <path d="M16.5 12h3" />
        <path d="m7 7 2.1 2.1" />
        <path d="m14.9 14.9 2.1 2.1" />
        <path d="m17 7-2.1 2.1" />
        <path d="m9.1 14.9-2.1 2.1" />
        <circle cx="12" cy="12" r="2.7" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <circle cx="7" cy="8" r="2.4" />
      <circle cx="17" cy="8" r="2.4" />
      <circle cx="12" cy="16" r="2.4" />
      <path d="M8.7 10.1 10.5 14" />
      <path d="m15.3 10.1-1.8 3.9" />
      <path d="M9.4 8h5.2" />
    </svg>
  );
}

function CommunityCard({ title, type, role, timeframe, scale, summary, action, impact, tags }) {
  return (
    <article className="community-card">
      <span>{type}</span>
      <h3>{title}</h3>
      <div className="community-card-meta">
        <strong>{role}</strong>
        <time>{timeframe}</time>
        <em>{scale}</em>
      </div>
      <dl className="community-card-details">
        <div>
          <dt>What</dt>
          <dd>{summary}</dd>
        </div>
        <div>
          <dt>What I did</dt>
          <dd>{action}</dd>
        </div>
        <div>
          <dt>Impact</dt>
          <dd>{impact}</dd>
        </div>
      </dl>
      <TagCloud tags={tags} />
    </article>
  );
}

function ResourceList({ items }) {
  return (
    <div className="resource-list">
      {items.map((item) => (
        <article className="resource-row" key={item.title}>
          <span>{item.status}</span>
          <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

function ProjectAction({ body, href, label, primaryHref, primaryLabel, secondaryHref, secondaryLabel, compact = false }) {
  const actions = [
    primaryHref ? { href: primaryHref, label: primaryLabel, kind: 'primary' } : null,
    secondaryHref ? { href: secondaryHref, label: secondaryLabel, kind: 'secondary' } : null,
    href ? { href, label, kind: 'primary' } : null,
  ].filter(Boolean);

  return (
    <aside className={`project-action${compact ? ' project-action-compact' : ''}`}>
      {!compact && body ? <p>{body}</p> : null}
      <div className="project-action-links">
        {actions.map((action) => {
          const isExternal = action.href.startsWith('http');
          return (
            <a
              className={action.kind === 'secondary' ? 'secondary-action' : undefined}
              href={action.href}
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noreferrer' : undefined}
              key={`${action.label}-${action.href}`}
            >
              {action.label}
            </a>
          );
        })}
      </div>
    </aside>
  );
}

function SkillGroup({ title, items }) {
  return (
    <section className="skill-group">
      <h3>{title}</h3>
      <TagCloud tags={items} />
    </section>
  );
}

function TagCloud({ tags }) {
  return (
    <div className="tag-cloud">
      {tags.map((tag) => (
        <span className="tag" key={tag}>
          {tag}
        </span>
      ))}
    </div>
  );
}

function PageCTA({ eyebrow, title, body, href, label }) {
  const isExternal = href.startsWith('http');

  return (
    <section className="page-cta section-shell">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{body}</p>
      <a className="button primary" href={href} target={isExternal ? '_blank' : undefined} rel={isExternal ? 'noreferrer' : undefined}>
        {label}
      </a>
    </section>
  );
}

function CTASection() {
  return (
    <section className="cta-section section-shell" id="connect">
      <div className="cta-copy">
        <h2>Let's Connect</h2>
        <p>
          Reach out if you want to talk about software engineering, fintech,
          product ideas, student communities, speaking, or opportunity sharing.
        </p>
        <div className="button-row">
          <a className="button primary" href="https://www.linkedin.com/in/kellychen0921/" target="_blank" rel="noreferrer">
            Connect on LinkedIn
          </a>
          <a className="button secondary" href="https://github.com/kelly0921" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="button ghost" href="/Kelly-Chen-Resume.pdf" target="_blank" rel="noreferrer">
            Resume
          </a>
        </div>
      </div>
      <div className="cta-photo-frame" aria-hidden="true">
        <img className="cta-photo" src="/assets/profile.jpg" alt="" />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <span className="footer-mark" aria-hidden="true">
          <img src="/assets/kelly-logo.svg" alt="" />
        </span>
        <div>
          <p>Kelly Chen</p>
        </div>
      </div>
      <nav className="footer-links" aria-label="Footer links">
        <a href="https://www.linkedin.com/in/kellychen0921/" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href="https://github.com/kelly0921" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="/Kelly-Chen-Resume.pdf" target="_blank" rel="noreferrer">
          Resume
        </a>
        <a href="https://recruiting-accelerator-apply.pages.dev/" target="_blank" rel="noreferrer">
          Recruiting Accelerator
        </a>
      </nav>
    </footer>
  );
}

createRoot(document.getElementById('root')).render(<App />);
