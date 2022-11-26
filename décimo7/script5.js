function cli(){
    var result1 = document.getElementById('result1')
    var result2 = document.getElementById('result2')
    var a = document.getElementById('inp1')
    var b = document.getElementById('inp2')
    var mass = Number(a.value)
    var alt = Number(b.value)
    if (a.value.length == 0 || b.value.length == 0){
        alert('[ERRO] Todas as caixas devem  ser preenchidas.')
        a.value = ''
        b.value = ''
        a.focus()
    }
    else if (mass == 0 || alt == 0){
        alert('[ERRO] Os valores devem ser maioires do que zero.')
        a.value = ''
        b.value = ''
        a.focus()
    }
    else{
        var imc = mass / alt **2
        result1.innerHTML = imc.toFixed(2)
        if (imc < 18.5){
            result2.innerHTML = 'Abaixo do peso normal'
        }
        else if (imc >= 18.5 && imc <= 24.9){
            result2.innerHTML = 'Peso normal'
        }
        else if (imc >= 25 && imc <= 29.9){
            result2.innerHTML = 'Excesso de peso'
        }
        else if (imc >= 30 && imc <= 34.9){
            result2.innerHTML = 'Obesidade classe 1' 
        }
        else if (imc >= 35 && imc <= 39.9){
            result2.innerHTML = 'Obesidade classe 2'
        }
        else{
            result2.innerHTML = 'Obesidade classe 3'
        }
    }
}
function limp (){
    var but = document.getElementById('limp')
    var mass = document.getElementById('inp1')
    var alt = document.getElementById('inp2')
    var result1 = document.getElementById('result1')
    var result2 = document.getElementById('result2')
    mass.value = ''
    alt.value = ''
    result1.innerHTML = ''
    result2.innerHTML = ''
}
function entra1(){
    var bu = document.getElementById('butt')
    bu.style.background = 'rgb(187, 139, 236)'
}
function sai1(){
    var bu = document.getElementById('butt')
    bu.style.background = 'white'
}
function entra2(){
    var bu = document.getElementById('limp')
    bu.style.background = 'rgb(187, 139, 236)'
}
function sai2(){
    var bu = document.getElementById('limp')
    bu.style.background = 'white'
}