import React from 'react';

export function RickMortyLocation(props) {
    const { rickMortyCharacter } = props;
    const location = rickMortyCharacter.location.name;
    return (
        <p>{location}</p>
    )
}