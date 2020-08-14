export function getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
}


export function randomIntFromInterval(min: number, max: number) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}