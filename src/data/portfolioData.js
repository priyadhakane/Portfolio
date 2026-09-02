/**
 * Central content source for the portfolio.
 * All information here is taken from Supriya Dhakane's resume.
 * Where a value is not present in the resume it is left empty and the UI hides it.
 */

export const profile = {
  name: 'Supriya Dhakane',
  initials: 'SD',
  title: 'Software Engineer Intern | Full-Stack Developer',
  // Rotated in the hero headline. Each is supported by the resume:
  // current internship role, Java/Django full-stack training, web-app projects.
  roles: ['Software Engineer Intern', 'Full-Stack Developer', 'Web Developer'],
  tagline:
    'B.E. Computer Engineering graduate and Software Engineer Intern at LiteCode Software pvt ltd, building full-stack business applications with Java, Spring Boot and Django.',
  summary:
    'Computer Engineering graduate and Software Engineer Intern at LiteCode Software. I build full-stack applications with Java, Spring Boot and Django, and I am looking for a full-time role where I can keep growing as an engineer.',
  // The updated resume no longer lists a street address. Add a city/state here to
  // show it in the contact section and hero card.
  location: '',
  languages: ['English', 'Hindi', 'Marathi'],
  strengths: ['Problem-solving', 'Self-motivation', 'Teamwork'],
  // Path to the resume PDF placed in /public. Replace the file to update the download.
  resumeUrl: '/Supriya_Dhakane_Resume.pdf',
};

export const contact = {
  email: 'dhakanesupriya2@gmail.com',
  phone: '+91 9561525353',
  // The updated resume no longer lists an address.
  location: '',
  github: 'https://github.com/priyadhakane',
  // No LinkedIn URL was provided in the resume. Add it here to enable the link everywhere.
  linkedin: '',
};

/**
 * Optional contact-form endpoint (e.g. a Formspree form URL).
 * Leave as an empty string to run the form in UI-only demo mode.
 */
export const CONTACT_FORM_ENDPOINT = '';

export const skills = [
  {
    category: 'Programming Languages',
    subtitle: 'Proficient across multiple paradigms',
    accent: '#f59e0b',
    items: ['Java', 'Python', 'PHP', 'SQL'],
  },
  {
    category: 'Frontend',
    subtitle: 'Building responsive, accessible interfaces',
    accent: '#38bdf8',
    items: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    category: 'Backend & Frameworks',
    subtitle: 'Server-side applications and APIs',
    accent: '#22c55e',
    items: ['Spring Boot', 'Hibernate', 'Django'],
  },
  {
    category: 'Databases',
    subtitle: 'Relational and document data stores',
    accent: '#a855f7',
    items: ['MySQL', 'MongoDB'],
  },
  {
    category: 'Tools & Productivity',
    subtitle: 'Everyday development workflow',
    accent: '#ec4899',
    items: ['Git', 'GitHub', 'Postman', 'MS Office'],
  },
];

export const experience = [
  {
    role: 'Software Engineer Intern',
    company: 'LiteCode Software Pvt. Ltd.',
    period: 'Jun 2026 – Present',
    location: '',
    points: [
      'Contribute to the design and development of real-world business applications as part of the development team.',
      'Completed the BillBook ERP System, an enterprise resource planning solution for billing and business management.',
    ],
    // The resume does not specify the internship tech stack, so none is listed.
    tech: [],
  },
];

