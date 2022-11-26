var eu = {nome: 'Leandro', idade: 18, sexo: 'M', dinheiro: 100, reais(a=0){
    console.log('Ganhou')
    this.dinheiro += a
}}
eu.reais(300)
console.log(`Eu tenho ${eu.dinheiro} reais.`)
