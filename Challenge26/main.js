function longest_substring_without_repeating_characters(str) {  
    // var str=String(prompt("Enter a string to find longest  substring without repeating characters"));
    //document.getElementById("p").innerHTML=""+str;
    var chararr = str.split('');  
    var curr_char;  
    var strtemp = "";  
    var longest_string = "";  
    var hash = {};  //hash map for storing characters
    for (var i = 0; i < chararr.length; i++) {  
        curr_char = chararr[i];  
        if (!hash[chararr[i]])   //if current char not found in map
            {   
            strtemp += curr_char;   //put in in a temporory string & push into map
            hash[chararr[i]] = {index:i}; 
            //console.log({index:i}); 
            }  
        else   
            {  
            if(longest_string.length <= strtemp.length)     longest_string = strtemp;   //if current char found in map  
            var prevIndex = hash[curr_char].index;  //find its previous index
            var strnew = str.substring(prevIndex + 1, i);  //new temporory string from previous index to current index
            strtemp = strnew + curr_char;  
            hash = {};  //new hash
            for (var j = prevIndex + 1; j <= i; j++) {  
                hash[str.charAt(j)] = {index:j};  //push all characters from previous index to current index into map
                }  
            }  
    }
    longest_string=longest_string.length>strtemp.length?longest_string:strtemp;
    return longest_string;
    // console.log(longest_string);
    // document.getElementById("p").innerHTML="Entered string is : "+str;
    // document.getElementById("p2").innerHTML="Longest substring without repeating characters is : "+longest_string;
}  