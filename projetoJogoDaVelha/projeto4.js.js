const prompt = require("prompt-sync")();
while (true) {
  console.log("Jogo baseado em fatos reais de animes.");
  console.log("!!!!No game NO life!!!!");
  prompt("Pressione enter para continuar.");
  console.clear();
  console.log(`Você está dentro do seu quarto jogando com sua irmã mais nova, Seu nome é Sora e o da sua irmã é Shiro, e vocês dois juntos são chamados de Kuuhaku, sua irmã considerada uma gênia em matemática,
  vocês passam os dias  jogando pois acreditam que o mundo real é um mundo alienado e é o pior jogo ja criado, pois você é limitado e não tem liberdade para fazer o que quer.
  Então derrepente você recebe um email convidando você para jogar uma partida de xadrez!
  Você acha esse jogo muito fácil porque é um jogo de dois jogadores, finito de soma nula,
  de perfeita informação Sorte nao faz parte dele.
  Teoricamente tem uma solução perfeita que jamais perderá.
  Mas apenas se voce entender as 10^120 possíveis posições do tabuleiro!
  Xadrez nao é diferente de jogo da velha.
  Um programa feito para jogar xadrez sempre irá escolher as melhores possições possíveis
  e é por isso que você pode ganhar dele.
  `);
  prompt("Pressione enter para continuar.");
  console.clear();
  console.log(`Então depois de algum tempo você consegue sair sendo o grande vencedor`);
  console.log(`E você recebe um outro email dizendo:
  - O que vocês acham do seu mundo?
  - É divertido?  `);
  prompt("Pressione enter para continuar.");
  console.clear();
  console.log(`e você responde:
  - Não há como saber as regras ou o objetivo
  - Há 7 bilhões de jogadores fazendo os movimentos que bem entendem.
  - E há punição por perder ou ganhar demais.
  - Você não pode passar turnos e se falar demais não gostarão de voce.
  - Este mundo é....
  - um jogo ruim`);
  prompt("Pressione enter para continuar.");
  console.clear();
  console.log(`O email desconhecido responde:
  - Se houvesse um mundo onde tudo é decido por simples jogos....
  um mundo em um tabuleiro, onde regras e objetivos são claros,
  o que vocês achariam?`);
  prompt("Pressione enter para continuar.");
  console.clear();
  console.log(`Então você responde,
  - Se houver um mundo assim nós nascemos no mundo errado!`);
  prompt("Pressione enter para continuar.");
  console.clear();
  console.log(`Então no mesmo instante você perde totalmente o sinal de tudo que tem ao seu redor,
  tudo começa a ficar preto e você do absoluto nada é puxado para outro mundo
  e está caindo do céu, e a primeira pessoa que aparece caindo do céu junto com você
  se denomina Deus Tet.`);
  prompt("Pressione enter para continuar.");
  console.clear();
  console.log("Bem vindo ao meu mundo");
  console.log("É o mundo perfeito dos seus sonhos o mundo dos jogos, Disboard!");
  console.log(`Tudo nesse mundo é decidido por simples jogos, a vida das pessoas...
  e até fronteiras nacionais!`);
  prompt("Pressione enter para continuar.");
  console.clear();
  console.log(`Neste mundo, tudo é decidido por 10 leis, os juramentos.`);
  console.log(`Lei 1: Todo tipo de assasinato, guerra e roubo é proibido neste mundo.
  Lei 2: Todos os conflitos serão decididos com jogos.
  Lei 3: Os jogadores concordam que ambas as partes são de valor igual para o jogo.
  Lei 4: Desde que não vá contra o número três, tudo pode ser apostado e qualquer jogo pode ser jogado.
  Lei 5: quem for desafiado, deve escolher as regras do jogo.
  Lei 6: Quaisquer apostas feitas em acordo devem ser mantidas.
  Lei 7: Conflitos entre grupos serão conduzidos por um representente de autoridade absoluta.
  Lei 8: Ser pego roubando durante um jogo, significa derrota instantânea.
  Lei 9: Em nome de Deus, nenhuma das regras anteriores devem ser mudadas.`);
  prompt("Pressione enter para continuar.");
  console.clear();
  console.log(`KATABUMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM!
  Vocês caem no chão`);
  prompt("Pressione enter para continuar.");
  console.clear();
  console.log(`Porem não levam dano algum.
  Então Deus Tet aparece e diz:
  -Lei 10: Vamos todos nos divertir e jogar juntos.`);
  prompt("Pressione enter para continuar.");
  console.clear();
  console.log(`Shiro,
  Eu sempre pensei que a vida fosse um jogo impossível, de masoquistas.
  Até que enfim ele BUGOU!!!!!!!
  O que está acontecendo
  Esse jogo é uma bosta!`);
  prompt("Pressione enter para continuar.");
  console.clear();
  console.log(`Vocês descobrem que esse mundo teve um passado cruel com diversas
  batalhas mortais para alguem se tornar Deus desse mundo
  e quem ganhou essa batalha foi Tet, então quando ele ganhou trocou as regras desse mundo
  e agora ele não tem mais violencia, tudo é decidido por jogos.`);
  prompt("Pressione enter para continuar.");
  console.clear();

  let heroi = {
    nome: "Kuuhaku",
    moral: 0,
    conhecimento: 0,
    dinheiro: 0,
    dia: 1,
    itens: ["blusa", "casaco", "tenis"],

    mudamoral: function (moral) {
      this.moral += moral;
      console.log(`Sua moral é: ${this.moral}`);
    },
    mudaconhecimento: function (conhecimento) {
      this.conhecimento += conhecimento;
      console.log(`Seu conhecimento é: ${this.conhecimento}`);
    },
    mudadinheiro: function (dinheiro) {
      this.dinheiro += dinheiro;
      console.log(`Seu dinheiro é $: ${this.dinheiro}`);
    },

    passatempo: function (dia) {
      this.dia += dia;
      console.log(`Dia: ${this.dia}`);
    },
  };
  console.clear();
  console.log(`Dia: ${heroi.dia}`);
  console.log(`Moral: ${heroi.moral}`);
  console.log(`Conhecimento: ${heroi.conhecimento}`);
  console.log("Sua primeira partida é contra 3 impostores que você encontrou enquanto descia as montanhas.");
  console.log(`Faça sua escolha.`);

  console.log(`
1: Ganhar moral
2: Forçalos a lhe dar informações sobre esse mundo
3: Jogar com eles e tirar tudo que eles tem inclusive informações`);
  let a1 = +prompt();
  while (a1 != 1 && a1 != 2 && a1 != 3) {
    console.log("Algo deu errado, digite 1 2 ou 3.");
    console.log(`
1: Ganhar moral
2: Forçalos a lhe dar informações sobre esse mundo
3: Tirar tudo que eles tem inclusive informações`);
    a1 = +prompt();
  }
  console.clear();

  if (a1 == 1) {
    heroi.mudamoral(1);
    console.log(heroi.moral);
    console.log("Eles não são muito conhecidos");
  } else if (a1 == 2) {
    heroi.mudamoral(1);
    heroi.mudaconhecimento(10);
    console.log("Você pega informações ruins sobre esse mundo.");
  } else {
    heroi.mudamoral(1);
    heroi.mudaconhecimento(15);
    console.log("Os impostores lhe falam sobre um cidade que está ao pé da montanha.");
  }
  prompt("Digite enter para continuar.");
  console.clear();
  console.log(`Você desce a montanha e chega a um bar.
Nele tem 2 garotas jogando uma partida de poker, e você descobre 
conversando com uma mulher que o último desejo do antigo rei
era que o trono fose descidido em algum jogo.
A garota que está jogando é a neta do último rei e por causa
do desejo dele, ela não consegue assumir o trono.
Pois precisa ganhar o torneio de jogos.`);
  console.log(`Então você olha melhor para a mulher e ve um saco cheio de
dinheiro e então você pensa em desafiar ela para um jogo.`);
  console.log(`Você a provoca falando que ela não é capaz de ganhar de você`);
  prompt("Digite enter.");
  console.clear();
  console.log(`Sora: 
-Eu não jogo por diversão, que tal apostar todo esse dinheiro que está em cima da mesa.
Mulher: - O QUE!!!Você sabe quanto tem aqui? 
Temos que apostar algo de mesmo valor para ser algo justo e não vejo nada que eu queira de você.
Sora:- Então vamos apostar 10 dias.
Se você ganhar pode fazer o que quiser com nós.
`);
  prompt("Enter.");
  console.clear();
  console.log(`Sora: Vamos jogar uma mão de poker, o que me diz?
Essa é a última chance de desistir. 
Mulher: Não fique convencido, seu intromedito, você irá perder.`);
  prompt("Digite enter.");
  console.clear();
  console.log(`Dia: ${heroi.dia}`);
  console.log(`Moral: ${heroi.moral}`);
  console.log(`Conhecimento: ${heroi.conhecimento}`);
  console.log(`Dinheiro: $${heroi.dinheiro}`);
  console.log("");
  console.log("*****ASCHENTE!*****");
  console.log("Kuuhaku vs Mulher desconhecida.");
  console.log("Faça sua escolha");
  console.log(`
1: Jogar honestamente e perder.
2: Trapacear e ganhar`);
  let b1 = +prompt();
  while (b1 != 1 && b1 != 2) {
    console.log("Algo deu errado, digite 1 ou 2.");
    console.log(`
1: Jogar honestamente e perder.
2: Trapacear e ganhar`);
    b1 = +prompt();
  }
  console.clear();

  if (b1 == 1) {
    console.log(`Você percebe que ela está trapaceando
    Sora: Eu vi quando você devolveu a carta e pescou uma nova, que
    invez de pegar a primeira você pegou uma carta marcada no meio
    de seu baralho. Você está trapaceando!.
    Mulher desconhecida: Você viu isso? porém não tem como provar que foi
    o que realmente aconteceu pare de chorar seu perdedor.
    Além disso a unica coisa que eu quero é que você saia daqui.`);
    console.log("");
    heroi.passatempo(10);
    heroi.mudamoral(-12);
    heroi.mudaconhecimento(15);
    heroi.mudadinheiro(5);
  } else {
    console.log(`Você percebe que ela está trapaceando.
    Ela mostra um Full house!!!!
    Sora: Eu sinto muito.
    ela se assusta e você mostra um
    ROYAL STRAIGHT FLUSH!!!!
    mulher desconhecida: impossívelll!!!!
    Sora: Veja mais de perto, é real.
    Mulher desconhecida: Impossível a chance é 1 em 6.150.000...
    Sora: e foi o que acabou de acontecer.
    Promessa é promessa qualquer aposta deve ser mantida.`);
    console.log("");
    heroi.passatempo(0);
    heroi.mudamoral(19);
    heroi.mudaconhecimento(5);
    heroi.mudadinheiro(200);
  }

  if (b1 == 2) {
    prompt("Digite enter para continuar.");
    console.clear();
    console.log(`Sua irmã olha para você e diz que você trapaceou e 
  que foi bem óbvio.
  Então você mostra para ela a Lei 6: Ser pego trapaceando durante o jogo
  gera perda instantâneas, resumindo se ninguém te pegou, está tudo bem.`);
  } else {
    prompt("Digite enter para continuar.");
    console.clear();
    console.log(`Sua irmã olha para você e diz, Sora, então conforme a Lei 6, se pegarmos alguem trapacenado temos que pensar em algum jeito de provar
    não é o suficiente saber que a pessoa está trapaceando.`);
  }

  prompt("Digite enter.");
  console.clear();
  console.log(`Faça sua escolha.
1: Alugar um quarto para passar a noite (valor $50).
2: Dormir na rua (valor $0),(perde 10 de moral).
3: Apostar tudo que você tem para passar a noite de graça.`);
  let escolha1 = +prompt();
  while (escolha1 != 1 && escolha1 != 2 && escolha1 != 3) {
    console.log("Algo deu errado, digite 1 2 ou 3.");
    console.log(`Faça sua escolha.
1: Alugar um quarto para passar a noite (valor $50).
2: Dormir na rua (valor $0),(perde 10 de moral).
3: Apostar tudo que você tem para passar a noite de graça.`);
    escolha1 = +prompt();
  }
  console.clear();

  if (escolha1 == 1) {
    console.log("Muito bem pode pegar as chaves e subir para seu quarto.");
    heroi.passatempo(1);
    heroi.mudamoral(0);
    heroi.mudaconhecimento(0);
    heroi.mudadinheiro(-50);
    prompt("Digite enter para continuar.");
  } else if (escolha1 == 2) {
    console.log("Você achou alguns trapos velhos e uma rua sem saída para passar a noite");
    heroi.passatempo(1);
    heroi.mudamoral(-10);
    heroi.mudaconhecimento(0);
    heroi.mudadinheiro(0);
    prompt("Digite enter para continuar.");
  } else {
    console.clear();
    console.log(`O gerente aceita seu desafio.
    Ele quer jogar uma moeda para cima.
    **chances de vitória = 1/2**`);
    prompt("Digite enter.");
    console.clear();
    let a = +prompt(`1: CARA ou 2: COROA`);
    while (a != 1 && a != 2) {
      console.log("Algo deu errado, digite 1 ou 2.");
      a = +prompt(`1: CARA ou 2: COROA`);
    }

    if (a == 1) {
      console.clear();
      console.log("Muito bem você ganhou, aqui está sua chave, pode subir.");
      heroi.passatempo(1);
      heroi.mudamoral(0);
      heroi.mudaconhecimento(0);
      heroi.mudadinheiro(0);
      prompt("Enter");
    } else {
      console.clear();
      console.log("Você perdeu, talvez este mundo não seja para você, pode ir embora.");
      heroi.passatempo(1);
      heroi.mudamoral(0);
      heroi.mudaconhecimento(0);
      heroi.mudadinheiro(-5);
      prompt("Enter");
    }
  }

  console.clear();
  console.log(`Tet. Agora que você já conhece o mundo onde caiu
  Eu desafio você a se tornar o rei em apenas 16 dias.
  Caso contrário eu irei te devolver ao seu mundo original, você precisa provar o seu valor.`);
  prompt("Digite enter");
  console.clear();
  acao();
  function acao() {
    console.clear();
    console.log(`Dia: ${heroi.dia}`);
    console.log(`Instruções!
  Você precisa de conhecimento para ficar mais fácil de ganhar as partidas.
  Você precisa de moral para poder duelar com oponentes mais difíceis e para conquistar o trono do rei.
  Você precisa de dinheiro para comprar itens, ficar mais bonito e adquirir conhecimento e moral. `);
    console.log("");

    console.log("O que você deseja fazer?");
    console.log(`
1: Ir farmar conhecimento (custo 1 dia e $50).
2: Ir farmar dinheiro (custo 1 dia).
3: Ir farmar moral (custo 1 dia $25).`);
    let escolha2 = +prompt();
    while (escolha2 != 1 && escolha2 != 2 && escolha2 != 3) {
      console.log("Algo deu errado, digite apenas 1 2 ou 3.");
      console.log(`
      1: Ir farmar conhecimento (custo 1 dia e $70).
      2: Ir farmar dinheiro (custo 1 dia).
      3: Ir farmar moral (custo 1 dia $70).`);
      escolha2 = +prompt();
    }

    if (escolha2 == 1) {
      farmarconhecimento();
      console.log(`Moral: ${heroi.moral}`);
      console.log(`Dinheiro: ${heroi.dinheiro}`);
      prompt("Enter");
    } else if (escolha2 == 2) {
      farmardinheiro();
      console.log(`Moral: ${heroi.moral}`);
      console.log(`Conhecimento: ${heroi.conhecimento}`);
      prompt("Enter");
    } else {
      farmarmoral();
      console.log(`Conhecimento: ${heroi.conhecimento}`);
      console.log(`Dinheiro: ${heroi.dinheiro}`);
      prompt("Enter");
    }

    function farmarmoral(farmarM) {
      heroi.passatempo(1);
      heroi.mudamoral(100);
      heroi.mudadinheiro(-70);
    }

    function farmarconhecimento(farmarC) {
      heroi.passatempo(1);
      heroi.mudaconhecimento(140);
      heroi.mudadinheiro(-70);
    }

    function farmardinheiro(farmarD) {
      heroi.passatempo(1);
      heroi.mudadinheiro(140);
    }
  }

  console.clear();
  console.log(`
Muito bem, para você conquistar o trono do rei desse mundo você deve ter 400 de moral e 700 de conhecimento só assim você será capaz.
Vou lhe dar quantos dias você precisar porém o deus Tet falou que você tem apenas 16 dias.
Então é melhor calcular bem seus passos para você chegar a sua meta.`);

  prompt("Enter");
  console.log(`Dia: ${heroi.dia}`);
  let quantidade = +prompt("Quantos dias você deseja farmar?");
  while (quantidade == isNaN) {
    console.log("Algo deu errado, digite um número.");
    quantidade = +prompt("Quantos dias você deseja farmar?");
  }

  for (let z = 1; z <= quantidade; z++) {
    acao();
  }
  trono: while (true) {
    prompt("Enter");
    console.clear();
    let tronoDoRei = +prompt(`Você está pronto para se tornar o rei?[1]Sim [2]Não.`);
    while (tronoDoRei != 1 && tronoDoRei != 2) {
      console.log("Algo deu errado, digite apenas 1 ou 2");
      tronoDoRei = +prompt(`Você está pronto para se tornar o rei?[1]Sim [2]Não.`);
    }

    if (tronoDoRei == 1) {
      console.clear();
      console.log(`Dia: ${heroi.dia}`);
      console.log(`Moral: ${heroi.moral}`);
      console.log(`Conhecimento: ${heroi.conhecimento}`);
      console.log(`Dinheiro: $${heroi.dinheiro}`);
      console.log("");
      console.log("*****ASCHENTE!*****");
      console.log("Kuuhaku vs Atual Rei.");
      console.log("Este jogo é uma partida de xadrez porém as peças se mexem por vontade própria.");
      console.log("");
      console.log("Faça sua escolha");
      console.log(`
  1: Mandar suas tropas para a frente de batalha.
  2: Incentivar suas tropas.
  3: Manter a defensiva`);
      let escolha3 = +prompt("");
      while (escolha3 != 1 && escolha3 != 2 && escolha3 != 3) {
        console.log("Algo deu errado, digite apenas 1 2 ou 3.");
        console.log(`
  1: Mandar suas tropas para a frente de batalha.
  2: Incentivar suas tropas.
  3: Manter a defensiva`);
        escolha3 = +prompt();
      }
      if (escolha3 == 1) {
        console.log(
          "Como as peças se mexem por vontade própria suas peças continuar no mesmo lugar pois elas nao iriam para a frente de batalha apenas para morrem."
        );
        prompt("Enter");
      } else if (escolha3 == 2) {
        console.log("Muito bem suas tropas se sentem motivadas a defenderem e atacar caso assim você deseje.");
        prompt("Enter");
      } else {
        console.log("Suas tropas não estão muito motivadas, caso o inimigo ataque você perdera peças.");
        prompt("Enter");
      }
      console.clear();
      console.log(`Dia: ${heroi.dia}`);
      console.log(`Moral: ${heroi.moral}`);
      console.log(`Conhecimento: ${heroi.conhecimento}`);
      console.log(`Dinheiro: $${heroi.dinheiro}`);
      console.log("");
      console.log("*****ASCHENTE!*****");
      console.log("Kuuhaku vs Atual Rei.");
      console.log("Faça sua segunda escolha");
      console.log(`
  1: Mandar suas tropas destruirem a linha de frente inimiga.
  2: Mandar suas tropas se infiltrarem nas linhas de defesa inimiga.
  3: Falar para suas tropas avançarem devagar e sem correr riscos.
    `);
      let escolha4 = +prompt("");
      while (escolha4 != 1 && escolha4 != 2 && escolha4 != 3) {
        console.log("Algo deu errado, digite apenas 1 2 ou 3.");
        console.log(`
  1: Mandar suas tropas destruirem a linha de frente inimiga.
  2: Mandar suas tropas se infiltrarem nas linhas de defesa inimiga.
  3: Falar para suas tropas avançarem devagar e sem correr riscos.
  `);
        escolha4 = +prompt();
      }
      if (escolha4 == 1) {
        console.log(`Suas tropas começas a se mexer em direção ao inimigo.`);
        prompt("Enter");
      } else if (escolha4 == 2) {
        console.log("Suas tropas começam a se infiltrar nas linhas de defesa inimiga");
        prompt("Enter");
      } else {
        console.log("Suas tropas começas a levantar guarda e avançar e ganhar território inimigo.");
        prompt("Enter");
      }
      console.clear();
      console.log(`Dia: ${heroi.dia}`);
      console.log(`Moral: ${heroi.moral}`);
      console.log(`Conhecimento: ${heroi.conhecimento}`);
      console.log(`Dinheiro: $${heroi.dinheiro}`);
      console.log("");
      console.log("*****ASCHENTE!*****");
      console.log("Kuuhaku vs Atual Rei.");
      console.log("Faça sua terceira escolha");
      console.log(`
  1: Mandar suas tropas matarem o rei e a rainha do tabuleiro custe o que custar.
  2: Falar para suas tropas avançarem com estratégia pois todo o esforço e o trabalho duro delas nessa guerra será recompensado.
  3: Incentivar suas tropas e defender o rei e a rainha.  
    `);
      let escolha5 = +prompt("");
      while (escolha5 != 1 && escolha5 != 2 && escolha5 != 3) {
        console.log("Algo deu errado, digite apenas 1 2 ou 3.");
        console.log(`
  1: Mandar suas tropas matarem o rei e a rainha do tabuleiro custe o que custar.
  2: Falar para suas tropas avançarem com estratégia pois todo o esforço e o trabalho duro delas nessa guerra será recompensado.
  3: Incentivar suas tropas e defenderem o rei e a rainha. 
  `);
        escolha5 = +prompt();
      }
      if (escolha5 == 1) {
        console.log("Suas tropas não lhe obdecem pois ninguem iria para a frente de batalha para morrer.");
        prompt("Enter");
        console.log("Você perdeu, mais sorte na próxima.");
        prompt("Enter");
        break;
      } else if (escolha5 == 2) {
        console.log(
          "Suas tropas avançam sem medo e destroem as peças inimigas dominando todo o tabuleiro e trazendo a vitória para casa."
        );
        prompt("Enter");
        console.log("Muito bem você virou o jogo. Parabéns por ter chegado até aqui.");
        console.log("Você adqueriu um iten.");
        console.log("Capa para chegar até o castelo de Tet.");
        heroi.itens.push("Capa");
        console.log(heroi.itens);
        prompt("Enter");
        if (heroi.dia <= 16 && heroi.moral > 400 && heroi.conhecimento > 700) {
          console.log("**************************");
          console.log("Parabens você é o maior ganhador da histório de Dishboard.");
          console.log("Tet: Acertei em ter te chamado vocês Kuuhaku para o mundo mundo");
          console.log("Tet: Vocês são dignos de me enfrentar algum dia, estarei lhes esperando.");
        }
        break;
      } else {
        console.log(
          "Suas tropas estão muito motivadas a defender porém quem não ataca nesse jogo não ganha, boa sorte na proxima vez, se ela existir."
        );
        prompt("Enter");
        console.log("Você perdeu, mais sorte na próxima.");
        prompt("Enter");
        break;
      }
    } else {
      console.log("Entendo, você não está se sentindo preparado gostaria de treinar mais? [1]Sim [2]Não");
      let k = +prompt("");
      if (k == 2) {
        console.log("Até a próxima.");
        break;
      } else {
        let j = +prompt("Mais quantos dias você gostaria de treinar?");
        while (j == isNaN) {
          console.log("Algo deu errado, digite um número.");
          j = +prompt("Mais quantos dias você gostaria de treinar?");
        }
        for (l = 1; l <= j; l++) {
          acao();
        }
        continue trono;
      }
    }
  }
  break;
}
