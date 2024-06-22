const readline = require('node:readline');
const ler = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
ler.question("Idade: ", idade => {
    if(idade < 16) {
        console.log(`Não pode votar.`)
    }else if (idade < 18 || idade > 65) {
        console.log(`Voto opcional.`)
    }else {
        console.log(`Voto obrigatório`)
    }
    ler.close()
})