import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { useEffect, useState } from "react";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="bg-white dark:bg-gray-950 text-black dark:text-white transition-colors duration-300 min-h-screen">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="pt-20 max-w-5xl mx-auto">
        <About />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
