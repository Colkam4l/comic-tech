# TechToons — Product Requirements Document (PRD)

**Product Name:** TechToons  
**Version:** 1.1  
**Date:** March 2, 2026  
**Author:** Product Team  
**Status:** Updated — reflects v0.2 implementation  

---

## 1. Executive Summary

TechToons is an interactive, browser-based coloring book that introduces children (ages 4–10) to technology concepts through creative play. Children color tech-themed illustrations — robots, circuit boards, AI brains, rockets, drones, and VR headsets — using intuitive digital tools, building familiarity with STEM imagery while exercising creativity.

**Business Goal:** Transform the existing prototype into a commercially viable EdTech product that generates recurring revenue through a freemium subscription model, while establishing TechToons as a trusted brand at the intersection of children's creativity and early tech literacy.

---

## 2. Problem Statement

### The Gap
Parents and educators seek engaging, screen-based activities that are both creative and educational. The existing market for children's digital coloring apps is fragmented:

| Pain Point | Current State | TechToons Opportunity |
|---|---|---|
| **Screen guilt** | Most kids' apps are passive consumption | Active creation builds comfort |
| **STEM exposure gap** | STEM learning starts too late (age 10+) | Introduces concepts at age 4–10 |
| **Generic content** | Most coloring apps use animals/princesses | Tech-themed illustrations are unique |
| **No learning link** | Coloring apps rarely educate | Each page can include factoids & mini-lessons |
| **No progress tracking** | Parents can't see engagement data | Dashboard shows time, pages, and skills |

### Target Users

| Persona | Description | Needs |
|---|---|---|
| **Kids (4–10)** | Primary users who color | Fun, intuitive, rewarding experience |
| **Parents** | Decision-makers who pay | Safe, educational, ad-free, progress visibility |
| **Educators** | Classroom adoption | Curriculum-aligned activities, class management |

---

## 3. Product Vision & Success Metrics

### Vision Statement
> *"Make every child's first interaction with technology a creative one."*

### Key Results (12-month targets)

| Metric | Target | Measurement |
|---|---|---|
| Monthly Active Users (MAU) | 50,000 | Analytics |
| Free → Paid Conversion | 5% | Subscription data |
| Monthly Recurring Revenue (MRR) | $12,500 | Stripe dashboard |
| Average Session Duration | 8+ minutes | Analytics |
| App Store Rating | 4.5+ stars | Store reviews |
| Educator Accounts | 500 | Admin dashboard |
| Pages Colored (total) | 1,000,000 | Event tracking |

---

## 4. Current Product Capabilities (v0.2 — Enhanced Prototype)

The current build demonstrates core viability plus kid-friendly UX:

### Core Features
- ✅ 6 tech-themed SVG coloring pages (Robot, Circuit Board, AI Brain, Rocket, Drone, VR Headset)
- ✅ Click-to-fill region painting with inline SVGs
- ✅ 16-color curated palette + full-spectrum custom picker
- ✅ 3 brush tools: Paint Bucket, Eraser, Rainbow (random)
- ✅ 20-level undo stack + full reset
- ✅ Export to PNG (2× resolution)
- ✅ Responsive layout (desktop + mobile)
- ✅ Clean design system (Fredoka + Nunito, teal/coral palette, 8px grid)
- ✅ Deployed on Vercel

### Kid-Friendly UX (NEW in v0.2)
- ✅ **Labeled Toolbar** — Visible text labels on every toolbar control ("Paint", "Erase", "Rainbow", "Undo", "Start Over", "Save") with section headings ("Colors", "Tools", "Actions")
- ✅ **Live Region Label Indicator** — Dynamic indicator above the canvas ("🎨 You're coloring: Head") that updates on hover/click, so kids know exactly what part they're coloring
- ✅ **Region Label Maps** — 100+ human-readable region names across all 6 pages (e.g., "Antenna Ball", "Processor (CPU)", "Left Thinking Area", "Nose Cone", "Camera Lens", "Left Controller")
- ✅ **Educational Descriptions** — Each coloring page shows an age-appropriate description explaining the tech concept (e.g., "A robot has a head, arms, and legs — just like you! Can you color each part?")
- ✅ **Gallery Descriptions** — Home page cards show educational blurbs so kids understand what they'll learn before clicking
- ✅ **Guided Onboarding Prompt** — Default state shows "👆 Tap a part to start coloring!" to guide new users

