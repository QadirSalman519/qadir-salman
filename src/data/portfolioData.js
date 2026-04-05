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

const portfolioData = {
  personal: {
    name: 'Qadir Salman',
    shortName: 'QS',
    title: 'Senior Full-Stack Software Engineer',
    heroTitle: 'Senior Full-Stack Software Engineer',
    location: 'Karachi, Pakistan',
    locationShort: 'Karachi',
    email: 'qadirsalman019@gmail.com',
    phone: '+92 310-2010954',
    available: 'Yes',
    established: '2019',
    experience: '6+ years',
    quote: 'I take full responsibility for production - not just the code, the outcome.',
    bio: `Senior Full-Stack Software Engineer with 6+ years of experience architecting, building, and owning production-grade applications across eCommerce, SaaS, ERP, and multi-tenant systems.

My core strength is backend architecture, API design, payment systems, and scalable full-stack execution using Laravel, PHP, Node.js, React, and Next.js.`,
  },
  hero: {
    profileImage: {
      src: '/profile-hero.jpg',
      alt: 'Qadir Salman profile portrait',
      enabled: true,
      badge: 'Available for new work',
    },
    headline: [
      { text: 'Systems that scale.', accent: false },
      { text: 'Full-stack engineer.', accent: true },
      { text: 'Code that never breaks', accentDim: true },
    ],
    tagline:
      '6+ years building production-grade platforms across eCommerce, SaaS, ERP, and multi-tenant systems. I handle the full stack — architecture, APIs, payments, and deployment — so your product ships fast and stays stable',
    stats: ['6+ Years Exp.', '40+ Projects', '6+ Gateways'],
    cards: [
      { label: 'Core Stack', value: 'Laravel / React / Next.js / Node.js' },
      { label: 'Payments', value: 'Stripe / PayPal / Clover / Square' },
      { label: 'Focus', value: 'Architecture / APIs / Multi-Tenant Systems' },
    ],
  },
  ticker: [
    'Laravel',
    'React.js',
    'Next.js',
    'Node.js',
    'TypeScript',
    'MySQL',
    'MongoDB',
    'Stripe',
    'AWS',
    'Docker',
    'Tailwind CSS',
    'PHP',
    'REST APIs',
    'CI/CD',
  ],
  about: {
    heading: 'Built for ownership, not task completion.',
    subtext: 'From architecture to deployment to production issues, I work with full responsibility for the system.',
    quote: 'I take full responsibility for production - not just the code, the outcome.',
    lead: 'I build reliable products with the mindset that launch is the start of responsibility, not the finish line.',
    highlights: [
      {
        label: 'Systems Thinking',
        text: 'I design systems with maintainability, performance, and clear service boundaries in mind, especially for live multi-user products.',
      },
      {
        label: 'Production Ownership',
        text: 'I handle deployment realities, production bottlenecks, payment flows, automation jobs, and the issues that appear after launch.',
      },
      {
        label: 'Team Impact',
        text: 'I mentor junior engineers, improve code quality through reviews, and help teams move faster with cleaner patterns and technical clarity.',
      },
    ],
    skills: ['Laravel', 'React', 'Next.js', 'Node.js', 'MySQL', 'AWS', 'Docker', 'REST APIs'],
    stats: [
      { label: 'Years', value: '6+' },
      { label: 'Projects', value: '40+' },
      { label: 'Gateways', value: '6+' },
      { label: 'Stores', value: '20+' },
    ],
  },
  techStack: {
    heading: 'Capability as system, not a list.',
    subtext: 'These tools were used on real production systems across commerce, ERP, healthcare, travel, and internal platforms.',
    categories: [
      {
        name: 'Frontend',
        icon: 'FE',
        tools: ['React.js', 'Next.js', 'JavaScript ES6+', 'Tailwind CSS', 'Bootstrap', 'HTML5/CSS3', 'jQuery/AJAX'],
      },
      {
        name: 'Backend',
        icon: 'BE',
        tools: ['Laravel', 'PHP', 'Node.js', 'Express.js', 'CodeIgniter', 'REST APIs'],
      },
      {
        name: 'Databases',
        icon: 'DB',
        tools: ['MySQL', 'MongoDB', 'PostgreSQL', 'MSSQL'],
      },
      {
        name: 'Payments & Integrations',
        icon: 'PI',
        tools: [
          'Stripe',
          'PayPal',
          'Authorize.Net',
          'Clover',
          'Square',
          'ShipStation',
          'Firebase FCM',
          'Pusher',
          'Twilio',
          'Google Maps',
          'GoDaddy API',
          'SMS Global',
        ],
      },
      {
        name: 'DevOps & Cloud',
        icon: 'DC',
        tools: ['Git/GitHub', 'AWS', 'Docker', 'CI/CD', 'CRON Jobs', 'Server Mgmt'],
      },
      {
        name: 'Architecture & Systems',
        icon: 'AS',
        tools: ['Multi-Tenant', 'RBAC', 'Performance Opt.', 'ERP Systems', 'Automation', 'Reporting'],
      },
    ],
  },
  projects: {
    heading: 'Projects grounded in real production work.',
    subtext: 'Representative project types from my CV: the systems, workflows, and integrations I have actually built and maintained.',
    filters: ['All', 'eCommerce', 'SaaS', 'ERP', 'Healthcare'],
    items: [
      {
        id: 1,
        number: '01',
        title: 'Custom eCommerce Platform',
        category: 'eCommerce',
        filterGroup: 'eCommerce',
        type: 'Full-Stack',
        year: '2024',
        stack: ['Laravel', 'React.js', 'Stripe', 'PayPal', 'ShipStation'],
        description: 'Built and maintained production commerce systems with payment integrations, shipping APIs, checkout improvements, and stable admin workflows.',
        accent: 'Commerce',
        previewImage: createProjectPreview('eCommerce Platform', 'Commerce', ['#15261F', '#0C1411', '#36E9AE']),
      },
      {
        id: 2,
        number: '02',
        title: 'Multi-Tenant Web Portal',
        category: 'SaaS',
        filterGroup: 'SaaS',
        type: 'Multi-Tenant',
        year: '2024',
        stack: ['Laravel', 'React', 'RBAC', 'MySQL', 'Tailwind'],
        description: 'Implemented role-based access, secure admin dashboards, multi-user controls, and reporting systems for production web portals.',
        accent: 'Portal',
        previewImage: createProjectPreview('Multi-Tenant Portal', 'Portal', ['#14231F', '#0A1412', '#5BE4D1']),
      },
      {
        id: 3,
        number: '03',
        title: 'Domain Management Automation',
        category: 'ERP',
        filterGroup: 'ERP',
        type: 'Automation',
        year: '2023',
        stack: ['Laravel', 'Node.js', 'GoDaddy API', 'CRON'],
        description: 'Built internal domain lifecycle workflows using GoDaddy APIs, scheduled jobs, renewals, discovery, and client notification automation.',
        accent: 'Automation',
        previewImage: createProjectPreview('Domain Automation', 'Automation', ['#1A2118', '#0C130F', '#8BEA6B']),
      },
      {
        id: 4,
        number: '04',
        title: 'Healthcare Coordination System',
        category: 'Healthcare',
        filterGroup: 'Healthcare',
        type: 'Real-time',
        year: '2023',
        stack: ['React', 'Pusher', 'Firebase FCM', 'Twilio', 'Google Maps'],
        description: 'Supported healthcare and caregiving applications with real-time workflows, notifications, geolocation features, and reliable user-facing operations.',
        accent: 'Health',
        previewImage: createProjectPreview('Healthcare System', 'Health', ['#152227', '#0B1317', '#59D6FF']),
      },
      {
        id: 5,
        number: '05',
        title: 'Quality Control ERP Workflow',
        category: 'Internal Tools',
        filterGroup: 'ERP',
        type: 'Manufacturing',
        year: '2023',
        stack: ['Laravel', 'AJAX', 'MySQL', 'jQuery'],
        description: 'Developed manufacturing and internal ERP workflows focused on quality control operations, process efficiency, and business-critical reporting.',
        accent: 'Quality',
        previewImage: createProjectPreview('Quality Control ERP', 'Quality', ['#221D18', '#11100D', '#FFB86E']),
      },
      {
        id: 6,
        number: '06',
        title: 'Travel Booking Platform',
        category: 'Travel',
        filterGroup: 'SaaS',
        type: 'Multi-domain',
        year: '2022',
        stack: ['Laravel', 'Tailwind', 'MySQL', 'Node.js'],
        description: 'Worked on travel systems with multi-domain structure, scalable booking flows, and backend foundations built for long-term maintenance.',
        accent: 'Travel',
        previewImage: createProjectPreview('Travel Platform', 'Travel', ['#161E28', '#0B1016', '#7BB8FF']),
      },
    ],
    stats: [
      { label: '40+ Projects', line: '100%' },
      { label: '6+ Payment Gateways', line: '72%' },
      { label: '20+ Live Stores', line: '46%' },
      { label: 'Production Ownership', line: '30%' },
    ],
  },
  experience: {
    heading: "Where I've shipped.",
    subtext: 'From backend execution to architecture ownership, each role pushed me closer to shipping under real pressure.',
    items: [
      {
        period: 'Mar 2023 - Present',
        company: 'SOFTNOX TECHNOLOGIES',
        title: 'Senior Full Stack Developer',
        focus: 'Architecture / Payments / Systems',
        description:
          'Architected multi-tenant systems across healthcare, travel, and eCommerce. Owned 6+ payment gateway integrations. Built GoDaddy domain automation. Mentored juniors. Defined REST API architecture standards across the org.',
        highlights: ['6+ gateway integrations', 'Multi-tenant platforms', 'API standards ownership'],
        badge: 'Current',
      },
      {
        period: 'Jun 2021 - Feb 2023',
        company: 'DIGI TRESTLE',
        title: 'Associate Backend Developer',
        focus: 'Commerce / ERP / Backend',
        description:
          'Built and maintained 20+ live eCommerce stores. Contributed to ERP systems via Laravel Lumen. Optimized backend performance and collaborated on API design with senior engineers.',
        highlights: ['20+ live stores', 'Laravel Lumen ERP work', 'Backend performance tuning'],
        badge: '2 yrs',
      },
    ],
  },
  testimonials: {
    heading: 'How I work when systems are live.',
    subtext: 'These are the principles that show up in my work across production systems, integrations, and long-term maintenance.',
    summary: {
      label: 'Years Shipped',
      score: '6+',
      stats: [
        { label: 'Roles', value: 'Full-Stack / Backend / Architecture' },
        { label: 'Focus', value: 'Production responsibility' },
      ],
    },
    items: [
      {
        name: 'Ownership',
        role: 'Working Style',
        company: 'Production Systems',
        quote:
          'I own systems end-to-end from implementation to deployment, maintenance, production issues, refactoring, and performance bottlenecks.',
      },
      {
        name: 'Architecture',
        role: 'Working Style',
        company: 'Scalability',
        quote:
          'I make technical decisions by balancing performance, scalability, delivery speed, and long-term maintainability instead of chasing short-term fixes.',
      },
      {
        name: 'Execution',
        role: 'Working Style',
        company: 'Business-Critical Delivery',
        quote:
          'I build secure, reliable applications that directly support business operations and revenue, especially where APIs, payments, and backend systems matter most.',
      },
    ],
  },
  skills: {
    leftTitle: 'Core Proficiency',
    rightTitle: 'Infrastructure & Integration',
    left: [
      { label: 'Laravel / PHP', value: 95 },
      { label: 'MySQL / MongoDB', value: 90 },
      { label: 'React.js / Next.js', value: 88 },
      { label: 'Node.js / Express', value: 85 },
    ],
    right: [
      { label: 'Payment Gateways', value: 95 },
      { label: 'REST API Architecture', value: 92 },
      { label: 'Multi-Tenant Systems', value: 88 },
      { label: 'AWS / Docker / CI-CD', value: 80 },
    ],
  },
  contact: {
    heading: "Let's talk about your project.",
    intro: 'Get in Touch',
    formTitle: "Tell me what you're building",
    leftHeading: {
      before: 'Need help with a production build,',
      accent: 'system cleanup,',
      after: ' or architecture review?',
    },
    leftCopy:
      'If you are planning a new platform, improving an existing codebase, or need help with APIs, payments, architecture, or production stability, send the details here and I will review it properly.',
    directCopy: 'Prefer email, phone, or WhatsApp? Reach out directly using the details below.',
    social: [
      { name: 'GitHub', href: 'https://github.com/qadirsalman' },
      { name: 'LinkedIn', href: 'https://www.linkedin.com/in/qadirsalman' },
      { name: 'WhatsApp', href: 'https://wa.me/923102010954' },
    ],
  },
  footer: {
    left: 'Qadir Salman / Senior Full-Stack Software Engineer',
    right: 'Copyright 2026. All rights reserved.',
  },
};

export default portfolioData;
