import { Element } from "react-scroll";
import profilePic from "../assets/hashaam.jpg";
import resumePDF from "../assets/hashaam_resume.pdf";

function About() {
  return (
    <Element name="about" className="min-h-screen pt-10 px-4 text-center">
      <h2 className="text-3xl font-bold mb-8">About Me</h2>

      <div className="flex justify-center mb-6">
        <img
          src={profilePic}
          alt="Hashaam"
          className="w-40 h-40 rounded-full object-cover border-4 border-blue-500 dark:border-blue-300"
        />
      </div>

      <p className="mb-6 max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
        I am a passionate front-end developer with experience in React and Tailwind CSS.
        I enjoy building responsive, user-friendly web apps and continuously learning new technologies.
      </p>

      <div className="flex justify-center gap-4">
        <a
          href={resumePDF}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          View Resume
        </a>

        <a
          href={resumePDF}
          download="Hashaam_Resume.pdf"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          Download Resume
        </a>
      </div>
    </Element>
  );
}

export default About;
