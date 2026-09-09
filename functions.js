// /*export*/ const trips = [
//     {
//         id: 1,
//         departure: "Safi",
//         destination: "Youssoufia",
//         departureTime: "07:30",
//         arrivalTime: "08:30",
//         price: 25,
//         availableSeats: 50
//     },
//     {
//         id: 2,
//         departure: "Safi",
//         destination: "Marrakech",
//         departureTime: "08:00",
//         arrivalTime: "10:30",
//         price: 90,
//         availableSeats: 50
//     }];

 export function afficherTragets(tab) {
    for (let i = 0; i < tab.length; i++) {
        console.log(`${tab[i].id} ${tab[i].departure} → ${tab[i].destination}`);
        console.log(`Départ : ${tab[i].departureTime}`);
        console.log(`Arrivée : ${tab[i].arrivalTime}`);
        console.log(`Prix : ${tab[i].price} DH`);
        console.log(`Places disponsibles : ${tab[i].availableSeats}${'\n'}`);
    }
}

const prompt = require('prompt-sync')();

function verifierId(numId) {
    if (numId == trips.id)
        return true;
    else
        return false;
}

function verifierSeats(seatNum) {
    if (seatNum > 0) {
        return true;
    }
    else {
        return false
    }
}

const trajetId = +prompt('Identifiant du trajet : ');
const passagerNom = prompt('Nom du passager : ');
let ID = 1;

function creatTicket(tab, passagerNom, trajetId) {
    const tickets = [];

    for (let indx = 0; indx < tab.length; indx++) {
           if (trajetId == tab[indx].id && verifierSeats(tab[indx].availableSeats) == true) {
            let ticket = {
                id: ID,
                passangername: passagerNom,
                tripId: trajetId,
                Seatnumber: 51 - tab[indx].availableSeats,
                price: tab[indx].price

            }
            tickets[tickets.length] = ticket;
            tab[indx].availableSeats -= 1;
            console.log(`name : ${tickets[0].passangername}`);
            ID++;
        }
    }
    console.log(tickets);
}
creatTicket(trips, passagerNom,trajetId);

