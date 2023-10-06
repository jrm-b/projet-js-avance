export function getCoords(){
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            console.log(latitude, longitude);
            resolve({ latitude, longitude })
        },error => {
            reject(error);
        });
    })
};