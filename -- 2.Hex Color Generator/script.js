const hex=document.querySelector('.hex');
const generate=document.querySelector('.generate');

const generateColor=()=>{
    const randomNumber=Math.random().toString(16).substring(2,8);
    const color=`#${randomNumber}`
    hex.innerHTML=color;
    document.body.style.backgroundColor=color;
}
generate.addEventListener('click',generateColor);