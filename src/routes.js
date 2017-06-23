(function () {
  'use strict';
  angular
  .module('app')
  .config(routesConfig);

  /** @ngInject */
  function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('app', {
        url: '/',
        component: 'app'
      })
      .state('persona', {
        url: '/persona',
        component: 'persona'
      })
      .state('cerveza', {
        url: '/cerveza',
        component: 'cerveza'
      })
      .state('pelicula', {
        url: '/pelicula',
        component: 'pelicula'
      })
      .state('crearPelicula', {
        url: '/pelicula/crear',
        controller: 'StoreMovie.controller',
        controllerAs: 'vm',
        templateUrl: 'app/components/Pelicula/FormPelicula.html'
      })
      .state('verPelicula', {
        url: '/pelicula/:id/ver',
        controller: 'ViewMovie.controller',
        controllerAs: 'vm',
        templateUrl: 'app/components/Pelicula/FormPelicula.html'
      })
      .state('actualizarPelicula', {
        url: '/pelicula/:id/actualizar',
        controller: 'UpdateMovie.controller',
        controllerAs: 'vm',
        templateUrl: 'app/components/Pelicula/FormPelicula.html'
      });
  }
})();
