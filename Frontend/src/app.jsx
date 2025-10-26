import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/login';
import Homepage from './components/homepage';
import Monday from './components/monday';
import Tuesday from './components/tuesday';
import Wednesday from './components/wednesday';
import Thursday from './components/thursday';
import Friday from './components/friday';
import Saturday from './components/saturday';
import Sunday from './components/sunday';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/monday" element={<Monday />} />
        <Route path="/tuesday" element={<Tuesday />} />
        <Route path="/wednesday" element={<Wednesday />} />
        <Route path="/thursday" element={<Thursday />} />
        <Route path="/friday" element={<Friday />} />
        <Route path="/saturday" element={<Saturday />} />
        <Route path="/sunday" element={<Sunday />} />
      </Routes>
    </Router>
  );
}

export default App;
