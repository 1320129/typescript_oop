{
    const obj = {
        name:'noh',
    }

    const s1 = obj.name;
    const s2 = obj['name'];

    console.log(s1);
    console.log(s2);

    type Animal = {
        name:string;
        age:number;
        gender: 'male' | 'female';
    }

    type name = Animal['name'];

    const sss:name = '11';

    type sex = Animal['gender'];

    const sss1:sex = 'male';

    type opeard = keyof Animal;

    const ssss2:opeard = 'age';


}