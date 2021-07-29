{
    type Todo = {
        name:string;
        age:'111';
    }

    function sd(todo:Readonly<Todo>){
        todo.name
    }
}