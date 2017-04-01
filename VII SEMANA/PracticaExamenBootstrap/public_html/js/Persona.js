function Persona(c,n,p,m,s){
    this.cedula = c;
    this.nombre = n;
    this.pais = p;
    this.mail = m;
    this.sexo = s;
    
    this.completo = function(sep){
        return this.cedula + sep +  this.nombre + sep + this.pais + sep + this.mail + sep + this.sexo;
    };
}


