import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const ContactForm = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        "service_plmlkmo",
        "template_01b99ci",
        form.current,
        "pmGe3XNcd3Tj3e-Mp"
      )
      .then(
        (result) => {
          setStatus("✅ Message sent successfully!");
          setLoading(false);
          form.current.reset();
        },
        (error) => {
          setStatus("❌ Failed to send message. Try again!");
          setLoading(false);
        }
      );
  };

  return (
    <section className="contact-section" id="contact">
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>
        {status && <p className="status">{status}</p>}
      </form>
    </section>
  );
};

export default ContactForm;
