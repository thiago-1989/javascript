function tabuada() {
    var numero = parseInt(document.getElementById("numero").value) // os valores obtidos sao do tipo string
    var tabuada = document.getElementById("tabuada")

    if (isNaN(numero)) {
        alert("Digite um número!")
    } else {
        tabuada.innerHTML = null
        for (let i = 1; i <= 10; i++) {
            let resultado = numero * i;
            let item = document.createElement("option")
            item.text = `${numero} x ${i} = ${resultado}`;
            item.value = `tabuada${i}`
            tabuada.appendChild(item);
        }
    }
}



