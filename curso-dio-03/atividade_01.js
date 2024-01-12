class Car {
    brand;
    color;
    fuelCosts;

    constructor(brand, color, fuelCosts) {
        this.brand = brand;
        this.color = color;
        this.fuelCosts = fuelCosts;
    }

    spentInReaisKm(distance, price) {
        const calcValue = (distance * this.fuelCosts) * price;
        return calcValue;
    }
}

const car1 = new Car('Fiat', 'Branco', 1/12);
const car2 = new Car('Wolks', 'Branco', 1/12);

console.log(car1);
console.log(car2);

const total = car1.spentInReaisKm(100, 3.50);
const total2 = car2.spentInReaisKm(70, 4.50);

console.log(`O valor gasto é de R$ ${total.toFixed(2)}`);
console.log(`O valor gasto é de R$ ${total2.toFixed(2)}`);