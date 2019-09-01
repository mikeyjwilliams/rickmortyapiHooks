import React from 'react';
import { RickMortyImage } from './RickMortyImage';
import { RickMortyName } from './RickMortyName';
import { RickMortyLocation } from './RickMortyLocation';

function RickMortyComponent(props) {
    const { rickMortyCharacters } = props;
    const rickMortyCharactersData = rickMortyCharacters.results;
    return (
        <div>
        {rickMortyCharactersData.map(rickMortyCharacter => {
            return (
                <div key={rickMortyCharacter.id}>
                <RickMortyImage rickMortyCharacter={rickMortyCharacter} key={rickMortyCharacter.id + 'c'} />
                <RickMortyName rickMortyCharacter={rickMortyCharacter} key={rickMortyCharacter.id + 'n'} />
                <RickMortyLocation rickMortyCharacter={rickMortyCharacter} key={rickMortyCharacter.id + 'l'} />
                </div>
            )
        })}
        
        </div>
    )

}
export default RickMortyComponent;