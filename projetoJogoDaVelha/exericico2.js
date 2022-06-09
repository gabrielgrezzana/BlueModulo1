//2. Crie um sistema de cadastro de funcionários que deve perguntar
//quantos funcionarios serão cadastrados e criar um objeto novo
//para cada funcionário cadastrado com as informações: nome, cargo e salário.
//Ele deve armazenar todos esses objetos em uma lista.
const prompt = require("prompt-sync")();

let numero = +prompt("Digite quantos funcionários deseja cadastrar?:  ");
let arr = [];
for (let i = 1; i <= numero; i++) {
  const pessoa = {
    nome: "Gabriel",
    cargo: "junior",
    salario: "R$10000",
  };
  pessoa.nome = prompt("Digite o nome: ");
  pessoa.cargo = prompt("Digite o cargo: ");
  pessoa.salario = prompt("Digite o salario: ");
  //console.log(pessoa);
  arr.push(pessoa);
  console.log(arr);
}
