import React from "react";
import "./Certification.css";

const certifications = [
    {
    title: "100 Days of code: The complete python pro Bootcamp",
    issuer: "Udemy",
    link: "https://www.udemy.com/certificate/UC-3cfded0b-25ed-47f4-9da1-c7b556a1322d/",
  },
  {
    title: "AI for Beginners",
    issuer: "HP LIFE",
    link: "https://www.life-global.org/certificate/e7a1d0df-e638-4030-ad02-ab75071c77a9",
  },
  {
    title: "AWS APAC - Solutions Architecture Job Simulation",
    issuer: "Forage",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_cMnkpFf3GDhfW6eNd_1750940733726_completion_certificate.pdf",
  },
  {
    title: "Deloitte Technology Job Simulation",
    issuer: "Forage",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_cMnkpFf3GDhfW6eNd_1749659812838_completion_certificate.pdf",
  },
  {
    title: "EA-Software Engineering Job Simulation",
    issuer: "Forage",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/j43dGscQHtJJ57N54/a77WE3de8qrxWferQ_j43dGscQHtJJ57N54_cMnkpFf3GDhfW6eNd_1750128994484_completion_certificate.pdf",
  },
  {
    title: "TCS MasterCraft Dataplus overview course",
    issuer: "TCS Mastercraft Academy",
    link: "https://drive.google.com/file/d/1Rq0W-0GSv1DwlYwrvmSFT84lzd02bMaj/view?usp=sharing",
  },
   ,

  {
    title: "Get started using Google Analytics",
    issuer: "Skillshop(Google)",
    link: "https://api.accredible.com/v1/auth/invite?code=f9f1661ac21a68963746&credential_id=b1badb0f-6680-496b-b40c-fb2e59fa8fc2&url=https%3A%2F%2Fskillshop.credential.net%2Fb1badb0f-6680-496b-b40c-fb2e59fa8fc2&ident=24239823-320e-43d3-9bf6-8e5b939a11c4",
  },
  {
    title: "Manage GA4 Data and Learn to Read Reports",
    issuer: "Skillshop(Google)",
    link: "https://skillshop.credential.net/a1aa4bee-c9ee-4628-b11a-2f4698e9f9be#acc.vp8wWNh9",
  },
  {
    title: "Data Science 101",
    issuer: "IBM SkillsBuild",
    link: "https://courses.yl-ptech.skillsnetwork.site/certificates/0ac0da8f4cd0438b9453090cf472a097",
  },
  {
    title: "Data Science Foundations - Level 2 (V2)",
    issuer: "IBM SkillsBuild",
    link: "https://www.credly.com/badges/675f7bb8-12d4-4f30-8634-fe9074667712/linked_in_profile",
  },
  {
    title: "Data Science Methodology",
    issuer: "IBM SkillsBuild",
    link: "https://courses.yl-ptech.skillsnetwork.site/certificates/e7c343381efa46dcaeeda853ff778392",
  },
  {
    title: "Data Science Tools",
    issuer: "IBM SkillsBuild",
    link: "https://courses.yl-ptech.skillsnetwork.site/certificates/61c0ac5b41654b0dacc796250437bac5",
  },
  {
    title: "Introduction to Generative AI Studio",
    issuer: "Simplilearn",
    link: "https://certificates.simplicdn.net/share/8550766_89215781751350337272.pdf",
  },
  {
    title: "Introduction to MS Excel",
    issuer: "Simplilearn",
    link: "https://certificates.simplicdn.net/share/8569269_89215781751620584102.pdf",
  },
  {
    title: "TCS iON Career Edge - Young Professional",
    issuer: "TCS iON",
    link: "https://drive.google.com/file/d/1cmdSBW_LWFJvSV_UfOTYkFKtUjI1guE0/view?usp=sharing",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="certifications-section">
      <h2>Certifications</h2>
      <div className="cert-cards">
        {certifications.map((cert, index) => {
          const offset = index % 2 === 0 ? "-20px" : "20px"; 
          return (
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-card"
              key={index}
              style={{ transform: `translateY(${offset})` }}
            >
              <div className="cert-circle">
                <span className="cert-title">{cert.title}</span>
              </div>
              <span className="cert-issuer">{cert.issuer}</span>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Certifications;
