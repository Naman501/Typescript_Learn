function getBeverage(kind:number|string){
        if(typeof kind==='string'){
            return `Making ${kind} beverage...`
        }
        return `Beverage Order : ${kind}`
}

function serveBeverage(msg?: string){
    if(msg){
        return `Serving ${msg}`
    }
    return `Serving default water ${msg}`;
}

function orderBeverage(size:"medium"|"small"|"large"|number){
        if(size==='small'){
            return `small beverage...`
        }
          if(size==='large'|| size==='medium'){
            return `extra beverage...`
        }

        return`beverage order ${size}`
}

class KulhadChai{
    serve(){
        return `serving kulhad chai`
    }
}

class cuttingChai{
    serve(){
        return `serving cutting chai`
    }
}

function serve(chai: cuttingChai|KulhadChai){
        if(chai instanceof KulhadChai){
            return chai.serve();
        }
}


type ChaiOrder = {
    type: string
    sugar: number
}

function isChaiOrder(obj:any):obj is ChaiOrder{
    return (
        typeof obj==='object' &&
        obj!==null &&
        typeof obj.type==="string"&&
        typeof obj.sugar==="number"
    )
}

function serveOrder(item:ChaiOrder|string){
if(isChaiOrder(item)){
    return `Serving ${item.type}chai with ${item.sugar}`
}
}

type MasalaChai={
    type:"masala";
    spiceLevel: number
}

type GingerChai={
    type:"ginger";
    amount: number
}

type ElaichiChai={
    type:"elaichi";
    aroma: number
}

type chai=MasalaChai|ElaichiChai|GingerChai


function MakeChai(order: chai){
switch(order.type){
    case "masala":
        return 'Masala chai'
        break;
case "ginger":
        return 'ginger chai'

        
      case "elaichi":
        return 'elaichi chai'
        break;
}
}

function isStringArray(arr:unknown):arr is string[]{

}