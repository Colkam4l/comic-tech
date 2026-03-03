# TechToons — Product Requirements Document (PRD)

**Product Name:** TechToons  
**Version:** 1.1  
**Date:** February 23, 2026  
**Author:** Product Team  
**Status:** Updated — reflects v0.2 implementation  
**Launch Market:** Kenya (East Africa)  

---

## 1. Executive Summary

TechToons is an interactive, browser-based coloring platform for **all ages** — from young children discovering technology to teenagers and adults who simply love to create. Users color beautiful illustrations across multiple themed categories — Technology, Food, Architecture, Nature, Fashion, Wildlife, and more — using intuitive digital tools. The platform is educational by design but fun for everyone.

**Launch Market:** Kenya is chosen as the initial market due to its rapidly growing EdTech sector, high mobile internet penetration (~90% of internet access via mobile), a young population (over 40% under age 15), and the Kenyan government's emphasis on digital literacy through the CBC (Competency-Based Curriculum) framework. Content, pricing, and payment methods are localized for the Kenyan context from day one.

**Business Goal:** Build a Pinterest-style creative coloring platform that is loved by kids, teenagers, and adults alike — organized by content categories, driven by community, and monetized through an affordable freemium model priced for the Kenyan market, before expanding across East Africa and globally.

---

## 2. Problem Statement

### The Gap
Kenyan parents and educators seek engaging, screen-based activities that are both creative and educational. With the rollout of Kenya's CBC curriculum emphasizing digital literacy and creative skills, the demand for locally relevant EdTech tools is surging:

| Pain Point | Kenya Context | TechToons Opportunity |
|---|---|---|
| **Screen guilt** | Parents worry about passive screen time on phones | Active creation builds productive screen habits |
| **STEM exposure gap** | CBC mandates digital literacy, but few engaging tools exist | Introduces tech concepts at age 4–10 through play |
| **Costly alternatives** | Global apps (Toca Boca, ABCmouse) are priced for Western markets | Affordable pricing in KES via M-Pesa |
| **Generic content** | Most coloring apps use Western-centric themes | Tech-themed illustrations with future local content |
| **No progress tracking** | Parents and teachers can't see engagement data | Dashboard shows time, pages, and skills |
| **Connectivity gaps** | Many areas have intermittent internet | Lightweight SVGs work on low-bandwidth connections |

### Target Users

| Persona | Description | Needs |
|---|---|---|
| **Young Children (4–10)** | Kenyan primary school children (Grade 1–5) | Fun, intuitive, rewarding experience on any device |
| **Teens (11–17)** | Secondary school students and creatively driven older kids | More complex illustrations, social features, expressive freedom |
| **General Users (18+)** | Adults who enjoy coloring, mindfulness art, or creative expression | Wide content categories, clean UI, relaxing experience |
| **Parents** | Urban & peri-urban Kenyan parents with smartphones | Affordable, educational, ad-free, M-Pesa payment, child safety |
| **Educators** | CBC teachers in Kenyan primary schools | CBC-aligned activities, class management, works on school devices |

---

## 3. Product Vision & Success Metrics

### Vision Statement
> *"Be the world's most joyful creative coloring platform — where children discover technology, teens express themselves, and adults find calm."*

### Platform Direction
TechToons is evolving from a kids' tech coloring book into a **Pinterest-style creative hub** organized around content categories. Think of it as a coloring-first creative platform where:
- **Content is organized by category** — Technology, Food, Architecture, Nature, Fashion, Wildlife, Travel, Patterns, and more
- **Users choose their profile type** — Child, Teen, Adult/General, or Parent — which personalizes the content, difficulty, and UI they see
- **Community drives discovery** — users browse, save, and share colored works within a moderated gallery
- **AI enhances the experience** — smart feedback, scoring, and personalized recommendations

### Key Results (12-month targets)

| Metric | Target | Measurement |
|---|---|---|
| Monthly Active Users (MAU) | 30,000 (Kenya) | Analytics |
| Free → Paid Conversion | 4% | Subscription data |
| Monthly Recurring Revenue (MRR) | KES 600,000 (~$4,600) | M-Pesa / Stripe dashboard |
| Average Session Duration | 8+ minutes | Analytics |
| Google Play Rating | 4.5+ stars | Play Store reviews |
| Kenyan Schools Onboarded | 200 | Admin dashboard |
| Pages Colored (total) | 500,000 | Event tracking |

