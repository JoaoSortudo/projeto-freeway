function setup() {
  createCanvas(500, 400);
  trilhaSonora.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostraBoneco();
  mostraCarro();
  movimentoCarro();
  movimentoBoneco();
  loopDoCarro();
  verificaColisao();
  incluiPontos();
  marcaPontos();
}