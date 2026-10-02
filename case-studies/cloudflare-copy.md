# Cloudflare Radar Case Study — Editable Copy

How to use this file:
- Edit the text to the **right of each `:`** (or on the indented lines under a key).
- Do **not** change the `[ID]` labels in brackets — I use those to find each piece in the code.
- Leave the structure/headings as-is. If you want to delete a line, write `DELETE` after it.
- Notes in _(parentheses, italic)_ are context for you — no need to edit them.
- Some text appears in BOTH the TL;DR and Full views; those are marked **[shared]** and I'll sync both copies.

---

## HERO _(shows in both views)_

- **[hero-eyebrow]** Eyebrow above title: `Cloudflare • Summer 2026`
- **[hero-title]** Title: `A Clearer View of the Internet`

Tags:
- **[hero-tag-prelaunch]** Pre-launch tag _(shown now, before Radar ships)_: `Web Design`
- **[hero-tag-live]** Post-launch tag _(shows once RADAR_LIVE = true; links to radar.cloudflare.com)_: `Shipped!`
- **[hero-tag-2]** Tag: `Data Visualization`
- **[hero-tag-3]** Tag: `Design Systems`

- **[hero-description]** Description paragraph:
  The redesigned Cloudflare Radar to make real-time Internet traffic and outage data accessible to a broader audience. To do this, I developed the data visualization approach for the landing page, improved the information architecture, and updated the design language across the platform.

CTA links _(only show once RADAR_LIVE = true)_:
- **[hero-cta-site]** Live site link text: `Check out the live site`
- **[hero-cta-blog]** Blog link text: `Read the blog post`

Metadata grid _(label → value)_:
- **[meta-timeline]** `Timeline` → `July 2026 – Sept 2026`
- **[meta-role]** `Role` → `Product Designer`
- **[meta-team]** `Team` → `Cloudflare Radar`
- **[meta-collaborators]** `Collaborators` → `1 PM, 1 Systems Engineer, 1 Designer (me!)`

---

## TABLE OF CONTENTS (sidebar)

Full view:
- **[toc-overview]** `Background`
- **[toc-problem]** `Problem`
- **[toc-process]** `Process`
  - **[toc-process-design-language]** `Defining a design language`
  - **[toc-process-map]** `Balancing richness & approachability`
  - **[toc-process-reading-order]** `A clear reading order`
  - **[toc-process-ia]** `Restructuring the IA`
- **[toc-solution]** `Solution`
  - **[toc-solution-overview]** `An approachable Radar`
  - **[toc-solution-hero-map]** `Interactive hero map`
  - **[toc-solution-explore]** `Curated data visualizations`
  - **[toc-solution-datasets]** `Migrating data set pages`
- **[toc-impact]** `Impact`
- **[toc-reflections]** `Reflections`

TL;DR view:
- **[toc-tldr-overview]** `Background`
- **[toc-tldr-problem]** `Problem`
- **[toc-tldr-solution]** `Solution`

---

## BACKGROUND _(shared — same text in TL;DR and Full)_

- **[bg-label]** Section label: `Background`
- **[bg-heading]** Heading: `Redesigning Radar for the non-technical audiences, without sacrificing the depth`
- **[bg-para-1]** Paragraph 1:
  Cloudflare Radar is a free, public platform that surfaces real-time data on Internet traffic, security threats, and outages worldwide.
- **[bg-para-2]** Paragraph 2 _(the highlighted-phrase sentence)_:
  The challenge was to redesign Radar's entry point to serve this broader audience making the data more approachable and the page easier to scan without losing the depth and precision that power users depend on.
  - **[bg-highlight-1]** Highlighted phrase: `broader audience`
  - **[bg-highlight-2]** Highlighted phrase: `data more approachable`
  - **[bg-highlight-3]** Highlighted phrase: `without losing the depth and precision`

- **[bg-jump-button]** _(Full view only)_ Jump button text: `Jump to solution`

---

## PROBLEM _(shared)_

- **[prob-label]** Section label: `The Problem`
- **[prob-heading]** Heading: `The existing homepage was overwhelming`
- **[prob-hint-inline]** Hint (desktop): `HOVER CARDS TO EXPLORE`
- **[prob-hint-modal]** Hint (expanded modal): `CLICK CARDS TO EXPLORE`

