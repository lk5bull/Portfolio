// src/components/Navbar.jsx
import { useState } from 'react';
import miLogo from '../assets/fotomia.jpg'; // Asegúrate de tener esta imagen en la carpeta assets
const Navbar = () => {
  // 1. Estado para controlar si el modal (imagen ampliada) está visible o no
  const [isModalOpen, setIsModalOpen] = useState(false);
  const imagePath = miLogo; // Guardamos la ruta para reutilizarla

  return (
    <>
      <nav className="bg-gray-800 text-white p-4 shadow-md sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          
          {/* 2. Imagen del logo con evento onClick para abrir el modal */}
          <button onClick={() => setIsModalOpen(true)} className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-lg">
            <img src={imagePath} width="80px" height="80px" alt="Logo personal" className="rounded-lg" />
          </button>

          <ul className="flex space-x-4">
            {/* 3. Botones con más notoriedad (fondo, padding, bordes redondeados y transición) */}
            <li>
              <a 
                href="#proyectos" 
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md font-semibold transition-colors duration-300"
              >
                Proyectos
              </a>
            </li>
            <li>
              <a 
                href="#habilidades" 
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md font-semibold transition-colors duration-300"
              >
                Habilidades
              </a>
            </li>
            <li>
              <a 
                href="#contacto" 
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md font-semibold transition-colors duration-300"
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* 4. Modal para la imagen ampliada (se muestra solo si isModalOpen es true) */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={() => setIsModalOpen(false)} // Cierra el modal al hacer clic en el fondo
        >
          <div className="relative">
            {/* Hacemos que al hacer clic en la imagen no se cierre el modal (evita la propagación del clic al fondo) */}
            <img 
              src={imagePath} 
              alt="Logo ampliado" 
              className="max-w-lg max-h-[80vh] rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()} 
            />
            <button 
              className="absolute top-2 right-2 text-white text-3xl font-bold bg-gray-800 bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75"
              onClick={() => setIsModalOpen(false)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;