import { createContext, useContext } from "react";


 export const TodoContext=createContext(
    {
       //default of todos basic structure
        todos:
        [
           {
             id:1,
            todo:"Todo msg",
            completed:false
           }

        


        ]
        ,
        addToDo:(todo)=>{},
        updatedTodo:(id,todo)=>{},
        deleteTodo:(id)=>{},
        toggleComplete:(id)=>{}



    }
 )

 export const useTodo=()=>
    {
        return useContext(TodoContext)
    }
export  const TodoProvider=TodoContext.Provider;