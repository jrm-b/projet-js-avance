import haversine from './modules/Math.js';
import getAllCinema from './modules/CallsApi.js';

export const elements = {
    containerCinemaList: document.querySelector('#container-cinema-list'),
}
export const baseUrl = 'https://data.culture.gouv.fr/api/explore/v2.1/catalog/datasets/etablissements-cinematographiques/records';


// const test = 'https://data.culture.gouv.fr/api/explore/v2.1/catalog/datasets/etablissements-cinematographiques/records?limit=-1&offset=9';

// fetch(test).then(res => res.json()).then(res => console.log(res))


getAllCinema();

