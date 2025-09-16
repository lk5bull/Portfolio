// src/components/Footer.jsx
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <p>&copy; {currentYear} Lucas David Ibañez. Todos los derechos reservados.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://github.com/lk5bull" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/lucas-iba%C3%B1ez-392095120/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaLinkedin size={24} />
          </a>
          {/* Agrega otros enlaces si lo deseas */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;