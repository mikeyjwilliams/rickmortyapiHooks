import axios from 'axios';

export function RickApi() {
    axios.get('https://rickandmortyapi.com/api/character/?page=1')
        .then(res => console.log(res))
        .catch(err => console.log(err))

}