 function fn(arr){
    var arr=[1,2,3,4,5];
    arr=arr.sort(function(x,y){return x-y;});
    var nonRepeatingArr=[arr[0]];
    var ansarr=[];
    for(var i=1;i<arr.length;i++){
        if(arr[i-1]!==arr[i])   nonRepeatingArr.push(arr[i]);
    }
    ansarr.push(nonRepeatingArr[1],nonRepeatingArr[nonRepeatingArr.length-2]);
    console.log(ansarr.join(',')); 
    document.getElementById("p2").innerHTML=""+ansarr.join(',');
    return ansarr.join(',');
}