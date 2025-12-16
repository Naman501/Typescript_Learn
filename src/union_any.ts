let followers : number|string ='1M'

let apiRequestStatus: 'pending'|'success'|'failure'='pending'

apiRequestStatus='success'
const orders=['10','12','23','45']


let currentOrder:string |undefined;

for(let order of orders ){
    if(order==='23'){
        currentOrder=order
        break;
    }
    currentOrder='12'
}

console.log(currentOrder);

