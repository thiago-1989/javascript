let num = [3, 5, 7, 9, 0];
console.log(`Em qual posição está o número 7? \nEstá na posição ${num.indexOf(7)}`);
console.log(`Na posição ${num.indexOf(7)} encontrei o valor ${num[2]}}\n`);

// Caso o número não exista dentro do vetor o retorno será "-1" 
console.log(num.indexOf(4)) // -1
// Lembre-se que nesse caso o -1 não significa que está na ultima posição como na linguagem python
for (let i = 0; i <= 10; i++) {
    let posicao = num.indexOf(i);
    if (posicao == -1) {
        console.log(`O número ${i} não foi encontrado!`)
    } else {
        console.log(`O número ${i} está na posição ${posicao}`)
    }
}
