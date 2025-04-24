import { FaCode, FaMapMarkerAlt, FaRocket } from "react-icons/fa";

export default function About() {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-white overflow-hidden" id="about">
      {/* Decorative SVG Blob */}
      <div className="absolute top-0 right-0 opacity-10 z-0 w-[500px] h-[500px] pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path fill="#3b82f6" d="M41.6,-70.2C54.6,-61.3,66.8,-54.1,73.3,-42.2C79.8,-30.3,80.5,-13.6,79.8,2.9C79.2,19.4,77.2,35.6,69.1,48.4C61.1,61.1,46.9,70.3,32,73.6C17.1,76.8,1.6,74.1,-13.4,70.1C-28.4,66.2,-42.8,60.9,-54.6,50.4C-66.4,39.9,-75.6,24.2,-77.8,7.3C-79.9,-9.7,-75.1,-27.9,-65.9,-42.2C-56.8,-56.6,-43.3,-67.2,-28.2,-74.3C-13.1,-81.5,3.7,-85.1,19.8,-81.3C35.9,-77.5,50.5,-66.5,41.6,-70.2Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="relative max-w-4xl mx-auto z-10">
        <h2 className="text-4xl font-bold text-gray-800 mb-10 text-center">
          About <span className="text-blue-600">Me</span>
        </h2>

        <div className="bg-white/90 backdrop-blur-md shadow-lg rounded-2xl p-10 space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            Hello! I'm <span className="text-blue-600 font-semibold">Your Name</span>, a passionate{" "}
            <span className="text-pink-500 font-semibold">Frontend Developer</span> crafting intuitive, accessible,
            and fast web applications with <strong>ReactJS</strong>, <strong>Tailwind CSS</strong> & modern tools.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-800 text-md">
            <div className="flex items-center gap-3">
              <FaCode className="text-blue-500 text-xl" />
              JavaScript, ReactJS, TailwindCSS
            </div>
            <div className="flex items-center gap-3">
              <FaRocket className="text-pink-500 text-xl" />
              Pixel-perfect UI, fast delivery
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-red-500 text-xl" />
              Based in Delhi, India
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
