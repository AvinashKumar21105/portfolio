import React from "react";
import './Experience.css'
const experiences = [
  {
    title: "Summer Intern",
    duration: "15th June 2025 – 15th July 2025",
    description:
      "At Heubach Colour Private Limited. Worked on optimizing water consumption in slurry filtration processes using advanced techniques and AI integration, achieving up to 92% water savings.",
    link: "https://example.com/certificate1",
  },
  {
    title: "Python Development Intern",
    duration: "25th June 2025 – 25th August 2025",
    description:
      "At Next24Tech Technology and Services. Developed API integration, LLM, and NLP-based chatbots. Built a lyrics finder tool using song names and APIs.",
    link: "https://example.com/certificate3",
  },
  {
    title: "Full Stack Web Development Intern",
    duration: "1st July 2025 – 1st August 2025",
    description:
      "At Unified Mentor Private Limited. Developed an EV Recharge Booking Platform allowing users to find nearby stations, book slots, and manage profiles. Built a Student-Teacher Appointment Scheduling System enabling video calls, offline meetings, and real-time availability tracking.",
    link: "https://example.com/certificate2",
  },
  {
    title: "Front-End Web Development Intern",
    duration: "21st August 2025 – 2nd October 2025",
    description:
      "At Edunet Foundation | AICTE SkillsBuild Program powered by IBM. Gained hands-on experience in HTML, CSS, JavaScript, and front-end frameworks. Worked on real-world projects and attended industry masterclasses.",
    link: "https://example.com/certificate4",
  },
];


const ExperienceSection = () => {
  return (
    <section id="experience" className="experience-section">
      <h2>Experience</h2>
      <div className="progress-bar">
        <div className="progress-bar-line"></div>

        {experiences.map((exp, i) => {
          const leftPercent = (i / (experiences.length - 1)) * 100;
          return (
            <React.Fragment key={i}>
              <div
                className="milestone-dot"
                style={{ left: `${leftPercent}%` }}
                title={exp.title}
              ></div>
              <div
                className="milestone-description"
                style={{ left: `${leftPercent}%` }}
              >
                <h4>
                  <a href={exp.link} target="_blank" rel="noopener noreferrer">
                    {exp.title}
                  </a>
                </h4>
                <span className="duration">{exp.duration}</span>
                <p>{exp.description}</p>
              </div>
              <div
                className="milestone-title"
                style={{ left: `${leftPercent}%` }}
              >
                <a href={exp.link} target="_blank" rel="noopener noreferrer">
                  {exp.title}
                </a>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
};

export default ExperienceSection;
