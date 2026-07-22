import Image from "next/image";

export type ScreenshotVariant = "fitness" | "portfolio" | "checkout" | "banking";

type ScreenshotPreviewProps = {
  variant: ScreenshotVariant;
  compact?: boolean;
  annotated?: boolean;
};

const labels: Record<ScreenshotVariant, string> = {
  fitness: "Mobile fitness app redesign screenshot",
  portfolio: "Portfolio landing page screenshot",
  checkout: "E-commerce checkout screen screenshot",
  banking: "Mobile banking interface screenshot",
};

export function ScreenshotPreview({ variant, compact = false, annotated = false }: ScreenshotPreviewProps) {
  if (variant === "fitness") {
    return (
      <div className={`screenshot-preview ${compact ? "screenshot-preview--compact" : ""}`}>
        <div className="screenshot-artboard">
          <Image
            src="/fitness-app-redesign.svg"
            alt={labels.fitness}
            width={1080}
            height={760}
            priority={!compact}
          />
          {annotated && (
            <>
              <a id="annotation-1" className="annotation-pin annotation-pin--one" href="#observation-1" aria-label="Go to observation 1: competing actions">1</a>
              <a id="annotation-2" className="annotation-pin annotation-pin--two" href="#observation-2" aria-label="Go to observation 2: low-contrast supporting text">2</a>
            </>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`mini-interface mini-interface--${variant}`} role="img" aria-label={labels[variant]}>
      <div className="mini-interface__bar"><span /><span /></div>
      <div className="mini-interface__body">
        <div className="mini-interface__title" />
        <div className="mini-interface__copy" />
        <div className="mini-interface__copy mini-interface__copy--short" />
        <div className="mini-interface__feature"><span /><span /><span /></div>
      </div>
    </div>
  );
}
