import React from 'react';
import './App.css';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1 className="app-title">Counter ap in reactjs</h1>
      </header>
      <Counter initValue={0}/>
      <Counter initValue={100}/>
    </div>
  );
}

export default App;
