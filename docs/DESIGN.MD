# Team Showcase - Design System

## Vision

Create a premium team profile website that immediately impresses visitors.

The experience should feel:

- Modern
- Elegant
- Interactive
- Smooth
- Professional
- Minimalistic

Avoid looking like a Bootstrap template.

Every interaction should feel intentional.

---

# Inspiration

The design language should resemble modern portfolio websites such as:

- Apple
- Linear
- Vercel
- Stripe
- Framer

Use generous whitespace, subtle gradients, glassmorphism, and fluid animations.

---

# Color Palette

Background

#F8FAFC

Surface

#FFFFFF

Primary

#2563EB

Accent

#7C3AED

Secondary Accent

#06B6D4

Success

#22C55E

Text

#0F172A

Muted

#64748B

Border

rgba(148,163,184,.18)

---

# Background

The background should never be plain white.

Create a layered background using:

• soft radial gradients

• blurred circles

• subtle noise texture

• animated floating particles

The movement should be extremely slow.

No distracting animations.

---

# Typography

Use a clean sans-serif font.

Recommended:

Inter

Font hierarchy

Hero Title
72px

Section Title
40px

Card Title
22px

Body
16px

Caption
14px

Line height

1.6

---

# Layout

Maximum width

1280px

Centered

Section spacing

120px

Content gap

32px

Cards

24px gap

---

# Navbar

Transparent at top.

Becomes glassmorphism while scrolling.

Contains

Logo

Navigation

Dark Mode Toggle

Hover

Underline animation

Active page indicator

---

# Hero

Contains

Team name

Large heading

Short description

CTA button

Group photo

Floating decorative shapes.

Hero image slowly floats.

CTA button has magnetic hover effect.

---

# Buttons

Rounded XL

Gradient background

Shadow

Hover

Lift

Scale

Gradient animation

Ripple click animation

Transition

300ms

---

# Team Cards

Cards use glassmorphism.

Background blur

Soft border

Large profile photo

Name

Role

Hidden motto

Hidden social icons

Hover interaction

Card lifts

12px

Image zoom

110%

Border glows

Background becomes brighter

Social icons fade in

Motto slides upward

Cursor changes

Shadow increases

Entire animation

350ms

---

# Card Tilt

Cards should have a subtle 3D tilt following mouse position.

Maximum rotation

6 degrees

When mouse leaves

Return smoothly.

---

# Image Effect

Profile image should slightly scale.

Glow behind image.

Rounded.

Object cover.

---

# Social Icons

Initially hidden.

Appear on hover.

Animation

Fade

Slide upward

Icons rotate slightly on hover.

Each icon changes to brand color.

---

# Member Modal

Open with

Fade

Scale

Background blur

Contains

Large profile photo

Name

Position

Biography

Skills

Social links

Close button

ESC support

Click outside closes.

---

# Statistics

Animated counters.

Numbers count upward.

Cards glow on hover.

Icons gently float.

---

# Scroll Animations

Every section animates once.

Fade

Slide

Scale

Never bounce.

---

# Mouse Effects

Spotlight effect around cursor.

Subtle only.

No lag.

---

# Cursor

Desktop only.

Custom cursor.

Small glowing circle.

Follower animation.

Changes size over buttons.

---

# Background Particles

Small glowing dots.

Random movement.

Very slow.

Opacity below 30%.

---

# Floating Shapes

Blurred gradient blobs.

Move gently.

Independent speed.

---

# Footer

Glass background.

Animated divider.

Social links.

Back to top button.

---

# Dark Mode

Support dark mode.

Use deep navy background.

Cards become translucent.

Maintain accessibility.

---

# Motion

Use Framer Motion.

Duration

250–450ms

Ease

easeOut

Use

Fade

Scale

Slide

Opacity

Rotate

Avoid

Bounce

Flash

Shake

Spin

---

# Responsive

Desktop

4 cards

Tablet

2 cards

Mobile

1 card

Navigation becomes drawer.

---

# Accessibility

Keyboard navigation.

Visible focus.

ARIA labels.

Alt text.

Reduced motion support.

---

# Performance

Lazy load images.

Memoize expensive components.

Optimize animations.

Avoid unnecessary re-renders.

Use CSS transforms instead of changing layout properties.

---

# Code Style

Reusable components.

Small files.

No duplicated logic.

Meaningful variable names.

Separate UI from data.

Prefer composition over large components.