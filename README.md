# Sree Hari R — Developer Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.11-purple?style=flat-square&logo=framer)](https://www.framer.com/motion/)
[![Recharts](https://img.shields.io/badge/Recharts-2.13-22d3ee?style=flat-square)](https://recharts.org/)
[![Vercel Ready](https://img.shields.io/badge/Vercel-Ready-000000?style=flat-square&logo=vercel)](https://vercel.com/)

A premium, recruiter-focused personal portfolio website built for **Sree Hari R**, an aspiring Computer Science Engineer specializing in full-stack web applications, AI-assisted development tools, modern cloud tooling, and practical cybersecurity exposure.

---

## 🚀 Overview & Information Architecture

Designed for tech recruiters and hiring managers (optimized for 45–90 second initial visits), this portfolio presents verified technical expertise, capstone case studies, cybersecurity investigation exposure, academic achievements, and downloadable resume assets without fluff or fake statistics.

### Key Highlights
- **Flagship Case Study**: **Trust-Chain Escrow — Dual-Key Verification System** featuring empirical performance metrics (**30% initial page load reduction**, **25% page transition latency reduction**, and **30-day JWT validity**).
- **Interactive Recruiter CLI**: Lightweight in-browser terminal supporting commands (`help`, `skills`, `projects`, `experience`, `education`, `contact`, `clear`).
- **Architecture Modal**: Expandable interactive diagram visualizing the dual-key verification protocol flow.
- **Fintech Dashboard Preview**: Interactive area chart powered by **Recharts** for the Expense Tracker project.
- **Dark/Light Mode**: Smooth theme toggling with custom CSS variables and persistent state storage.
- **Verified Resume Asset**: Direct download trigger for the exact PDF resume (`Sree_Hari_R_Resume.pdf`).

---

## 🛠️ Technology Stack

| Domain | Technologies |
| :--- | :--- |
| **Framework & Core** | Next.js 14 (App Router), React 18, TypeScript |
| **Styling & UI** | Tailwind CSS, Glassmorphism backdrop filters, Lucide React Icons |
| **Animations & Motion** | Framer Motion (page transitions, spring physics, modal triggers) |
| **Data Visualization** | Recharts (responsive area charts) |
| **Deployment** | Vercel-ready architecture |

---

## 📁 Repository Structure

```text
d:\portfolio
├── app/
│   ├── globals.css          # CSS Variables, Dark/Light theme, Custom grid patterns
│   ├── layout.tsx           # SEO Metadata & Open Graph tags
│   └── page.tsx             # Main single-page application entry point
├── components/
│   ├── Navbar.tsx           # Glassmorphism sticky header & mobile drawer
│   ├── Hero.tsx             # Hero section with CTAs & social links
│   ├── HeroVisual.tsx       # Dual-mode Developer Terminal & System Architecture visual
│   ├── About.tsx            # Specialization cards & Recruiter CLI integration
│   ├── Terminal.tsx         # Interactive command-line shell component
│   ├── Skills.tsx           # Categorized skill cards (Languages, DB, Cloud, Security)
│   ├── FeaturedProject.tsx  # Trust-Chain Escrow case study with metric cards
│   ├── ArchitectureModal.tsx# Modal displaying the dual-key transaction sequence
│   ├── Projects.tsx         # Category filter pills & Expense Tracker Recharts card
│   ├── Experience.tsx       # Timeline for Coimbatore Police Cybersecurity & CodSoft internships
│   ├── Education.tsx        # Vertical timeline (M.Tech, B.E, HSS, SSLC)
│   ├── Certifications.tsx   # Cisco & NPTEL certificate cards
│   ├── Publication.tsx      # IEEE research paper publication card
│   ├── ResearchFocus.tsx    # Academic research focus section
│   ├── Contact.tsx          # Direct contact details & interactive form
│   ├── Footer.tsx           # Footer branding & copyright notice
│   └── ThemeProvider.tsx    # React theme context provider
├── public/
│   └── Sree_Hari_R_Resume.pdf # Downloadable resume PDF asset
├── scratch/
│   └── generate_exact_resume.py # Python script for PDF compilation
├── next.config.mjs
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

---

## ⚡ Getting Started Locally

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### Installation & Execution

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Start production server**:
   ```bash
   npm start
   ```

---

## 📄 Verified Source Data

All achievements, performance metrics, educational institutions, publications, and certifications reflect genuine data provided in Sree Hari R's official resume:

- **IEEE Publication**: [Trust-Chain Escrow - Dual-Key Verification System](https://ieeexplore.ieee.org/document/11597641)
- **Education**: M.Tech at Amrita Vishwa Vidyapeetham | B.E (8.2 CGPA) at JCT College of Engineering and Technology
- **Internships**: Cyber Security Internship at The Commissioner of Police, Coimbatore | Python Internship at CodSoft
- **Certifications**: Cisco Cybersecurity Essentials, NPTEL Cloud Computing, NPTEL Joy of Computing, CodSoft Python

---

## 📫 Contact & Links

- **Email**: [sreehari1384@gmail.com](mailto:sreehari1384@gmail.com)
- **Phone**: +91 9400635388
- **IEEE Paper**: [IEEE Document 11597641](https://ieeexplore.ieee.org/document/11597641)

---

© 2026 **Sree Hari R**. Built with Next.js & TypeScript.
