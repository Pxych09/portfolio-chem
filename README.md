# Design System Inspired by Chem Portfolio

## 1. Visual Theme & Atmosphere

The Chem Portfolio design system embodies a modern, tech-forward aesthetic with a deep commitment to clarity and professionalism. Built on a sophisticated interplay of rich navy blues and crisp whites, the system conveys trustworthiness and technical expertise while maintaining an approachable, welcoming feel. The design prioritizes content hierarchy and readability through generous whitespace, bold typography, and strategic use of color to guide attention. This system is ideal for portfolio, professional, and technical projects that demand a polished yet contemporary appearance. The dark navy backdrop paired with light accents creates a striking visual contrast that ensures accessibility and visual engagement across all screen sizes.

**Key Characteristics**
- Deep navy and slate foundation with bright blue accents for modern appeal
- Clear typographic hierarchy using Google Sans as primary font
- Generous spacing and whitespace for content breathing room
- Rounded corners on cards and buttons for approachability
- High contrast between text and backgrounds for accessibility
- Tech-forward, professional aesthetic suitable for portfolios and technical projects

## 2. Color Palette & Roles

### Primary
- **Deep Navy** (`#1E3A8A`): Primary brand color used throughout navigation, headers, and key UI elements; establishes visual authority and trust
- **Dark Slate** (`#1E293B`): Secondary primary used for contrast and depth; suitable for alternative backgrounds and text containers

### Accent Colors
- **Bright Blue** (`#2563EB`): High-energy accent for emphasis and key interactions; used sparingly for maximum impact
- **Light Blue** (`#93C5FD`): Soft accent color for secondary actions and secondary buttons; provides visual softness without losing clarity
- **Pale Lavender** (`#D7D8F9`): Delicate accent for subtle highlights and tertiary visual elements
- **Sage Green** (`#A1D2C7`): Accent accent color for tertiary or special interactions; adds visual variety

### Interactive
- **Light Blue Button** (`#93C5FD`): Primary button background; inviting and clickable with sufficient contrast
- **Deep Navy Link** (`#1E3A8A`): Link text and hover states on light backgrounds; maintains brand consistency
- **Bright White Link** (`#FFFFFF`): Link text on dark backgrounds; ensures readability on navy surfaces

### Neutral Scale
- **Off-White** (`#F8FAFC`): Primary background color; light, clean, and reduces eye strain
- **Pure White** (`#FFFFFF`): Secondary background; used for content containers and cards
- **Light Gray** (`#F9F9F9`): Tertiary background; subtle variation for layering
- **Medium Gray** (`#808080`): Secondary text on light backgrounds; readable yet subdued
- **Gray Accent** (`#6B7280`): Tertiary text and borders; lightweight and de-emphasized

### Surface & Borders
- **Very Dark Navy** (`#101828`): Dark mode surface; deep background for high-contrast sections
- **Light Border** (`#E5E7EB`): Subtle border color on light backgrounds; low visibility for refinement
- **Medium Border** (`#D1D5DB`): Standard border color; visible yet unobtrusive

### Semantic / Status
- **Success Green** (`#3FFF00`): Success states and positive feedback; high visibility
- **Warning Yellow** (`#FFBF00`): Warning states and cautionary messages; demands attention
- **Error Red** (`#FF3800`): Error states and destructive actions; urgent and clear

## 3. Typography Rules

