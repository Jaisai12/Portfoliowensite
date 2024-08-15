function Contact() {
  return (
    <section id="Contact" className="contact-section">
      <h2 className="contact-heading">Contact Me</h2>
      <p className="contact-text">
        I’d love to hear from you! You can reach me through any of the following
        channels:
      </p>
      <div className="contact-details">
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:velupulajaisaikumar@gmail.com">
            velupulajaisaikumar@gmail.com
          </a>
        </p>
        <p>
          <strong>Call me:</strong>
          <a href="tel:+918074735810">+91 8074735810</a>
        </p>

        <p>
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/velupula-jaisaikumar-37b92425b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/velupula-jaisaikumar
          </a>
        </p>
        <p>
          <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/Jaisai12/"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/velupula-jaisaikumar
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contact;
