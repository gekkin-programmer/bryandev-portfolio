const en: {
  meta: { title: string; description: string; locale: string };
  nav: {
    home: string;
    about: string;
    work: string;
    skills: string;
    projects: string;
    why: string;
    testimonials: string;
    contact: string;
  };
  hero: {
    greeting: string;
    namePrefix: string;
    name: string;
    role: string;
  };
  about: { title: string; desc: string };
  skills: { titlePrefix: string; titleAccent: string; items: string[] };
  projects: {
    titlePrefix: string;
    titleAccent: string;
    description: string;
    items: { tag: string; name: string; image: string; url: string }[];
  };
  experience: {
    title: string;
    jobs: { company: string; dates: string; role: string; desc: string }[];
  };
  whyme: {
    titlePrefix: string;
    titleAccent: string;
    desc: string;
    stats: { value: string; label: string }[];
  };
  testimonials: {
    titlePrefix: string;
    titleAccent: string;
    desc: string;
    items: { name: string; role: string; image: string; quote: string; rating: number }[];
  };
  contact: { desc: string };
  footer: {
    title: string;
    hireMe: string;
    contactTitle: string;
    phone: string;
    email: string;
    rights: string;
  };
  language: { label: string; switchTo: string };
} = {
  meta: {
    title: "Bryan, Software Engineer",
    description: "Portfolio of Bryan, Software Engineer: projects, skills and contact.",
    locale: "en_US",
  },
  nav: {
    home: "Home",
    about: "About",
    work: "Experience",
    skills: "Skills",
    projects: "Projects",
    why: "Why me",
    testimonials: "Testimonials",
    contact: "Contact",
  },
  hero: {
    greeting: "Hello!",
    namePrefix: "I'm ",
    name: "Pene Bryan",
    role: "Software Engineer & Designer. I love building ecosystems and helping people, heavily active on Telegram.",
  },
  about: {
    title: "About",
    desc: "I started building a SaaS during university, and I've taken part in multiple hackathons since then. That's where my passion for solving real problems through code really took off.",
  },
  skills: {
    titlePrefix: "my ",
    titleAccent: "Skills",
    items: [
      "Java / Spring Boot",
      "TypeScript / React",
      "HTML / CSS / Tailwind",
      "REST APIs",
      "Figma",
      "Git / GitHub",
      "CI/CD",
      "Ruby",
      "Rust",
    ],
  },
  projects: {
    titlePrefix: "my ",
    titleAccent: "Projects",
    description:
      "A selection of recent work spanning brand identity, UI design, and creative direction. Each project reflects a unique challenge and a tailored approach.",
    items: [
      { tag: "Frontend development", name: "Djelica", image: "/projects/djelica.png", url: "https://djelica.com/" },
      { tag: "Fullstack development", name: "Eazlypost", image: "/projects/eazlypost.png", url: "https://eazlypost.com/" },
      { tag: "UI/UX Design", name: "Bestcorp", image: "/projects/bestcorp.png", url: "https://www.bestcorpcmr.com/" },
    ],
  },
  experience: {
    title: "My Work Experience",
    jobs: [
      {
        company: "HorebPay",
        dates: "nov 2024 - may 2025",
        role: "Junior Software Intern",
        desc: "My main role was reading legacy code, reporting bugs and helping initialize Spring projects",
      },
      {
        company: "Business Agency SAS",
        dates: "june 2025 - april 2026",
        role: "Frontend Developer",
        desc: "Turning Figma mockups into code and integrating APIs while meeting deadlines",
      },
      {
        company: "BestCorp",
        dates: "feb 2026 - Present",
        role: "Lead Frontend Designer",
        desc: "Establishing the design system, code architecture and guiding sprints",
      },
    ],
  },
  whyme: {
    titlePrefix: "Why ",
    titleAccent: "Hire me?",
    desc: "I make sure the client is satisfied with the project and I offer free after-sales support",
    stats: [
      { value: "9+", label: "Projects Completed" },
      { value: "15+", label: "Clients satisfied" },
    ],
  },
  testimonials: {
    titlePrefix: "Testimonials That Speak to My ",
    titleAccent: "Results",
    desc: "Real feedback from clients and teammates I've worked with, on design quality, delivery and collaboration.",
    items: [
      {
        name: "Borel",
        role: "Lead Developer, Horeb Pay",
        image: "",
        quote: "Very good at design, I needed him on my team.",
        rating: 4,
      },
      {
        name: "Christian Mbouyem Ngounou",
        role: "CEO, BestCorp",
        image: "/testimonials/christian.jpg",
        quote: "Pays attention to detail and never runs out of interesting ideas.",
        rating: 5,
      },
      {
        name: "James",
        role: "Entrepreneur",
        image: "",
        quote: "I had a very complex project to complete but didn't know how to illustrate it; Bryan perfectly understood my concern.",
        rating: 5,
      },
    ],
  },
  contact: {
    desc: "Want to work together? Reach out by email or phone and I'll get back to you.",
  },
  footer: {
    title: "Let's Connect",
    hireMe: "Hire me",
    contactTitle: "Contact",
    phone: "+237 640684417",
    email: "nkouambrayan@gmail.com",
    rights: "Copyright© 2026 Pene Nkouam Bryan. All Rights Reserved.",
  },
  language: {
    label: "Language",
    switchTo: "Switch to French",
  },
};

export default en;
