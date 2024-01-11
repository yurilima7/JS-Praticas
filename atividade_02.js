const fuelPrice = 4.50;
const ethanolPrice = 5.00;
const kmPerLiter = 10;
const distanceTraveled = 500;
const isEthanolCar = true;

if (isEthanolCar) {
    let finalSpending = (distanceTraveled / kmPerLiter) * ethanolPrice;
    console.log(finalSpending.toFixed(2));
} else {
    let finalSpending = (distanceTraveled / kmPerLiter) * fuelPrice;
    console.log(finalSpending.toFixed(2));
}