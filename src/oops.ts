class Chai{
    flavour:string;
    price:number;

    constructor(flavour:string,price:number){
      this.flavour=flavour
      this.price=price
      console.log(`${flavour} & ${price}`);
        console.log(`${flavour} `);
    }

}

const masalaChai=new Chai("Frappe",100)
const ginger=new Chai("Ginger",60)

// console.log(masalaChai.price);


class Coffee{
    public flavour:string="Naman";
    public price:number=460;
    // constructor()
    private secretRecepie='oK';

    protected shopName:string='Sattar Baksh';

    reveal(){
        return this.secretRecepie;
    }
    coffRevearl(){
        return this.shopName
    }
}
const coff=new Coffee()
coff.reveal()
const cof=new Coffee()
cof.coffRevearl()

class Shop{
    protected shopName='CCD'
}

class Branch extends Shop{
    getName(){
        return this.shopName
    }
}


class Wallet{
    #balance=120;

    getBal(){
        console.log(this.#balance);
        
    }
}

const W=new Wallet()
W.getBal()

class Cup{
readonly capacity:number=250

constructor(c:number){
this.capacity=c
}
}

const capa=new Cup(6)
capa.capacity


class ModerChai{
    private _sugar=2

    getCheeni(){
        console.log(this._sugar);
    }

    setCheeni(val:number){
         if(val>5){
            console.log("Too meetha");
        } else{
            console.log("no diabetes");
            
        }
        this._sugar=val
    }
}

const m=new ModerChai()

m.getCheeni()
m.setCheeni(5)

class EkCup{
    static shopName='Noida House'

    constructor(public flavour:string){}
}
console.log(EkCup.shopName);


abstract class Drink{
    abstract make():void
}

class MyChai extends Drink{
    make(){
        console.log('Brewing Chai');
        
    }
}


class Heater{
    heat(){}
}

class ChaiMaker{
    constructor(private heater:Heater){

    }

    make(){
        this.heater.heat
    }
}