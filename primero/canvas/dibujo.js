var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("boton");
boton.addEventListener("click",dibujoPorClick);
//Cuando escribrimos la función sin paréntesis es solamente para hacerle referencia,
//si la ponemos con paréntesis, esta se ejecutará en ese momento.


var d = document.getElementById("dibujito"); //Método que te regresa elemento
var ancho=d.width;
var lienzo = d.getContext("2d"); //getContext es método del canvas y está en 2d

function dibujarLinea(color,xInicial,yInicial,xFinal,yFinal) {
  lienzo.beginPath(); //inicia el camino
  lienzo.strokeStyle = color; //color de dibujo
  lienzo.moveTo(xInicial,yInicial); //punto de inicio
  lienzo.lineTo(xFinal,yFinal); //punto de fin
  lienzo.stroke(); //dibujamos la raya
  lienzo.closePath(); //termina camino
}

//--------------------------------------------------------------------//
function dibujoPorClick(){

  var lineas=parseInt(texto.value);
  var yi,xf,yf,xi;
  var espacio = ancho/lineas;
  //console.log(lienzo);

  /* ESTO ES UN CORAZÓN PARA UN CANVAS DE 500PX X 500PX
  dibujarLinea("red",250,500,400,300); //diagonal derecha
  dibujarLinea("red",250,500,100,300); //diagonal izquierda

  dibujarLinea("red",400,300,400,250); //línea recta vertical derecha
  dibujarLinea("red",100,300,100,250); //línea recta vertical izquierda

  dibujarLinea("red",400,250,350,200); //diagonal de arriba, derecha
  dibujarLinea("red",100,250,150,200); //diagonal de arriba, izquierda

  dibujarLinea("red",350,200,300,200); //línea recta horizontal derecha
  dibujarLinea("red", 150,200,200,200); //línea recta horizontal izquierda

  dibujarLinea("red",300,200,250,250); //final unión derecha
  dibujarLinea("red",200,200,250,250); //final unión izquierda
  */

  /*Hacer dibujo tipo malla*/
  /*while (l < lineas) {
    yi=10*l;
    xf=10*(l+1);
    dibujarLinea("red",0,yi,xf,300);
    //console.log("Linea: " + l);
    l++;
  }*/

  //Hacer dibujo tipo malla pero en 4 lados

  for (var l = 0; l < lineas; l++) {
    yi=espacio*l;
    xf=espacio*(l+1);
    dibujarLinea("red",0,yi,xf,ancho);
  }

  for (var i = 0; i < lineas; i++) {
    yi=espacio*i;
    xf=ancho-(i*espacio);
    dibujarLinea("blue",ancho,yi,xf,ancho);
  }

  for (var i = 0; i < lineas; i++) {
    yi=ancho-(i*espacio);
    xf=espacio*i;
    dibujarLinea("green",0,yi,xf,0);
  }

  for (var i = 0; i < lineas; i++) {
    xi=i*espacio;
    yf=(i+1)*espacio;
    dibujarLinea("black",xi,0,ancho,yf);
  }

  //Onmitrix con 50 líneas en canvas de 500px x 500px
  /*
  for (var i = 0; i < lineas; i++) {
    yi=espacio*i;
    yf=ancho-(i*10);
    dibujarLinea("green",0,yi,ancho,yf);
  }*/

}
