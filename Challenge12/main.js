function perfectNumber(ip){
    var s=0;
    for(var x=1;x<=ip/2;x++){
        if(ip%x==0) s+=x;
    }
    if(s===ip&&s!==0)    {console.log("perfect number");document.getElementById("p").innerHTML="perfect number "+ip;} 
    else    {console.log("not a perfect number");document.getElementById("p").innerHTML="not a perfect number "+ip;}
}