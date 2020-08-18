class Pakiman
{
    constructor(n,v,a)
    {
        this.imagen = new Image();
        this.nombre=n;
        this.vida=v;
        this.ataque=a;
        //this.tipo = "tierra"; //this se refiere a la instancia de clase, en este casos
        this.imagen.src = imagenes[this.nombre];
    }

    hablar()
    {
     alert(this.nombre);
    }

    mostrar()
    {
        document.body.appendChild(this.imagen); //agregarle un hijo al árbol
        document.write("<p>");
        document.write("<strong>" + this.nombre + "</strong><br>");
        document.write("Vida: " + this.vida + "<br>");
        document.write("Ataque: " + this.ataque + "<br>");
        document.write("</p> <hr>");
    }
}