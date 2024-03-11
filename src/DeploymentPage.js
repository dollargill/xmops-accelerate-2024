import React, { useState } from 'react';
import './DeploymentPage.css'; // Ensure this path matches the location of your CSS file
import Modal from './Modal';

const DeploymentPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [modalTitle, setModalTitle] = useState('');
  const [customActionLink, setCustomActionLink] = useState('');

  const deploymentOptions = [
    { id: 1, name: 'Deploy Monolith', description: '', sampleContent: 'This is a sample content for Deploy Monolith.', actionLink: 'https://google.com' },
    { id: 2, name: 'Deploy Microservices', description: '', sampleContent: 'This is a sample content for Deploy Microservices.', actionLink: 'https://aws.amazon.com' },
    { id: 3, name: 'Deploy LightSail', description: '', sampleContent: 'This is a sample content for Deploy LightSail.', actionLink: 'https://images.google.com' },
  ];

  const handleDeploymentClick = (option) => {
    setModalContent(option.sampleContent);
    setModalTitle(option.name);
    setCustomActionLink(option.actionLink);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleCustomAction = () => {
    window.open(customActionLink, "_blank");
  };

  return (
    <div className="app">
      <div className="page-background">
        <div className="blob top-right"></div>
        <div className="blob bottom-left"></div>
      </div>
      
      <div className={`app-container ${isModalOpen ? 'content-blur' : ''}`}>
        <div className="main-content">
          <div className="login-card">
            <div className="login-card-header">
              <header className="login-card__header">
                <img src={`${process.env.PUBLIC_URL}/XMOPS Accelerate.svg`} alt="XMOPS-Accelerate" width="160" />
              </header>
            </div>
            <div className="login-card__content">
              <div className="main-card-section">
                <h2 className="deployment-heading">Select a Deployment Option</h2>
                <div className="deployment-buttons">
                  {deploymentOptions.map((option) => (
                    <button key={option.id} className="deployment-button" onClick={() => handleDeploymentClick(option)}>
                      <strong>{option.name}</strong><br />
                      <span>{option.description}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <footer className="login-footer">
            <hr />
            <p className="footer-option">© TechnologyApplicationProject Team 7: The Legends 2024</p>
            <p>v0.8.12</p>
          </footer>
        </div>
      </div>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          title={modalTitle}
          onClose={handleCloseModal}
          content={<p>{modalContent}</p>}
          onCustomAction={handleCustomAction}
        />
      )}
    </div>
  );
};

export default DeploymentPage;
