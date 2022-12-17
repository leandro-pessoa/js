class carro{
    constructor(nome, marca, ano){
        this.nome = nome;
        this.marca = marca;
        this.ano = ano;
    }
    idade(){ //função dentro da classe
        let data = new Date();
        return data.getFullYear() - this.ano;
    }
}
let meu_carro = new carro("Civic", "Honda", 2010);
console.log(
    `Meu carro é o modelo ${meu_carro.nome} da marca ${meu_carro.marca} ano ${meu_carro.ano}.`
) 
console.log(`Meu carro tem ${meu_carro.idade()} anos.`)