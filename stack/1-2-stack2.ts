interface Stack{
    readonly size:number;
    push(value:string):void;
    pop():string;
}

type Stacknode = {
    readonly value: string;
    readonly next?: Stacknode;
}

class Stackimpl implements Stack {
    private _size:number = 0;
    private head?:Stacknode;
    get size(){
        return this._size;
    }
    push(value:string):void{
        const node: Stacknode = {value,next: this.head};
        this.head = node;
        this._size++;
    }
    pop():string{
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

while(stack.size !==0 ){
    console.log(stack.pop());
}
