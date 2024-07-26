let numeros = [3, 5, 7, 9, 0];
for (let i = 0; i < numeros.length; i++) {
    console.log(`Na posição ${i + 1} tem o valor ${numeros [i]}`)
}
console.log()

for (const key in numeros) {
    console.log(`Na posição ${key} tem o valor ${numeros [key]}`)
}