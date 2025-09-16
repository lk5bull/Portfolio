// src/components/Skills.jsx
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiMongodb, SiExpress } from 'react-icons/si';

const skills = [
  { name: 'React', icon: <FaReact size={64} className="text-sky-400" /> },
  { name: 'JavaScript (ES6+)', icon: <SiJavascript size={64} className="text-yellow-400" /> },
  { name: 'Node.js', icon: <FaNodeJs size={64} className="text-green-500" /> },
  { name: 'Express', icon: <SiExpress size={64} className="text-gray-400" /> },
  { name: 'MongoDB', icon: <SiMongodb size={64} className="text-green-600" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={64} className="text-teal-400" /> },
  { name: 'HTML5', icon: <FaHtml5 size={64} className="text-orange-500" /> },
  { name: 'CSS3', icon: <FaCss3Alt size={64} className="text-blue-500" /> },
  { name: 'Git', icon: <FaGitAlt size={64} className="text-red-500" /> },
  // Agrega más habilidades aquí
];

const Skills = () => {
  return (
    <section id="habilidades" className="container mx-auto py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">Habilidades Técnicas</h2>
      <div className="flex flex-wrap justify-center gap-8 md:gap-12">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-lg transform hover:scale-110 transition duration-300">
            {skill.icon}
            <p className="mt-4 text-lg font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;