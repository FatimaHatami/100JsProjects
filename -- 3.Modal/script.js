const btn=document.querySelector('.btn');
const modal=document.querySelector('.modal');
const closebtn=document.querySelector('.close-btn')

btn.addEventListener('click',openModal);
closebtn.addEventListener('click',closeModal);
modal.addEventListener('click',closeModal);

function openModal(){
    modal.style.display="block";
}
function closeModal(){
    modal.style.display="none";
}

