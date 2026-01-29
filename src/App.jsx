import { Routes, Route } from "react-router-dom";

import Articles from "./pages/Articles";
import Blog from "./pages/Blog";
import ServiceCategory from "./pages/ServiceCategory";
import ServiceDetail from "./pages/ServiceDetail";

const App = () => {
  return (
        <Routes>
          <Route path="/articles" element={<Articles />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/services" element={<ServiceCategory />} />
          <Route path="/services/:serviceType" element={<ServiceDetail />} />
        </Routes>
  );
};

export default App;
