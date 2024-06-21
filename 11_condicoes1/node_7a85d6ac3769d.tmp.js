const readline = require('node:readline');
const ler = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
ler.question("País: ", país => {
    if (país.toUpperCase() == "BRASIL") {
        console.log("Brasileiro")
    }else {
        console.log("Estrangeiro")
    }
    ler.close()
})
