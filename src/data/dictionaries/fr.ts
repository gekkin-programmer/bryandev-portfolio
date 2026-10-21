import type { Dict } from "./index";

const fr: Dict = {
  meta: {
    title: "Bryan, Ingénieur Logiciel",
    description: "Portfolio de Bryan, Ingénieur Logiciel : projets, compétences et contact.",
    locale: "fr_FR",
  },
  nav: {
    home: "Accueil",
    about: "À propos",
    work: "Expérience",
    skills: "Compétences",
    projects: "Projets",
    why: "Pourquoi moi",
    testimonials: "Témoignages",
    contact: "Contact",
  },
  hero: {
    greeting: "Bonjour !",
    namePrefix: "Je suis ",
    name: "Pene Bryan",
    role: "Ingénieur Logiciel & Designer. J'adore construire des écosystèmes et aider les autres, très actif sur Telegram.",
  },
  about: {
    title: "À propos",
    desc: "J'ai commencé à construire une SaaS pendant mes études universitaires, et j'ai depuis participé à plusieurs hackathons. C'est là qu'est née ma passion pour résoudre de vrais problèmes à travers le code.",
  },
  skills: {
    titlePrefix: "mes ",
    titleAccent: "Compétences",
    items: [
      "Java / Spring Boot",
      "TypeScript / React",
      "HTML / CSS / Tailwind",
      "API REST",
      "Figma",
      "Git / GitHub",
      "CI/CD",
      "Ruby",
      "Rust",
    ],
  },
  projects: {
    titlePrefix: "mes ",
    titleAccent: "Projets",
    description:
      "Une sélection de travaux récents couvrant l'identité de marque, le design d'interface et la direction créative. Chaque projet reflète un défi unique et une approche sur mesure.",
    items: [
      { tag: "Développement frontend", name: "Djelica", image: "/projects/djelica.png", url: "https://djelica.com/" },
      { tag: "Développement fullstack", name: "Eazlypost", image: "/projects/eazlypost.png", url: "https://eazlypost.com/" },
      { tag: "UI/UX Design", name: "Bestcorp", image: "/projects/bestcorp.png", url: "https://www.bestcorpcmr.com/" },
    ],
  },
  experience: {
    title: "Mon Expérience de Travail",
    jobs: [
      {
        company: "HorebPay",
        dates: "nov 2024 - mai 2025",
        role: "Stagiaire Junior en Logiciel",
        desc: "Mon rôle principal était de lire le legacy code, notifier des bugs et aider à l'initialisation des projets Spring",
      },
      {
        company: "Business Agency SAS",
        dates: "juin 2025 - avril 2026",
        role: "Développeur Frontend",
        desc: "Transformer les maquettes Figma en code ainsi qu'intégrer les API tout en respectant les deadlines",
      },
      {
        company: "BestCorp",
        dates: "fév 2026 - Présent",
        role: "Designer Frontend Principal",
        desc: "Établir le design system, l'architecture du code et guider les sprints",
      },
    ],
  },
  whyme: {
    titlePrefix: "Pourquoi me ",
    titleAccent: "recruter ?",
    desc: "Je m'assure que le client est satisfait du projet et j'offre un SAV gratuit",
    stats: [
      { value: "9+", label: "Projets réalisés" },
      { value: "15+", label: "Clients satisfaits" },
    ],
  },
  testimonials: {
    titlePrefix: "Des Témoignages Qui Parlent de Mes ",
    titleAccent: "Résultats",
    desc: "Des retours authentiques de clients et de coéquipiers avec qui j'ai travaillé, sur la qualité du design, la livraison et la collaboration.",
    items: [
      {
        name: "Borel",
        role: "Lead Developer, Horeb Pay",
        image: "",
        quote: "Très bon en design, j'en avais besoin dans mon équipe.",
        rating: 4,
      },
      {
        name: "Christian Mbouyem Ngounou",
        role: "CEO, BestCorp",
        image: "/testimonials/christian.jpg",
        quote: "Fait attention aux détails et n'est jamais à court d'idées intéressantes.",
        rating: 5,
      },
      {
        name: "James",
        role: "Entrepreneur",
        image: "",
        quote: "J'avais un projet très complexe à réaliser mais je ne savais pas comment l'illustrer, Bryan a parfaitement compris mon souci.",
        rating: 5,
      },
    ],
  },
  contact: {
    desc: "Envie de travailler ensemble ? Contactez-moi par e-mail ou téléphone, je réponds rapidement.",
  },
  footer: {
    title: "Connectons-nous",
    hireMe: "Me recruter",
    contactTitle: "Contact",
    phone: "+237 640684417",
    email: "nkouambrayan@gmail.com",
    rights: "Copyright© 2026 Pene Nkouam Bryan. Tous droits réservés.",
  },
  language: {
    label: "Langue",
    switchTo: "Passer en anglais",
  },
};

export default fr;
