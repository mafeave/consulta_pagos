'use strict';

/**
 * @ngdoc function
 * @name consultaPagosApp.controller:NotificacionesCtrl
 * @description
 * # NotificacionesCtrl
 * Controller of the consultaPagosApp
 */
angular.module('consultaPagosApp')
  .controller('NotificacionesCtrl', function($scope, notificacion) {
    $scope.imagePath = 'images/yeoman.png';
    $scope.notificacion = notificacion;
  });
