
var Hero = function(){
	this.compravel=
}





var herois = []
/*
0-Compravel,1-cod,2-nome,3-classe,4-vidaMax,5-manaMax,6-Alcance(0,1),7-velAtk(Lento,Normal,Rapido),8-danoATK(n),9-tipoAtk(Fisico,Magico,Real),10-armadura,11-resistMagica,12-Habi(str),13-imagem,14-imagemMorto,15-posI,16-posJ
*/
var sacopancada = [0,0,'Saco de pancada','Treino',999,0,0,'Lento',0,'Fisico',1,1,"Não tem habilidade.",'imagens/proto.png','imagens/protom.png',0,0]
var proto = [1,1,'Proto','Prototipo',10,10,0,'Normal',1,'Fisico',1,1,"O próximo ataque de Proto causa o triplo do dano.",'imagens/proto.png','imagens/protom.png',0,0]
var cavaleiroDeLica = [1,2,'Cavaleiro de Liça','Cavaleiro',10,10,0,'Normal',1,'Fisico',1,1,"O Cavaleiro de Liça avança, atacando e reduzindo a armadura do alvo em 5.",'imagens/CavaleiroDeLiça.png','imagens/protom.png',0,0]
var steroid = [1,3,'Steroid','Lutador',10,10,0,'Normal',1,'Fisico',1,1,"Steroid se cura em 50 e recebe 2 de armadura e resistencia magica.",'imagens/Steroid.png','imagens/protom.png',0,0]


var arena = [];

var jogador = []
jogador.push(["Nome",1,500]);

var reservas = []
reservas.push(proto)
reservas.push(cavaleiroDeLica)
reservas.push(steroid)

var time = []


var timeInimigo= []

console.table(reservas);


function mudarBarra(id,mudanca) {
	d= document.getElementById(id);
	console.log(parseInt(d.width));
	d.width=parseInt(d.width)+mudanca;

}

function definirAlvo(timeAlvo){
	if (timeAlvo==1) {
		for (var atkj = 1; atkj>=0; atkj--){
			for ( atki=0;atki<4 ;atki++){

			var posicao= atki.toString()+atkj.toString();
				 //d=document.getElementById(posicao);

				//teste para ver se há inimigo na posicao
				
				//chamar a função de ataque
			}
		}
	}else if (timeAlvo==2) {
		for (var atkj = 2; atkj<4; atkj++){
			for ( atki=0;atki<4 ;atki++){

			var posicao= atki.toString()+atkj.toString();
				//d=document.getElementById(posicao);

				//teste para ver se há inimigo na posicao
				console.log(posicao)
				//chamar a função de ataque
			}
		}
	}else{
		console.log("Time alvo inválido.")
	}
}

function atacar(origemAtk,tipoAtk,danoAtk,alvoAtk){

		
}

function atribuirPos(time){

}
