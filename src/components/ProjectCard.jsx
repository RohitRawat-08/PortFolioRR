import React from 'react';
import { motion } from 'framer-motion';
import style from "../Css/ProjectCard.module.css";
import { FaGithub } from 'react-icons/fa';

const ProjectCard = (props) => {
  let { image_url, project_name, tech_used, site_link, git_link } = props;
  
  return (
    <>
      <motion.div 
        className={style.ProjectCard}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.div 
          className={style.ProjectImage}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img src={image_url} alt="" />
        </motion.div>
        <motion.div 
          className={style.techused}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p>{tech_used}</p>
        </motion.div>
        <motion.div 
          className={style.ProjectName}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p>{project_name}</p>
        </motion.div>
        <motion.div 
          className={style.livebuttons}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {site_link ? (
            <>
              <a href={site_link} target="_blank">Live</a>
              <a href={git_link} target="_blank"><FaGithub size={25} /></a>
            </>
          ) : (
            <>
              <span></span>
              <a href={git_link} target="_blank" title="Detailed description in README"><FaGithub size={25} /></a>
            </>
          )}
        </motion.div>
      </motion.div>
    </>
  );
};

export default ProjectCard;
