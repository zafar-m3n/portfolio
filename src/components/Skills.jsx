const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React.js", level: 90 },
        { name: "JavaScript", level: 95 },
        { name: "HTML/CSS", level: 85 },
        { name: "TailwindCSS", level: 90 },
        { name: "UI/UX Design", level: 75 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 85 },
        { name: "Laravel", level: 80 },
        { name: "PHP", level: 75 },
        { name: "REST APIs", level: 90 },
      ],
    },
    {
      title: "Database",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "Redis", level: 70 },
        { name: "Database Design", level: 85 },
        { name: "ORM/ODM", level: 80 },
      ],
    },
    {
      title: "Other Skills",
      skills: [
        { name: "Git/GitHub", level: 85 },
        { name: "OOP", level: 80 },
        { name: "Data Structures", level: 75 },
        { name: "Java", level: 65 },
        { name: "C#", level: 60 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-bee-black">
      <div className="container px-4 mx-auto">
        <div className="mb-12 text-center">
          <h2 className="section-heading mx-auto">My Skills</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-bee-gray bg-opacity-20 p-6 rounded-lg border border-bee-yellow/20 hover:border-bee-yellow/50 transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-4 text-bee-yellow">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-bee-yellow">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-bee-dark rounded-full h-2.5">
                      <div
                        className="bg-bee-yellow h-2.5 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-bold mb-6 text-bee-yellow text-center">Other Technologies & Tools I Work With</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "AWS", "Firebase", "Redux", "Next.js", "GitHub Actions",
              "Agile/Scrum", "RESTful APIs", "Responsive Design", "Webpack", "Jest"
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full bg-bee-gray/20 text-white border border-bee-yellow/30 hover:border-bee-yellow hover:bg-bee-yellow/10 transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
