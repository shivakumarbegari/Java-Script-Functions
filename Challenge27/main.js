function longestpss(str){
        var maxlength=0,ans='';
        for(var i=0;i<str.length;i++){
            var substr=str.substr(i,str.length);
            for(var j=substr.length;j>=0;j--){
                var subsubstr=substr.substr(0,j);
                if(j===1)   continue;
                if(isPalindrome(subsubstr)){
                    if(subsubstr.length>maxlength){
                        maxlength=subsubstr.length;
                        ans=subsubstr;
                    }
                }
            }
        }
        return ans;
    }
    function isPalindrome(str){
        var reverse=str.split("").reverse().join("");
        return str===reverse;
    }