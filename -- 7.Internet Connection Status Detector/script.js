// VARIABLES
const image=document.getElementById('connection-img');
const statusH=document.querySelector('.status1');
const statusP=document.querySelector('.status2');
const refreshBtn=document.querySelector('.refresh');

async function connectionStatus(){
    try{
        const fetchResult= await fetch('https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Jennifer_Aniston_08.jpg/90px-Jennifer_Aniston_08.jpg? time='+ 
        (new Date()).getTime());
        image.src="./images/rainbow.png";
        statusH.textContent = "Whoopee";
        statusP.textContent="You're online";
        return fetchResult.status>=200 && fetchResult.status<300;

    }catch(error){
        statusH.textContent="Whoops!";
        statusP.textContent="No Internet connection found. Check your connection or try again."
        image.src="./images/thunder.png";
    }
};

// Connection monitoring
setInterval(async () =>{
    const result = await connectionStatus();
    if(result){
        statusH.textContent="Whoopee";
        statusP.textContent="You're online";
    }
},5000);




// Check the connection when page loads
window.addEventListener('load',async (event)=>{
    if(connectionStatus()){
        statusP.textContent="Checking Internet Status";
    }
    else{
        statusP.textContent="No Internet connection found. Check your connection or try again.";
    }
})