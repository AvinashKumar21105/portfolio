import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { SiSalesforce } from "react-icons/si";
import "./Hero.css";

const Hero = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <section className="hero">
      <Particles
        id="tsparticles"
        className="particles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: "transparent" },
          fpsLimit: 60,
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" } },
            modes: { repulse: { distance: 100, duration: 0.4 } },
          },
          particles: {
            number: { value: 60, density: { enable: true, area: 800 } },
            color: { value: "#ffdd57" },
            shape: { type: "circle" },
            opacity: { value: 0.6 },
            size: { value: { min: 2, max: 5 } },
            links: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.3,
              width: 1,
            },
            move: { enable: true, speed: 1.5, outModes: "out" },
          },
          detectRetina: true,
        }}
      />

      {/* Hero Content */}
      <div className="hero-content">
        <h1>Hi, I'm Avinash Kumar</h1>
        <p>
          I am a{" "}
          <span className="typewriter">
            <Typewriter
              words={[
                "Mechanical Engineer",
                "Developer",
                "AI/ML Enthusiast",
                "Student",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </p>

        <div className="hero-footer">
          <div className="hero-buttons">
            <a href="/resume.pdf" download className="download-btn">
              Download Resume
            </a>
          </div>

          <div className="hero-social-section">
            <span className="social-tagline">Connect with me:</span>
            <div className="hero-socials">
              <a
                href="https://www.linkedin.com/in/avinash-kumar211/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:avinashvijayakumar211@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
              <a
                href="https://github.com/AvinashKumar21105"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.salesforce.com/trailblazer/mpkfr1hz6g36hxhlok"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Salesforce"
              >
                <SiSalesforce />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-image">
        <img src="/avinash.jpg" alt="Avinash Kumar" />
      </div>
    </section>
  );
};

export default Hero;
