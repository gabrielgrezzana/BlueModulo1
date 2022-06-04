const prompt = require("prompt-sync")();
while(true){
    console.log("****Bem vindo ao jogo de jokenpo****")
    console.log("Deseja jogar? digite sim ou nao. ");
    let iniciar = prompt(": ").toLowerCase()
    while(iniciar != 'nao' && iniciar != 'sim'){
        console.log('Opção inválida')
        console.log("Deseja jogar? digite sim ou nao. ");
        iniciar = prompt(": ").toLowerCase()
    }
    if(iniciar == 'nao') continue;
    let contadorjogador = 0;
    let empates = 0;
    let contadormaquina = 0;
    let rodadas = prompt("Quantas rodadas você deseja jogar?: ");
    console.log();

    while(rodadas > 0){
        let pontosjogador = +prompt('[1]Pedra, [2]Papel ou [3]tesoura: ')
        let aleatorio = Math.floor(Math.random()*3 +1);
        console.log("A máquina escolheu: ", aleatorio);
        if(pontosjogador == 1 && aleatorio == 1){
            console.log('empate!');
            empates++;
        }

        if(pontosjogador == 2 && aleatorio == 2){
            console.log('empate!');
            empates++;
        }

        if(pontosjogador == 3 && aleatorio == 3){
            console.log('empate!');
            empates++;
        }

        if(pontosjogador == 1 && aleatorio == 2){
            console.log('Máquina ganhou!');
            contadormaquina++;
        }

        if(pontosjogador == 1 && aleatorio == 3){
            console.log('Jogador ganhou!');
            contadorjogador++;
        }
        if(pontosjogador == 2 && aleatorio == 1){
            console.log('Jogador ganhou!');
            contadorjogador++;
        }
        if(pontosjogador == 2 && aleatorio == 3){
            console.log('Maquina ganhou!');
            contadormaquina++;
        }
        if(pontosjogador == 3 && aleatorio == 1){
            console.log('Maquina ganhou!');
            contadormaquina++;
        }
        if(pontosjogador == 3 && aleatorio == 2){
            console.log('Jogador ganhou!');
            contadorjogador++;
        }
       
        rodadas--;
    }
    console.log('**A PONTUAÇÃO FOI**')
    console.log();
    console.log("Você: ", contadorjogador);
    console.log("empate: ", empates);
    console.log("máquina: ", contadormaquina);
    console.log();
    if(contadorjogador > contadormaquina){
        console.log("Jogador sortudo você! Parabéns você ganhou!!")
    }else if(contadorjogador < contadormaquina){
        console.log("Maquina teve mais sorte que você!!");
    }else if(empates > contadormaquina && empates > contadorjogador){
        console.log("empatouuuuuu!!");
    }else if(contadorjogador == contadormaquina){
        console.log("empatouuuuuu!!")
    }
    let verificador = prompt("Você deseja jogar novamente? ").toLowerCase();
    while(verificador != 'sim' && verificador != 'nao'){
        console.log("Opção inválidade")
        verificador = prompt("Você deseja jogar novamente? ").toLowerCase();
    }
    if(verificador == 'sim'){
        continue;
    }else if(verificador == 'nao'){
        break;
    }
    
   
}

