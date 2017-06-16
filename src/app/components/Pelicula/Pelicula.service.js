(function () {
	'use strict';

	angular
	.module('app')
	.service('PeliculaService', peliculaService);

	peliculaService.$inject = ['$resource'];

	function peliculaService($resource) {
		return $resource('http://localhost:8000/api/peliculas/:id', {id: '@id'});
	}
})();