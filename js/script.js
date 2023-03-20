let ageMin = 0;
let ageMax = 100;

// Math.floor(Math.random(ageMin + ageMax) * 10)

const ageUser = prompt('Inserisci la tua età');
const kmUser = prompt('Quanti km percorrerai?');

let basicTicketprice = 0.21 * kmUser;
console.log('Prezzo base del biglietto €', basicTicketprice)