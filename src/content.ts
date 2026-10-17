import portrait from "@/assets/karl-portrait.jpg";
import boat from "@/assets/projects/boat-leviathan.jpg";
import droneWiring from "@/assets/projects/drone-wiring.jpg";
import phoneHolder from "@/assets/projects/phone-holder-cad.jpg";
import room from "@/assets/projects/room-cad.jpg";

export type Lang = "fr" | "en";

/** Non-breaking space, used in French figures ("15 %", "34,5 s"). */
const NB = " ";

export const SITE_URL = "https://karl-ngueko-portfolio.lovable.app";
export const EMAIL = "karl.ngueko@2028.icam.fr";
export const LINKEDIN_URL = "https://www.linkedin.com/in/karl-friedrich-ngueko-tchindeu-043b85272";
export const GITHUB_URL = "https://github.com/karlson148305";
export const PORTRAIT = { src: portrait, width: 603, height: 800 };

export const CV_FILES = {
  fr: { href: "/cv/Karl-Friedrich-Ngueko-Tchindeu-CV-FR.pdf", filename: "Karl-Friedrich-Ngueko-Tchindeu-CV-FR.pdf" },
  en: { href: "/cv/Karl-Friedrich-Ngueko-Tchindeu-CV-EN.pdf", filename: "Karl-Friedrich-Ngueko-Tchindeu-CV-EN.pdf" },
} as const;

export interface Result {
  value: string;
  label: string;
  source: string;
}

export interface Pillar {
  number: string;
  title: string;
  text: string;
  tags: { label: string; learning?: boolean }[];
}

export interface Job {
  period: string;
  place: string;
  kind: string;
  role: string;
  org: string;
  badge: { label: string; current?: boolean };
  summary?: string;
  bullets?: string[];
  featured?: boolean;
}

export interface FlowStep {
  step?: string;
  label: string;
  highlight?: boolean;
}

export interface EarlierProject {
  title: string;
  text: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  alt: string;
  href: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
  learning?: boolean;
}

export interface Content {
  meta: { title: string; description: string; path: string };
  skipLink: string;
  ids: {
    home: string;
    profile: string;
    experience: string;
    projects: string;
    skills: string;
    education: string;
    contact: string;
  };
  header: {
    navLabel: string;
    nav: { id: keyof Content["ids"]; label: string }[];
    langLabel: string;
    cvButton: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    eyebrow: string;
    lead: string;
    sub: string;
    ctaCv: string;
    ctaContact: string;
    boardLabel: string;
    boardTitle: string;
    boardCountries: string;
    results: Result[];
    boardFooter: string;
  };
  profile: {
    eyebrow: string;
    title: string;
    text: string;
    note: string;
    portraitAlt: string;
    pillars: Pillar[];
  };
  experience: {
    eyebrow: string;
    title: string;
    jobs: Job[];
  };
  project: {
    eyebrow: string;
    title: string;
    question: string;
    methods: string;
    kpisLabel: string;
    kpis: { value: string; label: string; highlight?: boolean }[];
    flow: FlowStep[];
    lines: string[];
    flowEnd: FlowStep;
    flowLabel: string;
    flowCaption: string;
    earlierTitle: string;
    earlierIntro: string;
    githubLink: string;
    earlier: EarlierProject[];
  };
  skills: {
    eyebrow: string;
    title: string;
    groups: SkillGroup[];
  };
  education: {
    eyebrow: string;
    title: string;
    degreeMeta: string;
    splitLabel: string;
    split: { share: string; title: string; text: string; tone: "ink" | "paper" | "signal" }[];
    bachelor: { title: string; text: string; period: string };
    languages: { title: string; lines: string[]; certification: string };
  };
  contact: {
    eyebrow: string;
    title: string;
    text: string;
    cvLinks: { label: string; lang: Lang }[];
    location: string;
    copyright: string;
  };
  notFound: { title: string; text: string; back: string };
}

const projectImages = {
  boat: { image: boat, imageWidth: 1200, imageHeight: 900 },
  drone: { image: droneWiring, imageWidth: 607, imageHeight: 1080 },
  phone: { image: phoneHolder, imageWidth: 700, imageHeight: 600 },
  room: { image: room, imageWidth: 852, imageHeight: 797 },
};

const repos = {
  boat: `${GITHUB_URL}/Boat-Project`,
  drone: `${GITHUB_URL}/drone-project`,
  phone: `${GITHUB_URL}/phone-holder`,
  room: `${GITHUB_URL}/Room-Design-Leisure-`,
};

