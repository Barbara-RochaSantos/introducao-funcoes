// Introduções a Funções
// Simulação "Torradeira"
function prepararPao (){                            //Primeiro crio as funções cada uma com uma "ação" para fazer uma torrada
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

function mainTorrada (){                                 //Aqui crio a função main ou função "mãe", onde coloco todas as ações englobadas para fazer a torrada, deste modo, consigo apenas chamando a função 'main' executar todas as ações necessárias. 
	prepararPao ()                                      //Eliminando a necessidade de chamar cada uma das ações/funções isoladamente, otimizando o trabalho.
    torrar ()
    injetarPao ()
    }
    
mainTorrada ()               //Aqui chamo a função 'main' e executo.
