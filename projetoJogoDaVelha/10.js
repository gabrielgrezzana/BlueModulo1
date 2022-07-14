const prompt = require("prompt-sync")();
var p = "4359i4593-";
console.clear();

tictactoe = {
  mainMenu: function () {
    let ptj1 = 0;
    ptj2 = 0;

    console.log(`TIC-TAC-TOE GOTY EDITION!`);
    console.log();
    console.log(`(1)- Play`);
    console.log(`(2)- Help`);
    console.log();
    console.log(`(3)- Quit`);

    let resp = +prompt("Insert the desired option: ");

    if (resp == 1) {
      this.ingame(ptj1, ptj2);
    } else if (resp == 2) {
      console.clear();
      this.helpMenu();
    } else if (resp == 3) {
      return;
    } else if (resp == 6) {
      afdsj9da90js();
    } else {
      console.clear();
      console.log(`Error; > Invalid option <`);
      console.log();
      this.mainMenu();
    }
  },

  creatingTable: function () {
    let tabl = [];
    for (l = 0; l < 3; l++) {
      let tabc = [];
      tabl.push(tabc);
      for (c = 0; c < 3; c++) {
        tabc.push("-");
      }
    }
    return tabl;
  },

  showingTable: function (tab) {
    console.log(`          > Index <`);
    console.log(`       > 1 -- 2 -- 3 >`);
    for (st = 0; st < 3; st++) {
      console.log(`^ ${st + 1} -`, tab[st]);
    }
  },

  objChoice: function () {
    console.clear();
    let objJog = [];

    do {
      console.log(`Player 1 >`);
      let resp = prompt("Choose X or O: ").toUpperCase();

      if (resp == "X") {
        console.clear();
        objJog.push("X", "O");
        break;
      } else if (resp == "O") {
        console.clear();
        objJog.push("O", "X");
        break;
      } else {
        console.clear();
        console.log(`Error; > Invalid choice <`);
        console.log();
        continue;
      }
    } while (true);
    return objJog;
  },

  ingame: function (ptj1, ptj2) {
    console.clear();
    let moves = 0;
    let tab = this.creatingTable(); // return the created table;
    //this.showingTable(tab); // make the table poggers to show on cli;
    let objJog = this.objChoice(); // player obj1 && 2 are here;

    for (let p = 0; p < 3; p++) {
      if (p == 2) {
        p = 0;
      }

      this.showingTable(tab);
      console.log();
      console.log(`Player ${p + 1} > `);
      let iY = +prompt("Choose the Y on the left: ");
      if (!isNaN(iY) && iY > 0 && iY <= 3) {
      } else {
        console.clear();
        console.log(`Error; > Invalid option <`);
        console.log();
        p--;
        continue;
      }
      let iX = +prompt("Choose the X index on the top: ");
      if (!isNaN(iX) && iX > 0 && iX <= 3) {
        console.clear();
      } else {
        console.clear();
        console.log(`Error; > Invalid option <`);
        console.log();
        p--;
        continue;
      }

      if (tab[iY - 1][iX - 1] == "-") {
        tab[iY - 1][iX - 1] = objJog[p];
        moves++;
        //console.log(moves); log how much moves you did;

        if (tab[1][1] == objJog[p]) {
          if (
            (tab[0][1] == objJog[p] && tab[2][1] == objJog[p]) ||
            (tab[0][0] == objJog[p] && tab[2][2] == objJog[p]) ||
            (tab[1][0] == objJog[p] && tab[1][2] == objJog[p]) ||
            (tab[2][0] == objJog[p] && tab[0][2] == objJog[p])
          ) {
            console.clear();
            this.matchWon(p, ptj1, ptj2, tab);
            break;
          }
        }
        if (tab[0][0] == objJog[p]) {
          if (
            (tab[1][0] == objJog[p] && tab[2][0] == objJog[p]) ||
            (tab[0][1] == objJog[p] && tab[0][2] == objJog[p])
          ) {
            console.clear();
            this.matchWon(p, ptj1, ptj2, tab);
            break;
          }
        }
        if (tab[2][2] == objJog[p]) {
          if (
            (tab[2][0] == objJog[p] && tab[2][1] == objJog[p]) ||
            (tab[0][2] == objJog[p] && tab[1][2] == objJog[p])
          ) {
            console.clear();
            this.matchWon(p, ptj1, ptj2, tab);
            break;
          }
        }
      } else {
        console.log(`Error; > Index already being used <`);
        p--;
        continue;
      }
      if (moves == 9) {
        this.draw(ptj1, ptj2);
        break;
      }
    }
  },

  matchWon: function (p12, ptj1, ptj2, tab) {
    this.showingTable(tab);

    if (p12 == 0) {
      ptj1++;
    } else {
      ptj2++;
    }

    do {
      console.log();
      console.log(`Player ${p12 + 1}++!`);
      console.log();
      console.log(`(1)- Continue playing`);
      console.log(`(2)- Check leaderboards/ Menu`);

      let resp = +prompt("Insert the desired option: ");
      if (resp == 1) {
        console.clear();
        this.ingame(ptj1, ptj2);
        break;
      } else if (resp == 2) {
        console.clear();
        this.leaderbords(ptj1, ptj2);
        break;
      } else {
        console.clear();
        console.log(`Error; > Invalid option <`);
        continue;
      }
    } while (true);
  },

  leaderbords: function (ptj1, ptj2) {
    console.log(`> Leaderboards <`);
    console.log(`Player 1 > ${ptj1} points`);
    console.log(`Player 2 > ${ptj2} points`);
    console.log();
    console.log(`(1)- Continue playing`);
    console.log(`(2)- End game/ Menu`);

    let resp = +prompt("Insert the desired option: ");
    if (resp == 1) {
      this.ingame(ptj1, ptj2);
    } else if (resp == 2) {
      console.log(`This will reset your current points. Are you sure?`); //ok but how do i check empty strings omfg
      resp = +prompt(`Type (1)- Yes; (2)- No: `);
      //console.log(typeof resp);
      if (resp == 1) {
        console.clear();
        this.wORd(ptj1, ptj2);
      } else if (resp == 2) {
        console.clear();
        this.leaderbords(ptj1, ptj2);
      } else {
        console.clear();
        console.log(`Error; > Invalid option <`);
        console.log();
        this.leaderbords(ptj1, ptj2);
      }
    } else {
      console.clear();
      console.log(`Error; > Invalid option <`);
      console.log();
      this.leaderbords(ptj1, ptj2);
    }
  },

  helpMenu: function () {
    console.log(`> Help menu <`);
    console.log();
    console.log(`How the game works: `);
    console.log();
    console.log(`How to make a move on the table < `);
    console.log(`> Each line behaves by the Y index which you provide`);
    console.log(
      `> And each line item can be accessed through the X index you provide too <`
    );
    console.log();
    console.log(`(1)- Back to menu`);
    console.log(`(9)- Ab0ut`);

    let resp = +prompt("Insert the desired option: ");
    console.clear();
    if (resp == 1) {
      this.mainMenu();
    } else if (resp == 9) {
      console.clear();
      a9efjd();
    } else {
      console.clear();
      console.log(`Error; > Invalid option <`);
      console.log();
      this.helpMenu();
    }
  },

  wORd: function (ptj1, ptj2) {
    console.clear();

    console.log(`<<< Thanks for playing! >>>`);
    console.log();
    if (ptj1 > ptj2) {
      console.log(`Player 1 > Won the game! <`);
    } else if (ptj1 < ptj2) {
      console.log(`Player 2 > Won the game!`);
    } else {
      console.log(`Game ended in a draw!`);
    }

    console.log();
    console.log(`Player 1 < points < ${ptj1} >`);
    console.log(`Player 2 < points < ${ptj2} >`);
    console.log();
    console.log(`(1)- Main menu`);

    let resp = +prompt("Insert the desired option: ");
    if (resp == 1) {
      console.clear();
      this.mainMenu();
    } else {
      console.clear();
      console.log(`Error; > Invalid option <`);
      console.log();
      this.wORd(ptj1, ptj2);
    }
  },

  draw: function (ptj1, ptj2) {
    do {
      console.log(`> Draw! < Nobody won the match <`);
      console.log();
      console.log(`(1)- Continue playing`);
      console.log(`(2)- Check leaderboards/ Menu`);

      let resp = +prompt("Insert the desired option: ");
      if (resp == 1) {
        console.clear();
        this.ingame(ptj1, ptj2);
      } else if (resp == 2) {
        console.clear();
        this.leaderbords(ptj1, ptj2);
      } else {
        console.clear();
        console.log(`Error; > Invalid option <`);
        continue;
      }
    } while (true);
  },
};

