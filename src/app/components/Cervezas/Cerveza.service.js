(function () {
	'use strict';

	angular
	.module('app')
	.service('BeerService', beerService);

	beerService.$inject = ['$resource'];

	function beerService($resource) {
		return $resource('https://api.punkapi.com/v2/beers/:id', {id: '@id'});
	}
})();