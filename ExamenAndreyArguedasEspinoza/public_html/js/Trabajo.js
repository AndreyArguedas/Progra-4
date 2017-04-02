function Trabajo(c,d,p){
    this.codigo = c;
    this.descripcion = d;
    this.prioridad = p;
    this.completo = function(sep){
        return this.codigo + sep + this.descripcion + sep + this.prioridad;
    };
}