tictactoe.mainMenu();

function afdsj9da90js() {
  console.clear();

  let resp = prompt();
  if (resp == w) {
    console.log(
      `https://www.youtube.com/watch?v=PgSodGKWDkA&list=PLOCs57Y32rByt17vhmBfegIc-gAqvh0ol&ab_channel=%D0%BCa%D0%B8ikeiz%D1%82`
    );
  }
  if (resp == q) {
    console.log(`MUITO GOSTOSA, PARECE UM Vectra CD turbo com Turbina Holset HX-35, válvula de Alívio SPA Compact, 
Intercooler frontal,Pressurização em Alumínio 2,5",Escape 2,5" com 1 abafador JK, Pistões IASA 87mm (p/ 700cv), 
Bielas K1 (p/ 700cv), Parafusos ARP, Anéis NPR, Blockguard Bomba de Óleo GM 2.4 16v retrabalhada, junta de cabeçote 
de aço de Astra Flex, Cabeçote 16v 100% original, comandos originais, tuchos novos, taxa 10,0:1,Ventoinhas SLIM, Injeção 
Megasquirt MS2-V3 com correção por sonda Wideband AEM auto-acerto de mapa de combustível, Two Step e Flat Shift acionados 
por botão no pedal de embreagem, 4 bicos Fuel Injector Clinic (FIC) 1050cc baixa impedância com resistores, Bomba de 
combustível Dinâmica 12bar no lugar da original 1 de Mercedes externa (embaixo da porta traseira do passageiro), Linha 
de combustível 9,5mm, fil tro de comb. de Blazer V6 (fica atrás do motor), Bobina de Vectra 2011, velas NGK Iridium, 
cabos de vela originais, Cambio GM F23 (eixo piloto largo) adaptado, embreagem Cerâmica FF 1200 lbs com acionamento 
mecânico adaptado, Suspensão de Rosca Fênix, Rodas do Vectra GT-X aro 17, originais GM, Pneus BFGoodrich G-force Profiler 
215/45 17, Freio Dianteiro: Discos 288mm frisados + pastilhas Red Powerbrakes, Manômetros de pressão de turbo, óleo e 
combustivel, Sonda Wideband AEM UEGO 40-3100.`);
  }
}

