import React from 'react';

export function RickMortyImage(props) {
    const { image, name } = props;
    const altText = name;
    return (
        <img src={image} alt={altText} />
    )
}