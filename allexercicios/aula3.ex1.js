//Faça um Programa que peça dois números e imprima o maior deles, e informe caso eles sejam iguais.
const prompt = require("prompt-sync")();

let numero1 = +prompt("Digite um número: ");
let numero2 = +prompt("Digite outro número: ");

if (numero1 > numero2) {
  console.log(numero1);
} else if (numero2 > numero1) {
  console.log(numero2);
} else if (numero1 == numero2) {
  console.log("Os dois números são iguais!");
}
