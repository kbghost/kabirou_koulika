const fr = {
  nav: {
    home: "Accueil",
    about: "À propos",
    skills: "Compétences",
    services: "Services",
    projects: "Projets",
    certifications: "Certifications",
    education: "Formation",
    contact: "Contact",
    cta: "Discutons",
  },
  hero: {
    eyebrow: "$ whoami",
    title: "Développeur Web • Mobile",
    titleAccent: "Cybersecurity Enthusiast",
    subtitle:
      "Je conçois des applications web modernes, performantes et sécurisées pour les entreprises et les startups.",
    ctaPrimary: "Voir mes projets",
    ctaSecondary: "Me contacter",
    scroll: "Défiler",
    stats: [
      { value: "3+", label: "ans d'expérience" },
      { value: "15+", label: "projets livrés" },
      { value: "100%", label: "responsive" },
    ],
  },
  about: {
    eyebrow: "$ cat about.md",
    title: "À propos",
    lead:
      "Développeur Web & Mobile freelance, orienté performance et sécurité.",
    paragraphs: [
      "Je conçois des applications full stack, du prototype à la mise en production, avec une attention particulière portée à la sécurité et à la robustesse du code.",
      "Passionné de cybersécurité, j'intègre les bonnes pratiques OWASP dès la phase de conception : validation des entrées, gestion des accès, chiffrement des données sensibles et audits réguliers.",
      "Je recherche des collaborations avec des startups, PME, entreprises et particuliers, au Bénin comme à l'international, pour construire des produits numériques fiables et bien pensés.",
    ],
    tags: [
      "Développeur Web & Mobile",
      "Passionné de cybersécurité",
      "Full Stack",
      "Applications performantes",
      "Solutions sécurisées",
      "Freelance",
    ],
    availableFor: "Ouvert aux collaborations",
    availableWith: ["Startups", "PME", "Entreprises", "Particuliers", "Clients internationaux"],
  },
  skills: {
    eyebrow: "$ ls skills/",
    title: "Compétences",
    lead: "Les technologies avec lesquelles je construis, du frontend à la sécurisation des applications.",
    categories: {
      frontend: "Frontend",
      backend: "Backend",
      tools: "Outils",
      security: "Cybersécurité",
    },
  },
  services: {
    eyebrow: "$ cat services.md",
    title: "Services",
    lead: "Ce que je peux prendre en charge, de l'idée au déploiement.",
  },
  projects: {
    eyebrow: "$ git log --projects",
    title: "Mes projets",
    lead: "Une sélection de réalisations et de projets d'entraînement — chacun avec son contexte réel.",
    demo: "Démo",
    code: "Code",
    typeLabels: {
      original: "Projet original",
      clone: "Clone d'entraînement",
      inspired: "Inspiré de",
    },
  },
  education: {
    eyebrow: "$ cat education.md",
    title: "Formation",
  },
  certifications: {
    eyebrow: "$ ls certifications/",
    title: "Certifications",
    view: "Voir le certificat",
    pending: "Certificat à venir",
  },
  github: {
    eyebrow: "$ curl api.github.com",
    title: "Activité GitHub",
    lead: "Statistiques mises à jour en direct depuis mon profil GitHub.",
    repos: "Dépôts publics",
    followers: "Abonnés",
    topLanguages: "Langages les plus utilisés",
    viewProfile: "Voir le profil GitHub",
    loading: "Chargement des statistiques...",
    error: "Impossible de charger les statistiques GitHub pour le moment.",
  },
  contact: {
    eyebrow: "$ send message",
    title: "Contact",
    lead: "Une idée de projet ? Écris-moi directement par email.",
    send: "M'écrire un email",
  },
  footer: {
    rights: "Tous droits réservés.",
    backToTop: "Retour en haut",
    quickLinks: "Navigation",
    built: "Conçu et développé avec Next.js, TypeScript et beaucoup de café.",
  },
  faq: {
    eyebrow: "$ man faq",
    title: "Questions fréquentes",
    items: [
      {
        q: "Quels types de projets acceptez-vous ?",
        a: "Sites vitrines, applications web full stack, plateformes React/Next.js, projets Laravel, audits de sécurité et missions de maintenance.",
      },
      {
        q: "Travaillez-vous avec des clients à l'international ?",
        a: "Oui, je collabore aussi bien avec des clients au Bénin qu'à l'étranger, en français comme en anglais, en full remote.",
      },
      {
        q: "Comment se déroule une collaboration ?",
        a: "Cadrage du besoin, proposition technique et budget, développement par itérations avec points réguliers, puis déploiement et accompagnement post-lancement.",
      },
      {
        q: "Proposez-vous des audits de sécurité ?",
        a: "Oui, j'effectue des revues de sécurité basées sur les recommandations OWASP pour identifier et corriger les vulnérabilités courantes.",
      },
    ],
  },
  notFound: {
    title: "404",
    subtitle: "Page introuvable",
    text: "La route que vous cherchez n'existe pas ou a été déplacée.",
    cta: "Retour à l'accueil",
  },
};

export default fr;
export type Messages = typeof fr;
