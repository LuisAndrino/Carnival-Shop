let uwu = true;
let totalTickets = 1000;

const objGifts = {
  name: {
    "Teddy Bear" : 1, "Big Red Ball" : 2, "Huge Bear" : 3, "Candy" : 4, "Stuffed Tiger" : 5, "Stuffed Dragon" : 6,
    "Skateboard" : 7, "Toy Car" : 8, "Basketball" : 9, "Scary Mask" : 10
  } ,
  cost: [10, 5, 50, 8, 15, 30, 100, 25, 20 , 75]
}

let firstGifts = Object.keys(objGifts.name);
let firstId = Object.values(objGifts.name);


console.log("WELCOME TO THE CARNIVAL GIFT SHOP!");
console.log("Hello friend! Thank you for visiting the carnival!");
console.log("Here's the list of gifts:\n");

for(let i = 0; i < firstGifts.length; i++){
  console.log(`${firstId[i]}- ${firstGifts[i]}, Cost: ${objGifts.cost[i]} tickets`);
}

while (uwu){
  const input = require('sync-input');
  let gifts = Object.keys(objGifts.name);
  let id = Object.values(objGifts.name);

  console.log("\nWhat do you want to do?");
  console.log("1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop")
  let choose = Number(input());

  if(choose > 0 && choose <= 5 ) {

    switch (choose) {
      case 1 :
        console.log("Enter the number of the gift you want to get:");
        let giftChoose = Number(input());
        if(isNaN(giftChoose) || giftChoose == " "){
          console.log("Please enter a valid number!");
        }else if (Object.keys(objGifts.name).length === 0){
          console.log("Wow! There are no gifts to buy.");
        } else if (giftChoose > Object.keys(objGifts.name).length){
          console.log("There is no gift with that number!")
        } else if(objGifts.cost[giftChoose - 1] > totalTickets){
          console.log("You don't have enough tickets to buy this gift.")
        } else {
          console.log(`Here you go, one ${gifts[giftChoose - 1]}!`);
          totalTickets = totalTickets - objGifts.cost[giftChoose - 1];
          delete objGifts.name[gifts[giftChoose - 1]];
          objGifts.cost.splice(giftChoose - 1, 1);
          console.log(`Total tickets: ${totalTickets}`);
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
      if(Object.keys(objGifts.name).length === 0) {
        console.log("Wow! There are no gifts to buy.");
      }
      else {
        console.log("Here's the list of gifts:\n");
        for (let i = 0; i < gifts.length; i++) {
          console.log(`${id[i]}- ${gifts[i]}, Cost: ${objGifts.cost[i]} tickets`);
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
