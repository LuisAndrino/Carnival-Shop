let uwu = true;
let totalTickets = 0;

const objGifts = {
  name: {    1: "Teddy Bear", 2: "Big Red Ball", 3 : "Huge Bear", 4 : "Candy", 5: "Stuffed Tiger",
    6: "Stuffed Dragon", 7 : "Skateboard", 8 : "Toy Car", 9: "Basketball", 10: "Scary Mask" } ,
  cost: {1: 10, 2: 5, 3: 50, 4: 8, 5: 15, 6: 30, 7: 100, 8: 25, 9: 20, 10: 75}
}

//Print the list at the beginning
let firstGifts = Object.values(objGifts.name);
let firstId = Object.keys(objGifts.name);


console.log("WELCOME TO THE CARNIVAL GIFT SHOP!");
console.log("Hello friend! Thank you for visiting the carnival!");
console.log("Here's the list of gifts:\n");

for(let i = 0; i < firstGifts.length; i++){
  console.log(`${firstId[i]}- ${firstGifts[i]}, Cost: ${objGifts.cost[i+1]} tickets`);
}

while (uwu){
  //Printing the menu
  const input = require('sync-input');
  let gifts = Object.values(objGifts.name);
  let id = Object.keys(objGifts.name);

  console.log("\nWhat do you want to do?");
  console.log("1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop")
  let choose = Number(input());

  if(choose > 0 && choose <= 5 ) {

    switch (choose) {
      //Displaying and erasing things from the object
      case 1 :
        if (Object.keys(objGifts.name).length === 0){
          console.log("Wow! There are no gifts to buy.");
        }
        else{
          console.log("Enter the number of the gift you want to get:");
          let giftChoose = Number(input());
          if (isNaN(giftChoose) || giftChoose == " ") {
            console.log("Please enter a valid number!");
          } else if (giftChoose < 0 || giftChoose > 10) {
            console.log("There is no gift with that number!")
          } else if (objGifts.cost[giftChoose] > totalTickets) {
            console.log("You don't have enough tickets to buy this gift.")
          } else {
            if(objGifts.name[giftChoose] === undefined){
              console.log("There is no gift with that number!")
            } else {
              console.log(`Here you go, one ${objGifts.name[giftChoose]}!`);
              totalTickets = totalTickets - objGifts.cost[giftChoose];
              delete objGifts.name[giftChoose];
              delete objGifts.cost[giftChoose];
              console.log(`Total tickets: ${totalTickets}`);
          }
        }
      }
        break;
      case 2:
        console.log("Enter the ticket amount:");
        let newTickets = Number(input());
        if(isNaN(newTickets) || newTickets < 0 || newTickets > 1000 ){
          console.log("Please enter a valid number between 0 and 1000.")
        }
        else {
          totalTickets = newTickets + totalTickets;
          console.log(`Total tickets: ${totalTickets}`);
        }
        break;
      case 3:
        console.log(`Total tickets: ${totalTickets}`);

        break;
      case 4:
        console.log("Here's the list of gifts:\n");
      if(Object.keys(objGifts.name).length <= 0) {
        console.log("Wow! There are no gifts to buy.");
      }
      else {
        // Get the updated keys of the name and cost properties as arrays
        const updatedNameKeys = Object.keys(objGifts.name);
        const updatedCostValues = Object.values(objGifts.cost);

        // Loop through the updatedNameKeys array
        for (let i = 0; i < updatedNameKeys.length; i++) {
          // Get the current name and cost
          const name = objGifts.name[updatedNameKeys[i]];
          const cost = updatedCostValues[i];
          console.log(`${updatedNameKeys[i]}- ${name}, Cost: ${cost} tickets`);
        }
      }
        break;
      case 5:
        uwu = false;
        console.log("Have a nice day!");
        break;
    }
  }
  else{
    console.log("Please enter a valid number!")
  }
}