### Tech Stack
- React 19 + TypeScript
- Vite 7 (dev server & bundler)
- react-colorful (color picker)
- react-router-dom v7 (client-side routing)

---

## 5. Feature Requirements

### 5.1 Phase 1 — Foundation (Months 1–3)
*Goal: Transform prototype into a launchable product*

#### FR-1: User Accounts & Authentication
| Field | Detail |
|---|---|
| **Priority** | P0 — Must Have |
| **Description** | Parents create accounts; children have sub-profiles under a parent account |
| **Requirements** | - Email/password + Google/Apple OAuth sign-up<br>- Up to 4 child profiles per parent account<br>- Each child profile has name, avatar, age<br>- Child profiles have independent saved progress<br>- COPPA-compliant data collection (parental consent flow) |
| **Acceptance Criteria** | Parent can create account, add child profiles, and switch between them |

#### FR-2: Cloud Save & Progress Persistence
| Field | Detail |
|---|---|
| **Priority** | P0 — Must Have |
| **Description** | Coloring progress is automatically saved and synced across devices |
| **Requirements** | - Auto-save every 30 seconds + on page leave<br>- Region color state stored per user per page<br>- Gallery of completed works per child profile<br>- Offline support with sync-on-reconnect |
| **Acceptance Criteria** | User can close tab, return later, and resume coloring from where they left off |

#### FR-3: Expanded Content Library
| Field | Detail |
|---|---|
| **Priority** | P0 — Must Have |
| **Description** | Grow from 6 pages to 20+ across themed collections |
| **Requirements** | - New collections: Coding Creatures, Internet World, Gaming Galaxy, Green Tech<br>- 5 pages per collection (20+ total at launch)<br>- Difficulty levels: Easy (large regions), Medium, Challenging (detailed regions)<br>- 3 free pages + rest behind paywall |
| **Acceptance Criteria** | Content library shows collections; free users can access 3 pages, paid access all |

#### FR-4: Freemium Subscription Model
| Field | Detail |
|---|---|
| **Priority** | P0 — Must Have |
| **Description** | Monetize through tiered subscription plans |
| **Plans** | **Free Tier:** 3 coloring pages, basic tools, no save/export<br>**TechToons Plus ($4.99/mo):** All pages, all tools, cloud save, PNG export, no ads<br>**TechToons Classroom ($9.99/mo):** Plus features + class management, up to 30 students, progress reports |
| **Requirements** | - Stripe integration for payments<br>- Apple/Google in-app purchase for mobile<br>- 7-day free trial for Plus<br>- Annual discount (2 months free) |
| **Acceptance Criteria** | User can subscribe, access gated content, and manage subscription |

---

### 5.2 Phase 2 — Engagement & Learning (Months 4–6)
*Goal: Increase retention and add educational value*

#### FR-5: Learning Sidebars ("Did You Know?")
| Field | Detail |
|---|---|
| **Priority** | P1 — Should Have |
| **Description** | Each coloring page includes age-appropriate tech facts and mini-lessons |
| **Requirements** | - Collapsible sidebar with 3–5 facts per page<br>- Read-aloud audio for younger children<br>- "Quiz Me" button with simple multiple-choice<br>- Facts reviewed by education advisor |
| **Acceptance Criteria** | Sidebar appears on coloring page; read-aloud plays; quiz scores display |

#### FR-6: Achievements & Rewards System
| Field | Detail |
|---|---|
| **Priority** | P1 — Should Have |
| **Description** | Gamified reward system to encourage exploration and completion |
| **Requirements** | - Badges: "First Robot!", "Color Explorer" (5 pages), "Tech Master" (all pages)<br>- Streak tracking (consecutive days)<br>- Virtual sticker rewards collected in a sticker book<br>- Celebratory animations on milestone completion |
| **Acceptance Criteria** | Badges appear in profile; streak counter visible; stickers collectible |

