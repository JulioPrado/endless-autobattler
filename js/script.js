
  
// CLASSES  =====================================================================================

function hero(nome,lvl,maxhp,maxmana,atqDano,esquiva,forcaEspecial,especial){
  this.posicao=null;
  this.nome=nome;
  //this.natureza=natureza;
  this.natureza=null;
  //this.raca=raca;
  this.raca=null;
  //this.classe=classe;
  this.classe=null;
  //this.origem=origem;
  this.origem=null;
  //this.planeta=planeta;
  this.planeta=null;
  this.lvl=lvl;
  this.maxhp=maxhp;
  this.maxmana=maxmana;
  this.atqDano=atqDano;
  this.esquiva=esquiva;
  this.forcaEspecial=forcaEspecial;
  this.especial=especial;
  this.chanceCritico=10;

  function atacar(alvo){

  }


}
/*
0 posicao
1 nome
2 natureza-
3 raça-
4 classe-
5 origem-
6 planeta-

7 level
8 maxhp
9 maxmana
10 atqDano
11 esquiva
12 forcaEspecial
13 especial (func)
14 chanceCritico (padrão 10)
*/
function especial(especialnome,func){
  this.especialnome=especialnome;
  this.func=func;
}

// ESPECIAIS DOS HERÓIS  ========================================================================

var purpleEspecial = new especial("Lança do trovão",
  function purpleEspecial(inimigoPos,forca){
  
})

var protoEspecial = new especial("Machado voraz",
  function protoEspecial(forca){
  console.log("Especial do Proto ativado com força: "+forca);
})

var redEspecial = new especial("Flecha negra",
  function protoEspecial(forca){
  console.log("Especial do Red ativado com força: "+forca);
})

var steroidEspecial = new especial("Cometa de pégasuuuu",
  function steroidEspecial(forca){
  console.log("Especial do Steroid ativado com força: "+forca);
})

// HERÓIS  ======================================================================================
/*
0 posicao
1 nome

2 natureza-
3 raça-
4 classe-
5 origem-
6 planeta-

7 level
8 maxhp
9 maxmana
10 atqDano
11 esquiva
12 forcaEspecial
13 especial (func)
14 chanceCritico (padrão 10)
*/
var purple = new hero("Purple",1,100,10,5,1,10,purpleEspecial);
var proto = new hero("Proto",1,100,10,5,1,10,protoEspecial);
var red = new hero("Red",1,90,15,8,1,12,redEspecial);
var steroid = new hero("Steroid",1,120,10,5,1,10,steroidEspecial);

// LOJA ====================================================================================
var loja = [];

loja.push(Object.assign({}, purple));
loja.push(Object.assign({}, proto));
loja.push(Object.assign({}, red));
loja.push(Object.assign({}, steroid));

function montarLoja(){
	
}

// TIMES  ======================================================================================

var meuTime = [];
var banco =[];
var inimigoTime =[];

// TESTES  ======================================================================================

function colocarBanco(indiceTime){
  banco.push(Object.assign({}, meuTime[indiceTime] ));

  meuTime[indiceTime]=null

  for (let i = indiceTime; i<meuTime.length-1 ;i++) {
    if (meutime[i]==null) {
      meutime[i]=Object.assign({}, meuTime[i+1] );
      meutime[i+1]=null;
    }
  }
}

function colocarTime(indiceBanco){

}

// teste de chamada de especial passando a força como parâmetro meuTime[2].especial.func(meuTime[2].forcaEspecial)
console.table(loja)
console.table(meuTime)
console.table(banco)


// COMBATE ====================================================================================

 function selecionaTimeInimigo(nivelArena){
  if (nivelArena<100) {

  }else{

  }
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
