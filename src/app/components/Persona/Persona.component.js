(function () {
  'use strict';
  // Definimos un nuevo componente llamado 'persona' en la angular app llamada 'app'
  angular
  .module('app')
  .component('persona', {
    templateUrl: 'app/components/Persona/Persona.html',
    controller: personaCtrl,
    controllerAs: 'vm'
  });

  personaCtrl.$inject = ['PersonaService'];
  /**
  * Función global personaCtrl es el controlador del componente persona
  */
  function personaCtrl(PersonaService) {
    var vm = this;
    // Definimos un modelo persona que ahora es un objeto javascript con sus respectivas propiedades
    vm.personas = PersonaService.query();
  }
})();
