function wrapInArray<T>(items:T):T[]{
    return[items]
}

wrapInArray('masala')
wrapInArray(42)
wrapInArray({flavour:'Ginger'})

function pair<A,B>(a:A,b:B):[A,B]{
    return [a,b]
}

pair('naman','mittal')
pair('laurel',{location:'PL'})

interface Box<T>{
    content:T
}

const numberBox:Box<number>={
    content:22
}
const numberBoxContent:Box<string>={
    content:'Rames'
}

interface APIPromise<T>{
    status:number,
    data:T
}

const res:APIPromise<{flavour:string}>={
status:200,
data:{
    flavour:'masala'
}
}