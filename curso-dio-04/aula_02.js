const notas = [];

notas.push(3);
notas.push(9.7);
notas.push(9);
notas.push(5);
notas.push(8.3);

console.log(notas.length);
let soma = 0;

for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
}

console.log(`Média: ${soma / notas.length}`);

const nome = 'Yuri Lima';

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}