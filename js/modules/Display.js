import { elements } from '../main.js';
import { getCinemaCoords } from './CallsApi.js';
import { getCoords } from './Geolocalisation.js';

import haversine from './Math.js';

export function displayAllCinemaTable(cinemaList, element){

    let outputHtml = '';

    cinemaList.results.forEach(cinema => {

        outputHtml += '<tr>';

        outputHtml += '<td>';
        outputHtml += `${cinema.nom}`;
        outputHtml += '</td>';

        outputHtml += '<td>';
        outputHtml += `${cinema.adresse}`;
        outputHtml += '</td>';

        outputHtml += '<td>';
        outputHtml += `${cinema.commune}`;
        outputHtml += '</td>';

        outputHtml += '<td>';
        outputHtml += `${cinema.fauteuils}`;
        outputHtml += '</td>';

        outputHtml += '</tr>';
    });
    element.innerHTML = outputHtml;
};

export function displayCoordCinemaTable(cinemaList, element){

    let outputHtml = '';

    cinemaList.forEach(cinema => {

        outputHtml += '<tr>';

        outputHtml += '<td>';
        outputHtml += `${cinema.nom}`;
        outputHtml += '</td>';

        outputHtml += '<td>';
        outputHtml += `${cinema.adresse}`;
        outputHtml += '</td>';

        outputHtml += '<td>';
        outputHtml += `${cinema.commune}`;
        outputHtml += '</td>';

        outputHtml += '<td>';
        outputHtml += `${cinema.fauteuils}`;
        outputHtml += '</td>';

        outputHtml += '<td>';
        outputHtml += `${cinema.latitude}`;
        outputHtml += '</td>';

        outputHtml += '<td>';
        outputHtml += `${cinema.longitude}`;
        outputHtml += '</td>';
        
        outputHtml += '<td>';
        outputHtml += `${cinema.distance}`;
        outputHtml += '</td>';

        outputHtml += '</tr>';
    });
    element.innerHTML = outputHtml;
}


