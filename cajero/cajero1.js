class Billete
{
    constructor(v, c)
    {
        this.valor = v;
        this.cantidad = c;

    }
}

function entregardinero()
    {
        var t = document.getElementById("dinero");
        dinero = parseInt(t.value);
        for (var bi of caja)
        {
            if(dinero > 0)
            {
                div = Math.floor(dinero / bi.valor);
                if(div > bi.cantidad)
                {
                    papeles = bi.cantidad;

                }
                else
                {
                    papeles = div;
                }
                entregado.push( new Billete(bi.valor, papeles));
                dinero = dinero - (bi.valor * papeles);
            }
        }
        if(dinero > 0)
        {
         alert("lo siento no hay dinero suficiente");
        }
        else
        {
            for(var e of entregado)
            {
            if(e.cantidad >0)    
                {
                resultado.innerHTML +=   e.cantidad + " Billetes de $" + e.valor + "<br />";

                }

            }
        }
    }

var caja = [];
var entregado = [];
caja.push( new Billete(100, 5) );
caja.push( new Billete(50, 3) );
caja.push( new Billete(20, 8) );
caja.push( new Billete(10, 2) );
caja.push( new Billete(5, 3) );



var dinero = 0;
var div = 0;
var papeles = 0;

var resultado = document.getElementById("resultado");
var b = document.getElementById("Extraer");
b.addEventListener("click", entregardinero);