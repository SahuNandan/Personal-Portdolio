import React from 'react';
import '../assests/styles/Projects.css'; // Import the CSS for styling
import CreditCardReport from '../assests/images/CreditCardReport.JPG'; // Import the image
import SalesDashboardReport from '../assests/images/SalesDashboardReport.JPG'; // Import the image
import StateMarketReport from '../assests/images/StateMarketReport.JPG'; // Import the image
import Multiplebackground from '../assests/images/mutiplebackground.jpg'; // Import the image
import PersonalPortfolio from '../assests/images/PersonalPortfolio.JPG'; // Import the image
import file_3 from '../assests/images/file_3.jpg'; // Import the image

const projects = [
  {
    id: 1,
    image: CreditCardReport, // Use the imported image
    title: 'Customer and Transaction Credit Card Report',
 
    githubLink: 'https://github.com/nandan/project1', // Replace with actual GitHub link
  },
  {
    id: 2,
    image: SalesDashboardReport,
    title: 'Sales Dashboard Report',
    
    githubLink: 'https://github.com/nandan/project2',
  }, 
  {
    id: 3,
    image: StateMarketReport,
    title: 'State and Market Report',
    
    githubLink: 'https://github.com/nandan/project2',
  }, 
  {
    id: 4,
    image: Multiplebackground,
    title: 'Background Changer',
    githubLink: 'https://github.com/nandan/project2',
  }, 
  {
    id: 5,
    image: PersonalPortfolio,
    title: 'Persoal Portfolio',
    githubLink: 'https://github.com/nandan/project2',
  }, 
  {
    id: 6,
    image: file_3,
    title: 'Watch-Frontend Website',
    githubLink: 'https://github.com/nandan/project2',
  },
  // Add more project objects as needed
];

const ProjectCard = ({ image, title, description, githubLink }) => {
  return (
    <a href={githubLink} target="_blank" rel="noopener noreferrer" className="project-card">
      <img src={image} alt={title} className="project-image" />
      <div className="project-info">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
      </div>
    </a>
  );
};

const Projects = () => {
  return (
    <>
    <hr></hr>
    <section id="projects">
      <h1>Projects</h1>
      <div className="projects-container">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            image={project.image}
            title={project.title}
            description={project.description}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </section>
    </>
  );
};

export default Projects;
