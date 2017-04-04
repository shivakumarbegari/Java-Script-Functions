function justAsimpleFunctionname(){
    console.log(arguments.callee.name);
    return arguments.callee.name;
}