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
let linhajogador1 = 0;
let colunajogador1 = 0;
let linhajogador2 = 0;
let colunajogador2 = 0;
let pontosjogador1 = 0;
let pontosjogador2 = 0;
// let jogador1 = 0;
// let jogador2 = 0;
let arr1 = ["0", " 1", "2", "3"];
let arr2 = ["A", "_", "_", "_"];
let arr3 = ["B", "_", "_", "_"];
let arr4 = ["C", "_", "_", "_"];
let arr5 = [];
console.log("Bem vindo ao jogo da velha!");
let iniciar = prompt("Digite sim ou nao, Deseja jogar?:  ").toLowerCase();
while (iniciar != "sim" && iniciar != "nao") {
  console.log("Erro,digite novamente.");
  iniciar = prompt("Digite sim ou nao, Deseja jogar?:  ").toLowerCase();
}
while (iniciar == "nao") {
  break;
}

jogo: while (iniciar == "sim") {
  arr1 = ["0", " 1", "2", "3"];
  arr2 = ["A", "_", "_", "_"];
  arr3 = ["B", "_", "_", "_"];
  arr4 = ["C", "_", "_", "_"];
  arr5 = [];
  console.log("Jogador1 = 'X' ");
  console.log();
  console.log("Jogador2 = 'O' ");
  console.log();

  arr5.push(arr1);
  arr5.push(arr2);
  arr5.push(arr3);
  arr5.push(arr4);
  for (let i of arr5) {
    console.log();
    console.log(i);
  }
  console.log();

  linhajogador1 = +prompt(
    "Jogador [1]: Qual linha você deseja jogar? 1=[A] 2=[B] 3=[C]: "
  );
  colunajogador1 = +prompt(
    "Jogador [1]: Qual coluna você deseja jogar: [1] [2] [3]: "
  );

  jogadaX(linhajogador1, colunajogador1);
  for (let i of arr5) {
    console.log();
    console.log(i);
  }

  linhajogador2 = +prompt(
    "Jogador [2]: Qual linha você deseja jogar? 1=[A] 2=[B] 3=[C]: "
  );
  colunajogador2 = +prompt(
    "Jogador [2]: Qual coluna você deseja jogar: [1] [2] [3]: "
  );
  let A = verificarEspacos(linhajogador2, colunajogador2);
  while (A == false) {
    console.log("Lugar já preenchido.");
    linhajogador2 = +prompt(
      "Jogador [2]: Qual linha você deseja jogar? 1=[A] 2=[B] 3=[C]: "
    );
    colunajogador2 = +prompt(
      "Jogador [2]: Qual coluna você deseja jogar: [1] [2] [3]: "
    );
    A = verificarEspacos(linhajogador2, colunajogador2);
  }
  jogadaO(linhajogador2, colunajogador2);
  for (let i of arr5) {
    console.log();
    console.log(i);
  }
  linhajogador1 = +prompt(
    "Jogador [1]: Qual linha você deseja jogar? 1=[A] 2=[B] 3=[C]: "
  );
  colunajogador1 = +prompt(
    "Jogador [1]: Qual coluna você deseja jogar: [1] [2] [3]: "
  );
  A = verificarEspacos(linhajogador1, colunajogador1);
  while (A == false) {
    console.log("Lugar já preenchido.");
    linhajogador1 = +prompt(
      "Jogador [2]: Qual linha você deseja jogar? 1=[A] 2=[B] 3=[C]: "
    );
    colunajogador1 = +prompt(
      "Jogador [2]: Qual coluna você deseja jogar: [1] [2] [3]: "
    );
    A = verificarEspacos(linhajogador1, colunajogador1);
  }
  jogadaX(linhajogador1, colunajogador1);
  for (let i of arr5) {
    console.log();
    console.log(i);
  }
  vitoria = vencedor();
  while (vitoria == "x") {
    console.log("Jogar 1 ganhou parabens!!!!");
    console.log(`Jogador 1 você tem: ${pontosjogador1} ponto/s !!!`);
    console.log(`Jogador 2 você tem: ${pontosjogador2} pontos/s !!!`);
    let a = prompt("Voce deseja jogar novamente? ");
    if (a == "sim") {
      continue jogo;
    } else if (a == "nao") {
      break;
    }
  }
  while (vitoria == "o") {
    console.log("Jogar 2 ganhou parabens!!!!");
    let a = prompt("Voce deseja jogar novamente? ");
    if (a == "sim") {
      continue jogo;
    } else if (a == "nao") {
      break;
    }
  }
  linhajogador2 = +prompt(
    "Jogador [2]: Qual linha você deseja jogar? 1=[A] 2=[B] 3=[C]: "
  );
  colunajogador2 = +prompt(
    "Jogador [2]: Qual coluna você deseja jogar: [1] [2] [3]: "
  );
  A = verificarEspacos(linhajogador2, colunajogador2);
  while (A == false) {
    console.log("Lugar já preenchido.");
    linhajogador2 = +prompt(
      "Jogador [2]: Qual linha você deseja jogar? 1=[A] 2=[B] 3=[C]: "
    );
    colunajogador2 = +prompt(
      "Jogador [2]: Qual coluna você deseja jogar: [1] [2] [3]: "
    );
    A = verificarEspacos(linhajogador2, colunajogador2);
  }
  jogadaO(linhajogador2, colunajogador2);
  for (let i of arr5) {
    console.log();
    console.log(i);
  }
  vitoria = vencedor();
  while (vitoria == "x") {
    console.log("Jogar 1 ganhou parabens!!!!");
    console.log(`Jogador 1 você tem: ${pontosjogador1} ponto/s !!!`);
    console.log(`Jogador 2 você tem: ${pontosjogador2} pontos/s !!!`);
    let a = prompt("Voce deseja jogar novamente? ");
    if (a == "sim") {
      continue jogo;
    } else if (a == "nao") {
      break;
    }
  }
  while (vitoria == "o") {
    console.log("Jogar 2 ganhou parabens!!!!");
    let a = prompt("Voce deseja jogar novamente? ");
    if (a == "sim") {
      continue jogo;
    } else if (a == "nao") {
      break;
    }
  }
  linhajogador1 = +prompt(
    "Jogador [1]: Qual linha você deseja jogar? 1=[A] 2=[B] 3=[C]: "
  );
  colunajogador1 = +prompt(
    "Jogador [1]: Qual coluna você deseja jogar: [1] [2] [3]: "
  );
  A = verificarEspacos(linhajogador1, colunajogador1);
  while (A == false) {
    console.log("Lugar já preenchido.");
    linhajogador1 = +prompt(
      "Jogador [2]: Qual linha você deseja jogar? 1=[A] 2=[B] 3=[C]: "
    );
    colunajogador1 = +prompt(
      "Jogador [2]: Qual coluna você deseja jogar: [1] [2] [3]: "
    );
    A = verificarEspacos(linhajogador1, colunajogador1);
  }
  jogadaX(linhajogador1, colunajogador1);
  for (let i of arr5) {
    console.log();
    console.log(i);
  }
  // vitoria = vencedor();
  // if (vitoria == "x") {
  //   console.log("Parabenx jogador 1. Você ganhou!");
  // } else if (vitoria == "o") {
  //   console.log("Jogador 2 voce ganhou!");
  // }
  vitoria = vencedor();
  while (vitoria == "x") {
    console.log("Jogar 1 ganhou parabens!!!!");
    console.log(`Jogador 1 você tem: ${pontosjogador1} ponto/s !!!`);
    console.log(`Jogador 2 você tem: ${pontosjogador2} pontos/s !!!`);
    let a = prompt("Voce deseja jogar novamente? ");
    if (a == "sim") {
      continue jogo;
    } else if (a == "nao") {
      break;
    }
  }
  while (vitoria == "o") {
    console.log("Jogar 2 ganhou parabens!!!!");
    let a = prompt("Voce deseja jogar novamente? ");
    if (a == "sim") {
      continue jogo;
    } else if (a == "nao") {
      break;
    }
  }
  linhajogador2 = +prompt(
    "Jogador [2]: Qual linha você deseja jogar? 1=[A] 2=[B] 3=[C]: "
  );
  colunajogador2 = +prompt(
    "Jogador [2]: Qual coluna você deseja jogar: [1] [2] [3]: "
  );
  A = verificarEspacos(linhajogador2, colunajogador2);
  while (A == false) {
    console.log("Lugar já preenchido.");
    linhajogador2 = +prompt(
      "Jogador [2]: Qual linha você deseja jogar? 1=[A] 2=[B] 3=[C]: "
    );
    colunajogador2 = +prompt(
      "Jogador [2]: Qual coluna você deseja jogar: [1] [2] [3]: "
    );
    A = verificarEspacos(linhajogador2, colunajogador2);
  }
  jogadaO(linhajogador2, colunajogador2);
  for (let i of arr5) {
    console.log();
    console.log(i);
  }
  vitoria = vencedor();
  while (vitoria == "x") {
    console.log("Jogar 1 ganhou parabens!!!!");
    console.log(`Jogador 1 você tem: ${pontosjogador1} ponto/s !!!`);
    console.log(`Jogador 2 você tem: ${pontosjogador2} pontos/s !!!`);
    let a = prompt("Voce deseja jogar novamente? ");
    if (a == "sim") {
      continue jogo;
    } else if (a == "nao") {
      break;
    }
  }
  while (vitoria == "o") {
    console.log("Jogar 2 ganhou parabens!!!!");
    let a = prompt("Voce deseja jogar novamente? ");
    if (a == "sim") {
      continue jogo;
    } else if (a == "nao") {
      break;
    }
  }
  linhajogador1 = +prompt(
    "Jogador [1]: Qual linha você deseja jogar? 1=[A] 2=[B] 3=[C]: "
  );
  colunajogador1 = +prompt(
    "Jogador [1]: Qual coluna você deseja jogar: [1] [2] [3]: "
  );
  A = verificarEspacos(linhajogador1, colunajogador1);
  while (A == false) {
    console.log("Lugar já preenchido.");
    linhajogador1 = +prompt(
      "Jogador [2]: Qual linha você deseja jogar? 1=[A] 2=[B] 3=[C]: "
    );
    colunajogador1 = +prompt(
      "Jogador [2]: Qual coluna você deseja jogar: [1] [2] [3]: "
    );
    A = verificarEspacos(linhajogador1, colunajogador1);
  }
  jogadaX(linhajogador1, colunajogador1);
  for (let i of arr5) {
    console.log();
    console.log(i);
  }
  vitoria = vencedor();
  while (vitoria == "x") {
    console.log("Jogar 1 ganhou parabens!!!!");
    console.log(`Jogador 1 você tem: ${pontosjogador1} ponto/s !!!`);
    console.log(`Jogador 2 você tem: ${pontosjogador2} pontos/s !!!`);
    let a = prompt("Voce deseja jogar novamente? ");
    if (a == "sim") {
      continue jogo;
    } else if (a == "nao") {
      break;
    }
  }
  while (vitoria == "o") {
    console.log("Jogar 2 ganhou parabens!!!!");
    let a = prompt("Voce deseja jogar novamente? ");
    if (a == "sim") {
      continue jogo;
    } else if (a == "nao") {
      break jogo;
    }
  }

  linhajogador2 = +prompt(
    "Jogador [2]: Qual linha você deseja jogar? 1=[A] 2=[B] 3=[C]: "
  );
  colunajogador2 = +prompt(
    "Jogador [2]: Qual coluna você deseja jogar: [1] [2] [3]: "
  );
  A = verificarEspacos(linhajogador2, colunajogador2);
  while (A == false) {
    console.log("Lugar já preenchido.");
    linhajogador2 = +prompt(
      "Jogador [2]: Qual linha você deseja jogar? 1=[A] 2=[B] 3=[C]: "
    );
    colunajogador2 = +prompt(
      "Jogador [2]: Qual coluna você deseja jogar: [1] [2] [3]: "
    );
    A = verificarEspacos(linhajogador2, colunajogador2);
  }
  jogadaO(linhajogador2, colunajogador2);
  for (let i of arr5) {
    console.log();
    console.log(i);
  }
  vitoria = vencedor();
  while (vitoria == "x") {
    console.log("Jogar 1 ganhou parabens!!!!");
    console.log(`Jogador 1 você tem: ${pontosjogador1} ponto/s !!!`);
    console.log(`Jogador 2 você tem: ${pontosjogador2} pontos/s !!!`);
    let a = prompt("Voce deseja jogar novamente? ");
    if (a == "sim") {
      continue jogo;
    } else if (a == "nao") {
      break;
    }
  }
  while (vitoria == "o") {
    console.log("Jogar 2 ganhou parabens!!!!");
    let a = prompt("Voce deseja jogar novamente? ");
    if (a == "sim") {
      continue jogo;
    } else if (a == "nao") {
      break;
    }
  }

  linhajogador1 = +prompt(
    "Jogador [1]: Qual linha você deseja jogar? 1=[A] 2=[B] 3=[C]: "
  );
  colunajogador1 = +prompt(
    "Jogador [1]: Qual coluna você deseja jogar: [1] [2] [3]: "
  );
  A = verificarEspacos(linhajogador1, colunajogador1);
  while (A == false) {
    console.log("Lugar já preenchido.");
    linhajogador1 = +prompt(
      "Jogador [2]: Qual linha você deseja jogar? 1=[A] 2=[B] 3=[C]: "
    );
    colunajogador1 = +prompt(
      "Jogador [2]: Qual coluna você deseja jogar: [1] [2] [3]: "
    );
    A = verificarEspacos(linhajogador1, colunajogador1);
  }
  jogadaX(linhajogador1, colunajogador1);
  for (let i of arr5) {
    console.log();
    console.log(i);
  }
  vitoria = vencedor();
  while (vitoria == "x") {
    console.log("Jogar 1 ganhou parabens!!!!");
    console.log(`Jogador 1 você tem: ${pontosjogador1} ponto/s !!!`);
    console.log(`Jogador 2 você tem: ${pontosjogador2} pontos/s !!!`);
    let a = prompt("Voce deseja jogar novamente? ");
    if (a == "sim") {
      continue jogo;
    } else if (a == "nao") {
      break;
    }
  }
  while (vitoria == "o") {
    console.log("Jogar 2 ganhou parabens!!!!");
    let a = prompt("Voce deseja jogar novamente? ");
    if (a == "sim") {
      continue jogo;
    } else if (a == "nao") {
      break;
    }
  }

  break;

  function jogadaX(linhajogador1, colunajogador1) {
    if (linhajogador1 == 1) {
      if (colunajogador1 == 1) {
        arr2.splice(1, 1, "X");
      } else if (colunajogador1 == 2) {
        arr2.splice(2, 1, "X");
      } else if (colunajogador1 == 3) {
        arr2.splice(3, 1, "X");
      }
    }
    if (linhajogador1 == 2) {
      if (colunajogador1 == 1) {
        arr3.splice(1, 1, "X");
      } else if (colunajogador1 == 2) {
        arr3.splice(2, 1, "X");
      } else if (colunajogador1 == 3) {
        arr3.splice(3, 1, "X");
      }
    }
    if (linhajogador1 == 3) {
      if (colunajogador1 == 1) {
        arr4.splice(1, 1, "X");
      } else if (colunajogador1 == 2) {
        arr4.splice(2, 1, "X");
      } else if (colunajogador1 == 3) {
        arr4.splice(3, 1, "X");
      }
    }
  }
  function jogadaO(linhajogador1, colunajogador1) {
    if (linhajogador1 == 1) {
      if (colunajogador1 == 1) {
        arr2.splice(1, 1, "O");
      } else if (colunajogador1 == 2) {
        arr2.splice(2, 1, "O");
      } else if (colunajogador1 == 3) {
        arr2.splice(3, 1, "O");
      }
    }
    if (linhajogador1 == 2) {
      if (colunajogador1 == 1) {
        arr3.splice(1, 1, "O");
      } else if (colunajogador1 == 2) {
        arr3.splice(2, 1, "O");
      } else if (colunajogador1 == 3) {
        arr3.splice(3, 1, "O");
      }
    }
    if (linhajogador1 == 3) {
      if (colunajogador1 == 1) {
        arr4.splice(1, 1, "O");
      } else if (colunajogador1 == 2) {
        arr4.splice(2, 1, "O");
      } else if (colunajogador1 == 3) {
        arr4.splice(3, 1, "O");
      }
    }
  }
  function verificarEspacos(linhajogador1, colunajogador1) {
    if (linhajogador1 == 1) {
      if (colunajogador1 == 1) {
        if (arr2[1] == "_") {
          return true;
        } else {
          return false;
        }
      } else if (colunajogador1 == 2) {
        if (arr2[2] == "_") {
          return true;
        } else {
          return false;
        }
      } else if (colunajogador1 == 3) {
        if (arr2[3] == "_") {
          return true;
        } else {
          return false;
        }
      }
    }
    if (linhajogador1 == 2) {
      if (colunajogador1 == 1) {
        if (arr3[1] == "_") {
          return true;
        } else {
          return false;
        }
      } else if (colunajogador1 == 2) {
        if (arr3[2] == "_") {
          return true;
        } else {
          return false;
        }
      } else if (colunajogador1 == 3) {
        if (arr3[3] == "_") {
          return true;
        } else {
          return false;
        }
      }
    }
    if (linhajogador1 == 3) {
      if (colunajogador1 == 1) {
        if (arr4[1] == "_") {
          return true;
        } else {
          return false;
        }
      } else if (colunajogador1 == 2) {
        if (arr4[2] == "_") {
          return true;
        } else {
          return false;
        }
      } else if (colunajogador1 == 3) {
        if (arr4[3] == "_") {
          return true;
        } else {
          return false;
        }
      }
    }
  }

  // let checar = Espacos()
  // if(checar != ){
  //   console.log("O JOGO EMPATOU!")
  //   break jogo;
  // }

  // function Espacos(arr5) {
  //   if (arr2[1] != "_" && colunajogador1 == "_") {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  function vencedor() {
    let count = 0;
    if (arr2[1] == "O" && arr2[2] == "O" && arr2[3] == "O") {
      count++;
    } else if (arr3[1] == "O" && arr3[2] == "O" && arr3[3] == "O") {
      count++;
    } else if (arr4[1] == "O" && arr4[2] == "O" && arr4[3] == "O") {
      count++;
    } else if (arr2[1] == "O" && arr3[1] == "O" && arr4[1] == "O") {
      count++;
    } else if (arr2[2] == "O" && arr3[2] == "O" && arr4[2] == "O") {
      count++;
    } else if (arr2[3] == "O" && arr3[3] == "O" && arr4[3] == "O") {
      count++;
    } else if (arr2[1] == "O" && arr3[2] == "O" && arr4[3] == "O") {
      count++;
    } else if (arr2[3] == "O" && arr3[2] == "O" && arr4[1] == "O") {
      count++;
    } else if (arr2[1] == "X" && arr2[2] == "X" && arr2[3] == "X") {
      count += 2;
    } else if (arr3[1] == "X" && arr3[2] == "X" && arr3[3] == "X") {
      count += 2;
    } else if (arr4[1] == "X" && arr4[2] == "X" && arr4[3] == "X") {
      count += 2;
    } else if (arr2[1] == "X" && arr3[1] == "X" && arr4[1] == "X") {
      count += 2;
    } else if (arr2[2] == "X" && arr3[2] == "X" && arr4[2] == "X") {
      count += 2;
    } else if (arr2[3] == "X" && arr3[3] == "X" && arr4[3] == "X") {
      count += 2;
    } else if (arr2[1] == "X" && arr3[2] == "X" && arr4[3] == "X") {
      count += 2;
    } else if (arr2[3] == "X" && arr3[2] == "X" && arr4[1] == "X") {
      count += 2;
    }
    if (count == 1) {
      pontosjogador2++;
      return "o";
    } else if (count == 2) {
      pontosjogador1++;
      return "x";
    }
  }
}
