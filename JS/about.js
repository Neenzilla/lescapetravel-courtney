// jQuery syntax:
// https://www.w3schools.com/jquery/jquery_syntax.asp


// Nav animations
$(document).ready(function(){

    $(".fa-bars").click(function(){
        $(this).toggleClass("fa-times");
        $(".nav").toggleClass("nav-toggle");
    });

    $(window).on("load scroll", function(){
        $(".fa-bars").removeClass("fa-times");
        $(".nav").removeClass("nav-toggle");
    });
});


// Carousel Bootstrap util.js file
    // Source: https://getbootstrap.com/docs/4.5/getting-started/javascript/#util
    $('.carousel').carousel({
        interval: 3000,
        pause: "false"
      });