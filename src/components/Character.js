import React from 'react';
import styled from 'styled-components';
import { Card, CardText } from 'reactstrap';

function Character(props) {
  const { id, image, name, location, status } = props.character;
  return (
    <>
      <CardCustom key={id}>
        <img src={image} alt={name} />
        <CardText>{name}</CardText>
        <CardText>{location.name}</CardText>
        <CardText>{status}</CardText>
      </CardCustom>
    </>
  );
}
export default Character;

const CardCustom = styled(Card)`
  background-color: rgba(226, 106, 153, 0.19);
  width: 100%;
  display: block;
  border: 1px solid red;
`;
