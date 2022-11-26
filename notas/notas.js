var inp = document.getElementById('inp')
var result1 = document.getElementById('result1')
var result2 = document.getElementById('result2')
var min = document.getElementsByName('min')
var sel = document.getElementById('sel')
list = []

function adicionar(){
    if (inp.value.length == 0){
        alert('Você deve colocar algum número')
    }
    else{
        list.push(Number(inp.value))
        var item = document.createElement('option')
        item.text = `${Number(inp.value)}`
        sel.appendChild(item)
        inp.value = ''
        inp.focus()

    }
}
function gerar(){
    var soma = list.reduce(function(soma, i){
        return soma + i
    })
    media = soma / list.length
    result1.innerHTML = media.toFixed(2)
    if(min[0].checked){
        if(media < 5){
            result2.innerHTML = 'Reprovado'
        }
        else{
            result2.innerHTML = 'Aprovado'
        }
    }
    if(min[1].checked){
        if(media < 6){
            result2.innerHTML = 'Reprovado'
        }
        else{
            result2.innerHTML = 'Aprovado'
        }
    }
    if(min[2].checked){
        if(media < 7){
            result2.innerHTML = 'Reprovado'
        }
        else{
            result2.innerHTML = 'Aprovado'
        }
    }
    
}
function limpar(){
    if(list.length == 0){
        alert('Não há valores para limpar.')
    }
    else{
        list.length = 0
        sel.length = 0
        inp.value = ''
        result1.innerHTML = '...'
        result2.innerHTML = '...'
        inp.focus()
    }
}
