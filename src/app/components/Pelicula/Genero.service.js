(function () {
	'use strict';
	angular.module('app').service('GeneroService', generoService);

	generoService.$inject = [];

	function generoService() {
		var service = this;
		let generos = [
			{
				id_genero: 1,
				descripcion: 'Terror'
			},{
				id_genero: 2,
				descripcion: 'Acción'
			}];
		service.query = function () {
			return generos;
		}
	}
})();