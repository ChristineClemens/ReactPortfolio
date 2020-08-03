import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
// import Cards from "./components/Cards";
// import ContactBox from "./components/ContactBox";
import Footer from "./components/Footer"; 
// import MapInfo from "./components/MapInfo";
import NavBar from "./components/NavBar";
// import Project from "./components/Project";

function App() {
  useEffect(() => {AOS.init()})
  return (
    <Router>
      <div>
      <NavBar />
        <Route exact path = "/" component = {About} />
        <Route exact path = "/Portfolio" component = {Portfolio} />
        <Route exact path = "/Contact" component = {Contact} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
