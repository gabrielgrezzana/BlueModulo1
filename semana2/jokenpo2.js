const prompt = require("prompt-sync")();
// JOKENPO
//  REQUISITOS:
//     Permitir que eu decida quantas rodadas iremos fazer;
//     Ler a minha escolha (Pedra, papel ou tesoura, ou os elementos escolhidos por você para o seu jogo);
//     Decidir de forma aleatória a decisão do computador;
//     Comparar os valores e declarar o vencedor (marcando 1 vitória para ele);
//     Repetir os passos 2, 3 e 4 de acordo com o número de rodadas escolhido;
//     Ao final das repetições, mostrar quantas rodadas cada jogador ganhou;
//     Determinar quem foi o grande campeão de acordo com a quantidade de vitórias de cada um (computador e jogador);
//     Perguntar se o Jogador quer jogar novamente: Se sim volte ao primeiro passo, se não finalize o programa.

while(true){
    console.log("****Bem vindo ao jogo de jokenpo****")
    console.log("Deseja jogar? ");
    let iniciar = prompt("").toLowerCase()
    while(iniciar != 'nao' && iniciar != 'sim'){
        console.log('Opção inválida')
        console.log("Deseja jogar? ");
        iniciar = prompt("").toLowerCase()
    }
    if(iniciar == 'nao') continue;
    let contadorjogador = 0;
    let empates = 0;
    let contadormaquina = 0;
    let rodadas = prompt("Quantas rodadas você deseja jogar?");
    console.log();
    let a = ['pedra','papel','tesoura'];
    while(rodadas > 0){
        let pontosjogador = +prompt('[1]Pedra, [2]Papel ou [3]tesoura')
        let aleatorio = Math.floor(Math.random()*3 +1);
        if(pontosjogador == 1 && aleatorio == 1){
            console.log('empate');
            empates++;
        }

        if(pontosjogador == 2 && aleatorio == 2){
            console.log('empate');
            empates++;
        }

        if(pontosjogador == 3 && aleatorio == 3){
            console.log('empate');
            empates++;
        }

        if(pontosjogador == 1 && aleatorio == 2){
            console.log('Máquina ganhou!!!');
            contadormaquina++;
        }

        if(pontosjogador == 1 && aleatorio == 3){
            console.log('Jogador ganhou');
            contadorjogador++;
        }
        if(pontosjogador == 2 && aleatorio == 1){
            console.log('Jogador ganhou');
            contadorjogador++;
        }
        if(pontosjogador == 2 && aleatorio == 3){
            console.log('Maquina ganhou');
            contadormaquina++;
        }
        if(pontosjogador == 3 && aleatorio == 1){
            console.log('Maquina ganhou');
            contadormaquina++;
        }
        if(pontosjogador == 3 && aleatorio == 2){
            console.log('Jogador ganhou');
            contadorjogador++;
        }
       
        rodadas--;
    }
   
    console.log("jogador", contadorjogador);
    console.log("empate", empates);
    console.log("maquina", contadormaquina);

    if(contadorjogador > contadormaquina){
        console.log("Jogador caro voce!")
    }else if(contadorjogador < contadormaquina){
        console.log("Maquina te superou!!");
    }else if(empates > contadormaquina && empates > contadorjogador){
        console.log("SEU HORRIVEL EMPATOU");
    }
    let verificador = prompt("Você deseja jogar novamente? ").toLowerCase();
    if(verificador == 'sim'){
        continue;
    }else if(verificador != 'sim'){
        break;
    }
    
   
}

