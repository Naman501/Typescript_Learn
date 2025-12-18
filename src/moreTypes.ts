let response:any='45'

let numericLength:number =(response as string).length

type Book = {
    name:string
}

let bookString ='{"name":"who moved my cheese"}'

let bookObject=JSON.parse(bookString) as Book

console.log(bookObject);


const inputElement=document.getElementById('username') as HTMLInputElement


let value:any

value="Coffee"
value=[1,2,3]
value=2.56
value.toUpperCase()

let valuee:unknown

valuee="Coffee"
valuee=[1,2,3]
valuee=2.56
if(typeof valuee==='string'){
valuee.toUpperCase();
}

try {
    
} catch (error) {
    if(error instanceof Error){
    console.error(error.message)

    }}

    const data:unknown="Naman Mittal"
    const strData:string=data as string


    type Role="admin" | "user" |"superadmin"


    function redirectBasedOnRole(role:Role):void{
            if(role==='admin'){
                console.log('Redirecting to admin dashboard');
                return;
            }
            if(role==='user'){
                console.log('Redirecting to user dashboard');
                return;
            }


            role;
    }


    function neverReturn():never{
        while(true){}
    }