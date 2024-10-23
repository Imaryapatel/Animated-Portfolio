import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>My Experiences</p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>January 2021</motion.b> to
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>December 2023</motion.b>
          </h1>
          
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2> cWizer Infotech</h2>
          <p>
          As a Data Analyst, I worked on developing Python script to automate data imports into a MySQL database, increasing data processing speed by 30%. Collaborating with data scientists and developers, I contributed to the creation of an NLP-driven AI chatbot to improve user data collection. I also utilized SQL to extract data and integrated insights into Power BI for advanced data visualization and reporting, enabling better decision-making and analysis.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>MyEquation</h2>
          <p>
          As a Business Analyst, I automated repetitive web tasks using Python and Selenium, reducing manual workload by 30%. Leveraging Power BI with DAX and Power Query, I developed real-time sales dashboards to optimize KPI tracking. By utilizing Google BigQuery for large dataset analysis, I linked key insights to Power BI for enhanced reporting. Additionally, I used MySQL Workbench to run SQL queries, ensuring data integrity and actionable insights for informed decision-making.
          </p>        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Research Work / INDIACom 2023</h2>
          <p>
          I developed a method for natural image matting using Poisson Equations, enabling direct matte reconstruction from a continuous gradient field, and implemented interactive manipulation of the gradient field to locally enhance matting results for superior outcomes.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
