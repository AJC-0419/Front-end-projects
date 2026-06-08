function addTask(text) {
    const box = document.getElementById("tdbox");
    const taskbox = document.createElement("div");
    taskbox.className = "boxinsert";

    const check = document.createElement("input");
    check.type = "checkbox";
    check.name = "task";
    check.id = "taskelem";

    const inp = document.createElement("input");
    inp.type = "text";
    inp.value = text;
    inp.placeholder = "insert text here";

    const del = document.createElement("input");
    del.type = "button";
    del.value = "✖";
    del.id = "rem";
    del.onclick = function () {
        taskbox.remove();
    };

    taskbox.appendChild(check);
    taskbox.appendChild(inp);
    taskbox.appendChild(del);
    box.appendChild(taskbox);
}

const inputtask = document.getElementById("new-task");
inputtask.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        const text = inputtask.value;
        if (!text) {
            return;
        }

        addTask(text);
        inputtask.value = "";
    }
});



