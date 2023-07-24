function verificar() {
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.getElementById('res')
   if (fano.value.lenght == 0 || fano.value > ano){
    window.alert("[ERRO] Verifique os dados e tente novamente")
   } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 12){
                //crianço
                img.setAttribute('src', 'menino.png')
            } else if(idade >= 21 && idade < 60){
                //homem
                img.setAttribute('src', 'homem.png')
            }else if(idade < 18 && idade > 12){
                img.setAttribute('src', 'mano.png')
            } else if(idade >= 60){
                //velhote
                img.setAttribute('src', 'velho.png')
            }
        } else if(fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade <12){
                //crianço
                img.setAttribute('src', 'criança f.png')
            } else if(idade >= 21 && idade < 60){
                //homem
                img.setAttribute('src', 'mulher.png')
            } else if(idade >= 60){
                //velhote
                img.setAttribute('src', 'velha.png')
            } else if(idade <= 18 && idade > 12){
                img.setAttribute('src', 'nova.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
   }
}