// src/components/Projects.jsx
import ProjectCard from './ProjectCard';
// Importa aquí tus imágenes de proyectos desde la carpeta assets
// import project1Image from '../assets/project1.png';

const projectsData = [
  {
    title: "Clinica San Miguel",
    description: "Desarrrollo frontend grupal de un sistema web de turnos para una clínica.",
    imageUrl: "src/assets/clinica.png", // Reemplaza con tu imagen
    liveUrl: "https://sanmiguelclinicamedica.netlify.app/", // Reemplaza con el link real
    repoUrl: "https://github.com/lk5bull/clinica", // Reemplaza con el link real
  },
  {
    title: "Contador de golpes de boxeo",
    description: "proyecto personal desarrollado con React para contar con presicion estimativa los golpes en boxeo a traves de microfonos.",
    imageUrl: "src/assets/contador.png", // Reemplaza con tu imagen
    liveUrl: "https://contadordegolpesboxeo.netlify.app/",
    repoUrl: "https://github.com/lk5bull/contador-de-golpes-con-sonido",
  },
  {
    title: "G-One",
    description: "Front-end realizado de manera grupal para e-commerce de indumentaria deportiva con html  y bootstrap.",
    imageUrl: "src/assets/g-one.png", // Reemplaza con tu imagen
    liveUrl: "https://g-one-indumentaria.netlify.app/",
    repoUrl: "https://github.com/lk5bull/primer-proyecto-front-grupal",
  },
  {
    title: "Reloj campana de boxeo",
    description: "Aplicacion web desarrollada con React para contabilizar los rounds de boxeo .",
    imageUrl: "src/assets/reloj.png", // Reemplaza con tu imagen
    liveUrl: "https://relojboxeo.netlify.app/",
    repoUrl: "https://github.com/lk5bull/boxing_timer",
  },
];

const Projects = () => {
  return (
    <section id="proyectos" className="container mx-auto py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">Mis Proyectos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;