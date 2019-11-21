import axios from 'axios';

export function RickApi(setter, page) {
	axios
		.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
		.then((res) => {
			setter(res.data);
		})
		.catch((err) => console.log(err));
}

/**
 * image
 * name
 * location.name
 * status
 * id = num
 */