---

## 4. Current Product Capabilities (v0.2 — Enhanced Prototype)

The current build demonstrates core viability plus kid-friendly UX:

### Core Features
- ✅ 6 tech-themed SVG coloring pages (Robot, Circuit Board, AI Brain, Rocket, Drone, VR Headset)
- ✅ Click-to-fill region painting with inline SVGs
- ✅ 16-color curated palette + full-spectrum custom picker
- ✅ 4 brush tools: Paint Bucket (fill), Freehand Brush (draw with finger/stylus), Eraser, Rainbow (random)
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
- ✅ **Color Name Labels** — Selected color displays its name ("Red", "Teal", "Violet", etc.) next to the color preview for learning

### Tech Stack
- React 19 + TypeScript
- Vite 7 (dev server & bundler)
- react-colorful (color picker)
- react-router-dom v7 (client-side routing)

---

## 5. Feature Requirements

### 5.1 Phase 1 — Foundation (Months 1–3)
*Goal: Transform prototype into a fully launchable, intuitive product for all ages*

> **Month 1 Priority: Interface Intuitiveness.** Before anything else, the interface will be redesigned to be immediately understandable to any user — a 5-year-old child OR a 40-year-old adult. This includes: onboarding flow, profile setup, cleaner navigation, improved toolbar affordances for touch, and responsive layout improvements.

#### FR-1: User Accounts & Authentication
| Field | Detail |
|---|---|
| **Priority** | P0 — Must Have |
| **Description** | Parents create accounts; children have sub-profiles under a parent account |
| **Requirements** | - Email/password + Google OAuth sign-up<br>- Phone number sign-up (common in Kenya)<br>- Up to 4 child profiles per parent account<br>- Each child profile has name, avatar, age<br>- Child profiles have independent saved progress<br>- Kenya Data Protection Act (DPA 2019) compliant data collection |
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
| **Description** | Monetize through tiered subscription plans priced for the Kenyan market |
| **Plans** | **Free Tier:** 3 coloring pages, basic tools, no save/export<br>**TechToons Plus (KES 250/mo ~ $1.99):** All pages, all tools, cloud save, PNG export, no ads<br>**TechToons Classroom (KES 500/mo ~ $3.99):** Plus features + class management, up to 30 students, progress reports |
| **Requirements** | - **M-Pesa integration** via Daraja API (primary payment in Kenya)<br>- Stripe for card payments<br>- Google Play in-app purchase for mobile<br>- 7-day free trial for Plus<br>- Annual discount (2 months free) |
| **Acceptance Criteria** | User can subscribe via M-Pesa or card, access gated content, and manage subscription |

#### FR-5: User Profile Types
| Field | Detail |
|---|---|
| **Priority** | P0 — Must Have |
| **Description** | Users choose a profile type at sign-up which personalizes their entire experience — content recommendations, UI complexity, difficulty levels, and messaging |
| **Profile Types** | **Child (4–10):** Big buttons, friendly language, curated safe content, parental controls active<br>**Teen (11–17):** Full tools, social features, more complex illustrations, expressive themes<br>**Adult/General (18+):** Clean minimal UI, wide content library, mindfulness/relaxation mode, all categories accessible<br>**Parent:** Can manage child profiles, view dashboards, set limits, and access their own coloring too<br>**Educator:** Classroom tools, CBC alignment, class management, bulk accounts |
| **Requirements** | - Profile type selected during onboarding with friendly visual picker<br>- Can be changed later in settings<br>- Profile type adjusts: home page layout, recommended categories, illustration difficulty, and language tone<br>- Parent profile can create and manage up to 4 child/teen sub-profiles |
| **Acceptance Criteria** | Selecting "Child" shows kid-friendly UI with large controls; selecting "Adult" shows clean minimal layout with all categories visible |

