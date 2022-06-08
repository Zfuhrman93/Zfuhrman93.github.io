import './App.css';
import Navbar from './components/Navbar'
import Home from './views/Home'
import About from './views/About'
import Projects from './views/Projects'
import Contact from './views/Contact'
import React from 'react'
import { 
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact-me" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
