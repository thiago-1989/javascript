// Criando um array vazio
let num = [];
// Podemos criar um array com valores
num = [5, 8, 2];
console.log(`Nosso vetor é o ${num}`);
// Para substituir um item do array ou pode adcionar colocando um indice que vazio alem do ultimo
num[2] = 9;
num[3] = 6
console.log(`Nosso vetor é o ${num}`);
// Para add um ou mais itens no final da lista use "push()"
num.push(3, 7)
console.log(`Nosso vetor é o ${num}`);
// para saber a quantidade de itens use array.length sem parênteses no final
console.log(`Nosso Array tem ${num.length} itens ou posições`)
// para ordenar os elementos use .sort()
num.sort()
console.log(`Os itens ordenados são ${num}`)
console.log(`O item 1 é ${num[0]}`)
console.log("\n====================================================")
for (let i = 0; i < num.length; i++) {
    console.log(`Na posição ${i + 1} tem o valor ${num[i]}`)
}
console.log()
