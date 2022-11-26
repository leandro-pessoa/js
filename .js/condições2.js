var idade = 71
if (idade < 16){
    console.log('não pode votar')
}
else if(idade < 18 || idade > 70){
    console.log('voto facultativo')
}
else {
    console.log('voto obrigatório')
}