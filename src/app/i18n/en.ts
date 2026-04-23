
export const EN = {
nav: {
        projects: 'Projects',
        about: 'About me',
        experience: 'Experience',
        contact: 'Contact'
    },
hero: {
    title: 'Hi! ',
    nameSpan: 'I am Tatiana García',
    job: 'I am Frontend developer with UX/UI knowledge',
    subtitle: 'I build angular apps focused on clean architecture, accesibility and great user experience',
    buttonProjects: 'Projects'
},
aboutMeTitle: 'About me',
aboutMe: [
  {
    "title": "AI Integration",
    "description": "Productivity optimization by integrating generative AI throughout the entire design and development lifecycle with Claude, Chatgpt and Gemini",
    "icons": ["chatgpt", "gemini", "claude"]
  },
  {
    "title": "Frontend Architecture",
    "description": "Building robust and scalable applications with typescript and the most powerful frameworks in the current ecosystem, Angular and React.",
    "icons": ["angular", "react", "typescript"]
  },
  {
    "title": "Product Design & UX/UI",
    "description": "Designing inclusive interfaces and visual systems on Figma, ensuring accessibility and usability under WCAG standards.",
    "icons": ["figma", "ux-ui", "w3c"]
  },
  {
    "title": "Web Layout & Styling",
    "description": "Agile and optimized layout using Tailwind and utility-first methodologies for a consistent, high-performance visual development.",
    "icons": ["tailwind", "sass", "css3"]
  },
  {
    "title": "Databases",
    "description": "Persistent data management using NoSQL databases to support modern and dynamic applications with Mongodb and Firebase",
    "icons": ["mongodb", "firebase"]
  },
  {
    "title": "Agile Project Management",
    "description": "Efficient project management under agile methodologies like Jira or Notion, Github version control management.",
    "icons": ["jira", "github", "notion"]
  },

],
projectsTitle: 'Projects',
projects :[

  {   
    thumbnail:'assets/images/memory.png',
    title: `Memory cards`,
    description: 'A card game for pairs to learn vocabulary in English about food, objects, or places.',
    tags: ['Javascript', 'css3'],
    link: 'https://taticode.github.io/memory-game/',
    gitRepo: 'https://github.com/taticode/memory-game'
},
{
    thumbnail:'assets/images/myaura.png',
    title: 'Future project',
    description: 'Here you can see the future projects that I will be publishing.',
    tags: '',
    link:'',
    gitRepo:''
},

],
projectsEmpty: 'There are no projects to show',
positionsTitle: 'Studies and Experience',
filterAll: 'All',
filterJobs: 'Experience',
filterCourses: 'Courses',
positions: [
    {
      type: 'job',
      company: 'Desigual - Fhios',
      rol: 'Frontend Layout Developer',
      description: [
        'Implementation and maintenance of eCommerce layout on Salesforce Commerce Cloud.',
        'Direct collaboration with the UX/UI team to optimize usability and accessibility.',
        'Design system improvement and component standardization using SCSS.',
        'Visual performance optimization and cross-browser maintenance.',
        'Version control with Git, working under Agile methodologies.'
      ],
      startDate: 'January 2024',
      endDate: 'January 2025'
    },
    {
      type: 'job',
      company: 'Publicis Groupe',
      rol: 'Email Layout Developer',
      description: [
        'Development of responsive and accessible email templates using HTML and JSON.',
        'Implementation with Foundation for Emails and SCSS. Ensuring visual consistency with brand guidelines.'
      ],
      startDate: 'July 2023',
      endDate: 'December 2023'
    },
    {
      type: 'job',
      company: 'Anjana Data',
      rol: 'Frontend Layout & UI Designer',
      description: [
        'Intuitive interface design in Figma and development with Angular 12 and SCSS.',
        'Creation of reusable components and Design Systems.',
        'Improvement of visual consistency and usability in B2B products.',
        'Version control with Git, working under Agile methodologies.'
      ],
      startDate: 'April 2021',
      endDate: 'June 2022'
    },

    {
      type: 'job',
      company: 'NTT Data',
      rol: 'Frontend Developer',
      description: [
        'Optimization of existing interfaces in Angular.',
        'Accessibility (WCAG) and visual performance improvement.',
        'Component refactoring and bug fixing.'
      ],
      startDate: 'May 2020',
      endDate: 'January 2021'
    },
        {
      type: 'job',
      company: 'Zeeker Solutions',
      rol: 'Frontend Layout Developer',
      description: [
        'Development of responsive and accessible interfaces with Angular and SCSS.',
        'Creation of custom components and visual style maintenance.',
        'Version control with Git in shared work environments.'
      ],
      startDate: 'August 2019',
      endDate: 'November 2019'
    },
    {
      type: 'job',
      company: 'Inserver',
      rol: 'WordPress Layout Developer',
      description: [
        'Landing page creation and responsive design adaptation in WordPress.',
        'User experience optimization and visual coherence on the main website.'
      ],
      startDate: 'January 2019',
      endDate: 'February 2019'
    },
    {
      type: 'job',
      company: 'Sapos y Princesas',
      rol: 'WordPress Layout Developer',
      description: [
        'Landing page creation and responsive design adaptation in WordPress.',
        'User experience optimization and visual coherence on the main website.'
      ],
      startDate: 'February 2017',
      endDate: 'July 2017'
    }
  ],
courses: [
  {
    type: 'course',
    company: 'Trazos School',
    rol: 'Frameworks Course',
    description: ['Full stack development with a focus on modular architecture, state management, and REST API consumption.'],
    startDate: 'January 2019',
    endDate: 'February 2019'
  },
  {
    type: 'course',
    company: 'Trazos School',
    rol: 'UX/UI Bootcamp',
    description: ['User-centered design, Design Thinking, prototyping with Figma, and usability testing.'],
    startDate: 'March 2021',
    endDate: 'April 2021'
  },
  {
    type: 'course',
    company: 'AEPI',
    rol: 'Professional JavaScript Course',
    description: ['Functional programming, DOM manipulation, and asynchronous service consumption.'],
    startDate: 'January 2021',
    endDate: 'February 2021'
  },
  {
    type: 'course',
    company: 'Fictizia',
    rol: 'Angular 7 Course',
    description: ['Components, routing, services, observables, and architecture best practices.'],
    startDate: 'June 2018',
    endDate: 'July 2018'
  },
  {
    type: 'course',
    company: 'Fictizia',
    rol: 'Master in Interface Design and Frontend',
    description: ['Advanced layout (HTML5, CSS3, jQuery), responsive design, accessibility, and animations.'],
    startDate: 'January 2018',
    endDate: 'February 2018'
  },
  {
    type: 'course',
    company: 'WordPress Courses Madrid',
    rol: 'WordPress Course',
    description: ['Theme creation and customization, performance optimization, and basic SEO.'],
    startDate: 'January 2016',
    endDate: 'February 2016'
  }
],
positionsEmpty: 'No jobs to display',
msg1: 'Would Tuesday work for you?',
msg2: 'Perfect! I’m free for the interview around 10:00.',
msg3: 'Great!, see you at 10:00 :)',
contactTitle: 'Contact',
contactSubtitle: `Looking for a 360° vision for your next project?`,
contactParagraph: `If you feel my profile aligns with your team, let's connect on LinkedIn or reach out directly via email at: tatianagarcia.dev@gmail.com`,
footerClaim1: 'This portfolio was made with love',
footerClaim2: 'And a lot of green tea',
footerClaim3: '© 2026  Tatiana García - Frontend developer - All rights reserved - This website does not collect any personal data from users'
};