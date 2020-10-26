
// INICIO ========================================
var loja = [];
var meuTime = [];
var meuBanco = [];
var jogador = {'ouro':600};

function atualizaOuro(){
document.getElementById("ouro").innerHTML = "Ouro: "+jogador.ouro.toFixed(2);//toFixed retorna string
}


// CLASSES  =====================================================================================

function hero(nome,nivel,maxhp,maxmana,atqDano,esquiva,forcaEspecial,especial){
  this.posicao=null;
  this.nome=nome; 
  this.temporario=null;
  //this.raca=raca;
  this.raca=null;
  //this.classe=classe;
  this.classe=null;
  //this.origem=origem;
  this.origem=null;
  //this.planeta=planeta;
  this.elemento=null;
  this.nivel=nivel;
  this.maxhp=maxhp;
  this.maxmana=maxmana;
  this.atqDano=atqDano;
  this.esquiva=esquiva;
  this.forcaEspecial=forcaEspecial;
  this.especial=especial;
  this.chanceCritico=1;
  this.preco=50;

  function atacar(alvo){

  }

}
/*
0 posicao
1 nome
2 vago-
3 raça-
4 classe-
5 origem-
6 elemento-

7 nível
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
2 vago-
3 raça-
4 classe-
5 origem-
6 elemento-

7 nível
8 maxhp
9 maxmana
10 atqDano
11 esquiva
12 forcaEspecial
13 especial (func)
14 chanceCritico (padrão 10)
15 preço
*/
var purple = new hero("Purple",1,90,10,5,1,10,purpleEspecial);
var proto = new hero("Proto",1,90,10,5,1,10,protoEspecial);
var red = new hero("Red",1,80,15,8,1,12,redEspecial);
var steroid = new hero("Steroid",1,100,10,5,1,10,steroidEspecial);

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
                loja[i].preco+" de ouro"+
             "</div>"+
              "<button type='button' onclick='comprarHeroi("+i+")' class='btn btn-dark' >Comprar</button>"+
            "</td>"+
            "<td><img src='imagens/"+loja[i].nome+".png'></td>"+
            "<td>"+loja[i].nome+"</td>"+
            "<td>"+loja[i].raca+"</td>"+
           "<td>"+loja[i].classe+"</td>"+
            "<td>"+loja[i].origem+"</td>"+
            "<td>"+loja[i].elemento+"</td>"+
            "<td>"+loja[i].nivel+"</td>"+
            "<td>"+loja[i].maxhp+"</td>"+
            "<td>"+loja[i].maxmana+"</td>"+
            "<td>"+loja[i].atqDano+"</td>"+
            "<td>"+loja[i].esquiva+"</td>"+
            "<td>"+loja[i].forcaEspecial+"</td>"+
          "</tr>");
  }
  document.getElementById("botaoAbreLoja").style="display: none;"
  document.getElementById("botaoFechaLoja").style="display: inline;"
  
}

function fecharLoja(){
   document.getElementById("tabelaLoja").innerHTML='';
   document.getElementById("botaoAbreLoja").style="display: inline;"
   document.getElementById("botaoFechaLoja").style="display: none;"
}

function comprarHeroi(indiceLoja){

  if(jogador.ouro<loja[indiceLoja].preco){
   alert("Você não tem ouro o suficiente.")
  }else{
    jogador.ouro=jogador.ouro-loja[indiceLoja].preco;
    atualizaOuro();
    if (meuTime.length<8) {
      meuTime.push(Object.assign({},loja[indiceLoja]));
      alert(loja[indiceLoja].nome+" adicionado(a) ao seu time principal.")
    }else{
      meuBanco.push(Object.assign({},loja[indiceLoja]));
      alert(loja[indiceLoja].nome+" adicionado(a) ao seu banco.")
    }
  }
  atualizarSaguao();
}

// SAGUÃO =====================================================================================

