const display =document.getElementById('result');
function clickCounter(){
    if (typeof(Storage) !== "undefined"){
        if (localStorage.clickcount){
            localStorage.clickcount= Number(localStorage.clickcount)+1;
        }
        else{
            localStorage.clickcount =1;
        }
        display.innerHTML =localStorage.clickcount;
    }
}