import React from 'react';

export function RickMortyImage(props) {
    const { rickMortyCharacter } = props;
    const image = rickMortyCharacter.image;
    const altText = rickMortyCharacter.name;


    
    return (
        <img src={image} alt={altText} />
    )
}