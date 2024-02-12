//códigos relacionados aos carros
let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 95, 150, 210, 268, 312];
let velocidadeCarros = [2, 2.5, 3.2, 5, 3.3, 2.3];
let comprimentoCarros = 50;
let alturaCarros = 40;


function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i += 1){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarros, alturaCarros);
  }
  
}

function movimentoCarro(){
  for (let i = 0; i < imagemCarros.length; i += 1){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function loopDoCarro(){
  for (let i = 0; i < imagemCarros.length; i += 1){ 
      if (xCarros[i] < -50){
      xCarros[i] = 600;
    }
  }
}
