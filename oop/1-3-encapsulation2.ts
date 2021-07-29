{
    type coffecup = {
        shot:number,
        hasmilk:boolean
    }

    class coffeMaker{
     private static COFFE_MAKE_GRAM = 7;
    private coffebean = 0;

     constructor(coffebeans:number){
        this.coffebean = coffebeans;
     }
     static anothercoffemaker(coffebeans:number):coffeMaker{
        return new coffeMaker(coffebeans);
     }

    makeCoffe(shot:number):coffecup{
        if(this.coffebean < shot*coffeMaker.COFFE_MAKE_GRAM){
            throw new Error('not enough coffe bean')
        }
        return{
            shot,
            hasmilk:false
        }
    }
    }
    const maker = new coffeMaker(40);
    console.log(maker.makeCoffe(2));
    
    const maker2 = coffeMaker.anothercoffemaker(60);

    console.log(maker2.makeCoffe(6));
}