# SmileWave™ Pediatric & Multi-Speciality Dental Clinic Website

A production-ready, fully responsive, accessible (WCAG 2.2 AA), and SEO-optimized static website built for **SmileWave™ Dental Clinic** located in Devki Nagar, Borivali West, Mumbai.

This website is completely static, with no backend or databases, designed to be deployed directly to **GitHub Pages**.

---

## 1. Project Features

*   **Corporate & Modern Aesthetics:** Clean whitespace, professional colors, rounded corners, soft shadow gradients, and high-quality warm photography to eliminate dental clinic anxiety.
*   **Specialized Pediatric Section:** Showcases tell-show-do child dentistry methods, kid-friendly play lounges, and ceiling entertainment features.
*   **Interactive Components:** 
    *   Sticky header transition on scroll.
    *   Fully accessible mobile navigation drawer (Hamburger).
    *   Search-engine-friendly accessible accordion for FAQs.
    *   Lightweight slide-carousel for patient reviews.
    *   IntersectionObserver-driven fade/reveal animations.
    *   Interactive bottom navigation sticky bar on mobile (`CALL | WHATSAPP | BOOK`).
*   **Static Appointment Enquiry Form:** Frontend form validating name, Indian phone formats, dates (prevents past selections), services, and data consents. Includes extensible structure ready for Google Forms, Formspree, or EmailJS integrations.
*   **Local SEO & Meta Integration:** Structured JSON-LD Dentist schema, target location keywords (Borivali West, I.C. Colony, Devki Nagar), semantic HTML headers, canonical references, and descriptive OG (Open Graph) tags.
*   **Performance Optimization:** Clean vanilla scripts, lightweight SVGs, lazy-loaded images, and responsive styling.

---

## 2. Directory Structure

```text
stitch_smilewave_dental_website/
│
├── index.html                        # Homepage (completeIA layout)
├── about.html                        # About Us (Mission, values, tech, safety details)
├── services.html                     # Services (Specialty grids & preventive detail)
├── pediatric-dentistry.html          # Specialty: Pediatric dentistry
├── root-canal-treatment.html          # Specialty: Root canal treatments
├── restorative-dentistry.html        # Specialty: Crowns, bridges, composite restorations
├── cosmetic-dentistry.html           # Specialty: Veneers, teeth whitening, bonding
├── dental-implants.html              # Specialty: Surgical implants and abutments
├── faq.html                          # Category-wise FAQs list
├── contact.html                      # Contact Details, Maps, Address, Booking Form
├── privacy-policy.html               # Basic privacy policy statement
├── terms.html                        # Terms of use and medical disclaimers
│
├── css/
│   ├── style.css                     # Primary styles, variables, typography, assets
│   └── responsive.css                # Mobile/Tablet breakpoints rules (320px - 1920px)
│
├── js/
│   └── script.js                     # Accoridon logic, validations, slider, mobile menu
│
├── images/
│   └── logo.svg                      # Brand vector logo
│
├── favicon.svg                       # Browser favicon
├── robots.txt                        # Search engine crawler policies
├── sitemap.xml                       # XML index of static pages
└── README.md                         # Project documentation
```

---

## 3. Local Development

To run and preview the website locally:

1.  Clone this repository or download the source folder.
2.  **Simple Preview:** Double-click `index.html` to open it in any modern browser.
3.  **Local Server Preview (Recommended):** Use a local static server like:
    *   VS Code **Live Server** extension.
    *   Run in your terminal (Python 3): `python -m http.server 8000` and open `http://localhost:8000`.

---

## 4. GitHub Pages Deployment

The project uses relative routing throughout and is fully compatible with GitHub Pages deployment:

1.  Log in to your GitHub account and create a new repository named `smilewave` (or another name).
2.  Commit and push these static files to your repository's `main` branch.
3.  Navigate to your repository's **Settings** tab.
4.  Select **Pages** from the sidebar menu.
5.  Under **Build and deployment**, select **Deploy from a branch**.
6.  Set the branch source to `main` (or `master`) and directory to `/root`. Click **Save**.
7.  Wait 1-2 minutes. Your website will be live at:
    `https://your-github-username.github.io/repository-name/`

---

## 5. Technology Stack

*   **Markup:** HTML5 (semantic structures, ARIA tags).
*   **Styling:** CSS3 (Variables, Grid, Flexbox, Transitions).
*   **Scripting:** Vanilla JavaScript (ES6+, zero external library dependencies).
*   **Icons & Graphics:** Inline vector SVGs.
*   **Typography:** Google Fonts (Manrope, Plus Jakarta Sans).
