interface Stack<T>{
    readonly size:number;
    push(value:T):void;
    pop():T;
}

type Stacknode<R> = {
    readonly value: R;
    readonly next?: Stacknode<R>;
}

class Stackimpl<T,R> implements Stack<T> {
    private _size:number = 0;
    private head?:Stacknode<T>;
    get size(){
        return this._size;
    }
    push(value:T):void{
        const node: Stacknode<T> = {value,next: this.head};
        this.head = node;
        this._size++;
    }
    pop():T{
        if(this.head == null){
            throw new Error('Stack is empty!');
        }
        const node = this.head;
        this.head = node.next;
        this._size--;
        return node.value;
    }
}

const stack = new Stackimpl();
stack.push('noh1');
stack.push('noh2');
stack.push('noh3');
stack.push(321);
stack.push({'DASDSSSS':'DDD'});


while(stack.size !==0 ){
    console.log(stack.pop());
}
