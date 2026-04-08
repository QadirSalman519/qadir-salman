const createProjectPreview = (title, accent, palette) => {
  const svg = `
    <svg width="800" height="520" viewBox="0 0 800 520" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="800" y2="520" gradientUnits="userSpaceOnUse">
          <stop stop-color="${palette[0]}"/>
          <stop offset="1" stop-color="${palette[1]}"/>
        </linearGradient>
        <radialGradient id="glow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(620 120) rotate(138) scale(250 250)">
          <stop stop-color="${palette[2]}" stop-opacity="0.36"/>
          <stop offset="1" stop-color="${palette[2]}" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="800" height="520" rx="34" fill="url(#bg)"/>
      <rect x="34" y="34" width="732" height="452" rx="28" fill="#0F1714" fill-opacity="0.88" stroke="rgba(255,255,255,0.08)"/>
      <rect x="34" y="34" width="732" height="452" rx="28" fill="url(#glow)"/>
      <rect x="72" y="84" width="112" height="32" rx="16" fill="${palette[2]}" fill-opacity="0.16"/>
      <text x="92" y="105" fill="#E4F1EB" font-family="Arial, sans-serif" font-size="13" letter-spacing="2">${accent.toUpperCase()}</text>
      <text x="72" y="164" fill="#F3F8F5" font-family="Arial, sans-serif" font-size="44" font-weight="700">${title}</text>
      <rect x="72" y="212" width="268" height="12" rx="6" fill="#E4F1EB" fill-opacity="0.78"/>
      <rect x="72" y="238" width="228" height="12" rx="6" fill="#E4F1EB" fill-opacity="0.46"/>
      <rect x="72" y="302" width="656" height="148" rx="22" fill="#121D19" stroke="rgba(255,255,255,0.06)"/>
      <rect x="96" y="334" width="186" height="18" rx="9" fill="${palette[2]}" fill-opacity="0.82"/>
      <rect x="96" y="374" width="282" height="12" rx="6" fill="#E4F1EB" fill-opacity="0.32"/>
      <rect x="96" y="398" width="248" height="12" rx="6" fill="#E4F1EB" fill-opacity="0.18"/>
      <rect x="520" y="96" width="172" height="104" rx="24" fill="#131F1A" stroke="rgba(255,255,255,0.06)"/>
      <rect x="544" y="128" width="64" height="64" rx="18" fill="${palette[2]}" fill-opacity="0.18"/>
      <rect x="624" y="130" width="44" height="10" rx="5" fill="#E4F1EB" fill-opacity="0.68"/>
      <rect x="624" y="150" width="34" height="10" rx="5" fill="#E4F1EB" fill-opacity="0.26"/>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
};

// Optional per-project thumbnail from /public:
// previewImagePath: "/projects/your-image.jpg"

const portfolioData = {
  personal: {
    name: "Qadir Salman",
    shortName: "QS",
    title: "Senior Full-Stack Software Engineer",
    heroTitle: "Senior Full-Stack Software Engineer",
    location: "Karachi, Pakistan",
    locationShort: "Karachi",
    email: "qadirsalman019@gmail.com",
    phone: "+92 310-2010954",
    available: "Yes",
    established: "2019",
    experience: "6+ years",
    quote: "I don't just ship features - I own what happens after.",
    bio: `Senior Full-Stack Engineer with 6+ years owning 
production-grade platforms across eCommerce, SaaS, 
ERP, and multi-tenant systems — from first commit 
to live deployment.

My core strength is backend architecture, API design, payment systems, and scalable full-stack execution using Laravel, PHP, Node.js, React, and Next.js.`,
  },
  hero: {
    profileImage: {
      src: "/qadir-salman.png",
      alt: "Qadir Salman profile portrait",
      enabled: true,
      badge: "Available for new work",
    },
    headline: [
      { text: "Systems that scale.", accent: false },
      { text: "Full-stack engineer.", accent: true },
      { text: "Code that never breaks", accentDim: true },
    ],
    tagline:
      "6+ years building production-grade platforms across eCommerce, SaaS, ERP, and multi-tenant systems. I handle the full stack — architecture, APIs, payments, and deployment — so your product ships fast and stays stable.",
    stats: ["6+ Years Exp.", "50+ Projects", "100% Ownership"],
    cards: [
      { label: "Payments", value: "Stripe / PayPal / Clover / Square" },
      { label: "Focus", value: "Architecture / APIs / Multi-Tenant Systems" },
    ],
  },
  ticker: [
    "Laravel",
    "React.js",
    "Next.js",
    "Node.js",
    "PHP",
    "MySQL",
    "MongoDB",
    "MSSQL",
    "PostgreSQL",
    "TypeScript",
    "Tailwind CSS",
    "REST APIs",
    "CI/CD",
    "Git/GitHub",
    "Docker",
    "AWS",
    "Payment Gateways",
    "Multi-Tenant Systems",
    "API Integrations",
  ],
  about: {
    heading: "Built for ownership, not task completion.",
    subtext:
      "From architecture to deployment to production issues, I work with full responsibility for the system.",
    quote: "I don't just ship features - I own what happens after.",
    lead: "I build reliable products with the mindset that launch is the start of responsibility, not the finish line.",
    highlights: [
      {
        label: "Systems Thinking",
        text: "I design with maintainability and clear service boundaries in mind - built for teams and scale.",
      },
      {
        label: "Production Ownership",
        text: "Deployment, bottlenecks, payment flows, background jobs - I handle what happens after launch too.",
      },
      {
        label: "Team Impact",
        text: "I mentor junior engineers through code reviews and architectural guidance - raising team quality overall.",
      },
    ],
    skills: [
      "Laravel",
      "React",
      "Next.js",
      "Node.js",
      "MySQL",
      "AWS",
      "Docker",
      "REST APIs",
    ],
    stats: [
      { label: "Years", value: "6+" },
      { label: "Projects", value: "50+" },
      { label: "Ownership", value: "100%" },
      { label: "Stores", value: "20+" },
    ],
  },
  techStack: {
    heading: "Capability as system, not a list.",
    subtext:
      "Every tool listed here has been used in live, production-grade systems - not just tutorials.",
    categories: [
      {
        name: "Frontend",
        icon: "FE",
        tools: [
          "React.js",
          "Next.js",
          "JavaScript ES6+",
          "Tailwind CSS",
          "Bootstrap",
          "HTML5/CSS3",
          "jQuery/AJAX",
        ],
      },
      {
        name: "Backend",
        icon: "BE",
        tools: [
          "Laravel",
          "PHP",
          "Node.js",
          "Express.js",
          "CodeIgniter",
          "REST APIs",
        ],
      },
      {
        name: "Databases",
        icon: "DB",
        tools: ["MySQL", "MongoDB", "PostgreSQL", "MSSQL"],
      },
      {
        name: "Payments & Integrations",
        icon: "PI",
        tools: [
          "Stripe",
          "PayPal",
          "Authorize.Net",
          "Clover",
          "Square",
          "ShipStation",
          "Firebase FCM",
          "Pusher",
          "Twilio",
          "Google Maps",
          "GoDaddy API",
          "SMS Global",
        ],
      },
      {
        name: "DevOps & Cloud",
        icon: "DC",
        tools: [
          "Git/GitHub",
          "AWS",
          "Docker",
          "CI/CD",
          "CRON Jobs",
          "Server Mgmt",
        ],
      },
      {
        name: "Architecture & Systems",
        icon: "AS",
        tools: [
          "Multi-Tenant",
          "Role-Based Access Control",
          "Performance Optimization",
          "ERP Systems",
          "Automation",
          "Reporting",
        ],
      },
    ],
  },
  projects: {
    heading: "Projects grounded in real production work.",
    subtext:
      "Representative project types from my CV: the systems, workflows, and integrations I have actually built and maintained.",
    filters: ["All", "eCommerce", "SaaS", "ERP", "Healthcare"],
    items: [
      {
        id: 1,
        number: "01",
        title: "Premier Physicians of Michigan",
        category: "Healthcare",
        filterGroup: "Healthcare",
        type: "Portal",
        year: "2024",
        link: "https://ppomdr-frontend-stage.devdesignbuild.com/",
        imagePath: "/project-previews/premier-physicians-of-michigan.png",
        stack: [
          "React",
          "Node.js",
          "MongoDB",
          "TypeScript",
          "RBAC",
          "JavaScript",
        ],
        description:
          "Built a full patient management portal with appointment scheduling, RBAC, doctor/patient dashboards, and dental service workflows for a Michigan-based medical practice.",
        accent: "Health",
        previewImage: createProjectPreview(
          "Premier Physicians Portal",
          "Health",
          ["#152227", "#0B1317", "#59D6FF"],
        ),
      },
      {
        id: 2,
        number: "02",
        title: "Habib Metro Financial Services",
        category: "FinTech",
        filterGroup: "SaaS",
        type: "CMS",
        year: "2024",
        link: "https://hmfs-frontend.devdesignbuild.com/",
        imagePath: "/project-previews/habib-metro-financial-services.png",
        stack: ["React", "Node.js", "MongoDB", "TypeScript", "REST API", "CMS"],
        description:
          "Developed a CMS-backed financial services platform with investor onboarding, service management workflows, market access tools, and admin content controls.",
        accent: "Finance",
        previewImage: createProjectPreview("HMFS Platform", "Finance", [
          "#161E28",
          "#0B1016",
          "#7BB8FF",
        ]),
      },
      {
        id: 3,
        number: "03",
        title: "Lokal.pk — Hotel Platform",
        category: "Hospitality",
        filterGroup: "SaaS",
        type: "Static",
        year: "2024",
        link: "https://lokal.pk/",
        imagePath: "/project-previews/lokal-pk.png",
        stack: ["PHP", "HTML/CSS", "JavaScript", "Bootstrap", "jQuery"],
        description:
          "Built a static marketing platform for Pakistan's first budget hotel chain — showcasing properties, local experiences, and brand storytelling across multiple city destinations.",
        accent: "Hospitality",
        previewImage: createProjectPreview(
          "Lokal Hotel Platform",
          "Hospitality",
          ["#1A1F14", "#0E1209", "#A3E070"],
        ),
      },
      {
        id: 4,
        number: "04",
        title: "Domain Management Automation",
        category: "ERP",
        filterGroup: "ERP",
        type: "Automation",
        year: "2023",
        imagePath: "/project-previews/domain-management-system.png",
        stack: ["Laravel", "Node.js", "GoDaddy API", "CRON"],
        description:
          "Built internal domain lifecycle workflows using GoDaddy APIs, scheduled jobs, renewals, discovery, and client notification automation.",
        accent: "Automation",
        previewImage: createProjectPreview("Domain Automation", "Automation", [
          "#1A2118",
          "#0C130F",
          "#8BEA6B",
        ]),
      },
      {
        id: 5,
        number: "05",
        title: "YesStyle — Fashion eCommerce",
        category: "eCommerce",
        filterGroup: "eCommerce",
        type: "Full-Stack",
        year: "2024",
        link: "https://www.yesstyle.com/en/home.html",
        imagePath: "/project-previews/yes-style.png",
        stack: ["React", "Node.js", "MongoDB", "TypeScript", "REST API"],
        description:
          "Contributed to a large-scale Asian fashion eCommerce platform with product discovery, cart flows, and scalable frontend architecture across a high-traffic storefront.",
        accent: "Commerce",
        previewImage: createProjectPreview("YesStyle eCommerce", "Commerce", [
          "#15261F",
          "#0C1411",
          "#36E9AE",
        ]),
      },
      {
        id: 6,
        number: "06",
        title: "Masters Custom Patches — ERP",
        category: "ERP",
        filterGroup: "ERP",
        type: "Manufacturing",
        year: "2023",
        link: "https://partners.masterscustompatches.com/",
        imagePath: "/project-previews/masters-custom-patches.png",
        stack: [
          "Laravel",
          "React",
          "JavaScript",
          "MySQL",
          "REST API",
          "Reporting",
        ],
        description:
          "Built a complete business management ERP for a US/UK patch manufacturer — covering order tracking, production reporting, partner portals, and operational workflows.",
        accent: "Quality",
        previewImage: createProjectPreview("Masters Patches ERP", "Quality", [
          "#221D18",
          "#11100D",
          "#FFB86E",
        ]),
      },
    ],
    stats: [
      { label: "40+ Projects", line: "100%" },
      { label: "6+ Payment Gateways", line: "72%" },
      { label: "20+ Live Stores", line: "46%" },
      { label: "Production Ownership", line: "30%" },
    ],
  },
  experience: {
    heading: "Where I've shipped.",
    subtext:
      "From backend execution to architecture ownership, each role pushed me closer to shipping under real pressure.",
    items: [
      {
        period: "Mar 2023 - Present",
        company: "SOFTNOX TECHNOLOGIES",
        title: "Senior Full-Stack Developer",
        focus: "Architecture / Payments / Systems",
        description:
          "Led architecture and full ownership of production-grade multi-tenant platforms across healthcare, travel, and eCommerce. Made independent technical decisions on system design, API standards, and scalability. Drove payment infrastructure across 6+ gateways. Built internal automation systems reducing manual operations. Established coding standards and elevated junior engineers through structured mentorship and architectural guidance.",
        highlights: [
          "6+ Gateway Integrations",
          "Multi-Tenant Platforms",
          "API Standards Ownership",
        ],
        badge: "3+ YRS",
      },
      {
        period: "Jun 2021 - Feb 2023",
        company: "DIGI TRESTLE",
        title: "Associate Backend Developer",
        focus: "Commerce / ERP / Backend",
        description:
          "Built and maintained 20+ live eCommerce stores using Laravel and PHP. Contributed to ERP systems and operational workflows via Laravel Lumen. Optimized backend performance across production platforms and collaborated with senior engineers on API design and architecture.",
        highlights: [
          "20+ Live Stores",
          "Laravel Lumen ERP Work",
          "Backend Performance Tuning",
        ],
        badge: "1.5+ YRS",
      },
      {
        period: "Oct 2019 - May 2021",
        company: "FLEVIO",
        title: "Junior Full-Stack Developer",
        focus: "Frontend / WordPress / PHP",
        description:
          "Built eCommerce stores, landing pages, and client-facing web applications using PHP and WordPress. Developed frontend interfaces and gained hands-on experience across multiple client projects.",
        highlights: [
          "PHP & WordPress",
          "eCommerce Stores",
          "Frontend Interfaces",
        ],
        badge: "1.5 YRS",
      },
    ],
  },
  testimonials: {
    heading: "Clients who trusted the system.",
    subtext:
      "Feedback from founders and CTOs across eCommerce, SaaS, and multi-tenant platforms.",
    summary: {
      label: "Client's Rating",
      score: "5.0",
      stats: [
        { label: "Role", value: "Full-Stack Engineer" },
        { label: "Focus", value: "Ownership & Delivery" },
      ],
    },
    items: [
      {
        name: "James Carter",
        role: "Founder",
        company: "CartFlow (eCommerce)",
        quote:
          "Qadir built our entire eCommerce backend from scratch — payments, shipping, admin panel. Everything worked on day one. He flagged issues before we even knew they existed.",
      },
      {
        name: "David Reynolds",
        role: "CTO",
        company: "CareNest (Healthcare SaaS)",
        quote:
          "We hired Qadir to build a multi-tenant platform for our caregiving business. He owned the entire system — architecture, integrations, deployment. Delivered on time with zero critical bugs in production.",
      },
      {
        name: "Omar Farooq",
        role: "CEO",
        company: "TravelEase (Travel Platform)",
        quote:
          "Qadir integrated multiple payment gateways and third-party APIs into our platform seamlessly. His code is clean, well-documented, and easy for our team to maintain.",
      },
    ],
  },
  skills: {
    leftTitle: "Core Proficiency",
    rightTitle: "Infrastructure & Integration",
    left: [
      { label: "Laravel / PHP", value: 95 },
      { label: "MySQL / MongoDB", value: 90 },
      { label: "React.js / Next.js", value: 88 },
      { label: "Node.js / Express", value: 85 },
    ],
    right: [
      { label: "Payment Gateways", value: 95 },
      { label: "REST API Architecture", value: 92 },
      { label: "Multi-Tenant Systems", value: 88 },
      { label: "AWS / Docker / CI-CD", value: 80 },
    ],
  },
  contact: {
    heading: "Let's talk about your project.",
    intro: "Get in Touch",
    formTitle: "Project Form",
    leftHeading: {
      before: "Building something serious?",
      accent: "Let's make it",
      after: " ship and scale.",
    },
    leftCopy:
      "Planning a new platform or scaling an existing one? I work on APIs, payments, architecture, and production systems - send the details and I'll get back within 24 hours.",
    directCopy:
      "Prefer email, phone, or WhatsApp? Reach out directly using the details below.",
    social: [
      { name: "GitHub", href: "https://github.com/QadirSalman519" },
      { name: "LinkedIn", href: "https://www.linkedin.com/in/qadirsalman" },
      { name: "WhatsApp", href: "https://wa.me/923102010954" },
    ],
  },
  footer: {
    left: "Qadir Salman / Senior Full-Stack Software Engineer",
    right: "Copyright 2026. All rights reserved.",
  },
};

export default portfolioData;
