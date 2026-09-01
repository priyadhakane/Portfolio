/**
 * Central content source for the portfolio.
 * All information here is taken from Supriya Dhakane's resume.
 * Where a value is not present in the resume it is left empty and the UI hides it.
 */

export const profile = {
  name: 'Supriya Dhakane',
  initials: 'SD',
  title: 'Software Engineer Intern | Full-Stack Developer',
  tagline:
    'B.E. Computer Engineering graduate and Software Engineer Intern at LiteCode Software, building full-stack business applications with Java, Spring Boot and Django.',
  summary:
    'I am a self-motivated Computer Engineering graduate with hands-on experience from an internship and academic projects. I enjoy solving real-world problems and turning requirements into working software. My current focus is full-stack development with Java and Spring Boot on the backend and Django for rapid web applications, and I am looking to apply these skills in a growth-oriented team.',
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
    items: ['Java', 'Python', 'PHP', 'SQL'],
  },
  {
    category: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    category: 'Backend & Frameworks',
    items: ['Spring Boot', 'Hibernate', 'Django'],
  },
  {
    category: 'Databases',
    items: ['MySQL', 'MongoDB'],
  },
  {
    category: 'Tools & Productivity',
    items: ['Git', 'GitHub', 'Postman', 'MS Office (Excel, Word, PowerPoint)'],
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
    score: 'Percentage: 73%',
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

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];
