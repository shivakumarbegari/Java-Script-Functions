function fcalling(str,fcalled){
    fcalled(str);
    console.log("inside calling function with function as parameter");
}
function fcalled(str){
    console.log(str);
    console.log("inside called fn or parameter function");
}