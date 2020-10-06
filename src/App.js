import React from "react";
//Import Components
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Portfolio from "./components/Portfolio/Portfolio";
import Experience from "./components/Experience/Experience";
import Personal from "./components/Personal/Personal";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

//Import CSS
import "./App.css";
import "./mediaQueries.css";

const App = () => (
  <>
    <Header />
    <About />
    <Services />
    <Portfolio />
    <Experience />
    <Personal />
    <Contact />
    <Footer />
  </>
);

export default App;