Problem cards _(title + description)_:
- **[prob-card-1-title]** `Overwhelming, data dense layout`
- **[prob-card-1-desc]** `Complicated charts required a lot of context or expertise to interpret.`
- **[prob-card-2-title]** `No clear path through the content`
- **[prob-card-2-desc]** `The bento-box grid gave every chart equal visual weight, making it difficult to scan and read.`
- **[prob-card-3-title]** `Lacking Cloudflare branding`
- **[prob-card-3-desc]** `Radar's styling didn't align with Cloudflare's broader brand.`
- **[prob-card-4-title]** `Poor information architecture`
- **[prob-card-4-desc]** `Users reported difficulty finding the information they needed.`

---

## PROCESS _(Full view only)_

### Defining a design language

- **[proc-label]** Section label: `The Process`
- **[proc-dl-heading]** Heading: `Defining a Radar's design language.`
- **[proc-dl-para-1]** Paragraph 1 _(bold words: marketing, content, product, "Where does Radar sit?")_:
  To develop Radar's visual direction, I looked across Cloudflare's content ecosystem, which exists in three pillars: marketing, content, and product. But this big question was... Where does Radar sit?
- **[proc-dl-para-2]** Paragraph 2:
  Ultimately, Radar sits at the intersection of all three and the design language and I wanted the design language to reflect that. Radar needs to be approachable like our marketing pages, structured and navigable like content, and maintainable by migrating to components used by the product teams at Cloudflare.

Venn diagram:
- **[venn-hint]** Default hint: `HOVER CIRCLES TO EXPLORE`
- **[venn-radar-eyebrow]** Center label: `The intersection`
- **[venn-radar-body]** Center body: `New Radar combines all three.`
- **[venn-marketing-label]** `Marketing`
- **[venn-marketing-desc]** `Approachable, visual pages like cloudflare.com`
- **[venn-content-label]** `Content`
- **[venn-content-desc]** `Information rich sites like our blog and Dev Docs`
- **[venn-product-label]** `Product`
- **[venn-product-desc]** `Scalable, built with Cloudflare's design system.`

### Balancing richness & approachability

- **[proc-map-heading]** Heading: `Balancing data richness and approachability.`
- **[proc-map-para-1]** Paragraph 1:
  In order to convey Radar's global perspective, I knew that the hero section needed to be a map.
- **[proc-map-para-2]** Paragraph 2:
  The current direction balances early, overly dense iterations with later marketing-heavy visuals that risked making Radar's data feel static.

Map iteration stepper:
- **[map-hint]** Hint: `HOVER OVER TIMELINE TO SEE ITERATIONS`
- **[map-step-1-label]** `Early exploration`
- **[map-step-1-caption]** `Dense data visualization focused created too much information competing for attention.`
- **[map-step-2-label]** `Marketing direction`
- **[map-step-2-caption]** `Cleaner and more approachable, but risked making live data feel static or overly summarized.`
- **[map-step-3-label]** `Current direction`
- **[map-step-3-caption]** `Balances data richness with approachability. Still feels like live data, but easier to read and navigate.`

### A clear reading order

- **[proc-ro-heading]** Heading: `Developing a clear reading order.`
- **[proc-ro-para]** Paragraph:
  With the visual language set, I replaced the overwhelming bento grid with a curated top-to-bottom narrative that moves from global orientation to specific data so the page guides the user through content.

Reading-order list:
- **[ro-hint]** Hint: `HOVER TO VIEW`
- **[ro-item-1-title]** `Interactive map`
- **[ro-item-1-desc]** `A global view of traffic and outages that orients users geographically.`
- **[ro-item-2-title]** `Tabbed data sections`
- **[ro-item-2-desc]** `Organized categories that tease out the content Radar has.`
- **[ro-item-3-title]** `Trends and stories`
- **[ro-item-3-desc]** `Links to the blog and social media connecting data to real-world events.`
- **[ro-item-4-title]** `About Radar`
- **[ro-item-4-desc]** `Context on how Radar works and the global network behind its data.`

### Restructuring the IA

