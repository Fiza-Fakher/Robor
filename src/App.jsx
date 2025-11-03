import './index.css'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from "./pages/home/index";
import About from "./pages/about/index";
import Services from './pages/service/index';
import ServiceDetail from './pages/service-detail';
import Projects from "./pages/projects/index";
import ProjectDetail from './pages/project-detail';
import Contact from "./pages/contact/index";
import BlogPage from "./pages/blog/index";
import BlogDetail from './pages/blog-detail/index';
import Team from "./pages/team/index"
import AiConsulting from './pages/ai-consulting';

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader"; // ✅ Import your Loader

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  // ✅ Show loader for a few seconds whenever route changes
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 4000); // 4 seconds
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {loading ? (
        // ✅ Loader visible while loading
        <div className="flex justify-center items-center min-h-screen bg-[var(--primary)]">
          <Loader />
        </div>
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/services/:slug' element={<ServiceDetail />} />
            <Route path='/blog' element={<BlogPage />} />
            <Route path='/blog/:slug' element={<BlogDetail />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/ai-consulting' element={<AiConsulting />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/projects/:slug' element={<ProjectDetail />} />
            <Route path='/team' element={<Team />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
