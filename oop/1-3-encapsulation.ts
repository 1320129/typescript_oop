{   
    type state = {
        state:string
    }
    class cat {
        can = 0;
        play = 0;
        sleep = 0;
        ball = false;
        constructor(can:number,play:number,sleep:number,ball:boolean){
            this.can = can
            this.play = play
            this.sleep = sleep
            this.ball = ball
        }

        catstate():state{
            if(this.can < 3){
                throw new Error ('im hungry')
            }else if(this.play < 1){
                throw new Error ('im lonely')
            }else if(this.sleep < 2){
                throw new Error ('im tired')
            }else if(this.ball === false){
                throw new Error ('im lonely2')
            }
            return{
                state:'happy'
            }
        }
    }

    const catstate = new cat(4,3,1,true);
    console.log(catstate.catstate());
}