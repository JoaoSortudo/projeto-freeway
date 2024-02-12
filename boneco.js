//códigos referentes ao boneco
let yBoneco = 366
let xBoneco = 85
let colisao = false
let meusPontos = 0

function mostraBoneco(){
  image(imagemDoBoneco, xBoneco, yBoneco, 30, 30);
}


function movimentoBoneco(){
  if (keyIsDown(87)){
   yBoneco -= 3;
  }
  if (keyIsDown(83)&& podeSeMoverEixoY()){
  yBoneco += 3
  }
  if (keyIsDown(68)&& podeSeMoverEixoXDireita()){
    xBoneco += 3;
  }
  if (keyIsDown(65)&& podeSeMoverEixoXEsquerda()){
    xBoneco -= 3;
  }
}

function verificaColisao(){
  for (let i = 0; i < imagemCarros.length; i += 1){
    colisao = collideRectCircle (xCarros[i], yCarros[i], comprimentoCarros, alturaCarros, xBoneco, yBoneco, 15)
    if (colisao){
      voltaPosInicial();
      somColisao.play();
      if(meusPontos > 0){
        meusPontos -= 1;
      }
    }
  }
}

function voltaPosInicial(){
  yBoneco = 366
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(75,0,130));
  text("Pontos: "+meusPontos, width / 5, 26);
}

function marcaPontos(){
  if(yBoneco < 15) {
    meusPontos += 1;
    somPontos.play();
  }
  if(yBoneco < 15){
    voltaPosInicial();
  }
}

function podeSeMoverEixoY(){
  return yBoneco < 366;
}

//preciso trabalhar nesses dois códigos de limitação do movimento lateral, o que acontece com eles é que a partir do momento em que o boneco passa do limite X da tela ele trava e não consegue mais voltar. Queremos apenas limitar que ele passe da tela.

function podeSeMoverEixoXDireita(){
  return xBoneco > 0;
}
function podeSeMoverEixoXEsquerda(){
  return xBoneco < 470;
}









