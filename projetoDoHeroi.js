const prompt = require("prompt-sync")();

console.log("Vampiro Edward");
console.log("Começou seu dia indo atrás de recursos para contruir seu castelo adqueriu diversas pedras e madeiras para construilo de forma gigante e belo, após contruir um castelo foi atrás de todos os monstrons que assombravam as redondezas de seu castelo, e então subiu de nível e foi atrás de monstros mais fortes que assombravam o reino inteiro, para liberar seu reino dos monstros." );
console.log("Farei 5 perguntas para saber se o Vampiro Edward, obteve sucesso na sua jornada.");
console.log("As respostas só valem 1 para Sim e 2 para Não.");


let p1 = +prompt ("Pergunta número 1: O vampiro conseguiu contruir o seu castelo?")

let p2 = +prompt("Pergunta número 2: O vampiro construiu um castelo pequeno?")

let p3 = +prompt("Pergunta número 3: O vampiro conseguiu matar os monstros em volta de seu castelo?")

let p4 = +prompt("Pergunta número 4: Quando o vampiro subiu de nível, ele ficou mais bonito?")

let p5 = +prompt("Pergunta número 5: O vampiro conseguiu liberar seu reino das assombrações?")


console.log(
    `Suas respostas foram: Pergunta 1 = ${p1}, Pergunta 2 = ${p2}, Pergunta 3 = ${p3}, Pergunta 4 = ${p4} e Pergunta 5 = ${p5}`
  );

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






