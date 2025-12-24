interface Chai{
    flavour:string
    price:number
    milk?:boolean
}


const masala:Chai={
    flavour:'masala',
    price:25
}

interface Shop{
    readonly id:number
    name:string
}

const s:Shop={
    id:34,
    name:"Starbacks"
}

// s.id=3

interface DiscountCalculator{
    (price:number):number
}

const apply50:DiscountCalculator=(p)=>p*0.5

interface TeaMachine{
    start(price:number):void
    stop():void
}

const machine:TeaMachine={
    start(){
        console.log('start');   
    },
    stop(){
        console.log('Stop');
    }
}

interface ChaiRating{
    [flavour:string]:number
}

const rating:ChaiRating={
    masala:3.5,
    adrak:4.0
}

interface User{
    name:string
}
interface User{
    age:number
}

const u:User={
    name:'Naman',
    age:22
}

interface A{a:string}
interface B{b:string}

interface C extends A,B{
    
}