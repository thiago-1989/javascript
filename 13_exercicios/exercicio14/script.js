function carregar() {
    var hora = new Date().toLocaleString('pt-BR').split(",")[1]
    if (hora.slice(0, 3) < 12) {
        document.getElementById("dados").innerHTML = "<p id='hora'>Hora atual: " + hora + "<p/><p id='hora'>Bom dia!</p>"
        document.getElementById("img").innerHTML = `<img src="_imagens-hora/dia.jpeg">`
        document.getElementById("site").style.backgroundColor = "khaki"
    } else if (hora.slice(0, 3) <= 18) {
        document.getElementById("img").innerHTML = `<img src="_imagens-hora/tarde.jpeg">`
        document.getElementById("site").style.backgroundColor = "darkorange"

    } else {
        document.getElementById("img").innerHTML = `<img src="_imagens-hora/noite.jpg">`
        document.getElementById("site").style.backgroundColor = "#2e2e2e"
    }
}