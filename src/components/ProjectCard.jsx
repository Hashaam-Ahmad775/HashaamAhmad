import React from "react";

export default function ProjectCard({ title, description, link }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all p-6 w-full max-w-[220px] h-[230px] flex flex-col justify-between border border-gray-300 dark:border-gray-700">
      <h3 className="text-lg font-semibold truncate">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 my-2 flex-1">{description}</p>
      
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-flex items-center justify-center gap-2 text-blue-600 dark:text-blue-400 hover:underline whitespace-nowrap mx-auto"
        style={{ paddingRight: "2px" }}
      >
        <span>View on GitHub</span>
        <i className="fas fa-arrow-right" style={{ paddingTop: "2px" }}></i>
      </a>
    </div>
  );
}
