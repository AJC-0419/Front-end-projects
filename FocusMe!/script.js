function addTask() {
    const box = document.getElementById("tdbox");

    const taskbox = document.createElement("div");
    taskbox.className = "boxinsert";

    const check = document.createElement("input");
    check.type = "checkbox";
    check.name = "task";
    check.id = "taskelem";

    const inp = document.createElement("input");
    inp.type = "text";
    inp.placeholder = "insert text here";

    const del = document.createElement("input");
    del.type = "submit";
    del.value = "delete";
    del.id = "rem"
    del.onclick = function () {
        taskbox.remove();
    };
    taskbox.appendChild(check);
    taskbox.appendChild(inp);
    taskbox.appendChild(del);
    box.appendChild(taskbox);
}

document.getElementById("add").addEventListener("click", addTask);

