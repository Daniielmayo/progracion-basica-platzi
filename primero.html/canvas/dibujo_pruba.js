var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("boton_html")
boton.addEventListener("click" , dibujoPorClick );
var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0
var yi, xf;

while(l < lineas)
{ 
    yi = 10 * l;
    xf = 10 * (l + 1);
    dibujarlinea("#AAF", 0, yi, xf, 300);
    console.log("linea" + 1);
    l = l + 1;
}
    dibujarlinea("black", 1,1,1,299);
    dibujarlinea("black", 1,299,299,299);

function dibujarlinea(color, x_inicial, y_inicial, x_final, y_final)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(x_inicial, y_inicial);
    lienzo.lineTo(x_final, y_final);
    lienzo.stroke();
    lienzo.closePath();
} 

function dibujoPorClick ()
{
    alert("Ojo");

}