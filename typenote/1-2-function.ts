{
    // //js
    // function jsass(num1,num2){
    //     return num1 + num2;
    // } 
    // //typescript
    // function ass(num1:number,num2:number):number{
    //     return num1 + num2;
    // } 

    // //js
    // function jsfetch(id){
    //     return new Promise((reslove,reject)=>{
    //         reslove(100);
    //     });
    // }

    // //typescript
    // function fetch(id:string):Promise<number>{
    //     return new Promise((reslove,reject)=>{
    //         reslove(100);
    //     });
    // }
    

    //javascript parameter
    function printname(firstname:string,lastname?:string){
        lastname == undefined?lastname = "":lastname;
        console.log(firstname + lastname)
    }

    printname('noh','jeahhyuck');
    printname('noh');

    //javascript parameter
    function printname2(firstname:string = "No data"){
        console.log(firstname)
    }

    printname2();

    function addNumbers(...numbers:number[]):number{
        return numbers.reduce((a,b)=>a + b);
    }
    addNumbers(1,2,3,4);
}