console.log(9 > 5)
console.log(7 < 3)
console.log(9 >= 5)
console.log(5 <= 5)
console.log(3 == "3") // O operador "==" verifica se os valores são iguais mas não se o tipo é igual
console.log(3 === 3.0) // Nesse caso é comparado o valor e o tipo caso o tipo seja diferente o resultado é "false"
// Os operadores "===" e "!==" são chamados "operadores de identidade"
console.log(2 != 3)
console.log(5 !== '5')

// Quando temos operadores aritméticos e relacionais na mesma operação primeiro são resolvidos os aritméticos. ex:

console.log(10 > 25 -5)