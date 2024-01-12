import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/layout'; 
import Home from './page/index';
import Settings from './page/settings';
import './App.css';

function App() {
  return (
    <Router>
      <Layout> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
