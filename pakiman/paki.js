let imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";
//Esto de arriba es prácticamente lo mismo que usar el JSON
//console.log(imagenes);

/*
let cauchin = new Pakiman("Cauchin",100,30);
let pokacho = new Pakiman("Pokacho",80,50);
let tocinauro = new Pakiman("Tocinauro",120,40);*/
//console.log(cauchin, pokacho, tocinauro);

let coleccion = [];
coleccion.push(new Pakiman("Cauchin",100,30));
coleccion.push(new Pakiman("Pokacho",80,50));
coleccion.push(new Pakiman("Tocinauro",120,40));
//console.log(coleccion);

for(let p of coleccion) //"of" me muestra la instancia, "in" me muestra el índice
{
    //console.log(p);
    p.mostrar();
}

for (let x in coleccion[0])
{
    console.log(x);
}