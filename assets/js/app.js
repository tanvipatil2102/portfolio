let cl = console.log;

let navar = document.getElementById('navBar');

function onscroll () { 
    let scrollValue = window.scrollY;
   if(scrollValue < 20){
    navar.classList.remove("bg-light")
   }else{
    navar.classList.add("bg-light")
   }
};

window.addEventListener("scroll", onscroll);

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})