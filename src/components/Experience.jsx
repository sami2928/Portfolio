import { motion } from "framer-motion";
import Reveal from "./Reveal";

const experiences = [
  {
    company: "Freelancer",
    period: "June 2024 - Present",
    description:
      "Full Stack Software Engineer with a track record of delivering robust and scalable solutions for diverse clients. Proficient in developing intuitive interfaces and seamless user experiences that align with both client goals and technical requirements.",
  },
  {
    company: "I2C - Software Engineer AI",
    period: "Nov 2022 - Present",
    description:
      "Developed machine learning models for fraud detection, handling large datasets and delivering valuable business insights. Implemented RESTful APIs and BatchController APIs for real-time fraud predictions, using Java Spring Boot, Apache Spark and Python. Streamlined team processes by implementing Maven, reducing deployment times by 15% and enhanced application performance by 20% through testing and performance optimization. Additionally, played a key role in developing an AI Admin Portal using React and Spring Boot and managing chatbot development using OpenAI's GPT-3.5 API for external and internal clients.",
  },
  {
    company: "Infinikorn - Associate Software Engineer Web",
    period: "Jun 2022 - Nov 2022",
    description:
      "Developed web applications Streetwyze, Admin-LTE, and Daily-Blog using Ruby on Rails, React, and PostgreSQL. Worked on implementing authentication, database management and extended functionality through various Ruby gems. Gained experience in deploying Rails applications, managing security considerations and scaling web platforms. Additionally, developed Rspecs for testing these applications to ensure code reliability and functionality.",
  },
  {
    company: "Infinikorn",
    period: "Apr 2022 - Jun 2022",
    description:
      "Gained hands-on experience in web development using Ruby on Rails, React and PostgreSQL. Implemented features such as user authentication and data management for the Streetwyze web app. During internship, I deepened my understanding of MVC architecture, Ruby programming and advanced Rails concepts like associations and validations, while also learning best practices for deployment and scaling.",
  },
];

const Experience = () => {
  return (
    <div className="max-w-full mx-auto flex flex-col justify-center px-6 text-gray-200 pb-12">
      <h1 className="text-4xl font-bold text-center mb-12">Experience</h1>
      <motion.div
        className="grid grid-cols-1 gap-8"
        initial="hidden"
        animate="visible"
      >
        {experiences.map((experience, index) => (
          <Reveal key={index}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1 }}
              className={`border border-purple-600 p-8 rounded-xl shadow-lg bg-purple-700/10 hover:shadow-purple-600/50 transition-shadow duration-300 ease-in-out transform mt-2 hover:-translate-y-2`}
            >
              <h2 className="text-gray-100 text-xl font-semibold mb-2">
                {experience.company}
              </h2>
              <p className="text-gray-300 mb-2">{experience.period}</p>
              <p className="text-gray-400 text-justify leading-8 flex-grow overflow-auto">
                {experience.description}
              </p>
            </motion.div>
          </Reveal>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;
