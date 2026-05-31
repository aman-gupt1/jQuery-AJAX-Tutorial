$(document).ready(function(){

    // Loader Start

    $(document).ajaxStart(function(){

        $("#loader").show();

    });

    // Loader Stop

    $(document).ajaxStop(function(){

        $("#loader").hide();

    });

    // Fetch Users

    $("#loadUsers").click(function(){

        $("#userList").empty();

        $.ajax({

            url: "https://jsonplaceholder.typicode.com/users",

            method: "GET",

            success: function(users){

                users.forEach(function(user){

                    $("#userList").append(
                        `<li>
                            ${user.name}
                            (${user.email})
                        </li>`
                    );

                });

            },

            error: function(){

                alert("Failed to Load Users");

            }

        });

    });

});