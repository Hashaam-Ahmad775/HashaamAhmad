import { Element } from "react-scroll";

export default function Contact() {
  return (
    <Element name="contact" className="min-h-screen px-6 max-w-xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          className="p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
        />
        <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition">
          Send Message
        </button>
      </form>
    </Element>
  );
}