### Font Family
- **Primary Font**: Google Sans (`https://fonts.googleapis.com/css2?family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&family=Mogra&display=swap`), fallback: `Arial, -apple-system, BlinkMacSystemFont, sans-serif`
- **Display Font**: Mogra (`https://fonts.googleapis.com/css2?family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&family=Mogra&display=swap`), fallback: `Georgia, serif`
- **Technical Font**: Arial, fallback: `system-ui, sans-serif`

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display / Hero | Mogra | 32px | 700 | 1.2 | 0px | Large impact headings for hero sections |
| H1 / Page Title | Google Sans | 32px | 700 | 1.2 | 0px | Primary page headings; establishes page context |
| H4 / Section Subheading | Google Sans | 16px | 700 | 1.2 | 0px | Section headers and subsection titles |
| H5 / Feature Title | Google Sans | 26.56px | 700 | 1.2 | 0px | Feature and highlight section titles |
| H6 / Small Heading | Google Sans | 10.72px | 700 | 1.2 | 0px | Micro-headings and labels |
| Body / Paragraph | Google Sans | 14.08px | 400 | 1.5 | 0px | Standard body text for content |
| Label / Form Text | Google Sans | 13.6px | 400 | 1.4 | 0px | Form labels and input hints |
| List Item | Google Sans | 16px | 400 | 1.5 | 0px | Bulleted and numbered lists |
| Button | Arial | 14px | 700 | 1 | 0px | Call-to-action button text |
| Input / Form Field | Arial | 13.33px | 700 | 1 | 0px | Form input and field text |
| Caption / Small Text | Google Sans | 12px | 400 | 1.4 | 0px | Captions, footnotes, and helper text (inferred) |

### Principles
- **Hierarchy through weight and size**: Bold `700` weight for headings and calls-to-action; regular `400` for body and descriptive text
- **Line height generosity**: Increased line height (1.4–1.5) for body text ensures readability and visual breathing room
- **Consistent scale**: Typography follows a predictable scale from display (32px) down to captions (12px) for coherence
- **Functional pairing**: Google Sans provides clarity and modernity for primary content; Arial powers technical UI elements; Mogra adds personality to display text
- **Accessibility first**: High contrast between text color and background; sufficient line height prevents text crowding

## 4. Component Stylings

### Buttons

#### Primary Button
- **Background**: `#93C5FD`
- **Text Color**: `#1E3A8A`
- **Font Size**: `14px`
- **Font Weight**: `700`
- **Font Family**: Arial
- **Padding**: `8px 16px`
- **Border Radius**: `8px`
- **Border**: `0px none`
- **Box Shadow**: `none`
- **Height**: `35px`
- **Line Height**: `normal`
- **Hover State**: Darken background to `#60A5FA`, maintain text color `#1E3A8A`
- **Active State**: Further darken to `#3B82F6`, increase shadow to `0px 2px 8px rgba(30, 58, 138, 0.2)`
- **Disabled State**: Background `#D1D5DB`, text color `#808080`, cursor `not-allowed`

#### Secondary Button
- **Background**: `#F8FAFC`
- **Text Color**: `#1E3A8A`
- **Font Size**: `14px`
- **Font Weight**: `700`
- **Font Family**: Arial
- **Padding**: `8px 16px`
- **Border Radius**: `8px`
- **Border**: `2px solid #1E3A8A`
- **Box Shadow**: `none`
- **Height**: `35px`
- **Line Height**: `normal`
- **Hover State**: Background `#E5E7EB`, maintain border `2px solid #1E3A8A`
- **Active State**: Background `#D1D5DB`, shadow `0px 2px 8px rgba(30, 58, 138, 0.2)`

#### Ghost Button
- **Background**: `transparent`
- **Text Color**: `#93C5FD`
- **Font Size**: `14px`
- **Font Weight**: `700`
- **Font Family**: Arial
- **Padding**: `8px 16px`
- **Border Radius**: `8px`
- **Border**: `1px solid #93C5FD`
- **Box Shadow**: `none`
- **Height**: `35px`
- **Line Height**: `normal`
- **Hover State**: Background `rgba(147, 197, 253, 0.1)`, border `1px solid #93C5FD`
- **Active State**: Background `rgba(147, 197, 253, 0.2)`, shadow `0px 2px 4px rgba(147, 197, 253, 0.3)`

### Cards & Containers

