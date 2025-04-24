import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaWordpress, FaFigma } from 'react-icons/fa';

const skills = [
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
  { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-400" /> },
  { name: 'ReactJS', icon: <FaReact className="text-cyan-500" /> },
  { name: 'WordPress', icon: <FaWordpress className="text-indigo-600" /> },
  { name: 'Figma (UI/UX)', icon: <FaFigma className="text-pink-500" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 border rounded-xl hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{skill.icon}</div>
              <p className="text-lg font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
