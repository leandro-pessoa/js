let keys = document.querySelectorAll('.key');

const tocarNota = (evento) => {
    let audioKeyCode = getKeyCode(evento);
    const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`);
    const keyExists = key;
    if(!keyExists){
        return;
    }
    efeito(key);
    playAudio(audioKeyCode);
}
const getKeyCode = (evento) => {
    let keyCode;
    const isKey = evento.type === 'keydown';
    if(isKey){
        keyCode = evento.keyCode;
    }
    else{
        keyCode = evento.target.dataset.key;
    }
    return keyCode;
}
const efeito = (key) => {
    key.classList.add('tocar');
}
const retirarEfeito = (evento) => {
    evento.target.classList.remove('tocar');
}
const playAudio = (audioKeyCode) => {
    const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`);
    audio.currentTime = 0;
    audio.play();
}
function init(){
    keys.forEach(function(key){
        key.addEventListener('click', tocarNota);
        key.addEventListener('transitionend', retirarEfeito);
    })
    window.addEventListener('keydown', tocarNota);
}
window.addEventListener('load', init);
