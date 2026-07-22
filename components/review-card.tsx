import { ScreenshotPreview, type ScreenshotVariant } from "./screenshot-preview";

type ReviewCardProps = {
  project: string;
  score: number;
  date: string;
  screenshot: ScreenshotVariant;
  featured?: boolean;
  version?: string;
  status?: string;
  confidence?: string;
  href?: string;
  change?: string;
  resolved?: string;
  nextStep?: string;
};

export function ReviewCard({
  project,
  score,
  date,
  screenshot,
  featured = false,
  version,
  status,
  confidence,
  href = "#latest-review",
  change,
  resolved,
  nextStep,
}: ReviewCardProps) {
  if (!featured) {
    return (
      <article className="recent-review-card">
        <ScreenshotPreview variant={screenshot} compact />
        <div className="p-5">
          <div className="recent-review-heading">
            <div>
              <p className="mb-1 text-sm font-medium text-[#6c6a5d]">Reviewed {date}</p>
              <h3 className="m-0 text-lg font-semibold tracking-[-0.02em] text-[#252724]">{project}</h3>
            </div>
            <span className="recent-version">Design Review</span>
          </div>
          <dl className="recent-learning">
            <div><dt>Version change</dt><dd>{change}</dd></div>
            <div><dt>Resolved</dt><dd>{resolved}</dd></div>
            <div><dt>Next step</dt><dd>{nextStep}</dd></div>
          </dl>
          <a className="link-button mt-5" href={href}>View learning summary <span aria-hidden="true">→</span></a>
        </div>
      </article>
    );
  }

  return (
    <article className="featured-review">
      <div className="featured-review__visual" id="latest-screenshot">
        <div className="screenshot-label">
          <span className="status-mark" aria-hidden="true" />
          Latest screenshot
          <span>Mobile · Version 3</span>
        </div>
        <ScreenshotPreview variant={screenshot} annotated />
      </div>

      <div className="featured-review__content">
        <div>
            <p className="section-label">Latest Design Review</p>
          <h2>{project}</h2>
          <p className="mt-3 mb-0 text-sm text-[#6a6e67]">{version} · Reviewed {date}</p>
        </div>

        <div className="review-score-block">
          <p className="quiet-score" aria-label={`Rubric summary ${score} out of 100`}><strong>{score}</strong><span>/100</span></p>
          <div>
            <p className="score-title">Rubric summary · Visual review v1.3</p>
            <p>A secondary snapshot of visible criteria—not an absolute measure of usability.</p>
          </div>
        </div>

        <dl className="review-details">
          <div><dt>Design Review</dt><dd><span className="status-mark" aria-hidden="true" />{status}</dd></div>
          <div><dt>Confidence</dt><dd><span className="confidence-mark" aria-hidden="true" />{confidence}</dd></div>
          <div><dt>Rubric</dt><dd>Visual review v1.3</dd></div>
        </dl>

        <a className="primary-button w-full" href="#observations">Read the observations <span aria-hidden="true">→</span></a>
        <p className="confidence-copy">Medium confidence reflects what can be inferred from one static screenshot. Interaction behavior still requires testing.</p>
      </div>
    </article>
  );
}
