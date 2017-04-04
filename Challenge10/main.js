var s=prompt("size:");
    // size=2;
    size=Number(s);
    var arr=new Array(size);
    for(var i=0;i<size;i++){
        arr[i]=new Array(size).fill(0);
        arr[i][i]=1;
    }
    console.log(arr);