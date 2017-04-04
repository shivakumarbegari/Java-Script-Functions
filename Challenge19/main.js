function larger(arr,num){
    var res=arr.filter(function(val){
        return val>num;
    });
console.log(res);
return res;

}