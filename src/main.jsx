import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import {
  AcceleratorFooter,
  AcceleratorFaqPage,
  AcceleratorPrivacyPage,
  AcceleratorRefundPage,
  AcceleratorTermsPage,
  RecruitingSeasonAcceleratorPage,
} from './recruitingSeasonAccelerator';
import { getSiteRoute, isAcceleratorRoute } from './siteRouting';
import {
  beamCashCaseStudy,
  communityWork,
  communityMoments,
  communityConferenceMoments,
  communityResources,
  conferencePlannerProduct,
  contentPipeline,
  contentResourceGroups,
  experiences,
  availableTopics,
  audiencePathways,
  currentFocusNotes,
  navItems,
  personalityNotes,
  pillars,
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

function useProductPageMotion(route) {
  useEffect(() => {
    const isProjectStory = ['beamcash', 'webpilot', 'writeguard'].includes(route);
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
      '.content-status-column',
      '.content-pipeline-item',
      '.speaking-moment',
      '.community-moment',
      '.conference-product',
      '.conference-product-includes',
      '.conference-product-previews figure',
      '.featured-mentorship',
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

  useEffect(() => {
    if (route !== 'mentorship') return;

    const frame = window.requestAnimationFrame(() => {
      document.getElementById('mentorship')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [route]);

  useProductPageMotion(route);

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
      case 'speaking':
        return <SpeakingPage />;
      case 'community':
        return <CommunityPage />;
      case 'content':
        return <MediaPage />;
      case 'mentorship':
        return <HomePage />;
      case 'accelerator':
        return <RecruitingSeasonAcceleratorPage />;
      case 'accelerator-terms':
        return <AcceleratorTermsPage />;
      case 'accelerator-privacy':
        return <AcceleratorPrivacyPage />;
      case 'accelerator-refund':
        return <AcceleratorRefundPage />;
      case 'accelerator-faq':
        return <AcceleratorFaqPage />;
      default:
        return <HomePage />;
    }
  }, [route]);

  return (
    <>
      <a className="site-skip-link" href="#main-content">Skip to content</a>
      {onAcceleratorRoute ? null : <Navbar activeRoute={route} />}
      <main id="main-content">{page}</main>
      {onAcceleratorRoute ? <AcceleratorFooter /> : <Footer />}
    </>
  );
}

function Navbar({ activeRoute }) {
  const navActiveRoute = ['beamcash', 'webpilot', 'writeguard'].includes(activeRoute) ? 'projects' : activeRoute;
  const onAcceleratorRoute = isAcceleratorRoute(activeRoute);

  return (
    <header className="site-header">
      <a className="brand" href={onAcceleratorRoute ? '/' : '#home'} aria-label="Kelly Chen home">
        <span className="brand-mark" aria-hidden="true">
          <img src="/assets/kelly-logo-mark.svg" alt="" />
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
          <a className="accelerator-spotlight" href="/recruiting-season-accelerator">
            <span>Now Building</span>
            <strong>Recruiting Season Accelerator</strong>
            <small>Founding Cohort Applications Open July 22</small>
          </a>
          <div className="button-row">
            <a className="button primary" href="#experience">
              View Experience
            </a>
            <a className="button secondary" href="#projects">
              See Projects
            </a>
            <a className="button secondary" href="#speaking">
              Speaking & Events
            </a>
            <a className="button ghost" href="/Kelly-Chen-Resume.pdf" target="_blank" rel="noreferrer">
              Resume
            </a>
          </div>
          <ImpactStrip />
        </div>
        <PersonalSnapshot />
      </section>

      <AudiencePathways />

      <FeaturedMentorship />

      <section className="section-shell">
        <SectionHeading eyebrow="What I do" title="Work, Voice, Community" />
        <div className="pillar-grid">
          {pillars.map((pillar) => (
            <PillarCard key={pillar.id} {...pillar} />
          ))}
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading eyebrow="Now" title="Current Focus" />
        <CurrentFocus items={currentFocusNotes} />
      </section>

      <PersonalityCollage />

      <CTASection />
    </>
  );
}

function FeaturedMentorship() {
  return (
    <section
      className="featured-mentorship section-shell"
      id="mentorship"
      aria-labelledby="featured-mentorship-title"
    >
      <div className="featured-mentorship-copy">
        <div className="featured-mentorship-status">
          <img src="/assets/kelly-logo-mark.svg" alt="" aria-hidden="true" />
          <span>Featured Mentorship Program</span>
          <strong>Founding Cohort · Applications July 22–August 2 · 6 Seats</strong>
        </div>
        <p className="eyebrow">Recruiting Season Accelerator</p>
        <h2 id="featured-mentorship-title">Turn Recruiting Effort Into a Focused Plan.</h2>
        <p>
          A four-week, small-cohort mentorship program for students pursuing software
          engineering internships or new-grad roles. Diagnose what is stuck, sharpen
          your positioning, and leave with practical next steps through workshops,
          private sessions, and personalized feedback.
        </p>
        <div className="featured-mentorship-actions">
          <a
            className="button primary"
            href="https://recruiting-accelerator-apply.pages.dev/"
            target="_blank"
            rel="noreferrer"
          >
            Explore the Program <span aria-hidden="true">↗</span>
          </a>
          <a
            className="featured-mentorship-link"
            href="https://recruiting-accelerator-apply.pages.dev/apply"
            target="_blank"
            rel="noreferrer"
          >
            Preview the Application <span aria-hidden="true">↗</span>
          </a>
        </div>
        <small>
          Independent educational program operated by Kelly Chen. Not affiliated with
          or endorsed by Bloomberg or any current or former employer.
        </small>
      </div>
      <dl className="featured-mentorship-facts">
        <div><dt>4</dt><dd>Weekly Workshops</dd></div>
        <div><dt>3</dt><dd>Private Sessions</dd></div>
        <div><dt>6</dt><dd>Participants Maximum</dd></div>
        <div><dt>$79</dt><dd>Effective Cost With Feedback Credit</dd></div>
      </dl>
    </section>
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
        body="Built work, active explorations, and startup concepts, shown with visual context and the skills behind each idea."
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

function ProjectCaseStudyPage({ caseStudy }) {
  const caseSlug = caseStudy.eyebrow.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const caseMark = caseStudy.eyebrow.slice(0, 2).toUpperCase();
  const heroImage = caseStudy.heroImage || caseStudy.images[0];
  const galleryImages = caseStudy.galleryImages || (heroImage?.kind === 'mobile' ? caseStudy.images : caseStudy.images.slice(1));

  return (
    <>
      <section className={`case-study-hero section-shell case-study-${caseSlug} product-page-stage`} data-mark={caseMark}>
        <a className="back-link" href="#projects">Back to Projects</a>
        <div className="case-study-hero-copy product-reveal">
          <h1>{caseStudy.eyebrow}</h1>
          <p className="case-study-product-line">{caseStudy.title}</p>
          <p>{caseStudy.subtitle}</p>
        </div>
        <div className="case-study-hero-side product-reveal product-reveal-delay-1">
          {heroImage && (
            <figure
              className={[
                'case-study-hero-visual',
                'product-hero-visual',
                heroImage.kind === 'mobile' ? 'case-study-hero-visual-mobile' : '',
                heroImage.fit === 'contain' ? 'case-study-visual-contain' : '',
              ].filter(Boolean).join(' ')}
            >
              <img src={heroImage.src} alt={heroImage.alt} loading="eager" />
              <figcaption>{heroImage.title}</figcaption>
            </figure>
          )}
        </div>
        <div className="case-study-dossier product-reveal product-reveal-delay-2" aria-label={`${caseStudy.eyebrow} project snapshot`}>
          <div className="case-study-dossier-item">
            <span>Status</span>
            <strong>{caseStudy.status}</strong>
          </div>
          <div className="case-study-dossier-item">
            <span>Role</span>
            <strong>{caseStudy.role}</strong>
          </div>
          <div className="case-study-dossier-item case-study-dossier-focus">
            <span>Focus</span>
            <strong>{caseStudy.overviewTitle}</strong>
            <p>{caseStudy.problemTitle}</p>
          </div>
          <div className="case-study-dossier-item case-study-dossier-stack">
            <span>Stack</span>
            <TagCloud tags={caseStudy.stack} />
          </div>
        </div>
      </section>
      {caseStudy.valuePitch && (
        <section
          className={[
            'case-study-value',
            'section-shell',
            'product-reveal',
            caseStudy.valuePitch.storyboard?.length > 0 ? 'case-study-value-story-mode' : '',
          ].filter(Boolean).join(' ')}
        >
          <div className="case-study-value-intro">
            {caseStudy.valuePitch.eyebrow && <p className="eyebrow">{caseStudy.valuePitch.eyebrow}</p>}
            <h2>{caseStudy.valuePitch.title}</h2>
            <p>{caseStudy.valuePitch.body}</p>
            {caseStudy.valuePitch.audience?.length > 0 && (
              <div className="case-study-audience-strip" aria-label={`${caseStudy.eyebrow} audience`}>
                {caseStudy.valuePitch.audience.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            )}
            <a className="button case-study-value-button" href={caseStudy.ctaHref || 'https://www.linkedin.com/in/kellychen0921/'}>
              {caseStudy.ctaLabel || 'Connect'}
            </a>
          </div>
          {caseStudy.valuePitch.storyboard?.length > 0 ? (
            <div className="case-study-value-storyboard" aria-label={`${caseStudy.eyebrow} workflow summary`}>
              {caseStudy.valuePitch.storyboard.map((step, index) => (
                <article className={`product-reveal product-reveal-delay-${Math.min(index + 1, 3)}`} key={step.title}>
                  <div className="case-study-value-story-mark" aria-hidden="true">{step.mark}</div>
                  <span>{step.label || `Step ${index + 1}`}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          ) : (
            <>
              <div className="case-study-value-compare" aria-label={`${caseStudy.eyebrow} target user value`}>
                <article>
                  <span>{caseStudy.valuePitch.beforeLabel || 'Before'}</span>
                  <ul>
                    {caseStudy.valuePitch.painPoints.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
                <article>
                  <span>{caseStudy.valuePitch.afterLabel || 'After'}</span>
                  <ul>
                    {caseStudy.valuePitch.benefits.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              </div>
              <div className="case-study-value-flow" aria-label={`${caseStudy.eyebrow} workflow summary`}>
                {caseStudy.valuePitch.steps.map((step, index) => (
                  <article className={`product-reveal product-reveal-delay-${Math.min(index + 1, 3)}`} key={step.title}>
                    <div className="case-study-value-step-mark" aria-hidden="true">{step.mark || String(index + 1).padStart(2, '0')}</div>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </article>
                ))}
              </div>
            </>
          )}
        </section>
      )}
      {caseStudy.systemLens ? (
        <section className="case-study-lens case-study-chapter section-shell product-reveal">
          <div className="case-study-lens-copy product-reveal product-reveal-delay-1">
            <p className="eyebrow">{caseStudy.systemLens.eyebrow || 'Design Lens'}</p>
            <h2>{caseStudy.systemLens.title}</h2>
            <p>{caseStudy.systemLens.body}</p>
          </div>
          <div className="case-study-lens-grid">
            {caseStudy.systemLens.items.map((item, index) => (
              <article className={`product-reveal product-reveal-delay-${Math.min(index + 2, 4)}`} key={item.label}>
                <span>{item.label}</span>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>
      ) : null}
      <section className="case-study-lede case-study-chapter section-shell product-reveal">
        <article className="case-study-lede-main product-reveal product-reveal-delay-1">
          <p className="eyebrow">{caseStudy.overviewEyebrow || 'Overview'}</p>
          <h2>{caseStudy.overviewTitle}</h2>
          <p>{caseStudy.overview}</p>
        </article>
        <aside className="case-study-problem product-reveal product-reveal-delay-2">
          <p className="eyebrow">{caseStudy.problemEyebrow || 'Problem'}</p>
          <h2>{caseStudy.problemTitle}</h2>
          <p>{caseStudy.problem}</p>
        </aside>
      </section>
      <section className="case-study-section case-study-chapter case-study-gallery-section section-shell product-reveal">
        <SectionHeading eyebrow={caseStudy.screenshotEyebrow || 'Product Walkthrough'} title={caseStudy.screenshotTitle} />
        <div className="screenshot-stack">
          {(galleryImages.length ? galleryImages : caseStudy.images).map((image) => (
            <figure
              className={[
                'case-screenshot',
                'product-shot',
                image.kind === 'mobile' ? 'case-screenshot-mobile' : '',
                image.kind === 'diagram' ? 'case-screenshot-diagram' : '',
                image.fit === 'contain' ? 'case-screenshot-contain' : '',
              ].filter(Boolean).join(' ')}
              key={image.title}
            >
              <img src={image.src} alt={image.alt} loading="lazy" />
              <figcaption>
                <strong>{image.title}</strong>
                <span>{image.caption}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
      <section className="case-study-section case-study-chapter case-study-build-section section-shell product-reveal">
        <SectionHeading eyebrow={caseStudy.buildEyebrow || 'Build'} title={caseStudy.buildTitle || 'What I Built'} />
        <div className="case-study-build-list" role="list">
          {caseStudy.whatIBuilt.map((item, index) => (
            <article className={`case-study-build-item product-reveal product-reveal-delay-${Math.min(index + 1, 4)}`} key={item} role="listitem">
              <span className="case-study-build-marker" aria-hidden="true" />
              <span>{caseStudy.buildLabels?.[index] || 'Artifact'}</span>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="case-study-section case-study-chapter case-study-decision-section section-shell product-reveal">
        <div className="case-study-section-kicker">
          <p className="eyebrow">{caseStudy.decisionEyebrow || 'Product'}</p>
          <h2>{caseStudy.decisionTitle || 'Product Decisions'}</h2>
          {caseStudy.decisionIntro ? <p>{caseStudy.decisionIntro}</p> : null}
        </div>
        <div className={`decision-rail decision-rail-count-${caseStudy.productDecisions.length}`}>
          {caseStudy.productDecisions.map((decision, index) => (
            <article className={`decision-item product-reveal product-reveal-delay-${Math.min(index + 1, 4)}`} key={decision.title}>
              <h3>{decision.title}</h3>
              <p>{decision.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="case-study-section case-study-chapter case-study-system-section section-shell product-reveal">
        {caseStudy.workflowStandalone ? (
          <figure className="workflow-diagram workflow-diagram-standalone product-flow-visual">
            <img src={caseStudy.workflowImage.src} alt={caseStudy.workflowImage.alt} loading="lazy" />
          </figure>
        ) : (
          <div className={['case-study-two-column', 'case-study-technical', caseStudy.technicalFlow ? 'case-study-technical-runtime' : ''].filter(Boolean).join(' ')}>
            <article className={caseStudy.technicalFlow ? 'case-study-runtime-copy' : undefined}>
              <p className="eyebrow">{caseStudy.technicalEyebrow || 'Build Notes'}</p>
              <h2>{caseStudy.technicalTitle}</h2>
              {caseStudy.technicalSummary ? (
                <p>{caseStudy.technicalSummary}</p>
              ) : (
                <ul className="case-study-list compact">
                  {caseStudy.technicalHighlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </article>
            {caseStudy.technicalFlow ? (
              <div className="case-study-runtime-flow" aria-label={`${caseStudy.eyebrow} technical flow`}>
                {caseStudy.technicalFlow.map((step, index) => (
                  <article className={`runtime-flow-step product-reveal product-reveal-delay-${Math.min(index + 1, 4)}`} key={step.title}>
                    <span>{step.label}</span>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </article>
                ))}
              </div>
            ) : (
              <figure className="workflow-diagram product-flow-visual">
                <img src={caseStudy.workflowImage.src} alt={caseStudy.workflowImage.alt} loading="lazy" />
              </figure>
            )}
          </div>
        )}
      </section>
      <section className="case-study-section case-study-chapter case-study-reflection-section section-shell product-reveal">
        <div className="case-study-two-column case-study-reflection">
          <article>
            <p className="eyebrow">Learned</p>
            <h2>What This Project Taught Me</h2>
            <ul className="case-study-list compact">
              {caseStudy.lessons.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article>
            <p className="eyebrow">Next Steps</p>
            <h2>Where It Goes Next</h2>
            <ul className="case-study-list compact">
              {caseStudy.nextSteps.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>
      <PageCTA
        eyebrow="Project conversation"
        title={caseStudy.ctaTitle}
        body={caseStudy.ctaBody}
        href={caseStudy.ctaHref || 'https://www.linkedin.com/in/kellychen0921/'}
        label={caseStudy.ctaLabel || 'Connect on LinkedIn'}
      />
    </>
  );
}

function MediaPage() {
  return (
    <>
      <PageHero
        eyebrow="Content"
        title="Content & Resources"
        body="A resource desk for beta guides, practical tools, and apps like ApplyFirst. Ready pieces have clear next steps; future ideas are marked as still being built."
      />
      <section className="section-shell content-status-section">
        <ContentStatusBoard groups={contentResourceGroups} />
      </section>
      <section className="section-shell content-product-section">
        <ConferencePlannerProduct product={conferencePlannerProduct} />
      </section>
      <section className="section-shell">
        <ContentPipeline items={contentPipeline} />
      </section>
      <PageCTA
        eyebrow="Follow the build"
        title="Get Notified When New Resources Go Live"
        body="The newsletter/storefront signup is still coming. For now, email me if you want resource updates, or follow along on LinkedIn."
        href="mailto:kellychenmeiyi@gmail.com?subject=Resource%20updates"
        label="Get Resource Updates"
      />
    </>
  );
}

function ContentStatusBoard({ groups }) {
  return (
    <div className="content-status-board">
      <div>
        <p className="eyebrow">Ready to use</p>
        <h2>Available Tools and Requestable Resources</h2>
        <p>
          This area only shows things with a real next step: open the app, request the
          beta bundle, or follow the upcoming resource pipeline below.
        </p>
      </div>
      <div className="content-status-columns">
        {groups.map((group) => (
          <article key={group.title} className="content-status-column">
            <span>{group.status}</span>
            <h3>{group.title}</h3>
            <p>{group.description}</p>
            {group.href ? (
              <a className="text-link content-status-link" href={group.href} target="_blank" rel="noreferrer">
                {group.ctaLabel}
              </a>
            ) : null}
            <ul>
              {group.items.map((item) => (
                <li key={item.title}>
                  <div>
                    <strong>{item.title}</strong>
                    <em>{item.meta}</em>
                  </div>
                  <p>{item.description}</p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}

function ContentPipeline({ items }) {
  return (
    <div className="content-pipeline">
      <div className="content-pipeline-heading">
        <p className="eyebrow">Coming next</p>
        <h2>Planned Resource Directions</h2>
        <p>
          A preview of the resource areas I am shaping next. I only publish them
          here when they are useful enough to share clearly.
        </p>
      </div>
      <ol>
        {items.map((item) => (
          <li className={`content-pipeline-${item.tone}`} key={item.title}>
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

function ConferencePlannerProduct({ product }) {
  const [selectedPreview, setSelectedPreview] = useState(null);

  useEffect(() => {
    if (!selectedPreview) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedPreview(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPreview]);

  return (
    <>
      <article className="conference-product" id="conference-leverage-planner">
        <div className="conference-product-copy">
          <span>{product.label}</span>
          <h2>{product.title}</h2>
          <p className="conference-product-tagline">{product.tagline}</p>
          <p>{product.description}</p>
          <div className="conference-product-actions">
            <a className="button primary" href={product.primaryCta.href}>
              {product.primaryCta.label}
            </a>
            <a className="button secondary" href={product.secondaryCta.href}>
              {product.secondaryCta.label}
            </a>
          </div>
          <div className="conference-product-meta" aria-label="Conference Leverage Planner product details">
            <span>{product.status}</span>
            <span>{product.price}</span>
            <span>{product.freeLabel}</span>
          </div>
          <p className="conference-product-note">{product.note}</p>
        </div>

        <div className="conference-product-side">
          <div className="conference-product-includes" aria-label="Conference Leverage Planner included files">
            <span>Includes</span>
            <ul>
              {product.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="conference-product-previews" aria-label="Conference Leverage Planner previews">
            {product.previews.map((preview) => (
              <figure className={preview.layout ? `conference-preview-${preview.layout}` : undefined} key={preview.src}>
                <figcaption className="conference-preview-copy">
                  <span>{preview.eyebrow}</span>
                  <strong>{preview.title}</strong>
                  <p>{preview.caption}</p>
                </figcaption>
                <button
                  aria-label={`Open larger preview: ${preview.caption}`}
                  className="conference-preview-button"
                  onClick={() => setSelectedPreview(preview)}
                  type="button"
                >
                  <img src={preview.src} alt={preview.alt} loading="lazy" />
                  <span className="conference-preview-zoom">View Larger</span>
                </button>
              </figure>
            ))}
          </div>
        </div>
      </article>

      {selectedPreview ? (
        <div className="preview-lightbox" role="dialog" aria-modal="true" aria-label="Conference Leverage Planner preview">
          <button className="preview-lightbox-backdrop" onClick={() => setSelectedPreview(null)} type="button">
            <span>Close preview</span>
          </button>
          <figure>
            <button className="preview-lightbox-close" onClick={() => setSelectedPreview(null)} type="button">
              Close
            </button>
            <img src={selectedPreview.src} alt={selectedPreview.alt} />
            <figcaption>{selectedPreview.caption}</figcaption>
          </figure>
        </div>
      ) : null}
    </>
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
      <p className="eyebrow">{eyebrow}</p>
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
    <div className="focus-matrix">
      {items.map((item) => (
        <HighlightCard key={item.title} {...item} />
      ))}
    </div>
  );
}

function HighlightCard({ type, title, description, note }) {
  return (
    <article className="focus-item">
      <span className="focus-mode">{type}</span>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <span className="focus-note">{note}</span>
    </article>
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
      <SectionHeading eyebrow="Projects" title={title} />
      <div className="project-showcase-list">
        {projectItems.map((project, index) => (
          <ProjectCard key={project.title} index={index} {...project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ title, mark, status, description, image, imageFit, imageFrame, imageAlt, systemQuestion, problem, user, role, learned, proof, tags, index }) {
  const projectAction = projectActions[title];
  const visualClasses = [
    'project-visual',
    imageFit === 'contain' ? 'project-visual-contain' : '',
    imageFrame === 'desktop' ? 'project-visual-desktop' : '',
    imageFrame === 'phone' ? 'project-visual-phone' : '',
  ].filter(Boolean).join(' ');

  return (
    <article className={`project-card project-showcase${index % 2 === 1 ? ' reverse' : ''}`}>
      <div className={visualClasses}>
        <img src={image} alt={imageAlt} loading="lazy" />
      </div>
      <div className="project-copy">
        <div className="project-heading">
          <ProjectMark mark={mark} title={title} />
          <div>
            <span>{status}</span>
            <h3>{title}</h3>
          </div>
        </div>
        <p>{description}</p>
        {systemQuestion ? (
          <div className="project-system-question">
            <span>Core question</span>
            <p>{systemQuestion}</p>
          </div>
        ) : null}
        <dl>
          <div>
            <dt>Problem</dt>
            <dd>{problem}</dd>
          </div>
          <div>
            <dt>User</dt>
            <dd>{user}</dd>
          </div>
          <div>
            <dt>Role</dt>
            <dd>{role}</dd>
          </div>
          <div>
            <dt>Learned</dt>
            <dd>{learned}</dd>
          </div>
          <div>
            <dt>Proves</dt>
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

function ProjectAction({ body, href, label, primaryHref, primaryLabel, secondaryHref, secondaryLabel }) {
  const actions = [
    primaryHref ? { href: primaryHref, label: primaryLabel, kind: 'primary' } : null,
    secondaryHref ? { href: secondaryHref, label: secondaryLabel, kind: 'secondary' } : null,
    href ? { href, label, kind: 'primary' } : null,
  ].filter(Boolean);

  return (
    <aside className="project-action">
      <p>{body}</p>
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
    <section className="cta-section section-shell">
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
          <img src="/assets/kelly-logo-mark.svg" alt="" />
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
      </nav>
    </footer>
  );
}

createRoot(document.getElementById('root')).render(<App />);
