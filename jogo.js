var altura = 0

var lagura = 0

/*função utilizada para retornar altura e largura da tela, aplicada na propriedade on resize do body
 retornará os valores em tempo real sempre que esses sejam alterados*/
function ajustaTamanho(){
	 altura = window.innerHeight
	largura =  window.innerWidth
	console.log(altura, largura)
}

ajustaTamanho()
console.log(altura, largura)