#### FR-6: Pinterest-Style Content Categories
| Field | Detail |
|---|---|
| **Priority** | P0 — Must Have |
| **Description** | The home page is organized as a Pinterest-style browsable grid of content categories — users explore by theme rather than scrolling a flat list |
| **Categories (Launch)** | 🖥️ **Technology** — Robots, circuits, AI, VR, rockets, drones (existing content)<br>🍕 **Food & Drinks** — Fruits, meals, street food, Kenyan cuisines<br>🏠 **Architecture & Housing** — Buildings, tiny homes, futuristic cities<br>🌿 **Nature & Wildlife** — Animals, forests, Kenyan wildlife (lions, elephants, flamingos)<br>👗 **Fashion & Style** — Clothing, accessories, African prints<br>🎨 **Abstract & Patterns** — Geometric patterns, mandalas, Batik designs<br>✈️ **Travel & Adventure** — Landmarks, maps, Kenyan landscapes<br>💪 **Sports & Fitness** — Football, athletics, olympics |
| **Requirements** | - Home page shows category cards with thumbnail previews<br>- Users can "follow" categories to personalize their feed<br>- Each category has a dedicated page with all illustrations in that theme<br>- Search within categories by name or tag<br>- Free users see all category previews but 3-page coloring limit still applies<br>- New categories added quarterly based on user demand data |
| **Acceptance Criteria** | Home page shows category grid; clicking "Food" shows food illustrations; search finds pages by name |

---

### 5.2 Phase 2 — Engagement & Learning (Months 4–6)
*Goal: Increase retention, add educational value, and integrate AI*

#### FR-7: AI Integration — Smart Feedback, Scoring & Recommendations
| Field | Detail |
|---|---|
| **Priority** | P1 — Should Have |
| **Description** | AI-powered system that enhances the coloring experience with intelligent feedback, personalized scoring, and content recommendations |
| **Sub-features** | **Boundary Guidance (FR-9):** Real-time detection when brush strokes go outside region lines — friendly toast alert "Oops! Try coloring inside the lines 🎯"<br>**AI Scoring (FR-10):** Stars out of 5 based on coverage, neatness, creativity, and completeness. "Amazing Artist!", "Color Explorer!" etc.<br>**Encouragement Prompts:** Age-appropriate suggestions like "The rocket's nose cone is still white — try coloring it!"<br>**Category Recommendations:** AI recommends next pages to color based on what user has colored and enjoyed<br>**Style Suggestions:** For teens and adults — "Try a warm palette for this food illustration!" |
| **Requirements** | - Scoring runs locally (client-side canvas analysis) for speed and privacy<br>- Recommendations powered by Supabase Edge Functions + lightweight ML model<br>- All feedback is positive — no "wrong" or "bad" language<br>- CBC competency level mapping for educator reports<br>- Celebration animations (confetti) on high scores |
| **Acceptance Criteria** | Complete a page → AI score and feedback appear within 2 seconds; recommendations show next suggested page |

#### FR-8: Learning Sidebars ("Did You Know?")

| Field | Detail |
|---|---|
| **Priority** | P1 — Should Have |
| **Description** | Each coloring page includes age-appropriate tech facts and mini-lessons |
| **Requirements** | - Collapsible sidebar with 3–5 facts per page<br>- Read-aloud audio for younger children<br>- "Quiz Me" button with simple multiple-choice<br>- Facts reviewed by education advisor |
| **Acceptance Criteria** | Sidebar appears on coloring page; read-aloud plays; quiz scores display |

#### FR-9: Achievements & Rewards System
| Field | Detail |
|---|---|
| **Priority** | P1 — Should Have |
| **Description** | Gamified reward system to encourage exploration and completion |
| **Requirements** | - Badges: "First Robot!", "Color Explorer" (5 pages), "Tech Master" (all pages)<br>- Streak tracking (consecutive days)<br>- Virtual sticker rewards collected in a sticker book<br>- Celebratory animations on milestone completion |
| **Acceptance Criteria** | Badges appear in profile; streak counter visible; stickers collectible |

#### FR-10: Parent Dashboard
| Field | Detail |
|---|---|
| **Priority** | P1 — Should Have |
| **Description** | Parents can monitor child engagement and learning progress |
| **Requirements** | - Time spent per session and per page<br>- Pages completed and collections progress<br>- Quiz scores and facts learned<br>- Weekly email summary (opt-in)<br>- Screen time limits (optional) |
| **Acceptance Criteria** | Dashboard displays charts and stats; email summary sends on schedule |

