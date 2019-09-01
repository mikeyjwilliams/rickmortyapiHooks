import React from 'react';
import { RickMortyImage } from './RickMortyImage';


function RickMortyComponent(props) {
    const { rickMortyCharacters } = props;
    return (
        <>
        {rickMortyCharacters.map(rickMortyCharacter => {
            return (
                <RickMortyImage rickMortyCharacter={rickMortyCharacter} />
            )
        })
        }
        </>
    )

}
export default RickMortyComponent;