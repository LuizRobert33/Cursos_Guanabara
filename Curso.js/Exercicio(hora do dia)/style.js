function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data= new Date()
var hora= data.getHours()
var minutos = data.getMinutes()
msg.innerHTML = `Agora são exatamente ${hora} horas e ${minutos}  minutos`
if(hora >= 0 && hora < 12) {
    //BOM DIA!
    img.src = 'manha.png'
    document.body.style.background = '#e2cd9f'
} else if(hora >= 12 && hora < 18){
    //BOA TARDE
    img.src = 'tarde.png'
    document.body.style.background = '#b9846f'
} else {
    img.src= 'noite.png'
    document.body.style.background = '#515154'
    //BOA NOITE
}
}


/*O exercicio ficou "mau feito" pois, os recortes sairam ruim
e o estudante, ja havia feito esse exercicio e perdeu o arquivo
fazendo novamente, mas de qualquer jeito agora*/
