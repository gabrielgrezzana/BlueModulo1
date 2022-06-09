const prompt = require("prompt-sync")();
let numero = +prompt("Digite um número qualquer: ");
let a = numero % 2

if(a == 0){
    console.log("Seu número é par!!");
}else if(a == 1){
    console.log("Seu número é ímpar!!");
}