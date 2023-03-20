const ageUser = prompt('Inserisci la tua età');
const kmUser = prompt('Quanti km percorrerai?');

let basicTicketprice = 0.21 * kmUser;

console.log('Prezzo base del biglietto €', basicTicketprice);


let discountedTicket = (basicTicketprice * 20) / 100;
let discountedTicketOld = (basicTicketprice * 40) / 100;

let finalPrice = basicTicketprice - discountedTicket;

let finalPriceOld = basicTicketprice - discountedTicketOld;


console.log('Sconto applicato al biglietto €', discountedTicket);
console.log('Sconto applicato al biglietto €', discountedTicketOld);

if (ageUser < 18){
  document.getElementById('ticket').innerHTML = 'Prezzo finale €' + Math.round(finalPrice);
} else if (ageUser > 65){
  document.getElementById('ticket').innerHTML = 'Prezzo finale €' + Math.round(finalPriceOld);
}

document.getElementById('ticket').innerHTML = 'Prezzo finale €' + Math.round(basicTicketprice);

