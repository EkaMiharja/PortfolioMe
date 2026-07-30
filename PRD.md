# PRD: Personal Portfolio Website

## Product Overview

This is a modern personal portfolio website built with React and React Bits.  
The website showcases the owner's profile, projects, skills, and contact information in a clean, elegant, and interactive way.

The primary goal is to create a memorable first impression with smooth animations and a refined light theme, while remaining fast, accessible, and easy to update.

## Design Direction

- Theme: Light / bright color palette
- Style: Elegant, minimal, and premium
- Soft shadows, generous whitespace, refined typography
- Subtle and purposeful animations only

## Core Sections

### 1. Navbar
- Style: Pill navigation (floating / rounded capsule)
- Sticky on scroll
- Smooth active state transitions
- Responsive (collapses on mobile)

### 2. Hero Section
- Button: Specular Button at specularbutton.md
- Background: Light Rays effect at lightrays.md
- Text animation: Blur Text reveal at blurtext.md
- Component: Lanyard (name badge) at lanyard.md
- Clear headline + short introduction
- Call-to-action buttons (View Projects / Contact) at specularbutton.md

### 3. About Section
- Personal introduction
- Short bio and background
- Profile photo at tittlecard.md

### 4. Projects Section
- Component: card swap at cardswap.md
- image
- title, brief explanation on the left side
- Links to live demo and source code (if available)
- Data driven from `src/data/projects.js`

### 5. Skills Section
- Component: infinite menu 
- programming languages at infinitemenu.md
- Visual display of technical skills
- Data driven from `src/data/skills.js`

### 6. Contact Section
- Simple contact form or direct contact links
- Social media links (from `src/data/socials.js`)
- Clear call-to-action

### 7. Footer
- Minimal footer with copyright and social links

## Technical Requirements

### Tech Stack
- React (Vite)
- Tailwind CSS
- React Bits (for Light Rays, Blur Text, Lanyard, and other animations)
- Custom hooks for scroll animations

### Project Structure
portofolio-react/
├── public/
│   ├── images/
│   │   ├── projects/
│   │   ├── profile/
│   │   └── icons/
│   └── favicon.ico
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── common/          # Navbar, Footer, Button
│   │   ├── sections/        # Hero, About, Projects, Skills, Contact
│   │   └── animations/      # SplitText, etc.
│   ├── data/                # projects.js, skills.js, socials.js
│   ├── hooks/
│   ├── styles/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md


## Functional Requirements

- Fully responsive (mobile, tablet, desktop)
- Smooth scroll navigation
- Easy content updates via data files (`projects.js`, `skills.js`, `socials.js`)
- Fast loading performance
- Accessible (keyboard navigation + good contrast on light theme)

## Non-Functional Requirements

### Performance
- First contentful paint under 2 seconds
- Smooth 60fps animations
- Optimized images

### Accessibility
- Sufficient color contrast on light background
- Semantic HTML
- Keyboard navigable

### Maintainability
- Clean component structure
- Centralized data files
- Reusable common components

## MVP Scope

Included:
- Pill Navbar
- Hero with Light Rays + Blur Text + Lanyard
- About section
- Projects section
- Skills section
- Contact section
- Footer
- Light elegant theme
- Responsive layout

Not Included (for now):
- Blog
- Dark mode toggle
- CMS / backend
- Multi-language support
- Complex page transitions

## Acceptance Criteria

The portfolio is considered complete when:

- All main sections are implemented and linked
- Pill Navbar works correctly (desktop + mobile)
- Hero displays Light Rays background, Blur Text animation, and Lanyard component
- Theme follows light + elegant direction
- Content can be easily updated through data files
- Website is fully responsive and performs smoothly
- Overall look feels clean, modern, and professional