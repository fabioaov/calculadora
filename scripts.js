const visor = document.getElementById("visor");
const botoes = document.querySelectorAll(".btn");
let primeiroValor = "";
let segundoValor = 0;
let valorMemoria = "";
let operacaoId = "";
const resultado = () => {
	segundoValor = visor.value.split(getOperador())[1];
	if (segundoValor == "") {
		segundoValor = 0;
	}
	if (typeof setOperador() == "undefined" || setOperador().trim() != getOperador()) {
		operacao(getOperador());
	} else {
		operacao(operacaoId);
	}
};
const operacao = (operador) => {
	if (operador == "soma" || operador == "+") {
		soma();
	} else if (operador == "sub" || operador == "-") {
		subtracao();
	} else if (operador == "mult" || operador == "×") {
		multiplicacao();
	} else if (operador == "div" || operador == "÷") {
		divisao();
	} else if (operador == "porcent" || operador == "%") {
		porcentagem();
	} else if (operador == "raiz" || operador == "√") {
		raiz();
	}
};
const setOperador = () => {
	switch (operacaoId) {
		case "soma":
			return " + ";
		case "sub":
			return " - ";
		case "mult":
			return " × ";
		case "div":
			return " ÷ ";
		case "porcent":
			return " % ";
		case "raiz":
			return " √ ";
		default:
			break;
	}
};
const getOperador = () => {
	const regex = /(\d)\s*([+\-×÷%√])\s*(\d)/;
	const match = visor.value.match(regex);
	if (match) {
		return match[2];
	}
	return null;
};
botoes.forEach((botao) => {
	botao.addEventListener("click", () => {
		cliqueBotao(botao);
	});
});
document.addEventListener("keydown", function (event) {
	if (document.activeElement.tagName.toLowerCase() !== "input") {
		event.preventDefault();
		if (event.key === "Enter") {
			resultado();
		} else if (event.key === "Delete") {
			botao = document.getElementById("on");
			cliqueBotao(botao);
		} else if (event.key === "Backspace") {
			botao = document.getElementById("ce");
			cliqueBotao(botao);
		} else if (event.key === "*") {
			botao = document.getElementById("mult");
			cliqueBotao(botao);
		} else if (event.key === "/") {
			botao = document.getElementById("div");
			cliqueBotao(botao);
		} else if (event.key === ",") {
			botao = document.getElementById("ponto");
			cliqueBotao(botao);
		} else {
			botoes.forEach((botao) => {
				if (botao.textContent === event.key) {
					cliqueBotao(botao);
				}
			});
		}
	}
});
function cliqueBotao(botao) {
	if (botao.classList.contains("num")) {
		const textoBotao = botao.textContent;
		if (textoBotao == ".") {
			if (visor.value.slice(-1) == ".") {
				return;
			} else if (visor.value.length == 0 || isNaN(visor.value.trim().slice(-1))) {
				visor.value += "0";
			}
		}
		visor.value += textoBotao;
	} else if (botao.classList.contains("opera")) {
		operacaoId = botao.getAttribute("id");
		if (operacaoId == "maismenos") {
			if (!isNaN(visor.value)) {
				primeiroValor = visor.value * -1;
				visor.value = primeiroValor;
			}
			return;
		}
		if (!isNaN(visor.value)) {
			if (visor.value.slice(-1) == "." || visor.value == "") {
				visor.value += "0";
			} else if (visor.value.trim() == "" && operacaoId == "sub") {
				visor.value = "-";
				return;
			}
			primeiroValor = visor.value;
		} else {
			resultado();
		}
		visor.value = primeiroValor + setOperador();
	} else if (botao.classList.contains("memoria")) {
		visor.value = visor.value == "" ? 0 : visor.value;
		if (valorMemoria == "") {
			valorMemoria = visor.value;
		} else if (botao.getAttribute("id") == "msoma") {
			valorMemoria = parseFloat(valorMemoria) + parseFloat(visor.value);
		} else if (botao.getAttribute("id") == "msub") {
			valorMemoria = parseFloat(valorMemoria) - parseFloat(visor.value);
		}
		visor.value = valorMemoria;
	} else if (botao.classList.contains("result")) {
		resultado();
		operacaoId = "";
	} else if (botao.classList.contains("limpa")) {
		if (botao.getAttribute("id") == "on") {
			visor.value = "";
			operacaoId = "";
			primeiroValor = "";
			segundoValor = 0;
			valorMemoria = "";
		} else if (botao.getAttribute("id") == "ce") {
			visor.value = visor.value.slice(0, -1);
			if (!isNaN(visor.value.slice(-1)) && visor.value.slice(-1) != " ") {
				operacaoId = "";
			}
		} else if (botao.getAttribute("id") == "mrc") {
			valorMemoria = "";
		}
	}
}
