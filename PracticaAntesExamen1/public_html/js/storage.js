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
                if (v instanceof Object && v._class === 'Estudiante') {
                    return new Estudiante(v.carnet,v.nombre,v.apellidos,v.nota1,v.nota2,v.nota3);
                }
                return v;
            },

    replacer: function (k,v) {
                if (v instanceof Estudiante) {
                        v._class="Estudiante";
                }
                return v;
            }
};
