function binarySearch(arr, val) {
   
    
   var mid = Math.floor(arr.length / 2);

   if (arr[mid]===val)     return mposition;
   else if (arr.length === 1)   return null;
   else if (arr[mid] < val) {
      var arr1 = arr.slice(mid + 1);
      var res = binarySearch(arr1, val);
      if (res === null)     return null;
      else    {return mid + 1 + res;}
   }
   else {
      var arr2 = arr.slice(0, mid);
      return binarySearch(arr2, val);
   }
}
