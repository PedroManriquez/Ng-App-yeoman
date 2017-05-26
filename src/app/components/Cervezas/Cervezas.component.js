(function () {
  'use strict';
  // Definimos un nuevo componente llamado 'persona' en la angular app llamada 'app'
  angular
  .module('app')
  .component('cerveza', {
    templateUrl: 'app/components/Cervezas/Cervezas.html',
    controller: cerzaCtrl,
    controllerAs: 'vm'
  });

  cerzaCtrl.$inject = ['BeerService'];
  /**
  * Función global cerzaCtrl es el controlador del componente persona
  */
  function cerzaCtrl(BeerService) {
    var vm = this;
    // Definimos un modelo persona que ahora es un objeto javascript con sus respectivas propiedades
    vm.cervezas = BeerService.query();
    console.log(vm.cervezas);
  }
})();
