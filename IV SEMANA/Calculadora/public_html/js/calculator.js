/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var dots = 0;

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
            if(dots > 0)
                dots--;
        break;
        case "-":
            document.getElementById("view").innerHTML += "-";
            if(dots > 0)
                dots--;
        break;
        case "/":
            document.getElementById("view").innerHTML += "/";
            if(dots > 0)
                dots--;
        break;
        case "*":
            document.getElementById("view").innerHTML += "*";
            if(dots > 0)
                dots--;
        break;
        case "=":
            evaluate();
        break;
    default:
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
    try{
        var r = eval(document.getElementById("view").innerHTML);
        document.getElementById("view").innerHTML = r;
        if (dots > 0)
            dots--;
    }catch(e){
        alert("Invalid math expression");
        clear();
    }
}


