function fn(){
	var str=document.getElementById("str").value;
	// console.log("ee"+str);
	var strr=str.split("").sort().join("");
	// strarr.sort();
	// var strr=strarr.join("");
	// // strarr.join("");
	// console.log(strr);
	document.getElementById("p").innerHTML="Sorted string is : "+ strr;
}