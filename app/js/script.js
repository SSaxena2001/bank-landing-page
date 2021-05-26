const btnHam=document.querySelector('#btnHamburger');
const body=document.querySelector('body');
const header=document.querySelector('.header');
const overlay=document.querySelector('.overlay');
const fadeElems=document.querySelectorAll('.has-fade');
btnHam.addEventListener('click',()=>{
    if(header.classList.contains('open')){ //close menu
        body.classList.remove('noscroll');
        header.classList.remove('open');
        fadeElems.forEach((element)=>{
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
    } else { //open menu
        body.classList.add('noscroll');
        header.classList.add('open');
        fadeElems.forEach((element)=>{
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });
    }
});