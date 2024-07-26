function contagemRegressiva (n) {
    if (n > 0) {
        console.log(n)
        return contagemRegressiva(n - 1)
    } else{
        console.log(n)
    }
}

contagemRegressiva(10)