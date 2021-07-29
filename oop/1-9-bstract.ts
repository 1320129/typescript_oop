{
    type coffecup = {
        shot:number,
        hasmilk:boolean
    }
    interface coffeeMachin {
        makeCoffe(shot:number):coffecup;
    }

    interface procoffeeMachin{
        makeCoffe(shot:number):coffecup;
        fillcoffeebean(shot:number):void;
        preheat():void;
        promachin():void;
        
    }
    class coffeMaker implements coffeeMachin, procoffeeMachin{
     private static COFFE_MAKE_GRAM = 7;
    private coffebean = 0;

     constructor(coffebeans:number){
        this.coffebean = coffebeans;
     }
     static anothercoffemaker(coffebeans:number):coffeMaker{
        return new coffeMaker(coffebeans);
     }

     grindBeans(shot:number){
        console.log(`making ${shot} coffee`);
        if(this.coffebean < shot * coffeMaker.COFFE_MAKE_GRAM){
            throw new Error (`not enough coffee beans`);
        }
        this.coffebean -= shot * coffeMaker.COFFE_MAKE_GRAM;
     }

     public preheat(){
         console.log(`heating coffee machine....`)
     }

     extract(shot:number):coffecup{
        return {
            shot:shot,
            hasmilk:true
        }
     }

     fillcoffeebean(shot:number){
        this.coffebean += shot
     }

    makeCoffe(shot:number):coffecup{
        this.grindBeans(shot);
        this.preheat();
        return this.extract(shot)
    }

    promachin(){
        console.log('your use promachine');
    }
    }


    class Amateuruser{
        constructor(private machine: coffeeMachin){}
        makeCoffee(){
            const coffe = this.machine.makeCoffe(2);
            console.log(coffe);
        }
    }

    class pro{
        constructor(private machine:procoffeeMachin){}
        makeCoffee(){
            const coffe2 = this.machine.makeCoffe(2);
            console.log(coffe2);
            this.machine.fillcoffeebean(22);
            this.machine.preheat();
            this.machine.promachin();
        }
       
    }

    const maker:coffeMaker = new coffeMaker(40);



    const amtuer = new Amateuruser(maker);
    const pros = new pro(maker);

    pros.makeCoffee();
}