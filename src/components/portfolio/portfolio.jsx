import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Android Malware Detection",
    img: "/pr1_img.jpg",
    desc: "Developed a malware detection project using Pandas, NumPy, and Matplotlib for data manipulation and visualization, implementing PCA for dimensionality reduction and leveraging Random Forest and XGBoost classifiers for effective malware classification.",
    visit: "https://github.com/Imaryapatel/MAJOR-PROJECT-084-125",
  },
  {
    id: 2,
    title: "Poisson Matting",
    img: "/pr2_img.png",
    desc: "Developed a method for natural image matting utilizing Poisson Equations for direct matte reconstruction from a continuous gradient field. Implemented interactive manipulation of the gradient field to locally enhance matting results, achieving superior image matting outcomes.",
    visit: "https://github.com/Imaryapatel/Poisson-Matting",
  },
  {
    id: 3,
    title: "MarineBot Analysis",
    img: "/pr3_img.jpg",
    desc: "Developed a MATLAB and Simulink project to create an optimized navigation path for a rover with checkpoints. The system detects underwater artifacts, tracks motion using sensors, and provides real-time feedback to ensure stable and safe navigation.",
    visit: "https://github.com/Imaryapatel/Rover-Monitoring-System",

  },
  {
    id: 4,
    title: "Ecommerce Website",
    img: "/pr4_img.jpg",
    desc: "Created an eCommerce website that allows users to browse, search, and purchase products online. It includes features like a shopping cart, secure payment integration, and user authentication for a seamless shopping experience.",
    visit: "https://imaryapatel.github.io/E-Commerce-website/",

  },
  {
    id: 5,
    title: "Trek Website",
    img: "/pr5_img.jpg",
    desc: "I developed a trekking website that allows users to explore various trekking routes, view detailed trail information, and book treks online. The site features user reviews, difficulty ratings, and gear recommendations to help trekkers plan their adventures easily.",
    visit:
      "https://imaryapatel.github.io/Trek-website/",
  },

];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.visit}><button>See Demo</button></a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
