//JSON aquí abajo
var teclas = {
  LEFT:37,
  UP:38,
  RIGHT:39,
  DOWN:40
};
console.log(teclas);
//Aquí te muestra qué valores tienen las flechas del teclado

var ratoncito = {
  MOUSEDOWN:1,
  MOUSEUP:0
};
console.log(ratoncito);
//Guardamos el valor del click

document.addEventListener("keydown",dibujarTeclado);

var cuadrito = document.getElementById("canvas");
var papel = cuadrito.getContext("2d");
var x = 150; //Coordenada en x donde iniciará
var y = 150; //Coordenada en y donde iniciará


cuadrito.onmousedown = dibujaConRaton;
cuadrito.onmouseup = detente;

dibujarLinea("red",x-1,y-1,x+1,y+1,papel); //Empieza por un punto

function dibujarLinea(color,xInicial,yInicial,xFinal,yFinal,lienzo)
{
  lienzo.beginPath(); //inicia el camino
  lienzo.strokeStyle = color; //color de dibujo
  lienzo.lineWidth = 3; //Cantidad de pixeles del ancho de la línea
  lienzo.moveTo(xInicial,yInicial); //punto de inicio
  lienzo.lineTo(xFinal,yFinal); //punto de fin
  lienzo.stroke(); //dibujamos la raya
  lienzo.closePath(); //termina camino
}

function dibujarTeclado(evento)
{
  console.log(evento.keyCode);

var colorcito = "blue"; //color de la línea
var movimiento =  10; //Cantidad de píxeles que se va a mover

  switch (evento.keyCode)
  {
    case teclas.UP:
        dibujarLinea(colorcito,x, y, x, y-movimiento, papel);
        y -= movimiento; //cambio del punto final
        console.log("Flecha arriba");
        break;

      case teclas.DOWN:
        dibujarLinea(colorcito,x, y, x, y+movimiento, papel);
        y += movimiento;
        console.log("Flecha abajo");
        break;

      case teclas.LEFT:
        dibujarLinea(colorcito,x, y, x-movimiento, y, papel);
        x -= movimiento;
        console.log("Flecha izquierda");
        break;

      case teclas.RIGHT:
        dibujarLinea(colorcito,x, y, x+movimiento, y, papel);
        x += movimiento;
        console.log("Flecha derecha");
        break;

      default:
        console.log("Otra tecla");

    }

}

//-----------------------------------------------------------------------------------------------


function dibujaConRaton()
{
    console.log("Estás presionado el mouse.");

    document.addEventListener("mousemove", mouseMoving); //Coordenadas del ratón
}


function mouseMoving(h)
{
  console.log("Estás moviendo el mouse.");
  dibujarLinea("black", h.clientX-1, h.clientY-1, h.clientX+1, h.clientY+1,papel);
}

function detente()
{
  document.removeEventListener("mousemove",mouseMoving,false);
  console.log("Has soltado el mouse");
}
