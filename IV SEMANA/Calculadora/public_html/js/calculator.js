/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var dots = 0;
var v1 = 0;
var v2 = 0;
var operation = "";

function keyClicked(v){
    if(typeof v === "number")
        appendNumber(v);
    else
        makeAction(v);
}

function appendNumber(v){
    var view = document.getElementById("view");
    view.innerHTML += v;
}

function makeAction(v){
    switch (v) {
        case "C":
            clear();
        break;
        case "•":
            controlDot();
        break;
        case "+":
            document.getElementById("view").innerHTML += "+";
        break;
        case "-":
            document.getElementById("view").innerHTML += "-";
        break;
        case "/":
            document.getElementById("view").innerHTML += "/";
        break;
        case "*":
            document.getElementById("view").innerHTML += "*";
        break;
        case "=":
            evaluate();
        break;
    }
        
}

function clear(){
    document.getElementById("view").innerHTML = "";
    if(dots > 0)
        dots--;
}

function controlDot(){
    if(dots === 0 && document.getElementById("view").innerHTML === ""){
        document.getElementById("view").innerHTML += "0.";
        dots++;
    }
    else if(dots === 0 && document.getElementById("view").value !== ""){
        document.getElementById("view").innerHTML += ".";
        dots++;
    }
}

function evaluate(){
    var r = eval(document.getElementById("view").innerHTML);
    document.getElementById("view").innerHTML = r;
    if(dots > 0)
        dots--;
}


