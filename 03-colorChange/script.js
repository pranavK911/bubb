let btn=document.querySelector('#new-colour-button');
let currentcolr=document.querySelector('#current-colour');


btn.addEventListener('click',()=>{
    let hex=`#${Math.random().toString(16).slice(2,8).padEnd(6,0)}`;
    // console.log(hex);
    document.body.style.backgroundColor = hex;
   currentcolr.textContent=hex;
})