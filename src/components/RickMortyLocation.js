import React from 'react';

export function RickMortyLocation(props) {
    const { rickMortyCharacter } = props;
    const location = rickMortyCharacter.location;
    return (
        <p>{location}</p>
    )
}