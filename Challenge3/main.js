function fn(){
	var str=document.getElementById("str").value;
	console.log(""+str);
	var strarr=str.split("");
	var ans=[];
	for(var i=0;i<strarr.length;i++){
		var tmp=""+strarr[i];
		ans.push(tmp);
		document.write(tmp+",");
		console.log(tmp);
		for(var j=i+1;j<strarr.length;j++){
			tmp=tmp+str[j];
			ans.push(tmp);
			
			console.log(tmp);
			document.write(tmp+",");
		}
	}
	return ans;
}