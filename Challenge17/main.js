function occurence(str){
    var char={};
    str.replace(/\S/g,function(l){//remove spaces
        char[l]=(isNaN(char[l])?1:char[l]+1);
    });
    return char;
    console.log(char);
}