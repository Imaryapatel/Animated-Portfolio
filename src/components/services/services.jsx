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
          As a Web Developer intern at cWizer Infotech India, I had the opportunity to develop dynamic and responsive websites for a diverse range of clients. My role involved collaborating with cross-functional teams to ensure the delivery of user-friendly and visually appealing websites that met client specifications and industry standards.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>MyEquation</h2>
          <p>
          As the Business Development Operations Head at MyEquation, I leveraged advanced Excel for data analysis and optimized marketing and sales strategies. Using Power BI, I transformed complex data into actionable insights. I established key partnerships with companies like Boston Dynamics, connecting 150+ students to opportunities, and collaborated with the stakeholders to ensure effective project execution.
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
