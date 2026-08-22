# GitHub Copilot Instructions

## Project Overview

This project is a modern React + Vite team profile website.

The codebase should prioritize readability, modularity, and reusable components.

---

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React

---

## Coding Standards

- Prefer functional components.
- Use React Hooks.
- Avoid class components.
- Use ES Modules.
- Use named exports when appropriate.
- Keep components under 200 lines when practical.
- Extract repeated UI into reusable components.

---

## Folder Organization

components/
pages/
hooks/
data/
utils/
assets/

Do not place large components inside App.jsx.

---

## Styling

- Tailwind utility classes only.
- No inline styles unless necessary.
- Maintain consistent spacing.
- Mobile-first responsive design.

---

## Component Rules

Each component should have a single responsibility.

Example:

Navbar

Hero

TeamCard

TeamGrid

MemberModal

Stats

Footer

---

## Data

Member data should come from

src/data/members.js

Never hardcode member information inside components.

---

## Accessibility

- Use semantic HTML.
- Add alt text to every image.
- Add aria-labels to icon-only buttons.
- Ensure keyboard navigation for modals.

---

## Animations

Use Framer Motion.

Animations should be smooth and subtle.

Preferred animations:

- fade
- slide
- scale
- hover lift

Avoid excessive motion.

---

## Performance

- Lazy load images when possible.
- Minimize unnecessary re-renders.
- Keep bundle size small.

---

## Code Quality

Prefer reusable helper functions over duplicated logic.

Write clear variable names.

Avoid deeply nested JSX.

Keep components easy to read.

---

## Future Scalability

Design components so the project can later support:

- API integration
- Firebase
- Admin dashboard
- Search
- Member categories

without major refactoring.