function atualizarSaguao(){

  let el1=document.getElementById("timeSaguao");

  el1.innerHTML='';
    for (let i=0;i<meuTime.length;i++){
    $(el1).append(
      "<div class='item'>"+
      "<h4><strong> Posição: "+(i+1)+"</h4></strong>"+ 
       "<br><button type='button' class='float-left mr-3 btn btn btn-lg btn-info' onclick='reordenar(0,"+i+")'>↑</button>  <strong>"+meuTime[i].nome+"</strong>"+" Nível: <strong>"+meuTime[i].nivel+"</strong> <button type='button' class='btn btn-sm btn-outline-info' style='border-radius:30px;' onclick='subirNivel(meuTime["+i+"])'>upar por "+meuTime[i].nivel*120+" ouros</button>"+
        "<br><img src='imagens/"+
        meuTime[i].nome+".png'>"+
        meuTime[i].raca+" "+
        meuTime[i].classe+" "+
        meuTime[i].origem+" "+
        "Elemento: "+meuTime[i].elemento+" "+
        "<br> <button type='button' class='float-left mr-3 btn btn btn-lg btn-info' onclick='reordenar(1,"+i+")'>↓</button> <span class='marcadorVida'>HP "+meuTime[i].maxhp+"</span>"+
        "/<span class='marcadorMana'>"+meuTime[i].maxmana+" Mana</span>"+
        " Dano: "+meuTime[i].atqDano+
        " Esquiva: "+meuTime[i].esquiva+
        " Força especial: "+meuTime[i].forcaEspecial+
        "<button type='button' class='float-right btn btn btn-sm btn-outline-danger' onclick='colocarBanco(["+i+"])'>Colocar no banco</button>"+
     "</div>"
    );
  }

  let el=document.getElementById("bancoSaguao");

  el.innerHTML='';
    for (let i=0;i<meuBanco.length;i++){
    $(el).append(
      "<div class='item text-center'>"+ 
       "<br><strong>"+meuBanco[i].nome+"</strong>"+
        "<img src='imagens/"+
        meuBanco[i].nome+".png'>"+
        "<br>Nível: <strong>"+meuBanco[i].nivel+"</strong> <button type='button' class='btn btn-sm btn-outline-info' style='border-radius:30px;' onclick='subirNivel(meuBanco["+i+"])'>upar por "+meuBanco[i].nivel*120+" ouros</button>"+ 
        "<br> "+meuBanco[i].raca+
        "<br>"+meuBanco[i].classe+
        " "+meuBanco[i].origem+
        "<br>Elemento: "+meuBanco[i].elemento+
        
        "<br><span class='marcadorVida'>HP: "+meuBanco[i].maxhp+"</span>"+
        "/<span class='marcadorMana'>Mana: "+meuBanco[i].maxmana+"</span>"+
        "<br>Dano: "+meuBanco[i].atqDano+
        " Esquiva: "+meuBanco[i].esquiva+
        "<br>Força especial: "+meuBanco[i].forcaEspecial+
        "<br><button type='button' class='btn btn btn-sm btn-danger' onclick='colocarTime(["+i+"])'>Colocar no time</button>"+
        "<br><button type='button' class='btn btn btn-sm btn-outline-danger' onclick='venderBanco(["+i+"])'>Vender</button>"+
     "</div>"
    );
  }
  document.getElementById("botaoAbreSaguao").style="display: none;";
  document.getElementById("botaoFechaSaguao").style="display: block;";
  
}

function fecharSaguao(){
  document.getElementById("botaoAbreSaguao").style="display: block;";
  document.getElementById("botaoFechaSaguao").style="display: none;";
  document.getElementById("bancoSaguao").innerHTML=" ";
  document.getElementById("timeSaguao").innerHTML=" ";
}

function venderBanco(indiceBanco){
  alert(meuBanco[indiceBanco].nome+" nível "+meuBanco[indiceBanco].nivel+" vendido por: "+meuBanco[indiceBanco].preco/2+" ouros!");
  jogador.ouro += meuBanco[indiceBanco].preco/2;
  atualizaOuro();
  meuBanco.splice(indiceBanco,1);
  atualizarSaguao();
}

function arredonda(num){

return(parseFloat(num).toFixed(2));

}

/* REGUA PROGRESSAO
 
maxhp: primario 1.2 secundario 1.08 Outros 1.04
atqDano: 1.1 secundario 1.08 Outros 1.04
forcaEspecial: 1.1 secundario 1.08 Outros 1.04

*/

var listaProgressao = {

  'Proto': {'maxhp': 1.08, 'atqDano': 1.08,'forcaEspecial':1.1},
  'Purple': {'maxhp': 1.08, 'atqDano': 1.1,'forcaEspecial':1.08},
  'Steroid': {'maxhp': 1.1, 'atqDano': 1.04,'forcaEspecial':1.08},
  'Red': {'maxhp': 1.04, 'atqDano': 1.1,'forcaEspecial':1.08}
}

