function fn(){
    var x=document.getElementById("str").value;
    //var arr=x.split("");
    var arr = x.split(' ');  
    var newarr = [];  
    for(var x = 0; x < arr.length; x++){  
       newarr.push(arr[x].charAt(0).toUpperCase()+arr[x].slice(1));  
    }  
    console.log(newarr.join(' '));
    document.getElementById("p").innerHTML=""+newarr.join(' ');
}