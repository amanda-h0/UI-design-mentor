import Link from "next/link";
import { CategoryScoreCard } from "@/components/category-score-card";
import { ScoreRing } from "@/components/score-ring";
import { ScreenshotPreview } from "@/components/screenshot-preview";

const colors = [
  { name: "Canvas", token: "--canvas", value: "#FFFCE1", className: "ds-swatch--canvas" },
  { name: "Surface", token: "--surface", value: "#FFFEF7", className: "ds-swatch--surface" },
  { name: "Warm surface", token: "--surface-muted", value: "#FFF1D2", className: "ds-swatch--muted" },
  { name: "Charcoal", token: "--ink", value: "#252724", className: "ds-swatch--ink" },
  { name: "Soft charcoal", token: "--ink-soft", value: "#57594F", className: "ds-swatch--ink-soft" },
  { name: "Mentor blue", token: "--brand", value: "#245B78", className: "ds-swatch--brand" },
  { name: "Focus blue", token: "--focus", value: "#245FC4", className: "ds-swatch--focus" },
  { name: "Border", token: "--line", value: "#E5D2AE", className: "ds-swatch--line" },
];

const categoryColors = [
  { name: "Visual hierarchy", value: "#FFDDB0", className: "ds-category--honey" },
  { name: "Layout & spacing", value: "#CFEBFF", className: "ds-category--sky" },
  { name: "Accessibility", value: "#E8F4FF", className: "ds-category--lavender" },
  { name: "Consistency", value: "#FFFCE1", className: "ds-category--mint" },
  { name: "Visual heuristics", value: "#FFBE91", className: "ds-category--peach" },
];

const spacing = [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96];

function SectionHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="ds-section-header">
      <div>
        <p className="section-label">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      <p>{description}</p>
    </div>
  );
}

