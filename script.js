const hamburgerMenu = document.querySelector('.hamburgerMenu')
const nav = document.querySelector('nav')

hamburgerMenu.addEventListener('click', () =>{
    nav.classList.toggle('active')
    hamburgerMenu.classList.toggle('active')
    if(hamburgerMenu.classList.contains('active')){
        document.body.style.overflow = 'hidden'
    }else{
        document.body.style.overflow = 'auto' 
    }
});





