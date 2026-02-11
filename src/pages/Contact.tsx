import {
  FaEnvelope,
  FaGlobe,
  FaGithub,
  FaLinkedin,
  FaGraduationCap,
} from 'react-icons/fa'

function Contact(): React.JSX.Element {
  return (
    <section className="contact-section">
      <div className="container">
        <h1 className="section-title">Get In Touch</h1>
        <p className="section-subtitle">
          Open to interesting engineering roles, collaborations, and practical
          product conversations.
        </p>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <a href="mailto:beards.venue-5y@icloud.com">
                <h3>
                  <FaEnvelope aria-hidden="true" />
                  Email
                </h3>
                <p>beards.venue-5y@icloud.com</p>
              </a>
            </div>
            <div className="contact-item">
              <a
                href="https://rsajja.dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>
                  <FaGlobe aria-hidden="true" />
                  Website
                </h3>
                <p>rsajja.dev</p>
              </a>
            </div>
            <div className="contact-item">
              <a
                href="https://github.com/gitroks"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>
                  <FaGithub aria-hidden="true" />
                  GitHub
                </h3>
                <p>@gitroks</p>
              </a>
            </div>
            <div className="contact-item">
              <a
                href="https://linkedin.com/in/rohithsajja"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>
                  <FaLinkedin aria-hidden="true" />
                  LinkedIn
                </h3>
                <p>linkedin.com/in/rohithsajja</p>
              </a>
            </div>
            <div className="contact-item">
              <a
                href="https://scholar.google.com/citations?user=ml4b2TMAAAAJ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>
                  <FaGraduationCap aria-hidden="true" />
                  Google Scholar
                </h3>
                <p>Publications and research profile</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