export default function DesignSystemPage() {
  return (
    <div className="ds-page">
      <a className="skip-link" href="#design-system-content">Skip to design system content</a>

      <header className="ds-header">
        <Link className="brand" href="/" aria-label="Design Mentor home">
          <span className="brand-mark" aria-hidden="true"><span /><span /></span>
          <span><strong>Design Mentor</strong><small>Your second pair of eyes for better UI design.</small></span>
        </Link>
        <span className="ds-header-label">Design system · v1.0</span>
        <Link className="secondary-button ds-back-link" href="/">Back home <span aria-hidden="true">→</span></Link>
      </header>

      <div className="ds-shell">
        <aside className="ds-sidebar" aria-label="Design system sections">
          <p>Foundations</p>
          <a href="#principles">Principles</a>
          <a href="#colors">Color</a>
          <a href="#typography">Typography</a>
          <a href="#spacing">Spacing & shape</a>
          <p>Components</p>
          <a href="#actions">Actions</a>
          <a href="#forms">Forms</a>
          <a href="#status">Status & feedback</a>
          <a href="#scores">Scores</a>
          <a href="#review-patterns">Review patterns</a>
          <a href="#accessibility">Accessibility</a>
        </aside>

        <main id="design-system-content" className="ds-content">
          <section className="ds-hero">
            <p className="section-label">Design Mentor design language</p>
            <h1>A friendly space for stronger design work.</h1>
            <p>This system should feel like an experienced designer sitting beside you: warm, thoughtful, encouraging, and ready to explain the reasoning.</p>
            <div className="ds-hero-meta">
              <span>Next.js</span><span>React</span><span>TypeScript</span><span>Tailwind CSS</span><span>WCAG-aware</span>
            </div>
          </section>

          <section className="ds-section" id="principles">
            <SectionHeader eyebrow="01 · Foundations" title="Product principles" description="Every screen should help a growing designer understand evidence, choose a next step, and see improvement over time." />
            <div className="ds-principle-grid">
              <article><span>01</span><h3>Guide, never judge</h3><p>Use supportive, direct language. Suggestions invite evaluation rather than prescribe a single correct answer.</p></article>
              <article><span>02</span><h3>Evidence before advice</h3><p>Show the visible observation first, then interpretation, possible impact, and recommendation.</p></article>
              <article><span>03</span><h3>Progress over grades</h3><p>Scores summarize a rubric. Version-to-version learning matters more than reaching 100.</p></article>
              <article><span>04</span><h3>Be open about limits</h3><p>Pair observations with confidence and explain what cannot be learned from a static screenshot.</p></article>
            </div>
          </section>

          <section className="ds-section" id="colors">
            <SectionHeader eyebrow="02 · Color" title="Warm light, clear blue signals" description="Cream surfaces keep the experience welcoming, while peach adds warmth and blue gives actions and feedback a calm, dependable emphasis." />
            <h3 className="ds-subtitle">Core palette</h3>
            <div className="ds-color-grid">
              {colors.map((color) => (
                <article key={color.token} className="ds-color-card">
                  <div className={`ds-swatch ${color.className}`} />
                  <strong>{color.name}</strong><code>{color.token}</code><span>{color.value}</span>
                </article>
              ))}
            </div>
            <h3 className="ds-subtitle ds-subtitle--spaced">Category surfaces</h3>
            <div className="ds-category-palette">
              {categoryColors.map((color) => <div key={color.name} className={color.className}><span>{color.name}</span><code>{color.value}</code></div>)}
            </div>
            <div className="ds-guidance"><span aria-hidden="true">i</span><p><strong>Never use color alone.</strong> Pair every severity, confidence, category, and score change with a label, icon, or position. Normal text must meet at least 4.5:1 contrast.</p></div>
          </section>

          <section className="ds-section" id="typography">
            <SectionHeader eyebrow="03 · Typography" title="One friendly, flexible voice" description="Helvetica Neue keeps every part of the experience clear and conversational. Size, weight, and spacing create the hierarchy." />
            <div className="ds-type-specimens">
              <div><span>Hero · Helvetica Neue · 56/60 · Bold</span><p className="ds-display">See your design more clearly.</p></div>
              <div><span>Page title · Helvetica Neue · 40/44 · Bold</span><p className="ds-page-title">Mobile Fitness App Redesign</p></div>
              <div><span>Section title · Helvetica Neue · 28/34 · Semibold</span><p className="ds-section-title">What we noticed</p></div>
              <div><span>Body · Helvetica Neue · 16/26 · Regular</span><p className="ds-body-copy">The primary action is visible, but nearby secondary controls use similar color and weight. This may make the intended next step less immediate.</p></div>
              <div className="ds-type-row"><span>Label · 12/18 · Medium</span><p className="section-label">Visual hierarchy</p></div>
            </div>
          </section>

          <section className="ds-section" id="spacing">
            <SectionHeader eyebrow="04 · Spacing & shape" title="A quiet visual rhythm" description="Generous space separates ideas. Borders and subtle surface changes create structure before shadows or decorative containers." />
            <div className="ds-foundation-split">
              <div>
                <h3 className="ds-subtitle">4px spacing scale</h3>
                <div className="ds-spacing-list">
                  {spacing.map((value) => <div key={value}><code>{value}</code><span style={{ width: `${value}px` }} /></div>)}
                </div>
              </div>
              <div>
                <h3 className="ds-subtitle">Radius</h3>
                <div className="ds-radius-row"><span className="ds-radius-sm">6</span><span className="ds-radius-md">10</span><span className="ds-radius-lg">18</span><span className="ds-radius-full">Full</span></div>
                <h3 className="ds-subtitle ds-subtitle--spaced">Elevation</h3>
                <div className="ds-shadow-row"><span>None</span><span className="ds-shadow-sm">Subtle</span><span className="ds-shadow-md">Overlay</span></div>
                <p className="ds-caption">Use radius to soften functional surfaces, not to turn every section into a floating card. Reserve shadows for screenshots, menus, and temporary overlays.</p>
              </div>
            </div>
          </section>

          <section className="ds-section" id="actions">
            <SectionHeader eyebrow="05 · Components" title="Actions" description="One clear primary action per region. Secondary and text actions should remain available without competing for attention." />
            <div className="ds-component-stage">
              <div className="ds-component-group"><span>Primary</span><button className="primary-button" type="button">Open Design Review <span aria-hidden="true">→</span></button><button className="primary-button" type="button" disabled>Reviewing...</button></div>
              <div className="ds-component-group"><span>Secondary</span><button className="secondary-button" type="button">Compare versions</button><button className="secondary-button" type="button" disabled>Unavailable</button></div>
              <div className="ds-component-group"><span>Text</span><button className="link-button" type="button">View rubric <span aria-hidden="true">→</span></button><button className="ds-danger-link" type="button">Delete review</button></div>
              <div className="ds-component-group"><span>Icon</span><button className="ds-icon-button" type="button" aria-label="Upload screenshot"><svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 13V3m0 0L6.5 6.5M10 3l3.5 3.5M4 11v4a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-4" /></svg></button></div>
            </div>
          </section>

          <section className="ds-section" id="forms">
            <SectionHeader eyebrow="06 · Forms" title="Context makes guidance useful" description="Inputs should explain how context improves the Design Review. Errors describe the recovery action, not just what went wrong." />
            <div className="ds-form-grid">
              <label className="ds-field"><span>Project title</span><input defaultValue="Mobile Fitness App Redesign" /><small>Use a name that helps you recognize this design later.</small></label>
              <label className="ds-field"><span>Interface type</span><select defaultValue="mobile"><option value="mobile">Mobile application</option><option value="landing">Landing page</option><option value="dashboard">Dashboard</option></select></label>
              <label className="ds-field ds-field--error"><span>Primary user goal</span><input aria-invalid="true" aria-describedby="goal-error" placeholder="e.g. Start a workout" /><small id="goal-error">Add the intended goal so hierarchy can be reviewed in context.</small></label>
              <label className="ds-field"><span>Design notes <em>Optional</em></span><textarea rows={3} placeholder="What changed in this version?" /></label>
            </div>
            <div className="ds-upload-zone" tabIndex={0} role="button" aria-label="Upload PNG or JPG screenshot">
              <span className="ds-upload-icon" aria-hidden="true">↑</span>
              <div><strong>Drop your interface screenshot here</strong><p>or choose a PNG or JPG up to 10 MB</p></div>
              <button className="secondary-button" type="button">Choose file</button>
            </div>
          </section>

          <section className="ds-section" id="status">
            <SectionHeader eyebrow="07 · Status & feedback" title="Make every state feel clear" description="Labels and icons carry the meaning; color reinforces it. Confidence remains separate from priority and score." />
            <div className="ds-status-grid">
              <div><span>Priority</span><div><span className="ds-badge ds-badge--high"><i aria-hidden="true">!</i> High</span><span className="ds-badge ds-badge--medium"><i aria-hidden="true">!</i> Medium</span><span className="ds-badge ds-badge--low"><i aria-hidden="true">i</i> Low</span></div></div>
              <div><span>Confidence</span><div><span className="ds-badge ds-badge--confidence"><i aria-hidden="true" /> High confidence</span><span className="ds-badge ds-badge--confidence-medium"><i aria-hidden="true" /> Medium confidence</span><span className="ds-badge ds-badge--confidence-low"><i aria-hidden="true" /> Low confidence</span></div></div>
              <div><span>Review state</span><div><span className="ds-badge ds-badge--complete"><i aria-hidden="true">✓</i> Design Review complete</span><span className="ds-badge ds-badge--processing"><i aria-hidden="true" /> Reviewing</span><span className="ds-badge ds-badge--failed"><i aria-hidden="true">×</i> Needs attention</span></div></div>
            </div>
          </section>

          <section className="ds-section" id="scores">
            <SectionHeader eyebrow="08 · Scores" title="Transparent, never absolute" description="Score components must identify the rubric, explain limitations, and prioritize meaningful version changes over the isolated number." />
            <div className="ds-score-stage">
              <div className="ds-score-example"><ScoreRing score={84} /><div><strong>Strong visual foundation</strong><p>Visual review v1.3 · Medium confidence</p><button className="link-button" type="button">How scoring works →</button></div></div>
              <div className="ds-score-example"><ScoreRing score={72} size="small" label="Previous score" /><div><strong>Previous version</strong><p>Use with an explicit comparison label.</p></div></div>
              <div className="ds-progress-example"><span>Layout & spacing <strong>8/10</strong></span><div role="img" aria-label="Layout and spacing score 8 out of 10"><i style={{ width: "80%" }} /></div><p>Alignment and grouping are mostly consistent.</p></div>
            </div>
            <div className="ds-category-example"><CategoryScoreCard name="Visual hierarchy" score={8.5} tone="honey" description="How clearly the interface guides attention toward important content and actions." /></div>
          </section>

          <section className="ds-section" id="review-patterns">
            <SectionHeader eyebrow="09 · Review patterns" title="Notice, explain, then suggest" description="The Design Review sequence stays consistent across observations, annotations, comparisons, and next steps." />
            <div className="ds-critique-grid">
              <div className="ds-preview-example">
                <div className="ds-preview-toolbar"><span>Screenshot evidence</span><span>Annotations on</span></div>
                <ScreenshotPreview variant="fitness" annotated />
              </div>
              <article className="ds-finding-example">
                <div className="ds-finding-top"><span className="finding-number">01</span><div><span className="ds-badge ds-badge--high"><i aria-hidden="true">!</i> High priority</span><span className="ds-badge ds-badge--confidence-medium"><i aria-hidden="true" /> Medium confidence</span></div></div>
                <p className="section-label">Visual hierarchy</p>
                <h3>Primary and secondary actions compete.</h3>
                <div><span>Observation</span><p>“Start now” and nearby actions use similar color and visual weight.</p></div>
                <div><span>Why it matters</span><p>Users may need longer to identify the intended next step.</p></div>
                <div className="ds-recommendation"><span>Try next</span><p>Reserve the filled treatment for the primary CTA and reduce emphasis on secondary actions.</p></div>
              </article>
            </div>
          </section>

          <section className="ds-section" id="accessibility">
            <SectionHeader eyebrow="10 · Standards" title="Accessibility and motion" description="The system supports access needs by default and never claims that a screenshot-based Design Review is accessibility certification." />
            <div className="ds-checklist">
              <article><span aria-hidden="true">✓</span><div><h3>Keyboard complete</h3><p>All workflows remain operable without a pointer, with visible focus and logical reading order.</p></div></article>
              <article><span aria-hidden="true">✓</span><div><h3>Contrast checked</h3><p>Normal text targets 4.5:1; controls, large text, and focus indicators target at least 3:1.</p></div></article>
              <article><span aria-hidden="true">✓</span><div><h3>Reduced motion respected</h3><p>Transitions explain state changes, remain under 300ms, and stop when reduced motion is requested.</p></div></article>
              <article><span aria-hidden="true">✓</span><div><h3>Claims stay accurate</h3><p>Accessibility feedback from screenshots is labeled as an indicator that requires technical and user testing.</p></div></article>
            </div>
          </section>
        </main>
      </div>

      <footer className="ds-footer"><span>Design Mentor design system · v1.0</span><Link href="/">Return home</Link></footer>
    </div>
  );
}
