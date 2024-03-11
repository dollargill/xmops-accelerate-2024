import React from 'react';
import './customAuthStyles.css';
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import config from './aws-exports';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DeploymentPage from './DeploymentPage'; // Make sure to create DeploymentPage.js


Amplify.configure(config);

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/deployment" element={<DeploymentPage />} />
          <Route path="/" element={<Navigate replace to="/deployment" />} />
        </Routes>
      </Router>
    </>
  );
};

export default withAuthenticator(App, { includeGreetings: true });
