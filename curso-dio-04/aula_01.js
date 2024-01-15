const students = ['João', 'Vitor', 'Lara'];

students.push('Gabriel');
students[4] = 'Maura';
students[5] = 'Sara';

console.log(students);
console.log(students[0]);
console.log(students[1]);
console.log(students[2]);
console.log(students[3]);
console.log(students[4]);
console.log(students[5]);

students.pop(); // remove o último
console.log(students);

students.shift(); // remove o primeiro
console.log(students);