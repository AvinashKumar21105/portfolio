import React, { useState, useEffect, useRef } from "react";
import "./Skills.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiFlask,
  SiTailwindcss,
  SiBootstrap,
  SiMongodb,
  SiSqlalchemy,
  SiFirebase,
  SiExpress,
  SiR,
  SiAutodesk,
  SiIntellijidea,
  SiPycharm,
} from "react-icons/si";
import { GiCircuitry } from "react-icons/gi";
import { DiVisualstudio } from "react-icons/di";

const skillList = [
  { icon: <FaHtml5 />, name: "HTML" },
  { icon: <FaCss3Alt />, name: "CSS" },
  { icon: <FaJs />, name: "JavaScript" },
  { icon: <FaReact />, name: "React.js" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <SiExpress />, name: "Express.js" },
  { icon: <SiFlask />, name: "Flask" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  { icon: <SiBootstrap />, name: "Bootstrap" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiSqlalchemy />, name: "SQLAlchemy" },
  { icon: <SiFirebase />, name: "Firebase" },
  { icon: <GiCircuitry />, name: "Arduino" },
  { icon: <SiAutodesk />, name: "SolidWorks" },
  { icon: <FaGitAlt />, name: "GitHub" },
  { icon: <SiPycharm />, name: "PyCharm" },
  { icon: <DiVisualstudio />, name: "VS Code" },
  { icon: <SiIntellijidea />, name: "IntelliJ IDEA" },
  { icon: <FaPython />, name: "Python" },
  { icon: <SiR />, name: "R" },
];

const Skills = () => {
  const [centerText, setCenterText] = useState("My Skills");
  const radius = 180; 
  const wheelRef = useRef(null);

  useEffect(() => {
    let start;
    let animationFrameId;

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const rotation = (elapsed / 20000) * 360;
      if (wheelRef.current) {
        wheelRef.current.style.setProperty("--rotation", `${rotation}deg`);
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>

      <div className="skill-wheel-container">
        <div className="skill-wheel" ref={wheelRef}>
          <div className="skill-center">{centerText}</div>
          {skillList.map((skill, idx) => {
            const angle = (idx / skillList.length) * 360; 
            return (
              <div
                key={idx}
                className="skill-icon"
                style={{
                  transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
                }}
                onMouseEnter={() => setCenterText(skill.name)}
                onMouseLeave={() => setCenterText("My Skills")}
              >
                {skill.icon}
              </div>
            );
          })}
        </div>
      </div>

      <div className="skill-grid">
        <div className="skill-card">
          <h3>Web Development</h3>
          <p>
            MATLAB, R, HTML, CSS, JavaScript, React.js, Node.js, Express.js,
            Flask, Tailwind CSS, Bootstrap, MongoDB, SQLAlchemy, Firebase
          </p>
        </div>
        <div className="skill-card">
          <h3>IoT & Embedded Systems</h3>
          <p>
            Arduino, ESP32, Microcontrollers, Sensors & Actuators Integration,
            Mosquitto, MQTT
          </p>
        </div>
        <div className="skill-card">
          <h3>Mechanical & Simulation</h3>
          <p>SolidWorks, ANSYS</p>
        </div>
        <div className="skill-card">
          <h3>Platforms & IDEs</h3>
          <p>GitHub, PyCharm, VS Code, IntelliJ IDEA, Arduino IDE</p>
        </div>
        <div className="skill-card">
          <h3>AI & Machine Learning</h3>
          <p>Python, TensorFlow, NumPy, Pandas</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
