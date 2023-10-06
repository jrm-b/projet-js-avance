import haversine from './modules/Math.js';
import { getAllCinema, getCinemaBySeat } from './modules/CallsApi.js';
import displayAllCinemaTable from './modules/Display.js';

import { getCoords } from './modules/Geolocalisation.js';

export const elements = {
    containerCinemaList: document.querySelector('#container-cinema-list'),
    containerCinemaOrderedList: document.querySelector('#container-cinema-ordered-list')
}
export const baseUrl = 'https://data.culture.gouv.fr/api/explore/v2.1/catalog/datasets/etablissements-cinematographiques/records';
export const options = {
    limit: 20,
    offset: 0,
    order_by: 'fauteuils DESC'
}

// const test = 'https://data.culture.gouv.fr/api/explore/v2.1/catalog/datasets/etablissements-cinematographiques/records?limit=-1&offset=9';
// fetch(test).then(res => res.json()).then(res => console.log(res))

const main = () => {
    getAllCinema();
    getCinemaBySeat();

    getCoords();
}

main();

