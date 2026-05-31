$(document).ready(function(){

    // Add Task

    $("#addBtn").click(function(){

        let task = $("#taskInput").val().trim();

        if(task === ""){
            alert("Please enter a task");
            return;
        }

        let listItem = `
            <li>
                <span class="task-text">${task}</span>

                <button class="delete-btn">
                    Delete
                </button>
            </li>
        `;

        $("#taskList").append(listItem);

        $("#taskInput").val("");

    });

    // Mark Completed

    $(document).on("click",".task-text",function(){

        $(this).toggleClass("completed");

    });

    // Delete Task

    $(document).on("click",".delete-btn",function(){

        $(this).parent().remove();

    });

    // Clear All Tasks

    $("#clearBtn").click(function(){

        $("#taskList").empty();

    });

});