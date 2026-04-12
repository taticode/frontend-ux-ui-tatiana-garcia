# Frontend Developer & UX/UI Designer | Portfolio

This is my professional portfolio, built with a focus on **clean architecture**, **responsive design**, and **modern CSS workflows**. It showcases my ability to bridge the gap between complex design requirements and high-performance frontend code.

🚀 **[Live Demo](https://taticode.github.io/frontend-ux-ui-tatiana-garcia/)**

---

## ⚡ Tech Stack & Highlights

* **Framework:** **Angular 21** (using Standalone Components & Signal-ready patterns).
* **Styling:** **Tailwind CSS 4.0** (utilizing advanced `@theme` configuration and CSS variables).
* **UI/UX:** **Flowbite** integration for accessible, high-fidelity components.
* **Best Practices:** Semantic HTML5, Mobile-First approach, and performance optimization.

---

## 🛠️ Key Technical Implementations

### 1. Advanced CSS & Theming
Instead of standard utility-first styling, I implemented a **centralized design system** using Tailwind 4's new engine. This allows for:
* Dynamic theme switching via CSS variables.
* Custom `@utility` definitions for reusable animations and complex gradients.

### 2. Interactive Experience Timeline
I developed a custom **Accordion-Timeline** component that features:
* Smooth height transitions using `grid-template-rows: 0fr -> 1fr` (the gold standard for CSS transitions on unknown heights).
* State-driven UI feedback based on Angular's attribute binding.

### 3. Responsive Component Architecture
The application is built with a **modular approach**, ensuring that components like the `clickable-card` and `navigation-menu` are decoupled, reusable, and fully responsive across all breakpoints.

---

## 📦 Project Setup & Deployment

Designed to be easily auditable by technical leads:

**Development Server:**
```bash
npm install
ng serve
