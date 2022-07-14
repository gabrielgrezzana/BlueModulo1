//Faça um Programa que leia 20 números inteiros e armazene-os num array.
//Armazene os números pares no array PAR e os números IMPARES no array IMPAR. Imprima os três vetores.

const prompt = require("prompt-sync")();

let listaPar = [];
let listaImpar = [];
for (let i = 0; i < 20; i++) {
  let numeros = +prompt("Digite 20 números inteiros. ");
  if (numeros % 2 == 0) {
    listaPar.push(numeros);
  } else {
    listaImpar.push(numeros);
  }
}

console.log(listaPar);
console.log(listaImpar);
