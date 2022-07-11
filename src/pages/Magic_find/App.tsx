import React, { useEffect } from 'react';
import Calculator from '../../components/Calculator';
import './App.css';

function App() {

  useEffect(() => {
    document.title = 'Calculator - HeroEye';
  });
  
  return (
    <div className="App">
        <Calculator></Calculator>
    </div>
  );
}

export default App;
