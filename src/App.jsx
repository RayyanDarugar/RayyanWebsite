import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import Post from './pages/Post';
import Contact from './pages/Contact';
import AuroraBackground from './components/AuroraBackground';

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);

function App() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-forest-bg-primary transition-colors duration-300">
      <Navbar />

      <main className="flex-grow">
        <AuroraBackground>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
              <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
              <Route path="/projects/:id" element={<PageWrapper><ProjectDetails /></PageWrapper>} />
              <Route path="/blog" element={<PageWrapper><Blog /></PageWrapper>} />
              <Route path="/blog/:slug" element={<PageWrapper><Post /></PageWrapper>} />
              <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
            </Routes>
          </AnimatePresence>
        </AuroraBackground>
      </main>

      <Footer />
    </div>
  );
}

export default App;