export const content: Record<Lang, Content> = {
  fr: {
    meta: {
      title: "Karl Friedrich Ngueko Tchindeu · Lean et industrie numérique",
      description:
        "Élève-ingénieur Icam en Systèmes numériques industriels et apprenti en excellence opérationnelle à la RATP : Lean, maintenance et données au service de la performance industrielle.",
      path: "/",
    },
    skipLink: "Aller au contenu",
    ids: {
      home: "accueil",
      profile: "profil",
      experience: "parcours",
      projects: "projets",
      skills: "competences",
      education: "formation",
      contact: "contact",
    },
    header: {
      navLabel: "Navigation principale",
      nav: [
        { id: "profile", label: "Profil" },
        { id: "experience", label: "Parcours" },
        { id: "projects", label: "Projets" },
        { id: "skills", label: "Compétences" },
        { id: "contact", label: "Contact" },
      ],
      langLabel: "Langue",
      cvButton: "CV (PDF)",
      openMenu: "Ouvrir le menu",
      closeMenu: "Fermer le menu",
    },
    hero: {
      eyebrow: "Élève-ingénieur · Icam Strasbourg · Systèmes numériques industriels",
      lead: "Lean et industrie numérique : j'aide les ateliers à mieux tourner, avec les équipes du terrain et les données qu'elles produisent.",
      sub: "Apprenti ingénieur en excellence opérationnelle à la RATP, en alternance à l'Icam de 2026 à 2028.",
      ctaCv: "Télécharger mon CV",
      ctaContact: "Me contacter",
      boardLabel: "Résultats de stage",
      boardTitle: "Résultats de stage",
      boardCountries: "3 pays",
      results: [
        { value: `−15${NB}%`, label: "de coûts de maintenance", source: "Schwing Stetter · Inde · 2025" },
        { value: `+8${NB}%`, label: "de productivité", source: "Nohi Chocolats · Cameroun · 2024" },
        { value: `−5${NB}%`, label: "d'arrêts machines", source: "Nohi Chocolats · Cameroun · 2024" },
      ],
      boardFooter: "Cameroun, Inde, France : études et terrain en français et en anglais.",
    },
    profile: {
      eyebrow: "01 / Profil",
      title: "Là où l'amélioration continue rencontre le numérique",
      text: "Sur le terrain, je déploie les outils Lean avec les techniciens et leurs encadrants. À l'Icam, j'apprends à connecter, mesurer et piloter les systèmes de production. Mon objectif : devenir responsable amélioration continue.",
      note: "Formé au Cameroun, en Inde et en France, je travaille aussi bien en français qu'en anglais.",
      portraitAlt: "Portrait de Karl Friedrich Ngueko Tchindeu",
      pillars: [
        {
          number: "01",
          title: "Performance industrielle",
          text: "Lean, qualité et maintenance : 5S, TPM, VSM, Kaizen, standards de travail, management visuel.",
          tags: [{ label: "Pratiqué en entreprise" }],
        },
        {
          number: "02",
          title: "Numérique et données",
          text: "Suivi d'indicateurs sous Excel et Power BI. En formation : IoT industriel, acquisition et gestion de données, cybersécurité industrielle, IA d'aide à la décision.",
          tags: [{ label: "Pratiqué" }, { label: "En formation · SNI", learning: true }],
        },
        {
          number: "03",
          title: "Conduite du changement",
          text: "Chantiers Kaizen et groupes de travail avec la production et la qualité, résolution de problèmes en équipe.",
          tags: [{ label: "Pratiqué en entreprise" }],
        },
      ],
    },
    experience: {
      eyebrow: "02 / Parcours",
      title: "Expériences",
      jobs: [
        {
          period: "sept. 2026 – aujourd'hui",
          place: "Paris, France",
          kind: "Alternance",
          role: "Apprenti ingénieur · Excellence opérationnelle",
          org: "RATP · Direction du matériel roulant",
          badge: { label: "Mission en cours", current: true },
          summary:
            "Déploiement de la démarche Lean dans la maintenance. Rythme : deux semaines à l'Icam, deux semaines en entreprise. Résultats chiffrés à venir.",
          featured: true,
        },
        {
          period: "mai – août 2025",
          place: "Inde",
          kind: "Stage",
          role: "Stagiaire ingénieur · Lean Manufacturing",
          org: "Schwing Stetter India · équipements pour le béton",
          badge: { label: `−15${NB}% coûts de maintenance` },
          bullets: [
            `Actions de maintenance préventive et corrective : coûts de maintenance réduits de 15${NB}%.`,
            "Cartographie de la chaîne de valeur (VSM) : attentes, déplacements inutiles et déséquilibres de charge mis en évidence.",
            "Chantiers Kaizen avec la production et la qualité (5 pourquoi, Ishikawa).",
            "5S et standards de travail aux postes ; suivi des KPI sous Excel et contribution aux tableaux de bord Power BI.",
          ],
        },
        {
          period: "janv. – mars 2024",
          place: "Cameroun",
          kind: "Stage",
          role: "Stagiaire assistant de production",
          org: "Nohi Chocolats · chocolaterie industrielle",
          badge: { label: `+8${NB}% productivité` },
          bullets: [
            `Productivité augmentée de 8${NB}% grâce à des actions d'amélioration menées en PDCA.`,
            `Arrêts machines réduits de 5${NB}% par l'analyse des causes des pannes (5 pourquoi, Ishikawa).`,
            "Cartographie des flux (VSM) et réaménagement des postes pour l'ergonomie et la fluidité.",
          ],
        },
      ],
    },
    project: {
      eyebrow: "03 / Projet phare · Icam 4e année · 2026",
      title: "Kitting en amont de deux lignes d'assemblage : étude de faisabilité",
      question:
        "Projet en binôme, modules Industrie 5.0 et OptiProd. La question : peut-on alimenter deux lignes d'assemblage de chariots en kits complets, sans pièces en bord de ligne, dans un laboratoire à surface fixe ?",
      methods:
        "Méthodes : chronométrage MTM-UAS, équilibrage des lignes et simogramme, dimensionnement des stocks tampons, calcul de rentabilité (VAN).",
      kpisLabel: "Chiffres clés de l'étude",
      kpis: [
        { value: `1,5${NB}M`, label: "chariots par an" },
        { value: `34,5${NB}s`, label: "temps de cycle" },
        { value: `81${NB}%`, label: `du labo occupé (≈${NB}228${NB}m²)` },
        { value: `7,5${NB}mois`, label: "de retour sur investissement", highlight: true },
      ],
      flow: [
        { step: "Étape 1", label: "Magasin pièces" },
        { step: "Étape 2", label: "Picking" },
        { step: "Étape 3", label: "Kitting · kits complets", highlight: true },
      ],
      lines: ["Ligne 1 · 6 postes", "Ligne 2 · 7 postes"],
      flowEnd: { step: "Fin de ligne", label: "Contrôle caméra et emballage" },
      flowLabel: "Schéma du flux étudié",
      flowCaption: "Flux étudié : les pièces quittent le magasin en kits complets ; seuls les outils restent en bord de ligne.",
      earlierTitle: "Projets antérieurs",
      earlierIntro: "Conception mécanique et prototypage, avant la spécialisation SNI.",
      githubLink: "Voir sur GitHub",
      earlier: [
        {
          title: "Bateau télécommandé « Leviathan »",
          text: "Système de gouvernail : analyse fonctionnelle et contraintes, en équipe de 7. Commande moteur sous Arduino.",
          alt: "Maquette du bateau Leviathan, coque imprimée en 3D peinte en rouge et jaune",
          href: repos.boat,
          ...projectImages.boat,
        },
        {
          title: "Drone quadricoptère",
          text: "Bras optimisé sous SolidWorks, intégration électronique, automatisation en Python (DroneKit, simulation SITL).",
          alt: "Câblage du contrôleur de vol d'un drone quadricoptère sur l'établi",
          href: repos.drone,
          ...projectImages.drone,
        },
        {
          title: "Support de téléphone orientable",
          text: "Prototype conçu à trois sous SolidWorks, pièces imprimées en 3D.",
          alt: "Rendu SolidWorks du support de téléphone orientable",
          href: repos.phone,
          ...projectImages.phone,
        },
        {
          title: "Chambre modélisée en 3D",
          text: "Projet personnel d'un mois : une pièce entière modélisée à l'échelle sous SolidWorks.",
          alt: "Rendu SolidWorks d'une chambre modélisée à l'échelle",
          href: repos.room,
          ...projectImages.room,
        },
      ],
    },
    skills: {
      eyebrow: "04 / Compétences",
      title: "Outils et méthodes",
      groups: [
        {
          title: "Lean et excellence opérationnelle",
          items: ["Kaizen", "5S", "VSM", "TPM", "Kanban", "SMED", "PDCA", "Standards de travail", "Management visuel", "Gemba"],
        },
        { title: "Résolution de problèmes et qualité", items: ["5 pourquoi", "Ishikawa", "8D", "A3", "AMDEC", "Pareto"] },
        {
          title: "Maintenance et opérations",
          items: ["Maintenance préventive", "Analyse des goulots", "Gestion des stocks", "Suivi des KPI"],
        },
        { title: "Gestion de projet", items: ["Agile / Scrum", "Gantt", "RACI", "WBS"] },
        {
          title: "Logiciels et code",
          items: ["Excel (tableaux de bord KPI)", "Power BI", "Microsoft Project", "SolidWorks", "Python et Arduino (projets)"],
        },
        {
          title: "Numérique industriel · en formation (SNI)",
          items: ["IoT industriel", "Acquisition et gestion de données", "Cybersécurité industrielle", "IA d'aide à la décision"],
          learning: true,
        },
      ],
    },
    education: {
      eyebrow: "05 / Formation",
      title: "Ingénieur Icam, spécialité Systèmes numériques industriels",
      degreeMeta:
        "Icam, campus de Strasbourg · sept. 2026 – mai 2028 (prévu) · cycle ingénieur par apprentissage, accrédité CTI",
      splitLabel: `Répartition du programme : industrie 30${NB}%, management et changement 30${NB}%, numérique 40${NB}%`,
      split: [
        { share: `30${NB}%`, title: "Industrie :", text: "Lean, qualité, maintenance et performance industrielle.", tone: "ink" },
        { share: `30${NB}%`, title: "Management :", text: "pilotage d'équipes et accompagnement du changement.", tone: "paper" },
        {
          share: `40${NB}%`,
          title: "Numérique :",
          text: "IoT industriel, acquisition et gestion de données, cybersécurité industrielle, IA d'aide à la décision.",
          tone: "signal",
        },
      ],
      bachelor: {
        title: "Bachelor international en ingénierie généraliste",
        text: "Réseau Icam : Institut UCAC-Icam, Douala (3 ans) et LICET, Chennai (1 an).",
        period: "sept. 2022 – mai 2026",
      },
      languages: {
        title: "Langues et certification",
        lines: ["Français : langue maternelle", "Anglais : B2, niveau professionnel (un an d'études et de stage en anglais)"],
        certification: "Certification Applied Scrum for Agile Project Management",
      },
    },
    contact: {
      eyebrow: "06 / Contact",
      title: "Me contacter",
      text: "Une question sur un projet, ou envie d'échanger sur le Lean et l'industrie numérique ? Écrivez-moi.",
      cvLinks: [
        { label: "CV en français (PDF)", lang: "fr" },
        { label: "CV en anglais (PDF)", lang: "en" },
      ],
      location: "Paris et Strasbourg, France",
      copyright: "© 2026 Karl Friedrich Ngueko Tchindeu",
    },
    notFound: {
      title: "Page introuvable",
      text: "Cette adresse ne correspond à aucune page du portfolio.",
      back: "Retour à l'accueil",
    },
  },

  en: {
    meta: {
      title: "Karl Friedrich Ngueko Tchindeu · Lean and digital industry",
      description:
        "Icam engineering student in Industrial Digital Systems and operational excellence apprentice at RATP: Lean, maintenance and data for better industrial performance.",
      path: "/en",
    },
    skipLink: "Skip to content",
    ids: {
      home: "home",
      profile: "profile",
      experience: "experience",
      projects: "projects",
      skills: "skills",
      education: "education",
      contact: "contact",
    },
    header: {
      navLabel: "Main navigation",
      nav: [
        { id: "profile", label: "Profile" },
        { id: "experience", label: "Experience" },
        { id: "projects", label: "Projects" },
        { id: "skills", label: "Skills" },
        { id: "contact", label: "Contact" },
      ],
      langLabel: "Language",
      cvButton: "Résumé (PDF)",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    hero: {
      eyebrow: "Engineering student · Icam Strasbourg · Industrial digital systems",
      lead: "Lean meets digital industry: I help production sites run better, with the teams on the floor and the data they produce.",
      sub: "Operational excellence engineering apprentice at RATP, the Paris public transit operator, in a work-study program with Icam from 2026 to 2028.",
      ctaCv: "Download my résumé",
      ctaContact: "Get in touch",
      boardLabel: "Internship results",
      boardTitle: "Internship results",
      boardCountries: "3 countries",
      results: [
        { value: "−15%", label: "maintenance costs", source: "Schwing Stetter · India · 2025" },
        { value: "+8%", label: "productivity", source: "Nohi Chocolats · Cameroon · 2024" },
        { value: "−5%", label: "machine stoppages", source: "Nohi Chocolats · Cameroon · 2024" },
      ],
      boardFooter: "Cameroon, India, France: studies and shop-floor work in French and English.",
    },
    profile: {
      eyebrow: "01 / Profile",
      title: "Where continuous improvement meets digital",
      text: "On the shop floor, I deploy Lean tools with technicians and their supervisors. At Icam, I'm learning to connect, measure and steer production systems. My goal: to become a continuous improvement manager.",
      note: "Trained in Cameroon, India and France, I work equally well in French and English.",
      portraitAlt: "Portrait of Karl Friedrich Ngueko Tchindeu",
      pillars: [
        {
          number: "01",
          title: "Industrial performance",
          text: "Lean, quality and maintenance: 5S, TPM, VSM, Kaizen, standard work, visual management.",
          tags: [{ label: "Applied in industry" }],
        },
        {
          number: "02",
          title: "Digital and data",
          text: "KPI tracking in Excel and Power BI. In training: industrial IoT, data acquisition and management, industrial cybersecurity, AI for decision support.",
          tags: [{ label: "Applied" }, { label: "In training · SNI", learning: true }],
        },
        {
          number: "03",
          title: "Change management",
          text: "Kaizen events and working groups with production and quality teams, team problem solving.",
          tags: [{ label: "Applied in industry" }],
        },
      ],
    },
    experience: {
      eyebrow: "02 / Experience",
      title: "Experience",
      jobs: [
        {
          period: "Sep 2026 – present",
          place: "Paris, France",
          kind: "Work-study",
          role: "Engineering apprentice · Operational excellence",
          org: "RATP Group · Rolling stock department",
          badge: { label: "In progress", current: true },
          summary:
            "Deploying Lean practices in maintenance. Schedule: two weeks at Icam, two weeks at the company. Results to come.",
          featured: true,
        },
        {
          period: "May – Aug 2025",
          place: "India",
          kind: "Internship",
          role: "Lean manufacturing engineering intern",
          org: "Schwing Stetter India · concrete machinery manufacturer",
          badge: { label: "−15% maintenance costs" },
          bullets: [
            "Preventive and corrective maintenance actions that cut maintenance costs by 15%.",
            "Value stream mapping (VSM) that exposed waiting time, excess motion and unbalanced workloads.",
            "Kaizen events with production and quality teams (5 Whys, Ishikawa).",
            "5S and standard work at workstations; KPI tracking in Excel and contributions to Power BI dashboards.",
          ],
        },
        {
          period: "Jan – Mar 2024",
          place: "Cameroon",
          kind: "Internship",
          role: "Industrial production assistant intern",
          org: "Nohi Chocolats · chocolate manufacturer",
          badge: { label: "+8% productivity" },
          bullets: [
            "Raised productivity by 8% through structured improvement actions using PDCA.",
            "Reduced machine stoppages by 5% through root cause analysis of breakdowns (5 Whys, Ishikawa).",
            "Mapped production flows (VSM) and redesigned workstations for ergonomics and flow.",
          ],
        },
      ],
    },
    project: {
      eyebrow: "03 / Featured project · Icam, 4th year · 2026",
      title: "Kitting upstream of two assembly lines: a feasibility study",
      question:
        "Two-person project for the Industry 5.0 and OptiProd modules. The question: can two cart assembly lines be fed with complete kits, with no parts at the line side, inside a lab with a fixed footprint?",
      methods:
        "Methods: MTM-UAS time study, line balancing and multi-activity chart, buffer stock sizing, profitability analysis (NPV).",
      kpisLabel: "Key figures from the study",
      kpis: [
        { value: "1.5M", label: "carts per year" },
        { value: `34.5${NB}s`, label: "cycle time" },
        { value: "81%", label: `of the lab used (≈${NB}228${NB}m²)` },
        { value: `7.5${NB}months`, label: "payback period", highlight: true },
      ],
      flow: [
        { step: "Step 1", label: "Parts store" },
        { step: "Step 2", label: "Picking" },
        { step: "Step 3", label: "Kitting · complete kits", highlight: true },
      ],
      lines: ["Line 1 · 6 stations", "Line 2 · 7 stations"],
      flowEnd: { step: "End of line", label: "Camera inspection and packing" },
      flowLabel: "Diagram of the studied flow",
      flowCaption: "Studied flow: parts leave the store as complete kits; only tools stay at the line side.",
      earlierTitle: "Earlier projects",
      earlierIntro: "Mechanical design and prototyping, before the SNI specialization.",
      githubLink: "View on GitHub",
      earlier: [
        {
          title: "Remote-controlled boat “Leviathan”",
          text: "Rudder system: functional and constraint analysis, in a team of 7. Arduino motor control.",
          alt: "The Leviathan boat model, a 3D-printed hull painted red and yellow",
          href: repos.boat,
          ...projectImages.boat,
        },
        {
          title: "Quadcopter drone",
          text: "Arm optimized in SolidWorks, electronics integration, Python automation (DroneKit, SITL simulation).",
          alt: "Wiring the flight controller of a quadcopter drone on the workbench",
          href: repos.drone,
          ...projectImages.drone,
        },
        {
          title: "Adjustable phone holder",
          text: "Prototype designed by a team of three in SolidWorks, with 3D-printed parts.",
          alt: "SolidWorks render of the adjustable phone holder",
          href: repos.phone,
          ...projectImages.phone,
        },
        {
          title: "Bedroom modeled in 3D",
          text: "One-month personal project: a full room modeled to scale in SolidWorks.",
          alt: "SolidWorks render of a bedroom modeled to scale",
          href: repos.room,
          ...projectImages.room,
        },
      ],
    },
    skills: {
      eyebrow: "04 / Skills",
      title: "Tools and methods",
      groups: [
        {
          title: "Lean and operational excellence",
          items: ["Kaizen", "5S", "VSM", "TPM", "Kanban", "SMED", "PDCA", "Standard work", "Visual management", "Gemba"],
        },
        { title: "Problem solving and quality", items: ["5 Whys", "Ishikawa", "8D", "A3", "FMEA", "Pareto"] },
        {
          title: "Maintenance and operations",
          items: ["Preventive maintenance", "Bottleneck analysis", "Inventory management", "KPI tracking"],
        },
        { title: "Project management", items: ["Agile / Scrum", "Gantt", "RACI", "WBS"] },
        {
          title: "Software and code",
          items: ["Excel (KPI dashboards)", "Power BI", "Microsoft Project", "SolidWorks", "Python and Arduino (projects)"],
        },
        {
          title: "Industrial digital · in training (SNI)",
          items: ["Industrial IoT", "Data acquisition and management", "Industrial cybersecurity", "AI for decision support"],
          learning: true,
        },
      ],
    },
    education: {
      eyebrow: "05 / Education",
      title: "Icam engineering degree, Industrial Digital Systems",
      degreeMeta:
        "Icam, Strasbourg campus · Sep 2026 – May 2028 (expected) · master's-level engineering degree, CTI-accredited, apprenticeship program",
      splitLabel: "Program split: industry 30%, management and change 30%, digital 40%",
      split: [
        { share: "30%", title: "Industry:", text: "Lean, quality, maintenance and industrial performance.", tone: "ink" },
        { share: "30%", title: "Management:", text: "team leadership and change management.", tone: "paper" },
        {
          share: "40%",
          title: "Digital:",
          text: "industrial IoT, data acquisition and management, industrial cybersecurity, AI for decision support.",
          tone: "signal",
        },
      ],
      bachelor: {
        title: "International Bachelor's in General Engineering",
        text: "Icam network: Institut UCAC-Icam, Douala (3 years) and LICET, Chennai (1 year).",
        period: "Sep 2022 – May 2026",
      },
      languages: {
        title: "Languages and certification",
        lines: ["French: native", "English: B2, professional working proficiency (one year of study and internship in English)"],
        certification: "Applied Scrum for Agile Project Management certification",
      },
    },
    contact: {
      eyebrow: "06 / Contact",
      title: "Get in touch",
      text: "A question about a project, or want to talk Lean and digital industry? Write to me.",
      cvLinks: [
        { label: "Résumé in English (PDF)", lang: "en" },
        { label: "Résumé in French (PDF)", lang: "fr" },
      ],
      location: "Paris and Strasbourg, France",
      copyright: "© 2026 Karl Friedrich Ngueko Tchindeu",
    },
    notFound: {
      title: "Page not found",
      text: "This address doesn't match any page of the portfolio.",
      back: "Back to the home page",
    },
  },
};
