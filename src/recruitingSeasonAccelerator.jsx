import React, { useEffect, useMemo } from 'react';
import {
  acceleratorAnalyticsEvents,
  acceleratorPaths,
  appendUtmParameters,
  getApplicationExperience,
  recruitingSeasonAccelerator as program,
} from './recruitingSeasonAcceleratorConfig';
import './recruiting-season-accelerator.css';

const bottlenecks = [
  'Direction',
  'Evidence',
  'Positioning',
  'Access',
  'Execution',
  'Interview readiness',
  'Market strategy',
];

const audienceSignals = [
  'You have applied before but received few responses.',
  'You have relevant experience that is difficult to communicate.',
  'You are unsure which roles or companies to prioritize.',
  'You need a more consistent recruiting system.',
  'You are deciding between SWE and an adjacent path.',
  'You are receiving interviews but not progressing.',
  'You want guidance grounded in big tech, fintech, payments, and financial-technology environments.',
];

const focusAreas = [
  'Resume and professional positioning',
  'Internship or new-grad application strategy',
  'Target-company selection',
  'LinkedIn and career storytelling',
  'Networking and mentorship',
  'Recruiting consistency and accountability',
  'Project or experience planning',
  'Behavioral interview preparation',
  'SWE versus PM exploration',
  'Interview-conversion diagnosis',
  'Future offer evaluation',
];

const inclusionGroups = [
  {
    eyebrow: 'Live mentorship',
    title: 'Support built around your bottleneck',
    items: [
      'Four weekly 60-minute Zoom workshops',
      'Three 30-minute private strategy sessions',
      'One written resume review',
      'One additional personalized asset review',
      'Private Slack support and weekly accountability',
    ],
  },
  {
    eyebrow: 'ApplyFirst resources',
    title: 'A system you can keep using',
    items: [
      'Recruiting Diagnostic and Sprint Plan',
      'Application planner and tracker',
      'Resume Positioning Workbook',
      'Target-company and networking tools',
      'Behavioral story planning',
      '60- or 90-day action plan and Offer Toolkit',
    ],
  },
  {
    eyebrow: 'Founding benefits',
    title: 'Extra value for the first cohort',
    items: [
      'Finalized versions of resources tested in the cohort',
      'Preferred pricing on eligible future ApplyFirst resources',
      'One future 30-minute offer strategy session',
      'Outcome follow-ups after the active program',
    ],
  },
];

const journeySteps = [
  {
    number: '01',
    title: 'Diagnose',
    label: 'Before the program',
    body: 'Complete the recruiting diagnostic, submit your current materials, schedule your private sessions, and identify your initial recruiting goal.',
  },
  {
    number: '02',
    title: 'Build and adjust',
    label: 'During four weeks',
    body: 'Attend one live workshop each week, complete focused ApplyFirst exercises, apply individualized feedback, and use Slack for brief support and accountability.',
  },
  {
    number: '03',
    title: 'Continue',
    label: 'After the program',
    body: 'Leave with a personalized 60- or 90-day plan, keep the included resources, and return for the founding offer-support session when applicable.',
  },
];

const outcomes = [
  'A clearer understanding of your main recruiting bottleneck',
  'A stronger resume',
  'A more focused role and company strategy',
  'An organized recruiting system',
  'Personalized feedback on another relevant career asset',
  'Clear priorities for the rest of recruiting season',
  'A written 60- or 90-day action plan',
];

const timeline = [
  ['Applications open', 'July 22, 2026'],
  ['Applications close', 'August 2, 2026 at 11:59 PM ET'],
  ['Decisions sent', 'August 3–5, 2026'],
  ['Payment and onboarding', 'August 6–9, 2026'],
  ['Program begins', 'Week of August 10, 2026'],
  ['Program length', 'Four weeks'],
];

