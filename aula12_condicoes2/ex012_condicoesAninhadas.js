const hora = new Date().toLocaleString('pt-BR').split(",")[1]
console.log(`Hora atual${hora}`)
if (hora.slice(0,3) < 12) {
    console.log(`Bom dia!`)
} else if (hora.slice(0,3) <= 18) {
    console.log(`Boa tarde!`)
} else {
    console.log(`Boa noite!`)
}