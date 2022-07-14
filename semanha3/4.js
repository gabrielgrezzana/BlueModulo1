const prompt = require("prompt-sync")();

const pessoa = {
  nome: "Gabriel",
  idade: 20,
  cidade: "Londrina",
};

console.log(pessoa);

pessoa.empresa = "Blue";
pessoa.envelhecer();
console.log(pessoa);
