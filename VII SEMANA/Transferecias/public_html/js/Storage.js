Storage = {
    store : function (id, object){
                return localStorage.setItem(id, JSON.stringify(object,this.replacer));
            },

    retrieve: function (id){
                var jsonObject = localStorage.getItem(id);
                if(jsonObject === null){
                    return null;
                }else{
                    return JSON.parse(jsonObject,this.revive);
                }
            },

    revive: function (k,v) {
                if (v instanceof Object && v._class === 'Empleado') {
                    return new Empleado(v.cedula,v.nombre,v.cuentas);
                }
                return v;
            },

    replacer: function (k,v) {
                if (v instanceof Empleado) {
                        v._class="Empleado";
                }
                return v;
            }
};


