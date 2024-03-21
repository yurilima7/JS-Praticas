alert("Boas vindas ao nosso site!");
let nomeAleatorio = "Lua";
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponível = 1000;
alert("Erro! Preencha todos os campos");
let mensagemDeErro = "Erro! Preencha todos os campos";
alert(mensagemDeErro);
let nomeDoUsuário = prompt("Qual o seu nome?");
let idadedDoUsuário = prompt("Qual a sua idade?");

if (idadedDoUsuário >= 18) {
    console.log("Pode tirar a habilitação!");
}

let dia = prompt("Digite o dia da semana");
if (dia == 'sabado' || dia == 'domingo') {
  alert("Bom fim de semana");
} else {
  alert("Boa semana");
}

let num = prompt("Digite um numero");
if(num > 0) {
  alert("Positivo");
} else if(num == 0) {
  alert("Neutro");
} else {
  alert("Negativo");
}

let pontos = 100;
if(pontos >= 100) {
  alert("Você ganhou um carro");
} else {
  alert("Você não conseguio ganhar um carro, tente novamente");
}

let saldo = 50.75;
alert(`Seu saldo é de R$ ${saldo}`);

let nome = prompt("Digite seu nome");
alert(`Olá ${nome}`);


