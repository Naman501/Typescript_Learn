const chaiFlavours: string[]=['Masala',"Adrak"]

const chaiPrice: number[]=[10,20,25]


const rating :Array<number>=[4.5,]

type Chai={
    name:string;
    price:number
}

const menu:Chai[]=[
    {
        name:"Masala",
        price:15
    }
,  {
        name:"Adrak",
        price:15
    }
]

const cities: readonly string[]=['Delhi','Noida']

// cities.push("Pune")

const table:number[][]=[
    [1,2,3],
    [4,5,6]
]

let chaiTuple:[string,number];

chaiTuple=["Masala",20]

let userInfo:[string,number,boolean?]

userInfo=['Naman',34,false]

const location: readonly [number,number]=[28.6,56.6]

const chaiItems:[name:string,price:number]=["masala",20]


enum CupSize{
    small,
    medium,
    large
}

const size=CupSize.large

enum status{
    PENDING=100,
    SERVED,//101
    CANCELLED //102
}

enum ChaiType{
    MASALA='masala',
    GINGER='ginger'
}

function makeChai(type:ChaiType){
    console.log(`Making type,${type}`);
    
}

makeChai(ChaiType.GINGER)

 enum RandomEnum{
    ID=1,
    NAME='chai'
 }

const enum Sugars{
    LOW=1,
    MEDIUM=2,
    HIGH=3
}


const s=Sugars.HIGH

let t:[string,number]=['naman',359]

t.push('extra',69)

console.log(t);
