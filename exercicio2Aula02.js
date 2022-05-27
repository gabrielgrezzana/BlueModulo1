const prompt = require("prompt-sync")();

let nota1 = +prompt ("Digite sua nota número 1: ");
let nota2 = +prompt("Digite sua nota número 2: ");
let nota3 = +prompt("Digite sua nota número 3: ");
let nota4 = +prompt("Digite sua nota número 4: ");

let media = nota1+nota2+nota3+nota4;
let medianova = media / 4;
console.log("Sua média foi: ", medianova);
if(medianova >= 7)
    {
        console.log("Aluno aprovado")
    }else if(medianova > 5 && medianova < 7){
        console.log("Aluno em recuperação");
    }else if(medianova < 5){
        console.log("Aluno reprovado");
    }