function longestcountryname(arr){
    // var max=arr[0].length,maxi=0;
    // for(var i=1;i<arr.length;i++){
    //     if(arr[i].length>max)   {maxi=i;max=arr[i].length;}
    // }
    // return arr[maxi];
    var res=arr.reduce(function(lastname,country){
        return lastname.length>country.length?lastname:country;
    });
    return res;
}