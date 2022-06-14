const prompt = require("prompt-sync")();
let verificador = true;
let arr1 = ["0", " 1", "2", "3"];
let arr2 = ["A", "_", "_", "_"];
let arr3 = ["B", "_", "_", "_"];
let arr4 = ["C", "_", "_", "_"];
let arr5 = [];
let linhajogador1 = 0;
let colunajogador1 = 0;
let linhajogador2 = 0;
let colunajogador2 = 0;
let pontosjogador1 = 0;
let pontosjogador2 = 0;
let vitoria = "";
while (verificador) {
  arr1 = ["0", " 1", "2", "3"];
  arr2 = ["A", "_", "_", "_"];
  arr3 = ["B", "_", "_", "_"];
  arr4 = ["C", "_", "_", "_"];
  arr5 = [];
  linhajogador1 = 0;
  colunajogador1 = 0;
  linhajogador2 = 0;
  colunajogador2 = 0;
  pontosjogador1 = 0;
  pontosjogador2 = 0;
  vitoria = "";
  console.clear();
  console.log("Bem vindo ao jogo da velha!");
  let rodadas = +prompt("Quantas rodadas você gostaria de jogar? ");

  origin: for (let a = 0; a < rodadas; a++) {
    console.log("Jogador 1 = 'X' ");
    console.log("Jogador 2 = 'O' ");
    console.log("");
    arr1 = ["0", " 1", "2", "3"];
    arr2 = ["A", "_", "_", "_"];
    arr3 = ["B", "_", "_", "_"];
    arr4 = ["C", "_", "_", "_"];
    arr5 = [];
    console.log(`Jogador1 você tem ${pontosjogador1} pontos.
Jogador2 você tem ${pontosjogador2} pontos.`);
    arr5.push(arr1);
    arr5.push(arr2);
    arr5.push(arr3);
    arr5.push(arr4);
    for (let i of arr5) {
      console.log();
      console.log(i);
    }
    jogo1: for (b = 0; b < 9; ) {
      linhajogador1 = +prompt("Jogador [1]: Qual linha você deseja jogar? 1=[A] 2=[B] 3=[C]: ");
      colunajogador1 = +prompt("Jogador [1]: Qual coluna você deseja jogar: [1] [2] [3]: ");
      let verifi = validarLinhaColuna(linhajogador1, colunajogador1);
      while (verifi == "invalido") {
        console.log("Algo deu errado, digite uma linha e coluna válida. ");
        console.log();
        linhajogador1 = +prompt("Jogador [1]: Qual linha você deseja jogar? 1=[A] 2=[B] 3=[C]: ");
        colunajogador1 = +prompt("Jogador [1]: Qual coluna você deseja jogar: [1] [2] [3]: ");
        verifi = validarLinhaColuna(linhajogador1, colunajogador1);
      }
      b++;
      let ver = verificarEspacos(linhajogador1, colunajogador1);
      while (ver == false || verifi == "invalido") {
        console.log("Lugar já preenchido ou número inválido digite novamente. ");
        linhajogador1 = +prompt("Jogador [1]: Qual linha você deseja jogar? 1=[A] 2=[B] 3=[C]: ");
        colunajogador1 = +prompt("Jogador [1]: Qual coluna você deseja jogar: [1] [2] [3]: ");
        ver = verificarEspacos(linhajogador1, colunajogador1);
        verifi = validarLinhaColuna(linhajogador1, colunajogador1);
      }
      jogadaX(linhajogador1, colunajogador1);
      console.clear();
      for (let i of arr5) {
        console.log();
        console.log(i);
      }

      vitoria = vencedor();
      if (vitoria == "x") {
        console.log("!!!Jogador 1 venceu a rodada!!!");
        pontosjogador1++;
        break jogo1;
      }
      if (vitoria == "o") {
        console.log("!!!Jogador 2 venceu a rodada!!!");
        pontosjogador2++;
        break jogo1;
      }
      if (b == 9) {
        console.log("Deuuu velha.");
        break jogo1;
      }
      linhajogador2 = +prompt("Jogador [2]: Qual linha você deseja jogar? 1=[A] 2=[B] 3=[C]: ");
      colunajogador2 = +prompt("Jogador [2]: Qual coluna você deseja jogar: [1] [2] [3]: ");
      verifi = validarLinhaColuna(linhajogador2, colunajogador2);
      while (verifi == "invalido") {
        console.log("Algo deu errado, digite uma linha e coluna válida. ");
        console.log();

        linhajogador2 = +prompt("Jogador [2]: Qual linha você deseja jogar? 1=[A] 2=[B] 3=[C]: ");
        colunajogador2 = +prompt("Jogador [2]: Qual coluna você deseja jogar: [1] [2] [3]: ");
        verifi = validarLinhaColuna(linhajogador2, colunajogador2);
      }
      b++;

      ver = verificarEspacos(linhajogador2, colunajogador2);
      while (ver == false || verifi == "invalido") {
        console.log("Lugar já preenchido ou número inválido digite novamente. ");
        linhajogador2 = +prompt("Jogador [2]: Qual linha você deseja jogar? 1=[A] 2=[B] 3=[C]: ");
        colunajogador2 = +prompt("Jogador [2]: Qual coluna você deseja jogar: [1] [2] [3]: ");
        ver = verificarEspacos(linhajogador2, colunajogador2);
        verifi = validarLinhaColuna(linhajogador2, colunajogador2);
      }
      jogadaO(linhajogador2, colunajogador2);
      console.clear();
      for (let i of arr5) {
        console.log();
        console.log(i);
      }
      vitoria = vencedor();
      if (vitoria == "x") {
        console.log("!!!Jogador 1 venceu a rodada!!!");
        pontosjogador1++;
        break jogo1;
      }
      if (vitoria == "o") {
        console.log("!!!Jogador 2 venceu a rodada!!!");
        pontosjogador2++;
        break jogo1;
      }
    }
  }
  if (pontosjogador1 > pontosjogador2) {
    b = 0;
    console.log("Jogador 1 venceu !!! ");
    console.log(`Jogador1 você tem ${pontosjogador1} pontos.
Jogador2 você tem ${pontosjogador2} pontos.`);
  }
  if (pontosjogador2 > pontosjogador1) {
    b = 0;
    console.log("Jogador 2 venceu !!! ");
    console.log(`Jogador1 você tem ${pontosjogador1} pontos.
Jogador2 você tem ${pontosjogador2} pontos.`);
  }
  if (pontosjogador1 == pontosjogador2) {
    b = 0;
    console.log("Empatouuuuu !!! ");
    console.log(`Jogador1 você tem ${pontosjogador1} pontos.
Jogador2 você tem ${pontosjogador2} pontos.`);
  }

  let putz = prompt("Você gostaria de jogar novamente? (sim ou nao)");
  if (putz == "sim") {
    verificador = true;
  } else {
    verificador = false;
  }
}

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
    return "o";
  } else if (count == 2) {
    return "x";
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

function validarLinhaColuna(a, b) {
  if (a != 1 && a != 2 && a != 3) {
    return "invalido";
  } else if (b != 1 && b != 2 && b != 3) {
    return "invalido";
  } else {
    return "valido";
  }
}
