import React from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Navbar, CTA, Experience } from './components';
import { Footer, Header } from './containers';

function App() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Router>
        <Navbar></Navbar>
        </Router>
      </div>
      <Header></Header>
      <Experience></Experience>
      <CTA></CTA>
      <Footer></Footer>
    </div>
  );
}

export default App;
