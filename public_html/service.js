angular.module('myApp').service(
        "peliculasService",function(){
//            this.password=[]; //guardem la combinacio creada
//            this.getCombinacion=function(){
//              return this.password;  
//            };
//            this.getNumeroCombinacion=function(posicio){
//                return this.password[posicio];
//            };
//            this.setCombinacion=function(pass){
//                this.password=pass;
//            };
            this.actores=[["Harrison","Fantastico!","12-07-1942","estadounidense"],["Mary Sean","Young","20-10-1959","estadounidense"]];  
            
            this.pelicula=[this.actores,"Blade Runer","Ridley Scott",1982];
            
            this.pelicula2=[[["Hallison","Fold"],["Mark","Hamill"]],"Star Wars","George Lucas",1977];
            
            this.peliculas=[this.pelicula,this.pelicula2];
        });