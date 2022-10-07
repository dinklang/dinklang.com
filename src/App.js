import React from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { CTA, About } from './components';
import { Footer, Header } from './containers';

function App() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Header></Header>
        <About></About>
        <CTA></CTA>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