#### FR-11: Sharing & Social Gallery
| Field | Detail |
|---|---|
| **Priority** | P2 — Nice to Have |
| **Description** | Users share completed artwork in a moderated community gallery — available to all ages with age-appropriate moderation |
| **Requirements** | - "Share to Gallery" button on completed works<br>- Moderated (AI + human review) before publishing<br>- "Star" reactions (no comments for child safety)<br>- Share link to family via email/WhatsApp<br>- No personally identifiable info displayed<br>- Teen/Adult gallery tab separate from Kids gallery |
| **Acceptance Criteria** | Artwork appears in gallery after moderation; star counts visible |

---


### 5.3 Phase 3 — Scale & Platform (Months 7–12)
*Goal: Expand platform reach and revenue channels*

#### FR-11: Mobile Apps (iOS & Android)
| Field | Detail |
|---|---|
| **Priority** | P1 — Should Have |
| **Description** | Native mobile apps wrapping the web experience with touch-optimized controls |
| **Requirements** | - React Native or Capacitor wrapper<br>- Touch gestures: tap-to-fill, pinch-to-zoom, swipe navigation<br>- Offline mode with local storage<br>- Push notifications for streaks and new content<br>- In-app purchases for subscriptions |
| **Acceptance Criteria** | App published on App Store and Google Play; feature parity with web |

#### FR-12: Educator / Classroom Tools
| Field | Detail |
|---|---|
| **Priority** | P1 — Should Have |
| **Description** | Tools for teachers to use TechToons in classroom settings |
| **Requirements** | - Class creation with join codes<br>- Assign specific pages as "homework"<br>- View class-wide progress and individual reports<br>- Curriculum alignment tags (Kenya CBC — Digital Literacy strand)<br>- Bulk student account creation via CSV |
| **Acceptance Criteria** | Teacher creates class, assigns page, views class progress report |

#### FR-13: Printable Worksheets
| Field | Detail |
|---|---|
| **Priority** | P2 — Nice to Have |
| **Description** | Generate print-ready PDF worksheets from any coloring page |
| **Requirements** | - "Print" button exports SVG as black-and-white PDF<br>- Includes page title and fun facts on the worksheet<br>- A4 and Letter size options<br>- Premium feature (Plus subscribers) |
| **Acceptance Criteria** | PDF downloads with clean line art and facts |

#### FR-14: API & Partner Integrations
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
| **Performance** | First Contentful Paint < 1.5s on 3G; SVG coloring interaction < 50ms; optimized for low-bandwidth Kenyan connections |
| **Accessibility** | WCAG 2.1 AA compliance; keyboard navigation; screen reader support for UI controls |
| **Security** | Kenya Data Protection Act (DPA 2019) compliance; encrypted data at rest and in transit |
| **Privacy** | No third-party tracking for child accounts; GDPR/DPA data deletion on request |
| **Scalability** | Support 50K concurrent users; CDN-served static assets (Cloudflare with Nairobi PoP) |
| **Browser Support** | Chrome 90+ (dominant in Kenya), Samsung Internet, Firefox 100+, Edge 90+ |
| **Uptime** | 99.9% availability SLA |
| **Internationalization** | i18n framework in place; launch with English, then Swahili; future: French (for East Africa expansion) |

---

## 7. Technical Architecture (Proposed)

> **Why Supabase?** Supabase provides an all-in-one backend (PostgreSQL database, authentication, file storage, edge functions) with a generous free tier (50K MAU, 500MB DB, 1GB storage). This drastically reduces backend complexity and cost — ideal for a Kenya-first MVP where every KES counts. For scale, Supabase Pro ($25/mo) handles the first 100K+ MAU before custom infrastructure is needed.

```
┌────────────────────────────────────────────────────┐
│                    Client (Web/Android)             │
│  React 19 + TypeScript + Vite                      │
│  ┌──────────┐ ┌──────────┐ ┌──────────────────┐   │
│  │ Coloring │ │ Auth     │ │ Parent Dashboard │   │
│  │ Engine   │ │ (Phone#) │ │ + Analytics      │   │
│  └──────────┘ └──────────┘ └──────────────────┘   │
└──────────────────┬─────────────────────────────────┘
                   │ HTTPS / REST + Realtime
┌──────────────────▼─────────────────────────────────┐
│               Supabase (Backend-as-a-Service)       │
│  ┌──────────┐ ┌──────────┐ ┌──────────────────┐   │
│  │ Auth     │ │ Database │ │ Storage          │   │
│  │ (Email,  │ │(PostgreSQL│ │ (Exported        │   │
│  │  Phone,  │ │  Users,  │ │  Artwork, SVGs)  │   │
│  │  Google) │ │ Progress)│ │                  │   │
│  └──────────┘ └──────────┘ └──────────────────┘   │
│  ┌──────────┐ ┌──────────┐                        │
│  │ Edge     │ │ Realtime │                        │
│  │ Functions│ │ (Sync)   │                        │
│  └──────────┘ └──────────┘                        │
└──────────────────┬─────────────────────────────────┘
                   │
┌──────────────────▼─────────────────────────────────┐
│               External Services                    │
│  ┌──────────────────┐ ┌──────────────────────────┐ │
│  │ M-Pesa (Daraja)  │ │ Cloudflare CDN           │ │
│  │ + Stripe Cards   │ │ (Nairobi PoP)            │ │
│  └──────────────────┘ └──────────────────────────┘ │
└────────────────────────────────────────────────────┘
```

