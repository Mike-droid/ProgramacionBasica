class Billete
{
    constructor(valor , cantidad)
    {
        this.valor=valor;
        this.cantidad=cantidad;
    }
}

let caja = [];
let entregado = [];
caja.push( new Billete(100,40));
caja.push( new Billete(50,30));
caja.push( new Billete(20,20));
caja.push( new Billete(10,10));
caja.push( new Billete(5,5));

let dinero=0;
let vid=0;
let papeles=0;

let b = document.getElementById("extraer").addEventListener("click", entregarDinero);

function entregarDinero() 
{
    let t = document.getElementById("dinero");
    dinero = parseInt(t.value);
    for(let bi of caja)
    {
        //console.log(bi);
        if (dinero>0)
        {
            div = Math.floor(dinero / bi.valor);
            //console.log(div);
            if (div > bi.cantidad) 
            {
                papeles = bi.cantidad;    
            } 
            else 
            {
                papeles = div;
            }
            entregado.push(new Billete(bi.valor,papeles));
            dinero -= (bi.valor * papeles);
        }
    }
    if (dinero>0)
    {
     console.log("Soy un cajero malo y no puedo darte esa cantidad");
     resultado.innerHTML = ("Soy un cajero malo y no puedo darte esa cantidad");
    }
    else
    {
        for(let e of entregado)
        {
            if (e.cantidad > 0) 
            {
                resultado.innerHTML += resultado.innerHTML = (e.cantidad + " billetes de $" + e.valor + "<br>");     
            }
           
        }
    }
    
}

let resultado = document.getElementById("resultado");