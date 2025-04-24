import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
function App() {


useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);

  return (
    <div className="App">
      <Header />
      <Home/>
    </div>
  );
}

export default App;
