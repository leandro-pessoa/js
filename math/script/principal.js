let but = document.getElementById("but");
let size = '300px';
let open = true;
let nav = document.getElementById("nav");
let fechar = document.querySelector("button#fechar");
let content = document.querySelector("span.nav-content");
function block(){
    content.style.display = 'block';
}
but.addEventListener('click', e => {
    open = !open;
    if(open == true){
        nav.style.width = 0;
    }
})
but.addEventListener('click', e => {
    if(open == false){
        setTimeout(block, 1000*0.13);
        nav.style.width = `${size}`;
    }
    content.style.display = 'none';
})
fechar.addEventListener('click', e => {
    content.style.display = 'none'
    nav.style.width = 0;
    open = !open;
})

