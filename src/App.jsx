import "/Users/aryapatel/animated-portfolio/src/app.scss"
import Navbar from "/Users/aryapatel/animated-portfolio/src/components/navbar/Navbar.jsx"
import Test from "./Test";
import Sidebar from "./components/sidebar/sidebar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio"; 
import Contact from "./components/contact/Contact";
import Resume from "./components/resume/Resume";


const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Sidebar />
        <Hero />
      </section>
      
      <section id="Services"><Parallax type="services"/></section>
      <section><Services/></section>
      <section id="Portfolio"><Parallax type="portfolio"/></section>
      <Portfolio />
      <section id="Contact">
        <Resume />
      </section>
      
      <section id="Contact">
        <Contact />
      </section>
  
      
    </div>
  );
};

export default App;
