type FindingCardProps = {
  title: string;
  suggestion: string;
  severity: "High" | "Medium" | "Low";
  effort: "High" | "Medium" | "Low";
};

export function FindingCard({ title, suggestion, severity, effort }: FindingCardProps) {
  const priorityClass = `severity-${severity.toLowerCase()}`;

  return (
    <article className="finding-card">
      <div className="flex items-center justify-between gap-4">
        <p className="section-label m-0">A useful next step</p>
        <span className="mentor-label">From your mentor</span>
      </div>
      <div className="observation-list">
        <section id="observation-1" className="observation" tabIndex={-1} aria-labelledby="observation-1-title">
          <a className="finding-number" href="#annotation-1" aria-label="Return to annotation 1 on the screenshot">1</a>
          <div>
            <p className="observation-kicker">Observation · Visual hierarchy</p>
            <h2 id="observation-1-title">{title}</h2>
            <p><strong>Visible evidence:</strong> “Start workout” and the nearby activity controls use similar fill, scale, and weight.</p>
            <p><strong>Why it may matter:</strong> The first action can take longer to identify when several controls ask for equal attention.</p>
            <div className="suggestion-block"><span>Try next</span><p>{suggestion}</p></div>
          </div>
        </section>
        <section id="observation-2" className="observation" tabIndex={-1} aria-labelledby="observation-2-title">
          <a className="finding-number finding-number--two" href="#annotation-2" aria-label="Return to annotation 2 on the screenshot">2</a>
          <div>
            <p className="observation-kicker">Observation · Accessibility indicator</p>
            <h2 id="observation-2-title">Supporting details may be difficult to read.</h2>
            <p><strong>Visible evidence:</strong> Small gray metadata sits on a light card near the lower-right annotation.</p>
            <p><strong>Why it may matter:</strong> Low contrast and small type can make useful context harder to scan. A screenshot cannot confirm the measured contrast ratio.</p>
            <div className="suggestion-block"><span>Try next</span><p>Check the text and background colors with a contrast tool, then keep essential supporting text at 16px where space allows.</p></div>
          </div>
        </section>
      </div>
      <dl className="finding-meta">
        <div><dt>Priority</dt><dd className={priorityClass}><span aria-hidden="true">{severity === "Low" ? "i" : "!"}</span>{severity}</dd></div>
        <div><dt>Effort</dt><dd><span className="effort-mark" aria-hidden="true" />{effort}</dd></div>
        <div><dt>Confidence</dt><dd><span className="confidence-mark" aria-hidden="true" />Medium</dd></div>
      </dl>
      <a className="secondary-button observation-return" href="#latest-screenshot">Review both annotations on the screenshot</a>
    </article>
  );
}
