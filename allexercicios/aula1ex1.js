const prompt = require("prompt-sync")();
//Leia 2 valores A e B, que correspondem a 2 notas de um aluno.
//A seguir calcule e informe a média ponderada do aluno, sabendo que a nota A tem peso 4 e a nota B tem peso 6.
//Ex: nota a * 4 e nota b * 6.

let nota1 = +prompt("Digite a sua primeira nota: ");
let nota2 = +prompt("Digite a sua segunda nota: ");

while (nota1 > 4) {
  console.log("Valor da primeira nota está maior do que deveria(Max 4).");
  nota1 = +prompt("Digite a sua primeira nota: ");
}
while (nota2 > 6) {
  console.log("Valor da segunda nota está maior do que deveria(Max 6).");
  nota2 = +prompt("Digite a sua segunda nota: ");
}

let calculo1 = (nota1 + nota2) / 2;
console.log(calculo1);
