const prompt = require("prompt-sync")();
let a = +prompt("Digite um número inteiro maior: ");
let b = +prompt("Digite o segundo número inteiro menor: ");

let multiplos = a % b;

if(multiplos == 0)
{
    console.log("Os números são múltiplos!!")
}else if(multiplos == 1)
    {
        console.log("Os números não são múltiplos!!")
    };


