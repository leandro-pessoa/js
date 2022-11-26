function cli(){
    var res = document.querySelector('div#res')
    var a = document.getElementById('num')
    var cont = 0
    if (a.value.length == 0){
        window.alert('[ERRO] Insira um valor.')
    } else{
        res.innerHTML = ''
        var num = Number(a.value)
        while (cont < 10){
        cont += 1
        var mult = num * cont 
        res.innerHTML += `${num} x ${cont} = ${mult} <br>`
        }
    }
}
function limp(){
    document.getElementById('num').value = ''
    var res = document.querySelector('div#res')
    res.innerHTML = ''
}
function entra1(){
    var but = document.querySelector('input#but1')
    but.style.background = `rgb(226, 133, 71)`
}
function sai1(){
    var but = document.querySelector('input#but1')
    but.style.background = 'white'
}
function entra2(){
    var but = document.querySelector('input#but2')
    but.style.background = `rgb(226, 133, 71)`
}
function sai2(){
    var but = document.querySelector('input#but2')
    but.style.background = 'white'
}