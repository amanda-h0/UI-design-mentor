const versions = [
  { version: "Version 1", date: "Jun 18", note: "Foundation" },
  { version: "Version 2", date: "Jul 02", note: "Structure improved" },
  { version: "Version 3", date: "Jul 20", note: "Current review", current: true },
];

export function ImprovementTimeline() {
  return (
    <section className="timeline-card" aria-labelledby="timeline-title">
      <div>
        <p className="section-label">Improvement history</p>
        <h2 id="timeline-title">Three versions, clearer decisions.</h2>
      </div>
      <ol className="improvement-timeline">
        {versions.map((item) => (
          <li key={item.version} className={item.current ? "is-current" : ""}>
            <span className="timeline-dot" aria-hidden="true" />
            <p>{item.version}</p>
            <strong>{item.note}</strong>
            <span>{item.date}</span>
          </li>
        ))}
      </ol>
      <a className="link-button mt-8" href="#version-comparison">Compare all versions <span aria-hidden="true">→</span></a>
    </section>
  );
}
