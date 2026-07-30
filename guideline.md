# Style Guide: Personal Portfolio Website

## Design Philosophy

The portfolio should feel elegant, refined, and professional while remaining approachable.

The experience should prioritize:

- Clarity and focus
- Elegant simplicity
- Smooth and purposeful motion
- Strong first impression
- Easy content readability

Visitors should feel that the owner is skilled, thoughtful, and detail-oriented.

The interface should communicate:

- Elegance
- Professionalism
- Modern craftsmanship
- Confidence
- Approachability

## Design References

Primary References:

- Linear
- Vercel
- Stripe
- Framer
- Apple (product pages)

Secondary References:

- Notion
- Arc Browser
- Minimal portfolio sites with strong motion design

Use these references for:

- Clean layout structure
- Spacing and hierarchy
- Typography treatment
- Subtle animation quality
- Overall polish

Do not copy designs directly. Use them as inspiration only.

## Visual Personality

The product should feel:

- Light
- Elegant
- Modern
- Refined
- Premium

Avoid making the product feel:

- Dark and heavy
- Playful or cartoonish
- Overly experimental
- Cluttered
- Corporate / enterprise-heavy

## Color System

### Theme Direction
Light / bright theme with elegant contrast.

### Primary
Soft Indigo / Refined Blue

Suggested Hex:
#4F46E5

Usage:
- Primary buttons
- Active navigation states
- Key interactive elements
- Accent highlights

### Secondary
Soft Violet

Suggested Hex:
#7C3AED

Usage:
- Secondary accents
- Hover states
- Supporting highlights

### Neutral Palette (Light Theme)

Page Background:
#FAFAFA or #F8FAFC

Surface / Card Background:
#FFFFFF

Elevated Surface:
#F1F5F9

Border:
#E2E8F0

Text Primary:
#0F172A

Text Secondary:
#475569

Text Muted:
#94A3B8

### Semantic Colors

Success:
#22C55E

Warning:
#F59E0B

Danger:
#EF4444

## Typography

Font Family:
Inter (or similar modern geometric sans-serif)

Fallback:
- system-ui
- -apple-system
- sans-serif

Typography should feel clean, modern, and highly readable.

Avoid:
- Decorative fonts
- Serif fonts
- Overly condensed or experimental typefaces

## Typography Hierarchy

### Display
Used for:
- Hero headline
- Major section titles

### Heading
Used for:
- Section titles (About, Projects, Skills, Contact)

### Subheading
Used for:
- Project titles
- Card titles

### Body
Used for:
- Descriptions
- Bio text
- Project summaries

### Caption
Used for:
- Tech stack tags
- Metadata
- Helper text

## Layout System

Desktop First

Container Width:
1200px – 1280px

Spacing System:
8px base

Examples:
- 8
- 16
- 24
- 32
- 48
- 64
- 80
- 96

Maintain consistent spacing throughout.

## Border Radius

Buttons:
9999px (pill) or 12px

Cards:
16px – 20px

Inputs:
12px

Images:
12px – 16px

## Shadows

Use very soft and subtle shadows only.

Prefer:
- Soft elevation
- Border + light shadow combination

Avoid:
- Heavy drop shadows
- Strong floating effects

## Navigation

### Navbar Style
Pill Navigation (floating capsule)

Behavior:
- Sticky on scroll
- Smooth active state
- Subtle background blur / glass effect on scroll (optional)
- Collapses into mobile menu on smaller screens

Characteristics:
- Rounded full (pill shape)
- Centered or slightly floating
- Clean and minimal items
- Elegant hover and active states

## Hero Section

### Background
Light Rays effect (React Bits)

### Text Animation
Blur Text reveal

### Component
Lanyard (personal identity / name badge)

### Guidelines
- Strong visual hierarchy
- Clear headline + supporting text
- Soft and elegant motion
- Balanced composition (not overcrowded)
- Primary and secondary call-to-action buttons

## Cards & Project Items

Each project card should contain:
- Thumbnail image
- Project title
- Short description
- Tech stack tags
- Links (Live / Code)

Style:
- Clean white or very light surface
- Soft border or subtle shadow
- Consistent padding
- Elegant hover state (slight lift or border accent)

## Buttons

Primary:
- Filled with primary color
- Pill or soft rounded
- Clear hover state

Secondary:
- Outline or ghost style
- Soft border

Avoid overly sharp or heavy button styles.

## Animation Guidelines

Preferred animations (React Bits + custom):
- Light Rays (Hero background)
- Blur Text
- Lanyard
- Subtle fade / slide on scroll
- Soft hover transitions

Rules:
- Motion should feel smooth and refined
- Prefer subtlety over spectacle
- Maintain performance (aim for 60fps feel)
- Avoid excessive or distracting animations

## Responsive Rules

Desktop:
1024px+

Tablet:
768px – 1023px

Mobile:
Below 768px

Mobile should:
- Stack sections vertically
- Convert pill navbar into clean mobile menu
- Maintain elegant spacing
- Keep hero impactful but readable

## Accessibility

Requirements:
- Strong color contrast on light background
- Keyboard navigation support
- Visible focus states
- Semantic HTML structure
- Alt text for images

Accessibility is required.

## AI / Implementation Rules

When building the UI:

- Strictly follow this style guide
- Prioritize consistency and elegance
- Reuse common components
- Use the defined spacing system
- Stick to the light elegant theme
- Do not introduce dark mode by default
- Do not add extra accent colors outside the system
- Keep the overall feeling refined and professional

## Design Success Criteria

The design is successful when:

- The site feels light, elegant, and premium
- The Hero section makes a strong first impression (Light Rays + Blur Text + Lanyard)
- The Navbar feels modern and polished (Pill style)
- Content is easy to scan and understand
- Animations feel smooth and purposeful
- The overall experience feels comparable to high-quality modern portfolio sites and refined product pages (Linear, Vercel, Framer level of polish)