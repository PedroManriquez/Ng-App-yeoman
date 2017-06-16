(function () {
	'use strict';

	angular
	.module('app')
	.component('pelicula', {
		templateUrl: 'app/components/Pelicula/Pelicula.html',
		controller: peliculaCtrl,
		controllerAs: 'vm'
	});

	peliculaCtrl.$inject = ['PeliculaService'];

	function peliculaCtrl(PeliculaService) {
		var vm = this;
		PeliculaService.query().$promise.then(function (data) {
			vm.peliculas = data;
		});
	}
})();