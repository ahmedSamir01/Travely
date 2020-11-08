/*global console, $*/

$(function () {
    
    "use strict";
    
    // trigger WOW
    new WOW().init();
    
    
    // colors option functionality
    $(".colors img, .colors2 img").on("click", function() {
        $(this).addClass("active").siblings().removeClass("active")
    });
    
    
    // nav settings
    $("nav ul li").on("click", function () {

        $(".navbar-collapse").removeClass("show");
        $("body, html").animate({
           
            scrollTop: $("." + $(this).children().data('scroll')).offset().top
            
        }, 1000);
        
    });
    
    
    // sync chevron  
    $(window).on("scroll load", _ => {
       
        if ($(this).scrollTop() > 1000) {
            
            $(".chevron").fadeIn(500);
            
        } else {
            
            $(".chevron").fadeOut(500);
        }
        
    });
    
    
    // chevron funcionality
    $(".chevron").on("click", function () {
        
        $("body, html").animate({
           
            scrollTop: 0
            
        }, 1000);
        
    });
    
     
});




























   