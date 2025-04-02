import { useState } from 'react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with user authentication, product management, shopping cart, and payment integration.",
      image: "https://same-assets.com/i/d33307e5-3f76-45c6-97a1-06b1b3cf1e7c",
      tags: ["react", "node", "mongodb"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, task assignment, and progress tracking.",
      image: "https://same-assets.com/i/ec58f91e-8f6c-41c4-916f-7a9ac51ae2ea",
      tags: ["react", "firebase"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: 3,
      title: "Financial Dashboard",
      description: "An interactive dashboard for tracking financial data with charts, filters, and data visualization components.",
      image: "https://same-assets.com/i/7e14ca21-dcfd-4e6c-95f2-0f8b7cee4cbb",
      tags: ["react", "node", "mysql"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: 4,
      title: "Blog Platform",
      description: "A content management system for bloggers with markdown support, categories, and user comments.",
      image: "https://same-assets.com/i/f70cde5b-6f96-40a0-ab2e-b34cd13ed33e",
      tags: ["laravel", "mysql"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: 5,
      title: "Real-Time Chat Application",
      description: "A messaging platform with private chats, group conversations, and media sharing capabilities.",
      image: "https://same-assets.com/i/8da4d2c0-4fa1-42e5-b44c-eb55d4db8bed",
      tags: ["react", "node", "mongodb"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: 6,
      title: "Restaurant Reservation System",
      description: "A web application for managing restaurant reservations, table assignments, and waitlists.",
      image: "https://same-assets.com/i/6cbe4a1f-c6aa-4eae-9e9a-f1cc1d21c3dc",
      tags: ["laravel", "mysql"],
      demoLink: "#",
      codeLink: "#",
    }
  ];

  const filters = [
    { value: 'all', label: 'All Projects' },
    { value: 'react', label: 'React.js' },
    { value: 'node', label: 'Node.js' },
    { value: 'laravel', label: 'Laravel' },
    { value: 'mongodb', label: 'MongoDB' },
    { value: 'mysql', label: 'MySQL' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <section id="projects" className="py-20 bg-bee-dark">
      <div className="container px-4 mx-auto">
        <div className="mb-12 text-center">
          <h2 className="section-heading mx-auto">My Projects</h2>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project showcases different skills
            and technologies that I've mastered throughout my journey.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeFilter === filter.value
                  ? 'bg-bee-yellow text-bee-black font-medium'
                  : 'bg-bee-gray/20 text-white hover:bg-bee-yellow/20'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-bee-gray/20 rounded-lg overflow-hidden group hover:transform hover:scale-[1.02] transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bee-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                    <a
                      href={project.demoLink}
                      className="px-3 py-1 bg-bee-yellow text-bee-black text-sm rounded hover:bg-bee-light transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.codeLink}
                      className="px-3 py-1 bg-bee-gray text-white text-sm rounded hover:bg-bee-gray/80 transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-bee-yellow mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-xs rounded bg-bee-yellow/20 text-bee-yellow border border-bee-yellow/30"
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
          <div className="text-center py-12">
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
