# Task Breakdown: Personal Portfolio Website

## Context

This document defines the implementation sequence for building the Personal Portfolio Website.

The goal is to prevent building the entire application at once.

Tasks should be completed sequentially.

Each task must be completed and reviewed before moving to the next task.

Always reference:

- prd.md
- guideline.md (Style Guide)

before implementation.

## Build Rules

- Follow the PRD exactly.
- Follow the Style Guide exactly.
- Do not create additional features.
- Reuse components whenever possible.
- Build shared / common components before section-specific components.
- Complete tasks sequentially.
- Validate each task before proceeding.
- Maintain the light + elegant theme throughout.

## Phase 1 — Project Foundation

### Task 1.1
Setup application structure.

Requirements:
- Create folders according to the agreed structure
- Setup `public/images` (projects, profile, icons)
- Setup `src/components/common`, `src/components/sections`, `src/components/animations`
- Setup `src/data`, `src/hooks`, `src/styles`, `src/utils`

Deliverables:
- Clean and scalable project structure

Success Criteria:
- Folder structure matches the PRD
- No duplicate or unnecessary folders

### Task 1.2
Setup base configuration.

Requirements:
- Configure Vite + React
- Setup Tailwind CSS
- Setup PostCSS
- Add basic `index.css` with Tailwind directives
- Configure path aliases if needed

Success Criteria:
- Project runs without errors
- Tailwind classes work correctly

## Phase 2 — Shared / Common Components

### Task 2.1
Build Button Component.

Requirements:
- Primary and Secondary variants
- Pill / rounded style
- Hover and focus states
- Support for icons (optional)

Success Criteria:
- Reusable across the entire site

### Task 2.2
Build Navbar Component (Pill Nav).

Requirements:
- Pill / floating capsule style
- Sticky on scroll
- Smooth active state
- Responsive (mobile menu)
- Links to: Home, About, Projects, Skills, Contact

Success Criteria:
- Matches Style Guide (pill navigation)
- Works on desktop and mobile

### Task 2.3
Build Footer Component.

Requirements:
- Minimal design
- Copyright
- Social links (from data)

Success Criteria:
- Consistent with light elegant theme

## Phase 3 — Data Layer

### Task 3.1
Create data files.

Requirements:
- `src/data/projects.js`
- `src/data/skills.js`
- `src/data/socials.js`

Rules:
- Use realistic content
- Easy to update later

Success Criteria:
- Data is clean and structured

## Phase 4 — Animations & Special Components

### Task 4.1
Setup React Bits components.

Requirements:
- Light Rays (background)
- Blur Text
- Lanyard
- Any additional animation helpers needed

Success Criteria:
- Components can be imported and used without errors

### Task 4.2
Create custom scroll animation hook (optional but recommended).

Requirements:
- `useScrollAnimation.js`
- Support fade / slide on scroll

Success Criteria:
- Smooth and performant

## Phase 5 — Hero Section

### Task 5.1
Build Hero Section.

Requirements:
- Background: Light Rays
- Text animation: Blur Text
- Component: Lanyard
- Headline + short introduction
- Primary & Secondary CTA buttons

Success Criteria:
- Strong first impression
- Matches Style Guide and PRD exactly
- Fully responsive

## Phase 6 — About Section

### Task 6.1
Build About Section.

Requirements:
- Profile photo
- Short bio
- Key highlights / values
- Clean and elegant layout

Success Criteria:
- Easy to read
- Consistent spacing and typography

## Phase 7 — Projects Section

### Task 7.1
Build Project Card component.

Requirements:
- Thumbnail
- Title
- Short description
- Tech stack tags
- Links (Live Demo / Source Code)

### Task 7.2
Build Projects Section.

Requirements:
- Grid layout
- Data driven from `projects.js`
- Responsive behavior

Success Criteria:
- Cards look elegant and consistent
- Hover states are refined

## Phase 8 — Skills Section

### Task 8.1
Build Skills Section.

Requirements:
- Grouped by category
- Data driven from `skills.js`
- Clean visual presentation (tags or simple cards)

Success Criteria:
- Easy to scan
- Matches overall elegant style

## Phase 9 — Contact Section

### Task 9.1
Build Contact Section.

Requirements:
- Clear call-to-action
- Contact form or direct links
- Social media links from `socials.js`

Success Criteria:
- Simple and effective
- Good visual hierarchy

## Phase 10 — Integration & Polish

### Task 10.1
Assemble all sections in App.jsx.

Requirements:
- Correct order: Navbar → Hero → About → Projects → Skills → Contact → Footer
- Smooth scroll behavior
- Proper spacing between sections

### Task 10.2
Responsive refinement.

Requirements:
- Test and fix mobile, tablet, and desktop layouts
- Ensure pill navbar works well on mobile
- Maintain elegant spacing on all breakpoints

### Task 10.3
Final visual polish.

Requirements:
- Consistent colors from Style Guide
- Consistent spacing
- Smooth animations
- Optimized images
- No layout shifts

Success Criteria:
- Site feels polished and premium

## Final Review

Before marking the project complete:

- Verify all sections are implemented
- Verify Pill Navbar works correctly
- Verify Hero has Light Rays + Blur Text + Lanyard
- Verify light elegant theme is consistent
- Verify data files are used correctly
- Verify responsive behavior
- Verify no console errors
- Verify accessibility basics (contrast, focus states, semantic HTML)

## Definition of Done

The project is complete when:

- All main sections exist and function
- Navbar is pill-style and responsive
- Hero section fully implements the required React Bits components
- Content is easily updatable via data files
- The UI strictly follows the Style Guide
- The implementation follows the PRD
- The website feels elegant, modern, and professional