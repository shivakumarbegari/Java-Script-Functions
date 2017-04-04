function fn(){
    var str=document.getElementById("str").value;
    var vowel_list = 'aeiouAEIOU';
    var count = 0;
  
    // for(var x = 0; x < str.length ; x++)
    // {
    //  if (vowel_list.indexOf(str[x]) !== -1)
    //     {
    //        count += 1;
    //     }
  
    // }
    for(var x=0;x<str.length;x++){
        if(str[x].toUpperCase()=='A'||str[x].toUpperCase()=='E'||str[x].toUpperCase()=='I'||str[x].toUpperCase()=='O'||str[x].toUpperCase()=='U')   count++;
    }
  document.getElementById("p").innerHTML="vowel count : "+count;
}