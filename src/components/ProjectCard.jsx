// src/components/ProjectCard.jsx
const ProjectCard = ({ title, description, imageUrl, liveUrl, repoUrl }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
      <img className="w-full h-56 object-cover" src={imageUrl} alt={`Captura de pantalla de ${title}`} />
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex space-x-4">
          <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Ver Deploy</a>
          <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded">Código en GitHub</a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;