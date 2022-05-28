const prompt = require("prompt-sync")();

console.log("Essa é a história do Vampiro Edward");
console.log("Baseada em fatos verídicos");
console.log("Pressione enter para continuar");
prompt('');

console.log(`Começou seu dia indo atrás de recursos para contruir seu castelo,
adqueriu diversas pedras e madeiras para construir de forma grandiosa, 
após contruir seu castelo foi atrás de monstros que assombravam as redondezas de seu castelo, 
e então subiu de nível e foi atrás de monstros mais fortes que assombravam o reino inteiro, para liberar seu reino dos monstros.`)
console.log('');
console.log("Pressione enter para prosseguir para as perguntas");
prompt('');

console.log("Farei 5 perguntas para saber se o Vampiro Edward, obteve sucesso na sua jornada.");
console.log("As respostas só valem 1 para Sim e 2 para Não.");

let p1 = +prompt ("Pergunta número 1: O vampiro conseguiu contruir o seu castelo?");

let p2 = +prompt("Pergunta número 2: O vampiro construiu um castelo pequeno?");

let p3 = +prompt("Pergunta número 3: O vampiro conseguiu matar os monstros em volta de seu castelo?");

let p4 = +prompt("Pergunta número 4: Quando o vampiro subiu de nível, ele ficou mais bonito?");

let p5 = +prompt("Pergunta número 5: O vampiro conseguiu liberar seu reino dos monstros?");

let total = 0;


if(p1 == 1){
    total++;
}

if(p2 == 2){
    total++;
}

if(p3 == 1){
    total++;
}

if(p4 == 2){
    total++;
}

if(p5 == 1){
    total++;
}

if(total == 0){
    console.log("0 respostas corretas: Você falha miseravelmente.")
}else if(total <= 2){
    console.log("1 ou 2 respostas corretas: Você falha, mas ainda consegue fugir da situação.")
}else if(total == 3){
    console.log("3 respostas corretas: Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco.")
}else if(total == 4){
    console.log("4 respostas corretas: Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita.")
}else if(total ==5){
    console.log("5 respostas corretas: Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações.")
}






