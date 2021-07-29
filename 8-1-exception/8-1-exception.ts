function readfile(filename:string):string{
    if(filename === 'not file'){
        throw new Error(`this not ${filename}`)
    }
    return(`file contect`)

}

function fileclose(filename:string){

}

const filename = 'not file';

try{
    console.log(readfile(filename));
}catch{
    console.log(`catch error`);
}

console.log(`error  complate?`)
