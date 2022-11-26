/*
function a (arg1, arg2){
    console.log(`De 0 a ${arg1} com o passo de ${arg2}`)
    for (a = 0; a <= arg1; a += arg2){
        console.log(a)
    }
}
a(50, 5)
*/
/*
function parimp (arg){
    if (arg % 2 == 0){
        console.log(`O número ${arg} é par.`)
    }
    else{
        console.log(`O número ${arg} é ímpar.`)
    }
}
parimp(1)
*/
/*
function parimp2 (arg){
    if (arg % 2 == 0){
        return 'Par'
    }
    else{
        return 'Ímpar'
    }
}
var a = parimp2(23)
console.log(a)
*/
/*
//pré-definição de parâmetros (se não houver parâmetro, ele considera como se fosse 0)
function soma (n1=0, n2=0){
    return n1 + n2
}
console.log(soma(20))
*/
/*
//função dentro de uma variável
var func = function dobro (arg){
    return arg*2
}
console.log(func(10))
*/
/*
//fatorial com uma função
function fatorial (arg){
    cont = 1
    for(arg; arg > 1; arg -= 1){
        cont *= arg
    }
    return cont
}
console.log(fatorial(5))
*/
//recursividade (usar a mesma função dentro dela)
function fatorial (arg){
    if (arg == 1){
        return 1
    }
    else{
        return arg * fatorial(arg - 1)
    }
}
console.log(fatorial(7))