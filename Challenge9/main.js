function type(arg)  
{  
var types = [Function, RegExp, Number, String, Boolean, Object], x, len;  
      
if (typeof arg === "object" || typeof arg === "function"){  
     for (x = 0, len = types.length; x < len; x++) {  
            if (arg instanceof dtypes[x])     return types[x]; 
     }
    }  
    
    return typeof arg;  
}