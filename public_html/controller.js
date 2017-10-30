angular.module('myApp', [])
        .controller('MuestraPelicula', ['$scope', 'peliculasService',
            function ($scope, peliculasService) {
                $scope.actoresControler = peliculasService.actores;
                $scope.peliculaControler = peliculasService.pelicula2;
                $scope.peliculasControler = peliculasService.peliculas;
                $scope.numPeli = 0;
            }]);