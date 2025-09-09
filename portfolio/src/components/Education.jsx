import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <section id="education" className="education">
      <h2>Education Roadmap</h2>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>Primary & Secondary School</h3>
            <span>Lakshmi Chordia Higher Secondary School | 1st - 7th</span>
            <p>
              Built a strong academic foundation and developed curiosity for
              science and mathematics.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>Higher Secondary School</h3>
            <span>Aristo Public School | 8th - 12th | Passout 2023</span>
            <p>
              Excelled in Physics, Chemistry, and Mathematics (PCM) with focus
              on logical thinking and problem solving.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>Undergraduate</h3>
            <span>VIT Chennai | Mechanical Engineering | 2023 - 2027</span>
            <p>
              Pursuing B.Tech in Mechanical Engineering with exposure to CAD,
              manufacturing, mechanical design, coding and web development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
