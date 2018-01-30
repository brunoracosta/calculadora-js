describe("Suite de teste de Multiplicação", function(){

	var Calculadora = require('../../src/js/calculadora.js');

	it('deve retornar 6 para 2 e 3', function(){
		expect(Calculadora.multiplicar(2, 3)).toEqual(6);
	});

	it('deve retornar -12 para 9 e -3 no formato texto', function(){
		expect(Calculadora.multiplicar('9', '-3')).toEqual(-27);
	});

	it('deve retornar 4.5 para 1.5 e 3', function(){
		expect(Calculadora.multiplicar(1.5, 3)).toEqual(4.5);
	});

	it('deve retornar 0 quando um valor 1 não for numérico', function(){
		expect(Calculadora.multiplicar(undefined, 10)).toEqual(0);
	});

	it('deve retornar 0 quando um valor 2 não for numérico', function(){
		expect(Calculadora.multiplicar(10, undefined)).toEqual(0);
	});
	

});