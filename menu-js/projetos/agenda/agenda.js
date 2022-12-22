let txt = document.querySelector('textarea#itxt');
let ad = document.querySelector('button#ad');
let div = document.querySelector('div#content');
ad.addEventListener('click', e => {
    if (txt.value.length == 0){
        alert('Insira valores antes de prosseguir!');
    }
    else{
        div.innerHTML += `<article id="save">
        <span class="trash-box">
            <button id="lixo">
                <img src="imagens/delete-png.png" alt="Apagar item fixado">
            </button>
        </span>
        <span class="texto">
            ${txt.value}
        </span>
    </article>`;
        txt.value = '';
        txt.focus();
    }
});