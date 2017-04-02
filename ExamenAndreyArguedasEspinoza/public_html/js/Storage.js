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
                if (v instanceof Object && v._class === 'Trabajo') {
                    return new Trabajo(v.codigo,v.descripcion,v.prioridad);
                }
                return v;
            },

    replacer: function (k,v) {
                if (v instanceof Trabajo) {
                        v._class="Trabajo";
                }
                return v;
            }
};


