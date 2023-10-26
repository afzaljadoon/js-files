$(document).ready(function(){
    // Hero slider
    $('#hero-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:false,
        items:1,
        smartSpeed:1000,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        navText : ['PREV', 'NEXT'],
        responsive:{
            0:{
                nav:false
            },
            768:{
                nav:true
            }
        }
    })

   // PROJECT SLIDER 
   $('#project-slider').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots:false,
    smartSpeed: 1000,
    margin: 24,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    navText : ['PREV', 'NEXT'],
    responsive : {
        0: {
            items: 1,
            nav: false,
            margin: 0,
        },
        768: {
           items: 2,
        },
        1140: {
            items: 2,
            center: true,
        }
    }
   })
    //  REVIEW SLIDER
    $('#reviews-slider').owlCarousel({
        loop: true,
        margin : 10,
        nav: false,
        dots: true,
        items : 1,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
    })
});
