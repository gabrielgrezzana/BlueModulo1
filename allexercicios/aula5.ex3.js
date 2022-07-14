//Faça um programa que peça um número par, e repita a execução caso o número digitado seja ímpar.
const prompt = require("prompt-sync")();

let numero = +prompt("Digite um número par: ");
while (numero % 2 == 1) {
  console.log("Error, o número nao é par! ");
  numero = +prompt("Digite um número par: ");
}
