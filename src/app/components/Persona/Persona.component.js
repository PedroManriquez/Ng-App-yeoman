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
  /**
  * Función global personaCtrl es el controlador del componente persona
  */
  function personaCtrl() {
    var vm = this;
    // Definimos un modelo persona que ahora es un objeto javascript con sus respectivas propiedades
    vm.persona = {
      nombre: 'Pedro',
      apellido: 'Manríquez',
      carrera: {
        codigo: 3086,
        nombre: 'Ingeniería Informática'
      }
    };
  }
})();
