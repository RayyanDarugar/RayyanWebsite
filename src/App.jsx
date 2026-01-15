import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Post from './pages/Post';
import Contact from './pages/Contact';
import AuroraBackground from './components/AuroraBackground';

// Using HashRouter for easiest GitHub Pages deployment compatibility
// preventing 404 errors on refresh without server configuration.
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-forest-bg-primary transition-colors duration-300">
        <Navbar />

        <main className="flex-grow">
          <AuroraBackground>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<Post />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AuroraBackground>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
