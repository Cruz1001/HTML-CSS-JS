function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        //BOM DIA
        img.src = 'fotos/manha.png'
        document.body.style.backgroundColor = "#FEFEFE"
    }else if(hora >= 12 && hora < 18) {
        //BOA TARDE
        img.src = 'fotos/tarde.png'
        document.body.style.backgroundColor = "#B86425"
    }else{
        //BOA NOITE
        img.src = 'fotos/noite.png'
        document.body.style.backgroundColor = "#1D2637"
    }
}