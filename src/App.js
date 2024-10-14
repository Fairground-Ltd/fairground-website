import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TermsAndConditions from './pages/TermsAndConditions';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        <footer className="App-footer">
          <a href="/">Home</a> |
          <a href="/terms-and-conditions">Terms and Conditions</a> | 
          <a href="/privacy-policy">Privacy Policy</a>
        </footer>
      </div>
    </Router>
  );
}

export default App;
