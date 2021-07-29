{

    function checknotnull2<T>(arg:T|null):T{
        if(arg == null){
            throw new Error('not value!')
        }
        return arg
    }
    const sss2 = checknotnull2('null2');
    console.log(sss2);
}