
let getDados = () => JSON.parse(localStorage.getItem('todoList')) ?? [];
let setDados = (banco) => localStorage.setItem('todoList', JSON.stringify(banco));
let criarSave = (tarefa, stat='', indice) => {
    let item = document.createElement('label');
    item.classList.add('label');
    item.innerHTML = `
    <article id="save">
    <input type="checkbox" ${stat} data-indice=${indice}>
    <span class="trash-box">
        <button data-indice=${indice} type="button">X</button>
    </span>
    <span class="texto">${tarefa}</span>
    `;
    document.querySelector('div#content').appendChild(item);
};
let limparTarefas = () => {
    let container = document.querySelector('div#content');
    while (container.firstChild){
        container.removeChild(container.lastChild);
    }
}

let render = () => {
    limparTarefas();
    let dados = getDados();
    dados.forEach((item, indice) => criarSave(item.tarefa, item.stat, indice));
}

let adItem = (evento) => {
    let dados = getDados();
    let tecla = evento.key;
    let txt = document.querySelector('input#itxt');
    if(tecla === 'Enter'){  
        if(txt.value == 0){
            alert('Insira valores antes de prosseguir!')
        }
        else{
            let dados = getDados(); 
            dados.push({"tarefa" : txt.value, "stat" : ""});
            setDados(dados);
            txt.value = '';
            txt.focus();
            render();
        }
    }
};

let removerItem = (indice) => {
    let dados = getDados();
    dados.splice (indice,1);
    setDados(dados);
    render();
};
let atualizarItem = (indice) => {
    let dados = getDados();
    dados[indice].stat = dados[indice].stat === 'checked' ? '' : 'checked';
    setDados(dados);
    render();
}
let clickItem = (evento) => {
    let element = evento.target;
    if (element.type === 'button'){
        let indice = element.dataset.indice;
        removerItem(indice);
    }
    else if(element.type === 'checkbox'){
        let indice = element.dataset.indice;
        atualizarItem(indice);
    }
};
let txt = document.querySelector('input#itxt');
txt.addEventListener('keypress', adItem);
document.querySelector('div#content').addEventListener('click', clickItem);

document.querySelector('button#ad').addEventListener('click', e => {
    if (txt.value == 0){
        alert('Insira valores antes de prosseguir!');
    }
    else{
        let dados = getDados(); 
        dados.push({"tarefa" : txt.value, "stat" : ""});
        setDados(dados);
        txt.value = '';
        txt.focus();
        render();
    }
});
render();

