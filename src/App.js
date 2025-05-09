import { useState } from "react";
import "./styles.css";
// import "bootstrap"


const servicesData = [
  {
    name: "Mast and tower installation",
    service: "Design and deployment of mast for corporate organizations"
  },
  {
    name: "Local Area Network Installation",
    service:"Design and deployment of reputable LAN network"
  },
  {
    name: "UPS and Inverter Installations",
    service: "Installation of uninterrupted power supply and inverters",
  },
  {
    name: "Supply of IT infrastructure",
    service: "Provision of software solutions"
  }
]

function App() {
  return (
    <div>
  <Navbar />
  <Body />
  <Services />
  <AboutAndContact />
  <Footer />
    </div>
  );
}
function Navbar(){
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(prev => !prev);
    };
return <>
 <header className="navbar">
    <div className="logo">Orgx</div>
      <button className="menu-toggle" onClick={toggleMenu}>
        &#9776;
      </button>
      <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
      <a href="#">Home</a>
      <a href="#">Services</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </nav>
  </header>
    
  </>
}
function Body(){
  return <section className="hero-section">
      <div className="overlay">
        <h1>Empowering Businesses with Technology Solutions</h1>
        <p>Enabling organizations to achieve success through innovative technological advancements.</p>
        <button className="btn-start"><a>Get Started</a></button>
      </div>
    </section>

}
function Services() {
  return (
    <div className="services-container">
      <h1 className="services-header">Our Services</h1>
      <div className="services-objects">
        {servicesData.map((service) => (
          <ServiceCard serviceObject={service} key={service.name} />
        ))}
      </div>
    </div>
  );
}

function ServiceCard({ serviceObject }) {
  return (
    <div className="service-card">
      <h3 className="service-title">{serviceObject.name}</h3>
      <p className="service-description">{serviceObject.service}</p>
    </div>
  );
}
function AboutAndContact(){
  return <>
  <div className="container">
    <div className="about">
    <h1>About us</h1>
    <p>We are a leading providers of technology solutions and infrastructures, with innovative activites and innovative software solutions.</p>
    <h1>Our Mission</h1>
    <p>Our mission is to provide relative and efficient technology solutions to enable our clients to achieve success.</p>
    </div>
    <div className="contact">
      <h1>Contact us</h1>
      <input type="text" placeholder="Name"/>
      <input type="Email" placeholder="Email"/>
      <input type="text" placeholder="Subject"/>
      <input type="text" placeholder="Message"/>
      <button className="btn-send">Send Message</button>
    </div>
  </div>
  </>
}
function Footer(){
return <footer>
  &copy; 2025 ORGX Investment Limited. All rights reserved
</footer>
}
export default App;

