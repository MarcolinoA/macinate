import "./FooterStyle.css";
import Browse from "./Sections/Browse";
import Contact from "./Sections/Contact";
import FirstSection from "./Sections/FirstSections";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="first-section">
        <FirstSection />
      </div>

      <div className="second-section">
        <Browse />
      </div>

      <div className="third-section">
        <Contact />
      </div>
    </div>
  );
};

export default Footer;