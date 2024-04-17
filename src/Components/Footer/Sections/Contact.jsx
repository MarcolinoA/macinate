import CallIcon from "./Assets/CallIcon";
import EmailIcon from "./Assets/EmailIcon";
import PositionIcon from "./Assets/PositionIcon";

const Contact = () => {
  return (
    <div className="contact">
      <h4 className="contact-title title">Contatti</h4>
      <p className="address desc">Via Grazia Deledda, 111, 73040 Specchia LE</p>

      <div className="maps-field">
        <div className="maps-icon">
          <PositionIcon />
        </div>
        <div className="maps-link">
          <a
            className="a"
            href="https://www.google.com/maps/place/Macinate+Cantine+1931/@39.9363001,18.3010051,17z/data=!3m1!4b1!4m6!3m5!1s0x13440e5c03151981:0x8efcb87bda329136!8m2!3d39.936296!4d18.30358!16s%2Fg%2F11_pr07b7?entry=ttu"
          >
            MACINATE CANTINE 1931
          </a>
        </div>
      </div>

      <div className="phone-field">
        <div className="phone-icon">
          <CallIcon />
        </div>
        <div className="phone-link">
          <a className="a" href="tel:3299297439">
          3299297439
          </a>
        </div>
      </div>

      <div className="email-field">
        <div className="email-icon">
          <EmailIcon />
        </div>
        <div className="email-link">
          <a className="a" href="mailto:provamacinate@gmail.com">
            provamacinate@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