var w = "3f39-jefw-9jdck";
// 01000000 01100100 01100101 01110011 01100001 01101110 01101001 01101101 01100001 01110010 01100001 01101101
function a9efjd() {
  console.clear();

  console.log(`> aBbOUT< <`);
  console.log();
  console.log(
    `MmaDE bY: :.; ኃጢአተኛ ነፍስህ ከድነት በላይ ነው እናም ሰላምን እና ህመምንም አታውቅም ፣ ብቸኛው የባዶነት ቅዝቃዜ ብቻ ነው የንስሐ ጊዜ ተጠናቅቋል ፣ ምክንያቱም ጥፋቶችህ በክፉ ዓይነትህ ከማንኛውም ተልእኮ ይበልጣሉ መጨረሻው`
  );
  let resp = prompt();

  if (resp == p) {
    console.log(`
       ⠄⠄⠄⢰⣧⣼⣯⠄⣸⣠⣶⣶⣦⣾⠄⠄⠄⠄⡀⠄⢀⣿⣿⠄⠄⠄⢸⡇⠄⠄
       ⠄⠄⠄⣾⣿⠿⠿⠶⠿⢿⣿⣿⣿⣿⣦⣤⣄⢀⡅⢠⣾⣛⡉⠄⠄⠄⠸⢀⣿⠄
       ⠄⠄⢀⡋⣡⣴⣶⣶⡀⠄⠄⠙⢿⣿⣿⣿⣿⣿⣴⣿⣿⣿⢃⣤⣄⣀⣥⣿⣿⠄
       ⠄⠄⢸⣇⠻⣿⣿⣿⣧⣀⢀⣠⡌⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⣿⣿⣿⠄
       ⠄⢀⢸⣿⣷⣤⣤⣤⣬⣙⣛⢿⣿⣿⣿⣿⣿⣿⡿⣿⣿⡍⠄⠄⢀⣤⣄⠉⠋⣰
       ⠄⣼⣖⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⢇⣿⣿⡷⠶⠶⢿⣿⣿⠇⢀⣤
       ⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣽⣿⣿⣿⡇⣿⣿⣿⣿⣿⣿⣷⣶⣥⣴⣿⡗
       ⢀⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠄
       ⢸⣿⣦⣌⣛⣻⣿⣿⣧⠙⠛⠛⡭⠅⠒⠦⠭⣭⡻⣿⣿⣿⣿⣿⣿⣿⣿⡿⠃⠄
       ⠘⣿⣿⣿⣿⣿⣿⣿⣿⡆⠄⠄⠄⠄⠄⠄⠄⠄⠹⠈⢋⣽⣿⣿⣿⣿⣵⣾⠃⠄
       ⠄⠘⣿⣿⣿⣿⣿⣿⣿⣿⠄⣴⣿⣶⣄⠄⣴⣶⠄⢀⣾⣿⣿⣿⣿⣿⣿⠃⠄⠄
       ⠄⠄⠈⠻⣿⣿⣿⣿⣿⣿⡄⢻⣿⣿⣿⠄⣿⣿⡀⣾⣿⣿⣿⣿⣛⠛⠁⠄⠄⠄
       ⠄⠄⠄⠄⠈⠛⢿⣿⣿⣿⠁⠞⢿⣿⣿⡄⢿⣿⡇⣸⣿⣿⠿⠛⠁⠄⠄⠄⠄⠄
       ⠄⠄⠄⠄⠄⠄⠄⠉⠻⣿⣿⣾⣦⡙⠻⣷⣾⣿⠃⠿⠋⠁⠄⠄⠄⠄⠄⢀⣠⣴
       ⣿⣿⣿⣶⣶⣮⣥⣒⠲⢮⣝⡿⣿⣿⡆⣿⡿⠃⠄⠄⠄⠄⠄⠄⠄⣠⣴⣿⣿⣿`);
  }
  return;
}

var q = "qwe90jawd";
