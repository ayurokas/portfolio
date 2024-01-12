// SettingsPage.jsx
import React from 'react';
import DarkModeToggle from '../components/darkmode/darkmode';
import "../css/settings.css"; 


const SettingsPage = () => {
  return (
    <div>
      <h1>Paramètres</h1>
      <DarkModeToggle />
    </div>
  );
};

export default SettingsPage;
