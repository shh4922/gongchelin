import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar/Navbar';
import { Routes } from 'react-router-dom';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main/>
    </div>
  );
}

export default App;
