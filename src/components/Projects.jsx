import { useState } from "react";
import {
  ezdoctor,
  ceylontea,
  snakes,
  joblk,
  xploresl,
  nahs,
  packagedelivery,
  internconnect,
  ymiautohub,
  portfolio,
} from "../assets/images";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Ceylon Tea Website",
      description:
        "A beautifully crafted promotional site for the Sri Lankan tea industry. My first ever website using HTML, CSS, and JavaScript. Simple, elegant, and informative.",
      image: ceylontea,
      tags: ["html", "css", "javascript"],
      demoLink: "https://zafar-m3n.github.io",
      codeLink: "https://github.com/zafar-m3n/ceylon-tea-website",
    },
    {
      id: 2,
      title: "EzDoctor",
      description:
        "A powerful doctor appointment management system built with the MERN stack. Handles scheduling, patient records, and real-time availability efficiently.",
      image: ezdoctor,
      tags: ["react", "node", "mongodb"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: 3,
      title: "Snakes and Ladders",
      description:
        "A fully functional Snakes and Ladders game built with Java and OOP. Features a clean GUI and smooth gameplay — nostalgic and educational.",
      image: snakes,
      tags: ["java"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: 4,
      title: "Job.lk",
      description:
        "A modern freelancing platform connecting Sri Lankan developers with local clients. Built using the MERN stack with MySQL for robust data management.",
      image: joblk,
      tags: ["react", "node", "mysql"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: 5,
      title: "XploreSriLanka",
      description:
        "An AI-powered itinerary generator mobile app that helps tourists plan perfect trips across Sri Lanka. Built in Kotlin with OpenAI for smart suggestions.",
      image: xploresl,
      tags: ["kotlin", "openai"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: 6,
      title: "NAHS_Learning",
      description:
        "A full-featured LMS built for an educational institute in Sri Lanka. Developed using PHP and Laravel, it supports courses, assessments, and student progress tracking.",
      image: nahs,
      tags: ["laravel", "php"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: 7,
      title: "Package Delivery Management System",
      description:
        "An end-to-end delivery management platform with real-time tracking, route optimization, and dashboard insights. Developed using Angular and Node.js.",
      image: packagedelivery,
      tags: ["node", "angular"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: 8,
      title: "Internconnect",
      description:
        "A secure platform to manage internships within universities. Features Microsoft account authentication and intuitive dashboards for students and coordinators.",
      image: internconnect,
      tags: ["react", "node", "auth"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: 9,
      title: "YMIAutohub",
      description:
        "A clean, responsive React website for an automotive spare parts seller in Sri Lanka. Features product listings, inquiries, and category browsing.",
      image: ymiautohub,
      tags: ["react"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: 10,
      title: "Portfolio Website",
      description:
        "My personal developer portfolio showcasing my journey, projects, and contact information. Built with React and TailwindCSS to reflect my style.",
      image: portfolio,
      tags: ["react"],
      demoLink: "#",
      codeLink: "#",
    },
  ];

  const filters = [
    { value: "all", label: "All Projects" },
    { value: "react", label: "React.js" },
    { value: "node", label: "Node.js" },
    { value: "laravel", label: "Laravel" },
    { value: "mongodb", label: "MongoDB" },
    { value: "mysql", label: "MySQL" },
    { value: "php", label: "PHP" },
    { value: "java", label: "Java" },
    { value: "kotlin", label: "Kotlin" },
    { value: "html", label: "HTML" },
    { value: "css", label: "CSS" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.tags.includes(activeFilter));

  return (
    <section id="projects" className="bg-bee-dark py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="section-heading mx-auto">My Projects</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-300">
            Here are some of the projects I've worked on. Each one demonstrates my passion for
            development, creativity, and solving real-world problems through technology.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {filters.map((filter, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(filter.value)}
              className={`rounded-full px-4 py-2 transition-all duration-300 ${
                activeFilter === filter.value
                  ? "bg-bee-yellow font-medium text-bee-black"
                  : "bg-bee-gray/20 text-white hover:bg-bee-yellow/20"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group overflow-hidden rounded-lg bg-bee-gray/20 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bee-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                    <a
                      href={project.demoLink}
                      className="rounded bg-bee-yellow px-3 py-1 text-sm text-bee-black transition-colors duration-300 hover:bg-bee-light"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.codeLink}
                      className="rounded bg-bee-gray px-3 py-1 text-sm text-white transition-colors duration-300 hover:bg-bee-gray/80"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="mb-2 text-xl font-bold text-bee-yellow">{project.title}</h3>
                <p className="mb-4 text-sm text-gray-300">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="rounded border border-bee-yellow/30 bg-bee-yellow/20 px-2 py-1 text-xs text-bee-yellow"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-gray-300">No projects found with the selected filter.</p>
          </div>
        )}

        <div className="mt-12 text-center">
          <a
            href="https://github.com/zafar-m3n"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            See More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
