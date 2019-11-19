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
				{rickMortyCharactersData.map((rickMortyCharacter) => {
					return (
						<CustomCol md={6} lg={4} xl={3} key={rickMortyCharacter.id}>
							<CardCustom>
								<CharacterCard key={rickMortyCharacter.id}>
									<img
										src={rickMortyCharacter.image}
										alt={rickMortyCharacter.name}
									/>
									<h2>{rickMortyCharacter.name}</h2>
									<p>{rickMortyCharacter.location.name}</p>
									<p>{rickMortyCharacter.status}</p>
								</CharacterCard>
							</CardCustom>
						</CustomCol>
					);
				})}
			</RowCustom>
		</Container>
	);
}
export default RickMortyComponent;

const CustomCol = styled(Col)`
	max-width: 33.333%;
	margin: 0 auto;
`;

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
