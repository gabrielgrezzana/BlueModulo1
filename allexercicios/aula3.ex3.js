//Faça um programa que leia um número, e informe se ele é par ou impar
const prompt = require("prompt-sync")();

let numero = +prompt("Digite um número qualquer inteiro: ");

if (numero % 2 == 0) {
  console.log("é par");
} else if (numero % 2 != 0) {
  console.log("É impar");
}
