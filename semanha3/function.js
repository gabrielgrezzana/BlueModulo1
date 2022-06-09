const prompt = require("prompt-sync")();
//calculadora
function firstfunction() {
  let soma = 0;
  if (cara == "+") {
    soma = num1 + num2;
  } else if (cara == "*") {
    soma = num1 * num2;
  } else if (cara == "/") {
    soma = num1 / num2;
  } else if (cara == "-") {
    soma = num1 - num2;
  } else if (cara != "+" || cara != "-" || cara != "/" || cara != "*") {
    console.log("error, operador inválido");
  }
  console.log(soma);
}

let num1 = +prompt("Digite primeiro número: ");
let num2 = +prompt("Digite segundo número: ");
let cara = prompt("Digite o operador: ");

firstfunction(num1, num2, cara);

//exemplo de como mandar as variaveis para a função, veja que nesse cara o operador vai como string e dai eu faco os if para identificar se a estring corresponde
// e faco a conta dentro dos if caso entre nele.
