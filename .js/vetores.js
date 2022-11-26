let n = [1, 2 ,3]
//acrescentando valores 
n[3] = 7
n.push(6)
n.push(4, 5)
console.log(n)
//tamanho do vetor
var tam = n.length
console.log(`o vetor n tem ${tam} elementos`)
//colocando em ordem
var ord = n.sort()
console.log(ord)
//selecionando itens
console.log(`o primeiro valor de n é: ${n[0]}`)
//utilizando repetições junto com o vetor
for (var pos = 0; pos <= n.length; pos++){
    console.log(`A posição ${pos} tem valor ${n[pos]}`)
}
//essa daí de cima de maneira mais simplificada
for (var pos in n){
    console.log(`A posição ${pos} tem valor ${n[pos]}`)
}
//buscando valores no vetor (retorna a posição do elemento) (se o valor não existir, retornará -1)
var bus = n.indexOf(4)
console.log(`O valor 4 está na posição ${bus}`)