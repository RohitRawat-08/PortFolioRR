import React from "react";
import { motion } from "framer-motion";
import styles from "../Css/NavFooter.module.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.div className={styles.footer}>
      {/* <motion.p
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}>Connect with me</motion.p>

      <motion.div
        className={styles.socialLinks}
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
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
      </motion.div> */}

      <motion.p
        className={styles.made}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1 }}
      >
        © 2025 made by Rohit
      </motion.p>
    </motion.div>
  );
};

export default Footer;
