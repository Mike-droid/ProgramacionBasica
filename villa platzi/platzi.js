/*var z ;
for (let index = 0; index < 10; index++) {
    z = aleatorio(1,9); //Funciona aunque el máximo sea el mínimo y el mínimo sea el máximo
    document.write(z + ", ");
}
*/

//JSON aquí abajo
var teclas = {
    LEFT:37,
    UP:38,
    RIGHT:39,
    DOWN:40
  };
  console.log(teclas);
  //Aquí te muestra qué valores tienen las flechas del teclado
  document.addEventListener("keydown",dibujarTeclado);

var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

//JSON
var fondo = {
    url : "imagenes/tile.png",
    cargaOK : false
};

var vaca = {
    url : "imagenes/vaca.png",
    cargaOK : false
};

var pollo = {
    url : "imagenes/pollo.png",
    cargaOK : false
};

var cerdo = {
    url : "imagenes/cerdo.png",
    cargaOK : false
};

var cantidad = aleatorio(1,2);

fondo.imagen = new Image(); //lo mismo que la etiqueta img de html
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarMapa);

vaca.objeto = new Image();
vaca.objeto.src = vaca.url
vaca.objeto.addEventListener("load",cargarVaca);

pollo.objeto = new Image();
pollo.objeto.src = pollo.url;
pollo.objeto.addEventListener("load",cargarPollo);

cerdo.objeto = new Image();
cerdo.objeto.src = cerdo.url;
cerdo.objeto.addEventListener("load",cargarCerdo);


function cargarMapa() 
{
    fondo.cargaOK = true;
    dibujaMapa();
}

function cargarVaca()
{
    vaca.cargaOK = true;
    dibujaMapa();
    console.log("La vaca está lista");
}

function cargarPollo() 
{
    pollo.cargaOK = true;
    dibujaMapa();
    console.log("El pollo está listo");
}

function cargarCerdo() 
{
    cerdo.cargaOK = true;
    dibujaMapa();
    console.log("El cerdo está listo");
}

function dibujaMapa()
{
    if (fondo.cargaOK) 
    {
       papel.drawImage(fondo.imagen,0,0);  //Aquí se muestra el mapa completo con las coordenadas en 0,0    
    }

    if (vaca.cargaOK)
    {
        console.log("Entré en la vaca");
        for (let index = 0; index < cantidad; index++)
        {
            var x = aleatorio(0,7);
            var y = aleatorio(0,7);
            var x = x*60;
            var y = y*60;
            papel.drawImage(vaca.objeto,x,y);
            console.log("vacas = " + cantidad);
        }
    }

    if (pollo.cargaOK)
    {
        console.log("Entré en los pollos");
        for (let index = 0; index < cantidad; index++) {
            var x = aleatorio(1,6);
            var y = aleatorio(1,6);
            var x = x*40;
            var y = y*40;
            papel.drawImage(pollo.objeto,x,y);
            console.log("pollos = " + cantidad);
        }    
    }

    if (cerdo.cargaOK)
    {
        console.log("Entré en los cerdos");
        for (let index = 0; index < cantidad; index++) {
            var x = aleatorio(2,9);
            var y = aleatorio(2,9);
            var x = x*25;
            var y = y*25;
            papel.drawImage(cerdo.objeto,x,y);
            console.log("cerdos = " + cantidad);
        }    
    }
}

var xMitad=180;
var yMitad=180;

function dibujarTeclado(evento)
{
    console.log(evento.keyCode);
    var movimiento = 10; //Cantidad de píxeles que se va a mover

    switch (evento.keyCode) {
        case teclas.UP:
            console.log("Flecha arriba");
            console.log("Entré en la función de mover cerdo");
            papel.drawImage(cerdo.objeto,xMitad,yMitad-movimiento);
            yMitad -= movimiento;
            break;

        case teclas.DOWN:
            console.log("Flecha abajo");
            console.log("Entré en la función de mover cerdo");
            papel.drawImage(cerdo.objeto,xMitad,yMitad+movimiento);
            yMitad += movimiento;
            break;
            
        case teclas.LEFT:
            console.log("Flecha izquierda");
            console.log("Entré en la función de mover cerdo");
            papel.drawImage(cerdo.objeto,xMitad-movimiento,yMitad);
            xMitad -= movimiento;
            break;
            
        case teclas.RIGHT:
            console.log("Flecha derecha");
            console.log("Entré en la función de mover cerdo");
            papel.drawImage(cerdo.objeto,xMitad+movimiento,yMitad);
            xMitad += movimiento;
            break;    
    
        default:
            console.log("Otra tecla");
            break;
    }

}

function aleatorio(min,max)
{
    var resultado = Math.floor(Math.random() * (max-min+1) )+ min;
    return resultado;
}