function subirNivel(heroi){
  if (jogador.ouro<heroi.nivel*120) {
    alert("Ouro insuficiente")
  }else{
  heroi.maxhp= arredonda(heroi.maxhp*listaProgressao[heroi.nome].maxhp);
  heroi.atqDano= arredonda(heroi.atqDano*listaProgressao[heroi.nome].atqDano);
  heroi.forcaEspecial= arredonda(heroi.forcaEspecial*listaProgressao[heroi.nome].forcaEspecial);
  jogador.ouro=jogador.ouro-heroi.nivel*120;
  heroi.preco+=heroi.nivel*120; //para receber parte do ouro na venda (a divisão é feita na venda)
  heroi.nivel++;
  atualizaOuro();
  atualizarSaguao();
  }
}

function colocarBanco(indiceBanco){
  meuBanco.unshift(Object.assign({},meuTime[indiceBanco]));
  meuTime.splice(indiceBanco,1);
  atualizarSaguao();
}

function colocarTime(indiceBanco){
  if (meuTime.length<8){
  meuTime.push(Object.assign({},meuBanco[indiceBanco]));
  meuBanco.splice(indiceBanco,1);
  atualizarSaguao();
  }else{
    alert("O time está cheio!");
  }
}

function reordenar(seta,indiceTime){
  if (seta==0) {
    if (indiceTime==0) {
      alert("Herói já na primeira posição! Não é possível reordenar.");
    }else{
      let aux = Object.assign({},meuTime[indiceTime-1]);
      meuTime[indiceTime-1] = Object.assign({},meuTime[indiceTime]);
      meuTime[indiceTime]= Object.assign({},aux);
      atualizarSaguao();
      console.table(meuTime);
    }

  }else if (seta==1) {
    if (indiceTime>=meuTime.length-1) {
      alert("Herói já na última posição! Não é possível reordenar. Se deseja colocar o herói no banco, use o botão 'Colocar no banco'.");
    }else{
      let aux = Object.assign({},meuTime[indiceTime+1]);
      meuTime[indiceTime+1] = Object.assign({},meuTime[indiceTime]);
      meuTime[indiceTime] = Object.assign({},aux);
      atualizarSaguao();

    }
  }

}

// TESTES  ======================================================================================

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

// teste de chamada de especial passando a força como parâmetro meuTime[2].especial.func(meuTime[2].forcaEspecial)

// INIMIGOS ====================================================================================
var inimigos

function selecionaTimeInimigo(){


}


// ARENA ====================================================================================

function limpaLog(){
  document.getElementById("batalhaLogs").innerHTML='';
}

function log(string){
  let el = document.getElementById("batalhaLogs");
   $ (el).append("<br/>"+string);
}

function atacar(dano, alvo){
alvo.hpAtual=alvo.hpAtual-dano;
}


function iniciarBatalha(time1,time2){
  do{
    let fimBatalha = false;
    let indiceInimigo = 7;
    let j=7;
    for (let i=0; i< time1.length ; i++)
      if (time1[i].maxMana!=0 ){
        atacar(time1[i].dano,time2[j])
      }else{
        time1[i].especial();
      }
  }while(!fimBatalha)

}

function iniciarArena(){
  

  let fim=false;
  let arenaNivel = 1;
  let timeInimigo=[];
 do{
  let meuTimeTemp= Object.assign({}, meuTime);
  



  arenaNivel++;
 }while(!fim);

}

function definirAlvo(timeAlvo){


	if (timeAlvo==1) {

    /*
		for (var atkj = 1; atkj>=0; atkj--){
			for ( atki=0;atki<4 ;atki++){

			var posicao= atki.toString()+atkj.toString();
				 //d=document.getElementById(posicao);

				//teste para ver se há inimigo na posicao
				
				//chamar a função de ataque
			}
		}
    */
	}else if (timeAlvo==2) {
    /*
		for (var atkj = 2; atkj<4; atkj++){
			for ( atki=0;atki<4 ;atki++){

			var posicao= atki.toString()+atkj.toString();
				//d=document.getElementById(posicao);

				//teste para ver se há inimigo na posicao
				console.log(posicao)
				//chamar a função de ataque
			}
		}
    */
	}else{
		console.log("Time alvo inválido.")
	}
}