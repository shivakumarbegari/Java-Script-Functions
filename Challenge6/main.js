function fn(){
    var x=document.getElementById("str").value;
    var arr=x.split(' ');
    var max=arr[0].length,maxi=0;
    for(var i=0;i<arr.length;i++){
        if(arr[i].length>max)   {maxi=i;max=arr[i].length;}
    }
    console.log(arr[maxi]);
    document.getElementById("p").innerHTML="Longest String is : "+arr[maxi];
}