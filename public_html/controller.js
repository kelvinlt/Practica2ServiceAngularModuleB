angular.module('myApp', [])
        .controller('MuestraPelicula', ['$scope','peliculasService',
function ($scope,peliculasService) {
    $scope.algo1 = 1;
    $scope.algo2 = 2;
    $scope.letras = ["x","y","z"];
    $scope.numActores =0;

    $scope.actoresControler = peliculasService.actores;
    
    $scope.peliculaControler = peliculasService.pelicula2;
    
    $scope.peliculasControler = peliculasService.peliculas;
    
}]);