//Jogo da adivinhação - Escreva um programa que faça o computador “pensar” em um número inteiro entre 0 e 10
//e peça para o usuário tentar descobrir qual foi o número escolhido pelo computador.
//O programa deve ser repetir até o usuário acertar o número, e a cada palpite deve dizer se o número é maior ou menor que o palpite.
//No final dele deve escrever na tela que o usuário encontrou o número, e mostrar a quantidade de palpites que foi necessária.
const prompt = require("prompt-sync")();

let resultado = Math.floor(Math.random() * 10 + 1);
//let escolha = +prompt(
// "Tente acertar qual o número o computador gerou de 1 a 10. ");

while (true) {
  let escolha = +prompt(
    "Tente acertar qual o número o computador gerou de 1 a 10. "
  );
  if (resultado == escolha) {
    break;
  }
}
