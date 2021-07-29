{
/**
 * Let's make a calculator 
 */

type command = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder';

function calculate(a:command,b:number,c:number):number{
    if(a == "add"){
      return  b+c;
    }else if(a == "substract"){
        return  b-c;
    }else if(a == "multiply"){
        return  b*c;
    }else if(a == "divide"){
        return  b/c;
    }else if(a == "remainder"){
        return  b%c;
    }
}

function calculate2(a:command,b:number,c:number):number{
    switch(a){
        case 'add':
            return b+c;
        case 'substract':
            return b-c;
        case 'multiply':
            return b*c;
        case 'divide':
            return b/c;
        case 'remainder':
            return b%c;
    }
}
console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1

}
