// src/components/Hero.jsx
const Hero = () => {
  return (
    <section className="container mx-auto flex flex-col items-center text-center py-20 px-6">
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
        Hola, soy <span className="text-blue-400">Lucas David Ibañez</span>
      </h1>
      <p className="text-lg md:text-2xl text-gray-300 mb-8">
        Desarrollador Full Stack MERN | Creando aplicaciones web modernas y funcionales.
      </p>
      <a
        href="#proyectos"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
      >
        Ver mis Proyectos
      </a>
    </section>
  );
}

export default Hero;