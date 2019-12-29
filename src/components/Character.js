import React from 'react';
import styled from 'styled-components';
import { Card, CardText, CardImg } from 'reactstrap';

function Character(props) {
  const { id, image, name, location, status } = props.character;
  return (
    <>
      <CardCustom key={id}>
        <CardImg src={image} alt={name} />
        <CardText className={status === `Dead` ? 'gone' : null}>
          {name}
        </CardText>
        <CardText>{location.name}</CardText>
        <CardText>{status}</CardText>
      </CardCustom>
    </>
  );
}
export default Character;

const CardCustom = styled(Card)`
  margin: 20px 0;
  display: block;
  border: 1px solid red;
`;
