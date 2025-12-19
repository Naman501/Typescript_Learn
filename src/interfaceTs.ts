type beverageOrder={
     type:string;
    sugar:number;
    strong:boolean;
}

function makeBeverage(order :{
    type:string;
    sugar:number;
    strong:boolean;
}){
    console.log(order);
}

function serveBeverage(order:{
     type:string;
    sugar:number;
    strong:boolean;
}){
console.log(order);
}



type beverageRecepie={
water:number;
milk:number;
}

class MasalaBeverage implements beverageRecepie{
water=100;
milk=50;
}

interface cupSize{
    size:"small" | "large"
}

class Chai implements cupSize{
size:"small"| "large" ="small"
}

interface  Response{
    ok:boolean
}

class MyRes implements Response{
    ok:boolean = true;
}

type BeverageType="masala"|"ginger"|"lmeony"

function order(b:BeverageType){
    console.log(b);
    
}


type BaseBeverage={
    teaLeaves:number
}
type Extra={
    masala:number
}

type MasalaChai=BaseBeverage & Extra

const cup:MasalaChai={
    teaLeaves:2,
    masala:1
}

type User={
    username:string;
    bio?:string
}

const user1:User={
    username:"Naman"
}
const user2:User={
    username:"Nmn",
    bio:"YOYO"
}

type Config={
    readonly appName:string
    version:number
}

const cfg:Config={
    appName:"X",
    version:2
}

// cfg.appName="Reddit"
cfg.version=3
