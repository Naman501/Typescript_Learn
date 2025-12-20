const chai={
    name:"Masala Chai",
    price:10,
    isHot:true
}



let tea:{
    name:string;
    price:number;
    isHot:boolean;
}

tea={
    name:"Ginger",
    price:30,
    isHot:false
}

type Tea={
    name:string;
    price:number;
    ingredients:string[]
}

const adrakChai : Tea={
    name:'adrak',
    price:33,
    ingredients:['paani','adrak']
}

type Cup={size:string}

let smallCup: Cup={
    size:'250ml'
}

let bigCup={
    size:'400ml',
    material:'Kulhad'
}

smallCup=bigCup;

type Brew={
    brewTime:number
}

const coffee={
    brewTime:7,
    beans:"Arabica"
}


const chaiBrew:Brew=coffee


type User={
    user:string;
    password:string
}

const u:User={
    user:"nmn",
    password:'123456'
}

type Item={
    name:string;
    qty:number
}

type Address={
    street:string;
    pin:number
}

type order={
    id:string;
    item: Item[];
    address:Address
}

// type Chai={
//   name:string;
//     price:number;
//     isHot:boolean;   
// }

const updateChai=(updates:Partial<Chai>)=>{
    console.log('updating chai with',updates);   
}

updateChai({price:400})
updateChai({})


type ChaiOrder={
    name?:string;
    qty?:number
}

const placeOrder=(order:Required<ChaiOrder>)=>{
            console.log(order);
   }

//    placeOrder({})


type Chai={
  name:string;
    price:number;
    isHot:boolean;   
    ingredients:string[]
}

type BasicChaiInfo= Pick<Chai,"name" | "price">;

const info:BasicChaiInfo={
    name:'Lemon Tea',
    price:300,
}

type ChaiNew={
     name:string;
    price:number;
    isHot:boolean;   
    secretIngredients:string
}

type PublicChai=Omit<ChaiNew,"secretIngredients">