import React, { useState } from 'react';
import '../assests/styles/About.css'; // Import CSS for styling
import profileImage from '../assests/images/profile2.jpg'; // Import the same image as in Home

const About = () => {
  // Define the state to track the active section (about, education, or hobbies)
  const [activeTab, setActiveTab] = useState('about');

  // Content for each tab
  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return (
          <div className="content">
            <h4>
              Hey, My name is Nandan Sahu and i'm from Mumbai, Completed my bachelor's Degree in Electronics and Telecommunication Engineering from Univeristy of Mumbai. Currenly finding jobs based Data Analyst and learning advanced Microsoft Excel, Power BI for interactive dashboard creation, MySQL, Python, R and other Generative tools for automation task.
            </h4>
          </div>
        );
      case 'education':
        return (
          <div className="content">
            <table className='Table-function'>
              <thead>
                <tr>
                  <th>Sr.No</th>
                  <th>Name</th>
                  <th>Board</th>
                  <th>Percentage</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                <td>1</td>
                  <td>Patuck Technical High School</td>
                  <td>Maharashtra State Board</td>
                  <td>76%</td>
                </tr>
                <tr>
                <td>2</td>
                  <td>Government Polytechnic Mumbai</td>
                  <td>MSBTE</td>
                  <td>72%</td>
                </tr>
                <tr>
                <td>3</td>
                  <td>University of Mumbai</td>
                  <td>University of Mumbai</td>
                  <td>70%</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      case 'hobbies':
        return (
          <div className="content">
            <p>In my free time, I love reading books, exploring new technologies, and traveling to new places.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <hr></hr>
      <section id="about">
        <h1>About Me</h1>
        <div className="about-container">
          {/* Left Box: Image */}
          <div className="about-image-box">
            <img src={profileImage} alt="Nandan Sahu" className="about-profile-image" />
          </div>

          {/* Right Box: About Me, Education, Hobbies */}
          <div className="about-content-box">
            <div className="tab-buttons">
              <button
                className={`tab-button ${activeTab === 'about' ? 'active' : ''}`}
                onClick={() => setActiveTab('about')}
              >
                About Me
              </button>
              <button
                className={`tab-button ${activeTab === 'education' ? 'active' : ''}`}
                onClick={() => setActiveTab('education')}
              >
                Education
              </button>
              <button
                className={`tab-button ${activeTab === 'hobbies' ? 'active' : ''}`}
                onClick={() => setActiveTab('hobbies')}
              >
                Hobbies
              </button>
            </div>
            <div className="tab-content">{renderContent()}</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
