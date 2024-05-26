import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar/Navbar';
import { Routes } from 'react-router-dom';
import Main from './pages/Main/Main';
import MobileNavTop from './components/MobileNavTop/MobileNavTop';
import MobileNavBottom from './components/MobileNavBottom/MobileNavBottom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <MobileNavBottom/>
    </div>
  );
}

export default App;
