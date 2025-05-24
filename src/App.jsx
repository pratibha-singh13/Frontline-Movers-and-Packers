// This file sets up the complete page routes and base layout
// Continue adding components to each page

import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import SplashScreen from "./components/SplashScreen";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

const App = () => {
  const [loading, setLoading] = useState(true);

  return loading ? (
    <SplashScreen onFinish={() => setLoading(false)} />
  ) : (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
