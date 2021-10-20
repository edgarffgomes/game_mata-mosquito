var altura = 0
var largura = 0

/*função utilizada para retornar altura e largura da tela, aplicada na propriedade on resize do body
 retornará os valores em tempo real sempre que esses sejam alterados*/
function ajustaTamanhoPalcoJogo(){
	 altura = window.screen.availHeight
	largura =  window.screen.availWidth
}

ajustaTamanhoPalcoJogo(altura, largura)



function posicaoRandomica(){

	//remover mosquito anterior, caso exista
	if(document.getElementById('mosquito')){
		document.getElementById('mosquito').remove()
	}
	// Gerando valores randômicos que vão de 0 a 1, para que as posições de x e y mudem respeitando o tamanho da tela.
	//Redução do valor das posições para que a imagem não ultrapasse o tamanho da tela
	var posX = Math.floor(Math.random()  * altura) - 130;
	var posY = Math.floor(Math.random() * largura) - 130;

	posX = posX < 0 ? 0 : posX
	posY = posY < 0 ? 0 : posY



	//Criando e incluindo elemento Mosquito no body da página.
	var mosquito = document.createElement('img')
	mosquito.src = "imagens/mosca.png"
	// gerando valores aleatórios para a classe, podendo assim variar propriedades como altura e largura
	mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
	/*definindo posições do aparecimento da imagem na página, a posição absoluta é necessária, 
	pois assim a imagem não se prenderá a um elemento específico para se posicionar, e sim à própria página*/
	mosquito.style.left = posX + 'px'
	mosquito.style.top = posY + 'px'
	mosquito.style.position = 'absolute'
	mosquito.id = 'mosquito'
	document.body.appendChild(mosquito)


}

	//classe utilizada para gerar classes aleatórios
	function tamanhoAleatorio(){
		var classe = Math.floor(Math.random() * 3);
		console.log(classe)

		switch(classe){
			case 0:
				return 'mosquito1'
			break;
			
			case 1:
				return 'mosquito2'
			break;

			case 2:
				return 'mosquito3'
			break;
		}
	}

	function ladoAleatorio(){
		var classe = Math.floor(Math.random() * 2);
		console.log(classe)

		switch(classe){
			case 0:
				return 'ladoA'
			break;
			
			case 1:
				return 'ladoB'
			break;


	}
}