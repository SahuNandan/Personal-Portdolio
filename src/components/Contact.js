import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faTwitter, faMedium, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; 
import '../assests/styles/Contact.css'; 

const Contact = () => {
  return (
    <>
    <hr></hr>
    <section id="contact">
      <h1>Contact</h1>
      <div className="contact-container">
        <div className="contact-item">
          <a href="https://wa.me/918928191339?text=Hello! Express Your Thoughts" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} size="2x" />
          </a>
          <p>WhatsApp</p>
        </div>
        <div className="contact-item">
          <a href="https://x.com/ArtistArt9669" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <p>X (Twitter)</p>
        </div>
        <div className="contact-item">
          <a href="mailto:nandansahu14@gmail.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
          <p>Gmail</p>
        </div>
        <div className="contact-item">
          <a href="https://medium.com/@nandansahu13" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faMedium} size="2x" />
          </a>
          <p>Medium</p>
        </div>
        <div className="contact-item">
          <a href="https://www.linkedin.com/in/nandansahu89/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <p>LinkedIn</p>
        </div>
      </div>
    </section>
    </>
  );
};

export default Contact;
