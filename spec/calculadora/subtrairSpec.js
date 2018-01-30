describe("Suite de teste de Subtração", function(){

	var Calculadora = require('../../src/js/calculadora.js');

	it('deve retornar 1 para 2 e 3', function(){
		expect(Calculadora.subtrair(2, 3)).toEqual(-1);
	});

	it('deve retornar 12 para 9 e -3 no formato texto', function(){
		expect(Calculadora.subtrair('9', '-3')).toEqual(12);
	});

	it('deve retornar 1.5 para 1.5 e 3', function(){
		expect(Calculadora.subtrair(1.5, 3)).toEqual(-1.5);
	});

	it('deve retornar 0 quando um valor 1 não for numérico', function(){
		expect(Calculadora.subtrair(undefined, 10)).toEqual(0);
	});

	it('deve retornar 0 quando um valor 2 não for numérico', function(){
		expect(Calculadora.subtrair(10, undefined)).toEqual(0);
	});
	

});