
let turno = 1;

//agrupando as funcoes de clicar no botao e marcar vitoria
function Clicar() {
	MarcarCasa();
	MarcarVitoria();
	Empate();
}

//Função de marcação de casas
function MarcarCasa() {
	const tile = event.target;


	if (turno % 2 == 0) {
		document.getElementById('sJogadorDaVez').innerText = 'X'
		tile.classList = 'tile_disabled';
		tile.innerText = 'O'

	}
	else {
		document.getElementById('sJogadorDaVez').innerText = 'O'
		tile.classList = 'tile_disabled';
		tile.innerText = 'X'
	}
	turno++
}

// Função de Resetar o jogo
function reset() {
	turno = 1;
	const disabledTiles = document.getElementsByClassName("tile_disabled");

	while (disabledTiles.length > 0) {
		document.getElementById('sJogadorDaVez').innerText = 'X'
		document.getElementById('resultado').innerText = ''
		document.getElementById('empate').innerText = ''
		disabledTiles[0].innerText = '';
		disabledTiles[0].className = 'tile'
	}
}

//função para marcar vitoria

//se tile_1, tile_2 e tile_3 = X (vitoria do X )
//se tile_1, tile_2 e tile_3 = X (vitoria do X )

function MarcarVitoria() {

	// MARCANDO VITORIA EM HORIZONTAL 1
	if ((document.getElementById('tile_1').innerText == 'X' && document.getElementById('tile_2').innerText == 'X') && document.getElementById('tile_3').innerText == 'X') {

		console.log('VITORIA DO X')
		document.getElementById('resultado').innerText = 'VITÓRIA DO JOGADOR X'

	} else if ((document.getElementById('tile_1').innerText == 'O' && document.getElementById('tile_2').innerText == 'O') && document.getElementById('tile_3').innerText == 'O') {
		console.log('VITORIA DO O')
		document.getElementById('resultado').innerText = 'VITÓRIA DO JOGADOR O'
	}

	// MARCANDO VITORIA EM HORIZONTAL 2
	if ((document.getElementById('tile_4').innerText == 'X' && document.getElementById('tile_5').innerText == 'X') && document.getElementById('tile_6').innerText == 'X') {
		console.log('VITORIA DO X')
		document.getElementById('resultado').innerText = 'VITÓRIA DO JOGADOR X'
	} else if ((document.getElementById('tile_4').innerText == 'O' && document.getElementById('tile_5').innerText == 'O') && document.getElementById('tile_6').innerText == 'O') {
		console.log('VITORIA DO O')
		document.getElementById('resultado').innerText = 'VITÓRIA DO JOGADOR O'
	}

	// MARCANDO VITORIA EM HORIZONTAL 3
	if ((document.getElementById('tile_7').innerText == 'X' && document.getElementById('tile_8').innerText == 'X') && document.getElementById('tile_9').innerText == 'X') {
		console.log('VITORIA DO X')
		document.getElementById('resultado').innerText = 'VITÓRIA DO JOGADOR X'
	} else if ((document.getElementById('tile_7').innerText == 'O' && document.getElementById('tile_8').innerText == 'O') && document.getElementById('tile_9').innerText == 'O') {
		console.log('VITORIA DO O')
		document.getElementById('resultado').innerText = 'VITÓRIA DO JOGADOR O'
	}

	// MARCANDO VITORIA EM VERTICAL 1
	if ((document.getElementById('tile_1').innerText == 'X' && document.getElementById('tile_4').innerText == 'X') && document.getElementById('tile_7').innerText == 'X') {
		console.log('VITORIA DO X')
		document.getElementById('resultado').innerText = 'VITÓRIA DO JOGADOR X'
	} else if ((document.getElementById('tile_1').innerText == 'O' && document.getElementById('tile_4').innerText == 'O') && document.getElementById('tile_7').innerText == 'O') {
		console.log('VITORIA DO O')
		document.getElementById('resultado').innerText = 'VITÓRIA DO JOGADOR O'
	}

	// MARCANDO VITORIA EM VERTICAL 2
	if ((document.getElementById('tile_2').innerText == 'X' && document.getElementById('tile_5').innerText == 'X') && document.getElementById('tile_8').innerText == 'X') {
		console.log('VITORIA DO X')
		document.getElementById('resultado').innerText = 'VITÓRIA DO JOGADOR X'
	} else if ((document.getElementById('tile_2').innerText == 'O' && document.getElementById('tile_5').innerText == 'O') && document.getElementById('tile_8').innerText == 'O') {
		console.log('VITORIA DO O')
		document.getElementById('resultado').innerText = 'VITÓRIA DO JOGADOR O'
	}

	// MARCANDO VITORIA EM VERTICAL 3
	if ((document.getElementById('tile_3').innerText == 'X' && document.getElementById('tile_6').innerText == 'X') && document.getElementById('tile_9').innerText == 'X') {
		console.log('VITORIA DO X')
		document.getElementById('resultado').innerText = 'VITÓRIA DO JOGADOR X'
	} else if ((document.getElementById('tile_3').innerText == 'O' && document.getElementById('tile_6').innerText == 'O') && document.getElementById('tile_9').innerText == 'O') {
		console.log('VITORIA DO O')
		document.getElementById('resultado').innerText = 'VITÓRIA DO JOGADOR O'

	}
	// MARCANDO VITORIA EM DIAGONAL 1
	if ((document.getElementById('tile_1').innerText == 'X' && document.getElementById('tile_5').innerText == 'X') && document.getElementById('tile_9').innerText == 'X') {
		console.log('VITORIA DO X')
		document.getElementById('resultado').innerText = 'VITÓRIA DO JOGADOR X'
	} else if ((document.getElementById('tile_1').innerText == 'O' && document.getElementById('tile_5').innerText == 'O') && document.getElementById('tile_9').innerText == 'O') {
		console.log('VITORIA DO O')
		document.getElementById('resultado').innerText = 'VITÓRIA DO JOGADOR O'

	}
	// MARCANDO VITORIA EM DIAGONAL 2
	if ((document.getElementById('tile_3').innerText == 'X' && document.getElementById('tile_5').innerText == 'X') && document.getElementById('tile_7').innerText == 'X') {
		console.log('VITORIA DO X')
		document.getElementById('resultado').innerText = 'VITÓRIA DO JOGADOR X'
	} else if ((document.getElementById('tile_3').innerText == 'O' && document.getElementById('tile_5').innerText == 'O') && document.getElementById('tile_7').innerText == 'O') {
		console.log('VITORIA DO O')
		document.getElementById('resultado').innerText = 'VITÓRIA DO JOGADOR O'

	}
}

function Empate() {
	if (turno > 9) {
		document.getElementById('empate').innerText = 'EMPATE'
		document.getElementById('empate').style.color = 'red'
	}
}
