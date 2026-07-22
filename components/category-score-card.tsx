type CategoryScoreCardProps = {
  name: string;
  score: number;
  description: string;
  tone: "honey" | "sky" | "lavender" | "mint" | "peach";
};

export function CategoryScoreCard({ name, score, description, tone }: CategoryScoreCardProps) {
  const assessment = score >= 8.5 ? "Strong foundation" : score >= 8 ? "On track" : "Worth refining";

  return (
    <article className={`category-card category-card--${tone}`}>
      <span className="category-marker" aria-hidden="true" />
      <div className="category-copy">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <p className="category-assessment">
        <strong>{assessment}</strong><span>Visible review criteria</span>
      </p>
    </article>
  );
}
