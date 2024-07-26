var numeros = [];

function limpar() {
    numeros = []
    addNum.innerHTML = null
}

function adicionar() {

    document.getElementById("resultado").innerHTML = null

    var valor = parseInt(document.getElementById("valor").value) // os valores obtidos sao do tipo string use parseInt para converter

    if (isNaN(valor) || valor < 1 || valor > 100) {
        alert("Digite um número válido!")
        document.getElementById("valor").value = null

    } else if (numeros.indexOf(valor) !== -1){
        alert("Esse valor já foi digitado!")
        document.getElementById("valor").value = null

    } else {
        numeros.push(valor)
        let item = document.createElement("option")
        item.text = `Valor ${valor} adicionado.`;
        addNum.appendChild(item);
        document.getElementById("valor").value = null
    }
}

function finalizar() {
    if (numeros.length > 0) {

        let soma = 0

        for (const key in numeros) {
            soma += numeros[key]
        }

        document.getElementById("resultado").innerHTML = `Ao todo, temos ${numeros.length} números cadastrados <br>
        O maior valor informado foi ${numeros.sort()[numeros.length-1]}.<br>
        O menor valor informado foi ${numeros.sort()[0]}.<br>
        Somando todos os valores, temos ${soma}.<br>
        A média dos valores digitados foi ${soma/numeros.length}.
        `
    } else {
        alert("Adicione valores antes de finalizar!")
    }
}



/*
function adicionar() {
    

    if (isNaN(numero)) {
        alert("Digite um número!")
    } else { 
        let item = document.createElement("option")
        item.text = `Foi adicionado o número ${numero[i]}`;
        item.value = `numAdd${i}`
        tabuada.appendChild(item);
        
    }
}
*/
