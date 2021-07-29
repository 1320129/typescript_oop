{
    type CoffeeCup = {
      shots: number;
      hasMilk?: boolean;
      sugar?:boolean;
    };
    


    interface CoffeeMaker {
      makeCoffee(shots: number): CoffeeCup;
    }

    interface MilkFrother{
        makeMilk(cup:CoffeeCup):CoffeeCup;
    }

    interface SugarFrother{
        makeSuger(cup:CoffeeCup):CoffeeCup;
    }

    class CheapMilkSteamer implements MilkFrother{
        private Putmilk():boolean{
            console.log(`put milk  coffee`);
            return true;
        }
        makeMilk(cup:CoffeeCup):CoffeeCup{
            return{
                ...cup,
                hasMilk:this.Putmilk()
            }
        }
    }

    class CheapsugerMixer implements SugarFrother{
       private Putsugar():boolean{
            console.log(`puting  suger.....`)
            return true;
        }
        makeSuger(cup:CoffeeCup):CoffeeCup{
            return{
                ...cup,
                sugar:this.Putsugar()
            }
        }
    }
  
    class CoffeeMachine implements CoffeeMaker {
      private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
      private coffeeBeans: number = 0; // instance (object) level
  
      constructor(coffeeBeans: number) {
        this.coffeeBeans = coffeeBeans;
      }
  
      static makeMachine(coffeeBeans: number): CoffeeMachine {
        return new CoffeeMachine(coffeeBeans);
      }
  
      fillCoffeeBeans(beans: number) {
        if (beans < 0) {
          throw new Error('value for beans should be greater than 0');
        }
        this.coffeeBeans += beans;
      }
  
      clean() {
        console.log('cleaning the machine...🧼');
      }
  
      private grindBeans(shots: number) {
        console.log(`grinding beans for ${shots}`);
        if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
          throw new Error('Not enough coffee beans!');
        }
        this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
      }
  
      private preheat(): void {
        console.log('heating up... 🔥');
      }
  
      private extract(shots: number): CoffeeCup {
        console.log(`Pulling ${shots} shots... ☕️`);
        return {
          shots,
          hasMilk: false,
        };
      }


  
      makeCoffee(shots: number): CoffeeCup {
        this.grindBeans(shots);
        this.preheat();
        return this.extract(shots);
      }


    }
  
    class CaffeLatteMachine extends CoffeeMachine {
      constructor(
          beans: number, 
          public readonly serialNumber: string,
          private milkFother:MilkFrother) {
        super(beans);
      }

      makeCoffee(shots: number): CoffeeCup {
        const coffee = super.makeCoffee(shots);
        return this.milkFother.makeMilk(coffee);
      }
    }

    class sweetCoffeeMaker extends CoffeeMachine{
        constructor(
            baens:number,
            private sugarFother:SugarFrother){
                super(baens);
        }
        makeCoffee(shot:number):CoffeeCup{
            const coffee = super.makeCoffee(shot);
            return this.sugarFother.makeSuger(coffee);
        }
    }

    class SweetMilkCoffee extends CoffeeMachine {
        constructor(
            beans:number,
            private milkFother:MilkFrother,
            private sugarFother:SugarFrother){
            super(beans);
        }
        makesmcoffee(shot:number):CoffeeCup{
            const coffee = super.makeCoffee(shot);
            return this.milkFother.makeMilk(this.sugarFother.makeSuger(coffee));
        }
    }
  
    const machine = new CoffeeMachine(23);
    const latteMachine = new CaffeLatteMachine(23, 'SSSS',new CheapMilkSteamer);
    const sugarcoffee = new sweetCoffeeMaker(20, new CheapsugerMixer);
    const mixsugarmilk = new SweetMilkCoffee(50,new CheapMilkSteamer, new CheapsugerMixer);


    const coffee = mixsugarmilk.makesmcoffee(2);

    console.log(coffee);
  }