# KKN Team Profile Website — Project Brief
## 1. What This Project Is

A modern digital profile/portfolio website for a **KKN (Kuliah Kerja Nyata)** team — a university community-service program. This is **not** a simple "About Us" page. It's an official portfolio that:

- Introduces the team and its identity
- Documents each member's role and responsibility
- Explains the team's organizational structure
- Showcases the team's activities and community impact
- Can be shared with lecturers, university staff, local government, and the community

**Status:** Half-built already. This brief exists to re-anchor scope and give Copilot full context before continuing.

## 2. Tech Stack

- **React + Vite**
- Content is **hardcoded in code** for now (no CMS/backend) — team members, gallery images, division descriptions, stats all live as JS/TS data objects/arrays in the codebase
- Styling: not yet fixed here — pick one (Tailwind CSS is a strong fit for the glassmorphism/utility-heavy design described below) and note your choice in this file once decided
- Animation library candidates: Framer Motion (React-native, good for scroll reveals, hover/tilt, modals) — recommended given the interaction list below

## 3. Design Direction

**Feel:** Modern, professional, friendly, clean, interactive, community-oriented.

**Inspiration:** Apple, Vercel, Linear, Framer, Stripe — i.e., generous white space, restrained color palettes, confident typography, subtle motion (not flashy/loud).

**Visual style:**
- Glassmorphism (frosted-glass panels, backdrop blur, translucent borders)
- Soft gradients
- Floating decorative background blobs
- Smooth, physics-feeling animations
- Rounded components (generous border-radius)
- Spacious layouts (don't cram sections)
- Mobile-first responsive design
- Dark mode support

## 4. Site Structure & Sections

1. **Hero Section**
   - KKN Team Name
   - University
   - KKN Period
   - Village/Community Location
   - Team Motto
   - Call-to-Action button

2. **About KKN**
   - Brief explanation of what KKN is
   - Program objectives
   - Mission and vision
   - Community service theme

3. **Team Statistics**
   - Total Members
   - Duration of KKN
   - Community Programs count
   - Partner Village
   - Achievements (optional)
   - → Should use animated counters (count-up on scroll into view)

4. **Meet Our Team**
   - Interactive member cards (grid)
   - Hover animations (lift effect)
   - Click → member detail modal
   - Each member: personal motto, social media links

5. **Our Divisions**
   - Team Leader
   - Deputy Team Leader
   - Program & Events Division
   - Public Relations Division
   - Logistics Division
   - Documentation & Media Division
   - Each with a description of responsibilities

6. **Gallery**
   - Photos of KKN activities, workshops, community engagement, team moments
   - Should support hover/zoom interaction

7. **Our Impact**
   - Number of activities conducted
   - Community reached
   - Educational programs
   - Digital initiatives
   - Other measurable outcomes

8. **Footer**
   - University information
   - Contact information
   - Social media links
   - Copyright

## 5. Interactive Features Checklist

Use this as a literal build checklist — mark items done as you go, and tell Copilot Chat "implement the next unchecked item" for focused, scoped requests.

- [ ] Sticky glass navigation (blurred background, shrinks/condenses on scroll)
- [ ] Smooth scrolling (anchor links to sections)
- [ ] Scroll reveal animations (fade/slide-in as sections enter viewport)
- [ ] Hover lift effect on cards (team cards, division cards)
- [ ] Profile image zoom (on hover, in member cards)
- [ ] Glowing borders (on hover/focus for cards or CTA buttons)
- [ ] Animated social media icons (subtle hover motion)
- [ ] 3D card tilt (mouse-position-based tilt on team cards)
- [ ] Member detail modal (click card → modal with full bio, motto, socials)
- [ ] Animated statistics counters (count-up on scroll into view)
- [ ] Background gradient animation (slow-moving gradient in hero or globally)
- [ ] Floating decorative blobs (subtle parallax/drift)
- [ ] Particle effects (optional — skip if it hurts performance/mobile)
- [ ] Dark mode support (toggle + persisted preference)

## 6. Suggested Component/Folder Structure

```
src/
  components/
    layout/
      Navbar.jsx
      Footer.jsx
    sections/
      Hero.jsx
      AboutKKN.jsx
      TeamStats.jsx
      TeamGrid.jsx
      Divisions.jsx
      Gallery.jsx
      Impact.jsx
    ui/
      GlassCard.jsx
      StatCounter.jsx
      MemberModal.jsx
      FloatingBlob.jsx
      ScrollReveal.jsx
      ThemeToggle.jsx
  data/
    teamMembers.js
    divisions.js
    stats.js
    gallery.js
  hooks/
    useScrollReveal.js
    useCountUp.js
    useTilt.js
  styles/
    globals.css (or Tailwind config)
  App.jsx
  main.jsx
```

## 7. How to Use This With Copilot

- Keep this file open in a tab — Copilot Chat and inline suggestions pick up context from open files.
- For each unbuilt section, prompt Copilot Chat with something like: *"Using the structure and design direction in PROJECT_BRIEF.md, build the `Divisions.jsx` component with glassmorphism cards for each of the 6 roles listed."*
- Build one section/feature at a time rather than asking for the whole site in one prompt — smaller scoped requests produce more consistent, higher-quality output.
- After scaffolding a section, go back through the Interactive Features Checklist and ask Copilot to add specific interactions to that section one at a time.

## 8. Open Decisions (fill in as you decide)

- [ ] Styling approach: _______ (e.g. Tailwind CSS)
- [ ] Animation library: _______ (e.g. Framer Motion)
- [ ] Hosting: _______
- [ ] Final color palette / gradient direction: _______
- [ ] Font pairing: _______