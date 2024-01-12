// Objeto no JS: Coleção dinâmica de chave, valor
const person = {
    name: "Lima",
    age: 23,

    describe: function () {
        console.log(`Meu nome é ${this.name} e minha idade é ${this.age}`);
    }
};

const attribute = 'age';

person.height = 1.74;

person.describe();

console.log(person.name);
console.log(person.age);
console.log(person.height);
console.log(person[attribute]);
console.log(person);

person.name = 'Santos';