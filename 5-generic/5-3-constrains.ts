{
    interface Employee {
        pay():void
    }

    class fulltime implements Employee{
        pay(){
            console.log('full time!!');
        }
        workFulltime(){

        }
    }

    class parttime implements Employee{
        pay(){
            console.log('part time!!')
        }
        workpartTime(){

        }
    }

    function badpay(employee:Employee):Employee{
        employee.pay();
        return employee;
    }

    function  pay<T extends Employee>(employee:T):T{
        employee.pay();
        return employee;
    }

    const noh = new fulltime();
    const choi = new parttime();


    const nohafter = pay(noh);
    const choi2 = pay(choi);

    const obj = {
        name:'noh',
        age:28,
    };
    const obj2 = {
        name:'★',
    };



    function getValue<T,K extends keyof T>(obj:T,value:K):T[K]{
        return obj[value];
    }

    getValue(obj,'name');

    console.log(getValue(obj,'name'));

}