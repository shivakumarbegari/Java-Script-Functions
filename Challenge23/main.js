function firstnonrepeatedletter(str){
    
    for(var i=0;i<str.length;i++){
        var c=1;
        for(var j=i+1;j<str.length;j++){
            if(str[j]===str[i]) c++;
        }
        if(c<2) {return str[i];break;}
    }
}