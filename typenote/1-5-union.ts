{
    type direction = 'left'|'right'|'up'|'down';

    function move(dis:direction){
        console.log(dis)
    }

    move('up')

    type setsucess = {
        result:'success';
        res:{
            body:"welcom"
        }
    }

    type setfales = {
        result:'fail';
        res2:string
    }

    type logoin = setsucess|setfales

    function login(id:string,ps:number):logoin{
        return{
            result:'success',
            res:{
                body:'welcom'
            }
        };
    }

    function consolelogin(state:logoin){
        state.result
        if(state.result === 'success'){
            console.log(`축하합니다`)
        }else{
            console.log('sss')
        }
    }
    




}