//Faça um programa que simule um lançamento de dados. Lance o dado 100 vezes e armazene os resultados em um array.
//Depois, mostre quantas vezes cada valor foi conseguido.

let lista = [];
for (let i = 0; i < 100; i++) {
  let resultado = Math.floor(Math.random() * 100 + 1);
  lista.push(resultado);
}

console.log(lista);
