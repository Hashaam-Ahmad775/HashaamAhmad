import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-scroll"; // ✅ Import Link from react-scroll

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Section 1: Title */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-lg font-semibold mb-2">Hashaam</h4>
          <p className="text-sm text-gray-400">Front-end Developer Portfolio</p>
        </div>

        {/* Section 2: Navigation with Smooth Scroll */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-lg font-semibold mb-2">Navigation</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                offset={-120} // Adjust for fixed navbar height
                className="cursor-pointer hover:underline"
              >
                About me
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                offset={-120} // Adjust for fixed navbar height
                className="cursor-pointer hover:underline"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-120} // Adjust for fixed navbar height
                className="cursor-pointer hover:underline"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Section 3: Social Links */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-lg font-semibold mb-2">Connect</h4>
          <div className="flex gap-4 justify-center md:justify-start">
            <a
              href="https://github.com/Hashaam-007"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-blue-400 transition"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
            <a
              href="https://linkedin.com/in/muhammad-hashaam"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-400 transition"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm py-4 text-gray-500 border-t border-gray-700">
        © {new Date().getFullYear()} Hashaam
      </div>
    </footer>
  );
}
