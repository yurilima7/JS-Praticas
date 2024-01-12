class Person {
    name;
    age;
    yearOfBirth;

    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.yearOfBirth = 2024 - age;
    }

    describe() {
        console.log(`Meu nome é ${this.name} e minha idade é ${this.age} e meu ano de nascimento é ${this.yearOfBirth}`);
    }
}

const lima = new Person('Lima', 23);
const marcos = new Person('Marcos', 29);

lima.describe();
marcos.describe();

console.log(lima);
console.log(marcos);

function comparePeople(person1, person2) {
    if (person1.age > person2.age) {
        console.log(`${person1.name} é mais velho(a) que ${person2.name}`);
    } else if (person1.age < person2.age) {
        console.log(`${person2.name} é mais velho(a) que ${person1.name}`);
    } else {
        console.log(`${person2.name} e ${person1.name} possuem a mesma idade`);
    }
}

comparePeople(lima, marcos);