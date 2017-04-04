function uniqueCharacters(str){
    var ustr="";
    for(var i=0;i<str.length;i++){
        if(ustr.indexOf(str[i])===-1)   ustr+=str[i];
    }
    console.log(ustr);
    return ustr;
    
}