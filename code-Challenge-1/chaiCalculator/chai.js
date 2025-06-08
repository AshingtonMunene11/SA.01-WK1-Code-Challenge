 //creating a prompt for the UI 
    let numberOfCups = prompt("Jambo! How many cups of tea would you like to have today?");

// Convert the input to a number
    let cupsAsNumber = Number(numberOfCups);

if (isNaN(cupsAsNumber)) {
  alert("That's not a valid number of cups!");
} else {
    let result = calculateChaiIngredients(cupsAsNumber);
    console.log(result);
}

// Function to calculate the ingredients for chai based on the number of cups if the input is a valid number
function calculateChaiIngredients(cupsAsNumber) {
    const water = cupsAsNumber * 200;
    const milk =  cupsAsNumber * 50;
    const tealeaves = cupsAsNumber * 1;
    const sugar = cupsAsNumber * 2;

console.log(`To make ${cupsAsNumber} cups of Kenyan Chai, you will need`);
console.log(`Water ${water} ml`);
console.log(`Milk ${milk} ml`);
console.log(`Tea Leaves (Majani) ${tealeaves} tablespoons`);
console.log(`Sugar ${sugar} tablespoons`);
return "Enjoy your Chai Bora!";
}
//Compute the ingredients based on the number of cups
let result = calculateChaiIngredients(cupsAsNumber);
  console.log(result);

