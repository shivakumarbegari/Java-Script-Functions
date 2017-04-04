function strId(len){
    var list="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var temp="";
    for(var i=0;i<len;i++){
        temp+=list.charAt(Math.floor(Math.random()*list.length));
    }
    console.log(temp);
    return temp;
    
}