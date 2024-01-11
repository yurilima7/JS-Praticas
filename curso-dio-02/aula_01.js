// Procedimento pois não tem retorno
function sayMyName(name) {
    console.log('Your name is:' + name);
}

function pow(value) {
    return value * value;
}

function productValue(value, percent) {
    const calcValue = (percent / 100) * value;
    return value + calcValue;
}

sayMyName('Lima');
sayMyName('Rider');

let result = pow(10) + 10;
console.log('Resultado:', result);

console.log(productValue(100, 10));