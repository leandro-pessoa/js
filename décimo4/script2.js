function cli(){  
    var ini = document.getElementById('inicio')
    var pas = document.getElementById('pas')
    var fim = document.getElementById('fim')
    var result = document.getElementById('result')
    var i = Number(ini.value)
    var p = Number(pas.value)
    var f = Number(fim.value)
    if (ini.value.length == 0 || pas.value.length == 0 || fim.value.length == 0){
        alert('[ERRO] Não deixe o(s) espaço(s) vazio(s).')
    } else {
        if (p <= 0){
            alert('[ERRO] Passo inválido. Considerando passo 1')
            p = 1
        }
        result.innerHTML = `Contando: <br>`
        if(i < f){
            for(i; i <= f; i += p){
                result.innerHTML += `${i} `
            }
        }
        else{
            for(i; i >= f; i -= p){
                result.innerHTML += `${i} `
            }   
        }
    }
}
