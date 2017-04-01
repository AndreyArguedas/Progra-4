function Empleado(c,n,cuentas){
    this.cedula = c;
    this.nombre = n;
    this.cuentas = cuentas;
    this.completo = function(sep){
        return this.cedula + sep + this.nombre;
    };
}

