import { Routes, Route } from "react-router-dom";
import  Blogs  from './components/blogs/blogs.jsx';
import Service from "./components/services/service.jsx";
import Sidebar from "./components/sidebar/sidebar.jsx";
import {LandingPage}  from "./components/LandingPage/LandingPage.jsx";




function App() {

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/services" element={<Service />} />
      <Route path="/sidebar" element={<Sidebar activeItem="Services" />} />
    </Routes>

  )
}

export default App
