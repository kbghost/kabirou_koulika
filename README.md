# Portfolio — Développeur Web & Mobile

Portfolio professionnel bilingue (FR/EN), construit avec Next.js 15, React 19, TypeScript, Tailwind CSS, Framer Motion et GSAP.

Thème visuel : dark mode premium avec identité "terminal / cybersécurité" (glassmorphism, dégradés cyan → violet, accents monospace type `$ whoami`).

---

## 1. Installation

Prérequis : Node.js 18.18+ (idéalement 20+).

```bash
npm install
npm run dev
```

Le site est accessible sur `http://localhost:3000`.

```bash
npm run build   # build de production
npm run start   # lance le build de production en local
npm run lint    # vérifie le code
```

> **Note réseau** : `next/font/google` télécharge les polices (Space Grotesk, Inter, JetBrains Mono) depuis Google Fonts au moment du build. Une connexion internet est nécessaire pour `npm run build`. En local avec `npm run dev`, cela se fait aussi automatiquement.

---

## 2. Personnalisation rapide

Toutes les informations personnelles sont centralisées dans **un seul fichier** :

```
src/lib/site-config.ts
```

Tu y trouveras (avec des `// TODO`) :
- Nom, rôle, email, localisation
- Liens GitHub, LinkedIn, WhatsApp
- Compétences et niveaux de maîtrise
- Projets (voir section 3 ci-dessous — important)
- Services proposés
- Formation
- Certifications

Les textes traduits (FR/EN) sont dans :
```
src/messages/fr.ts
src/messages/en.ts
```

### Images de projets
Tes 4 captures d'écran (GoGazNow, Octopus Energy, Cowboy, Lalamove) sont déjà intégrées dans `public/projects/` et affichées automatiquement dans les cartes projets. Pour changer une image : remplace le fichier correspondant dans `public/projects/` (même nom) ou modifie le champ `image` dans `src/lib/site-config.ts`. Si une image venait à manquer, la carte revient automatiquement à un mockup généré en CSS (aucun lien cassé).

### Certificats
Dépose tes PDF dans `public/certifications/` et renseigne `fileUrl` dans `src/lib/site-config.ts`.

---

## 3. ⚠️ Important — À propos des projets "Octopus Energy", "Cowboy" et "Lalamove"

Ces trois entrées sont pré-configurées comme des **clones d'entraînement**, clairement étiquetés comme tels dans l'interface (badge "Clone d'entraînement" + mention "projet non affilié"), conformément à ta demande initiale de ne jamais laisser penser que tu as développé les sites officiels.

