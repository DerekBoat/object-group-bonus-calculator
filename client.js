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
let newArray = [];
let rating3Bonus = 0.04;
let rating4Bonus = 0.06;
let rating5Bonus = 0.1;
let employeeNumber4Bonus = 0.05;
let over65000 = 0.01;
let bonusCap = 0.13;


function employeeBonusCalculator(bonusPercentage){
  console.log("in function");
  for (person of employees) {
    console.log("in for loop");
    console.log(person.reviewRating);
    console.log(person.employeeNumber);
    console.log(person.annualSalary);
    let thingLength = person.employeeNumber;
    let employeeNumberLength = 0;
    employeeNumberLength = thingLength.length;

    if (person.reviewRating == 3 && employeeNumberLength == 4 && person.annualSalary < 65000){
      bonusPercentage = rating3Bonus + employeeNumber4Bonus;
      let newEmpObj = {
        name: person.name,
        bonusPercentage: bonusPercentage
      }
      console.log(newEmpObj.bonusPercentage);
      newArray.push(newEmpObj);
    }
     else if (person.reviewRating == 4 && employeeNumberLength == 4 && person.annualSalary < 65000){
     bonusPercentage = rating4Bonus + employeeNumber4Bonus;
     let newEmpObj = {
        name: person.name,
        bonusPercentage: bonusPercentage
      }
      newArray.push(newEmpObj);
    } 
    else if (person.reviewRating == 5 && employeeNumberLength == 4 && person.annualSalary < 65000){
     bonusPercentage = bonusCap;
      let newEmpObj = {
        name: person.name,
        bonusPercentage: bonusPercentage
      }
      newArray.push(newEmpObj);
    } 
    else if (person.reviewRating == 3 && employeeNumberLength == 5 && person.annualSalary < 65000){
     bonusPercentage = rating3Bonus;
     let newEmpObj = {
        name: person.name,
        bonusPercentage: bonusPercentage
      }
      newArray.push(newEmpObj);
    } 
    else if (person.reviewRating == 4 && employeeNumberLength == 5 && person.annualSalary < 65000){
    bonusPercentage = rating4Bonus;
      let newEmpObj = {
        name: person.name,
        bonusPercentage: bonusPercentage
      }
      newArray.push(newEmpObj);
    } 
    else if (person.reviewRating == 5 && employeeNumberLength == 5 && person.annualSalary < 65000){
     bonusPercentage = rating5Bonus;
      let newEmpObj = {
        name: person.name,
        bonusPercentage: bonusPercentage
      }
      newArray.push(newEmpObj);
    } 
    else if (person.reviewRating == 3 && employeeNumberLength == 4 && person.annualSalary > 65000){
     bonusPercentage = rating3Bonus + employeeNumber4Bonus - over65000;
      let newEmpObj = {
        name: person.name,
        bonusPercentage: bonusPercentage
      }
      newArray.push(newEmpObj);
    }
     else if (person.reviewRating == 4 && employeeNumberLength == 4 && person.annualSalary > 65000){
     bonusPercentage = rating4Bonus + employeeNumber4Bonus - over65000;
      let newEmpObj = {
        name: person.name,
        bonusPercentage: bonusPercentage
      }
      newArray.push(newEmpObj);
    } 
    else if (person.reviewRating == 5 && employeeNumberLength == 4 && person.annualSalary > 65000){
     bonusPercentage = bonusCap;
      let newEmpObj = {
        name: person.name,
        bonusPercentage: bonusPercentage
      }
      newArray.push(newEmpObj);
    } 
    else if (person.reviewRating == 3 && employeeNumberLength == 5 && person.annualSalary > 65000){
     bonusPercentage = rating3Bonus - over65000;
      let newEmpObj = {
        name: person.name,
        bonusPercentage: bonusPercentage
      }
      newArray.push(newEmpObj);
    } 
    else if (person.reviewRating == 4 && employeeNumberLength == 5 && person.annualSalary > 65000){
     bonusPercentage = rating4Bonus - over65000;
      let newEmpObj = {
        name: person.name,
        bonusPercentage: bonusPercentage
      }
      newArray.push(newEmpObj);
    } 
    else if (person.reviewRating == 5 && employeeNumberLength == 5 && person.annualSalary > 65000){
     bonusPercentage = rating5Bonus - over65000;
      let newEmpObj = {
        name: person.name,
        bonusPercentage: bonusPercentage
      }
      newArray.push(newEmpObj);
    }
    else if (person.reviewRating < 3){
      console.log("you should be a better employee", person.name);
    }
      
    }
  }


employeeBonusCalculator();
  console.log(newArray);

// objectReturner(employees);
// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.


