function powerfn(b,n){
    var ans=1;
    // while(n>0){
    //     if(n%2==1){
    //         ans=ans*b;
    //     }
    //     y=y/2;
    //     b*=b;
    // }
    // console.log(ans);
    for(var i=1;i<=n;i++){
        ans=ans*b;
    }
    console.log(ans);
    return ans;
}