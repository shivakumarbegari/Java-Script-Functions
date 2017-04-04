function factors(ip){
    var s=[];
    for(var x=1;x<=Math.floor(Math.sqrt(ip));x++){
        if(ip%x==0){
            s.push(x);
            if(ip/x!==x)    s.push(ip/x);
        }
    }
    s=s.sort(function(x,y){return x-y;});
    return s;
}