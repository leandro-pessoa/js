function action(arg){
    if(arg == 0 || arg == 1 || arg == 2 || arg == 3 || arg == 4 || arg == 5 || arg == 6 || arg == 7 || arg == 8 || arg == 9 || arg == 'x' || arg == '+' || arg == '-' || arg == '^' || arg == '/' || arg == 'c' || arg == 'back'){
        document.querySelector('div#res').value += arg
    }
}