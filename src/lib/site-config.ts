/**
 * Fichier central de configuration du portfolio.
 * Modifie ces valeurs pour personnaliser le site sans toucher aux composants.
 */

export const siteConfig = {
  name: "KOULIKA Kabirou",
  role: "Développeur Web & Mobile",
  url: "https://tonportfolio.com", // TODO: remplace par ton domaine réel
  email: "Kabiroukoulika@gmail.com",
  github: "https://github.com/kbghost",
  githubUsername: "kbghost",
  linkedin: "https://www.linkedin.com/in/ton-profil", // TODO
  whatsapp: "https://wa.me/2290148767294",
};

export type SkillLevel = 1 | 2 | 3 | 4 | 5;

export interface Skill {
  name: string;
  level: SkillLevel; // 1 (notions) à 5 (expert)
}

export const skills: Record<"frontend" | "backend" | "tools" | "security", Skill[]> = {
  frontend: [
    { name: "HTML / CSS", level: 5 },
    { name: "JavaScript", level: 5 },
    { name: "TypeScript", level: 4 },
    { name: "React", level: 5 },
    { name: "Next.js", level: 4 },
    { name: "Tailwind CSS", level: 5 },
  ],
  backend: [
    { name: "PHP", level: 4 },
    { name: "Laravel", level: 4 },
    { name: "Python", level: 3 },
    { name: "API REST", level: 4 },
    { name: "MySQL", level: 4 },
    { name: "PostgreSQL", level: 3 },
  ],
  tools: [
    { name: "Git", level: 5 },
    { name: "GitHub", level: 5 },
    { name: "Linux", level: 4 },
    { name: "Docker", level: 2 },
  ],
  security: [
    { name: "OWASP Top 10", level: 3 },
    { name: "Tests de sécurité web", level: 3 },
    { name: "Bonnes pratiques", level: 4 },
    { name: "Sécurisation d'applications", level: 3 },
  ],
};

export interface Project {
  id: string;
  name: string;
  url?: string;
  githubUrl?: string;
  image: string;
  /**
   * "original"  -> projet réellement conçu/développé de A à Z par toi
   * "clone"     -> reproduction d'un site existant à but d'entraînement, sans lien avec l'original
   * "inspired"  -> projet original mais visuellement inspiré d'un site existant
   */
  type: "original" | "clone" | "inspired";
  referenceName?: string; // nom du site de référence si clone/inspired
  descriptionFr: string;
  descriptionEn: string;
  tech: string[];
}

