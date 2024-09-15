import { AiFillMail } from "react-icons/ai";
import Reveal from "./Reveal";

const Contact = () => {
  return (
    <div className="px-6 max-w-[1000px] mx-auto md:my-12" id="contact">
      <Reveal>
        <div className="grid md:grid-cols-2 place-items-center">
          <div>
            <div className="text-gray-300 my-3">
              <h3 className="text-4xl font-semibold mb-5">
                About <span>Me</span>
              </h3>
              <p className="text-justify leading-6 w-11/12">
                With 3 years of experience developing scalable web applications,
                I have a proven track record of success in the web development
                space. I bring a wealth of knowledge and proficiency in various
                technologies to the table, ensuring top-notch solutions for your
                business needs. If you're looking for a results-driven software
                engineer with a passion for full-stack web development and a
                knack for delivering exceptional applications, let's connect!
                Together, we can drive your business forward.
              </p>
            </div>

            <div className="flex mt-10 items-center gap-7">
              <div className="bg-gray-800/40 p-4 rounded-lg">
                <h3 className="md:text-4xl text-2xl font-semibold text-white">
                  10<span>+</span>
                </h3>
                <p className="text-xs md:text-base">
                  <span>Projects</span>
                </p>
              </div>

              <div className="bg-gray-800/40 p-5 rounded-lg">
                <h3 className="md:text-4xl text-2xl font-semibold text-white">
                  3<span>+</span>
                </h3>
                <p className="text-xs md:text-base">
                  <span>years of experience</span>
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center mt-10 md:mt-0">
            <div className="bg-gray-800/40 p-6 rounded-lg w-full">
              <h3 className="text-4xl font-semibold mb-5 text-center text-gray-300">
                Education
              </h3>
              {/* <div className="text-gray-300 mb-5">
                <h4 className="text-2xl font-bold">Jamia Ashrafia</h4>
                <p className="text-lg">Dars e Nizami</p>
                <p className="text-sm">2023 - Present</p>
              </div> */}
              <div className="text-gray-300 mb-5">
                <h4 className="text-2xl font-bold">
                  Punjab University College of Information Technology
                </h4>
                <p className="text-lg">Bachelor’s in Software Engineering</p>
                <p className="text-sm">2018 - 2022</p>
              </div>
              <div className="text-gray-300 mb-5">
                <h4 className="text-2xl font-bold">
                  Government College Township Lahore
                </h4>
                <p className="text-lg">Intermediate</p>
                <p className="text-sm">2016 - 2018</p>
              </div>
              <div className="text-gray-300 mb-5">
                <h4 className="text-2xl font-bold">Qazi Pilot High School</h4>
                <p className="text-lg">Metric</p>
                <p className="text-sm">2014 - 2016</p>
              </div>
              {/* <div className="text-gray-300 mb-5">
                <h4 className="text-2xl font-bold">Jamia Ashrafia</h4>
                <p className="text-lg">Hafiz e Quran</p>
                <p className="text-sm">2011 - 2013</p>
              </div> */}
            </div>
          </div>
        </div>
      </Reveal>
      <div className="flex justify-center items-center mt-10">
        <a
          href="mailto:samiulhaq2928@hotmail.com"
          className="flex items-center gap-2 text-gray-300 text-xl"
        >
          <AiFillMail size={30} />
          <span>Contact Me: samiulhaq2928@hotmail.com</span>
        </a>
      </div>
    </div>
  );
};

export default Contact;
