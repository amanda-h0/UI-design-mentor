type ScoreRingProps = {
  score: number;
  size?: "large" | "small";
  label?: string;
};

export function ScoreRing({ score, size = "large", label = "Visual design score" }: ScoreRingProps) {
  const radius = 46;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference - (score / 100) * circumference;

  return (
    <div
      className={`score-ring score-ring--${size}`}
      role="img"
      aria-label={`${label}: ${score} out of 100. This is a rubric-based visual review, not an absolute usability grade.`}
    >
      <svg viewBox="0 0 108 108" aria-hidden="true">
        <circle className="score-ring__track" cx="54" cy="54" r={radius} />
        <circle
          className="score-ring__value"
          cx="54"
          cy="54"
          r={radius}
          style={{ strokeDasharray: circumference, strokeDashoffset: dashOffset }}
        />
      </svg>
      <span className="score-ring__number">{score}</span>
      <span className="score-ring__maximum">/100</span>
    </div>
  );
}
