$(document).ready(function(){

    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        // Allows nav bar to connect w/ hamburger menu
        $('.nav').toggleClass('nav-toggle');
    });

    $(window).on('load scroll', function(){

        $('.fa-bars').removeClass('fa-times');
        $('.nav').removeClass('nav-toggle');

    });

});