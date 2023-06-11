import React from 'react';
import './App.css';
import Cell from './Cell/container';
import Board from './Board/container/index';

const App = () => {
  return (
    <div className="app">
      <h1 style={{textAlign:'center'}}>El Mundo de Wumpus</h1>
      <Board/>
    </div>
  );
};

export default App;
