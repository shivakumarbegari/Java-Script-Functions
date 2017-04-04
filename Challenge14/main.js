function amountTocoins(a,carr){
    carr=[1,2,4,3];
    carr=carr.sort(function(x,y){return x-y;}).reverse();
    console.log(carr);
    var i=0,ans=[];
    while(a>0){
        while(carr[i]>a)    i++;
        if(a-carr[i]>=0)    {ans.push(carr[i]);a-=carr[i];}
        else break;
    }
    console.log(ans);
}