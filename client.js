const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT
let reviewRating = 3;
let annualSalary = 47000; 
let employeeNumber = 4;
for (employee of employees) {
  console.log(employee.annualSalary);
}
if (reviewRating === 3 && employeeNumber.length === 4 && annualSalary < 65000){
  let bonusPercentage = 0.08;
  let bonusTotal= annualSalary*bonusPercentage;
  let totalCompensation = annualSalary + bonusTotal;
  
}
 else if (reviewRating === 4 && employeeNumber.length === 4 && annualSalary < 65000){
    let bonusPercentage = 0.1;
    let bonusTotal= annualSalary*bonusPercentage;
    let totalCompensation = annualSalary + bonusTotal;
} 
else if (reviewRating === 5 && employeeNumber.length === 4 && annualSalary < 65000){
  let bonusPercentage = 0.14;
  let bonusTotal= annualSalary*bonusPercentage;
  let totalCompensation = annualSalary + bonusTotal;

} 
else if (reviewRating === 4){
  let bonusPercentage = 0.06;
  let bonusTotal= annualSalary*bonusPercentage;
  let totalCompensation = annualSalary + bonusTotal;

} else if (reviewRating === 5 ){
  let bonusPercentage = 0.1;
  let bonusTotal= annualSalary*bonusPercentage;
  let totalCompensation = annualSalary + bonusTotal;
} else if (reviewRating)


// objectReturner(employees);
// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );
