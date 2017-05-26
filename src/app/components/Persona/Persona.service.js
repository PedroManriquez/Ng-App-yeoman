(function () {
	'use strict';

	angular
	.module('app')
	.service('PersonaService', personaService);

	personaService.$inject = [];

	function personaService() {
		var service = this;
		var personas = [
      {
      	nombre: 'Pedro',
        apellido: 'Manríquez',
        carrera: {
          codigo: 3086,
          nombre: 'Ingeniería Informática'
        }
      },
      {
      	nombre: 'Javier',
        apellido: 'Machuca',
        carrera: {
          codigo: 3086,
          nombre: 'Ingeniería Informática'
        }
      },
      {
      	nombre: 'Leonardo',
        apellido: 'Diaz',
        carrera: {
          codigo: 3069,
          nombre: 'Ingeniería Civil Industrial M. Informática'
        }
      },
      {
      	nombre: 'Pepe',
        apellido: 'Rojas',
        carrera: {
          codigo: 1234,
          nombre: 'Futbol Profesional'
        }
      }
		];
		service.query = function () {
			return personas;
		}
	}
})();
