angular.module('myApp', [])
        .controller('ContactosController', ['$scope', 'ContactosService',
            function ($scope, ContactosService) {
                var kelvin = new Persona("Kelvin","kelvinleethen@gmail.com");
                ContactosService.addContacto(kelvin);
                
                $scope.newContacto = "";
                $scope.newEmail = "";
                
                $scope.allContactos = ContactosService.todosContactos;
                
                $scope.createContacto = function (nombre,email) {
                    var nuevo = new Persona(nombre,email)
                        ContactosService.addContacto(nuevo);  
                };
            }]);