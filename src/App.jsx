import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { injectSpeedInsights } from "@vercel/speed-insights";
import "./App.css";
import ReactGA from 'react-ga';
import HeroPage from "./pages/hero";
import Contact from "./pages/Contact";

const App = () => {
  
  injectSpeedInsights();
  return (
    
      <Router>
        <Routes>
          <Route exact path="/" element={<HeroPage />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </Router>
  );
};

export default App;