**Avant de mettre le site en ligne, tu dois** :
1. Confirmer que tu as bien réalisé ces clones (ou les retirer si ce n'est pas le cas — édite `src/lib/site-config.ts`, tableau `projects`).
2. Remplacer les `githubUrl` placeholder par les vrais liens vers tes dépôts.
3. Pour **GoGazNow**, vérifier que la mention de la distinction obtenue par le fondateur est exacte et sourcée avant publication — je l'ai formulée de façon prudente ("distingué dans le secteur de la pêche") sans invoquer de prix spécifique que je ne peux pas vérifier.

---

## 4. Contact

La section Contact ne contient plus de formulaire : c'est volontaire, sur ta demande. Elle affiche uniquement une carte avec ton email (**Kabiroukoulika@gmail.com**), cliquable et qui ouvre directement l'application mail du visiteur (lien `mailto:`). Aucune configuration nécessaire — ça fonctionne immédiatement, sans service tiers.

Pour changer l'adresse email affichée partout sur le site (cette section, le footer, le JSON-LD SEO), modifie simplement `siteConfig.email` dans `src/lib/site-config.ts`.

---

## 5. Statistiques GitHub

La section GitHub (`src/components/sections/github-stats.tsx`) interroge l'API publique GitHub (`api.github.com`) côté client, sans clé nécessaire, à partir de `siteConfig.githubUsername`. Aucune configuration requise, mais l'API publique est limitée à 60 requêtes/heure par IP (largement suffisant pour un usage normal).

---

## 6. Bouton WhatsApp

Déjà configuré avec ton numéro (`+229 01 47 84 95 77`). Un clic ouvre directement une conversation WhatsApp. Pour le changer, modifie `siteConfig.whatsapp` dans `src/lib/site-config.ts` (format `https://wa.me/229XXXXXXXXX`, sans le `+`). Pour le désactiver complètement, commente `<WhatsappButton />` dans `src/app/layout.tsx`.

---

## 7. SEO

Déjà en place :
- Metadata complètes (title, description, keywords)
- Open Graph + Twitter Cards avec image générée dynamiquement (`src/app/opengraph-image.tsx`)
- `robots.ts` et `sitemap.ts` générés automatiquement
- JSON-LD (schema.org `Person`) dans `layout.tsx`
- Favicon SVG

**Avant mise en production**, mets à jour `siteConfig.url` avec ton vrai nom de domaine — plusieurs balises SEO (canonical, Open Graph, sitemap) en dépendent.

---

## 8. Déploiement sur Vercel

### Option A — via l'interface Vercel
1. Pousse le projet sur GitHub
2. Va sur [vercel.com/new](https://vercel.com/new), importe le dépôt
3. Framework détecté automatiquement : **Next.js**
4. Ajoute les variables d'environnement (`NEXT_PUBLIC_EMAILJS_*`) dans Settings → Environment Variables
5. Déploie

### Option B — via la CLI
```bash
npm i -g vercel
vercel
vercel --prod
```

### Nom de domaine personnalisé
Une fois déployé, ajoute ton domaine dans Vercel → Settings → Domains, puis mets à jour `siteConfig.url` dans le code et redéploie pour que le SEO soit cohérent.

---

## 9. Structure du projet

```
src/
├── app/
│   ├── layout.tsx          # Layout racine, metadata SEO, polices
│   ├── page.tsx             # Assemble toutes les sections
│   ├── not-found.tsx        # Page 404 personnalisée
│   ├── opengraph-image.tsx  # Image OG générée dynamiquement
│   ├── sitemap.ts
│   ├── robots.ts
│   └── globals.css          # Variables de thème, glassmorphism, curseur
├── components/
│   ├── layout/               # Navbar, Footer, curseur, loading screen...
│   ├── sections/              # Hero, About, Skills, Projects, Contact...
│   └── ui/                    # Button, GlassCard, Badge, SectionHeading
├── lib/
│   ├── site-config.ts         # ⭐ Toutes tes données personnelles
│   ├── i18n-context.tsx        # Contexte FR/EN
│   ├── theme-context.tsx       # Contexte clair/sombre
│   └── utils.ts
└── messages/
    ├── fr.ts
    └── en.ts
```

---

## 10. Accessibilité & performance

- Respect de `prefers-reduced-motion` (animations désactivées automatiquement)
- Contrastes conformes en mode sombre et clair
- Focus visible au clavier sur tous les éléments interactifs
- Headers de sécurité (`X-Frame-Options`, `X-Content-Type-Options`...) dans `next.config.ts`
- Images optimisées via `next/image` là où des vraies images sont utilisées

Pour viser Lighthouse 95+, pense à :
- Ajouter tes vraies images de projets en formats WebP/AVIF optimisés
- Renseigner un vrai `siteConfig.url` en HTTPS
- Générer une vraie image `apple-touch-icon` en plus du favicon SVG

---

## 11. Fonctionnalités bonus incluses

- **Compteur animé** sur les statistiques du Hero (déclenché au scroll)
- **Particules discrètes** en canvas 2D léger dans le Hero (pas de librairie 3D lourde, pour préserver les perfs)
- **Témoignages** avec effet de tilt 3D léger au survol (`src/components/sections/testimonials.tsx`) — placeholders à remplacer par de vrais avis clients
- **Timeline animée** pour la Formation, extensible (`educationTimeline` dans `site-config.ts`)
- **Bouton WhatsApp flottant** déjà relié à ton numéro
- **Easter egg discret** : tape le Konami code (↑ ↑ ↓ ↓ ← → ← → B A) pour débloquer un petit message — n'affecte jamais l'UX normale

## 12. Ce qui a été volontairement simplifié

- **i18n** : un contexte React léger plutôt que `next-intl`, pour rester simple et sans configuration serveur supplémentaire (le contenu FR/EN reste 100% éditable dans `src/messages/`).
- **GSAP** : utilisé pour l'animation signature du titre du Hero (reveal caractère par caractère) ; Framer Motion couvre le reste des animations pour éviter d'alourdir le bundle avec deux librairies redondantes.
- **Images de projets** : mockups CSS par défaut plutôt que des captures d'écran factices, pour livrer un projet qui build sans dépendre de fichiers binaires à fournir.

Bon lancement ! 🚀
