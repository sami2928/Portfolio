import ai_admin_portal_project from "../assets/project1.png";
import evee_project from "../assets/evee.png";
import chatbot_project from "../assets/project2.png";
import fraud_engine_project from "../assets/project4.png";
import batch_controller_project from "../assets/project5.png";
import restful_project from "../assets/project6.png";
import streetwyze_project from "../assets/project7.png";
import freelancing_work_project from "../assets/project1.png";
import blog_applicaiton_project from "../assets/project2.png";
import life_zest_pharmacy_project from "../assets/project4.png";
import { AiFillGithub } from "react-icons/ai";
import Reveal from "./Reveal";

const projects = [
  {
    img: ai_admin_portal_project,
    title: "AI Admin Portal",
    description:
      "AI Admin Portal is a comprehensive application developed with React and Spring Boot, aimed at streamlining the management of AI processes and data. It offers an intuitive and user-friendly interface, enhancing usability for administrators. The application was built through meticulous requirement gathering, system design and development practices, which significantly shortened the project timeline. Achievements include successful deployment, thorough testing for reliability and effective team coordination throughout the project lifecycle.",
    links: {
      site: "",
      github: "",
    },
  },
  {
    img: evee_project,
    title: "EVee App",
    description:
      "EVee is an Android fitness app designed for runners, built using the MERN stack and featuring two modules: Admin and Runner. It enables QR code-based run tracking, real-time route monitoring, and runner management. The app ensures secure access with authentication and authorization, providing runners with a seamless experience while tracking their progress and routes.",
    links: {
      site: "",
      github: "https://github.com/sami2928/EVee_Frontend",
    },
  },
  {
    img: chatbot_project,
    title: "Chatbot",
    description:
      "Customer support chatbots, developed using the OpenAI GPT-3.5 Turbo API are designed for both external clients and internal company documentation. These chatbots employ an embedding-based approach and prompt engineering to deliver accurate and contextually relevant responses. Fine-tuning on company-specific datasets and integrating a vector search engine enhance their performance and alignment with business needs. The exploration of advanced techniques like sparse/dense embeddings, Retrieval-Augmented Generation (RAG) and Splade further improves their semantic search capabilities.",
    links: {
      site: "",
      github: "",
    },
  },
  {
    img: fraud_engine_project,
    title: "Fraud_Engine",
    description:
      "Fraud Engine application, built with Apache Spark, Python, and Scala is designed for the training and testing of machine learning models to detect fraud. It leverages MySQL, Docker, GreenPlum, and Informix for database management and seamless client onboarding. The application utilizes MLeap for efficient model pipeline serialization and deserialization, and statistical models based on historical data to enhance fraud detection and reduce losses. Rigorous testing improved performance by 25%, significantly boosting both functionality and reliability.",
    links: {
      site: "",
      github: "",
    },
  },
  {
    img: batch_controller_project,
    title: "Batch Controller",
    description:
      "BatchController is an Java Spring Boot application designed to deploy machine learning models for real-time fraud detection in financial transactions. It includes services for data streaming via Kafka, model predictions and the generation and storage of statistics. The application enhances security through authentication, authorization, encryption and input validation. Implementing Maven improved code quality and reduced deployment times by 15%, while thorough test case development boosted performance by 20%. Real-time fraud detection systems often use machine learning to analyze transactional patterns and flag unusual behavior within milliseconds.",
    links: {
      site: "",
      github: "",
    },
  },
  {
    img: restful_project,
    title: "Restful",
    description:
      "Restful developed using Java Spring Boot, is designed for real-time fraud prediction in financial transactions. It processes data from Kafka streams to compute and store hourly-based statistics, integrating robust security measures such as authentication, authorization, encryption and input validation. Maven implementation improved code quality and reduced deployment times by 15%, while rigorous testing and performance enhancements resulted in a 20% boost in application efficiency. This comprehensive solution ensures reliable fraud detection and efficient data management.",
    links: {
      site: "",
      github: "",
    },
  },
  {
    img: streetwyze_project,
    title: "Streetwyze",
    description:
      "Streetwyze Ruby on Rails web application allows users to manage favorite places, ratings, stories, photos and videos. It leverages key Rails concepts like associations, validations and polymorphic behavior to ensure efficient data handling. The app features a question-based survey system tailored to specific areas and employs advanced techniques such as background job processing and caching. Additionally, it demonstrates a strong grasp of deployment options, security practices and scalability considerations.",
    links: {
      site: "",
      github: "",
    },
  },
  {
    img: freelancing_work_project,
    title: "Freelance Work",
    description:
      "Freelance Work Android app provides clients with access to both online and physical services while offering freelancers a platform to earn substantial income. It features a user-friendly interface and seamless functionality, showcasing expertise in Android development. The app delivers scalable and innovative solutions, catering to the evolving needs of clients and freelancers in a dynamic marketplace environment.",
    links: {
      site: "",
      github: "",
    },
  },
  {
    img: blog_applicaiton_project,
    title: "Blog Applicaiton",
    description:
      "Blog Application, developed using the ASP .NET MVC framework, offers a platform for users to write and publish their own blog posts. It includes features such as user authentication, blog post creation and management and commenting functionality. The application emphasizes a seamless and user-friendly experience, leveraging ASP .NET MVC expertise to deliver a fully functional and intuitive blogging environment.",
    links: {
      site: "",
      github: "",
    },
  },
  {
    img: life_zest_pharmacy_project,
    title: "Life Zest Pharmacy",
    description:
      "Life Zest Pharmacy app, developed using HTML, CSS, JavaScript, MySQL and PHP is a comprehensive solution for pharmacy operations. It features an interactive user interface crafted with front-end technologies and leverages PHP for server-side functionality and MySQL for efficient data management. Key functionalities include inventory management, customer records and order processing, demonstrating strong skills in web development and database integration.",
    links: {
      site: "",
      github: "",
    },
  },
];

const Projects = () => {
  return (
    <div className="max-w-[1000px] mx-auto p-6 md:my-20" id="portfolio">
      <h2 className="text-3xl font-bold text-gray-200 mb-8">Projects</h2>
      {projects.map((project, index) => (
        <Reveal key={index}>
          <div
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } mb-12`}
          >
            <div className="w-full md:w-1/2 p-12">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-gray-200 mb-4">
                {project.title}
              </h3>
              <p className="text-gray-400 text-justify leading-6 mb-6">
                {project.description}
              </p>
              <div className="flex">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    className="flex-none w-32 px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                    transition duration-300 text-center flex items-center justify-center text-sm mr-3"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillGithub className="inline mr-2" />
                    Github
                  </a>
                )}
                {project.links.site && (
                  <a
                    href={project.links.site}
                    className="flex-none w-32 px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                    transition duration-300 text-center flex items-center justify-center text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Website
                  </a>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
};

export default Projects;
