# **Final Project SAS 1 Youcode: Train Management in Console "Railway Manager"**

# **Introduction**

You must develop a console application in **JavaScript with Node.js** to
manage train routes and tickets.

The application works only in the terminal.

User input must be handled using **prompt()** or Node.js native
**readline** module.

Example with readline:

``` javascript
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });
rl.question('What do you think of Node.js? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  rl.close();
});
```

Example with prompt-sync:

**You need to install the package with: 'npm install prompt-sync'**

``` javascript
var prompt = require('prompt-sync')();
var n = prompt('How many more times? ');
```

The data needed to complete the project is already provided. It contains
the list of routes to use in the application.

You must use this data as the working base.

**Project data:**
<https://gist.github.com/AzizBenMallouk/31e020b92fcc710a732fae0c2adec985>

# **1. Main menu**

When the program starts, display:

``` javascript
=================================
        RAILWAY MANAGER
=================================

1. Display trips
2. Buy a ticket
3. Display tickets
4. Cancel a ticket
5. Search for a ticket
6. Filter trips
7. Sort trips
0. Exit

Your choice:
```

After each operation, the program must return to the main menu.

The program stops only when the user chooses:

0\. Exit

# **2. Trips**

Trips are **fixed** and already recorded in the program.

There is no request to create or calculate new trips.

Example:

``` javascript
const trips = [
  {
    id: 1,
    departure: "Safi",
    destination: "Youssoufia",
    departureTime: "08:00",
    arrivalTime: "09:00",
    price: 25,
    availableSeats: 50
  },
  // Other data is available in the provided file.
];
```

**Data:**
<https://gist.github.com/AzizBenMallouk/31e020b92fcc710a732fae0c2adec985>

Each trip has:

-   an identifier;
-   a departure city;
-   a destination;
-   a departure time;
-   an arrival time;
-   a price;
-   a number of available seats.

# **3. Display trips**

The user must be able to display all available trips.

Example:

``` javascript
=== AVAILABLE TRIPS ===

#1 Safi → Youssoufia
Departure: 08:00
Arrival: 09:00
Price: 25 DH
Available seats: 50

#2 Youssoufia → Ben Guerir
Departure: 09:30
Arrival: 10:30
Price: 30 DH
Available seats: 50
```

# **4. Buy a ticket**

The user enters:

Passenger name: Trip ID:

Example:

Passenger name: Ahmed Trip ID: 3

The program must:

1.  find the corresponding trip;
2.  verify that the trip exists;
3.  verify that at least one seat is available;
4.  create a ticket;
5.  automatically assign a seat number;
6.  decrease the number of available seats;
7.  add the ticket to the tickets array.

Tickets are stored in:

``` javascript
const tickets = [];
```

Ticket example:

``` javascript
{
    id: 1,
    passengerName: "Ahmed",
    tripId: 3,
    seatNumber: 1,
    price: 90
}
```

The ticket ID must be unique.

If the trip does not exist:

Trip not found.

If no seats are available:

Train full.

Otherwise:

Example:

``` javascript
Ticket purchased successfully.

Ticket #1
Passenger: Ahmed
Trip: Safi → Marrakech
Seat: 1
Price: 90 DH
```

# **5. Display tickets**

The program must display all registered tickets.

Example:

``` javascript
=== TICKETS ===

Ticket #1
Passenger: Ahmed
Trip: Safi → Marrakech
Seat: 1
Price: 90 DH

Ticket #2
Passenger: Sara
Trip: Safi → Youssoufia
Seat: 1
Price: 25 DH
```

If no ticket exists:

No tickets registered.

# **6. Cancel a ticket**

The user enters: **Ticket ID**

The program must:

1.  find the ticket;
2.  verify that it exists;
3.  find the associated trip;
4.  delete the ticket;
5.  increase the number of available seats for the trip by 1.

Example:

``` javascript
Ticket ID: 2

Ticket cancelled successfully.
```

If the ticket does not exist:

Ticket not found.

# **7. Search for a ticket**

The application must allow searching for a ticket.

## **Search by passenger name**

Example:

``` javascript
Passenger name: Ahmed

// The program displays all tickets belonging to Ahmed.

Ticket #3
Passenger: Ahmed
Trip: Marrakech → Casablanca
Seat: 2
Price: 120 DH
```

# **8. Filter trips**

Since the trips are already recorded, the program simply filters the
trips array.

The user can filter by departure city:

``` javascript
Departure city: Safi

Result:
Safi → Youssoufia : 25 DH
Safi → Marrakech : 90 DH
```

# **9. Sort trips**

The user can sort by **lowest price first**.

Example:

``` javascript
Safi → Youssoufia : 25 DH
Youssoufia → Ben Guerir : 30 DH
Safi → Marrakech : 90 DH
Marrakech → Casablanca : 120 DH
```

# **10. Bonus --- Statistics**

Once all main features are complete, the learner may add some
statistics.

### **Total number of tickets sold**

Total number of tickets: 15

### **Total revenue**

Calculate the sum of all ticket prices.

Total revenue: 1 250 DH

### **Most sold trip**

Count the number of tickets for each tripId.

Example:

Most sold trip:

Safi → Marrakech 7 tickets sold

# **11. Technical constraints**

The project must be built in **JavaScript with Node.js**.

The main concepts expected are:

-   variables and constants;
-   operators;
-   if / else;
-   switch;
-   for;
-   while;
-   functions;
-   arrays;
-   objects;
-   arrays of objects;
-   string manipulation.

JavaScript methods may be used, notably:

push() splice() find() findIndex() includes() filter() map()

The application must not use:

-   HTML;
-   CSS;
-   DOM;
-   browser;
-   frontend framework;
-   database.

All data remains in memory while the program is running.

# **12. Deliverables**

You must provide:

-   the JavaScript file that runs the application;
-   a GitHub repository;
-   a commit history showing the progress of the work.
