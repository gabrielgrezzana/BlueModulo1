const prompt = require("prompt-sync")();
//Leia 3 valores de entrada, referentes à idade de uma pessoa em: anos, meses e dias.
//Exemplo: eu tenho 30 anos, 2 meses 3 7 dias. Calcule e exiba o total de dias que essa pessoa já viveu.
//Obs.: apenas para facilitar o cálculo, considere todo ano com 365 dias e todo mês com 30 dias

let ano = +prompt("Digite quantos anos voce tem: ");
let meses = +prompt("Digite quantos meses voce tem: ");
let dias = +prompt("Digite quantos dias voce tem: ");
let i = 0;
let diasano = 0;
while (i >= ano) {
  diasano += 365;
  i++;
  console.log(diasano);
}
console.log(diasano);
