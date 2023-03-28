
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        center: true,
        nav: true,
        navtext:[
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-rigth'></i>",
        ],
        
        responsive:{
            0:{
                items:1,
               
            },
            990:{
                items:3,
                
            },
            
        }
    })
})
