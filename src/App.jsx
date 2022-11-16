
import './App.css';
import React from 'react';
import Header from'./Components/Header/Header'
import Nav from './Components/Nav/Nav'
import About from './Components/About/About'

import Experience from './Components/Experience/Experience';
import Services from './Components/Services/Services';
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/contact/Contact';


function App() {
  return (
    <>
   <Header/>
   <Nav/>
   <About/>
  
   <Experience/>
   <Services/>
   <Portfolio/>
   <Contact/>

    </>
  );
}

export default App;
