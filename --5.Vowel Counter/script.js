// Variables
const word=document.querySelector('.input-text');
const btn=document.querySelector('.btn');
const result=document.querySelector('.result');
// Events
btn.addEventListener('click', vowelCounter);
// Functions
function vowelCounter(){
    let counter=0;
    let vowels='';
    const wordVal=word.value.toLowerCase();
    for (w of wordVal){
        if(w.match(/([a,e,o,u,i])/)){
            counter++;
            vowels+= w +" ";
        }
    }
    result.innerHTML=counter + ' ' + vowels;
}