function add(){
    var a1 = document.getElementById("valor1").value;
    var a2 = document.getElementById("valor2").value;
    var r = document.getElementById("resultado");
    r.value = parseInt(a1) + parseInt(a2);
    if(r.value > 100)
        alert("El valor es mayor a 100");
    else
        alert("El valor es menor a 100");
    
    var dia = " ";
    switch(new Date().getDay()){
        case 0:
            dia = "Domingo";
        break;
        case 1:
            dia = "Lunes";
        break;
         case 2:
            dia = "Martes";
        break;
        case 3:
            dia = "Miercoles";
        break;
         case 4:
            dia = "Jueves";
        break;
        case 5:
            dia = "Viernes";
        break;
         case 6:
            dia = "Sabado";
        break;
    default:
    break;
    }
    
    var opciones ="";
    for(var i = 0; i < 10; i++){
        opciones = opciones + "<option value=' "+i+" '>"+i+"</option>";
    }
    document.getElementById("numeros").innerHTML = opciones;
}

