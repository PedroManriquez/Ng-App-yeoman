(function () {
  angular
    .module('app')
    .component('app', {
      templateUrl: 'app/main.html',
      controller: appCtrl,
      controllerAs: 'vm'
    });

  function appCtrl() {
    var vm = this;
    vm.saludo = 'Hola Estimado amigo!';
  }
})();
