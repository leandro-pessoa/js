let but = document.getElementById("but");
let size = '300px';
let open = true;
let nav = document.getElementById("nav");
let fechar = document.querySelector("button#fechar");
but.addEventListener('click', e => {
    open = !open;
    if(open == true){
        nav.style.width = 0;
    }
})
but.addEventListener('click', e => {
    if(open == false){
        nav.style.width = `${size}`;
    }
})
fechar.addEventListener('click', e => {
    nav.style.width = 0;
    open = !open;
})

