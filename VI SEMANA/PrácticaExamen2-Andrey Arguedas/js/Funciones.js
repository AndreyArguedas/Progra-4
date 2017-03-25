/* global Storage */
var personas;
var persona;
  
function pageLoad(event){
    var formulario=document.getElementById("formulario");
    formulario.addEventListener("submit",doValidate);
    personas = Storage.retrieve("personas");
    if (personas === null){
        personas=[];
        Storage.store("personas",personas);
    }
    listPersonas(personas);
  }
  
  
function doValidate(event){
    var cedula=document.getElementById("cedula"); 
    var nombre=document.getElementById("nombre");
    var sexoMasc=document.getElementById("sexoMasc");	
    var sexoFem=document.getElementById("sexoFem");
    var error=false;
	
    if (cedula.value.length===0){
        error=true;
    }
    
    if (nombre.value.length===0){
        error=true;
    }

    if ( (!sexoMasc.checked) && (!sexoFem.checked) ){
        error=true;
    }
    
    if (nombre.value.length===0){
        error=true;
    }
    if (error){event.preventDefault();} //cancela el envio de la informacion
 }
 
 /*****************************************************************/
 /*****************************************************************/
 
 function doSubmit(){
    var cedula=document.getElementById("cedula"); 
    var nombre=document.getElementById("nombre");
    var sexoMasc=document.getElementById("sexoMasc");	
    var sexoFem=document.getElementById("sexoFem");
    var sexo=(sexoMasc.checked)? "M": "F";
    persona = new Persona(cedula.value,nombre.value,sexo);
    if(!find(cedula.value)){
        personas.push(persona);
        Storage.store("personas", personas);

        var listado = document.getElementById("listado");
        listPersona(listado, persona);

        window.alert("Data sent: " + persona.completo("-"));
        var formulario = document.getElementById("formulario");
        formulario.reset();	
    }
    else
        alert("No se puede ingresar este usuario, la cedula ya pertenece a otro usuario");
    
  }
  
/*****************************************************************/
/*****************************************************************/
function listPersonas(pers){
    var listado=document.getElementById("listado");
    listado.innerHTML="";
    for (i=0;i<pers.length;i++){
        listPersona(listado,pers[i]);
    }
}

/*****************************************************************/
/*****************************************************************/

function listPersona(listado,per){
    var tr =document.createElement("tr");
    var td;
    td=document.createElement("td");
    td.appendChild(document.createTextNode(per.cedula));
    tr.appendChild(td);
    td =document.createElement("td");
    td.appendChild(document.createTextNode(per.nombre));
    tr.appendChild(td);
    td =document.createElement("td");
    var img = document.createElement("img");	
    switch(per.sexo){
      case "M":
            img.src="images/male.png";
            break;
      case "F":
            img.src="images/female.png";
            break;		
    }
    img.width="30";
    img.height="30";
    td.appendChild(img);
    tr.appendChild(td);

    td= document.createElement("td");
    img= document.createElement("img");
    img.src="images/edit.png";
    img.title="Editar";
    img.addEventListener("click", function(e){doQuery(per);});
    td.appendChild(img);
    tr.appendChild(td);

    td= document.createElement("td");
    img= document.createElement("img");
    img.src="images/delete.png";
    img.title="Eliminar";
    img.addEventListener("click", function(e){doDelete(per);});
    td.appendChild(img);
    tr.appendChild(td);

    listado.appendChild(tr);  
}

/*****************************************************************/
/*****************************************************************/
  
function doDelete(per){
    if (!confirm("Esta Seguro?")) return;
	var index = personas.findIndex(function(x){return x.cedula===per.cedula; }); // findIndex Funcion que encuentra el indice de un arreglo
    if (index !== -1){
        //Referencia del método SPLICE
        //https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/splice
	personas.splice(index,1);
	Storage.store("personas",personas);
	listPersonas(personas);
    }
}

/*****************************************************************/
/*****************************************************************/

function doQuery(per){
    //Referencian del método find
    //https://www.w3schools.com/jsref/jsref_find.asp
    persona = personas.find(function(x){return x.cedula===per.cedula;});
    if (persona !== null){
        showPersona(persona);
    }
}

function find(id){
    for(var i = 0; i < personas.length; i++)
        if(id === personas[i].cedula)
            return true;
    return false;
}
  
/*****************************************************************/
/*****************************************************************/

  function showPersona(per){
    var cedula=document.getElementById("cedula"); 
    var nombre=document.getElementById("nombre");
    var sexoMasc=document.getElementById("sexoMasc");	
    var sexoFem=document.getElementById("sexoFem");
	
    cedula.value = per.cedula;
    nombre.value = per.nombre;
    if(per.sexo==="M"){
        sexoMasc.checked=true;
    }
    else{
        sexoFem.checked=true;
    }
}  

//Cuando la página esta lista se llama el metodo pageload
document.addEventListener("DOMContentLoaded",pageLoad);
