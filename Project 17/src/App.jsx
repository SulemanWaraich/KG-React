import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FeedbackPage from './pages/FeedbackPage';
import ContactUsPage from './pages/ContactUsPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <Router>
      <div className="container mx-auto py-4">
        <nav className="flex space-x-4">
          <Link to="/" className="text-blue-600 hover:underline">Home</Link>
          <Link to="/feedback" className="text-blue-600 hover:underline">Feedback</Link>
          <Link to="/contact" className="text-blue-600 hover:underline">Contact Us</Link>
          <Link to="/about" className="text-blue-600 hover:underline">About</Link>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