#### Dark Card (Hero / Primary Container)
- **Background**: `#101828`
- **Text Color**: `#F8FAFC`
- **Font Size**: `16px`
- **Font Weight**: `400`
- **Font Family**: Google Sans
- **Padding**: `16px 32px`
- **Border Radius**: `16px`
- **Border**: `0px none`
- **Box Shadow**: `0px 1px 3px rgba(0, 0, 0, 0.1)`
- **Min Height**: `auto`
- **Line Height**: `1.5`

#### Slate Card (Secondary Container)
- **Background**: `#1E293B`
- **Text Color**: `#F8FAFC`
- **Font Size**: `16px`
- **Font Weight**: `400`
- **Font Family**: Google Sans
- **Padding**: `16px 32px`
- **Border Radius**: `16px`
- **Border**: `0px none`
- **Box Shadow**: `0px 1px 3px rgba(0, 0, 0, 0.15)`
- **Min Height**: `auto`
- **Line Height**: `1.5`

#### Navy Card (Accent Container)
- **Background**: `#1E3A8A`
- **Text Color**: `#F8FAFC`
- **Font Size**: `16px`
- **Font Weight**: `400`
- **Font Family**: Google Sans
- **Padding**: `16px 32px`
- **Border Radius**: `16px`
- **Border**: `0px none`
- **Box Shadow**: `0px 2px 8px rgba(30, 58, 138, 0.2)`
- **Min Height**: `auto`
- **Line Height**: `1.5`

#### Light Card (Background Container)
- **Background**: `#F8FAFC`
- **Text Color**: `#1E293B`
- **Font Size**: `16px`
- **Font Weight**: `400`
- **Font Family**: Google Sans
- **Padding**: `16px 32px`
- **Border Radius**: `16px`
- **Border**: `1px solid #E5E7EB`
- **Box Shadow**: `0px 1px 2px rgba(0, 0, 0, 0.05)`
- **Min Height**: `auto`
- **Line Height**: `1.5`

### Inputs & Forms

#### Text Input
- **Background**: `transparent`
- **Text Color**: `#000000`
- **Font Size**: `13.33px`
- **Font Weight**: `700`
- **Font Family**: Arial
- **Padding**: `6px 6px`
- **Border Radius**: `0px`
- **Border**: `1px solid #D1D5DB`
- **Box Shadow**: `none`
- **Height**: `30px`
- **Line Height**: `normal`
- **Focus State**: Border `2px solid #1E3A8A`, box-shadow `0px 0px 0px 3px rgba(30, 58, 138, 0.1)`
- **Placeholder Color**: `#808080`
- **Disabled State**: Background `#F9FAFB`, border `1px solid #E5E7EB`, color `#808080`, cursor `not-allowed`

#### Dropdown / Select
- **Background**: `#F8FAFC`
- **Text Color**: `#1E293B`
- **Font Size**: `14px`
- **Font Weight**: `400`
- **Font Family**: Google Sans
- **Padding**: `8px 12px`
- **Border Radius**: `8px`
- **Border**: `1px solid #D1D5DB`
- **Box Shadow**: `0px 1px 2px rgba(0, 0, 0, 0.05)`
- **Height**: `36px`
- **Focus State**: Border `2px solid #1E3A8A`, background `#FFFFFF`
- **Hover State**: Background `#F9F9F9`

### Navigation

#### Header Navigation Bar
- **Background**: `#1E3A8A`
- **Text Color**: `#F8FAFC`
- **Font Size**: `16px`
- **Font Weight**: `700`
- **Font Family**: Google Sans
- **Padding**: `36px 20px`
- **Border Radius**: `0px`
- **Border**: `0px none`
- **Box Shadow**: `0px 1px 3px rgba(0, 0, 0, 0.1)`
- **Height**: `72px`
- **Line Height**: `1.5`

