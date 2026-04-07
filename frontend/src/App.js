import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SectorsPage from './pages/SectorsPage';
import ScenariosPage from './pages/ScenariosPage';
import FeaturesPage from './pages/FeaturesPage';
import ResourcesPage from './pages/ResourcesPage';
import ContactPage from './pages/ContactPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-exrsim-dark">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/sectors" element={<SectorsPage />} />
            <Route path="/scenarios" element={<ScenariosPage />} />
            <Route path="/features" element={<FeaturesPage />} />
            {/* <Route path="/case-studies" element={<CaseStudiesPage />} /> */}
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;