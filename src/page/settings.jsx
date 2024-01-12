// SettingsPage.jsx
import React from 'react';
import DarkModeToggle from '../components/darkmode/darkmode';
import "../css/settings.css"; 

const SettingsPage = () => {
  return (
    <div className="settings-page">
      <h1 className="text-embossed">Paramètres</h1>
      <DarkModeToggle />
    </div>
  );
};

export default SettingsPage;
