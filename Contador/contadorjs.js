var result = document.querySelector('div#result')
var cont = 0
var sel = document.getElementsByName('sel')
    function aumentar(){
        var au = document.querySelector('input#aume')
        au.onclick = function(){
            if(sel[0].checked){
                cont += 1
            }
            else if(sel[1].checked){
                cont += 5
            }
            else if(sel[2].checked){
                cont += 10
            }
            else{
                cont += 100
            }
            result.innerHTML = cont
            result.style.color = 'green'
        }    
    }
    function decrementar(){
        var dec = document.querySelector('input#decre')
        dec.onclick = function(){
            if (sel[0].checked){
                cont -= 1
            }
            if (sel[1].checked){
                cont -= 5
            }
            if (sel[2].checked){
                cont -= 10
            }
            if (sel[3].checked){
                cont -= 100
            }  
            result.innerHTML = cont
            result.style.color = 'red'
        }
    }
    function resetar(){
        if(cont == 0){
            alert('[ERRO] O valor já está zerado.')
        }
        else{
            document.querySelector('input#rese')
            cont = 0
            result.innerHTML = 0
            result.style.color = 'yellow'
        }
    }
