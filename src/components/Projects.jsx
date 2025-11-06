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
  thceylonchai,
  finmyanmar,
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
      codeLinks: [{ label: "View Code", url: "https://github.com/zafar-m3n/zafar-m3n.github.io" }],
    },
    {
      id: 2,
      title: "EzDoctor",
      description:
        "A powerful doctor appointment management system built with the MERN stack. Handles scheduling, patient records, and real-time availability efficiently.",
      image: ezdoctor,
      tags: ["react", "node", "mongodb"],
      codeLinks: [
        { label: "View Frontend Code", url: "https://github.com/zafar-m3n/EzDoctor-frontend" },
        { label: "View Backend Code", url: "https://github.com/zafar-m3n/EzDoctor-backend" },
      ],
    },
    {
      id: 3,
      title: "Snakes and Ladders",
      description:
        "A fully functional Snakes and Ladders game built with Java and OOP. Features a clean GUI and smooth gameplay — nostalgic and educational.",
      image: snakes,
      tags: ["java"],
      codeLinks: [{ label: "View Code", url: "https://github.com/zafar-m3n/snakesandladders" }],
    },
    {
      id: 4,
      title: "Job.lk",
      description:
        "A modern freelancing platform connecting Sri Lankan developers with local clients. Built using the MERN stack with MySQL for robust data management.",
      image: joblk,
      tags: ["react", "node", "mysql"],
      codeLinks: [{ label: "View Code", url: "https://github.com/zafar-m3n/G3_Job.lk" }],
    },
    {
      id: 5,
      title: "XploreSriLanka",
      description:
        "An AI-powered itinerary generator mobile app that helps tourists plan perfect trips across Sri Lanka. Built in Kotlin with OpenAI for smart suggestions.",
      image: xploresl,
      tags: ["kotlin", "openai"],
      codeLinks: [{ label: "View Code", url: "https://github.com/zafar-m3n/ExploreSriLanka" }],
    },
    {
      id: 6,
      title: "NAHS_Learning",
      description:
        "A full-featured LMS built for an educational institute in Sri Lanka. Developed using PHP and Laravel, it supports courses, assessments, and student progress tracking.",
      image: nahs,
      tags: ["laravel", "php"],
      codeLinks: [
        { label: "View Main LMS Code", url: "https://github.com/zafar-m3n/NAHS_Learning" },
        { label: "View Quiz App Code", url: "https://github.com/zafar-m3n/NAHS_QuizApp" },
      ],
    },
    {
      id: 7,
      title: "Package Delivery Management System",
      description:
        "An end-to-end delivery management platform with real-time tracking, route optimization, and dashboard insights. Developed using Angular and Node.js.",
      image: packagedelivery,
      tags: ["node", "angular"],
      codeLinks: [
        {
          label: "View Frontend Code",
          url: "https://github.com/zafar-m3n/PackageDeliveryManagementFrontend",
        },
        {
          label: "View Backend Code",
          url: "https://github.com/zafar-m3n/PackageDeliveryManagementBackend",
        },
      ],
    },
    {
      id: 8,
      title: "Internconnect",
      description:
        "A secure platform to manage internships within universities. Features Microsoft account authentication and intuitive dashboards for students and coordinators.",
      image: internconnect,
      tags: ["react", "node", "auth"],
      codeLinks: [
        { label: "View Frontend Code", url: "https://github.com/zafar-m3n/internconnect-client" },
        { label: "View Backend Code", url: "https://github.com/zafar-m3n/internconnect-server" },
      ],
    },
    {
      id: 9,
      title: "YMIAutohub",
      description:
        "A clean, responsive React website for an automotive spare parts seller in Sri Lanka. Features product listings, inquiries, and category browsing.",
      image: ymiautohub,
      tags: ["react"],
      demoLink: "https://ymiautohub.com",
      codeLinks: [{ label: "View Code", url: "https://github.com/zafar-m3n/YMIAutoHub" }],
    },
    {
      id: 10,
      title: "FIN Myanmar",
      description:
        "FIN Myanmar is a non-profit organization dedicated to empowering communities in Myanmar through education, healthcare, and sustainable development programs.",
      image: finmyanmar,
      tags: ["react", "javascript"],
      demoLink: "https://fin-myanmar.vercel.app",
      codeLinks: [{ label: "View Code", url: "https://github.com/zafar-m3n/FINMyanmar" }],
    },
    {
      id: 11,
      title: "T & H Ceylon Chai",
      description:
        "A modern e-commerce website for a Sri Lankan tea brand. Built with React and integrated with WhatsApp for seamless customer inquiries and orders.",
      image: thceylonchai,
      tags: ["react", "javascript"],
      demoLink: "https://th-ceylon-chai.vercel.app",
      codeLinks: [{ label: "View Code", url: "https://github.com/zafar-m3n/THCeylonChai" }],
    },
    {
      id: 12,
      title: "Portfolio Website",
      description:
        "My personal developer portfolio showcasing my journey, projects, and contact information. Built with React and TailwindCSS to reflect my style.",
      image: portfolio,
      tags: ["react"],
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
                {(project.demoLink || project.codeLinks) && (
                  <div className="absolute inset-0 bg-gradient-to-t from-bee-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                      {project.demoLink && (
                        <a
                          href={project.demoLink}
                          className="rounded bg-bee-yellow px-3 py-1 text-sm text-bee-black transition-colors duration-300 hover:bg-bee-light"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live Demo
                        </a>
                      )}
                      {project.codeLinks &&
                        project.codeLinks.map((link, index) => (
                          <a
                            key={index}
                            href={link.url}
                            className="rounded bg-bee-gray px-3 py-1 text-sm text-white transition-colors duration-300 hover:bg-bee-gray/80"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {link.label}
                          </a>
                        ))}
                    </div>
                  </div>
                )}
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
