import React from 'react';

export function RickMortyStatus(props) {
    const { rickMortyCharacter } = props;
    const status = rickMortyCharacter.status;
    return (
        <p>{status}</p>
    )
}