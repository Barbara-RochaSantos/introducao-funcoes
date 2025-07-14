// Introduções a Funções
// Simulação "Torradeira"
function prepararPao (){
	console.log ("Pegando o pão no saco")
    console.log ("Passando a manteiga no pão")
		let torradeiraLigada = true;
    		if (torradeiraLigada === false){
    			console.log ("Ligar torradeira")
					} else {
        				console.log ("A torradeira já está ligada. Prossiga para a torragem")}
    console.log ("Colocando o pão na torradeira")
    }

function torrar (){
	console.log ("torrando pão")
}

function injetarPao(){
	console.log ("Preparando para injetar pão")
	console.log ("Finalizado")
}

function mainTorrada (){
	prepararPao ()
    torrar ()
    injetarPao ()
    }
    
mainTorrada ()
