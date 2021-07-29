{
    class User {
        get fullnmae():string{
            return `${this.firstname} ${this.lastname}`
        }
        constructor(private firstname:string,private lastname:string){
        }
        private invailage:number = 4;
         get age():number{
            return this.invailage;
        }
        set age(x:number){
             this.invailage = x;
        }
    }

    const name = new User('Noh','Jeahyck');
    name.age = 6;
    console.log(name.age)
    console.log(name.fullnmae);
}