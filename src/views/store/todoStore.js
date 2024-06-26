import { defineStore } from "pinia";
import axios from 'axios'


// (store, getters, actions)

export const useToDoStore = defineStore('todoStore', {
    state:()=>{
        return{
            todos:[]
        }
    },
    getters:{
        todoCount:(state)=>state.todos.length,
        completedTodos(state){
            return state.todos.filter((todo)=>todo.completed)
        }
    },
    actions:{
        getAllTodos(){
            axios.get('https://dummyjson.com/todos')
            .then((response)=>{
                console.log(response);
                this.todos = response.data.todos
            })
        }
    },
    persist:true
})