#### FR-7: Parent Dashboard
| Field | Detail |
|---|---|
| **Priority** | P1 — Should Have |
| **Description** | Parents can monitor child engagement and learning progress |
| **Requirements** | - Time spent per session and per page<br>- Pages completed and collections progress<br>- Quiz scores and facts learned<br>- Weekly email summary (opt-in)<br>- Screen time limits (optional) |
| **Acceptance Criteria** | Dashboard displays charts and stats; email summary sends on schedule |

#### FR-8: Sharing & Social Gallery
| Field | Detail |
|---|---|
| **Priority** | P2 — Nice to Have |
| **Description** | Kids can share completed artwork in a moderated community gallery |
| **Requirements** | - "Share to Gallery" button on completed works<br>- Moderated (AI + human review) before publishing<br>- Kids can "star" others' artwork (no comments for safety)<br>- Share link to family via email/message<br>- No personally identifiable info displayed |
| **Acceptance Criteria** | Artwork appears in gallery after moderation; star counts visible |

---

### 5.3 Phase 3 — Scale & Platform (Months 7–12)
*Goal: Expand platform reach and revenue channels*

#### FR-9: Mobile Apps (iOS & Android)
| Field | Detail |
|---|---|
| **Priority** | P1 — Should Have |
| **Description** | Native mobile apps wrapping the web experience with touch-optimized controls |
| **Requirements** | - React Native or Capacitor wrapper<br>- Touch gestures: tap-to-fill, pinch-to-zoom, swipe navigation<br>- Offline mode with local storage<br>- Push notifications for streaks and new content<br>- In-app purchases for subscriptions |
| **Acceptance Criteria** | App published on App Store and Google Play; feature parity with web |

#### FR-10: Educator / Classroom Tools
| Field | Detail |
|---|---|
| **Priority** | P1 — Should Have |
| **Description** | Tools for teachers to use TechToons in classroom settings |
| **Requirements** | - Class creation with join codes<br>- Assign specific pages as "homework"<br>- View class-wide progress and individual reports<br>- Curriculum alignment tags (Next Gen Science Standards)<br>- Bulk student account creation via CSV |
| **Acceptance Criteria** | Teacher creates class, assigns page, views class progress report |

#### FR-11: Printable Worksheets
| Field | Detail |
|---|---|
| **Priority** | P2 — Nice to Have |
| **Description** | Generate print-ready PDF worksheets from any coloring page |
| **Requirements** | - "Print" button exports SVG as black-and-white PDF<br>- Includes page title and fun facts on the worksheet<br>- A4 and Letter size options<br>- Premium feature (Plus subscribers) |
| **Acceptance Criteria** | PDF downloads with clean line art and facts |

#### FR-12: API & Partner Integrations
| Field | Detail |
|---|---|
| **Priority** | P2 — Nice to Have |
| **Description** | Open API for embedding TechToons in partner platforms |
| **Requirements** | - Embeddable widget (iframe) for partner sites<br>- API key authentication<br>- Custom branding options for partners<br>- Revenue share tracking |
| **Acceptance Criteria** | Partner embeds widget; usage tracked in admin panel |

---

## 6. Non-Functional Requirements

| Requirement | Specification |
|---|---|
| **Performance** | First Contentful Paint < 1.5s; SVG coloring interaction < 50ms response |
| **Accessibility** | WCAG 2.1 AA compliance; keyboard navigation; screen reader support for UI controls |
| **Security** | COPPA compliance; encrypted data at rest and in transit; SOC 2 Type II (by Month 12) |
| **Privacy** | No third-party tracking for child accounts; GDPR data deletion on request |
| **Scalability** | Support 100K concurrent users; CDN-served static assets |
| **Browser Support** | Chrome 90+, Safari 15+, Firefox 100+, Edge 90+ |
| **Uptime** | 99.9% availability SLA |
| **Internationalization** | i18n framework in place; launch with English, Spanish, French |

---

## 7. Technical Architecture (Proposed)

