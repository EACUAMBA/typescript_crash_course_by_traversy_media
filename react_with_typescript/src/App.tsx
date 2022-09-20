import React from 'react';
import './App.css';
import Person from './components/Person';

function App() {
  return (
    <div className="App">
      <Person nome={'Edilson'}/>
      <Person nome={'Luis'} idade={23}/>
    </div>
  );
}

export default App;
