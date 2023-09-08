const bar = document.querySelector('#bar');
const close = document.querySelector('#close')
const navbar = document.querySelector('#navbar')
if(bar){
    bar.addEventListener('click', function(){
        navbar.classList.add('active')
    })

}
if(close){
    close.addEventListener('click', function(){
        navbar.classList.remove('active')
    })

}
   
