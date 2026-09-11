import { trips } from "./arrayOfObjet.js";

let prompt = PromptSync();
import PromptSync from 'prompt-sync';

let tickets = [];
let n;
function showMenu() {
    console.log(`====== Railway Manager ====== \n
    1. Afficher les trajets :
    2. Acheter un ticket :
    3. Afficher les tickets :
    4. Annuler un ticket :
    5. Rechercher un ticket :
    6. Filtrer les trajets :
    7. Trier les trajets :
    0. Quitter : \n
=============================`);
}
showMenu();
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
            console.log(creatTicket(trips, passagerNom, trajetId));
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
            console.log(rechercherTicket());
            break;
        }
        case 6: {
            filtrerTrajets(trips);
            break;
        }
        case 7: {
            sortTrips(trips);
            break;
        }
        case 0: {
            console.log("Thanks for using Railway manager");
            break;
        }
        default:
            break;
    }
    if (n != 0) {
        showMenu();
    }
} while (n != 0);

function afficherTragets(tab) {
console.table(trips)
}

function verifierId(numId) {
    for (let i = 0; i < trips.length; i++) {
        if (numId == trips.id) {
            return true;
        }
    }
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
    if (!verifierId(trajetId)) {
        return "couldn't creat your ticket"
    }
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
        showTicket += "======================";
    }
    console.log(showTicket);
}

function annulerTicket() {
    let identif = +prompt("Entre ID: ");
    if (tickets.length <= 0) {
        return "aucune ticket";
    }
    let found = "";
    for (let indx = 0; indx < tickets.length; indx++) {
        if (identif === tickets[indx].id) {
            found = tickets[indx];
            for (let i = 0; i < trips.length; i++) {
                if (trips[i].id === found.tripId) {
                    trips[i].availableSeats++;
                    break;
                }
            }
            tickets.splice(indx, 1);
            break;
        }
    }
    if (!found) {
        return "ticket not found";
    }
    return `Ticket ${identif} annulé avec succès.`;
}

function rechercherTicket() {
    let name = prompt("entre passager nom : ")
    let result = "";
    for (let i = 0; i < tickets.length; i++) {
        if (name == tickets[i].passangername) {
            result += `Ticket #${tickets[i].id}
Passenger: ${name}
Trip: ${tickets[i].depart} → ${tickets[i].destination}
Seat: ${tickets[i].Seatnumber}
Price: ${tickets[i].price} DH
==========================\n`;
        }
    }
    if (result == "") {
        return "couldn't find ur ticket";
    }
    return result;
}

function filtrerTrajets(tab) {
    let depar = prompt("Departure City: ")
    let found = false;
    for (let i = 0; i < tab.length; i++) {
        if (depar == tab[i].departure) {
            console.log(`
${tab[i].departure} → ${tab[i].destination} : ${tab[i].price} DH`);
            found = true;
        }
    }
    if (found == false) {
        console.log("aucun trajet trouve");
    }
}

function sortTrips(tab) {
    for (let i = 0; i < tab.length - 1; i++) {
        for (let j = 0; j < tab.length - 1 - i; j++) {
            if (tab[j].price > tab[j + 1].price) {
                let swp = tab[j];
                tab[j] = tab[j + 1];
                tab[j + 1] = swp;
            }
        }
    }
console.table(tab)
for (let i = 0; i < tab.length - 1; i++) {
        for (let j = 0; j < tab.length - 1 - i; j++) {
            if (tab[j].id > tab[j + 1].id) {
                let swp = tab[j];
                tab[j] = tab[j + 1];
                tab[j + 1] = swp;
            }
        }
    }
}