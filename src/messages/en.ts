import type { Messages } from "./fr";

const en: Messages = {
  nav: {
    home: "Home",
    about: "About",
    skills: "Skills",
    services: "Services",
    projects: "Projects",
    certifications: "Certifications",
    education: "Education",
    contact: "Contact",
    cta: "Let's talk",
  },
  hero: {
    eyebrow: "$ whoami",
    title: "Web • Mobile Developer",
    titleAccent: "Cybersecurity Enthusiast",
    subtitle:
      "I build modern, high-performance and secure web applications for businesses and startups.",
    ctaPrimary: "View my projects",
    ctaSecondary: "Get in touch",
    scroll: "Scroll",
    stats: [
      { value: "3+", label: "years of experience" },
      { value: "15+", label: "projects shipped" },
      { value: "100%", label: "responsive" },
    ],
  },
  about: {
    eyebrow: "$ cat about.md",
    title: "About",
    lead: "Freelance Web & Mobile Developer, focused on performance and security.",
    paragraphs: [
      "I build full stack applications, from prototype to production, with a strong focus on security and code robustness.",
      "Passionate about cybersecurity, I apply OWASP best practices from the design phase: input validation, access control, sensitive data encryption and regular audits.",
      "I'm looking for collaborations with startups, SMEs, companies and individuals, in Benin and internationally, to build reliable, well-thought-out digital products.",
    ],
    tags: [
      "Web & Mobile Developer",
      "Cybersecurity enthusiast",
      "Full Stack",
      "High-performance apps",
      "Secure solutions",
      "Freelance",
    ],
    availableFor: "Open to collaborations",
    availableWith: ["Startups", "SMEs", "Companies", "Individuals", "International clients"],
  },
  skills: {
    eyebrow: "$ ls skills/",
    title: "Skills",
    lead: "The technologies I build with, from the frontend to securing applications.",
    categories: {
      frontend: "Frontend",
      backend: "Backend",
      tools: "Tools",
      security: "Cybersecurity",
    },
  },
  services: {
    eyebrow: "$ cat services.md",
    title: "Services",
    lead: "What I can handle, from idea to deployment.",
  },
  projects: {
    eyebrow: "$ git log --projects",
    title: "My projects",
    lead: "A selection of real work and training projects — each with its own honest context.",
    demo: "Demo",
    code: "Code",
    typeLabels: {
      original: "Original project",
      clone: "Training clone",
      inspired: "Inspired by",
    },
  },
  education: {
    eyebrow: "$ cat education.md",
    title: "Education",
  },
  certifications: {
    eyebrow: "$ ls certifications/",
    title: "Certifications",
    view: "View certificate",
    pending: "Certificate coming soon",
  },
  github: {
    eyebrow: "$ curl api.github.com",
    title: "GitHub activity",
    lead: "Statistics updated live from my GitHub profile.",
    repos: "Public repos",
    followers: "Followers",
    topLanguages: "Most used languages",
    viewProfile: "View GitHub profile",
    loading: "Loading statistics...",
    error: "Couldn't load GitHub statistics right now.",
  },
  contact: {
    eyebrow: "$ send message",
    title: "Contact",
    lead: "Have a project in mind? Email me directly.",
    send: "Email me",
  },
  footer: {
    rights: "All rights reserved.",
    backToTop: "Back to top",
    quickLinks: "Quick links",
    built: "Designed and built with Next.js, TypeScript and a lot of coffee.",
  },
  faq: {
    eyebrow: "$ man faq",
    title: "Frequently asked questions",
    items: [
      {
        q: "What kind of projects do you take on?",
        a: "Showcase websites, full stack web apps, React/Next.js platforms, Laravel projects, security audits and maintenance work.",
      },
      {
        q: "Do you work with international clients?",
        a: "Yes, I work with clients both in Benin and abroad, in French and English, fully remote.",
      },
      {
        q: "How does a collaboration work?",
        a: "Requirements scoping, technical proposal and budget, iterative development with regular check-ins, then deployment and post-launch support.",
      },
      {
        q: "Do you perform security audits?",
        a: "Yes, I run security reviews based on OWASP recommendations to identify and fix common vulnerabilities.",
      },
    ],
  },
  notFound: {
    title: "404",
    subtitle: "Page not found",
    text: "The page you're looking for doesn't exist or has been moved.",
    cta: "Back to home",
  },
};

export default en;
