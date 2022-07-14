//Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário,
//mostrando uma mensagem de erro e voltando a pedir as informações.
const prompt = require("prompt-sync")();

let nome = prompt("Digite o nome de usuário: ");
let senha = prompt("Digite a senha: ");

while (nome == senha) {
  console.log("Error. A senha não pode ser igual ao nome, tente novamente.");
  nome = prompt("Digite o nome de usuário: ");
  senha = +prompt("Digite a senha: ");
}

console.log("aPROVADO");
