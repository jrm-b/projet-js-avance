import { elements } from "../main.js";
import { baseUrl } from "../main.js";

import displayAllCinemaTable from './Display.js';

export default function getAllCinema(){
    return fetch(baseUrl)
    .then(response => response.json())
    .then(response =>{

        console.log(response, elements.containerCinemaList);

        displayAllCinemaTable(response);

        // response.results.forEach(element => {
        //     console.log({nom: element.nom, adresse: element.adresse, commune: element.commune});
        // });

    });
}