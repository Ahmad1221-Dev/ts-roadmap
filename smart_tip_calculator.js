let billAmount = 120 ;
let tipPercentage = 15;
let numberOfPeople = 0;
let isZeroPeople = (numberOfPeople === 0)

let totalTip;
let tipPerPerson;

totalTip = billAmount * (Number(tipPercentage)/100);
tipPerPerson = totalTip/numberOfPeople;
totalBillPerPerson = (billAmount + totalTip) / numberOfPeople;

/* 

---Testing Short Circuiting---

console.log(totalTip);

numberOfPeople === 0 && 
console.log('Cannot divide in 0 people') || 
numberOfPeople > 0 && 
console.log(tipPerPerson);

console.log( isZeroPeople && 'Error: Cannot Divide in 0 people' || !isZeroPeople && `${tipPerPerson}` )
console.log( isZeroPeople && 'There are no people' || !isZeroPeople && `${totalBillPerPerson}` )

*/


console.log("\n\n=================Smart Tip Calculator=================")
console.log(`   Bill:          $${billAmount}`);
console.log(`   Tip(${tipPercentage}%):      $${totalTip}`)
console.log(`   People Count:  ${numberOfPeople}`)
console.log( isZeroPeople && '   Tip/person:    Error(Cannot Divide in 0 people)' || !isZeroPeople && `   Tip/person     $${tipPerPerson}` )
console.log( isZeroPeople && '   Bill/person:   There are no people' || !isZeroPeople && `   Total/person:  $${totalBillPerPerson}\n` )
console.log('======================================================')