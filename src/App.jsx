import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

import "./App.css";
import Content from "./pages/Content";
import Ducument from "./pages/Ducument";
import Signinn from "./pages/Signinn";
import Login from "./pages/Login";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Content" element={<Content />} />
      <Route path="/Ducument" element={<Ducument />} />
      <Route path="/Signinn" element={<Signinn />} />
      <Route path="/Login"  element={<Login />} />
    </Routes>
  );
}

export default App;