```
┌────────────────────────────────────────────────────┐
│                    Client (Web/Mobile)              │
│  React 19 + TypeScript + Vite                      │
│  ┌──────────┐ ┌──────────┐ ┌──────────────────┐   │
│  │ Coloring │ │ Auth     │ │ Parent Dashboard │   │
│  │ Engine   │ │ Flows    │ │ + Analytics      │   │
│  └──────────┘ └──────────┘ └──────────────────┘   │
└──────────────────┬─────────────────────────────────┘
                   │ HTTPS / REST + WebSocket
┌──────────────────▼─────────────────────────────────┐
│                   API Layer                         │
│  Node.js + Express (or Next.js API Routes)         │
│  ┌──────────┐ ┌──────────┐ ┌──────────────────┐   │
│  │ Auth     │ │ Content  │ │ Subscription     │   │
│  │ Service  │ │ Service  │ │ Service (Stripe) │   │
│  └──────────┘ └──────────┘ └──────────────────┘   │
└──────────────────┬─────────────────────────────────┘
                   │
┌──────────────────▼─────────────────────────────────┐
│                 Data Layer                          │
│  ┌──────────┐ ┌──────────┐ ┌──────────────────┐   │
│  │ PostgreSQL│ │ Redis    │ │ S3 / Cloudflare  │   │
│  │ (Users,  │ │ (Cache,  │ │ R2 (Exported     │   │
│  │  Progress)│ │  Sessions)│ │  Artwork)        │   │
│  └──────────┘ └──────────┘ └──────────────────┘   │
└────────────────────────────────────────────────────┘
```

---

## 8. Monetization Strategy

### Revenue Streams

| Stream | Model | Projected Year 1 |
|---|---|---|
| **TechToons Plus** | $4.99/mo per family | $120,000 |
| **TechToons Classroom** | $9.99/mo per educator | $60,000 |
| **Printable Worksheets** | Included in Plus | — (retention driver) |
| **Partner Embeds** | Rev-share per active user | $15,000 |
| **Branded Content Packs** | Sponsored collections (e.g., NASA, Google) | $30,000 |
| | **Projected Total** | **$225,000** |

### Pricing Justification
- Competitors (Toca Boca, Sago Mini) charge $3.99–$7.99/mo
- TechToons differentiates on the STEM angle and learning features
- Classroom pricing is well below competitors like ABCmouse ($12.99/mo)

---

## 9. Competitive Analysis

| Feature | TechToons | Toca Boca | Sago Mini | ABCmouse |
|---|---|---|---|---|
| **Tech/STEM Theme** | ✅ Unique | ❌ | ❌ | Partial |
| **Coloring + Learning** | ✅ | ❌ | ❌ | ✅ |
| **Web-Based (No Install)** | ✅ | ❌ | ❌ | ✅ |
| **Classroom Tools** | ✅ | ❌ | ❌ | ✅ |
| **Price** | $4.99/mo | $4.99/mo | $3.99/mo | $12.99/mo |
| **Target Age** | 4–10 | 3–9 | 2–5 | 2–8 |
| **Export Artwork** | ✅ | ❌ | ❌ | ❌ |
| **Parent Dashboard** | ✅ | ❌ | ❌ | ✅ |

**Competitive Moat:** TechToons is the only product that combines creative coloring with tech-specific STEM learning for the 4–10 age group, available both on the web and as a native app.

---

## 10. Go-To-Market Strategy

### Launch Plan

| Phase | Timeline | Activities |
|---|---|---|
| **Soft Launch** | Month 3 | Launch web app with free tier; onboard 20 beta parents |
| **Content Marketing** | Month 3–4 | Blog posts: "Why STEM Starts with Crayons"; social media |
| **Product Hunt Launch** | Month 4 | Product Hunt + Hacker News debut |
| **Education Outreach** | Month 5–6 | Partner with 10 schools for pilot; submit to Common Sense Media |
| **Mobile Launch** | Month 8 | iOS + Android app store submissions |
| **Scale** | Month 9–12 | Paid acquisition (Facebook/Instagram parents); YouTube Kids ads |

### Distribution Channels

