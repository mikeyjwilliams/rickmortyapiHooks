import React from 'react';

export function RickMortyName(props) {

    const { rickMortyCharacter } = props;
    const name = rickMortyCharacter.name;
    return (
        <h1>{name}</h1>
    )
}