
import './styles/App.css';
import React from 'react';
import './styles/App.css';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Main from './components/Main';
import CountDown from './components/CountDown';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <React.StrictMode>
    <TopBar />
        <Navbar />
        <Hero />
        <Main />
        <CountDown />
        <Footer/>
  </React.StrictMode>
    </div>
  );
}

export default App;