#### Navigation Link (Active)
- **Background**: `transparent`
- **Text Color**: `#FFFFFF`
- **Font Size**: `16px`
- **Font Weight**: `700`
- **Font Family**: Google Sans
- **Padding**: `0px`
- **Border Radius**: `0px`
- **Border**: `0px none`
- **Box Shadow**: `none`
- **Hover State**: Text color `#93C5FD`, text-decoration `underline`
- **Active State**: Text color `#93C5FD`, border-bottom `3px solid #93C5FD`

#### Navigation Link (Secondary / Light Background)
- **Background**: `transparent`
- **Text Color**: `#93C5FD`
- **Font Size**: `16px`
- **Font Weight**: `700`
- **Font Family**: Google Sans
- **Padding**: `0px`
- **Border Radius**: `0px`
- **Border**: `0px none`
- **Box Shadow**: `none`
- **Hover State**: Text color `#2563EB`, text-decoration `underline`

### Badges

#### Success Badge
- **Background**: `#3FFF00`
- **Text Color**: `#000000`
- **Font Size**: `12px`
- **Font Weight**: `700`
- **Font Family**: Google Sans
- **Padding**: `4px 8px`
- **Border Radius**: `4px`
- **Border**: `0px none`

#### Warning Badge
- **Background**: `#FFBF00`
- **Text Color**: `#000000`
- **Font Size**: `12px`
- **Font Weight**: `700`
- **Font Family**: Google Sans
- **Padding**: `4px 8px`
- **Border Radius**: `4px`
- **Border**: `0px none`

#### Error Badge
- **Background**: `#FF3800`
- **Text Color**: `#FFFFFF`
- **Font Size**: `12px`
- **Font Weight**: `700`
- **Font Family**: Google Sans
- **Padding**: `4px 8px`
- **Border Radius**: `4px`
- **Border**: `0px none`

## 5. Layout Principles

### Spacing System

The spacing system is built on a base unit of **4px**, scaling up in predictable increments to maintain visual harmony and rhythm across the interface.

- **4px**: Micro-spacing for compact gaps between icon and text, or very tight adjacent elements
- **8px**: Tight spacing for padding within dense components (buttons, small inputs)
- **12px**: Standard gap for adjacent UI elements and loose component padding
- **16px**: Regular padding for cards, containers, and standard components
- **20px**: Navigation padding; generous vertical spacing in horizontal layouts
- **32px**: Large padding for card interiors and section content; establishes breathing room
- **36px**: Extra-large spacing for navigation headers and major section separators
- **80px**: Hero section padding; maximum breathing room for landing pages and full-width sections

**Usage Context**:
- Buttons: `8px 16px` (vertical × horizontal)
- Cards: `16px 32px` (vertical × horizontal)
- Navigation: `36px 20px` (vertical × horizontal)
- Sections: `80px` top and bottom for hero; `32px` for standard sections
- Gaps between elements: `12px` for standard list items; `4px` for icon-text pairs

### Grid & Container

- **Max Container Width**: `1440px` (full viewport width in the design system)
- **Column Strategy**: 12-column grid at desktop (each column ~120px with gutters); responsive reduction to 6-column on tablet and 1-column on mobile
- **Horizontal Padding**: `20px` on desktop; `16px` on tablet; `12px` on mobile
- **Section Patterns**:
  - Hero sections: Full-width background with centered content (max-width `1200px`)
  - Content sections: Centered container with symmetrical padding
  - Card grids: Multi-column layout on desktop; single column below tablet breakpoint

### Whitespace Philosophy

Whitespace is treated as a fundamental design element, not empty space. Generous whitespace around key content ensures focus, readability, and visual rest. The design philosophy emphasizes clarity through breathing room rather than density. Vertical whitespace is prioritized over horizontal, with section gaps of at least `32px` between major content blocks. Interactive elements receive padding that exceeds functional minimum, creating touchable, uncluttered spaces. This approach reduces cognitive load and enhances the premium, professional perception of the interface.

### Border Radius Scale

