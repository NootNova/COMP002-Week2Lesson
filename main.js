
console.log('COMP-002 activity: script loaded');

function calculateTicketTotal(priceText, quantityText, hasDiscount = false) {
  
  // TODO: Reject blank/non-finite values, negative price, and invalid whole-number quantity.
  
  // TODO: Convert deliberately and return total; apply a documented discount when true.

}


const coffee = "true"

console.log(`caffeinated: ${coffee}`)


const complete = {Completion:"Practice Complete!"};

let practiceMinutes = 10;

practiceMinutes = practiceMinutes + 7;

console.log(`${practiceMinutes} minutes`)

if (practiceMinutes >= 17) {

  console.log(complete);

} else {

  console.log("Practice Is Incomplete.");

}




console.log(calculateTicketTotal('2.50', '3')); 

// Expected 7.5 before discount

// TODO: Add zero, blank, decimal-price, negative, nonnumeric and discount tests.
