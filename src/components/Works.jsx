import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_demo_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.3, 0.75)}>
      <Tilt
        options={{ max: 25, scale: 1, speed: 400 }}
        className="bg-[#1a1a2e] hover:shadow-xl p-5 rounded-xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px] rounded-lg overflow-hidden">
          <img
            src={image}
            alt="project"
            className="w-full h-full object-cover rounded-lg"
          />

          <div className="absolute inset-0 flex justify-end m-2 gap-2 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="bg-black bg-opacity-70 w-9 h-9 rounded-full flex justify-center items-center cursor-pointer"
              title="GitHub Code"
            >
              <img src={github} alt="source code" className="w-4 h-4 object-contain" />
            </div>
            <div
              onClick={() => window.open(live_demo_link, "_blank")}
              className="bg-white w-9 h-9 rounded-full flex justify-center items-center cursor-pointer"
              title="Live Demo"
            >
              <span className="text-black text-lg">🔗</span>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="text-white font-bold text-xl">{name}</h3>
          <p className="mt-2 text-gray-400 text-sm">{description}</p>
        </div>

        {tags?.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-sm ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        )}
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My Work</p>
        <h2 className={`${styles.sectionHeadText}`}>Featured Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-gray-400 text-[17px] max-w-3xl leading-[28px]"
        >
          Here are 4 of my best projects that highlight my frontend and full-stack development skills. Each project includes a live demo and code repository.
        </motion.p>
      </div>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.slice(0, 5).map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
