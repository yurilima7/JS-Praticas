function imcValue(weight, height) {
    return weight / Math.pow(height, 2);
}

function classificationImc(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso com imc " + imc.toFixed(2);
    } else if (imc >= 18.5 && imc < 25) {
        return "Peso normal com imc " + imc.toFixed(2);
    } else if (imc >= 25 && imc < 30) {
        return "Acima do peso com imc " + imc.toFixed(2);
    } else if (imc >= 30 && imc < 40) {
        return "Obeso com imc" + imc.toFixed(2)
    } else {
        return "Obesidade grave com imc " + imc.toFixed(2);
    }
}

function main() {
    const imc = imcValue(70, 1.75);
    const result = classificationImc(imc);
    console.log(result);
}