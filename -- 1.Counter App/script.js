const count = document.querySelector('.count');
const substract = document.querySelector('.substract');
const resetCount = document.querySelector('.reset');
const add =  document.querySelector('.add');
const buttons = document.querySelector('.buttons');
buttons.addEventListener('click', (e)=>{
if(e.target.classList.contains('add')){
    count.innerHTML++;
    setColor();
}
if(e.target.classList.contains('reset')){
    count.innerHTML= 0;
    setColor();
}
if(e.target.classList.contains('substract')){
    count.innerHTML--;
    setColor();
}
});

function setColor(){
    if(count.innerHTML>0){
        count.style.color="yellow";
    }
    else if(count.innerHTML<0){
        count.style.color="orangered";
    }
    else{
        count.style.color="white";
    }
}
