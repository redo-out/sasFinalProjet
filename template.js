import { trips } from "./arrayOfObjet.js";

let prompt = PromptSync();
import PromptSync from 'prompt-sync';

let ID = 1;
let tickets = [];
let found = false;
let n;

console.log("====== Railway Manager ======", '\n');
console.log("1. Afficher les trajets");
console.log("2. Acheter un ticket");
console.log("3. Afficher les tickets");
console.log("4. Annuler un ticket");
console.log("5. Rechercher un ticket");
console.log("6. Filtrer les trajets");
console.log("7. Trier les trajets");
console.log("0. Quitter", '\n');

do {
    
    n = +prompt('Entrer une choix : ');
    switch (n) {
        case 1: {
            afficherTragets(trips);
            break;
        }
        case 2: {
            const passagerNom = prompt('Nom du passager : ');
            const trajetId = +prompt('Identifiant du trajet : ');
            console.log(creatTicket(trips, passagerNom, trajetId))
            break;
        }
        case 3: {

            break;
        }
        case 4: {

            break;
        }
        case 5: {

            break;
        }
        case 6: {

            break;
        }
        case 7: {

            break;
        }
        case 0: {

            break;
        }

        default:
            break;
    }
} while (n != 0);

function afficherTragets(tab) {
    for (let i = 0; i < tab.length; i++) {
        console.log(`${tab[i].id} ${tab[i].departure} → ${tab[i].destination}`);
        console.log(`Départ : ${tab[i].departureTime}`);
        console.log(`Arrivée : ${tab[i].arrivalTime}`);
        console.log(`Prix : ${tab[i].price} DH`);
        console.log(`Places disponsibles : ${tab[i].availableSeats}${'\n'}`);
    }
}

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

function creatTicket(tab, passagerNom, trajetId) {

    for (let indx = 0; indx < tab.length; indx++) {
           if (trajetId == tab[indx].id && verifierSeats(tab[indx].availableSeats) == true ) {
            let ticket = {
                id: ID,
                passangername: passagerNom,
                tripId: trajetId,
                Seatnumber: 51 - tab[indx].availableSeats,
                price: tab[indx].price
            }
            found = true;
            tickets[tickets.length] = ticket;
            tab[indx].availableSeats -= 1;
            console.log(tab[indx].availableSeats);
            console.log(`Have a safe trip :) `);
            ID++;
        }
    }
    if (!found) { console.log("No valid ticket created."); }
    return (tickets[ID - 2]);
}





