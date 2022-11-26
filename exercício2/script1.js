function cli(){
var nasc = document.getElementById('idade')
var result = document.getElementById('result')
var a = Number(nasc.value)
var dat = new Date()
var data = dat.getFullYear()
var idade = data - a
if (nasc.value.length == 0 || nasc.value > data){
    alert('Erro!! Tente novamente')
}
else {
    var sx = document.getElementsByName('sx')
    if (sx[0].checked) {
        result.innerHTML = `É um Homem de ${idade} anos.`
    }
    if (sx[1].checked) {
        result.innerHTML = `É uma Mulher de ${idade} anos.`
    }
}
}
var button = document.getElementById('but')
function entra(){
    button.style.background = '#F2EFEF'
}
function sai(){
    button.style.background = '#FFFFFF'
}