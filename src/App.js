import React, { useEffect } from 'react';
import {RickApi} from './API/RickApi';
import './App.css';

function App() {

  useEffect( () => {
    RickApi();
  }, [])


  return (
    <div className="App">
      <h1>Rick Morty Api</h1>
    </div>
  );
}

export default App;
