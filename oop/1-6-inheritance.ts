{
    type coffecup = {
        shot:number,
        hasmilk:boolean
    }

    type blending = {
        shot:false,
        ice:number,
        sugar:number
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
    interface blendingmachine{
        makeBlending(ice:number,sugar:number):blending;
        promachin():void;
    }

    class coffeMaker implements coffeeMachin, procoffeeMachin, blendingmachine{
     private static COFFE_MAKE_GRAM = 7;
     private static BLEND_MAKE_ICE_GRAM = 5;
     private icepack = 0;
    private coffebean = 0;

     constructor(coffebeans:number){
        this.icepack = coffebeans;
        this.coffebean = coffebeans;
     }

     static anothercoffemaker(coffebeans:number):coffeMaker{
        return new coffeMaker(coffebeans);
     }
     //커피콩 갈기 & 블랜딩 얼음 갈기
     grindBeans(shot:number){
        console.log(`making ${shot} coffee`);
        if(this.coffebean < shot * coffeMaker.COFFE_MAKE_GRAM){
            throw new Error (`not enough coffee beans`);
        }
        this.coffebean -= shot * coffeMaker.COFFE_MAKE_GRAM;
     }

     iceslush(ice:number){
         console.log('ice making....ewww')
        if(this.icepack < ice * coffeMaker.BLEND_MAKE_ICE_GRAM){
            throw new Error('not enough ice')
        }
        this.icepack -= ice * coffeMaker.BLEND_MAKE_ICE_GRAM;
     }
     //설탕 넣기
     putsugar(sugar:number){
         console.log('put sugat ..... sweet')
         if(sugar > 0){
            console.log('sweet 1level');
         }else if(sugar > 1){
            console.log('sweet 2level');
         }else if(sugar > 2){
            console.log('sweet 3level');
         }
     }
     //커피데우기 & 슬러시 기계  얼리기
      preheat(){
         console.log(`heating coffee machine....`)
     }
     precold(){
         console.log('colding blending machine...')
     }
     //커피 추출 & 블랜딩 추출
     extract(shot:number):coffecup{
        return {
            shot:shot,
            hasmilk:true
        }
     }

     blending(ice:number,sugar:number):blending{
        return{
            ice:ice,
            sugar:sugar,
            shot:false
        }
     }

     fillcoffeebean(shot:number){
        this.coffebean += shot
     }
     
     promachin(){
        console.log('your use promachine');
    }

    //최종 완성 커피 & 블랜딩
    makeCoffe(shot:number):coffecup{
        this.grindBeans(shot);
        this.preheat();
        return this.extract(shot)
    }

    makeBlending(ice:number,sugar:number):blending{
        this.iceslush(ice);
        this.putsugar(sugar);
        this.precold();
        return this.blending(ice,sugar)
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

    class blending_p{
        constructor(private machine:blendingmachine){}
        makeblend(){
            const blend = this.machine.makeBlending(2,1);
            this.machine.promachin();
        }
    }   

    const maker:coffeMaker = new coffeMaker(40);
    const blenmaker:coffeMaker =  new coffeMaker(100);



    const amtuer = new Amateuruser(maker);
    const pros = new pro(maker);
    const blen = new blending_p(blenmaker);

    blen.makeblend();
}