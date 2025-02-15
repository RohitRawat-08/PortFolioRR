import React from "react";
import { motion } from "framer-motion";
import style from "../Css/home.module.css";
import Rohit from "../assets/rohit.png";
import css from "../assets/css.png";
import html from "../assets/html.png";
import js from "../assets/js.png";
import python from "../assets/python.png";
import dj from "../assets/django.png";
import sql from "../assets/sql.png";
import reactimg from "../assets/React.webp";
import git from "../assets/git-icon.webp";
import github from "../assets/Github.png";
import tail from "../assets/tailwind_css.png";
import ProjectCard from "./ProjectCard";
import share from "../assets/share-solid.svg";
import { useNavigate } from "react-router-dom";
import assets_data from "../assets/projectdeitals";
import DynamicTitle from "./DynamicTitle";
import ContactForm from "./ContactForm";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { PiLineVerticalLight } from "react-icons/pi";


const Home = () => {
  const navigate = useNavigate();
  let data = assets_data.data;

  const handleshare = () => {
    navigate("/projects");
  };

  return (
    <>
      <section className={style.sideIcons}>

              <motion.div
                className={style.socialLinks}
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              >
                <div className={style.verLine} >
                
                </div>
                <motion.a
                  href="https://www.linkedin.com/in/rohit-singh-rawat-5540171b6/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaLinkedin size={25} />
                </motion.a>
                <motion.a
                  href="https://github.com/RohitRawat-08"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaGithub size={25} />
                </motion.a>
                <motion.a
                  href="mailto:rsrawat2929@gmail.com"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaEnvelope size={25} />
                </motion.a>
        </motion.div>
      </section>




      <section className={style.content}>

        <motion.div 
          className={style.left}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <p>Hello I am Rohit Singh Rawat</p>
          {/* <div>Frontend Developer and Full Stack Enthusiast......</div> */}
          <div>
            <DynamicTitle />
          </div>
          <p className={style.subhead}>
            Passionate about building interactive and user-friendly web applications.
          </p>
        </motion.div>

        <motion.div 
          className={style.image}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <img src={Rohit} alt="Rohit Singh Rawat" />
        </motion.div>

      </section>

      <section className={style.skills}>
        <motion.h2 
         initial={{ opacity: 0, x: -100 }}
         animate={{ opacity: 1, x: 0 }}
         whileInView={{ opacity: 1, x: 0 }}
         viewport={{ once: false, amount: 0.2 }}
         transition={{ duration: 1.5, ease: "easeOut" }}
         >Skills
        </motion.h2>
        <motion.div 
          className={style.skillContainer}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1 }}
        >
          <div className={style.skillSlider}>
            {[css, html, js, python, dj, reactimg, tail, git, sql, github].map(
              (img, index) => (
                <img key={index} src={img} alt="Skill Icon" className={style.skillIcon} />
              )
            )}
          </div>
        </motion.div>
      </section>

      <motion.section className={style.Projects}
         initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: false, amount: 0.2 }}
         transition={{ duration: 1 }}
      >
        <div className={style.ProjectHead}>
          <h2>Projects</h2>
          <div onClick={handleshare}> <p>View all</p> <img src={share} alt="" /></div> 
        </div>
        
        <motion.div 
          className={style.projectcard}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1 }}
        >
          {data.map((data) => (
            <ProjectCard
              key={data.id}
              image_url={data.image_url}
              project_name={data.project_name}
              tech_used={data.tech_used}
              site_link={data.site_link}
              git_link={data.git_link}
            />
          ))}
        </motion.div>
      </motion.section>

      <motion.section className={style.About}
       initial={{ opacity: 0, scale: 0.9 }}
       whileInView={{ opacity: 1, scale: 1 }}
       viewport={{ once: false, amount: 0.2 }}
       transition={{ duration: 0.8 }}
       >
        <div className={style.AboutHead}>
          <h2>About-me</h2> 
        </div>
        <motion.div 
          className={style.AboutMe}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <p>Hello, I'm Rohit!</p>
          <p>
            I hold a Bachelor’s degree in Computer Applications from Aravali College of Engineering & Management. With a strong foundation in HTML, CSS, JavaScript, React.js, Django, Python, and SQL, I specialize in building interactive, user-centric web applications.
          </p>
          <p>Passionate about crafting seamless digital experiences, I am always eager to explore new technologies and optimize performance. My goal is to develop scalable, high-performance solutions that drive engagement and innovation.</p>
          <p>Let’s collaborate and create something exceptional! 🚀</p>
        </motion.div>
      </motion.section>
      <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      >
        <ContactForm />
      </motion.div>
    </>
  );
};

export default Home;
