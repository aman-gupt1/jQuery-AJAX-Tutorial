$(document).ready(function(){

    $("#hideBtn").click(function(){
        $("#box").hide();
    });

    $("#showBtn").click(function(){
        $("#box").show();
    });

    $("#toggleBtn").click(function(){
        $("#box").toggle();
    });

    $("#fadeOutBtn").click(function(){
        $("#box").fadeOut();
    });

    $("#fadeInBtn").click(function(){
        $("#box").fadeIn();
    });

    $("#fadeToggleBtn").click(function(){
        $("#box").fadeToggle();
    });

    $("#slideUpBtn").click(function(){
        $("#box").slideUp();
    });

    $("#slideDownBtn").click(function(){
        $("#box").slideDown();
    });

    $("#slideToggleBtn").click(function(){
        $("#box").slideToggle();
    });

    $("#animateBtn").click(function(){

        $("#box").animate({
            left: "300px",
            width: "300px",
            height: "150px"
        });

    });

    $("#stopBtn").click(function(){

        $("#box").stop();

    });

});