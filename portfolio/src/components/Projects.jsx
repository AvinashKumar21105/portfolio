import "./Projects.css";

const projects = [
  {
    title: "AI Fault Prediction System",
    description:
      "An AI-powered system to predict and auto-correct machine faults.",
    techStack: "Python, TensorFlow, Flask, HTML, CSS",
    githubLink: "https://github.com/AvinashKumar21105/sensor_detection",
  },
  {
    title: "Agree Deal",
    description:
      "A platform for farmers to sell produce directly to consumers.",
    techStack: "Python, Flask, HTML, CSS, SQLAlchemy",
    githubLink: "https://github.com/AvinashKumar21105/AgreeDeal",
  },
  {
    title: "Cloud Based Fingerprint Door Clock System",
    description:
      "Control home appliances using ESP32 and a mobile web interface.",
    techStack: "ESP32, MQTT, Arduino, HTML, CSS",
    githubLink: "https://github.com/avinash-iot-home",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase my projects and skills.",
    techStack: "React.js, HTML, CSS",
    githubLink: "https://github.com/avinash-portfolio",
  },
  {
    title: "EV Recharge Station App",
    description:
      "An app to locate, book, and manage electric vehicle charging stations.",
    techStack: "Python, Flask, HTML, CSS, Javascript ,SQLAlchemy",
    githubLink: "https://github.com/AvinashKumar21105/Ev_recharge_station",
  },
  {
    title: "Student-Teacher Appointment Booking",
    description:
      "A platform where students can book appointments with teachers for academic guidance.",
    techStack: "Python, Flask, HTML, CSS, Javascript ,SQLAlchemy",
    githubLink: "https://github.com/AvinashKumar21105/teacher_sttudent_booking",
  },
  {
    title: "Unmute",
    description: "A Stealthy SOS Website and also a PWA Application",
    techStack: "Python, Flask, HTML, CSS, Javascript ,Twillio API",
    githubLink: "https://github.com/AvinashKumar21105/unmute6",
  },
];


export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((proj, index) => (
          <div key={index} className="project-card">
            <h3>{proj.title}</h3>
            <p className="description">{proj.description}</p>
            <p className="techstack">
              <strong>Tech Stack:</strong> {proj.techStack}
            </p>
            <a
              href={proj.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
