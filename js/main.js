import haversine from './modules/Math.js';
import { getAllCinema, getCinemaBySeat, getCinemaCoords } from './modules/CallsApi.js';
import { displayAllCinemaTable, displayCoordCinemaTable } from './modules/Display.js';

import { getCoords } from './modules/Geolocalisation.js';

export const elements = {
    displayLocalisation: document.querySelector('#display-localisation'),
    containerCinemaList: document.querySelector('#container-cinema-list'),
    containerCinemaOrderedList: document.querySelector('#container-cinema-ordered-list'),
    containerCinemaCoordList: document.querySelector('#container-cinema-coord-list'),
}
export const baseUrl = 'https://data.culture.gouv.fr/api/explore/v2.1/catalog/datasets/etablissements-cinematographiques/records';
export const options = {
    limit: 20,
    offset: 0,
    order_by: 'fauteuils DESC'
}

// const test = 'https://data.culture.gouv.fr/api/explore/v2.1/catalog/datasets/etablissements-cinematographiques/records?limit=-1&offset=9';
// fetch(test).then(res => res.json()).then(res => console.log(res))

const main = async () => {
    const cinemas = await getAllCinema();
    const cinemasBySeat = await getCinemaBySeat();

    let myCoords = await getCoords();
    let cinemasCoords = await getCinemaCoords();

    // cinemasCoords.forEach(cinema => {
    //     cinema.distance = haversine([myCoords.latitude, myCoords.longitude],[cinema.latitude, cinema.longitude])
        
    // })

}

main();

