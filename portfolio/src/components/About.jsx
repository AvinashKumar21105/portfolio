import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./About.css";

const About = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <section id="about" className="about">
      <Particles
        className="about-particles"
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
            color: { value: "#ffdd57" },
            links: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.2,
              width: 1,
            },
            move: { enable: true, speed: 1.5, random: true, outModes: "out" },
            number: { value: 40, density: { enable: true, area: 800 } },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 2, max: 5 } },
          },
          detectRetina: true,
        }}
      />

      <div className="about-content">
        <h2>About Me</h2>

        <p>
          Hi! I'm <span>Avinash Kumar</span>, a Mechanical Engineer with a
          strong passion for technology and software development. I thrive at
          the intersection of machines and code, combining physical systems
          knowledge with computational problem-solving.
        </p>

        <p>
          During my Mechanical Engineering journey, I mastered concepts of
          design, dynamics, and manufacturing. At the same time, I delved into
          programming and web development, building projects that bridge
          real-world mechanical systems with digital solutions.
        </p>

        <p>
          I believe that the future of engineering lies in integrating hardware
          and software. Whether it’s automating mechanical processes, developing
          simulation tools, or creating smart solutions, I bring a unique
          perspective that blends mechanics with computing.
        </p>

        <p>
          Outside the technical world, I am curious, adaptable, and eager to
          learn. I enjoy exploring new technologies, reading about innovations,
          and applying creative thinking to solve complex challenges.
        </p>

        <p>
          My goal is to work on projects that require both mechanical and
          computational expertise, turning ideas into practical solutions that
          make a real impact.
        </p>
      </div>
    </section>
  );
};

export default About;
