import './index.css'

import Home from "./pages/home/index";
import About from "./pages/about/index";
import Services from './components/home/Services';
import ServiceDetail from './pages/service-detail';
import Projects from "./pages/projects/index";
import ProjectDetail from './pages/project-detail';
import Contact from "./pages/contact/index";
import BlogPage from "./pages/blog/index";
import BlogDetail from './pages/blog-detail/index';
import Team from "./pages/contact/index";
import AiConsulting from './pages/ai-consulting';


import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
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
  );
}

export default App;
