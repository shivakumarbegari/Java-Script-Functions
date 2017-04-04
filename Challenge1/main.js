var ip=prompt("enter a number to reverse");
ip=ip.toString();
var iparr=ip.split("");
var x=iparr.reverse().join("");
document.getElementById("p").innerHTML="Entered number : "+ip;
document.getElementById("p").innerHTML="Reversed number : "+x;