// Code your solution in this file.
let drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
let newDrivers = drivers.map( function lowerCaseDrivers(drivers){
  return drivers.toLowerCase();
})
console.log(newDrivers);


const drivers3 = [
  { name: 'Bobby',   hometown: 'Pittsburgh'  },
  { name: 'Sammy',   hometown: 'New York'    },
  { name: 'Sally',   hometown: 'Cleveland'   },
  { name: 'Annette', hometown: 'Los Angeles' },
  { name: 'Bobby',   hometown: 'Tampa Bay'   }
];


let newDrivers3 = drivers3.map(function attributesToPhrase(driver){
  return driver['name'] + ' is from ' + driver['hometown']
})

console.log(newDrivers3)