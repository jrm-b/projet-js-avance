import { elements, options } from "../main.js";
import { baseUrl } from "../main.js";

import { displayAllCinemaTable, displayCoordCinemaTable } from './Display.js';

import { getCoords } from "./Geolocalisation.js";

import haversine from "./Math.js";

export function getAllCinema() {

    return fetch(`${baseUrl}`)
        .then(response => response.json())
        .then(response => {

            // console.log(response, elements.containerCinemaList);

            displayAllCinemaTable(response, elements.containerCinemaList);

            // response.results.forEach(element => {
            //     console.log({nom: element.nom, latitude: element.latitude, longitude: element.longitude});
            // });

        });
};

export function getCinemaBySeat(element) {
    return fetch(`${baseUrl}?order_by=${options.order_by}`)
        .then(response => response.json())
        .then(response => {

            displayAllCinemaTable(response, elements.containerCinemaOrderedList);

        });
};

export async function getCinemaCoords() {

    let myCoords = await getCoords();

    return new Promise((resolve, reject) => {
        fetch(`${baseUrl}`)
            .then(response => response.json())
            .then(response => {
                
                // displayCoordCinemaTable(response.results, elements.containerCinemaCoordList);

                const coords = response.results.map(res => {

                    const nom = res.nom;
                    const adresse = res.adresse
                    const commune = res.commune;
                    const fauteuils = res.fauteuils;
                    const latitude = res.latitude;
                    const longitude = res.longitude;

                    return {latitude, longitude, nom, commune, fauteuils, adresse};
                })

                coords.forEach(cinema => {
                    cinema.distance = haversine([myCoords.latitude, myCoords.longitude],[cinema.latitude, cinema.longitude]);
                })

                displayCoordCinemaTable(coords, elements.containerCinemaCoordList);

                // console.log(coords)
                resolve(coords);
            })
    }) 
};