let numbers = []

function gets(max) {
    for (let i = 0; i < 5; i++) {
        numbers.push(Math.floor(Math.random() * max));
    }
}

function printLista() {
    console.log('Lista: ');
    numbers.map((i) => console.log(i));
}

let maior = 0;

function maxValue() {
    for (let i = 0; i < numbers.length; i++) {
        if (maior < numbers[i]) {
            maior = numbers[i];
        }
    }
}

function print() {
    maxValue();
    console.log(`Maior é: ${maior}`);
}


module.exports = { gets, printLista, print };