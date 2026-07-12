import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import {
  confidenceLabels,
  opportunities,
  opportunityFilters,
  opportunityLibraryStats,
  opportunityStatusLabels,
} from './opportunityLibrary';
import {
  beamCashCaseStudy,
  conferenceSeries,
  communityWork,
  communityMoments,
  communityConferenceMoments,
  communityResources,
  experiences,
  availableTopics,
  highlights,
  mediaChannels,
  navItems,
  opportunitySystems,
  personalityNotes,
  pillars,
  projectActions,
  projects,
  skillGroups,
  speakingEvents,
  speakingMoments,
  webPilotCaseStudy,
} from './portfolioData';

const routes = ['home', 'experience', 'projects', 'beamcash', 'webpilot', 'speaking', 'community', 'media', 'opportunities'];

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
  Opportunities: {
    label: 'Library notes',
    text: 'Curated student opportunity records, verification status, and timing signals.',
  },
};

function getRoute() {
  const route = window.location.hash.replace('#', '').toLowerCase();
  return routes.includes(route) ? route : 'home';
}

function App() {
  const [route, setRoute] = useState(getRoute);

  useEffect(() => {
    const onHashChange = () => {
      setRoute(getRoute());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

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
      case 'speaking':
        return <SpeakingPage />;
      case 'community':
        return <CommunityPage />;
      case 'media':
        return <MediaPage />;
      case 'opportunities':
        return <OpportunityLibraryPage />;
      default:
        return <HomePage />;
    }
  }, [route]);

  return (
    <>
      <Navbar activeRoute={route} />
      <main>{page}</main>
      <Footer />
    </>
  );
}