export const projects: Project[] = [
  {
    id: "gogaznow",
    name: "GoGazNow",
    url: "https://gogaznow.com",
    image: "/projects/gogaznow.jpg",
    type: "original",
    descriptionFr:
      "Développement complet d'une plateforme web pour GoGazNow : conception, développement front-end et back-end, et mise en production. Le projet a contribué à la visibilité de son fondateur, distingué dans le secteur de la pêche.",
    descriptionEn:
      "End-to-end development of the GoGazNow web platform: design, front-end and back-end development, and production deployment. The project contributed to its founder's visibility, who was recognized within the fishing industry.",
    tech: ["React", "Node.js", "Tailwind CSS", "PostgreSQL"],
  },
  {
    id: "octopus-energy-clone",
    name: "Octopus Energy — Clone d'entraînement",
    url: undefined,
    githubUrl: "https://github.com/kbghost", // TODO: remplace par le repo réel du clone
    image: "/projects/octopus-energy.jpg",
    type: "clone",
    referenceName: "Octopus Energy",
    descriptionFr:
      "Reproduction fidèle de l'interface du site Octopus Energy à des fins d'entraînement personnel (pixel-perfect, animations, responsive). Aucun lien avec la société Octopus Energy ; projet non affilié et non commercial.",
    descriptionEn:
      "Pixel-faithful recreation of the Octopus Energy interface, built as a personal training exercise (layout, animations, responsiveness). No affiliation with Octopus Energy; non-commercial practice project.",
    tech: ["Next.js", "TypeScript", "Framer Motion"],
  },
  {
    id: "cowboy-clone",
    name: "Cowboy — Clone d'entraînement",
    url: undefined,
    githubUrl: "https://github.com/kbghost", // TODO
    image: "/projects/cowboy.jpg",
    type: "clone",
    referenceName: "Cowboy",
    descriptionFr:
      "Reproduction du site vitrine de la marque de vélos électriques Cowboy, réalisée pour travailler les animations au scroll et les transitions de page. Projet non affilié, à but purement pédagogique.",
    descriptionEn:
      "Recreation of the Cowboy e-bike showcase website, built to practice scroll animations and page transitions. Non-affiliated, purely educational project.",
    tech: ["React", "Framer Motion", "GSAP"],
  },
  {
    id: "lalamove-clone",
    name: "Lalamove — Clone d'entraînement",
    url: undefined,
    githubUrl: "https://github.com/kbghost", // TODO
    image: "/projects/lalamove.jpg",
    type: "clone",
    referenceName: "Lalamove",
    descriptionFr:
      "Reproduction de l'expérience utilisateur du site Lalamove (parcours de commande, structure des pages) pour approfondir la conception de flux UX complexes. Projet non affilié à Lalamove.",
    descriptionEn:
      "Recreation of the Lalamove user experience (booking flow, page structure) to deepen complex UX flow design skills. Not affiliated with Lalamove.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
];

export interface ServiceItem {
  key: string;
  titleFr: string;
  titleEn: string;
  descFr: string;
  descEn: string;
  icon: "layout" | "server" | "code" | "gauge" | "shield" | "rocket" | "settings";
}

export const services: ServiceItem[] = [
  {
    key: "vitrine",
    titleFr: "Sites vitrines",
    titleEn: "Showcase websites",
    descFr: "Sites vitrines modernes, rapides et optimisés pour la conversion et le référencement.",
    descEn: "Modern, fast showcase websites optimized for conversion and SEO.",
    icon: "layout",
  },
  {
    key: "fullstack",
    titleFr: "Développement Full Stack",
    titleEn: "Full Stack development",
    descFr: "Applications complètes, du frontend à la base de données, avec une architecture propre.",
    descEn: "Complete applications, from frontend to database, with clean architecture.",
    icon: "code",
  },
  {
    key: "react",
    titleFr: "Applications React",
    titleEn: "React applications",
    descFr: "Interfaces dynamiques et interactives construites avec React et son écosystème.",
    descEn: "Dynamic, interactive interfaces built with React and its ecosystem.",
    icon: "layout",
  },
  {
    key: "nextjs",
    titleFr: "Applications Next.js",
    titleEn: "Next.js applications",
    descFr: "Applications SSR/SSG performantes, avec un SEO et un chargement optimisés.",
    descEn: "High-performance SSR/SSG applications with optimized SEO and loading.",
    icon: "rocket",
  },
  {
    key: "laravel",
    titleFr: "Applications Laravel",
    titleEn: "Laravel applications",
    descFr: "Back-ends robustes et API sécurisées avec Laravel et PHP moderne.",
    descEn: "Robust back-ends and secure APIs with Laravel and modern PHP.",
    icon: "server",
  },
  {
    key: "maintenance",
    titleFr: "Maintenance & optimisation",
    titleEn: "Maintenance & optimization",
    descFr: "Suivi, correctifs et optimisation des performances de vos applications existantes.",
    descEn: "Monitoring, fixes and performance optimization for your existing applications.",
    icon: "settings",
  },
  {
    key: "security",
    titleFr: "Audit de sécurité",
    titleEn: "Security audit",
    descFr: "Revue de sécurité basée sur OWASP pour identifier et corriger les vulnérabilités.",
    descEn: "OWASP-based security review to identify and fix vulnerabilities.",
    icon: "shield",
  },
  {
    key: "deploy",
    titleFr: "Déploiement & Consulting",
    titleEn: "Deployment & consulting",
    descFr: "Mise en production, CI/CD et accompagnement technique sur vos choix d'architecture.",
    descEn: "Production deployment, CI/CD and technical guidance on your architecture choices.",
    icon: "gauge",
  },
];

export interface EducationEntry {
  id: string;
  degreeFr: string;
  degreeEn: string;
  school: string;
  period: string;
  descFr: string;
  descEn: string;
}

export const educationTimeline: EducationEntry[] = [
  {
    id: "ifri-licence",
    degreeFr: "Licence en Informatique",
    degreeEn: "Bachelor's Degree in Computer Science",
    school: "IFRI — Institut de Formation et de Recherche en Informatique",
    period: "2022 — 2025", // TODO: ajuste les dates réelles
    descFr:
      "Formation académique couvrant les fondamentaux du génie logiciel, des bases de données, des réseaux et de l'algorithmique, complétée par une pratique intensive du développement web.",
    descEn:
      "Academic training covering software engineering fundamentals, databases, networking and algorithms, complemented by intensive hands-on web development practice.",
  },
  // TODO: ajoute d'autres entrées ici (autre diplôme, formation continue...) pour enrichir la timeline
];

export interface Certification {
  id: string;
  titleFr: string;
  titleEn: string;
  issuer: string;
  date: string;
  fileUrl?: string; // place le PDF dans /public/certifications/
}

export const certifications: Certification[] = [
  {
    id: "fullstack-cert",
    titleFr: "Certification Full Stack Web Development",
    titleEn: "Full Stack Web Development Certification",
    issuer: "À préciser", // TODO
    date: "2025",
    fileUrl: undefined, // TODO: "/certifications/fullstack.pdf"
  },
];

export const testimonials = [
  {
    name: "Amélie Rousseau",
    role: "Fondatrice, Startup e-commerce",
    quoteFr: "Un travail sérieux, une communication fluide et un résultat à la hauteur de nos attentes.",
    quoteEn: "Serious work, smooth communication and a result that lived up to our expectations.",
  },
  {
    name: "Marc-Étienne Dossou",
    role: "Chef de projet, PME",
    quoteFr: "Livraison dans les délais, code propre et bonne réactivité sur les ajustements demandés.",
    quoteEn: "On-time delivery, clean code and great responsiveness on requested adjustments.",
  },
];