export const projects = [
  {
    name: 'BillBook ERP System',
    tag: 'Internship Project · LiteCode Software',
    summary:
      'ERP billing system built during my LiteCode internship — invoice generation and business record management.',
    description:
      'An ERP-based billing management system built during my internship at LiteCode Software, enabling streamlined invoicing and business record management.',
    problem:
      'Gives businesses a single system to handle billing, invoicing and day-to-day records instead of manual bookkeeping.',
    features: [
      'Billing and invoice generation',
      'Business record management',
      'Built collaboratively as part of the development team',
    ],
    tech: [],
    github: '',
    demo: '',
  },
  {
    name: 'Places Explore – Jharkhand Tourism',
    tag: 'Spring Boot Project',
    summary:
      'Spring Boot tourism app showcasing places, culture and attractions across Jharkhand.',
    description:
      'A tourism web application built with Spring Boot that showcases places, culture and attractions across Jharkhand.',
    problem:
      'Helps travellers discover destinations, culture and attractions in Jharkhand from a single place.',
    features: [
      'Curated listings of places, culture and attractions',
      'Spring Boot backend serving the application content',
    ],
    tech: ['Java', 'Spring Boot'],
    github: '',
    demo: '',
  },
  {
    name: 'E-Commerce Website (Fruits & Vegetables)',
    tag: 'Django Project',
    summary:
      'Django storefront for ordering fruits and vegetables online, inspired by quick-commerce apps.',
    description:
      'A web application for buying fruits and vegetables online, inspired by quick-commerce platforms like Blinkit, built on a template-based Django architecture.',
    problem:
      'Gives customers a simple online way to browse produce and place orders instead of visiting a store in person.',
    features: [
      'Product catalogue for fruits and vegetables',
      'Template-driven pages served through Django views',
      'Shopping cart and order flow for the user',
    ],
    tech: ['Python', 'Django', 'HTML', 'CSS', 'JavaScript'],
    github: '',
    demo: '',
  },
  {
    name: 'ERP Management System',
    tag: 'Group Project',
    summary:
      'Team-built ERP application where I developed the profile management module.',
    description:
      'A team-built ERP application for managing organisational data. My contribution was the profile management module.',
    problem:
      'Centralises organisation and user information in one system so records stay consistent across modules.',
    features: [
      'Profile management module: create and update user profiles',
      'Built collaboratively as part of a development team',
    ],
    tech: [],
    github: '',
    demo: '',
  },
  {
    name: 'Driving School Data Management System',
    tag: 'Academic Project',
    summary:
      'System to store and manage driving-school records such as student enrolment.',
    description:
      'A data management system to record and organise driving-school information such as student enrolment and related records.',
    problem:
      'Replaces manual, paper-based record keeping with a structured system that is easier to search and maintain.',
    features: [
      'Structured storage of student and enrolment records',
      'Add, update and look up records through a simple interface',
    ],
    tech: [],
    github: '',
    demo: '',
  },
];

export const education = [
  {
    degree: 'Bachelor of Engineering – Computer Engineering',
    institution: 'Zeal College of Engineering and Research, Narhe, Pune',
    period: '2023 – 2026',
    score: 'Percentage: 83.88%',
  },
  {
    degree: 'Diploma – Computer Engineering',
    institution:
      'Bharati Vidyapeeth Jawaharlal Nehru Institute of Technology',
    period: '2021 – 2023',
    score: 'Percentage: 83.40%',
  },
  {
    degree: 'HSC – Science',
    institution: 'Balasaheb Bharade Jr. College, Shevgaon, Ahilyanagar',
    period: '2020',
    score: 'Percentage: 73%',
  },
  {
    degree: 'SSC',
    institution: 'Balasaheb Bharade High School, Shevgaon, Ahilyanagar',
    period: '2018',
    score: 'Percentage: 84%',
  },
];

export const certifications = [
  {
    name: 'Java Full Stack Training',
    organization: 'Symbiosis · Sponsored by Capgemini',
    domain: 'Full-Stack Development (Java)',
  },
  {
    name: 'Python Training',
    organization: 'Rubicon',
    domain: 'Python Programming',
  },
  {
    name: 'Full Stack Development Training with Django',
    organization: 'Instructor-led programme',
    domain: 'Full-Stack Web Development (Django)',
  },
  {
    name: 'Employability Skills Training Programme',
    organization: 'Mahindra Pride Classroom – Naandi Foundation',
    domain: 'Professional & Workplace Skills',
  },
];

// From the resume's "Strengths" line — kept exactly, not padded out.
export const competencies = [
  { name: 'Problem Solving', icon: 'bulb' },
  { name: 'Self-Motivation', icon: 'spark' },
  { name: 'Teamwork', icon: 'users' },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];
