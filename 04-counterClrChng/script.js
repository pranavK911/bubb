let number=document.querySelector('#counterDisplay');
let addbtn=document.querySelector('#counterAdd');
let subbtn=document.querySelector('#counterSub');


let total=0;
function displaynumber(){
    if(total>20){
        total=20;
    }
    else if(total<0){
        total=0;
    } 
    number.textContent=total;
    document.body.style.setProperty('background-color', `rgb(${(total / 20) * 255}, 64, 0)`)
};
   
addbtn.addEventListener('click',()=>{
    total+=1;
    displaynumber()
})
subbtn.addEventListener('click',()=>{
    total-=1;
    displaynumber()
})