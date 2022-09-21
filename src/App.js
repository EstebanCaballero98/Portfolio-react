import LandingDisplay from "./components/Pages/LandingDisplay";
import ProjectsDisplay from "./components/Pages/ProjectsDisplay";
import AboutMeDisplay from "./components/Pages/AboutMeDisplay";
import BackgroundEffect from "./components/BackgroundEffect";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingDisplay />} />
          <Route exact path="/Projects" element={<ProjectsDisplay />} />
          <Route exact path="/AboutMe" element={<AboutMeDisplay />} />
        </Routes>
      </Router>
      <BackgroundEffect />
    </>
  );
};

export default App;