---

## 8. Monetization Strategy

### Revenue Streams

| Stream | Model | Projected Year 1 |
|---|---|---|
| **TechToons Plus** | KES 250/mo (~$1.99) per family | KES 3.6M (~$28,000) |
| **TechToons Classroom** | KES 500/mo (~$3.99) per school | KES 1.2M (~$9,500) |
| **Printable Worksheets** | Included in Plus | — (retention driver) |
| **NGO/Govt Partnerships** | Sponsored deployments (e.g., Safaricom Foundation, KICD) | KES 1.5M (~$11,500) |
| **Branded Content Packs** | Sponsored collections (e.g., Safaricom, M-Pesa, Konza Technopolis) | KES 1M (~$7,700) |
| | **Projected Total** | **KES 7.3M (~$56,700)** |

### Pricing Justification
- Priced for Kenyan families: KES 250/mo is below the cost of a single meal at KFC (KES ~600)
- Global competitors (Toca Boca at KES 650/mo, ABCmouse at KES 1,700/mo) are unaffordable for most Kenyan families
- **M-Pesa** is the primary payment method — frictionless for 90%+ of Kenyan adults
- Classroom pricing allows schools to fund from per-learner capitation grants (KES 1,420/pupil/yr)

### Cost Structure
> **Note:** Detailed pricing and cost breakdown will be costed in collaboration with our software development partner. Key cost categories include: engineering, content creation, infrastructure, marketing, legal/compliance, and payment processing fees.

---

## 9. Competitive Analysis

| Feature | TechToons | Toca Boca | Kytabu | Eneza Education | eLimu |
|---|---|---|---|---|---|
| **Tech/STEM Theme** | ✅ Unique | ❌ | ❌ | Partial | Partial |
| **Coloring + Learning** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Web-Based (No Install)** | ✅ | ❌ | ✅ | ✅ (USSD+Web) | ✅ |
| **CBC Alignment** | ✅ | ❌ | ✅ | ✅ | ✅ |
| **M-Pesa Payment** | ✅ | ❌ | ✅ | ✅ | ✅ |
| **Price (KES/mo)** | KES 250 | KES 650 | KES 200 | KES 10/day | KES 300 |
| **Target Age** | 4–10 | 3–9 | 6–18 | 6–18 | 3–12 |
| **Export Artwork** | ✅ | ❌ | ❌ | ❌ | ❌ |

**Competitive Moat:** TechToons is the only Kenyan product combining creative coloring with tech-specific STEM learning. Local competitors (Kytabu, Eneza, eLimu) focus on text-based subject tutoring — none offer a creative, interactive art experience. Global competitors (Toca Boca) are priced out of the Kenyan market and lack CBC alignment.

---

## 10. Go-To-Market Strategy

### Launch Plan (Kenya-First)

| Phase | Timeline | Activities |
|---|---|---|
| **Soft Launch (Nairobi)** | Month 3 | Launch web app with free tier; onboard 20 beta parents in Nairobi |
| **School Pilots** | Month 3–4 | Partner with 5 Nairobi primary schools; align with CBC Digital Literacy strand |
| **Social Media Push** | Month 4–5 | TikTok/Instagram Reels in Kenya; WhatsApp group outreach to parent communities |
| **M-Pesa Integration** | Month 5 | Enable M-Pesa payments for Plus subscriptions |
| **Education Outreach** | Month 5–6 | Present at KICD curriculum workshops; partner with Kenya Education Network (KENET) |
| **Google Play Launch** | Month 7 | Android app (most Kenyan devices); Google Play Family category |
| **County Expansion** | Month 8–10 | Expand to Mombasa, Kisumu, Nakuru, Eldoret |
| **East Africa Scale** | Month 11–12 | Launch in Uganda, Tanzania, Rwanda |

