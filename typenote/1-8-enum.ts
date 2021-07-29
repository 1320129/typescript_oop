{
    const MAX_NUM = 6;
    const MAX_STUDENT_PRT_CLASS = 10;
    const MONDAY =0;
    const TUSEDATA = 1;
    const WENDESDAT = 2;
    const Dast_ENUM = Object.freeze({"MONDAY":0,'TUSEDAY':1,'WENDESDAY':2});

    console.log(Dast_ENUM.MONDAY)
    enum Days {
        Monday = 1,
        Tuseday,
        Wendseday,
        Thursday,
        Friday,
        Saurday,
        Sunday
    }

    console.log(Days.Sunday);

    type daaysof =  'Monday' | 'tuseday' | 'wendsday';

    let dyalist: daaysof = 'Monday'; 
}