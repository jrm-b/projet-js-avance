import { elements, options } from "../main.js";
import { baseUrl } from "../main.js";

import displayAllCinemaTable from './Display.js';

export function getAllCinema(){

    return fetch(`${baseUrl}`)
        .then(response => response.json())
        .then(response =>{

            // console.log(response, elements.containerCinemaList);

            displayAllCinemaTable(response, elements.containerCinemaList);

            // response.results.forEach(element => {
            //     console.log({nom: element.nom, adresse: element.adresse, commune: element.commune});
            // });

        });
}

export function getCinemaBySeat(element){
    return fetch(`${baseUrl}?order_by=${options.order_by}`)
        .then(response => response.json())
        .then(response => {
            
            displayAllCinemaTable(response, elements.containerCinemaOrderedList);

        });
}