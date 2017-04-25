function fnpermutations(str) {
    if (str.length < 2) return str;
    var ans = []; 
    for (var i=0; i<str.length; i++) {
        var char = str[i];        
        if (str.indexOf(char) != i)  continue;           
        var newstr = str.slice(0,i) + str.slice(i+1,str.length); 
        for (var pofPermutation of fnpermutations(newstr))
            ans.push(char + pofPermutation)
    }
    return ans;
}

function fn(){
    var x = document.getElementById("str").value;
    permutations = fnpermutations(x);
    for (i of permutations){
        document.write(i);
        // console.log(permutation);
        document.write("<br>");   
    }

}