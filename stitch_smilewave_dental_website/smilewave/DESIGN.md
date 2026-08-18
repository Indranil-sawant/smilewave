---
name: SmileWave
colors:
  surface: '#f9f9ff'
  surface-dim: '#cfdaf1'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dee8ff'
  surface-container-highest: '#d8e3fa'
  on-surface: '#111c2c'
  on-surface-variant: '#414752'
  inverse-surface: '#263142'
  inverse-on-surface: '#ebf1ff'
  outline: '#717783'
  outline-variant: '#c1c7d4'
  surface-tint: '#005fae'
  primary: '#0059a4'
  on-primary: '#ffffff'
  primary-container: '#0072ce'
  on-primary-container: '#f4f6ff'
  inverse-primary: '#a5c8ff'
  secondary: '#00687b'
  on-secondary: '#ffffff'
  secondary-container: '#4fddfe'
  on-secondary-container: '#005f70'
  tertiary: '#485c5f'
  on-tertiary: '#ffffff'
  tertiary-container: '#607578'
  on-tertiary-container: '#e4fbfe'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d4e3ff'
  primary-fixed-dim: '#a5c8ff'
  on-primary-fixed: '#001c3a'
  on-primary-fixed-variant: '#004785'
  secondary-fixed: '#aeecff'
  secondary-fixed-dim: '#47d7f8'
  on-secondary-fixed: '#001f26'
  on-secondary-fixed-variant: '#004e5d'
  tertiary-fixed: '#d0e7ea'
  tertiary-fixed-dim: '#b4cbce'
  on-tertiary-fixed: '#091f21'
  on-tertiary-fixed-variant: '#364a4d'
  background: '#f9f9ff'
  on-background: '#111c2c'
  surface-variant: '#d8e3fa'
typography:
  headline-lg:
    fontFamily: Manrope
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 52px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Manrope
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-bold:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 20px
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
  stack-sm: 8px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style

This design system is built for a pediatric and multi-speciality dental healthcare environment. The brand personality is clinical yet approachable, balancing medical precision with a friendly, "wave-like" fluidity derived from the logo's curvature.

The design style is **Corporate / Modern** with a focus on hygiene and trust. It utilizes ample whitespace to evoke a sterile, professional atmosphere, while incorporating soft rounded corners and subtle gradients to remain welcoming for younger patients and their families. The aesthetic prioritizes clarity and ease of navigation to reduce patient anxiety.

## Colors

The palette is rooted in the "dental blue" spectrum. 
- **Primary Blue (#0072CE):** A vibrant, deep blue used for core brand elements and primary actions, representing stability and expertise.
- **Teal Wave (#29C5E6):** A bright, secondary cyan/teal used for highlights, icons, and interactive hover states to provide energy.
- **Soft Wash (#E0F7FA):** A very light teal used for background sections and surface tints to prevent the interface from feeling too stark.
- **Neutral Slate (#4A5568):** A professional gray used for body text and secondary labels to ensure high legibility without the harshness of pure black.

## Typography

The typography strategy focuses on modern geometric sans-serifs that communicate cleanliness and modernity. **Manrope** is used for all core content and headlines to provide a balanced, professional tone. **Plus Jakarta Sans** is introduced for labels and small UI elements to add a hint of friendliness through its softer terminal ends.

Headlines should use tighter letter-spacing to appear more authoritative. Large display text should always be in the Primary Blue color to reinforce brand identity.

## Layout & Spacing

The design system utilizes a **Fluid Grid** with a 12-column structure for desktop and a 4-column structure for mobile. 

The spacing rhythm is based on an 8px base unit. 
- **Desktop:** 40px outer margins with 24px gutters. Content should be centered with a maximum width of 1280px.
- **Mobile:** 16px outer margins.
- **Vertical Rhythm:** Use larger "stack" increments (48px+) between distinct sections to maintain the airy, medical aesthetic. Group related items like form fields or list items with smaller increments (8px or 16px).

## Elevation & Depth

This system uses **Tonal Layers** and **Ambient Shadows** to create a sense of organized hierarchy. 

Depth is achieved through:
1.  **Low-Level Elevation:** Used for cards and containers. Apply a subtle 1px border in a light teal-gray and a soft, highly diffused shadow (Blur: 12px, Opacity: 5%, Color: Primary Blue) to lift the element from the background.
2.  **High-Level Elevation:** Used for modals and dropdowns. Use a more pronounced shadow and a 2px Primary Blue accent on the top edge to signal importance.
3.  **Background Tints:** Distinguish secondary content areas by using the "Soft Wash" teal color instead of white, creating a natural sense of depth without relying on shadows alone.

## Shapes

The shape language reflects the "Wave" aspect of the brand. UI elements use **Rounded (0.5rem)** corners as a default to avoid the aggressive feel of sharp medical equipment. 

- **Standard Buttons & Inputs:** 8px (0.5rem) radius.
- **Cards & Large Containers:** 16px (1rem) radius.
- **Tags & Status Badges:** Full-pill (999px) radius to differentiate them from interactive buttons.

## Components

### Buttons
Primary buttons use a solid Primary Blue fill with white text. Secondary buttons use a Primary Blue outline with a "Soft Wash" background on hover. Use the wave-like motion in transitions; hover states should subtly shift the background color toward the Teal Wave hex.

### Input Fields
Inputs should have a 1px border in a neutral light gray. Upon focus, the border transitions to Primary Blue with a subtle 3px outer glow in Teal Wave. Labels must always be visible above the field using the "label-bold" type style.

### Cards
Cards are the primary container for services and doctor profiles. They should feature a white background, 16px rounded corners, and a 1px "Soft Wash" border. If the card is interactive, it should lift slightly (increase shadow depth) on hover.

### Chips & Badges
Used for dental specialities (e.g., "Orthodontics"). These should be pill-shaped with a light teal background and Primary Blue text.

### Appointment Calendar
A custom component for healthcare. Use a clean white grid with Teal Wave highlights for selected dates. Avoid heavy lines; use tonal shifts to separate days and time slots.