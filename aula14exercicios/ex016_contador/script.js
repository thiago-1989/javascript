function contar() {
    var inicio = parseInt(document.getElementById("inicio").value) // os valores obtidos sao do tipo string
    var fim = parseInt(document.getElementById("fim").value)
    var passo = parseInt(document.getElementById("passo").value)
    var resposta = []

    if (isNaN(inicio) || isNaN(fim)) {
        document.getElementById("res").innerHTML = "Verifique os valores inseridos!"
    } else {
        if (passo !== 0 && !isNaN(passo)) {
            for (let i = inicio; i <= fim; i = i += passo) {
                resposta.push(i)
                document.getElementById("res").innerHTML = "Contando...<br>" + resposta.join(" 👉 ") + " 🏁"
            }
        }
        if (isNaN(passo) || passo === 0) {
            alert("PASSO inválido! Considerando PASSO 1")
            passo = 1;
            if (inicio > fim) {
                for (let i = inicio; i >= fim; i -= passo) {
                    resposta.push(i)
                    document.getElementById("res").innerHTML = "Contando...<br>" + resposta.join(" 👉 ") + " 🏁"

                }
            } else {
                for (let i = inicio; i <= fim; i += passo) {
                    resposta.push(i)
                    document.getElementById("res").innerHTML = "Contando...<br>" + resposta.join(" 👉 ") + " 🏁"
                }
            }

        }

        if (inicio > fim) {
            for (let i = inicio; i >= fim; i -= passo) {
                resposta.push(i)
                document.getElementById("res").innerHTML = "Contando...<br>" + resposta.join(" 👉 ") + " 🏁"
            }
        }
    }
       
}