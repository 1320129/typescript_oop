{
    type coffecup = {
        shot:number,
        hasmilk:boolean
    }

    const COFFE_MAKE_GRAM = 7;
    let coffebean = 40;

    function makeCoffe(shot:number):coffecup{
        if(coffebean < shot*COFFE_MAKE_GRAM){
            throw new Error('not enough coffe bean')
        }
        return{
            shot,
            hasmilk:false
        }
    }

    const coffe1 = makeCoffe(2);
    console.log(coffe1);
}