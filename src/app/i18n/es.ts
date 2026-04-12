
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
    subtitle: 'Desarrollo aplicaciones en Angular con foco en arquitectura limpia, accesibilidad y una buena experiencia de usuario',
    buttonProjects: 'Ver Proyectos'
},
projectsTitle: 'Proyectos',
projects :[

{   
    thumbnail:'assets/images/nana.png',
    title: `Primer proyecto`,
    description: 'Aquí se incluye la descripción del proyecto en cuestión, una app propia hecha con angular, tailwind y css. Con control de versiones en git',
    tags: ['Angular','Tailwind','UX/UI','Figma'],
    button: 'Detalles'
},
{
    thumbnail:'assets/images/myaura.png',
    title: 'Segundo proyecto',
    description: 'Aquí se incluye la descripción del proyecto en cuestión, una app propia hecha con angular, tailwind y css. Con control de versiones en git',
    tags: ['Angular','Tailwind','UX/UI','Figma'],
    button: 'Detalles'
},
{
    thumbnail:'assets/images/ecomarket.png',
    title: 'Tercer proyecto',
    description: 'Aquí se incluye la descripción del proyecto en cuestión, una app propia hecha con angular, tailwind y css. Con control de versiones en git',
    tags: ['Angular','Tailwind','UX/UI','Figma'],
    button: 'Detalles'
}
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
contactTitle: 'Contacto',
contactSubtitle: 'Si estás buscando un perfil híbrido para tu proyecto, puedes escribirme por Linkedin',
footerClaim1: 'Este portfolio se ha hecho con mucho',
footerClaim2: 'Y mucho té verde',
footerClaim3: '© 2026  Tatiana García - Frontend developer - Todos los derechos reservados - En esta web no se recoge ningún dato personal de usuarios'
};

