type positionTyle = {
    x:number;
    y:number;
}

interface positioninterface {
    x:number;
    y:number;
}

interface zpositioninterface extends positioninterface{
    z:number;
}

type zpositiontype = positionTyle & {z:number};


const obj1:zpositiontype = {
    x:1,
    y:1,
    z:1
}

const obj2:zpositioninterface = {
    x:1,
    y:1,
    z:2
}

class pos1 implements positionTyle {
    x:1;
    y:2;
}

class pos2 implements positioninterface {
    x:1;
    y:2;
}

