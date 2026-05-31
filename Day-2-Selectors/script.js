$(document).ready(function () {

    $("#btn").click(function () {

        // ID Selector
        $("#heading").css("color", "blue");

        // Class Selector
        $(".para").css("font-size", "20px");

        // Element Selector
        $("p").css("background-color", "lightyellow");

        // Attribute Selector
        $("input[type='text']").css("border", "2px solid green");

        // Descendant Selector
        $("#container p").css("color", "red");

        // First Selector
        $("p:first").css("font-weight", "bold");

        // Last Selector
        $("p:last").css("text-decoration", "underline");

    });

});