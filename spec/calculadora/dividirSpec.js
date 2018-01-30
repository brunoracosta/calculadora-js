describe("Suite de teste de Divição", function(){

	var Calculadora = require('../../src/js/calculadora.js');

	it('deve retornar 2 para 6 e 3', function(){
		expect(Calculadora.dividir(6, 3)).toEqual(2);
	});

	it('deve retornar 1.5 para 4.5 e 3', function(){
		expect(Calculadora.dividir(4.5, 3)).toEqual(1.5);
	});

	it('deve retornar -3 para 9 e -3 no formato texto', function(){
		expect(Calculadora.dividir('9', '-3')).toEqual(-3);
	});

	it('deve retornar 0 quando um valor 1 não for numérico', function(){
		expect(Calculadora.dividir(undefined, 10)).toEqual(0);
	});

	it('deve retornar 0 quando um valor 2 não for numérico', function(){
		expect(Calculadora.dividir(10, undefined)).toEqual(0);
	});

	it('deve retornar error se o segundo numero dor 0', function(){
		expect(Calculadora.dividir('9', '0')).toEqual("Erro");
	});

});