const prompt = require("prompt-sync")();

//let quantidade = +prompt("Quantas vezes voce quer repetir? ");


//for(let i = 0; i < quantidade; i++){
//   console.log("Repetiu");
//}




let linhas = +prompt('Quantas linhas? ');
let colunas = +prompt('Quantas colunas? ');

let adicao =0;

let arrayLinha= [];
let arrayColuna= [];


for (let i = 0;i < linhas; i++){
     arrayColuna = [];
    for (let i = colunas; i > 0; i--){
        arrayColuna.push(i + adicao - 1);
    }
    arrayLinha.push(arrayColuna);
    adicao++
}

console.log(arrayLinha);