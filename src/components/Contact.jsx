import React from 'react';
import { FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-white text-center">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <p className="text-gray-600 mb-4">Feel free to connect with me professionally.</p>

        <div className="flex flex-col items-center gap-6 text-lg text-gray-700">
          <div className="flex items-center gap-3">
            <FaLinkedin className="text-blue-600 text-xl" />
            <a
              href="https://www.linkedin.com/in/yourusername"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              linkedin.com/in/yourusername
            </a>
          </div>

          <div className="flex items-center gap-3">
            <FaEnvelope className="text-red-500 text-xl" />
            <span>yourname[at]gmail[dot]com</span>
          </div>

          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-green-600 text-xl" />
            <span>New Delhi, India</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
