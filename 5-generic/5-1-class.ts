{
interface Eirth <V2,R2> {
    left:()=> V2;
    right:()=> R2;
}

class Eirthsimple<V,R> implements Eirth<V,R> {
    constructor(private leftvalue:V,private rightvalue:R){}
    left():V{
        return this.leftvalue
    }
    right():R{
        return this.rightvalue
    }
 }

 const  Eirhths = new Eirthsimple(3,{nae:'sss'});
}