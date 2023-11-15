const soma = () => {
	const result = parseFloat(primeiroValor) + parseFloat(segundoValor);
	primeiroValor = result.toFixed(Math.max(casasDecimais(primeiroValor), casasDecimais(segundoValor)));
	visor.value = primeiroValor;
};
const subtracao = () => {
	const result = parseFloat(primeiroValor) - parseFloat(segundoValor);
	primeiroValor = result.toFixed(Math.max(casasDecimais(primeiroValor), casasDecimais(segundoValor)));
	visor.value = primeiroValor;
};
const multiplicacao = () => {
	const result = parseFloat(primeiroValor) * parseFloat(segundoValor);
	primeiroValor = result.toFixed(Math.max(casasDecimais(primeiroValor), casasDecimais(segundoValor)));
	visor.value = primeiroValor;
};
const divisao = () => {
	const result = parseFloat(primeiroValor) / parseFloat(segundoValor);
	primeiroValor = result.toFixed(Math.max(casasDecimais(primeiroValor), casasDecimais(segundoValor)));
	visor.value = primeiroValor;
};
const porcentagem = () => {
	const result = (parseFloat(primeiroValor) / 100) * parseFloat(segundoValor);
	primeiroValor = result.toFixed(Math.max(casasDecimais(primeiroValor), casasDecimais(segundoValor)));
	visor.value = primeiroValor;
};
const raiz = () => {
	const result = Math.sqrt(primeiroValor);
	primeiroValor = result.toFixed(Math.max(casasDecimais(primeiroValor)));
	visor.value = primeiroValor;
};
function casasDecimais(value) {
	const match = ("" + value).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
	if (!match) {
		return 0;
	}
	return Math.max(0, (match[1] ? match[1].length : 0) - (match[2] ? +match[2] : 0));
}
