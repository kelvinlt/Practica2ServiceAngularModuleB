angular.module('myApp').service(
        "ContactosService",function(){
            this.todosContactos=[];
            
            this.addContacto = function (Persona){
                this.todosContactos.push(Persona)
            };
            
        });
        
function Persona(nombre,email){
    this.nombre = nombre;
    this.email = email;
    
    this.setNombre = function (nombre){
        this.nombre = nombre;
    }
    this.setEmail = function (email){
        this.email = email;
    }
}