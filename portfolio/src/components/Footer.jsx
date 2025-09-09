import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { SiSalesforce } from "react-icons/si";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a
          href="https://www.linkedin.com/in/avinash-kumar211/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a href="mailto:avinashvijayakumar211@gmail.com">
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/AvinashKumar21105"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.salesforce.com/trailblazer/mpkfr1hz6g36hxhlok"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiSalesforce />
        </a>
      </div>

      <p className="footer-copy">
        &copy; 2025 Avinash Kumar. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
