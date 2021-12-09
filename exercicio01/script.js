function carregar(){
    var agora = new Date()
    var hora = agora.getHours()
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')

    msg.innerHTML = `agora são ${hora} horas`

    if(hora >= 4 && hora < 12){
        img.src = 'imagens/dia.png'
        window.document.body.style.backgroundColor = '#F2E638'
    }else if(hora >= 12 && hora < 18){
        img.src = 'imagens/tarde.png'
        window.document.body.style.backgroundColor = '#F2AA80'
    }else{
        img.src = 'imagens/noite.png'
        window.document.body.style.backgroundColor = '#585859'
    }
}
