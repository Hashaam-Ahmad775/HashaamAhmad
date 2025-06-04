import { Link } from "react-scroll";

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="p-4 flex justify-between items-center bg-white dark:bg-gray-900 shadow-md fixed top-0 w-full z-50">
      <h1 className="text-xl font-bold text-gray-900 dark:text-white">Hashaam.dev</h1>
      <div className="flex items-center space-x-6">
        {["about", "projects", "contact"].map((section) => (
          <Link
            key={section}
            activeClass="text-blue-600 dark:text-blue-400 font-semibold"
            to={section}
            spy={true}
            smooth={true}
            offset={-120} // Adjust for fixed navbar height
            duration={500}
            className="cursor-pointer text-sm text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </Link>
        ))}

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded text-sm"
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {darkMode ? "☀ Light" : "🌙 Dark"}
        </button>
      </div>
    </nav>
  );
}
