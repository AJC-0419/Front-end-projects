

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
   const check = numAdd.id;
   let Curr = parseInt(numAdd.textContent);
  switch(check){
   case "num1":
      if (Curr == 24){
          numAdd.textContent = "00 hrs";
      }
      else{
         Curr++;
         if (Curr < 10){
         numAdd.textContent = "0" + Curr  +" hrs";
         }
         else{
         numAdd.textContent = Curr+" hrs";
         }
      }
      break;
   case "num2":
      if (Curr == 60){
          numAdd.textContent = "00"+" mins";
      }
      else{
          Curr++;
         if (Curr < 10){
         numAdd.textContent = "0" + Curr +" mins";
         }
         else{
         numAdd.textContent = Curr+" mins";
         }
      }
       break;
   case "num3":
      if (Curr == 60){
          numAdd.textContent = "00"+" secs";
      }
      else{
         Curr++;
         if (Curr < 10){
         numAdd.textContent = "0" + Curr +" secs";
         }
         else{
         numAdd.textContent = Curr + " secs";
         }
      }
       break;
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



