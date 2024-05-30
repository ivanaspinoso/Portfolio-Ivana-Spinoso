import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Soy una apasionada desarrolladora front end y diseñadora UX UI con una habilidad especial para crear aplicaciones web robustas y escalables. He perfeccionado mis habilidades en tecnologías front-end como React, Redux, TailwindCSS, así como en tecnologías back-end como Node.js, MySQL, PostgreSQL y Sequelize. Además, como diseñadora UX UI, manejo Figma para crear diseños intuitivos y atractivos. Mi objetivo es aprovechar mi experiencia para crear soluciones innovadoras que impulsen el crecimiento empresarial y ofrezcan experiencias de usuario excepcionales.`;

export const ABOUT_TEXT = `Soy una desarrolladora full stack y diseñadora UX UI versátil, apasionada por crear aplicaciones web eficientes y fáciles de usar. Manejo una variedad de tecnologías, incluyendo JavaScript, React, Redux, Node.js, HTML, TailwindCSS, Express, PostgreSQL y Figma. Mi trayectoria en el desarrollo web y el diseño comenzó con una profunda curiosidad por el funcionamiento de las cosas, evolucionando hasta convertirse en una carrera donde me esfuerzo por aprender y adaptarme a nuevos desafíos constantemente. Disfruto trabajar en entornos colaborativos y resolver problemas complejos para ofrecer soluciones de alta calidad. Además de la codificación y el diseño, me gusta mantenerme activa y explorar nuevas tecnologías.`;

export const EXPERIENCES = [
  {
    year: "2023 - 2024",
    role: "Diseñadora UX-UI",
    company: "Digital Horizons Studio",
    description: `Creación de wireframes y prototipos interactivos para validar conceptos de diseño y funcionalidades.Realización de pruebas de usabilidad y análisis de retroalimentación de usuarios para iterar y mejorar diseños. Investigación continua sobre tendencias de diseño y mejores prácticas de experiencia de usuario para mantenerse al día con los avances en el campo.`,
    technologies: ["Figma"],
  },
  {
    year: "2020 - 2021",
    role: "Comunity Manager",
    company: "Emprendimiento familiar",
    description: `Desarrollar y ejecutar estrategias de contenido para aumentar el compromiso y la interacción de la audiencia. 
    Crear y programar publicaciones atractivas y relevantes en plataformas como Instagram.Gestionar la comunidad en línea respondiendo preguntas, comentarios y mensajes de los seguidores de manera oportuna y profesional.
    Mantenerse al tanto de las tendencias y novedades en redes sociales y en la industria de alimentos y bebidas para identificar oportunidades de contenido y participación.`,
  },
  
];

export const PROJECTS = [
  {
    title: "PinkPanther Indumentaria ",
    image: project1,
    description:
      "PinkPanther Indumentaria es una aplicación que permite al usuario buscar ropa, ver detalles,poder comprar implementando pasarelas de pago (Mercado pago), y dejar reseñas. Además de esto se implementaron diversos roles de usuario, para el administrador y para clientes , y su autenticación utilizando Firebase.",
    technologies: ["React", "Redux", "TailwindCSS", "Node.js", "Express", "Firebase", "PostgreSQL", "Sequelize"],
    link: "https://pinkpantherfront.vercel.app/"
  },
  {
    title: "Drivers App",
     image: project2,
    description:
      "Aplicación que tenía como objetivo la construcción de una Single Page Application con funcionalidades de búsqueda,filtrados, ordenamiento y creación para gestionar datos de conductores de manera eficiente.",
    technologies: ["React", "Redux", "Axios", "Sequelize", "PostgreSQL", "Express"],
    link: "https://github.com/ivanaspinoso/cr-pi-drivers-main"
  },
  {
    title: "Portfolio Diseño UX UI",
    image: project3,
    description:
      "Portfolio personal de diseño UX UI mostrando los proyectos, mis habilidades, y contacto.",
    technologies: ["Figma"],
    link: "https://www.figma.com/proto/5AeGqZ7SnaTeevyNXxQh9n/Portfolio?node-id=1-2&starting-point-node-id=1%3A2&scaling=scale-down"
  },
  
  
];

export const CONTACT = {
  address: "Bahia Blanca, Buenos Aires, Argentina ",
  phoneNo: "+54 291 4621375",
  email: "sivana361@gmail.com",
};
