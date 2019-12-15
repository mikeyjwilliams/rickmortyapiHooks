import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { RickApi } from './API/RickApi';
import { RickMortyTitle } from './components/RickMortyTitle';
import RickMortyComponent from './components/RickMortyComponent';
import './App.css';

function App() {
  const [rickMortyCharacters, setRickMortyCharacters] = useState();
  useEffect(() => {
    RickApi(setRickMortyCharacters);
  }, []);

  if (!rickMortyCharacters) return <h2>Loading...</h2>;
  console.log(rickMortyCharacters);
  return (
    <div className='App'>
      <RickMortyTitle />
      <RickMortyComponent rickMortyCharacters={rickMortyCharacters} />
    </div>
  );
}

export default App;
