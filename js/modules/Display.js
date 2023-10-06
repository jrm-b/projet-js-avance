import { elements } from '../main.js';

export default function displayAllCinemaTable(cinemaList, element){

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
}