
export const ES = {
nav: {
        projects: 'Proyectos',
        experience: 'Experiencia',
        contact: 'Contacto'
    },
hero: {
    title: '¡Hola! Soy ',
    nameSpan: 'Tatiana García',
    job: 'Frontend developer con conocimientos UX/UI',
    subtitle: 'Desarrollo aplicaciones web con foco en arquitectura limpia, accesibilidad y una buena experiencia de usuario',
    buttonProjects: 'Ver Proyectos'
},
aboutMeTitle: 'Sobre mí',

aboutMe: [
      {
      "title": "Integración de IA",
      "description": "Optimización de la productividad mediante la integración de IA generativa en todo el ciclo de diseño y desarrollo.",
      "icons": ["chatgpt", "gemini", "claude"]
    },
        {
      "title": "Arquitectura Frontend",
      "description": "Arquitectura de aplicaciones robustas y escalables mediante tipado estricto y el uso de los frameworks más potentes del ecosistema actual.",
      "icons": ["angular", "react", "typescript"]
    },
    {
      "title": "Diseño de producto y UX/UI",
      "description": "Diseño de interfaces inclusivas y sistemas visuales de alta fidelidad, garantizando accesibilidad y usabilidad bajo estándares WCAG.",
      "icons": ["figma", "ux-ui", "w3c"]
    },
    {
      "title": "Maquetación",
      "description": "Maquetación ágil y optimizada con metodologías de utilidades para un desarrollo visual coherente y de alto rendimiento.",
      "icons": ["tailwind", "sass", "css3"]
    },

    {
      "title": "Bases de datos",
      "description": "Gestión de datos persistentes mediante bases de datos NoSQL para el soporte de aplicaciones dinámicas y modernas.",
      "icons": ["mongodb", "firebase"]
    },
    {
      "title": "Gestión Agile de proyectos",
      "description": "Gestión eficiente de proyectos bajo metodologías ágiles, manteniendo el control de versiones y una documentación técnica impecable.",
      "icons": ["jira", "github", "notion"]
    },

  ],
projectsTitle: 'Proyectos',
projects :[

{   
    thumbnail:'assets/images/memory.png',
    title: `Memory cards`,
    description: 'Juego de cartas por parejas para aprender vocabulario en inglés sobre comida, objetos o lugares',
    tags: ['Javascript', 'css3'],
    link: 'https://taticode.github.io/memory-game/',
    gitRepo: 'https://github.com/taticode/memory-game?tab=readme-ov-file'
},
{
    thumbnail:'assets/images/myaura.png',
    title: 'Proyecto futuro',
    description: 'Aquí podrás ver los futuros proyectos que iré publicando',
    tags: '',
    link:'',
    gitRepo:''
},

],
projectsEmpty: 'No hay proyectos que mostrar',
positionsTitle: 'Formación y Experiencia',
filterAll: 'Todos',
filterJobs: 'Experiencia',
filterCourses: 'Cursos',
positions: [
  {
    type: 'job',
    company: 'Desigual - Fhios',
    rol: 'Maquetadora Frontend',
    description: [
      'Implementación y mantenimiento de la maquetación del eCommerce en Salesforce Commerce Cloud.',
      'Colaboración directa con el equipo UX/UI para optimizar usabilidad y accesibilidad.',
      'Mejora del sistema de diseño y estandarización de componentes mediante SCSS.',
      'Optimización del rendimiento visual y mantenimiento cross-browser.',
      'Control de versiones con Git, trabajando bajo metodologías Agile.'
    ],
    startDate: 'Enero 2024',
    endDate: 'Enero 2025'
  },
  {
    type: 'job',
    company: 'Publicis Groupe',
    rol: 'Maquetadora de E-mails',
    description: [
      'Desarrollo de plantillas de correo electrónico responsivas y accesibles en HTML y JSON.',
      'Implementación con Foundation for Emails y SCSS. Aseguramiento de la consistencia visual con las guías de marca.'
    ],
    startDate: 'Junio 2023',
    endDate: 'Diciembre 2023'
  },
  {
    type: 'job',
    company: 'Anjana Data',
    rol: 'Maquetadora Frontend y Diseñadora UI',
    description: [
      'Diseño de interfaces intuitivas en Figma y desarrollo con Angular 12 y SCSS.',
      'Creación de componentes reutilizables y sistemas de diseño (Design Systems).',
      'Mejora de la coherencia visual y usabilidad en productos B2B.',
      'Control de versiones con Git, trabajando bajo metodologías Agile.'
    ],
    startDate: 'Abril 2021',
    endDate: 'Junio 2022'
  },
  {
    type: 'job',
    company: 'NTT Data',
    rol: 'Desarrolladora Frontend',
    description: [
      'Optimización de interfaces existentes en Angular.',
      'Mejora de la accesibilidad (WCAG) y del rendimiento visual.',
      'Refactorización de componentes y resolución de incidencias.'
    ],
    startDate: 'Mayo 2020',
    endDate: 'Enero 2021'
  },
    {
    type: 'job',
    company: 'Zeeker Solutions',
    rol: 'Maquetadora Frontend',
    description: [
      'Desarrollo de interfaces responsive y accesibles con Angular y SCSS.',
      'Creación de componentes personalizados y mantenimiento del estilo visual.',
      'Control de versiones con Git en entornos de trabajo compartidos.'
    ],
    startDate: 'Agosto 2019',
    endDate: 'Noviembre 2019'
  },
  {
    type: 'job',
    company: 'Inserver',
    rol: 'Maquetadora WordPress',
    description: [
      'Creación de landing pages y adaptación de diseños responsive en WordPress.',
      'Optimización de la experiencia de usuario y coherencia visual en la web principal.'
    ],
    startDate: 'Enero 2019',
    endDate: 'Febrero 2019'
  },
  {
    type: 'job',
    company: 'Sapos y Princesas',
    rol: 'Maquetadora WordPress',
    description: [
      'Creación de landing pages y adaptación de diseños responsive en WordPress.',
      'Optimización de la experiencia de usuario y coherencia visual en la web principal.'
    ],
    startDate: 'Febrero 2017',
    endDate: 'Julio 2017'
  }
],
courses: [
  {
    type: 'course',
    company: 'Escuela Trazos',
    rol: 'Curso de Frameworks',
    description: ['Desarrollo full stack con enfoque en arquitectura modular, gestión de estados y consumo de APIs REST'],
    startDate: 'Enero 2019',
    endDate: 'Febrero 2019'
  },
  {
    type: 'course',
    company: 'Escuela Trazos',
    rol: 'Bootcamp UX/UI',
    description: ['Diseño centrado en el usuario, Design Thinking, prototipado con Figma y test de usabilidad.'],
    startDate: 'Marzo 2021',
    endDate: 'Abril 2021'
  },
  {
    type: 'course',
    company: 'AEPI',
    rol: 'Curso Profesional de JavaScript',
    description: ['Programación funcional, manipulación del DOM y consumo de servicios asíncronos.'],
    startDate: 'Enero 2021',
    endDate: 'Febrero 2021'
  },
  {
    type: 'course',
    company: 'Fictizia',
    rol: 'Curso Angular 7',
    description: ['Componentes, rutas, servicios, observables y buenas prácticas de arquitectura.'],
    startDate: 'Junio 2018',
    endDate: 'Julio 2018'
  },
  {
    type: 'course',
    company: 'Fictizia',
    rol: 'Máster en Diseño de Interfaz y Frontend',
    description: ['Maquetación avanzada (HTML5, CSS3, jQuery), diseño responsive, accesibilidad y animaciones.'],
    startDate: 'Enero 2018',
    endDate: 'Febrero 2018'
  },
  {
    type: 'course',
    company: 'Cursos WordPress Madrid',
    rol: 'Curso de WordPress',
    description: ['Creación y personalización de temas, optimización de rendimiento y SEO básico.'],
    startDate: 'Enero 2016',
    endDate: 'Febrero 2016'
  }
],
positionsEmpty: 'No hay empleos que mostrar',
msg1: '¿Te vendría bien el Martes?',
msg2: '¡Perfecto! sobre las 10:00 estoy libre para hacer la entrevista',
msg3: '¡Estupendo!, nos vemos a las 10:00 :)',
contactTitle: 'Contacto',
contactSubtitle: '¿Buscas una visión 360° para tu próximo proyecto?',
contactParagraph: 'Si crees que mi perfil encaja con tu equipo, hablemos a través de LinkedIn o directamente en mi correo: tatianagarcia.dev@gmail.com',
footerClaim1: 'Este portfolio se ha hecho con mucho',
footerClaim2: 'Y mucho té verde',
footerClaim3: '© 2026  Tatiana García - Frontend developer - Todos los derechos reservados - En esta web no se recoge ningún dato personal de usuarios'
};

