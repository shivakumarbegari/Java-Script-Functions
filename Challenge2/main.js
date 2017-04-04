var ip=prompt("enter a string to check for palindrome or not");
ip=ip+"";
iparr=ip.split("");
var x=iparr.reverse().join("");

if(ip===x)	{document.getElementById("p").innerHTML="\""+ip+"\""+" is a palindrome";}//alert("palindrome");
else	{document.getElementById("p").innerHTML="\""+ip+"\""+" is not a palindrome";}//alert("not a palindrome");
//document.getElementById("p").innerHTML="Reversed number : "+x;