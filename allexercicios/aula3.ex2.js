//Faça um programa para a leitura de quatro notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e apresentar:
//A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
//A mensagem "Em recuperação", se a média for entre cinco e sete;
//A mensagem "Reprovado", se a média for menor que cinco.
const prompt = require("prompt-sync")();

let nota1 = +prompt("Digite a nota um: ");
let nota2 = +prompt("Digite a nota dois: ");
let nota3 = +prompt("Digite a nota três: ");
let nota4 = +prompt("Digite a nota quatro: ");

let calculo = (nota1 + nota2 + nota3 + nota4) / 4;

if (calculo >= 7) {
  console.log("Aluno aprovado!!");
} else if (calculo > 5 && calculo < 7) {
  console.log("Em recuperação");
} else if (calculo < 5) {
  console.log("Reprovado!");
}
