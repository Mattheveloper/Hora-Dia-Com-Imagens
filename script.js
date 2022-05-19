function carregar() {
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} hora(s)`

if (hora >= 0 && hora <12) {
    img.src = 'img/manhã.jpg'
    document.body.style.background = '#dfc9a0'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'img/tarde.jpg'
        document.body.style.background = '#cc824f'
        } else {
            img.src = 'img/noite.jpg'
            document.body.style.background = '#0d65c3'
            }   
}