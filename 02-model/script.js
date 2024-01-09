let modelbtn=document.querySelector("#openModal");
let modelbdy=document.querySelector(".modal");
let modaldiv =document.querySelector(".modal__content");

modelbtn.addEventListener("click",()=>{
    modelbdy.classList.add('open');
});
modaldiv.addEventListener('click',()=>{
    modelbdy.classList.remove('open');
});
