---
name: Design Mentor
description: Your second pair of eyes for better UI design.
colors:
  mentor-blue: "#245b78"
  mentor-blue-hover: "#19465f"
  focus-blue: "#245fc4"
  sky-guidance: "#cfebff"
  peach-warmth: "#ffbe91"
  apricot-highlight: "#ffddb0"
  cream-canvas: "#fffce1"
  warm-surface: "#fffef7"
  warm-surface-muted: "#fff1d2"
  charcoal-ink: "#252724"
  charcoal-soft: "#57594f"
  warm-muted-ink: "#6c6a5d"
  warm-line: "#e5d2ae"
  warm-line-strong: "#a98a68"
  success-green: "#2b7958"
typography:
  display:
    fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "clamp(2.5rem, 5vw, 3.5rem)"
    fontWeight: 700
    lineHeight: 1.07
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "clamp(2.25rem, 4vw, 2.5rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "clamp(1.5rem, 2.5vw, 1.75rem)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "normal"
rounded:
  control: "14px"
  card: "18px"
  feature: "20px"
  pill: "999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  section: "64px"
  section-wide: "84px"
components:
  button-primary:
    backgroundColor: "{colors.mentor-blue}"
    textColor: "{colors.warm-surface}"
    rounded: "{rounded.control}"
    padding: "11px 18px"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.mentor-blue-hover}"
    textColor: "{colors.warm-surface}"
    rounded: "{rounded.control}"
    padding: "11px 18px"
    height: "44px"
  button-secondary:
    backgroundColor: "{colors.warm-surface}"
    textColor: "{colors.charcoal-ink}"
    rounded: "{rounded.control}"
    padding: "10px 15px"
    height: "44px"
  review-card:
    backgroundColor: "{colors.warm-surface}"
    textColor: "{colors.charcoal-ink}"
    rounded: "{rounded.feature}"
    padding: "28px"
  input:
    backgroundColor: "{colors.warm-surface}"
    textColor: "{colors.charcoal-ink}"
    rounded: "{rounded.control}"
    padding: "10px 12px"
    height: "46px"
---

# Design System: Design Mentor

## Overview

**Creative North Star: "Sunlit Studio"**

Design Mentor feels like working beside a trusted designer in a bright, welcoming studio. Warm cream surfaces create ease and generosity; clear blue accents provide direction; peach and apricot add selective human warmth around observations and encouragement. The user's interface remains the most visually important artifact.

The system is modern and minimal without becoming sterile. Components are warm and quietly confident: rounded, spacious, legible, and calm. It rejects corporate dashboard density, editorial drama, dark AI aesthetics, chatbot conventions, glassmorphism, heavy gradients, and decorative complexity.

**Key Characteristics:**
- Warm neutral light with dependable blue guidance.
- One conversational sans-serif voice.
- Generous whitespace and clear grouping.
- Soft ambient lift on meaningful surfaces.
- Encouraging review language with visible evidence and uncertainty.

## Colors

The palette balances a sun-warmed neutral foundation with blue functional emphasis and sparing peach warmth.

### Primary
- **Mentor Blue:** The action and guidance color for primary buttons, links, score progress, active navigation, and upload focus.
- **Mentor Blue Hover:** A deeper response color used only for interactive hover and pressed emphasis.
- **Focus Blue:** A distinct, high-visibility keyboard focus indicator.

### Secondary
- **Sky Guidance:** Informational regions, progress surfaces, upload states, and gentle callouts.
- **Peach Warmth:** Selective emphasis for observations and annotations; use dark text rather than white.
- **Apricot Highlight:** Supportive next-step surfaces and warm category emphasis.

### Neutral
- **Cream Canvas:** The application background and dominant source of warmth.
- **Warm Surface:** Primary cards, forms, review content, and screenshot chrome.
- **Warm Muted Surface:** Grouping, quiet controls, and screenshot staging.
- **Charcoal Ink:** Primary text and icons.
- **Charcoal Soft:** Body and explanatory copy.
- **Warm Muted Ink:** Metadata and secondary labels where contrast remains sufficient.
- **Warm Line / Strong Line:** Minimal structural separators and control boundaries.

### Named Rules

**The Warmth Leads Rule.** Cream is the environment, blue is the guide, and peach is an accent; no screen should become a field of competing pastel cards.

**The Dark Text on Pastels Rule.** Peach, apricot, cream, and sky surfaces always use dark text.

**The Meaning Twice Rule.** Status, priority, confidence, and score changes pair color with text, iconography, or position.

## Typography

**Display Font:** Helvetica Neue (with Helvetica and Arial fallbacks)

**Body Font:** Helvetica Neue (with Helvetica and Arial fallbacks)

**Character:** A single approachable, conversational voice. Hierarchy comes from size, weight, and spacing, never from mixing font families or using editorial serif contrast.

### Hierarchy
- **Display** (700, 40-56px, 1.07): welcoming home-page statements; keep line length compact.
- **Headline** (700, 36-40px, 1.1): page and Design Review titles.
- **Title** (600-700, 24-28px, 1.2): section and prominent card headings.
- **Card title** (600, 18-20px, 1.25): project names and observation titles.
- **Body** (400, 16px, 1.55): explanations, guidance, and educational copy; target 55-75 characters per line.
- **Label** (500-600, 12px, 1.5): sentence-case labels and supporting metadata.

