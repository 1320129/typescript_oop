class NetworkClient{
    tryConnet():void{
        throw new Error (`no network`);
    }
}

class UserService{
    constructor(private client:NetworkClient){

    }
    loging(){
        this.client.tryConnet();
    }
}

class App{
    constructor(private usersrvice: UserService){}
    run(){
        this.usersrvice.loging();
    }
}

const ddd = new NetworkClient();
const ddd2 = new UserService(ddd);
const ddd3 = new App(ddd2);

ddd3.run();