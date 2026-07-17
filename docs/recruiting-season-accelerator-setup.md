# Recruiting Season Accelerator setup

The landing page and policy routes are implemented. Add the remaining public configuration values before applications open.

## Public environment values

Copy `.env.example` to `.env.local` for local development, or set the same values in the production host:

- `VITE_RSA_APPLICATION_URL`: public Tally or equivalent hosted application-form URL.
- `VITE_RSA_INTEREST_URL`: public future-cohort interest-form URL.
- `VITE_RSA_CANONICAL_URL`: full production landing-page URL, without a trailing slash.

The application and interest-list URLs are validated before use. If either is absent, the public page uses a safe email fallback rather than rendering a broken link. UTM campaign parameters are forwarded to the hosted form; personal query-string fields are not.

## Cohort configuration

Edit `src/recruitingSeasonAcceleratorConfig.js` when these values are finalized:

- Exact weekly Zoom workshop day and time (`workshopScheduleLabel`).
- Exact first workshop date and the seven-day refund cutoff.
- Application opening time, if it should differ from 9:00 AM ET on July 22.
- Closing-soon threshold, currently set to the final 48 hours.
- Future cohort dates, price, capacity, or application-state windows.

## Keep private

Do not add the private Stripe Payment Link, Calendly links, Slack invite, restricted Drive links, participant documents, application responses, or Zoom meeting link to the repository or public environment variables. Those values belong only in acceptance and onboarding workflows.

## Final review

Before publishing the application:

- Confirm the hosted application and interest forms.
- Confirm the exact weekly workshop schedule.
- Review and approve the Participant Terms, Privacy Notice, and Refund and Feedback Credit Policy.
- Confirm the production domain and canonical URL.
