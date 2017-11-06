angular.module('myApp')
        .service(
        "ContactosService",function(){
            this.todosContactos=[];
            
            this.addContacto = function (Persona){
                this.todosContactos.push(Persona)
            };
            
        })
        .service(
        "ListaService",function(){
            this.todasListas=[];
            
            this.addLista = function (Persona){
                this.todasListas.push(Persona)
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
};

function Producto(nombre){
    this.nombre = nombre;
    this.setNombre = function (nombre){
        this.nombre = nombre;
    }
};