import axios from "axios";
import type { AxiosResponse } from "axios";


// axios.get('https://example.com/data')
// .then(response=>{
//     console.log(response.data);  
// })

// {
// "userId": 1,
// "id": 1,
// "title": "delectus aut autem",
// "completed": false
// }


interface Todo{
    userId:number;
    id:number;
    title:string;
    completed?:boolean
}

const fetchData= async()=>{
    try {
        const res:AxiosResponse<Todo>= await axios.get('https://jsonplaceholder.typicode.com/todos/1')
        console.log("TODO",res.data);
    } catch (error:any) {
        // console.log(error.message);
        if(axios.isAxiosError(error)){
            console.log("axios error",error.message);            
        }
        
    }
}