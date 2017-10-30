angular.module('myApp').service(
        "peliculasService",function(){
            this.actores=[["Harrison","Fantastico!","12-07-1942","estadounidense"],["Mary Sean","Young","20-10-1959","estadounidense"]];  
            
            this.BladeRunner=[this.actores,"Blade Runer","Ridley Scott",1982];
            
            this.StarWars=[[["Hallison","Fold","12-07-1942","estadounidense"],["Mark","Hamill","27-01-1978","kekistan"]],"Star Wars","George Lucas",1977];
            
            this.peliculas=[this.BladeRunner,this.StarWars];
        });