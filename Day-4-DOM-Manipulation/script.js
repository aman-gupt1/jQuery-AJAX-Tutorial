$(document).ready(function () {

    // text()

    $("#changeHeading").click(function () {

        $("#heading").text("DOM Updated Successfully");

    });

    // append()

    $("#addBtn").click(function () {

        let skill = $("#name").val();

        if(skill !== ""){

            $("#list").append(
                `<li>${skill}</li>`
            );

            $("#name").val("");

        }

    });

    // empty()

    $("#clearBtn").click(function () {

        $("#list").empty();

    });

    // before()

    $("#heading").before(
        "<p>This paragraph is added before heading.</p>"
    );

    // after()

    $("#heading").after(
        "<p>This paragraph is added after heading.</p>"
    );

});