var altura = 0
var largura = 0

/*função utilizada para retornar altura e largura da tela, aplicada na propriedade on resize do body
 retornará os valores em tempo real sempre que esses sejam alterados*/
function ajustaTamanhoPalcoJogo(){
	 altura = window.screen.availHeight
	largura =  window.screen.availWidth
	console.log(altura, largura)
}

ajustaTamanhoPalcoJogo(altura, largura)



function posicaoRandomica(){
	// Gerando valores randômicos que vão de 0 a 1, para que as posições de x e y mudem respeitando o tamanho da tela.
	//Redução do valor das posições para que a imagem não ultrapasse o tamanho da tela
	var posX = Math.floor(Math.random()  * altura) - 90;
	var posY = Math.floor(Math.random() * largura) - 90;

	posX = posX < 0 ? 0 : posX
	posY = posY < 0 ? 0 : posY

	console.log('Posição x: ' + posX + ' Posição Y: ' + posY)

	//Criando e incluindo elemento Mosquito no body da página.
	var mosquito = document.createElement('img')
	mosquito.src = "imagens/mosca.png"
	mosquito.className = "mosquito1"
	/*definindo posições do aparecimento da imagem na página, a posição absoluta é necessária, 
	pois assim a imagem não se prenderá a um elemento específico para se posicionar, e sim à própria página*/
	mosquito.style.left = posX + 'px'
	mosquito.style.top = posY + 'px'
	mosquito.style.position = 'absolute'
	document.body.appendChild(mosquito)
}