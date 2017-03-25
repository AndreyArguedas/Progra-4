// funcion Persona
function Persona (cedula,nombre,sexo){ 
  this.Persona(cedula,nombre,sexo);
}

// prototype asociado a la funcion Persona
// solo metodos
Persona.prototype={ 
  Persona: function(cedula,nombre,sexo){
    this.cedula=cedula;
    this.nombre=nombre;
    this.sexo=sexo;
  },
  completo: function (sep) { return this.cedula +  sep + this.nombre; }
};