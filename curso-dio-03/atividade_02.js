class Person {
    name;
    weight;
    height;

    constructor(name, weight, height) {
        this.name = name;
        this.weight = weight;
        this.height = height;
    }

    imcValue() {
        return this.weight / Math.pow(this.height, 2);
    }

    classificationImc() {
        const imc = this.imcValue();

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
}

const person1 = new Person('José', 70.0, 1.75);
const imc = person1.imcValue();

console.log(`Seu IMC é ${imc.toFixed(2)}`);
console.log(person1.classificationImc());
