import { Element } from "react-scroll";
import ProjectCard from "../components/ProjectCard.jsx";
import { useState, useEffect } from "react";

const projects = [
  { title: "Weather App", description: "Check weather using OpenWeather API.", github: "https://github.com/yourusername/weather-app" },
  { title: "Calculator App", description: "Basic calculator built with React.", github: "https://github.com/yourusername/calculator-app" },
  { title: "Todo App", description: "Add, remove, complete tasks.", github: "https://github.com/yourusername/todo-app" },
  { title: "Currency Exchanger", description: "Convert currencies in real-time.", github: "https://github.com/yourusername/currency-exchanger" },
  { title: "Blog Platform", description: "Write and read blogs with markdown support.", github: "https://github.com/yourusername/blog-platform" },
  { title: "Ecommerce App", description: "Mock eCommerce frontend.", github: "https://github.com/yourusername/ecommerce-app" }
];

function Projects() {
  const [startIndex, setStartIndex] = useState(0);
  const [projectsToShow, setProjectsToShow] = useState(4);

  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width < 768) setProjectsToShow(2);
      else if (width < 1024) setProjectsToShow(3);
      else setProjectsToShow(4);
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const handlePrev = () => {
    if (startIndex > 0) setStartIndex(startIndex - 1);
  };

  const handleNext = () => {
    if (startIndex + projectsToShow < projects.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const visibleProjects = projects.slice(startIndex, startIndex + projectsToShow);

  return (
    <Element name="projects" className="min-h-screen px-4 text-center">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>

      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          disabled={startIndex === 0}
          className={`w-10 h-10 flex items-center justify-center rounded-full text-xl font-bold 
            transition-all shadow-lg
            ${startIndex === 0
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-gray-200 hover:bg-gray-300 text-black dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"
              }`}
        >
          ‹
        </button>

        {/* Projects Grid */}
        <div className="flex gap-4 sm:gap-6 flex-1 justify-center overflow-hidden px-4">
          {visibleProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              link={project.github}
            />
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          disabled={startIndex + projectsToShow >= projects.length}
          className={`w-10 h-10 flex items-center justify-center rounded-full text-xl font-bold 
            transition-all shadow-lg
            ${startIndex + projectsToShow >= projects.length
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-gray-200 hover:bg-gray-300 text-black dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"
              }`}
        >
          ›
        </button>
      </div>
    </Element>
  );
}

export default Projects;
