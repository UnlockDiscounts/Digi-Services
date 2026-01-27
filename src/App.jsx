import AboutUs from './Pages/AboutUs.jsx';
import ContactUs from '../src/Pages/ContactUs.jsx';
//import Footer from '../src/Components/Footer.jsx';
// import NavBar from '../src/Components/NavBar.jsx';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
    
      {/* Route definitions */}
      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<div>404 - Not Found</div>} />
      </Routes>
    </>
  );
}

export default App;
