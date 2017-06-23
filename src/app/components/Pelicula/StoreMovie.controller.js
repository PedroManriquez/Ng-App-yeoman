(function () {
	'use strict';
	angular.module('app')
	.controller('StoreMovie.controller', store);
	
	store.$inject = ['PeliculaService', '$log', 'GeneroService'];
	
	function store(PeliculaService, $log, GeneroService) {
		var vm = this;
		vm.location = 'store';
		vm.peliculaForm = {
			anno_estreno: null,
		  nombre: null,
		  director: null,
		  sinopsis: null,
		  id_genero: null
		};
		vm.generos = GeneroService.query();
		vm.peliculas = null;
		PeliculaService.query().$promise.then(success, error);
		vm.semanticAction = function (form) {
			console.log(form);
			form.id_genero = form.id_genero.id_genero;
			form.anno_estreno = convertDate(form.anno_estreno);
			PeliculaService.save(form, success, error);
		};
		// Private functions
		function success(data) {
			vm.peliculas = data;
			$log.debug(vm.peliculas);
		}
		function error(data) {
			$log.debug(data);
		}
		function convertDate(str) {
			var date = new Date(str);
			var mnth = ('0' + (date.getMonth() + 1)).slice(-2);
			var day = ('0' + date.getDate()).slice(-2);
			return [date.getFullYear(), mnth, day].join('-');
		}
	}
})();