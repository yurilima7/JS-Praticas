const weight = 70;
const height = 1.75;

let imc = weight / Math.pow(height, 2);

if (imc < 18.5) {
    console.log("Abaixo do peso com imc", imc.toFixed(2));
} else if (imc >= 18.5 && imc < 25) {
    console.log("Peso normal com imc", imc.toFixed(2));
} else if (imc >= 25 && imc < 30) {
    console.log("Acima do peso com imc", imc.toFixed(2));
} else if (imc >= 30 && imc < 40) {
    console.log("Obeso com imc", imc.toFixed(2));
} else {
    console.log("Obesidade grave com imc", imc.toFixed(2));
}