1. **Organic Search** — SEO for "kids coloring app", "STEM activities for kids"
2. **Social Media** — Instagram/TikTok content showing kids coloring tech illustrations
3. **Education Networks** — Teachers Pay Teachers, Common Sense Media, school newsletters
4. **App Stores** — iOS App Store (Kids category), Google Play (Family)
5. **Partnerships** — STEM organizations, children's museums, libraries

---

## 11. User Stories

### Parent User Stories
| ID | Story | Priority |
|---|---|---|
| US-1 | As a parent, I want to create an account so my child's progress is saved | P0 |
| US-2 | As a parent, I want to set up child profiles so each kid has their own space | P0 |
| US-3 | As a parent, I want to view a dashboard so I can see what my child has been doing | P1 |
| US-4 | As a parent, I want to subscribe to unlock all content for my family | P0 |
| US-5 | As a parent, I want to set screen time limits so my child doesn't overuse the app | P2 |

### Child User Stories
| ID | Story | Priority |
|---|---|---|
| US-6 | As a child, I want to pick a coloring page from a gallery so I can choose what to color | P0 |
| US-7 | As a child, I want to tap regions to fill them with color so I can create art | P0 |
| US-8 | As a child, I want to earn badges when I finish pages so I feel accomplished | P1 |
| US-9 | As a child, I want to read fun facts about the tech I'm coloring so I can learn | P1 |
| US-10 | As a child, I want to share my artwork with family so they can see what I made | P2 |

### Educator User Stories
| ID | Story | Priority |
|---|---|---|
| US-11 | As a teacher, I want to create a class so my students can use TechToons together | P1 |
| US-12 | As a teacher, I want to assign specific pages so coloring aligns with my lesson plan | P1 |
| US-13 | As a teacher, I want to view class progress so I can track student engagement | P1 |
| US-14 | As a teacher, I want to print worksheets so students without devices can participate | P2 |

---

## 12. Risks & Mitigations

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| **COPPA compliance failure** | Medium | Critical | Engage specialized legal counsel; use COPPA-certified vendor (e.g., SuperAwesome) |
| **Low conversion rate** | Medium | High | Strong free tier that hooks users; A/B test paywall placement |
| **Content creation bottleneck** | Medium | Medium | Create SVG illustration pipeline; hire freelance illustrators |
| **App Store rejection** | Low | High | Follow Apple/Google Kids category guidelines from day 1 |
| **Competitor copies STEM angle** | Medium | Medium | First-mover advantage; build brand loyalty; protect through quality |
| **Teacher adoption is slow** | Medium | Medium | Offer free Classroom tier for first 100 schools; attend EdTech conferences |

---

## 13. Roadmap Summary

```
Month 1–3  ▓▓▓▓▓▓▓░░░░░  Phase 1: Foundation
  ├─ User accounts & auth
  ├─ Cloud save
  ├─ Expand to 20+ pages
  └─ Freemium + Stripe

Month 4–6  ░░░░▓▓▓▓▓░░░  Phase 2: Engagement
  ├─ Learning sidebars
  ├─ Achievements & badges
  ├─ Parent dashboard
  └─ Community gallery

Month 7–12 ░░░░░░░▓▓▓▓▓  Phase 3: Scale
  ├─ iOS & Android apps
  ├─ Classroom tools
  ├─ Printable worksheets
  └─ Partner API
```

---

## 14. Appendix

### A. Glossary
| Term | Definition |
|---|---|
| **Region** | An individual SVG path element that can be filled with color |
| **Collection** | A themed group of 5 coloring pages |
| **Streak** | Consecutive days a child uses the app |
| **COPPA** | Children's Online Privacy Protection Act (U.S. federal law) |

### B. Open Questions
1. Should we support real-time collaborative coloring (e.g., two kids working on the same page)?
2. What age verification method is sufficient for COPPA compliance?
3. Should we pursue Apple's Kids category (stricter rules) or standard App Store listing?
4. Do we want a freemium model or a one-time purchase for the mobile app?

---

*This document is a living artifact. It will be updated as business requirements evolve and user feedback is gathered.*
