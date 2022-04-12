var imagenes = [];
imagenes["cauchin"] = "vaca.png";
imagenes["pocacho"] = "pollo.png";
imagenes["tocinauro"] = "cerdo.png";

class Pakiman
{
    constructor(n, v, a)
        {
            this.imagen = new Image();
            this.nombre = n;
            this.vida = v;
            this.ataque = a;
            this.tipo = "tierra";

            this.imagen.src = imagenes[this.nombre];
        }
    hablar()
    {
        alert(this.nombre);
    }
    mostrar()
        {
            document.body.appendChild(this.imagen);
            document.write("<br /><strong>" + this.nombre + "</strong><br />");
            document.write("vida:" + this.vida + "<br />");
            document.write("ataque:" + this.ataque + "<hr />");
          
        }
    

}

var coleccion = [] ;
coleccion.push(new Pakiman ("cauchin", 100 , 30));
coleccion.push(new Pakiman ("pocacho", 80, 50));
coleccion.push(new Pakiman ("tocinauro", 120, 40));

for (var todos_atrapados_pakiman of coleccion)
{
    todos_atrapados_pakiman.mostrar();
}

