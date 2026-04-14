

function addTask() {
    const box = document.getElementById("tdbox");
    box.get
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

function addNum(num){
   const numAdd =  document.getElementById(num);
   let Curr = parseInt(numAdd.textContent);
   Curr++;
   if (Curr < 10){
    numAdd.textContent = "0" + Curr;
   }
   else{
     numAdd.textContent = Curr;
   }
}

function subNum(num){
   const numAdd =  document.getElementById(num);
   let Curr = parseInt(numAdd.textContent);
    if (Curr > 0) {
      Curr--;
   }
   if (Curr < 10) {
      numAdd.textContent = "0" + Curr;
   } else {
      numAdd.textContent = Curr;
   }
}


document.getElementById("add").addEventListener("click", addTask);



