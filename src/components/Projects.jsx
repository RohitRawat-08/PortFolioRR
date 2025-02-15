import React from 'react'
import ProjectCard from "./ProjectCard"
import styles from '../Css/Project.module.css'
import assets_data from '../assets/projectdeitals'
import { div } from 'framer-motion/client'


const Projects = () => {

  let project_data = assets_data.project_data

  return (
    <div className={styles.projectLst}>
     {project_data.map( (data) => (
      <ProjectCard key={data.id} 
        image_url={data.image_url}
        project_name={data.project_name}
        tech_used={data.tech_used}
        site_link={data.site_link}
        git_link={data.git_link}
      />
     ))}

      
    </div>


  )
}

export default Projects
