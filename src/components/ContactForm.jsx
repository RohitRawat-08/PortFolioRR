import { useState } from "react";
import { motion } from "framer-motion"; 
import style from "../Css/ContactForm.module.css";
import cont from "../assets/Contact.png";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      const formDetails = new FormData();
      formDetails.append("name", formData.name);
      formDetails.append("email", formData.email);
      formDetails.append("message", formData.message);
  
      try {
        const response = await fetch("https://formsubmit.co/rsrawat2929@gmail.com", {
          method: "POST",
          body: formDetails,
        });
  
        if (response.ok) {
          alert("Email sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        } else {
          alert("Error sending email.");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };
  

  return (
    <>
      <motion.h2 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        Contact
      </motion.h2>

      <motion.div 
        className={style.formContainer}
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.6 }}
      >
        <form onSubmit={handleSubmit}>
          <div className={style.formGroup}>
            <motion.input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? style.inputError : ""}
              whileFocus={{ scale: 1, borderColor: "#007bff" }}
            />
            {errors.name && <p className={style.errorText}>{errors.name}</p>}
          </div>

          <div className={style.formGroup}>
            <motion.input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? style.inputError : ""}
              whileFocus={{ scale: 1, borderColor: "#007bff" }}
            />
            {errors.email && <p className={style.errorText}>{errors.email}</p>}
          </div>

          <div className={style.formGroup}>
            <motion.textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className={errors.message ? style.inputError : ""}
              rows="4"
              whileFocus={{ scale: 1, borderColor: "#007bff" }}
            ></motion.textarea>
            {errors.message && <p className={style.errorText}>{errors.message}</p>}
          </div>

          <motion.button 
            type="submit" 
            className={style.submitBtn}
            whileHover={{ scale: 1 }}
            whileTap={{ scale: 0.9 }}
          >
            Submit
          </motion.button>
        </form>

        <motion.img 
          src={cont} 
          alt="Contact" 
          className={style.contImage} 
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        />
      </motion.div>
    </>
  );
};

export default ContactForm;
