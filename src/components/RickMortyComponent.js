import React from 'react';
import {
  Container,
  Row,
  Col,
  CardDeck,
  CardColumns,
  Card,
  CardText
} from 'reactstrap';
import styled from 'styled-components';
import Character from './Character';

function RickMortyComponent(props) {
  const { rickMortyCharacters } = props;
  const characterData = rickMortyCharacters.results;

  return (
    //
    <Container>
      <RowCustom>
        {characterData.map(character => {
          return (
            <Col md={6} lg={4} xl={3} key={character.id}>
              <Character character={character} />
            </Col>
          );
        })}
      </RowCustom>
    </Container>
  );
}
export default RickMortyComponent;

// const CardCustom = styled(Card)`
//   background-color: rgba(226, 106, 153, 0.19);
//   width: 100%;
//   display: block;
//   border: 1px solid red;
// `;

const RowCustom = styled(Row)`
  /* display: flex;
    flex-wrap: wrap; */
`;

// const CharacterCard = styled(Card)`
//   background-color: rgba(226, 106, 153, 0.19);
//   width: 100%;
//   display: block;
//   border: 1px solid red;
// `;
