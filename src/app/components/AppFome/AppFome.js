(function () {
  'use strict';
  angular
  .module('app')
  .component('appFome', {
    templateUrl: 'app/components/AppFome/AppFome.html',
    controller: appFomeCtrl,
    controllerAs: 'vm'
  });
  function appFomeCtrl() {
    var vm = this;
    vm.fome = 'Hola Fome %$&%';
  }
})();
