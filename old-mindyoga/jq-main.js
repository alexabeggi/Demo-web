$(document).ready(function(){
    
    //---------------OPENING---------------

    $(function() {
        var pause = 500;
        setInterval(function() {
            //$('#opening').fadeOut(3000);
            $('.opening').slideUp(1700, function(){
                $('.MY').animate({'opacity': "1"}, 700);
            });
        },pause);
    });
    
    //---------------SLIDER---------------
    $(function () {
        var width = 430;
        var animationSpeed = 1000;
        var pause = 3000;
        var currentSlide = 1;
        
        setInterval(function() {
            $('.slider .slides').animate({'margin-left': '-='+width}, animationSpeed, function (){
                currentSlide++;
                if (currentSlide === $('.slider .slide').length){
                //back to the first slide
                currentSlide = 1;
                $('.slider .slides').css('margin-left', 0);
                }
            });
        }, pause);

    });

    //---------------DROPDOWN MENU (HELP)---------------
    $('.dropdown').hide();
    $('.help').click(function(){ 
        $('.dropdown').slideToggle(500);
        });


});