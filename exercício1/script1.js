function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    
    if (hora >= 0 && hora < 12){
        msg.innerHTML = `Agora são ${hora} horas. Bom dia!`
        img.src = 'amanhecer.jpg'
        document.body.style.background = '#e2cd9f'
    }
    else if (hora >= 12 && hora <= 18){
        msg.innerHTML = `Agora são ${hora} horas. Boa tarde!`
        img.src = 'tarde.jpg'
        document.body.style.background = '#b9846f'
    }
    else {
        msg.innerHTML = `Agora são ${hora} horas. Boa noite!`
        img.src = 'noite.jpg'
        document.body.style.background = '#515154'
    }
}