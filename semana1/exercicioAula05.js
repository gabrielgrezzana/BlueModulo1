/*exercicio da aula: 

Faça um programa que leia e valide as seguintes informações:

Nome: maior que 3 caracteres;
Idade: entre 0 e 150;
Salário: maior que zero;
Estado Civil: 's', 'c', 'v', 'd';

Caso o usuário digite algum dado inválido, ele deve retornar ao início do programa.
*/

const prompt = require("prompt-sync")();


while(true)
{
    let nome = prompt('Digite seu nome: ');
    if(nome.length < 3){
        console.log("Nome inválido");
        console.log();
        continue;
    }
    let idade = +prompt("Digite sua idade: ");
    if(idade <= 0 || idade > 150){
        console.log("Idade inválido");
        console.log();
        continue;
    }
    let salario = prompt('Digite seu salário: ');
    if(salario < 0){
        console.log("Salário inválido");
        console.log();
        continue;
    }
    let civil = prompt("Digite seu estado civil: ");
    if(civil != 's' && civil != 'c' && civil != 'v' && civil != 'd'){
        console.log("Estado civil inválido");
        console.log();
        continue;
    }
    console.log("Parabens você acertou todas as questões!");
    break;
}



