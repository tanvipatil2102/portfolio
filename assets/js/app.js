let cl = console.log;

let navbar = document.getElementById('navBar');
let changecolor = [...document.querySelectorAll(".changeColor")];


const onscroll = () => { 
    let scrollValue = window.scrollY;
    cl(scrollValue);
   if(scrollValue < 120){
    navbar.classList.remove("bg-light");
    changecolor.forEach(ele=>{
        ele.classList.remove("color-primary")
    })
   }else{
    navbar.classList.add("bg-light");
    changecolor.forEach(ele=>{
        ele.classList.add("color-primary")
    })
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