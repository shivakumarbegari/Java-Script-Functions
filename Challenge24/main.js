function bubblesort(arr){
    var narr=arr;
    var l=narr.length;
    var swapped=true;
    while(swapped){
        swapped=false;
        for(var i=0;i<l-1;i++){
            if(narr[i]<narr[i+1]){
                var temp=narr[i];
                narr[i]=narr[i+1];
                narr[i+1]=temp;
                swapped=true;
            }
        }
        l--;
    }
    return narr;
   
}