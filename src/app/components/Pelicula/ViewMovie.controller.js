(function () {
	'use strict';
	angular.module('app')
	.controller('ViewMovie.controller', viewCtrl);
	
	viewCtrl.$inject = ['PeliculaService', '$stateParams', '$log'];
	function viewCtrl(PeliculaService, $stateParams, $log) {
		var vm = this;
		vm.location = 'view';
		$log.debug($stateParams.id);
		vm.peliculaForm = PeliculaService.get({id: $stateParams.id});
	}
})();