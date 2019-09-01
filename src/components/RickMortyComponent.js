import React from 'react';
import { RickMortyImage } from './RickMortyImage';
import { RickMortyName } from './RickMortyName';
import { RickMortyLocation } from './RickMortyLocation';
import { RickMortyStatus } from './RickMortyStatus';
import { Container, Row, Col, CardDeck, CardColumns, Card } from 'reactstrap';
import styled from 'styled-components';

function RickMortyComponent(props) {
    const { rickMortyCharacters } = props;
    const rickMortyCharactersData = rickMortyCharacters.results;



    return (
        //   
            <Container>
                <RowCustom>
                            {rickMortyCharactersData.map(rickMortyCharacter => {
                                return (
                                    <Col xs="12" sm="12" md="6" lg="3" >
                                    <CardColumnsCustom key={rickMortyCharacter.id + 'custom'}>
                                    <CharacterCard key={rickMortyCharacter.id} >
                                        <RickMortyImage rickMortyCharacter={rickMortyCharacter} key={rickMortyCharacter.id + 'c'} />
                                        <RickMortyName rickMortyCharacter={rickMortyCharacter} key={rickMortyCharacter.id + 'n'} />
                                        <RickMortyLocation rickMortyCharacter={rickMortyCharacter} key={rickMortyCharacter.id + 'l'} />
                                        <RickMortyStatus rickMortyCharacter={rickMortyCharacter} key={rickMortyCharacter.id + 's'} />
                                    </CharacterCard>
                                    </CardColumnsCustom>
                                    </Col>
                                )
                            })}
                </RowCustom>  
            </Container>
      
    )

}
export default RickMortyComponent;

const CardColumnsCustom = styled(CardColumns)`
	/* display: flex;
	flex-wrap: wrap;
	justify-content: space-around; */
`;

const RowCustom = styled(Row)`
    display: flex;
    flex-wrap: wrap;
`;

const CharacterCard = styled(Card)`
	background-color: rgba(226, 106, 153, 0.19);
	width: 25%;
`;