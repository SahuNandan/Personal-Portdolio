import React, { useState } from 'react';
import '../assests/styles/Certificates.css'; // Import CSS for styling
import IsroAIMLCertificate from '../assests/images/IsroAIMLCertificate.JPG';// Example image
import wscubeCertificate from '../assests/images/wscubeCertificate.JPG';// Example image
import RDataScienceCertificate from '../assests/images/RDataScienceCertificate.JPG';// Example image

const certificates = [
  {
    id: 1,
    image: IsroAIMLCertificate,
    title: 'Indien Institute of Remote Sensing(IIRS)',
  },
  {
    id: 2,
    image: wscubeCertificate,
    title: 'WsCube',
  },
  {
    id: 3,
    image: RDataScienceCertificate,
    title: 'Data Science with R language (UDEMY)',
  },
  // Add more certificate objects as needed
];

const CertificateCard = ({ image, title, onClick }) => {

  return (
    <div className="certificate-card" onClick={onClick}>
      <img src={image} alt={title} className="certificate-image" />
      <h3 className="certificate-title">{title}</h3>
    </div>
  );
};

const Certificates = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };
  
  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };
  
  return (
    <>
    <hr></hr>
    <section id="certificates">
      <h1>Certificates</h1>
      <div className="certificates-container">
        {certificates.map((certificate) => (
          <CertificateCard
          key={certificate.id}
          image={certificate.image}
          title={certificate.title}
          onClick={() => openModal(certificate.image)}
          />
        ))}
      </div>

      {/* Modal for image zoom */}
      {isOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>&times;</span>
            <img src={selectedImage} alt="Zoomed certificate" className="modal-image" />
          </div>
        </div>
      )}
      
    </section>
    </>
  );
};

export default Certificates;
