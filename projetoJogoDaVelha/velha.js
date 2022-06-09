const prompt = require("prompt-sync")();

//Faça um "jogo da velha" criando uma matriz em duas dimensões (Você deve criar um array com 3 arrays de 3 elementos cada dentro).
//O programa deve pedir as coordenadas (linha e coluna) alternadamente para 2 jogares e marcar X ou O em cada caso. Caso um jogador vença,
//ele deve perguntar se desejam jogar mais uma vez, e registrar quem venceu aquela rodada, se os jogadores desejarem parar,
//o programa deve mostrar quem ganhou mais rodadas e quem é o grande vencedor.

//Criação da Matriz de duas dimensões.
//Solicitar coordenadas aos jogadores.
//Laço de repetição que determinará se os jogadores querem continuar o jogo ou não.
//Variável para controle do vencedor de cada rodada.
//Mostrar o resultado e quem foi o grande vencedor.
//Conteúdo de variáveis, arrays, matrizes, condicionais e laços bem aplicados.

let jogador1 = 0;
let jogador2 = 0;
let arr1 = [0, 1, 2, 3];
let arr2 = ["A", 0, 1, 2];
let arr3 = ["B", 0, 1, 2];
let arr4 = ["C", 0, 1, 2];
let arr5 = [];
console.log("Bem vindo ao jogo da velha!");
let iniciar = prompt("Digite sim ou nao, Deseja jogar?:  ");
while (iniciar != "sim" && iniciar != "nao") {
  console.log("error,digite novamente.");
  iniciar = prompt("Digite sim ou nao, Deseja jogar?:  ");
}
while (iniciar == "nao") {
  break;
}
while (true) {
  jogador1 = +prompt("Escolha o seu símbolo: [1]=X [2]=O: ");

  arr5.push(arr1);
  arr5.push(arr2);
  arr5.push(arr3);
  arr5.push(arr4);
  for (let i of arr5) {
    console.log();
    console.log(i);
  }

  prompt();
}
