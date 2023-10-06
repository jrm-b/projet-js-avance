import { elements } from "../main.js";

export function getCoords(){
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(position => {
            
            // console.log(position);
            
            const coords = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            }

            // console.log(coords)

            resolve(coords)
            elements.displayLocalisation.innerText = `latitude: ${coords.latitude} / longitude: ${coords.longitude}`; 
        },error => {
            reject(error);
        });
    })
};