- **0px**: Borders on input fields and minimal radius components; technical appearance
- **4px**: Small UI elements (badges, tiny buttons, micro-interactions)
- **8px**: Buttons, secondary containers, and standard UI components; balanced approachability
- **16px**: Primary cards, large containers, and major content sections; rounded, friendly aesthetic

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | `box-shadow: none` | Inputs, minimal interactive states, and flat design areas |
| Raised (Level 1) | `box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05)` | Light cards and subtle hover states |
| Elevated (Level 2) | `box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1)` | Standard cards and default container elevation |
| Prominent (Level 3) | `box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15)` | Interactive cards, dropdowns, and active states |
| Featured (Level 4) | `box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2)` | Modals, popovers, and maximum-focus elements |

**Shadow Philosophy**: Shadows are used subtly to establish spatial hierarchy and guide user attention. Dark backgrounds (navy, slate) receive lighter shadows to maintain contrast; light backgrounds use darker shadows to create visual separation. Shadows increase in intensity and spread as elevation increases, creating a clear sense of layering. Interactive states (hover, active, focus) often gain shadow elevation to communicate responsiveness without overwhelming the interface. This approach maintains visual clarity while establishing depth through restrained, purposeful application.

## 7. Do's and Don'ts

### Do

- **Do use the navy (`#1E3A8A`) and slate (`#1E293B`) foundation** for trustworthy, professional contexts; these colors establish authority and coherence across the system
- **Do pair light blue (`#93C5FD`) buttons on navy backgrounds** for clear, accessible call-to-action elements with excellent contrast
- **Do maintain generous whitespace and padding** (minimum `16px` in containers) to ensure content breathing room and visual clarity
- **Do apply the 4px spacing scale consistently** (`4px`, `8px`, `12px`, `16px`, etc.) for predictable, harmonious layouts
- **Do use Google Sans for all body content** to ensure brand consistency and modern readability
- **Do emphasize hierarchy through typography weight** (`400` for body, `700` for headings) rather than relying solely on size
- **Do apply subtle shadows (`0px 1px 3px rgba(0, 0, 0, 0.1)`)** to cards for depth without visual noise
- **Do test button and input contrast** against both light and dark backgrounds to ensure WCAG AA compliance
- **Do use semantic colors (`#3FFF00` success, `#FFBF00` warning, `#FF3800` error)** consistently for user feedback

### Don't

- **Don't mix unauthorized brand colors** into the palette; stick to defined primaries, accents, and neutrals
- **Don't use more than 2–3 accent colors in a single view** to avoid visual overwhelm
- **Don't reduce button padding below `8px 16px`** as this compromises touch target size and accessibility
- **Don't apply shadows stronger than `0px 4px 12px rgba(0, 0, 0, 0.2)`** as excessive shadow creates depth confusion
- **Don't use pure black (`#000000`) for body text on light backgrounds**; use `#1E293B` for better visual softness
- **Don't decrease line height below `1.4` for body text** as this impacts readability and accessibility
- **Don't use the display font (Mogra) for body content**; reserve it for hero sections and high-impact headings only
- **Don't nest cards beyond 3 levels of elevation** as this creates visual confusion
- **Don't apply border-radius greater than `16px` to cards** as this diminishes the professional aesthetic
- **Don't use blue/cyan colors on dark navy backgrounds** without sufficient contrast testing; verify WCAG AA compliance

## 8. Responsive Behavior

### Breakpoints

| Breakpoint Name | Width | Key Changes |
|-----------------|-------|-------------|
| Mobile | `< 640px` | Single-column layout; `12px` horizontal padding; font sizes reduced by 10–15%; full-width cards; navigation collapses to hamburger menu |
| Tablet | `640px–1024px` | 6-column grid; `16px` horizontal padding; 2-column card grids; navigation remains full; spacing scales down to `32px` sections |
| Desktop | `1024px–1440px` | 12-column grid; `20px` horizontal padding; multi-column layouts; standard spacing (`32px`, `80px`) |
| Large Desktop | `> 1440px` | Content remains at `1440px` max-width, centered; extra margins on sides; spacing values remain consistent |

