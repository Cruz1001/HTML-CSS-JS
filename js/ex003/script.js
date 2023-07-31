function contar() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var cont = 0
    var res = document.getElementById('res')

    for (var cont = inicio; cont < fim; cont += passo) {
        res.innerHTML += `${cont}`
    }     
    
}