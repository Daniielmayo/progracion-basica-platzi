var numeros = 100;
var divisible = false;
for ( var i = 1; i <=100; i++)
{
    {
        if( i % 3 ==0 )
        document.write("Fizz");
    }
    if( i % 5 == 0)
    {
        document.write("Buzz");
    }
    if (i%3 !=0 && i%5 != 0)    
    {
        document.write(i);
    }
    document.write (" <br />");
}
function esDivisible(num, divisor)
{
    if (num % divisor == 0)
    {
        return true;
    }
    else 
    {
        return false;
    }
}