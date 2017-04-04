function subset(arr, length)  
 {  
    var ans = [],result;  
    for(var x = 0; x < Math.pow(2, arr.length); x++) {  
        result = [];  
        i = arr.length - 1;   
        do {  
        if( (x & (1 << i)) !== 0){  
                result.push(arr[i]);}  
            }  while(i--);  
    
        if( result.length === length) {  
            ans.push(result);  }  
        }  
  
    return ans;   
}