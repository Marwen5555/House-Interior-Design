let stroke = document.querySelector(".fa-circle-half-stroke");
let body = document.querySelector("body");

stroke.addEventListener("click", function (){
    body.classList.toggle("modeChange");
});

window.addEventListener('scroll', function(){
    if(window.scrollY>350){
        stroke.style.display='block' ;
    } else{
        stroke.style.display='none' ;   
    }
});

let navMenu= document.querySelector(".mobile-Menu");
let burgerMenu= document.querySelector(".burgerMenu");

burgerMenu.addEventListener('click', function(){
navMenu.classList.toggle('classlistnavMenuOne');
navMenu.classList.toggle('classlistnavMenuTwo');
body.classList.toggle('bodyClasslit');
    
});

let faxmark= document.querySelector('.fa-xmark');

faxmark.addEventListener('click', function(){
    navMenu.classList.remove('classlistnavMenuOne');
    navMenu.classList.remove('classlistnavMenuTwo');
    body.classList.remove('bodyClasslit');
});

let ankerLinks = document.querySelectorAll('.mobile-Menu a');

ankerLinks.forEach(function(ele){
ele.addEventListener('click', function(){
    body.classList.remove('bodyClasslit');
    navMenu.classList.remove('classlistnavMenuOne');
    navMenu.classList.remove('classlistnavMenuTwo');
});
});
