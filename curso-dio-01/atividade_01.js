// Calcular o valor de uma viagem
const fuelPrice = 4.50;
const kmPerLiter = 10;
const distanceTraveled = 500;

let finalSpending = (distanceTraveled / kmPerLiter) * fuelPrice;

console.log(finalSpending.toFixed(2));
