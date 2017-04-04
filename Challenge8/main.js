
    var x= prompt("enter a number to check prime: ");
    var prime=1;
    if(x===1||x===2)   document.getElementById("p").innerHTML=""+x+" is a prime";
    else{
        for(var i=2;i<=Math.sqrt(x);i++){
           if(x%i==0)  prime=0;
        }
        if(prime)   document.getElementById("p").innerHTML=""+x+" is a prime";
        else  if(!prime)  document.getElementById("p").innerHTML=""+x+" is not a prime";
     }