const faqs = [
  {
    question: 'Is this a course or a mentorship program?',
    answer:
      'It combines self-guided ApplyFirst recruiting resources, live group workshops, private strategy sessions, written feedback, and accountability.',
  },
  {
    question: 'Who can apply?',
    answer:
      'The program is primarily for college sophomores, juniors, and seniors pursuing software engineering internships or new-grad roles. Select freshmen who are at least 18 and already have relevant experience or recruiting exposure may also apply.',
  },
  {
    question: 'Is the program only for big tech?',
    answer:
      "No. Kelly's experience is especially relevant to big tech, fintech, payments, banking technology, financial technology, and mature private technology companies, but participants may target a broader range of technical employers.",
  },
  {
    question: 'Does the program guarantee an internship or job?',
    answer:
      'No. The program provides resources, feedback, strategy, and accountability, but interviews, referrals, internships, and offers cannot be guaranteed.',
  },
  {
    question: 'Is technical interview preparation included?',
    answer:
      'The program may help you diagnose interview gaps, organize behavioral stories, explain projects, and build an interview-preparation plan. It is not a complete LeetCode or technical-interview course.',
  },
  {
    question: 'How much time should I expect?',
    answer:
      'Plan for one 60-minute live workshop and approximately one to two hours of focused work each week, plus three private 30-minute sessions across the program.',
  },
  {
    question: 'What happens if I miss a workshop?',
    answer:
      'Participants should attend at least three workshops live. When a teaching recording or summary is available, you may use it to catch up and complete the related work.',
  },
  {
    question: 'Why is there an application?',
    answer:
      'The cohort is limited to six participants and includes personalized support. The application helps determine whether the program matches your current needs and readiness.',
  },
  {
    question: 'What is the feedback credit?',
    answer:
      'Participants who complete the stated founding-cohort participation and feedback requirements receive a $20 partial refund. Feedback does not have to be positive, and a testimonial is not required.',
  },
  {
    question: 'Are scholarships available?',
    answer: 'Scholarship seats are not available for this founding cohort.',
  },
  {
    question: 'What happens if I receive an offer later?',
    answer:
      'Founding participants receive one complimentary 30-minute offer strategy session for their next internship or new-grad offer. The benefit is limited to one use.',
  },
  {
    question: 'Is the program affiliated with Bloomberg?',
    answer:
      "No. Recruiting Season Accelerator is an independent program operated by Kelly Chen. It is not affiliated with, sponsored by, or endorsed by Bloomberg or any current or former employer. Kelly's views and guidance are her own.",
  },
  {
    question: 'How do I contact Kelly?',
    answer: 'Email kellychenmeiyi@gmail.com for program-related administrative questions.',
  },
];

const independenceDisclosure =
  "Recruiting Season Accelerator is an independent educational and mentorship program operated by Kelly Chen. It is not affiliated with, sponsored by, or endorsed by Bloomberg or any current or former employer. All views, resources, and guidance are Kelly's own. Participation does not provide preferred access, referrals, interviews, or employment consideration at Bloomberg or any company connected to Kelly's professional background.";

const metadataByPage = {
  landing: {
    title: 'Recruiting Season Accelerator | Kelly Chen',
    description:
      'A four-week mentorship program for college students applying to software engineering internships and new-grad roles, with personalized guidance for big tech, fintech, and competitive technology recruiting.',
    openGraphTitle: 'Recruiting season is here. Apply with a strategy.',
    openGraphDescription:
      'Join the six-person founding cohort of Recruiting Season Accelerator, a four-week mentorship program with workshops, private strategy sessions, resume feedback, and ApplyFirst resources.',
    path: acceleratorPaths.landing,
  },
  terms: {
    title: 'Participant Terms | Recruiting Season Accelerator',
    description: 'Participant terms for the Recruiting Season Accelerator founding cohort.',
    path: acceleratorPaths.terms,
  },
  privacy: {
    title: 'Privacy Notice | Recruiting Season Accelerator',
    description: 'Privacy notice for Recruiting Season Accelerator applicants and participants.',
    path: acceleratorPaths.privacy,
  },
  refund: {
    title: 'Refund and Feedback Credit Policy | Recruiting Season Accelerator',
    description:
      'Refund terms and the founding participant feedback credit for Recruiting Season Accelerator.',
    path: acceleratorPaths.refund,
  },
};

function upsertMeta(selector, attributes, content) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement('meta');
    Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function useAcceleratorMetadata(pageKey) {
  useEffect(() => {
    const metadata = metadataByPage[pageKey];
    const origin = window.location.origin;
    const configuredBase = program.canonicalUrl
      ? program.canonicalUrl.replace(/\/+$/, '')
      : `${origin}${acceleratorPaths.landing}`;
    const suffix = metadata.path.slice(acceleratorPaths.landing.length);
    const canonicalUrl = `${configuredBase}${suffix}`;
    let canonical = document.head.querySelector('link[rel="canonical"]');

    document.title = metadata.title;
    upsertMeta('meta[name="description"]', { name: 'description' }, metadata.description);
    upsertMeta('meta[property="og:type"]', { property: 'og:type' }, 'website');
    upsertMeta(
      'meta[property="og:title"]',
      { property: 'og:title' },
      metadata.openGraphTitle ?? metadata.title,
    );
    upsertMeta(
      'meta[property="og:description"]',
      { property: 'og:description' },
      metadata.openGraphDescription ?? metadata.description,
    );
    upsertMeta('meta[property="og:url"]', { property: 'og:url' }, canonicalUrl);
    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card' }, 'summary');
    upsertMeta(
      'meta[name="twitter:title"]',
      { name: 'twitter:title' },
      metadata.openGraphTitle ?? metadata.title,
    );
    upsertMeta(
      'meta[name="twitter:description"]',
      { name: 'twitter:description' },
      metadata.openGraphDescription ?? metadata.description,
    );

    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    document.body.classList.add('rsa-route');
    return () => document.body.classList.remove('rsa-route');
  }, [pageKey]);
}

