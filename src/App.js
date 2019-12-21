import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { RickApi } from './API/RickApi';
import { RickMortyTitle } from './components/RickMortyTitle';
import RickMortyComponent from './components/RickMortyComponent';
import './App.css';

function App() {
  const [rickMortyCharacters, setRickMortyCharacters] = useState();
  const [page, setPage] = useState(1);
  useEffect(() => {
    RickApi(setRickMortyCharacters, page);
  }, [page]);

  const pageForward = () => {
    setPage(page + 1);
  };

  const pageBack = () => {
    if (page === 0) {
      setPage(0);
    } else {
      setPage(page - 1);
    }
  };

  if (!rickMortyCharacters) return <h2>Loading...</h2>;

  return (
    <div className='App'>
      <RickMortyTitle />
      <RickMortyComponent
        rickMortyCharacters={rickMortyCharacters}
        pageBack={pageBack}
        pageForward={pageForward}
      />
    </div>
  );
}

export default App;
