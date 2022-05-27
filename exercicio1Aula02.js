const prompt = require("prompt-sync")();
let a = +prompt ("digite um número: ");
let b = +prompt ("Digite o segundo número: ");

if(a > b)
{
    console.log("O maior número é: ", a);
}else if(b > a)
    {
        console.log("O maior número é: ", b);
    }else
        {
            console.log("Eles são iguais");
        }