- **[proc-ia-heading]** Heading: `Restructuring platform's information architecture.`
- **[proc-ia-para-1]** Paragraph 1 _(bold: "82% success rate when tested")_:
  As Radar has grown, the architecture of the navigation hasn't kept up. I built a custom app to test user behavior. The resulting content architecture achieved an 82% success rate in user testing (yay!).
- **[proc-ia-para-2]** Paragraph 2:
  While deferred from V0, the navigation updates will launch late in Q4 2026. Stay tuned for a dedicated case study!
- **[proc-ia-caption]** Video caption: `The card sort feature of the user testing app I created`

---

## SOLUTION _(shared intro, then Full-only subsections)_

### Overview _(shared)_

- **[sol-label]** Section label: `The Solution`
- **[sol-overview-heading]** Heading: `A cohesive, approachable Radar.`
- **[sol-overview-body]** Body:
  A guided top-to-bottom reading order replaces the chaotic bento grid, tabbed exploration softens the overwhelming data density, all wrapped in Cloudflare’s design language, the result is an intuitive Radar that maintains its full technical depth.

TL;DR-only (after the overview video):
- **[sol-tldr-prompt]** Prompt: `Want to see more?`
- **[sol-tldr-button]** Button: `Check out the full case study`

Full-only transition:
- **[sol-transition]** Transition line (italic): `But let's break it down...`

### An interactive hero map _(Full only)_

- **[sol-heromap-heading]** Heading: `An interactive map`
- **[sol-heromap-body]** Body:
  The hero leads with outages and traffic, the two signals that matter most to our audience. Together they let anyone grasp what's happening at a glance.

### Data visualizations to explore _(Full only)_

- **[sol-explore-heading]** Heading: `Data visualizations that prompt users to explore`
- **[sol-explore-body]** Body:
  Below the hero, a tabbed "Explore Radar Data" module provides curated data exploration and a clear path to view the full data set.

### Migrating data set pages _(Full only)_

- **[sol-datasets-heading]** Heading: `Migrating data set pages to the new design language.`
- **[sol-datasets-para-1]** Paragraph 1:
  The redesign extended beyond the landing page. Each data set page was updated to use the same visual language, with consistent chart components, clearer labels, and a more approachable layout that scales across Radar's full range of data.
- **[sol-datasets-para-2]** Paragraph 2:
  This design language keeps Radar cohesive with the broader Cloudflare brand while staying flexible for its unique content.

---

## IMPACT _(Full view only)_

- **[impact-label]** Section label: `Impact`
- **[impact-row-1-heading]** Heading: `Approved and shipping`
- **[impact-row-1-body-fixed]** Body (always shown, first sentence): `Presented to and approved by Cloudflare's CTO, Dane Knecht.`
- **[impact-row-1-body-prelaunch]** Body 2nd sentence (shown now, bold: "mid-October"): `The redesigned Radar is scheduled to go live in mid-October.`
- **[impact-row-1-body-live]** Body 2nd sentence (shows once live; links to radar.cloudflare.com): `The updated site is now live!`
- **[impact-row-2-heading]** Heading: `Led end-to-end`
- **[impact-row-2-body]** Body: `I led the redesign from concept through final direction, and continue to support the dev team through implementation.`
- **[impact-row-3-heading]** Heading: `A foundation for the future`
- **[impact-row-3-body]** Body: `A first step toward making real-time insights across security, performance, and traffic accessible to everyone, not just technical experts.`

---

## REFLECTIONS _(Full view only)_

- **[reflect-label]** Section label: `Reflections`
- **[reflect-row-1-heading]** Heading: `Designing for a spectrum of expertise`
- **[reflect-row-1-body]** Body:
  Radar's audience spans every level of Internet expertise, so there was no "average" user to design for. I designed for the least technical users, trusting that meeting the highest needs lifts the experience for everyone, without removing the depth power users rely on.
- **[reflect-row-2-heading]** Heading: `Designing with data literacy`
- **[reflect-row-2-body]** Body:
  Understanding the data, and the limits of each data set, was core to the work. Knowing what a metric represents and where its edges are shaped how I visualized it, keeping the redesign approachable while staying honest about what the data can say.
