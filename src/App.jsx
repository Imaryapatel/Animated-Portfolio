import './app.scss'; 
import Navbar from './components/navbar/navbar.jsx';
import Sidebar from './components/sidebar/sidebar.jsx';
import Hero from './components/hero/hero.jsx';
import Parallax from './components/parallax/parallax.jsx';
import Services from './components/services/services.jsx';
import Portfolio from './components/portfolio/portfolio.jsx'; 
import Contact from './components/contact/contact.jsx';
import Resume from './components/resume/resume.jsx';

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
