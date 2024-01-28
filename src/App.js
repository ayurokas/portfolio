import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/layout'; 
import Home from './page/home';
import Settings from './page/settings';
import Profil from './page/profil';
import Projet from './page/projet';



function App() {
  return (
    <Router>
      <Layout>
      <Routes>
        <Route path="/"element={<Home/>}/>
        <Route path="/profile" element={<Profil/>}/>
        <Route path="/projet" element={<Projet/>}/>
        <Route path="/settings" element={<Settings/>} />
      </Routes>
      </Layout>
    </Router>
  );
}

export default App;