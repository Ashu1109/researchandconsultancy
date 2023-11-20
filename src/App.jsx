import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogoPage from "./pages/LogoPage";
import Home from "./pages/Home";

import Expretise from "./pages/Expretise";
import SponsoredResearch from "./pages/SponsoredResearch";
import Consultancy from "./pages/Consultancy";
import Facilities from "./pages/Facilities";
import Patent from "./pages/Patent";
import Industry from "./pages/Industry";
import Academia from "./pages/Academia";
import Interdisciplinary from "./pages/Interdisciplinary";
import ResearchInstitute from "./pages/ResearchInstitute";

import Biodata from "./components/Teacher/Biodata";
import Profile from "./components/Teacher/Profile";

import "./components/Teacher/biodata.scss";
import "./components/Teacher/profile.scss";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LogoPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/expertise" element={<Profile />} />
          <Route path="/biodata" element={<Biodata />} />
          <Route path="/sponsoredresearch" element={<SponsoredResearch />} />
          <Route path="/consultancy" element={<Consultancy />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/patent" element={<Patent />} />
          <Route path="/industry" element={<Industry />} />
          <Route path="/academia" element={<Academia />} />
          <Route path="/interdisciplinary" element={<Interdisciplinary />} />
          <Route path="/researchinstitute" element={<ResearchInstitute />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
