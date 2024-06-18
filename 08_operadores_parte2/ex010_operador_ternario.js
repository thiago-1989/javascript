/* Operadores ternario seguem a seguinte estrutura: teste ? true : false;
* teste é uma operação logica como no exemṕlo abaixo;
* depois da '?' temos o primeiro caso que pode ser uma mensagem se o resultado for 'true';
* em segida temos depois dos ':' o segundo caso, ou seja, se o resultado for 'false';
*/
media = 8
console.log(media >= 7 ? "Aprovado" : "Reprovado")
// ou

resultado = media >= 7 ? "Aprovado" : "Reprovado"
console.log(resultado)

var idade = 19
var resp =  idade >= 18 ? "Maior" : "Menor"
console.log(resp)