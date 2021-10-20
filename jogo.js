var altura = 0
var largura = 0
var vidas = 1

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
		//verificação de quantidade de vidas. Caso o limite tenha sido atingido, o jogador será redirecionado para a página de Game Over. 
		if(vidas>3){
			window.location.href = "fim_de_jogo.html"
		}
		else{
			document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
			vidas++
		}
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
	//removendo o mosquito da tela, após  o clique (utilizado para a primeira aparição na tela)
	mosquito.onclick = function(){
		this.remove()
	}
	document.body.appendChild(mosquito)


}

	//classe utilizada para gerar classes aleatórios
	function tamanhoAleatorio(){
		var classe = Math.floor(Math.random() * 3);
		console.log(classe)

		switch(classe){
			case 0:
				return 'mosquito1'
			
			case 1:
				return 'mosquito2'

			case 2:
				return 'mosquito3'
		}
	}

	//classe utilizada para gerar lados aleatórios para a imagem do mosquito
	function ladoAleatorio(){
		var classe = Math.floor(Math.random() * 2);
		console.log(classe)

		switch(classe){
			case 0:
				return 'ladoA'

			case 1:
				return 'ladoB'
	}
}