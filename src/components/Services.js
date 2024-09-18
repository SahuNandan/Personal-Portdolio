import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faGoogle, } from '@fortawesome/free-brands-svg-icons'; 
import { faFileExcel, faChartPie,faDatabase } from '@fortawesome/free-solid-svg-icons'; 
import '../assests/styles/Services.css'; // Import the CSS for Services

const services = [
  {
    icon: faHtml5,
    title: 'HTML',
    description: 'Comprehensive home services including repairs and maintenance.',
  },
  {
    icon: faDatabase,
    title: 'MySQL',
    description: 'Comprehensive home services including repairs and maintenance.',
  },
  {
    icon: faCss3Alt,
    title: 'CSS',
    description: 'Tailored solutions to meet your specific needs and preferences.',
  },

  {
    icon: faGoogle,
    title: 'Google Workspace',
    description: 'Rigorous checks to maintain the highest standards of quality.',
  },
  {
    icon: faFileExcel,
    title: 'Microsoft Excel',
    description: 'Efficient and timely delivery services for your convenience.',
  },
  {
    icon: faChartPie,
    title: 'Power BI',
    description: 'Efficient and timely delivery services for your convenience.',
  },
];

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="service-card">
      <div className="card-icon">
        <FontAwesomeIcon icon={icon} size="2x" /> {/* Render Font Awesome icon */}
      </div>
      <h3 className="card-title">{title}</h3>
      <div className="card-description">
        <p>{description}</p>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <>
    <hr></hr>
    <section id="services">
      <h1> Services</h1>
      <div className="services-container">
        {services.map((service, index) => (
          <ServiceCard
          key={index}
          icon={service.icon}
          title={service.title}
          description={service.description}
          />
        ))}
      </div>
  
    </section>
    </>
  );
};

export default Services;
