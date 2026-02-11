import { type ContactFormData } from '../types/contact'
import {
  FaEnvelope,
  FaGlobe,
  FaGithub,
  FaLinkedin,
  FaGraduationCap,
} from 'react-icons/fa'

function Contact(): React.JSX.Element {
  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>): void => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    
    const nameValue = formData.get('name')
    const emailValue = formData.get('email')
    const messageValue = formData.get('message')
    
    if (
      nameValue === null ||
      emailValue === null ||
      messageValue === null ||
      typeof nameValue !== 'string' ||
      typeof emailValue !== 'string' ||
      typeof messageValue !== 'string'
    ) {
      return
    }
    
    const data: ContactFormData = {
      name: nameValue,
      email: emailValue,
      message: messageValue,
    }
    void data
  }

  return (
    <section className="contact-section">
      <div className="container">
        <h1 className="section-title">Get In Touch</h1>
        <p className="section-subtitle">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your visions.
        </p>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <a href="mailto:beards.venue-5y@icloud.com">
                <h3>
                  <FaEnvelope aria-hidden="true" />
                  Email
                </h3>
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
              </a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
