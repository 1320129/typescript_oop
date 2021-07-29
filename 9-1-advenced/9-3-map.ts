type Video = {
    title:string;
    aythor:string;
}

type option<T> = {
    [P in keyof T]?:T[P]
}

type readoption<T> = {
    readonly [P in keyof T]? : T[P];
}

type Videooption = readoption<Video>

const asd:Videooption = {
    title:'sss',
    aythor:'dddd'
}
