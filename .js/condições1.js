//var vel = 50
//if(vel > 80){
//    console.log('Você ultrapassou a velocidade máxima. Multado')
//}
//else{console.log('tá de boa (ou não)')}
var idade = 30
if (idade < 18){
    console.log('Inelegível')
}
else{
    if(idade >= 18){
        console.log('Pode se candidatar a vereador')
    }
    if(idade >= 21){
        console.log('Pode se candidatar a deputado estadual, distrital ou federal')
    }
    if(idade >= 30){
        console.log('pode se candidadatar a gavernador ou vice')
    }
    if(idade >= 35){
        console.log('Pode se candidatar a PR, vice-PR ou senador')
    }
    if (idade > 35){
    console.log('Pode se candidatar a qualquer cargo político (no quesito idade)')
    }
}