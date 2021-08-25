// Variables
const coupon=document.querySelector('.input-text');
const btn=document.querySelector('.btn');

//functions

const copyCoupon=(e)=>{
    e.preventDefault();
    coupon.select();
    coupon.setSelectionRange(0,1000);
    document.execCommand('copy');
    btn.textContent="Copied!";
    setTimeout(()=>{
        btn.textContent="Copy";
    },3000);
}

btn.addEventListener('click',copyCoupon);