var list = []
var inpu = document.getElementById('num')
var result = document.querySelector('div#result')
var meio = document.querySelector('p#meio')       
function adi(){
    if (inpu.value.length == 0){
        alert('[ERRO] Você deve inserir um valor.')
    }
    else if (inpu.value == 0){
        alert('[ERRO] O valor não pode ser zero.')
        inpu.value = ''
        inpu.focus()
    }
    else{
        list.push(Number(inpu.value))
        meio.innerHTML += `O valor ${Number(inpu.value)} foi adicionado<br>`
        inpu.value = ''
        inpu.focus()
    }
} 
function fin(){ 
    if (list.length == 0){
        alert('[ERRO] Você deve inserir algum valor.')
    }
    else {
        const max = Math.max(...list)
        const min = Math.min(...list)
        var cont = 0
        var soma = list.reduce(function(soma, i){
            return soma + i
        })
        var media = soma / list.length
        result.innerHTML = `No total, foram adicionados ${list.length} valores.<br><br>`
        result.innerHTML += `O maior número informado foi ${max}.<br><br>`
        result.innerHTML += `O menor número informado foi ${min}.<br><br>`
        result.innerHTML += `A soma de todos os números foi ${soma}<br><br>`
        result.innerHTML += `A média dos valores é ${media.toFixed(2)}`
    }
}
function limp(){
    if (list.length == 0){
        alert('[ERRO] Não há valores para limpar.')
    }
    else{
        result.innerHTML = ''
        meio.innerHTML = ''
        list.length = 0
    }
}