function trackAcceleratorEvent(eventName, properties = {}) {
  if (!acceleratorAnalyticsEvents.includes(eventName) || typeof window === 'undefined') return;

  const safeProperties = Object.fromEntries(
    Object.entries(properties).filter(([, value]) =>
      ['string', 'number', 'boolean'].includes(typeof value),
    ),
  );

  if (typeof window.plausible === 'function') {
    window.plausible(eventName, { props: safeProperties });
    return;
  }

  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, safeProperties);
    return;
  }

  window.dispatchEvent(
    new CustomEvent('kelly:analytics', {
      detail: { eventName, properties: safeProperties },
    }),
  );
}

function eventForCta(kind) {
  if (kind === 'application') return 'rsa_primary_cta_click';
  if (kind === 'interest') return 'rsa_interest_list_click';
  if (kind === 'email') return 'rsa_email_click';
  return 'rsa_primary_cta_click';
}

function AcceleratorButton({ experience, className = 'button primary', source = 'unknown' }) {
  const isExternal = experience.ctaHref.startsWith('http');

  return (
    <a
      className={className}
      href={experience.ctaHref}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
      onClick={() =>
        trackAcceleratorEvent(eventForCta(experience.ctaKind), {
          source,
          state: experience.state,
        })
      }
    >
      {experience.ctaLabel}
    </a>
  );
}

function ProgramSectionHeading({ eyebrow, title, body, id }) {
  return (
    <div className="rsa-section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      {body ? <p>{body}</p> : null}
    </div>
  );
}

function ApplicationEmbed({ experience }) {
  const applicationUrl = useMemo(
    () =>
      appendUtmParameters(
        program.applicationUrl,
        typeof window === 'undefined' ? '' : window.location.search,
      ),
    [],
  );

  useEffect(() => {
    if (experience.applicationUrlAvailable) {
      trackAcceleratorEvent('rsa_application_embed_view', { state: experience.state });
    }
  }, [experience.applicationUrlAvailable, experience.state]);

  if (!experience.applicationUrlAvailable) {
    return (
      <div className="rsa-application-fallback">
        <p className="eyebrow">Application access</p>
        <h3>Email Kelly for the current application link.</h3>
        <p>
          The hosted application is not available on this page right now. You can still
          request the application without using a public checkout or sharing information
          by email.
        </p>
        <a
          className="button secondary"
          href={`mailto:${program.contactEmail}?subject=${encodeURIComponent(
            'Recruiting Season Accelerator question',
          )}`}
          onClick={() => trackAcceleratorEvent('rsa_email_click', { source: 'application-fallback' })}
        >
          Email Kelly
        </a>
      </div>
    );
  }

  return (
    <div className="rsa-application-frame">
      <iframe
        src={applicationUrl}
        title="Recruiting Season Accelerator founding cohort application"
        loading="lazy"
      />
      <p>
        If the embedded form does not load,{' '}
        <a
          href={applicationUrl}
          target="_blank"
          rel="noreferrer"
          onClick={() =>
            trackAcceleratorEvent('rsa_application_outbound_click', {
              source: 'application-fallback-link',
            })
          }
        >
          open the application in a new tab
        </a>
        .
      </p>
    </div>
  );
}

