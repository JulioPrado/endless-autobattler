
// INICIO ========================================
var loja = [];
var meuTime = [];
var meuBanco = [];
var jogador = {'ouro':500000};

function atualizaOuro(){
document.getElementById("ouro").innerHTML = "Dinheiro: R$"+jogador.ouro+",00.";
}



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
  this.preco=50;

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
15 preço
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
15 preço
*/
var purple = new hero("Purple",1,100,10,5,1,10,purpleEspecial);
var proto = new hero("Proto",1,100,10,5,1,10,protoEspecial);
var red = new hero("Red",1,90,15,8,1,12,redEspecial);
var steroid = new hero("Steroid",1,120,10,5,1,10,steroidEspecial);

// LOJA ====================================================================================

loja.push(Object.assign({}, purple));
loja.push(Object.assign({}, proto));
loja.push(Object.assign({}, red));
loja.push(Object.assign({}, steroid));

function abrirLoja(){
  let el=document.getElementById("tabelaLoja");

	for (let i=0;i<loja.length;i++){
    $ (el).append(
      "<tr>"+
            "<td>"+
              "<div class='text-center'>"+
                "R$"+loja[i].preco+
             "</div>"+
              "<button type='button' onclick='comprarHeroi("+i+")' class='btn btn-dark' >Comprar</button>"+
            "</td>"+
            "<td><img src='imagens/"+loja[i].nome+".png'></td>"+
            "<td>"+loja[i].nome+"</td>"+
            "<td>"+loja[i].natureza+"</td>"+
            "<td>"+loja[i].raca+"</td>"+
           "<td>"+loja[i].classe+"</td>"+
            "<td>"+loja[i].origem+"</td>"+
            "<td>"+loja[i].planeta+"</td>"+
            "<td>"+loja[i].lvl+"</td>"+
            "<td>"+loja[i].maxhp+"</td>"+
            "<td>"+loja[i].maxmana+"</td>"+
            "<td>"+loja[i].atqDano+"</td>"+
            "<td>"+loja[i].esquiva+"</td>"+
            "<td>"+loja[i].forcaEspecial+"</td>"+
          "</tr>");
  }

  document.getElementById("botaoAbreLoja").style="display: none;"
}

function comprarHeroi(indiceLoja){

  if(jogador.ouro<loja[indiceLoja].preco){
   alert("Você não tem dinheiro o suficiente.")
  }else{
    jogador.ouro=jogador.ouro-loja[indiceLoja].preco;
    atualizaOuro();
    if (meuTime.length<8) {
      meuTime.push(Object.assign({},loja[indiceLoja]));
    }else{
      meuBanco.push(Object.assign({},loja[indiceLoja]));
    }
  }

  console.table(meuTime);
  console.table(meuBanco);
  atualizarSaguao();
}

// SAGUÃO =====================================================================================

function atualizarSaguao(){
  let el=document.getElementById("bancoSaguao");

  el.innerHTML='';
    for (let i=0;i<meuBanco.length;i++){
    $(el).append(
      "<div class='item text-center'>"+ 
       "<br><strong>"+meuBanco[i].nome+"</strong>"+
        "<img src='imagens/"+
        meuBanco[i].nome+".png'>"+
        "<br>Nivel: <strong>"+meuBanco[i].lvl+"</strong> <button type='button' class='btn btn-sm btn-outline-info' style='border-radius:30px;' onclick='subirNivel(meuBanco["+i+"])'>upar</button>"+ 
        "<br>"+meuBanco[i].natureza+
        " "+meuBanco[i].raca+
        "<br>"+meuBanco[i].classe+
        " "+meuBanco[i].origem+
        "<br>Planeta: "+meuBanco[i].planeta+
        
        "<br><span class='marcadorVida'>HP: "+meuBanco[i].maxhp+"</span>"+
        "/<span class='marcadorMana'>Mana: "+meuBanco[i].maxmana+"</span>"+
        "<br>Dano: "+meuBanco[i].atqDano+
        " Esquiva: "+meuBanco[i].esquiva+
        "<br>Força especial: "+meuBanco[i].forcaEspecial+
        "<br><button type='button' class='btn btn btn-sm btn-danger' onclick='venderBanco(meuBanco["+i+"])'>Vender</button>"+
        
     "</div>"
    );
  }
  $(el).append("<button style='height:100px;' onclick='fecharSaguao()'' type='button' class='btn btn-dark align-self-center'>"+
          "Esconder saguão"+
        "</button>");
}

function fecharSaguao(){
  document.getElementById('bancoSaguao').innerHTML='';
}

function subirNivel(heroi){
  alert(heroi.nome+" subiu nivel.");
  atualizarSaguao();
}



// TIMES  ======================================================================================
var inimigoTime =[];

// TESTES  ======================================================================================

meuTime.push(Object.assign({},loja[0]));
meuTime.push(Object.assign({},loja[3]));
meuTime.push(Object.assign({},loja[2]));
meuTime.push(Object.assign({},loja[0]));
meuTime.push(Object.assign({},loja[2]));
meuTime.push(Object.assign({},loja[1]));
meuTime.push(Object.assign({},loja[0]));
meuTime.push(Object.assign({},loja[1]));




function montarArena() {
  let meuTimeTemp = Object.assign({},meuTime)

  let indiceHeroi=0;

  for (let j = 1; j>=0; j--){
    for ( let i=0;i<4; i++){

    let posicao= i.toString()+j.toString();
       let el=document.getElementById(posicao);

       el.innerHTML = "<div class='heroiArena'>"+
            "<span class='marcadorVida'>"+
               meuTimeTemp[indiceHeroi].maxhp+
            "</span>/"+
            "<span class='marcadorMana'>"+
                meuTimeTemp[indiceHeroi].maxmana+
           "</span>"+
            "<img class='img-fluid' src='imagens/"+meuTimeTemp[indiceHeroi].nome+".png'>"+
         "</div>";
      
      indiceHeroi++;
    }
  }

  function montarInimigosArena(){
    for (let j = 2; j<4; j++){
      for ( let i=0;i<4 ;i++){

      let posicao= i.toString()+j.toString();
        //d=document.getElementById(posicao);

        //teste para ver se há inimigo na posicao
        console.log(posicao)
        //chamar a função de ataque
      }
    }
  }
}




function colocarBanco(indiceTime){
  meuBanco.push(Object.assign({}, meuTime[indiceTime] ));

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
