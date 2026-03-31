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
    email: 'qadir.salman7751@gmail.com',
    phone: '+92 310-2010954',
    available: 'Yes',
    established: '2019',
    experience: '6+ years',
    quote: 'I take full responsibility for production - not just the code, the outcome.',
    bio: `I don't write code to close a ticket. I write code to own what happens after it closes - the scaling, the 3am production issue, the refactor nobody wants to touch.

Five years in. Multi-tenant systems, 6 payment gateways, ERP automation, healthcare platforms. Real clients, real traffic. Architecture decisions, junior mentoring, full production ownership.`,
  },
  hero: {
    profileImage: {
      src: '/profile-hero.jpg',
      alt: 'Qadir Salman profile portrait',
      enabled: true,
      badge: 'Available for new work',
    },
    headline: [
      { text: 'A portfolio', accent: false },
      { text: 'that feels like', accent: false },
      { text: 'a digital', accent: false, accentWord: 'digital' },
      { text: 'artifact,', accent: true },
      { text: 'not a template.', accentDim: true },
    ],
    // tagline:
    //   "Built for clients who care about what happens after launch: payment reliability, clean architecture, production calm, and systems that stay maintainable when the pressure's real.",
    stats: ['6+ Years Exp.', '40+ Projects', '6+ Gateways'],
    cards: [
      { label: 'Specialization', value: 'Laravel / React / Node.js' },
      { label: 'Payments', value: 'Stripe / Clover / PayPal' },
      { label: 'Architecture', value: 'Multi-Tenant / RBAC' },
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
    heading: 'Engineer with ownership mentality.',
    subtext: 'Full production responsibility - not just the code, the outcome.',
    quote: 'I take full responsibility for production - not just the code, the outcome.',
    lead: 'I build reliable products with the mindset that launch is the start of responsibility, not the finish line.',
    highlights: [
      {
        label: 'Systems Thinking',
        text: 'Architecture decisions that stay maintainable when real traffic, edge cases, and business pressure show up.',
      },
      {
        label: 'Production Ownership',
        text: 'From payments to alerts to background jobs, I care about what breaks at 3am and how quickly it recovers.',
      },
      {
        label: 'Team Impact',
        text: 'Clear APIs, cleaner handoffs, and better patterns so the next engineer can move faster instead of guessing.',
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
    subtext: 'Every tool below has been used in production. Nothing hypothetical.',
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
    heading: 'Work that shipped, scaled, and stayed.',
    filters: ['All', 'eCommerce', 'SaaS', 'ERP', 'Healthcare'],
    items: [
      {
        id: 1,
        number: '01',
        title: 'Pulse Commerce',
        category: 'eCommerce',
        filterGroup: 'eCommerce',
        type: 'Full-Stack',
        year: '2024',
        stack: ['Laravel', 'React.js', 'Stripe', 'PayPal', 'ShipStation'],
        description: 'End-to-end commerce platform with 5 payment gateways, shipping automation, and tighter checkout flow.',
        accent: 'Payments',
        previewImage: createProjectPreview('Pulse Commerce', 'Payments', ['#15261F', '#0C1411', '#36E9AE']),
      },
      {
        id: 2,
        number: '02',
        title: 'Cipher Notes Portal',
        category: 'SaaS',
        filterGroup: 'SaaS',
        type: 'Multi-Tenant',
        year: '2024',
        stack: ['Laravel', 'React', 'RBAC', 'MySQL', 'Tailwind'],
        description: 'Multi-tenant portal with role-based access, admin dashboards, and automated reporting.',
        accent: 'SaaS',
        previewImage: createProjectPreview('Cipher Notes', 'SaaS', ['#14231F', '#0A1412', '#5BE4D1']),
      },
      {
        id: 3,
        number: '03',
        title: 'Nexus Board ERP',
        category: 'ERP',
        filterGroup: 'ERP',
        type: 'Automation',
        year: '2023',
        stack: ['Laravel', 'Node.js', 'GoDaddy API', 'CRON'],
        description: 'Domain lifecycle management with GoDaddy API, automated renewal alerts, and background jobs.',
        accent: 'ERP',
        previewImage: createProjectPreview('Nexus Board', 'ERP', ['#1A2118', '#0C130F', '#8BEA6B']),
      },
      {
        id: 4,
        number: '04',
        title: 'Atlas Health Platform',
        category: 'Healthcare',
        filterGroup: 'Healthcare',
        type: 'Real-time',
        year: '2023',
        stack: ['React', 'Pusher', 'Firebase FCM', 'Twilio', 'Google Maps'],
        description: 'Caregiver coordination with real-time tracking, push notifications, and SMS alerts.',
        accent: 'Health',
        previewImage: createProjectPreview('Atlas Health', 'Health', ['#152227', '#0B1317', '#59D6FF']),
      },
      {
        id: 5,
        number: '05',
        title: 'Helix Ops ERP',
        category: 'Internal Tools',
        filterGroup: 'ERP',
        type: 'Manufacturing',
        year: '2023',
        stack: ['Laravel', 'AJAX', 'MySQL', 'jQuery'],
        description: 'Quality control ERP with automated QC workflows and AJAX-driven dashboards.',
        accent: 'Ops',
        previewImage: createProjectPreview('Helix Ops', 'Ops', ['#221D18', '#11100D', '#FFB86E']),
      },
      {
        id: 6,
        number: '06',
        title: 'Orbit Travel Platform',
        category: 'Travel',
        filterGroup: 'SaaS',
        type: 'Multi-domain',
        year: '2022',
        stack: ['Laravel', 'Tailwind', 'MySQL', 'Node.js'],
        description: 'Multi-domain booking system with dynamic pricing and automated client pipelines.',
        accent: 'Travel',
        previewImage: createProjectPreview('Orbit Travel', 'Travel', ['#161E28', '#0B1016', '#7BB8FF']),
      },
    ],
    stats: [
      { label: '6+ Projects Shipped', line: '100%' },
      { label: '6+ Payment Gateways', line: '70%' },
      { label: '20+ Live Stores', line: '45%' },
      { label: '100% Production Owned', line: '25%' },
    ],
  },
  experience: {
    heading: "Where I've shipped.",
    items: [
      {
        period: 'Mar 2023 - Present',
        company: 'SOFTNOX TECHNOLOGIES',
        title: 'Senior Full Stack Developer',
        description:
          'Architected multi-tenant systems across healthcare, travel, and eCommerce. Owned 6+ payment gateway integrations. Built GoDaddy domain automation. Mentored juniors. Defined REST API architecture standards across the org.',
        badge: 'Current',
      },
      {
        period: 'Jun 2021 - Feb 2023',
        company: 'DIGI TRESTLE',
        title: 'Associate Backend Developer',
        description:
          'Built and maintained 20+ live eCommerce stores. Contributed to ERP systems via Laravel Lumen. Optimized backend performance and collaborated on API design with senior engineers.',
        badge: '2 yrs',
      },
    ],
  },
  testimonials: {
    heading: 'What working together felt like.',
    subtext: 'Not just shipped features. Calmer launches, cleaner handoffs, and fewer surprises after go-live.',
    summary: {
      label: 'Client Signal',
      score: '5.0',
      stats: [
        { label: 'Roles', value: 'Product / Ops / Founder' },
        { label: 'Focus', value: 'Shipping with less chaos' },
      ],
    },
    items: [
      {
        name: 'Hassan R.',
        role: 'Product Lead',
        company: 'Pulse Commerce',
        tag: 'Featured Note',
        quote:
          'Qadir did not behave like a contractor waiting for tickets. He thought like an owner, challenged weak decisions early, and turned a risky payment flow into something the team could trust.',
      },
      {
        name: 'Sarah Khan',
        role: 'Operations Manager',
        company: 'Nexus Board ERP',
        quote:
          'The biggest difference was clarity. We always knew what was changing, what could break, and what had already been protected before launch.',
      },
      {
        name: 'Ali M.',
        role: 'Founder',
        company: 'Cipher Notes',
        quote:
          'He brought structure to a messy product very quickly. Permissions, admin flows, and reporting all started feeling intentional instead of patched together.',
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
      before: 'Need a reliable build,',
      accent: 'cleanup,',
      after: ' or second opinion?',
    },
    leftCopy:
      'If you are planning a new product, improving an existing system, or need help with a messy codebase, send the details here and I will review it properly.',
    directCopy: 'Prefer email, phone, or WhatsApp? Reach out directly using the details below.',
    social: [
      { name: 'GitHub', href: 'https://github.com/qadirsalman' },
      { name: 'LinkedIn', href: 'https://www.linkedin.com/in/qadirsalman' },
      { name: 'WhatsApp', href: 'https://wa.me/923102010954' },
    ],
  },
  footer: {
    left: 'Qadir Salman / FSE',
    right: 'Copyright 2025. All rights reserved.',
  },
};

export default portfolioData;
