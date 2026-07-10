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
  tandemCaseStudy,
  webPilotCaseStudy,
} from './portfolioData';

const routes = ['home', 'experience', 'projects', 'beamcash', 'webpilot', 'tandem', 'speaking', 'community', 'media', 'opportunities'];

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
      case 'tandem':
        return <ProjectCaseStudyPage caseStudy={tandemCaseStudy} />;
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
  const navActiveRoute = ['beamcash', 'webpilot', 'tandem'].includes(activeRoute) ? 'projects' : activeRoute;

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
        eyebrow="Invite"
        title="Invite Me In"
        body="I'm interested in conversations around women in tech, fintech, student opportunities, AI-assisted building, and early-career pathways."
        href="https://www.linkedin.com/in/kellychen0921/"
        label="View LinkedIn"
      />
    </>
  );
}

function CommunityPage() {
  const communityStats = [
    { label: 'Members', value: '70+' },
    { label: 'Executive board', value: '8' },
    { label: 'RTC events', value: '6+' },
    { label: 'Audience reach', value: '2.6k+' },
  ];

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
          <h2>From one club to repeatable access.</h2>
          <p>
            I think about community work like product work: understand where people get
            stuck, build a structure around the next step, and keep improving the path as
            more people join.
          </p>
        </div>
        <div className="community-stat-grid" aria-label="Community impact highlights">
          {communityStats.map((stat) => (
            <span key={stat.label}>
              <strong>{stat.value}</strong>
              {stat.label}
            </span>
          ))}
        </div>
      </section>
      <section className="section-shell community-moments">
        <div className="community-moments-copy">
          <p className="eyebrow">Summer Hub</p>
          <h2>Organizing rooms where students could meet, ask, and stay connected.</h2>
          <p>
            As a NYC Summer Tech Hub Leader, I helped turn community programming into
            repeatable touchpoints: gatherings, small-group discussions, and informal
            spaces where students could build confidence and relationships.
          </p>
        </div>
        <div className="community-moment-grid" aria-label="NYC Summer Tech Hub moments">
          {communityMoments.map((moment) => (
            <figure className="community-moment" key={moment.src}>
              <img src={moment.src} alt={moment.alt} loading="lazy" />
              <figcaption>{moment.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>
      <section className="section-shell">
        <SectionHeading eyebrow="Community archive" title="Leadership, Access, Events" />
        <div className="community-grid">
          {communityWork.map((item) => (
            <CommunityCard key={item.title} {...item} />
          ))}
        </div>
      </section>
      <section className="section-shell community-conference-access">
        <div className="community-conference-copy">
          <p className="eyebrow">Conference access</p>
          <h2>Helping students turn big rooms into usable pathways.</h2>
          <p>
            Conferences are part of the access layer I care about: finding funding,
            understanding the room, and helping students convert one event into a
            stronger network, clearer direction, and practical next steps.
          </p>
        </div>
        <div className="community-conference-grid" aria-label="Conference access moments">
          {communityConferenceMoments.map((moment) => (
            <figure className="community-moment" key={moment.src}>
              <img src={moment.src} alt={moment.alt} loading="lazy" />
              <figcaption>{moment.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>
      <section className="section-shell resource-strip-section">
        <SectionHeading eyebrow="Resources" title="Resources From This Work" />
        <ResourceList items={communityResources} />
      </section>
    </>
  );
}

function ProjectCaseStudyPage({ caseStudy }) {
  return (
    <>
      <PageHero
        eyebrow={caseStudy.eyebrow}
        title={caseStudy.title}
        body={caseStudy.subtitle}
      />
      <section className="case-study-summary section-shell">
        <a className="back-link" href="#projects">Back to Projects</a>
        <div className="case-study-meta">
          <div>
            <span>Status</span>
            <strong>{caseStudy.status}</strong>
          </div>
          <div>
            <span>Role</span>
            <strong>{caseStudy.role}</strong>
          </div>
        </div>
        <TagCloud tags={caseStudy.stack} />
      </section>
      <section className="case-study-section section-shell">
        <div className="case-study-two-column">
          <article>
            <p className="eyebrow">Overview</p>
            <h2>{caseStudy.overviewTitle}</h2>
            <p>{caseStudy.overview}</p>
          </article>
          <article>
            <p className="eyebrow">Problem</p>
            <h2>{caseStudy.problemTitle}</h2>
            <p>{caseStudy.problem}</p>
          </article>
        </div>
      </section>
      <section className="case-study-section section-shell">
        <SectionHeading eyebrow={caseStudy.buildEyebrow || 'Build'} title={caseStudy.buildTitle || 'What I Built'} />
        <ul className="case-study-list">
          {caseStudy.whatIBuilt.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
      <section className="case-study-section section-shell">
        <SectionHeading eyebrow="Product" title="Product Decisions" />
        <div className="decision-grid">
          {caseStudy.productDecisions.map((decision) => (
            <article className="decision-item" key={decision.title}>
              <h3>{decision.title}</h3>
              <p>{decision.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="case-study-section section-shell">
        <SectionHeading eyebrow={caseStudy.screenshotEyebrow || 'Screenshots'} title={caseStudy.screenshotTitle} />
        <div className="screenshot-stack">
          {caseStudy.images.map((image) => (
            <figure className={`case-screenshot${image.kind === 'mobile' ? ' case-screenshot-mobile' : ''}`} key={image.title}>
              <img src={image.src} alt={image.alt} loading="lazy" />
              <figcaption>
                <strong>{image.title}</strong>
                {image.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
      <section className="case-study-section section-shell">
        <div className="case-study-two-column">
          <article>
            <p className="eyebrow">Technical Highlights</p>
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
      </section>
      <section className="case-study-section section-shell">
        <div className="case-study-two-column">
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
        title="Resource Desk"
        body="A public archive for posts, opportunity resources, conference kits, templates, and practical notes from what I am learning and sharing."
      />
      <section className="section-shell">
        <ConferenceSeries series={conferenceSeries} />
      </section>
      <section className="section-shell opportunity-section">
        <OpportunitySystems systems={opportunitySystems} />
      </section>
      <section className="section-shell">
        <div className="opportunity-library-teaser">
          <div>
            <p className="eyebrow">Phase 1 build</p>
            <h2>Student Opportunity Library</h2>
            <p>
              A searchable seed library for high-signal fellowships, scholarships, technical communities,
              training programs, and conference funding paths.
            </p>
          </div>
          <a className="button primary" href="#opportunities">
            Open Library
          </a>
        </div>
      </section>
      <section className="section-shell">
        <SectionHeading eyebrow="Library" title="Content Collections" />
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
        title="Student Opportunity Library"
        body="Phase-one data foundation for high-signal programs, fellowships, scholarships, communities, and conference funding paths."
      />
      <section className="section-shell opportunity-library-page">
        <div className="library-summary">
          <div>
            <p className="eyebrow">Data foundation</p>
            <h2>Start with trusted records before automation.</h2>
            <p>
              Each opportunity includes audience, timing, funding, verification status, confidence,
              and prep notes so the later signal tracker has useful structure from day one.
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
        Bloomberg Fixed Income
      </span>
      <span>
        <strong>Fintech</strong>
        Bloomberg + JPMorgan + Visa
      </span>
      <span>
        <strong>Community</strong>
        CodePath + WECode
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

  return (
    <span className={`project-mark project-mark-${tone}`} aria-label={`${label} mark`} title={label}>
      {src ? <img src={src} alt="" loading="lazy" /> : text}
    </span>
  );
}

function EventCard({ event, role, topic, subtitle, focus, date, format, location, description, href, image, imageAlt }) {
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
        <a className="event-link" href={href} target="_blank" rel="noreferrer">
          Event site
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

function TopicCard({ title, description }) {
  return (
    <article className="topic-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
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
    <article className="conference-series">
      <div className="conference-series-intro">
        <span>{series.label}</span>
        <h2>{series.title}</h2>
        <p>{series.description}</p>
        <strong>{series.status}</strong>
      </div>
      <div className="conference-phase-grid">
        {series.phases.map((phase) => (
          <section className="conference-phase" key={phase.title}>
            <h3>{phase.title}</h3>
            <p>{phase.description}</p>
            <ul>
              {phase.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
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