export function RecruitingSeasonAcceleratorPage() {
  const experience = useMemo(() => getApplicationExperience(new Date()), []);
  const applicationsAccepting =
    experience.state === 'applications-open' || experience.state === 'closing-soon';

  useAcceleratorMetadata('landing');

  useEffect(() => {
    trackAcceleratorEvent('rsa_page_view', { state: experience.state });
  }, [experience.state]);

  return (
    <div className="rsa-page">
      <aside className={`rsa-announcement rsa-state-${experience.state}`} aria-label="Application status">
        <span aria-hidden="true" />
        <p>{experience.banner}</p>
        <a href="#timeline">View dates</a>
      </aside>

      <nav className="rsa-page-nav section-shell" aria-label="Program sections">
        <a href="#program-details">Overview</a>
        <a href="#included">Included</a>
        <a href="#founder">Meet Kelly</a>
        <a href="#pricing">Pricing</a>
        <a href="#faq">FAQ</a>
        <AcceleratorButton experience={experience} className="button primary small" source="page-nav" />
      </nav>

      <section className="rsa-hero section-shell" aria-labelledby="rsa-title">
        <div className="rsa-hero-copy">
          <p className="eyebrow">Founding Cohort · Four Weeks · Six Participants</p>
          <p className="rsa-program-name">{program.programName}</p>
          <h1 id="rsa-title">Recruiting season is here. Apply with a strategy.</h1>
          <p className="rsa-hero-lede">
            A four-week mentorship program for college students applying to software
            engineering internships and new-grad roles—especially in big tech, fintech,
            payments, and technology-focused financial companies.
          </p>
          <p className="rsa-seasonal-copy">
            Applications are beginning to open. Strengthen your resume, identify what is
            holding back your recruiting progress, and build a focused plan before the
            semester becomes overwhelming.
          </p>
          <div className="button-row">
            <AcceleratorButton experience={experience} source="hero" />
            <a
              className="button secondary"
              href="#included"
              onClick={() =>
                trackAcceleratorEvent('rsa_secondary_cta_click', { source: 'hero' })
              }
            >
              See What&apos;s Included
            </a>
          </div>
          <p className="rsa-hero-microcopy">
            Application-based · Six participants maximum · No public checkout
          </p>
        </div>

        <div className="rsa-strategy-board" aria-label="Recruiting strategy framework">
          <div className="rsa-board-heading">
            <span>ApplyFirst resource journey</span>
            <strong>Find the right next move.</strong>
          </div>
          <ol>
            {['Diagnose', 'Position', 'Apply', 'Adjust', 'Decide'].map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{step}</strong>
              </li>
            ))}
          </ol>
          <div className="rsa-board-note">
            <span>Founding price</span>
            <strong>${program.priceUsd}</strong>
            <small>${program.feedbackCreditUsd} feedback credit available</small>
          </div>
        </div>
      </section>

      <section className="rsa-proof-strip" aria-label="Program at a glance">
        <div className="section-shell">
          <span><strong>4</strong> weekly Zoom workshops</span>
          <span><strong>3</strong> private strategy sessions</span>
          <span><strong>6</strong> participants maximum</span>
          <span><strong>${program.priceUsd}</strong> founding price</span>
          <span><strong>${program.feedbackCreditUsd}</strong> feedback credit available</span>
        </div>
      </section>

      <section className="rsa-problem section-shell" id="program-details" aria-labelledby="rsa-problem-title">
        <ProgramSectionHeading
          eyebrow="The recruiting bottleneck"
          title="Applying more is not always the answer."
          id="rsa-problem-title"
        />
        <div className="rsa-problem-layout">
          <div className="rsa-problem-copy">
            <p>
              Students can have the same goal and completely different recruiting
              bottlenecks. A weak response rate may come from unclear targeting, limited
              evidence, resume positioning, late applications, an overly narrow company
              list, insufficient networking, or interview-readiness gaps.
            </p>
            <p>
              Recruiting Season Accelerator helps you identify what your process actually
              needs instead of prescribing the same solution to everyone.
            </p>
          </div>
          <div className="rsa-bottleneck-map" aria-label="Possible recruiting bottlenecks">
            {bottlenecks.map((item, index) => (
              <span key={item} style={{ '--item-index': index }}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="rsa-audience rsa-band">
        <div className="section-shell">
          <ProgramSectionHeading
            eyebrow="Who it is for"
            title="Built for students who have started—but need a smarter next step."
            body="The accelerator is primarily designed for sophomores, juniors, and seniors pursuing software engineering internships or new-grad roles. Select freshmen who are at least 18 and have relevant experience and prior recruiting exposure may also apply."
            id="rsa-audience-title"
          />
          <div className="rsa-fit-grid" aria-labelledby="rsa-audience-title">
            {audienceSignals.map((signal, index) => (
              <article key={signal}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{signal}</p>
              </article>
            ))}
          </div>
          <div className="rsa-scope-note">
            <strong>What this is not</strong>
            <p>
              This is not a coding course, a full LeetCode program, a referral service, or
              a guarantee of employment.
            </p>
          </div>
        </div>
      </section>

      <section className="rsa-focus section-shell" aria-labelledby="rsa-focus-title">
        <ProgramSectionHeading
          eyebrow="Personalized focus"
          title="One shared program. A focus tailored to your recruiting needs."
          body="During the initial strategy session, each participant identifies a primary recruiting bottleneck and builds a focused four-week plan."
          id="rsa-focus-title"
        />
        <div className="rsa-focus-grid">
          {focusAreas.map((area) => (
            <span key={area}>{area}</span>
          ))}
        </div>
      </section>

      <section className="rsa-included rsa-band" id="included" aria-labelledby="rsa-included-title">
        <div className="section-shell">
          <ProgramSectionHeading
            eyebrow="The complete founding package"
            title="What you receive"
            body="A guided mix of live mentorship, private feedback, practical resources, and accountability—with one package and no upsell ladder."
            id="rsa-included-title"
          />
          <div className="rsa-inclusion-grid">
            {inclusionGroups.map((group, index) => (
              <article key={group.title} className={`rsa-inclusion-card rsa-card-${index + 1}`}>
                <p className="eyebrow">{group.eyebrow}</p>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
          <div className="rsa-applyfirst-note">
            <img src="/assets/applyfirst-mark.svg" alt="" aria-hidden="true" />
            <div>
              <strong>Powered by ApplyFirst resources</strong>
              <p>
                ApplyFirst is Kelly&apos;s separate recruiting-resource ecosystem. The
                accelerator uses those tools inside a live, personalized mentorship
                experience; ApplyFirst is not the program name.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="rsa-journey section-shell" aria-labelledby="rsa-journey-title">
        <ProgramSectionHeading
          eyebrow="Your four-week journey"
          title="How the program works"
          id="rsa-journey-title"
        />
        <div className="rsa-journey-grid">
          {journeySteps.map((step) => (
            <article key={step.number}>
              <div><span>{step.number}</span><small>{step.label}</small></div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
        <p className="rsa-flexibility-note">
          Workshop themes and activities may be adjusted based on participant goals,
          recruiting progress, common cohort needs, and feedback.
        </p>
      </section>

      <section className="rsa-outcomes rsa-band" aria-labelledby="rsa-outcomes-title">
        <div className="section-shell rsa-outcomes-layout">
          <ProgramSectionHeading
            eyebrow="A clearer remainder of the season"
            title="What you should leave with"
            id="rsa-outcomes-title"
          />
          <ul>
            {outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}
          </ul>
          <p className="rsa-outcome-disclaimer">
            Interviews, referrals, internships, and job offers are not guaranteed. The
            program is designed to strengthen recruiting readiness, decision-making, and
            execution.
          </p>
        </div>
      </section>

      <section className="rsa-founder section-shell" id="founder" aria-labelledby="rsa-founder-title">
        <div className="rsa-founder-portrait">
          <img src="/assets/profile.jpg" alt="Kelly Chen" loading="lazy" />
          <span>Mentor · Engineer · Resource builder</span>
        </div>
        <div className="rsa-founder-copy">
          <ProgramSectionHeading eyebrow="Your mentor" title="Meet Kelly" id="rsa-founder-title" />
          <p>
            I created Recruiting Season Accelerator after repeatedly hearing the same
            question from students who reached out to me: “Do you offer mentorship?”
          </p>
          <p>
            My background includes software engineering experience across Visa, JPMorgan
            Chase, and Bloomberg, as well as direct experience exploring product
            management before recommitting to software engineering. Those decisions taught
            me to look beyond company names and consider mentorship, learning, technical
            depth, ownership, stability, and long-term optionality.
          </p>
          <p>
            I have also spent years finding and sharing opportunities, reviewing resumes,
            speaking with students about recruiting, and building resources such as
            ApplyFirst and The Unspoken Playbook. This accelerator turns those recurring
            conversations into a focused system that combines practical tools with
            personalized feedback.
          </p>
          <ul className="rsa-credibility-list">
            <li>Software engineering experience across payments, banking, and financial technology</li>
            <li>Firsthand perspective on SWE versus product management exploration</li>
            <li>Experience mentoring students and reviewing early-career resumes</li>
            <li>Creator of ApplyFirst recruiting resources</li>
            <li>Focus on strategic career decisions, not generic application volume</li>
          </ul>
          <a href={program.linkedInUrl} target="_blank" rel="noreferrer" className="rsa-text-link">
            Connect with Kelly on LinkedIn <span aria-hidden="true">↗</span>
          </a>
        </div>
        <aside className="rsa-disclosure">
          <strong>Independent program</strong>
          <p>{independenceDisclosure}</p>
        </aside>
      </section>

      <section className="rsa-pricing rsa-band" id="pricing" aria-labelledby="rsa-pricing-title">
        <div className="section-shell rsa-pricing-layout">
          <div>
            <ProgramSectionHeading
              eyebrow="Founding Cohort Pricing"
              title="One complete program. No tiers."
              body="The founding price is intentionally accessible while the resources and experience are being refined with a small first cohort."
              id="rsa-pricing-title"
            />
            <div className="rsa-policy-links" aria-label="Program policies">
              <a
                href={acceleratorPaths.terms}
                onClick={() => trackAcceleratorEvent('rsa_policy_link_click', { policy: 'terms' })}
              >
                Participant Terms
              </a>
              <a
                href={acceleratorPaths.refund}
                onClick={() => trackAcceleratorEvent('rsa_policy_link_click', { policy: 'refund' })}
              >
                Refund and Feedback Credit Policy
              </a>
            </div>
          </div>
          <article className="rsa-price-card">
            <p>Founding price</p>
            <strong aria-label="99 US dollars">${program.priceUsd}</strong>
            <span>paid after acceptance to confirm your seat</span>
            <ul>
              <li>Four live workshops</li>
              <li>Three private strategy sessions</li>
              <li>Resume and additional asset feedback</li>
              <li>Slack support and ApplyFirst resources</li>
              <li>Personalized continuation plan</li>
              <li>Future founding offer-support session</li>
            </ul>
            <div className="rsa-credit-panel">
              <span>${program.feedbackCreditUsd} feedback credit</span>
              <p>
                Complete the founding-cohort participation and feedback requirements to
                receive a partial refund, reducing your effective cost to <strong>$79</strong>.
              </p>
            </div>
            <small>
              Feedback may be positive, neutral, or critical. A public testimonial and an
              employment outcome are not required. Scholarship seats are not available for
              this founding cohort.
            </small>
          </article>
        </div>
      </section>

      <section className="rsa-timeline section-shell" id="timeline" aria-labelledby="rsa-timeline-title">
        <ProgramSectionHeading
          eyebrow="Mark the dates"
          title="Founding Cohort Timeline"
          id="rsa-timeline-title"
        />
        <ol>
          {timeline.map(([label, date], index) => (
            <li key={label}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{label}</strong>
              <time>{date}</time>
            </li>
          ))}
        </ol>
        <p className="rsa-schedule-note">
          Weekly Zoom workshop time will be shared before applications open and confirmed
          before payment.
        </p>
      </section>

      <section className="rsa-faq rsa-band" id="faq" aria-labelledby="rsa-faq-title">
        <div className="section-shell">
          <ProgramSectionHeading
            eyebrow="Straight answers"
            title="Frequently asked questions"
            id="rsa-faq-title"
          />
          <div className="rsa-faq-list">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                onToggle={(event) => {
                  if (event.currentTarget.open) {
                    trackAcceleratorEvent('rsa_faq_expand', { question: faq.question });
                  }
                }}
              >
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="rsa-application section-shell" id="apply" aria-labelledby="rsa-apply-title">
        <ProgramSectionHeading
          eyebrow="Founding cohort application"
          title={
            experience.isFutureInterestState
              ? 'Stay close to the next cohort.'
              : 'Build your recruiting strategy before the season gets away from you.'
          }
          body="The founding cohort is limited to six students so that every participant receives personalized support."
          id="rsa-apply-title"
        />
        {experience.isFutureInterestState ? (
          <div className="rsa-interest-card">
            <p>{experience.banner}</p>
            <AcceleratorButton experience={experience} source="application-section" />
          </div>
        ) : !applicationsAccepting ? (
          <div className="rsa-application-fallback">
            <p className="eyebrow">Applications open July 22</p>
            <h3>The founding-cohort application will appear here.</h3>
            <p>
              Review the program details now, then return between July 22 and August 2
              to apply. The application is expected to take 7–10 minutes.
            </p>
            <a className="button secondary" href="#included">Review What&apos;s Included</a>
          </div>
        ) : (
          <ApplicationEmbed experience={experience} />
        )}
      </section>

      <section className="rsa-final-cta">
        <div className="section-shell">
          <p className="eyebrow">Six students. Four focused weeks.</p>
          <h2>Stop guessing what to work on next.</h2>
          <p>
            Strengthen the areas that matter most and leave with a focused plan for
            internship or new-grad recruiting.
          </p>
          <AcceleratorButton experience={experience} source="final-cta" />
          <small>
            Applications open July 22 and close August 2 at 11:59 PM ET. Applying does
            not guarantee acceptance.
          </small>
        </div>
      </section>
    </div>
  );
}

const termsSections = [
  {
    title: '1. Program and operator',
    paragraphs: [
      'Recruiting Season Accelerator is a four-week educational and mentorship program operated by Kelly Chen. The founding cohort is scheduled to begin the week of August 10, 2026 and run for approximately four weeks. Questions may be sent to kellychenmeiyi@gmail.com.',
      'The program is independent from Bloomberg and every current or former employer, university, or organization connected to Kelly.',
    ],
  },
  {
    title: '2. Price, acceptance, and enrollment',
    paragraphs: [
      'The founding-cohort price is $99. Applying does not guarantee acceptance, and an acceptance email does not reserve a seat. A seat is confirmed only after the participant completes payment through the private payment link sent after acceptance.',
      'There is no public checkout and no scholarship seat for the founding cohort.',
    ],
  },
  {
    title: '3. What is included',
    paragraphs: [
      'Each participant receives four weekly 60-minute Zoom workshops; three private 30-minute strategy sessions; one written resume review; one additional personalized asset review; private Slack access during the active program; ApplyFirst resources used in the program; weekly accountability; a personalized 60- or 90-day action plan; and one future 30-minute offer strategy session for the participant’s next internship or new-grad offer.',
      'Workshop themes and activities may adapt to participant goals, recruiting progress, common cohort needs, and feedback without materially reducing the promised support.',
    ],
  },
  {
    title: '4. Participant responsibilities',
    paragraphs: [
      'Participants are responsible for the truthfulness of their materials, their applications, interview preparation, career decisions, and compliance with employer requirements. Kelly may offer educational guidance and feedback, but the participant remains the decision-maker.',
      'Participants are expected to attend at least three live workshops, complete focused work between sessions, submit weekly check-ins, respect the privacy of other participants, and engage constructively.',
    ],
  },
  {
    title: '5. Scheduling, attendance, and rescheduling',
    paragraphs: [
      'Participants should schedule all three private sessions during onboarding. One reschedule is permitted with at least 24 hours’ notice. Late arrivals still end at the original time. A session missed with less than 24 hours’ notice is not guaranteed to be replaced.',
      'Private cohort sessions should be used during the program or within one week after the final workshop. Missed workshops, unused sessions, and unused reviews do not become cash credits or additional offer-support sessions.',
    ],
  },
  {
    title: '6. Slack, recordings, and confidentiality',
    paragraphs: [
      'Slack is for brief questions, clarification, accountability, and updates during defined support windows. It does not create unlimited or continuous access to Kelly.',
      'Teaching or general workshop portions may be recorded for restricted cohort use. Sensitive personal discussions should not be recorded, and private sessions are not recorded by default. Participants may not distribute program recordings or another participant’s personal information, story, voice, image, or materials.',
    ],
  },
  {
    title: '7. Resources and personal-use license',
    paragraphs: [
      'Program resources are licensed to the participant for personal educational and recruiting use. They may not be resold, publicly reposted, distributed, or presented as the participant’s own product.',
      'Founding participants receive finalized versions of resources tested during the cohort and preferred founding-member pricing on eligible self-guided ApplyFirst resources released during the following 12 months. Live services are not automatically included in that benefit.',
    ],
  },
  {
    title: '8. Future offer support',
    paragraphs: [
      'Each founding participant may use one complimentary 30-minute offer strategy session for one active internship or new-grad offer, or a comparison of simultaneous offers. The session has no fixed expiration for founding participants, is subject to Kelly’s availability and the employer’s deadline, and cannot be exchanged for general coaching.',
      'Offer support is educational career guidance, not legal, tax, immigration, accounting, investment, or financial advice. Kelly does not negotiate directly with employers or guarantee that an employer will change an offer.',
    ],
  },
  {
    title: '9. Outcomes and conduct',
    paragraphs: [
      'Recruiting Season Accelerator provides educational resources, career-strategy guidance, feedback, and accountability. Participation does not guarantee an interview, referral, internship, job offer, compensation level, or other employment outcome.',
      'Kelly may remove a participant for serious misconduct, harassment, deliberate confidentiality violations, or material misuse of program resources. Any refund in that circumstance will be evaluated under the refund policy and applicable requirements.',
    ],
  },
  {
    title: '10. Refunds and feedback credit',
    paragraphs: [
      'The separate Refund and Feedback Credit Policy explains refund timing, cancellation terms, and the requirements for the optional $20 Founding Participant Feedback Credit. That policy is incorporated into these terms.',
    ],
  },
  {
    title: '11. Updates and legal details',
    paragraphs: [
      'Specific governing-law, venue, and related legal-administration details will be finalized after review and before enrollment. Accepted participants will receive the version of these terms that applies to their cohort before payment.',
      'Kelly may make reasonable updates for clarity, legal compliance, safety, or program operations. A material change will not reduce already purchased support without an appropriate replacement, rescheduling option, or proportionate refund.',
    ],
  },
];

const privacySections = [
  {
    title: 'Information collected',
    paragraphs: [
      'Kelly may collect contact information; school, major, and graduation information; resume, LinkedIn, portfolio, or GitHub links; recruiting goals and history; application and interview progress; program participation and feedback; and optional offer and outcome information.',
      'The public website does not collect payment-card details or store application responses in this codebase. Hosted form, payment, scheduling, file-storage, video, and communication providers process information under their own privacy terms.',
    ],
  },
  {
    title: 'How information is used',
    paragraphs: [
      'Information may be used to evaluate applications, select and onboard participants, deliver mentorship and feedback, operate workshops and Slack, improve ApplyFirst resources, track aggregate program outcomes, process payments and refunds through service providers, and respond to privacy or support requests.',
      'Recruiting Season Accelerator does not sell applicant or participant information. Marketing consent is separate from applying to or participating in the program.',
    ],
  },
  {
    title: 'Publicity and testimonials',
    paragraphs: [
      'Required program feedback is private and may be positive, neutral, or critical. Public use of a participant’s name, image, quote, school, employer, or outcome requires separate permission. A testimonial is not required to receive the feedback credit.',
    ],
  },
  {
    title: 'Retention and minimization',
    paragraphs: [
      'Rejected application data should be deleted within 60–90 days unless the applicant separately joins a waitlist or updates list. Accepted participant working files should be minimized and removed or anonymized when no longer needed.',
      'Minimal alumni data may be retained to verify an unused founding offer-support benefit. Financial records may be retained as required for bookkeeping, tax, and legal obligations.',
    ],
  },
  {
    title: 'Choices and requests',
    paragraphs: [
      'Applicants and participants may request correction or deletion of their information by emailing kellychenmeiyi@gmail.com. Some information may need to be retained when required for financial, legal, fraud-prevention, or operational recordkeeping.',
    ],
  },
];

const refundSections = [
  {
    title: 'Founding price and seat confirmation',
    paragraphs: [
      'The founding-cohort price is $99. A participant’s seat is confirmed after payment.',
    ],
  },
  {
    title: 'Refund window',
    paragraphs: [
      'Participants may request a full refund until seven calendar days before the first live workshop. After that deadline, payments are generally nonrefundable because live-workshop and individual-feedback capacity have been reserved.',
      'The exact calendar cutoff will be shared once the first live workshop date is finalized.',
    ],
  },
  {
    title: 'Missed or unused support',
    paragraphs: [
      'Missed workshops, missed private sessions, unused reviews, participant withdrawal, or lack of a desired recruiting outcome do not automatically create a refund right.',
    ],
  },
  {
    title: 'Program cancellation or material change',
    paragraphs: [
      'If the entire program is canceled by Kelly, participants will receive a full refund. If a material included service cannot be delivered, Kelly will provide a reasonable replacement, rescheduled service, or proportionate refund.',
    ],
  },
  {
    title: '$20 Founding Participant Feedback Credit',
    paragraphs: [
      'Participants may earn a $20 partial refund by completing onboarding and the baseline assessment; attending at least three of four live workshops; completing all three private sessions; submitting at least three weekly check-ins; testing the required core resources; completing midpoint and final feedback; and completing either a 20-minute feedback conversation or a detailed written resource review.',
      'Requirements must be completed within 14 days after the final workshop. The credit is issued within seven business days after completion is verified.',
      'Feedback may be positive, neutral, or critical. A testimonial, public endorsement, interview, or offer is not required. The credit is all-or-nothing and is not prorated.',
    ],
  },
];

function PolicyPage({ pageKey, eyebrow, title, intro, sections }) {
  useAcceleratorMetadata(pageKey);

  return (
    <article className="rsa-policy-page">
      <header className="rsa-policy-hero section-shell">
        <a className="rsa-back-link" href={acceleratorPaths.landing}>← Back to program</a>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{intro}</p>
        <span>Last updated July 17, 2026 · America/New_York</span>
      </header>
      <div className="rsa-policy-layout section-shell">
        <aside>
          <strong>At a glance</strong>
          <a href={`mailto:${program.contactEmail}`}>{program.contactEmail}</a>
          <a href={acceleratorPaths.terms}>Participant Terms</a>
          <a href={acceleratorPaths.privacy}>Privacy Notice</a>
          <a href={acceleratorPaths.refund}>Refund &amp; Feedback Credit</a>
        </aside>
        <div className="rsa-policy-content">
          {sections.map((section) => (
            <section key={section.title}>
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </section>
          ))}
          <section>
            <h2>Independent-program disclosure</h2>
            <p>{independenceDisclosure}</p>
          </section>
        </div>
      </div>
    </article>
  );
}

export function AcceleratorTermsPage() {
  return (
    <PolicyPage
      pageKey="terms"
      eyebrow="Recruiting Season Accelerator"
      title="Participant Terms"
      intro="Plain-language terms for applying to, enrolling in, and participating in the founding cohort."
      sections={termsSections}
    />
  );
}

export function AcceleratorPrivacyPage() {
  return (
    <PolicyPage
      pageKey="privacy"
      eyebrow="Recruiting Season Accelerator"
      title="Privacy Notice"
      intro="How applicant and participant information may be collected, used, retained, and protected."
      sections={privacySections}
    />
  );
}

export function AcceleratorRefundPage() {
  return (
    <PolicyPage
      pageKey="refund"
      eyebrow="Recruiting Season Accelerator"
      title="Refund and Feedback Credit Policy"
      intro="The founding-cohort refund window, cancellation terms, and optional $20 feedback credit."
      sections={refundSections}
    />
  );
}

export function AcceleratorFooter() {
  return (
    <footer className="rsa-footer">
      <div className="rsa-footer-main">
        <div>
          <strong>Recruiting Season Accelerator</strong>
          <span>Operated by Kelly Chen</span>
          <a
            href={`mailto:${program.contactEmail}`}
            onClick={() => trackAcceleratorEvent('rsa_email_click', { source: 'footer' })}
          >
            {program.contactEmail}
          </a>
        </div>
        <nav aria-label="Program policy links">
          <a
            href={acceleratorPaths.terms}
            onClick={() => trackAcceleratorEvent('rsa_policy_link_click', { policy: 'terms', source: 'footer' })}
          >
            Participant Terms
          </a>
          <a
            href={acceleratorPaths.privacy}
            onClick={() => trackAcceleratorEvent('rsa_policy_link_click', { policy: 'privacy', source: 'footer' })}
          >
            Privacy Notice
          </a>
          <a
            href={acceleratorPaths.refund}
            onClick={() => trackAcceleratorEvent('rsa_policy_link_click', { policy: 'refund', source: 'footer' })}
          >
            Refund &amp; Feedback Credit
          </a>
          <a href={program.linkedInUrl} target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </nav>
      </div>
      <p>
        Independent program. Not affiliated with or endorsed by Bloomberg or any current
        or former employer. Views and guidance are Kelly Chen&apos;s own.
      </p>
    </footer>
  );
}
