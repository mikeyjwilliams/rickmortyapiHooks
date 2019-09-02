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
                                    <Col md={6} lg={4} xl={3}>
                                    <CardCustom key={rickMortyCharacter.id + 'custom'}>
                                    <CharacterCard key={rickMortyCharacter.id} >
                                        <RickMortyImage rickMortyCharacter={rickMortyCharacter} key={rickMortyCharacter.id + 'c'} />
                                        <RickMortyName rickMortyCharacter={rickMortyCharacter} key={rickMortyCharacter.id + 'n'} />
                                        <RickMortyLocation rickMortyCharacter={rickMortyCharacter} key={rickMortyCharacter.id + 'l'} />
                                        <RickMortyStatus rickMortyCharacter={rickMortyCharacter} key={rickMortyCharacter.id + 's'} />
                                    </CharacterCard>
            
                                    </CardCustom>
                                    </Col>
                                
                                )
                            })}
                              
                </RowCustom>  
            </Container>
      
    )

}
export default RickMortyComponent;

const CardCustom = styled(Card)`
	background-color: rgba(226, 106, 153, 0.19);
	width: 100%;
    display: block;
    border: 1px solid red;
`;

const RowCustom = styled(Row)`
    /* display: flex;
    flex-wrap: wrap; */
`;

const CharacterCard = styled(Card)`
	background-color: rgba(226, 106, 153, 0.19);
	width: 100%;
    display: block;
    border: 1px solid red;
`;