### Named Rules

**The One Voice Rule.** Use Helvetica Neue throughout; do not introduce Georgia, another serif, Inter, or a display typeface.

**The Sentence Case Rule.** Navigation, labels, buttons, headings, metadata, and statuses use sentence case. Avoid all-caps styling and artificial tracking.

## Layout

Desktop content uses centered containers up to 1240px with 56px page gutters. The header can extend to 1380px. Major sections use 64-84px vertical separation, while cards use 22-32px internal padding. The latest screenshot and Design Review lead the page; progress and score summaries remain secondary.

At 1100px, dense multi-column regions simplify. At 860px, feature and learning grids become single-column and navigation remains horizontally scrollable. At 640px, page gutters reduce to 14px per side, card padding tightens, and category/recent grids stack. Preserve every workflow on mobile rather than hiding navigation or essential actions.

**The Artifact Leads Rule.** Give the uploaded screenshot more area and contrast than surrounding metrics, decoration, or product chrome.

**The One Primary Action Rule.** Each region has one visually dominant action; secondary and text actions remain available without competing.

## Elevation & Depth

Depth uses soft ambient lift. Primary cards and key calls to action use one warm, diffuse shadow; tonal surface shifts and whitespace do most of the structural work. Borders are translucent and quiet, not a grid laid over the page.

### Shadow Vocabulary
- **Soft ambient lift** (`0 10px 32px rgb(79 61 35 / .08)`): feature cards, review cards, and important calls to action.
- **Screenshot lift** (`0 12px 32px rgb(37 39 36 / .1)`): uploaded artwork against its staging surface.
- **Overlay lift** (`0 10px 30px rgb(37 39 36 / .1)`): temporary overlays only.

### Named Rules

**The Soft Lift Rule.** Shadows create quiet separation, never floating-card spectacle. Do not stack shadows or nest elevated cards.

## Shapes

The form language is gently rounded and practical. Controls use 14px corners, standard cards use 18px, and feature surfaces use 20px. Pills are reserved for compact statuses and tags. Screenshot artwork may use smaller 9px corners so it reads as an artifact inside the product rather than another product card.

Borders are minimal, warm, and low contrast. Avoid square enterprise containers, excessive pills, nested cards, and arbitrary radius variation.

## Components

### Buttons
- **Shape:** Quietly rounded controls (14px) with a minimum 44px target.
- **Primary:** Mentor Blue fill, warm white text, 11px by 18px padding, and a strong but friendly label.
- **Hover / Focus:** Deepen to Mentor Blue Hover and lift by 1px on hover. Use a 3px Focus Blue outline with 3px offset for keyboard focus.
- **Secondary:** Warm surface or transparent fill with a restrained strong-line border; use for comparison and supporting actions.
- **Text:** Mentor Blue text with underline appearing on hover. Do not let text actions mimic primary buttons.

### Cards / Containers
- **Corner Style:** 18px standard or 20px for feature surfaces.
- **Background:** Warm Surface for review content; Sky Guidance or Apricot Highlight only when the semantic emphasis justifies it.
- **Shadow Strategy:** Soft ambient lift on meaningful top-level surfaces only.
- **Border:** A translucent warm line, or none when a tonal surface is sufficient.
- **Internal Padding:** 22-32px based on prominence and viewport.

### Inputs / Fields
- **Style:** Warm Surface fill, 14px corners, 46px minimum height, clear persistent labels, and a restrained strong-line border.
- **Focus:** Focus Blue border with a soft three-pixel blue halo.
- **Error / Disabled:** Pair color with recovery text; disabled controls retain readable labels and never rely on opacity alone for meaning.

### Navigation
- Use 14px semibold sentence-case links. Active navigation uses Charcoal Ink plus a thin Mentor Blue marker. Preserve the full navigation as a horizontally scrollable row on narrow screens.

### Design Review
- The screenshot, project title, observation evidence, and practical next step form the core sequence.
- Score rings and confidence labels summarize context but never outrank the screenshot or recommendation.
- Annotation pins have explicit accessible labels and must correspond to written observations.

### Status badges
- Use compact pill shapes for priority, confidence, and state only.
- Every badge includes readable text and, where useful, an icon or marker. Success green is reserved for completed states, not general branding.

## Do's and Don'ts

### Do:
- **Do** make the screenshot and Design Review the clearest focal point.
- **Do** use warm, educational language that explains evidence and preserves user agency.
- **Do** create hierarchy with size, weight, spacing, and selective color.
- **Do** keep body copy at 16px and essential targets at least 44px.
- **Do** preserve visible keyboard focus, reduced-motion support, and non-color status cues.

### Don't:
- **Don't** use Georgia, serif typography, mixed font families, all-caps labels, or editorial report styling.
- **Don't** describe the product as an AI critic, chatbot, analytics dashboard, or final authority.
- **Don't** overuse scores, metrics, bordered grids, pastel card collections, or nested elevated surfaces.
- **Don't** use heavy gradients, glassmorphism, dark AI aesthetics, decorative glows, or corporate data-table density.
- **Don't** claim screenshot review certifies usability or accessibility.