### Distribution Channels

1. **Google Play Store** — Android dominates Kenya (95%+ mobile market share); Family category
2. **WhatsApp & Social Media** — WhatsApp groups are the primary parent community channel in Kenya; TikTok/Instagram for awareness
3. **School Partnerships** — Direct outreach to CBC-implementing schools; training for Digital Literacy teachers
4. **Safaricom/M-Pesa Ecosystem** — Explore M-Pesa Mini-Apps and Safaricom app store placement
5. **Education Organizations** — Kenya Institute of Curriculum Development (KICD), KENET, UNESCO Nairobi
6. **Organic Search** — SEO for "CBC digital literacy games Kenya", "kids STEM activities Nairobi"

---

## 11. Risks & Mitigations

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| **Kenya DPA 2019 compliance** | Medium | Critical | Engage Kenyan legal counsel; data stored in Africa-region servers |
| **Low conversion / willingness to pay** | High | High | Strong free tier; KES 250 pricing validated against ARPU benchmarks; M-Pesa removes friction |
| **Internet connectivity gaps** | Medium | Medium | Lightweight SVGs (~7KB each); service worker caching for offline use |
| **Content creation bottleneck** | Medium | Medium | SVG illustration pipeline; hire Kenyan freelance illustrators via platforms like Brighter Monday |
| **Device fragmentation** | Medium | Medium | Test on low-end Android devices common in Kenya (Tecno, Infinix, Samsung A-series) |
| **School IT infrastructure** | Medium | Medium | Web-based (no install needed); works on Chromebooks and shared school tablets |
| **Competitor copies STEM angle** | Low | Medium | First-mover advantage in Kenya's creative EdTech space |

---

## 12. Roadmap Summary

```
Month 1–3  ▓▓▓▓▓▓▓░░░░░  Phase 1: Foundation
  ├─ Month 1: Interface intuitiveness & profile onboarding
  ├─ User accounts & auth (all profile types)
  ├─ Pinterest-style category home page
  ├─ Content library expansion (20+ pages, 8 categories)
  ├─ Cloud save & progress persistence
  └─ Freemium + M-Pesa + Stripe

Month 4–6  ░░░░▓▓▓▓▓░░░  Phase 2: Engagement & AI
  ├─ AI integration (scoring, boundary guidance, recommendations)
  ├─ Learning sidebars & "Did You Know?" facts
  ├─ Achievements & badges
  ├─ Parent dashboard
  └─ Social gallery (all ages, age-separated)

Month 7–12 ░░░░░░░▓▓▓▓▓  Phase 3: Scale
  ├─ iOS & Android apps
  ├─ Classroom tools
  ├─ Printable worksheets
  └─ Partner API
```

---

## 13. Appendix

### A. Glossary
| Term | Definition |
|---|---|
| **Region** | An individual SVG path element that can be filled with color |
| **Collection** | A themed group of 5 coloring pages |
| **Streak** | Consecutive days a child uses the app |
| **CBC** | Competency-Based Curriculum — Kenya's national education framework (2017+) |
| **DPA 2019** | Kenya Data Protection Act — governs collection of personal data including children's |
| **M-Pesa** | Mobile money platform by Safaricom, used by 90%+ of Kenyan adults |
| **KICD** | Kenya Institute of Curriculum Development — the body overseeing CBC implementation |
| **KES** | Kenyan Shilling (1 USD ≈ 129 KES as of Feb 2026) |

### B. Open Questions
1. Should we add Swahili translations from launch or wait for user demand data?
2. Can we integrate with the government's Digital Literacy Programme (DLP) devices in schools?
3. Should we partner with Safaricom Foundation for a sponsored free tier in rural schools?
4. What's the optimal M-Pesa payment interval — monthly or weekly (e.g., KES 65/week for lower commitment)?
5. Should we include Kenya-specific illustrations (e.g., matatu, Kenya satellite, M-Pesa phone) in future collections?

---

*This document is a living artifact. It will be updated as business requirements evolve and user feedback is gathered.*
