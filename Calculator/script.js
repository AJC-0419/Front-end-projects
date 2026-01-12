let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let button4 = document.getElementById("button4");
let button5 = document.getElementById("button5");
let button6 = document.getElementById("button6");
let button7 = document.getElementById("button7");
let button8 = document.getElementById("button8");
let button9 = document.getElementById("button9");
let button0 = document.getElementById("button0");
let clear = document.getElementById("clear");
let percent = document.getElementById("percent");
let countClear = 0;
let newCountClear = 0;
let calcNums =[];
let calcTest = [];
function append(value) {
    
    if (countClear == 0){
        document.getElementById("display").innerText = "";
        countClear = 1;
        document.getElementById("display").innerText += value;
        document.getElementById("display").style.paddingTop = "70px";
    }
    else{
        document.getElementById("display").innerText += value;
        document.getElementById("display").style.fontSize = "60px";
        document.getElementById("display").style.paddingTop = "70px";
    }
}

function clearScreen(){
    countClear = 0;
    document.getElementById("display").innerText = "0";
}

/*Basic Operations*/
function addFunc(){
    calcTest[0] = true;
    calcNums[0] = Number(document.getElementById("display").innerText);
    document.getElementById("display").innerText = "";
    
}

function subFunc(){
    calcTest[1] = true;
    calcNums[0] = Number(document.getElementById("display").innerText);
    document.getElementById("display").innerText = "";
    
}

function mulFunc(){
    calcTest[2] = true;
    calcNums[0] = Number(document.getElementById("display").innerText);
    document.getElementById("display").innerText = "";
    
}
function perFunc(){
    calcTest[3] = true;
    calcNums[0] = Number(document.getElementById("display").innerText);
    document.getElementById("display").innerText = "";
    
}

/*End of Basic Operations (found in calculator)*/


function calcResult(){
    let resNum;
    calcNums[1] = Number(document.getElementById("display").innerText);
    document.getElementById("display").innerText = "";
    if (calcTest[0]){
        resNum = (calcNums[0] + calcNums[1]);
        document.getElementById("display").innerText += resNum;
    }

    else if (calcTest[1]){
        resNum = (calcNums[0] - calcNums[1]);
        document.getElementById("display").innerText += resNum;
    }
    else if (calcTest[2]){
        resNum = (calcNums[0] * calcNums[1]);
        document.getElementById("display").innerText += resNum;
    }
    else{
        resNum = (calcNums[0] % calcNums[1]);
        document.getElementById("display").innerText += resNum;
    }
    

}

