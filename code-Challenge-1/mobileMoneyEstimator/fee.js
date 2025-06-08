//creating a prompt for the UI 
let amountToSend = prompt("Unatuma Pesa Ngapi?");
amountToSend = Number(amountToSend);
// Check if the user entered a valid number
if(isNaN(amountToSend) || amountToSend <= 0) {
    alert("Tafadhali ingiza nambari halali ya pesa.");
//if the user entered a valid number, proceed with the transaction
}
else {
    let result = estimateTransactionFee(amountToSend);
    console.log(result);
  }

// Function to estimate the transaction fee
function estimateTransactionFee(amountToSend){
    const feePercentage = (15 / 100);
    const minFee = 10;
    const maxFee = 70;

    let transactionFee = amountToSend * feePercentage;
    transactionFee = Math.max(minFee, Math.min(transactionFee, maxFee));

    let totalAmount = amountToSend + transactionFee

console.log(`Sending KES ${amountToSend}:`);
console.log(`Calculated Transaction Fee: KES ${transactionFee}`);
console.log(`Total amount to be debited: KES ${totalAmount}`);
return `Send money Securely!`
}