### Touch Targets

- **Minimum touch target size**: `44px` × `44px` for all interactive elements (buttons, links, form controls)
- **Recommended padding**: `8px` minimum internal padding to achieve minimum touch size for smaller text elements
- **Spacing between targets**: Minimum `8px` gap between adjacent interactive elements to prevent accidental activation
- **Mobile-specific adjustments**: Increase button height to `40px` and padding to `12px 20px` on screens below `768px` for comfortable thumb interaction

### Collapsing Strategy

- **Navigation**: Full horizontal menu on desktop (`> 1024px`); collapses to hamburger icon on tablet and mobile
- **Cards**: Multi-column grid (3+ columns) on desktop; 2-column on tablet; single column on mobile (below `640px`)
- **Padding**: Desktop `16px 32px`; tablet `12px 24px`; mobile `8px 16px` for cards and containers
- **Typography**: Font sizes remain fixed at defined values; line-height scales with viewport but maintains minimum `1.4` for readability
- **Images**: Scale responsively to container width; maintain aspect ratio; lazy-load on mobile networks
- **Sections**: Full-width on mobile; centered with max-width on desktop to prevent excessively long line lengths (max `80–100 characters`)

## 9. Agent Prompt Guide

### Quick Color Reference

- **Primary CTA**: Light Blue (`#93C5FD`) — use for call-to-action buttons on navy backgrounds
- **Primary Background**: Deep Navy (`#1E3A8A`) — trust-building foundation for headers and hero sections
- **Page Background**: Off-White (`#F8FAFC`) — clean, light background for content areas
- **Heading Text**: Dark Slate (`#1E293B`) — primary text on light backgrounds
- **Body Text**: Medium Gray (`#808080`) — secondary content on light backgrounds; use `#F8FAFC` on dark backgrounds
- **Link Color**: Light Blue (`#93C5FD`) — interactive text; ensure WCAG AA contrast against background
- **Success State**: Success Green (`#3FFF00`) — positive feedback and validation messages
- **Warning State**: Warning Yellow (`#FFBF00`) — cautionary messaging and warnings
- **Error State**: Error Red (`#FF3800`) — error messages and destructive actions
- **Card Background**: Dark Navy (`#101828` or `#1E293B`) — contains content on light page backgrounds
- **Border Color**: Light Border (`#E5E7EB`) — subtle, visible only when needed on light backgrounds

### Iteration Guide

1. **Start with the navy primary (`#1E3A8A`) and off-white background (`#F8FAFC`)** — these two colors form the foundation of 90% of layouts
2. **Apply light blue (`#93C5FD`) only to interactive elements** (buttons, links) to create clear affordance signals
3. **Use the 4px spacing scale consistently** — all spacing must be a multiple of 4px for visual harmony
4. **Set button padding to `8px 16px` with `8px` border-radius** and verify touch targets reach minimum `44px` × `44px`
5. **Apply Google Sans at `14px` weight `400` for body text**; use `700` weight exclusively for headings and CTAs
6. **Add subtle shadows (`0px 1px 3px rgba(0, 0, 0, 0.1)`) to cards** for depth; avoid shadows stronger than `0px 4px 12px`
7. **Test all text combinations against contrast checkers** to ensure WCAG AA compliance (4.5:1 minimum for body text)
8. **Implement mobile-first breakpoints**: design at `640px` first, then scale up to `1024px` and `1440px`
9. **Use semantic color tokens for status states**: always map success/warning/error to defined green/yellow/red
10. **Verify all input fields have clear focus states** with `2px solid #1E3A8A` border and `0px 0px 0px 3px rgba(30, 58, 138, 0.1)` shadow
