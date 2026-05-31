$(document).ready(function(){

    // Click Event
    $("#btn").click(function(){

        alert("Button Clicked");

    });

    // Double Click Event
    $("#btn").dblclick(function(){

        console.log("Double Clicked");

    });

    // Mouse Enter
    $("#box").mouseenter(function(){

        $(this).css("background","yellow");

    });

    // Mouse Leave
    $("#box").mouseleave(function(){

        $(this).css("background","lightblue");

    });

    // Key Up
    $("#name").keyup(function(){

        console.log($(this).val());

    });

    // Focus
    $("#name").focus(function(){

        $(this).css("border","2px solid green");

    });

    // Blur
    $("#name").blur(function(){

        $(this).css("border","1px solid black");

    });

    // Change
    $("#course").change(function(){

        alert("Selected: " + $(this).val());

    });

    // Submit
    $("#myForm").submit(function(event){

        event.preventDefault();

        alert("Form Submitted Successfully");

    });

});