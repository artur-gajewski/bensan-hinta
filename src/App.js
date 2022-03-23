import React from 'react';
import { useSelector } from 'react-redux';
import { Counter } from './features/counter/Counter';
import { selectCurrentValue } from './features/counter/counterSlice';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
      </header>
    </div>
  );
}

export default App;
