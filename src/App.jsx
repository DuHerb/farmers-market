import React from 'react';
import './App.css';
import TopNav from './components/Nav/TopNav';
import HeroContainer from './components/Hero/HeroContainer';
import ContentContainer from './components/Content/ContentContainer';
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <TopNav/>
        <HeroContainer/>
        <ContentContainer/>
      </HashRouter>
    </div>
  );
}

export default App;
