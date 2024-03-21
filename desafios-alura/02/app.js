// Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
let contador = 1;

while (contador <= 10) {
    alert(contador);
    contador++;
}
// Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
let contadorReg = 10;

while (contadorReg >= 0) {
    alert(contadorReg);
    contadorReg--;
}
// Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
let num = prompt("Digite um numero");
while (num >= 0) {
    alert(num);
    num--;
}
// Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
let numContagem = prompt("Digite um numero");
let contagem = 0;

while (contagem <= numContagem) {
    alert(contagem);
    contagem++;
}