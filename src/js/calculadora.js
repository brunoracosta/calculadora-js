var Calculadora = {
	adicionar: function(num1, num2){
		num1 = parseFloat(num1);
		num2 = parseFloat(num2);
		if(isNaN(num1) || isNaN(num2)) {
			return 0;
		} else {
			return num1 + num2;
		}
		
	},
	subtrair: function(num1, num2){
		return 0;
	},
	dividir: function(num1, num2){
		return 0;
	},
	multiplicar: function(num1, num2){
		return 0;
	}
};

if(typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
	module.exports = Calculadora;
}