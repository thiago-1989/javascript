function verificar() {
    var data = new Date().getFullYear()
    //var nasc = document.querySelector("input#submit")
    var nasc = document.getElementById("anoNasc").value
    var idade = data - nasc
    var res = document.getElementById("res")
    if (nasc > data || Number(nasc) < 1900) {
        alert("ERRO! Verifique os dados e tente novamente!")
    } else {
        var sexo = document.getElementsByName('radsex')
        var genero = ""

        res.style.textAlign = 'center'

        if (sexo[0].checked === true) {
            genero = "Homem"
            if (idade < 4) {
                document.getElementById("img").innerHTML = `<img src="_imagens/bebe.jpg">`
                document.getElementById("res").innerHTML = `Detectamos Bebê com ${idade} ano(s)`
            } else if (idade < 12) {
                document.getElementById("img").innerHTML = `<img src="_imagens/homem10.jpg">`
                document.getElementById("res").innerHTML = `Detectamos ${genero} com ${idade} anos`
            } else if (idade < 18) {
                document.getElementById("img").innerHTML = `<img src="_imagens/homem15.jpg">`
                document.getElementById("res").innerHTML = `Detectamos ${genero} com ${idade} anos`
            } else if (idade < 30) {
                document.getElementById("img").innerHTML = `<img src="_imagens/homem20.jpg">`
                document.getElementById("res").innerHTML = `Detectamos ${genero} com ${idade} anos`
            } else if (idade < 40) {
                document.getElementById("img").innerHTML = `<img src="_imagens/homem30.jpg">`
                document.getElementById("res").innerHTML = `Detectamos ${genero} com ${idade} anos`
            } else if (idade < 50) {
                document.getElementById("img").innerHTML = `<img src="_imagens/homem40.jpg">`
                document.getElementById("res").innerHTML = `Detectamos ${genero} com ${idade} anos`
            } else if (idade >= 50) {
                document.getElementById("img").innerHTML = `<img src="_imagens/homem50.jpg">`
                document.getElementById("res").innerHTML = `Detectamos ${genero} com ${idade} anos`
            }
        } else if (sexo[1].checked === true) {
            genero = "Mulher"
            if (idade < 4) {
                document.getElementById("img").innerHTML = `<img src="_imagens/bebe.jpg">`
                document.getElementById("res").innerHTML = `Detectamos Bebê com ${idade} ano(s)`
            } else if (idade < 12) {
                document.getElementById("img").innerHTML = `<img src="_imagens/mulher10.jpg">`
                document.getElementById("res").innerHTML = `Detectamos ${genero} com ${idade} anos`
            } else if (idade < 18) {
                document.getElementById("img").innerHTML = `<img src="_imagens/mulher15.jpg">`
                document.getElementById("res").innerHTML = `Detectamos ${genero} com ${idade} anos`
            } else if (idade < 30) {
                document.getElementById("img").innerHTML = `<img src="_imagens/mulher20.jpg">`
                document.getElementById("res").innerHTML = `Detectamos ${genero} com ${idade} anos`
            } else if (idade < 40) {
                document.getElementById("img").innerHTML = `<img src="_imagens/mulher30.jpg">`
                document.getElementById("res").innerHTML = `Detectamos ${genero} com ${idade} anos`
            } else if (idade < 50) {
                document.getElementById("img").innerHTML = `<img src="_imagens/mulher40.jpg">`
                document.getElementById("res").innerHTML = `Detectamos ${genero} com ${idade} anos`
            } else if (idade >= 50) {
                document.getElementById("img").innerHTML = `<img src="_imagens/mulher50.jpg">`
                document.getElementById("res").innerHTML = `Detectamos ${genero} com ${idade} anos`
            }
        }
    }
}

