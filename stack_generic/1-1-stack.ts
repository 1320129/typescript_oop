type Nmuberar = string[];

class number_mchine{
   private number:Nmuberar = [];

    getpush(data:string){
        console.log(this.number);
        return this.number.push(data);
    }

     getpop(){
         this.number.pop();
         return console.log(this.number);
    }


}

const numbers = new number_mchine();

numbers.getpush('sss');
numbers.getpop();
numbers.getpush('ddd');
numbers.getpush('dsss');
numbers.getpush('dsss2');
numbers.getpush('dss54s');
numbers.getpush('dsss432432');
numbers.getpop();
numbers.getpush('dsss432432111');