function Navbar({ activeRoute }) {
  const navActiveRoute = ['beamcash', 'webpilot'].includes(activeRoute) ? 'projects' : activeRoute;

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Kelly Chen home">
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
              href={item.href}
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
            I build reliable systems, study how product decisions shape everyday
            transactions, test ideas with real feedback, and organize resources that
            make technical paths easier to find. My work connects fintech engineering,
            product curiosity, and access-minded community building.
          </p>
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

      <section className="section-shell">
        <SectionHeading eyebrow="What I do" title="Work, Voice, Community" />
        <div className="pillar-grid">
          {pillars.map((pillar) => (
            <PillarCard key={pillar.id} {...pillar} />
          ))}
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading eyebrow="Featured" title="Selected Highlights" />
        <div className="highlight-list">
          {highlights.map((item, index) => (
            <HighlightCard key={item.title} index={index} {...item} />
          ))}
        </div>
      </section>

      <PersonalityCollage />

      <CTASection />
    </>
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
  const built = projects.filter((project) => project.group === 'Built / In Progress');
  const concepts = projects.filter((project) => project.group === 'Startup Concept');

  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Projects & Prototypes"
        body="Built work, active explorations, and startup concepts, shown with visual context and the skills behind each idea."
      />
      <ProjectSection title="Built / In Progress" projects={built} />
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
        body="Workshops, virtual talks, flash sessions, and conversations about building career leverage as an emerging engineer."
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
        <div className="topic-grid">
          {availableTopics.map((topic) => (
            <TopicCard key={topic.title} {...topic} />
          ))}
        </div>
      </section>
      <PageCTA
        eyebrow="Speaking inquiries"
        title="Bring This Talk To Your Room"
        body="I am interested in workshops, panels, student events, and community rooms around women in tech, fintech, student opportunities, AI-assisted building, and early-career pathways."
        href="https://www.linkedin.com/in/kellychen0921/"
        label="Invite Me to Speak"
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
        <SectionHeading eyebrow="Current" title="Access Work Now" />
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
            GHC 2024, and the Forte National Campus to Business Leadership Conference
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
        <SectionHeading eyebrow="Resources" title="Resources From This Work" />
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
  const heroImage = caseStudy.images[0];
  const galleryImages = caseStudy.galleryImages || (heroImage?.kind === 'mobile' ? caseStudy.images : caseStudy.images.slice(1));

  return (
    <>
      <section className={`case-study-hero section-shell case-study-${caseSlug}`} data-mark={caseMark}>
        <a className="back-link" href="#projects">Back to Projects</a>
        <div className="case-study-hero-copy">
          <h1>{caseStudy.eyebrow}</h1>
          <p className="case-study-product-line">{caseStudy.title}</p>
          <p>{caseStudy.subtitle}</p>
        </div>
        <div className="case-study-hero-side">
          {heroImage && (
            <figure
              className={[
                'case-study-hero-visual',
                heroImage.kind === 'mobile' ? 'case-study-hero-visual-mobile' : '',
                heroImage.fit === 'contain' ? 'case-study-visual-contain' : '',
              ].filter(Boolean).join(' ')}
            >
              <img src={heroImage.src} alt={heroImage.alt} loading="eager" />
              <figcaption>{heroImage.title}</figcaption>
            </figure>
          )}
        </div>
        <div className="case-study-dossier" aria-label={`${caseStudy.eyebrow} project snapshot`}>
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
                <article key={step.title}>
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
                  <article key={step.title}>
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
      <section className="case-study-lede case-study-chapter section-shell">
        <article className="case-study-lede-main">
          <p className="eyebrow">{caseStudy.overviewEyebrow || 'Overview'}</p>
          <h2>{caseStudy.overviewTitle}</h2>
          <p>{caseStudy.overview}</p>
        </article>
        <aside className="case-study-problem">
          <p className="eyebrow">{caseStudy.problemEyebrow || 'Problem'}</p>
          <h2>{caseStudy.problemTitle}</h2>
          <p>{caseStudy.problem}</p>
        </aside>
      </section>
      <section className="case-study-section case-study-chapter case-study-gallery-section section-shell">
        <SectionHeading eyebrow={caseStudy.screenshotEyebrow || 'Product Walkthrough'} title={caseStudy.screenshotTitle} />
        <div className="screenshot-stack">
          {(galleryImages.length ? galleryImages : caseStudy.images).map((image) => (
            <figure
              className={[
                'case-screenshot',
                image.kind === 'mobile' ? 'case-screenshot-mobile' : '',
                image.fit === 'contain' ? 'case-screenshot-contain' : '',
              ].filter(Boolean).join(' ')}
              key={image.title}
            >
              <img src={image.src} alt={image.alt} loading="lazy" />
              <figcaption>
                <strong>{image.title}</strong>
                {image.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
      <section className="case-study-section case-study-chapter case-study-build-section section-shell">
        <SectionHeading eyebrow={caseStudy.buildEyebrow || 'Build'} title={caseStudy.buildTitle || 'What I Built'} />
        <div className="case-study-build-list" role="list">
          {caseStudy.whatIBuilt.map((item, index) => (
            <article className="case-study-build-item" key={item} role="listitem">
              <span className="case-study-build-marker" aria-hidden="true" />
              <span>{caseStudy.buildLabels?.[index] || 'Artifact'}</span>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="case-study-section case-study-chapter case-study-decision-section section-shell">
        <div className="case-study-section-kicker">
          <p className="eyebrow">{caseStudy.decisionEyebrow || 'Product'}</p>
          <h2>{caseStudy.decisionTitle || 'Product Decisions'}</h2>
        </div>
        <div className="decision-rail">
          {caseStudy.productDecisions.map((decision) => (
            <article className="decision-item" key={decision.title}>
              <h3>{decision.title}</h3>
              <p>{decision.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="case-study-section case-study-chapter case-study-system-section section-shell">
        {caseStudy.workflowStandalone ? (
          <figure className="workflow-diagram workflow-diagram-standalone">
            <img src={caseStudy.workflowImage.src} alt={caseStudy.workflowImage.alt} loading="lazy" />
          </figure>
        ) : (
          <div className="case-study-two-column case-study-technical">
            <article>
              <p className="eyebrow">{caseStudy.technicalEyebrow || 'Build Notes'}</p>
              <h2>{caseStudy.technicalTitle}</h2>
              <ul className="case-study-list compact">
                {caseStudy.technicalHighlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <figure className="workflow-diagram">
              <img src={caseStudy.workflowImage.src} alt={caseStudy.workflowImage.alt} loading="lazy" />
            </figure>
          </div>
        )}
      </section>
      <section className="case-study-section case-study-chapter case-study-reflection-section section-shell">
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
        body="Practical notes, conference strategy, opportunity resources, and reusable tools from what I am learning, building, and sharing."
      />
      <section className="section-shell content-map-section">
        <ContentMap />
      </section>
      <section className="section-shell content-feature-section">
        <ConferenceSeries series={conferenceSeries} />
      </section>
      <section className="section-shell opportunity-section">
        <OpportunitySystems systems={opportunitySystems} />
      </section>
      <section className="section-shell">
        <SectionHeading eyebrow="Browse" title="Content Shelves" />
        <div className="media-grid">
          {mediaChannels.map((group) => (
            <MediaChannel key={group.title} {...group} />
          ))}
        </div>
      </section>
      <PageCTA
        eyebrow="Content direction"
        title="Get My Opportunity Notes"
        body="The first version of this is a practical public archive. If the resources become useful to people, I may turn the strongest guides into a newsletter, templates, or deeper resource packs."
        href="https://www.linkedin.com/in/kellychen0921/"
        label="View LinkedIn"
      />
    </>
  );
}

function ContentMap() {
  const paths = [
    {
      label: 'Start here',
      title: 'Conference Strategy Series',
      text: 'A guided series on deciding if conferences are worth it, finding funding, reading the room, and turning events into leverage.',
      href: '#conference-series',
    },
    {
      label: 'Use next',
      title: 'ApplyFirst Library',
      text: 'A searchable base of programs, fellowships, scholarships, technical communities, and conference funding paths that feeds the ApplyFirst product direction.',
      href: '#opportunities',
    },
    {
      label: 'Follow along',
      title: 'LinkedIn Notes',
      text: 'Short-form posts and informal breakdowns that may become future guides, templates, resource kits, or newsletter issues.',
      href: 'https://www.linkedin.com/in/kellychen0921/',
    },
  ];

  return (
    <div className="content-map">
      <div>
        <p className="eyebrow">How to use this page</p>
        <h2>Read the idea, then use the resource.</h2>
      </div>
      <div className="content-map-list">
        {paths.map((path) => (
          <a key={path.title} href={path.href} className="content-map-row">
            <span>{path.label}</span>
            <strong>{path.title}</strong>
            <p>{path.text}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

function OpportunityLibraryPage() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [classYear, setClassYear] = useState('all');
  const [audience, setAudience] = useState('all');
  const [season, setSeason] = useState('all');
  const [funding, setFunding] = useState('all');
  const [status, setStatus] = useState('all');
  const [selectedId, setSelectedId] = useState(opportunities[0]?.id);

  const filteredOpportunities = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return opportunities.filter((opportunity) => {
      const searchableText = [
        opportunity.name,
        opportunity.organization,
        opportunity.category,
        opportunity.eligibility,
        opportunity.whyItMatters,
        opportunity.prepNotes,
        ...opportunity.audience,
        ...opportunity.tags,
      ]
        .join(' ')
        .toLowerCase();

      const matchesQuery = !normalizedQuery || searchableText.includes(normalizedQuery);
      const matchesCategory = category === 'all' || opportunity.category === category;
      const matchesClassYear = classYear === 'all' || opportunity.classYears?.includes(classYear);
      const matchesAudience = audience === 'all' || opportunity.audience.includes(audience);
      const matchesSeason = season === 'all' || opportunity.season === season;
      const matchesFunding = funding === 'all' || opportunity.fundingAvailable === funding;
      const matchesStatus = status === 'all' || opportunity.status === status;

      return matchesQuery && matchesCategory && matchesClassYear && matchesAudience && matchesSeason && matchesFunding && matchesStatus;
    });
  }, [audience, category, classYear, funding, query, season, status]);

  useEffect(() => {
    if (!filteredOpportunities.length) {
      setSelectedId(null);
      return;
    }

    if (!filteredOpportunities.some((opportunity) => opportunity.id === selectedId)) {
      setSelectedId(filteredOpportunities[0].id);
    }
  }, [filteredOpportunities, selectedId]);

  const selectedOpportunity =
    filteredOpportunities.find((opportunity) => opportunity.id === selectedId) ?? filteredOpportunities[0] ?? null;

  const clearFilters = () => {
    setQuery('');
    setCategory('all');
    setClassYear('all');
    setAudience('all');
    setSeason('all');
    setFunding('all');
    setStatus('all');
  };

  return (
    <>
      <PageHero
        eyebrow="Opportunities"
        title="ApplyFirst Opportunity Library"
        body="The public-facing data foundation for high-signal programs, fellowships, scholarships, communities, and conference funding paths."
      />
      <section className="section-shell opportunity-library-page">
        <div className="library-summary">
          <div>
            <p className="eyebrow">Data foundation</p>
            <h2>Start with trusted records before alerts.</h2>
            <p>
              Each opportunity includes audience, timing, funding, verification status, confidence,
              and prep notes so ApplyFirst can grow from a useful library into a stronger signal tracker.
            </p>
          </div>
          <div className="library-stat-grid" aria-label="Opportunity library stats">
            {opportunityLibraryStats.map((stat) => (
              <span key={stat.label}>
                <strong>{stat.value}</strong>
                {stat.label}
              </span>
            ))}
          </div>
        </div>

        <div className="library-controls" aria-label="Opportunity filters">
          <label className="library-search">
            <span>Search</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Try conference funding, AI, research, women in tech..."
            />
          </label>
          <LibrarySelect label="Category" value={category} onChange={setCategory} options={opportunityFilters.categories} />
          <LibrarySelect label="Year" value={classYear} onChange={setClassYear} options={opportunityFilters.classYears} />
          <LibrarySelect label="Audience" value={audience} onChange={setAudience} options={opportunityFilters.audiences} />
          <LibrarySelect label="Season" value={season} onChange={setSeason} options={opportunityFilters.seasons} />
          <LibrarySelect label="Funding" value={funding} onChange={setFunding} options={opportunityFilters.funding} />
          <LibrarySelect
            label="Status"
            value={status}
            onChange={setStatus}
            options={opportunityFilters.statuses}
            labels={opportunityStatusLabels}
          />
          <button className="button secondary library-reset" type="button" onClick={clearFilters}>
            Reset
          </button>
        </div>

        <div className="library-workspace">
          <div className="opportunity-results">
            <div className="results-header">
              <span>{filteredOpportunities.length} records</span>
              <strong>Manual verification required before public alerts</strong>
            </div>
            {filteredOpportunities.length ? (
              filteredOpportunities.map((opportunity) => (
                <OpportunityCard
                  key={opportunity.id}
                  opportunity={opportunity}
                  selected={selectedOpportunity?.id === opportunity.id}
                  onSelect={() => setSelectedId(opportunity.id)}
                />
              ))
            ) : (
              <div className="empty-library-state">
                <h3>No matching opportunities</h3>
                <p>Try clearing a filter or searching by audience, timing, funding, or program type.</p>
                <button className="button secondary" type="button" onClick={clearFilters}>
                  Clear Filters
                </button>
              </div>
            )}
          </div>
          <OpportunityDetail opportunity={selectedOpportunity} />
        </div>
      </section>
    </>
  );
}

function LibrarySelect({ label, value, onChange, options, labels = {} }) {
  return (
    <label className="library-select">
      <span>{label}</span>
      <select value={value} onChange={(event) => onChange(event.target.value)}>
        <option value="all">All</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {labels[option] ?? option}
          </option>
        ))}
      </select>
    </label>
  );
}

function OpportunityCard({ opportunity, selected, onSelect }) {
  return (
    <button
      className={`opportunity-record${selected ? ' selected' : ''}`}
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
    >
      <span className={`status-pill status-${opportunity.status}`}>
        {opportunityStatusLabels[opportunity.status]}
      </span>
      <div>
        <h3>{opportunity.name}</h3>
        <p>{opportunity.organization}</p>
      </div>
      <dl>
        <div>
          <dt>Year</dt>
          <dd>{opportunity.classYears?.join(', ') || 'Verify'}</dd>
        </div>
        <div>
          <dt>Season</dt>
          <dd>{opportunity.season}</dd>
        </div>
        <div>
          <dt>Funding</dt>
          <dd>{opportunity.fundingAvailable}</dd>
        </div>
      </dl>
      <TagCloud tags={opportunity.tags.slice(0, 4)} />
    </button>
  );
}

function OpportunityDetail({ opportunity }) {
  if (!opportunity) {
    return (
      <aside className="opportunity-detail empty">
        <h2>Select an opportunity</h2>
        <p>Filtered records will appear here when there is a match.</p>
      </aside>
    );
  }

  return (
    <aside className="opportunity-detail">
      <div className="detail-heading">
        <span className={`status-pill status-${opportunity.status}`}>
          {opportunityStatusLabels[opportunity.status]}
        </span>
        <h2>{opportunity.name}</h2>
        <p>{opportunity.organization}</p>
      </div>
      <div className="detail-meta-grid">
        <DetailMetric label="Category" value={opportunity.category} />
        <DetailMetric label="Year" value={opportunity.classYears?.join(', ') || 'Verify'} />
        <DetailMetric label="Season" value={opportunity.season} />
        <DetailMetric label="Funding" value={opportunity.fundingAvailable} />
        <DetailMetric label="Confidence" value={confidenceLabels[opportunity.confidenceLevel]} />
      </div>
      <section>
        <h3>Why this matters</h3>
        <p>{opportunity.whyItMatters}</p>
      </section>
      <section>
        <h3>Eligibility</h3>
        <p>{opportunity.eligibility}</p>
      </section>
      <section>
        <h3>Prep notes</h3>
        <p>{opportunity.prepNotes}</p>
      </section>
      <section className="detail-watchlist">
        <h3>Tracker fields</h3>
        <dl>
          <div>
            <dt>Expected opening</dt>
            <dd>{opportunity.openDate || opportunity.expectedOpeningMonth}</dd>
          </div>
          <div>
            <dt>Deadline</dt>
            <dd>{opportunity.deadline}</dd>
          </div>
          <div>
            <dt>Last verified</dt>
            <dd>{opportunity.lastVerifiedDate}</dd>
          </div>
          <div>
            <dt>Previous URL</dt>
            <dd>{opportunity.previousUrl || 'Not tracked yet'}</dd>
          </div>
        </dl>
      </section>
      {opportunity.sourceNote ? (
        <section className="detail-source-note">
          <h3>Source note</h3>
          <p>{opportunity.sourceNote}</p>
        </section>
      ) : null}
      <TagCloud tags={opportunity.audience} />
      <a className="button primary detail-link" href={opportunity.applicationUrl} target="_blank" rel="noreferrer">
        View Source
      </a>
    </aside>
  );
}

function DetailMetric({ label, value }) {
  return (
    <span>
      <strong>{value}</strong>
      {label}
    </span>
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
        Bloomberg + JPMorgan + Visa
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

function HighlightCard({ type, title, description, href, index }) {
  return (
    <article className="highlight-row">
      <span className="highlight-index">{String(index + 1).padStart(2, '0')}</span>
      <div>
        <span>{type}</span>
        <h3>{title}</h3>
      </div>
      <p>{description}</p>
      <a href={href}>Explore</a>
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
      <p>{summary}</p>
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

function ProjectCard({ title, mark, status, description, image, imageFit, imageFrame, imageAlt, problem, user, role, learned, proof, tags, index }) {
  const projectAction = projectActions[title];
  const visualClasses = [
    'project-visual',
    imageFit === 'contain' ? 'project-visual-contain' : '',
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

function TopicCard({ title, description, icon }) {
  return (
    <article className="topic-card">
      <span className="topic-icon" aria-hidden="true">
        <TopicIcon name={icon} />
      </span>
      <h3>{title}</h3>
      <p>{description}</p>
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

function ConferenceSeries({ series }) {
  return (
    <article className="conference-series" id="conference-series">
      <div className="conference-feature">
        <div className="conference-series-intro">
          <span>{series.label}</span>
          <h2>{series.title}</h2>
          <p>{series.description}</p>
          <div className="conference-actions">
            <a className="button primary" href={series.primaryCta.href} target="_blank" rel="noreferrer">
              {series.primaryCta.label}
            </a>
            <a className="button secondary" href="#opportunities">
              Open Library
            </a>
          </div>
        </div>
        <aside className="conference-brief" aria-label="Conference series summary">
          <span>{series.status}</span>
          {series.brief.map((item) => (
            <p key={item.label}>
              <strong>{item.label}</strong>
              {item.text}
            </p>
          ))}
        </aside>
      </div>

      <div className="conference-route" aria-label="Conference strategy reading route">
        {series.phases.map((phase) => (
          <section className="conference-route-phase" key={phase.title}>
            <div>
              <span>{phase.kicker}</span>
              <h3>{phase.title}</h3>
              <p>{phase.description}</p>
            </div>
            <ol>
              {phase.posts.map((post) => (
                <li key={post.day}>
                  <span>{post.day}</span>
                  <p>{post.title}</p>
                </li>
              ))}
            </ol>
          </section>
        ))}
      </div>

      <div className="conference-takeaways">
        <span>What Readers Get</span>
        <div>
          {series.takeaways.map((item) => (
            <p key={item.label}>
              <strong>{item.label}</strong>
              {item.text}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
}

function OpportunitySystems({ systems }) {
  return (
    <article className="opportunity-systems">
      <div className="opportunity-systems-intro">
        <span>{systems.eyebrow}</span>
        <h2>{systems.title}</h2>
        <p>{systems.description}</p>
      </div>
      {systems.liveTool ? (
        <a className="opportunity-live-tool" href={systems.liveTool.href} target="_blank" rel="noreferrer">
          <span>{systems.liveTool.label}</span>
          <strong>{systems.liveTool.title}</strong>
          <p>{systems.liveTool.description}</p>
          <em>{systems.liveTool.action}</em>
        </a>
      ) : null}
      <div className="opportunity-pathway">
        {systems.items.map((item, index) => (
          <article className="opportunity-pathway-item" key={item.title}>
            <div className="opportunity-pathway-index" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </div>
            <div>
              <div className="opportunity-pathway-meta">
                <span>{item.status}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <TagCloud tags={item.tags} />
            </div>
          </article>
        ))}
      </div>
      <a className="opportunity-systems-link" href={systems.cta.href} target="_blank" rel="noreferrer">
        {systems.cta.label}
      </a>
    </article>
  );
}

function MediaChannel({ type, status, title, description, posts }) {
  return (
    <article className="media-card">
      <div className="media-card-meta">
        <span>{type}</span>
        {status ? <em>{status}</em> : null}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        {posts.map((post) => (
          <li key={post.label ?? post}>
            <span>{post.label ?? post}</span>
            {post.format ? <em>{post.format}</em> : null}
          </li>
        ))}
      </ul>
    </article>
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
      </nav>
    </footer>
  );
}

createRoot(document.getElementById('root')).render(<App />);
