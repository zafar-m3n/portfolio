const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React.js", level: 90 },
        { name: "JavaScript", level: 95 },
        { name: "HTML/CSS", level: 85 },
        { name: "TailwindCSS", level: 90 },
        { name: "UI/UX Design", level: 80 },
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
        { name: "Firebase", level: 80 },
        { name: "Database Design", level: 85 },
        { name: "ORM/ODM", level: 80 },
      ],
    },
    {
      title: "Other Skills",
      skills: [
        { name: "Git/GitHub", level: 85 },
        { name: "OOP", level: 70 },
        { name: "Flutter/Kotlin", level: 65 },
        { name: "Java", level: 75 },
        { name: "C#", level: 60 },
      ],
    },
  ];

  return (
    <section id="skills" className="bg-bee-black py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="section-heading mx-auto">My Skills</h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="rounded-lg border border-bee-yellow/20 bg-bee-gray bg-opacity-20 p-6 transition-all duration-300 hover:border-bee-yellow/50"
            >
              <h3 className="mb-4 text-xl font-bold text-bee-yellow">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="mb-1 flex justify-between">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-bee-yellow">{skill.level}%</span>
                    </div>
                    <div className="h-2.5 w-full rounded-full bg-bee-dark">
                      <div
                        className="h-2.5 rounded-full bg-bee-yellow transition-all duration-1000"
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
          <h3 className="mb-6 text-center text-xl font-bold text-bee-yellow">
            Other Technologies & Tools I Work With
          </h3>
          <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-4">
            {[
              "AWS",
              "Angular",
              "Redux",
              "Next.js",
              "GitHub Actions",
              "Agile/Scrum",
              "Jira",
              "RESTful APIs",
              "Responsive Design",
              "Jest",
              "Postman",
              "Figma",
            ].map((tech, index) => (
              <span
                key={index}
                className="rounded-full border border-bee-yellow/30 bg-bee-gray/20 px-4 py-2 text-white transition-colors duration-300 hover:border-bee-yellow hover:bg-bee-yellow/10"
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
