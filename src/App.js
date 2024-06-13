import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/layout'; 
import Home from './page/home';
import Settings from './page/settings';
import Profil from './page/profil';
import Project from './page/project';
import Skill from './page/skill';



function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profil />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/project" element={<Project />} />
          <Route path="/competence" element={<Skill />} />

        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
