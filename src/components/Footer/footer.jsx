import { useNavigate } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer_container">
      <div>
        <div className="footer_menu">
          <a href="./dataAnalysis">Data Analysis</a>
          <span>-</span>
          <a href="./contact">Contact Us</a>
          <span>-</span>
          <a href="./about">About</a>
        </div>
        <div className="analysis">
          <span> News Analysis </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
