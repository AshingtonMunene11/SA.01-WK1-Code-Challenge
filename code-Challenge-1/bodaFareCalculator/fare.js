//creating a prompt for the UI to calculate boda charge
let numberInKM = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");

//Converting the input to a number
let distanceAsNumber = Number(numberInKM);

if (isNaN(distanceAsNumber)) {
  alert("That's not a valid number of kilometers!");
//If the input valuee is not a number, user will be requested to input a number. However if not;
} else {
    let result = calculateBodaFare(distanceAsNumber);
  console.log(result);
}

function calculateBodaFare(distanceAsNumber) {
        const baseFare = 50;
        const chargePerKM = 15;
        const distanceCharge = distanceAsNumber * chargePerKM;
        const totalFare = baseFare + distanceCharge;

        console.log(`Uko kwote? Io ni ${distanceAsNumber} km`);
        console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
        console.log(`Mpaka Uko: KES ${distanceCharge}`);
        console.log(`Total Fare: KES ${totalFare}`);
        return `Panda Pikipiki!`
}

//Compute the fare based on the distance
let result = calculateBodaFare(distanceAsNumber);
  console.log(result);
