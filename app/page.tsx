import Link from "next/link";
import { CategoryScoreCard } from "@/components/category-score-card";
import { FindingCard } from "@/components/finding-card";
import { ImprovementTimeline } from "@/components/improvement-timeline";
import { ReviewCard } from "@/components/review-card";
import { ReviewUpload } from "@/components/review-upload";
import { VersionComparisonCard } from "@/components/version-comparison-card";

const categories = [
  {
    name: "Visual hierarchy",
    score: 8.5,
    tone: "honey" as const,
    description: "How clearly the interface guides attention toward the most important content and actions.",
  },
  {
    name: "Layout & spacing",
    score: 8,
    tone: "sky" as const,
    description: "How consistently alignment, grouping, and whitespace create an easy reading rhythm.",
  },
  {
    name: "Accessibility indicators",
    score: 7.5,
    tone: "lavender" as const,
    description: "Visible signs of readable contrast, clear labels, and controls that may support access needs.",
  },
  {
    name: "Design consistency",
    score: 9,
    tone: "mint" as const,
    description: "How reliably typography, color, components, and repeated patterns work together.",
  },
  {
    name: "Visual heuristics",
    score: 8,
    tone: "peach" as const,
    description: "Visible cues that support clarity, recognition, familiar conventions, and error prevention.",
  },
];

const recentReviews = [
  { project: "Portfolio Landing Page", score: 86, date: "18 Jul 2026", screenshot: "portfolio" as const, change: "Version 2 clarified the case-study order", resolved: "Primary project is now easier to find", nextStep: "Shorten the introduction", href: "#rubric" },
  { project: "E-commerce Checkout Screen", score: 78, date: "11 Jul 2026", screenshot: "checkout" as const, change: "Version 3 grouped delivery details", resolved: "Address fields now scan as one task", nextStep: "Clarify the order total", href: "#rubric" },
  { project: "Mobile Banking UI", score: 91, date: "28 Jun 2026", screenshot: "banking" as const, change: "Version 4 reduced competing actions", resolved: "Transfer action now leads", nextStep: "Test status text contrast", href: "#rubric" },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen">
      <a className="skip-link" href="#main-content">Skip to main content</a>

      <header className="site-header">
        <a className="brand" href="#main-content" aria-label="Design Mentor home">
          <span className="brand-mark" aria-hidden="true">
            <span />
            <span />
          </span>
          <span>
            <strong>Design Mentor</strong>
            <small>Your second pair of eyes for better UI design.</small>
          </span>
        </a>

        <nav aria-label="Primary navigation">
          <a className="active" href="#main-content" aria-current="page">Home</a>
          <a href="#recent-reviews">Design reviews</a>
          <a href="#rubric">How reviews work</a>
          <Link href="/design-system">Design system</Link>
        </nav>

        <a className="header-upload" href="#start-review">
          <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 13V3m0 0L6.5 6.5M10 3l3.5 3.5M4 11v4a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-4" /></svg>
          Start a review
        </a>
      </header>

      <main id="main-content" className="page-shell">
        <section className="welcome-section" aria-labelledby="welcome-title">
          <div>
            <p className="section-label">Your design space</p>
            <h1 id="welcome-title">Let’s make your design even stronger.</h1>
            <p>Your latest Design Review is ready. We’ll look at what’s working, talk through what could be clearer, and help you choose a useful next step.</p>
          </div>
          <a className="primary-button welcome-upload" href="#start-review">
            <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 13V3m0 0L6.5 6.5M10 3l3.5 3.5M4 11v4a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-4" /></svg>
            Start a Design Review
          </a>
        </section>

        <section className="dashboard-focus" id="latest-review" aria-label="Latest Design Review">
          <ReviewCard
            featured
            project="Mobile Fitness App Redesign"
            version="Version 3"
            status="Completed"
            confidence="Medium"
            score={84}
            date="20 Jul 2026"
            screenshot="fitness"
          />
        </section>

        <section id="observations" className="observations-section" aria-label="Written evidence for screenshot annotations">
          <FindingCard
            title="Give your primary action a little more room to lead."
            suggestion="Try reserving the strongest fill color for the action you want people to take first. This creates a clearer path without removing useful choices."
            severity="High"
            effort="Low"
          />
        </section>

        <section className="learning-section" id="version-comparison" aria-label="Design progress">
          <VersionComparisonCard previous={72} current={84} />
          <ImprovementTimeline />
        </section>

        <section className="category-section" id="rubric" aria-labelledby="categories-title">
          <div className="section-heading">
            <div>
              <p className="section-label">A closer look</p>
              <h2 id="categories-title">What we noticed in your design</h2>
            </div>
            <p>Each area connects to visible details in your screenshot, so you can understand the reasoning and decide what fits your design.</p>
          </div>
          <div className="category-grid">
            {categories.map((category) => <CategoryScoreCard key={category.name} {...category} />)}
          </div>
        </section>

        <section className="recent-section" id="recent-reviews" aria-labelledby="recent-title">
          <div className="section-heading">
            <div>
              <p className="section-label">Your recent work</p>
              <h2 id="recent-title">Keep learning across projects</h2>
            </div>
            <a className="link-button" href="#recent-reviews-list">Browse review summaries <span aria-hidden="true">↓</span></a>
          </div>
          <div className="recent-grid" id="recent-reviews-list">
            {recentReviews.map((review) => <ReviewCard key={review.project} {...review} />)}
          </div>
        </section>

        <ReviewUpload />

        <aside className="limitation-note" id="review-scope" aria-label="Design Review scope">
          <span aria-hidden="true">i</span>
          <p><strong>A thoughtful second opinion, never a final verdict.</strong> Design Mentor reviews the visible details in your screenshot. Interactions, task success, technical accessibility, and user research still benefit from hands-on testing.</p>
        </aside>
      </main>

      <footer className="site-footer">
        <a className="brand brand--footer" href="#main-content">
          <span className="brand-mark" aria-hidden="true"><span /><span /></span>
          <span><strong>Design Mentor</strong><small>Your second pair of eyes for better UI design.</small></span>
        </a>
        <p>Feedback designed to support learning, iteration, and better design decisions. <a href="#review-scope">Review scope and privacy</a> · <Link href="/design-system">Design system</Link></p>
      </footer>
    </div>
  );
}
