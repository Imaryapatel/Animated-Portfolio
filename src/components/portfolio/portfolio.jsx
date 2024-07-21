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
    desc: "Using ReactJs & Postman API I've created this beautiful Netflix-Clone. In this you cannot watch the whole serirs but you can surely watch the respective trailer or the BTS of the particular series.",
    visit: "https://netflix-clone-ad3bc.web.app",

  },
  {
    id: 4,
    title: "Ecommerce Website",
    img: "/pr4_img.jpg",
    desc: "This is a unique version of spotify or we can say any music platform. This has been made by using ReactJS & Rapid API with also use of Tailwind CSS framework.",
    visit: "https://refreshed-spotify.netlify.app/",

  },
  {
    id: 5,
    title: "Trek Website",
    img: "/pr5_img.jpg",
    desc: "My very Data analysis Project in which I basically did the data cleaning/Filteration/ETL of the given data using MySQL & Tableau. After that I also Visualised the data and created an attractive, Responsive & Interactive Dashboard.",
    visit:
      "https://public.tableau.com/app/profile/kedar.pandya/viz/Sample_Company_Sales_Insights/Final_Dashboard",
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
