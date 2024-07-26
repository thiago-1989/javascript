function parOuImpar(num) {
    if(num % 2 == 0){
        return "par"
    } else {
        return "Ímpar"
    }
}

num = 5;
console.log(`${num} é um número ${parOuImpar(num)}!`)
