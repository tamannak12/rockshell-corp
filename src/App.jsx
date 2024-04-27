import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { injectSpeedInsights } from "@vercel/speed-insights";
import "./App.css";
import ReactGA from 'react-ga';
import HeroPage from "./pages/hero";
ReactGA.initialize('G-J6KW426SST');
ReactGA.pageview(window.location.pathname + window.location.search);

const App = () => {
  
  injectSpeedInsights();
  return (
    
      <Router>
        <Routes>
          <Route exact path="/" element={<HeroPage />} />
        </Routes>
      </Router>
  );
};

export default App;