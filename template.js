import { trips } from "./arrayOfObjet.js";

let prompt = PromptSync();
import PromptSync from 'prompt-sync';

let tickets = [];
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
            desplayTicket();

            break;
        }
        case 4: {
            console.log(annulerTicket());
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
        if (trajetId == tab[indx].id && verifierSeats(tab[indx].availableSeats) == true) {
            let ticket = {
                id: tickets.length + 1,
                passangername: passagerNom,
                tripId: trajetId,
                depart: tab[indx].departure,
                destination: tab[indx].destination,
                Seatnumber: 51 - tab[indx].availableSeats,
                price: tab[indx].price
            }
            tickets[tickets.length] = ticket;
            trips[indx].availableSeats--;
            return `
           Ticket purchased successfully.

Ticket #${ticket.id}
Passenger: ${passagerNom}
Trip: ${tab[indx].departure} → ${tab[indx].destination}
Seat: ${ticket.Seatnumber}
Price: ${tab[indx].price} DH \n`;
        }
    }
    return "couldn't creat your ticket";
}

function desplayTicket() {

    if (tickets.length == 0) {
        console.log("there's no tickets");
        return;
    }
    let showTicket = "       TICKETS       \n ";
    for (let i = 0; i < tickets.length; i++) {
        let ticket = tickets[i];
        showTicket += "\n";
        showTicket += "Ticket #" + (ticket.id) + "\n";
        showTicket += "passager : " + ticket.passangername + "\n";
        showTicket += "trajet : " + ticket.depart + " → " + ticket.destination + "\n";
        showTicket += "Place : " + ticket.Seatnumber + "\n";
        showTicket += "Prix : " + ticket.price + " DH \n";
    }
    console.log(showTicket);
}

function annulerTicket(){
    let identif = +prompt("Entre ID: ");
    if (tickets.length <= 0){
        return "aucune ticket";
    }
    let found = [];
    for (let indx = 0; indx < tickets.length; indx++){
        if (identif == tickets[indx].id){
        found = tickets[indx];
        tickets.splice(indx, 1);
        break;
        }
        if (!found){
            return "ticket not found";      
          }
        }
        found.availableSeats++;
        return `Ticket ${identif} annulé avec succès.`;
    }

function rechercherTicket(){
    let name = prompt("entre passager nom : ")
    let ticket = [];
    for (let indx = 0; indx < tickets.length; i++){
        if (name == tickets[indx].passangername){
            ticket += tickets[indx].passangername; 
        }
    }
    return ticket;
}

function filtrerTrajets(dest){
    let results = [];


}