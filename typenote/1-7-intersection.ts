{
    type student = {
        name:string,
        age:number
    }
    type worker = {
        workid:number,
        work:()=> void;
    }

    function intern(person:student & worker){
        console.log(person.name,person.age)
    }


    intern({
        name:'sss',
        age:11,
        workid:123,
        work:()=>{},
    })
}