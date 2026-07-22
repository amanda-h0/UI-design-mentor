type VersionComparisonCardProps = {
  previous: number;
  current: number;
};

const improvements = [
  "Better visual hierarchy",
  "Improved spacing consistency",
  "Clearer primary actions",
];

export function VersionComparisonCard({ previous, current }: VersionComparisonCardProps) {
  const delta = current - previous;
  const direction = delta > 0 ? "improved" : delta < 0 ? "regressed" : "unchanged";
  const deltaText = delta > 0 ? `Up ${delta} points` : delta < 0 ? `Down ${Math.abs(delta)} points` : "No score change";
  const accessibleDelta = delta > 0 ? `an increase of ${delta} points` : delta < 0 ? `a decrease of ${Math.abs(delta)} points` : "no score change";
  const heading = delta > 0 ? "A stronger third iteration." : delta < 0 ? "A signal to revisit the evidence." : "A steady third iteration.";

  return (
    <article className="comparison-card">
      <div>
        <p className="section-label">Design improvement summary</p>
        <h2>{heading}</h2>
        <p className="mt-3 mb-0 max-w-xl text-sm leading-6 text-[#686c65]">Compared with Version 2 using the same project context and visual review rubric.</p>
      </div>
      <div className="score-comparison" aria-label={`Score changed from ${previous} to ${current}, ${accessibleDelta}`}>
        <div><span>Previous version</span><strong>{previous}<small>/100</small></strong></div>
        <span className="comparison-arrow" aria-hidden="true">→</span>
        <div><span>Current version</span><strong>{current}<small>/100</small></strong></div>
        <span className={`improvement-pill improvement-pill--${direction}`}>{deltaText}</span>
      </div>
      {delta > 0 ? (
        <ul className="improvement-list" aria-label="Observed improvements">
          {improvements.map((item) => <li key={item}><span aria-hidden="true">✓</span>{item}</li>)}
        </ul>
      ) : (
        <p className="comparison-direction-note">Open the observation evidence before deciding what to change next.</p>
      )}
      <p className="comparison-note"><span aria-hidden="true">i</span> Small changes in either direction may reflect review uncertainty. Use the evidence and rubric details to judge whether a change is meaningful.</p>
    </article>
  );
}
