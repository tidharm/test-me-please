import React from 'react';
import './App.css';
import Calculator from './components/Calculator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Calculator App</h1>
        <p>A simple calculator for basic arithmetic operations</p>
      </header>
      <main>
        <Calculator />
      </main>
      <footer>
        <p>Built with React, TypeScript, and Node.js</p>
      </footer>
    </div>
  );
}

export default App;
