import React from 'react';
import ProfileDetails from './ProfileCard/ProfileDetails';
import './ProfileCard/Profile.css';

function App() {
  return (
    <div className="Profile-row">
      <ProfileDetails
        name="Riktha"
        email="riktha.l2022ai-ml@sece.ac.in"
        phoneno="+91 8610239949"
        bio="Web developer with a passion for clean code and design."
      />
      <ProfileDetails
        name="John Doe"
        email="john.doe@example.com"
        phoneno="+91 9876543210"
        bio="Creative frontend developer and UI enthusiast."
      />
    </div>
  );
}

export default App;
