import Reveal from "./Reveal";

const skills = [
  {
    category: "Technical Skills",
    technologies: [
      { name: "Web Development" },
      { name: "App Development" },
      { name: "UI/UX Designing" },
      { name: "Machine Learning" },
      { name: "AI" },
      { name: "Quality Assurance" },
      { name: "Data Engineering" },
      { name: "Software Design" },
      { name: "Database Systems" },
      { name: "Security Practices" },
    ],
  },
  {
    category: "Languages & Frameworks",
    technologies: [
      { name: "React" },
      { name: "Node.js" },
      { name: "Python (Django)" },
      { name: "Ruby on Rails" },
      { name: "Java (SpringBoot)" },
      { name: "C++" },
      { name: "C#" },
      { name: "Flutter" },
      { name: "MongoDB" },
      { name: "Greenplum" },
    ],
  },
  {
    category: "Tools & Platforms",
    technologies: [
      { name: "Docker" },
      { name: "AWS" },
      { name: "Git & GitHub" },
      { name: "Kubernetes" },
      { name: "Apache Spark" },
      { name: "JIRA" },
      { name: "MS Office" },
      { name: "Figma" },
      { name: "Slack" },
      { name: "Postman" },
    ],
  },
  {
    category: "Non-Technical Skills",
    technologies: [
      { name: "Leadership" },
      { name: "Communication" },
      { name: "Problem Solving" },
      { name: "Creativity" },
      { name: "Open-mindedness" },
      { name: "Innovation" },
      { name: "Adaptability" },
      { name: "Team Player" },
      { name: "Management" },
      { name: "Critical Thinking" },
    ],
  },
];

const Skills = () => {
  return (
    <div
      className="max-w-[900px] mx-auto flex flex-col justify-center px-6 text-gray-200 pb-12 md:py-16"
      id="skills"
    >
      <Reveal>
        <h2 className="text-4xl font-bold mb-6 text-center">Skills</h2>
        <p className="text-center mb-12 text-lg text-gray-300">
          I possess a diverse set of technical and non-technical skills that
          help me deliver robust and innovative software solutions. Here are
          some of them:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="border border-purple-600 p-8 rounded-xl bg-gradient-to-br via-purple-900 to-black shadow-lg hover:shadow-purple-600/50 transition-shadow duration-300 ease-in-out transform hover:-translate-y-2"
            >
              <h3 className="text-2xl font-bold mb-6 text-center text-purple-300">
                {skill.category}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {skill.technologies.map((tech, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-center space-x-8 p-2 rounded-md bg-purple-700/10 hover:bg-purple-700/40 transition-colors duration-200"
                  >
                    <span className="text-white text-center">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
};

export default Skills;
