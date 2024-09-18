import React, { useState } from 'react';
import About from './About';
import Services from './Services';
import Projects from './projects';
import Blogs from './Blogs';
import Certificate from './Certificates';
import Contact from './Contact';
import Footer from './Footer';
import '../assests/styles/home.css';
import profileImage from '../assests/images/profile2.jpg';
import Resume from '../assests/images/Data Analyst.pdf'; // Import your image

const Home = () => {
  const [showVideoPopup, setShowVideoPopup] = useState(false);

  const handleWatchVideo = () => {
    setShowVideoPopup(true);
  };

  const handleCloseVideoPopup = () => {
    setShowVideoPopup(false);
  };

  return (
    <div>
      <section id="home" className="home-section">
      <div className="home-container">
        {/* Centered content */}
        <div className="home-content">
          {/* Headings displayed horizontally */}
          <div className="home-heading-container">
            <span>I'm a</span>
            <h1 className="home-heading">Frontend Developer,</h1>
            <h1 className="home-heading">Data Analyst,</h1>
            <h1 className="home-heading">Backend Developer</h1>
          </div>

          {/* Buttons */}
          <div className="home-buttons">
            {/* Download CV Button */}
            <a href={Resume} download className="home-btn">
              Download CV
            </a>

            {/* Watch Video Button */}
            <button className="home-btn" onClick={handleWatchVideo}>
              Watch Video
            </button>
          </div>
        </div>

        {/* Profile Image */}
        <div className="home-image-container">
          <img src={profileImage} alt="Nandan Sahu" className="home-profile-image" />
        </div>
      </div>

      {/* Video Popup */}
      {showVideoPopup && (
        <div className="video-popup-overlay">
          <div className="video-popup-content">
            <span className="close-btn" onClick={handleCloseVideoPopup}>
              &times;
            </span>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/your-video-id" // Replace with your actual video URL
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
     </section>

      <section id="about">
       <About />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="blogs">
        <Blogs />
      </section>

      <section id="certificates">
        <Certificate />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
};

export default Home;
