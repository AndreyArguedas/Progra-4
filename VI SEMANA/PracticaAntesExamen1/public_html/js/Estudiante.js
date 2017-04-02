function Estudiante(c,n,ap,n1,n2,n3){
    this.carnet = c;
    this.nombre = n;
    this.apellidos = ap;
    this.nota1 = n1;
    this.nota2 = n2;
    this.nota3 = n3;
    this.promedio = function(){
        return (this.nota1 + this.nota2 + this.nota3) / 3;
    };
}

Estudiante.prototype={ 
  Estudiante: function(c,n,ap,n1,n2,n3){
    this.carnet=c;
    this.nombre=n;
    this.apellidos=ap;
    this.nota1 = n1;
    this.nota2 = n2;
    this.nota3 = n3;
  },
  completo: function (sep) { return this.carnet +  sep + this.nombre + sep + this.apellidos; }
};

