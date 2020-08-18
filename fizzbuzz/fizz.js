let divisible=false;

for (let index = 1; index <= 100; index++) 
{    
    divisible=false;

    if (esDivisible(index,3)) 
    {
        document.write("fizz");
        divisible=true;
    }

    if(esDivisible(index,5))
    {
        document.write("buzz");
        divisible=true;
    }
    
    if(!esDivisible(index,3) && !esDivisible(index,5))
    {
        document.write(index);
    }
    
    document.write("<br>");
}

function esDivisible(num,divisor) 
{
    var resultado =  num%divisor==0 ? true : false;
    return resultado;
}