<template>
    <h2>To-Do List</h2>
    <div class="container">
        <div class="shadow col-6 mx-auto">
            <span>Count: {{ todoCount }}</span>
            <button class="btn btn-sm shadow btn-danger me-auto" @click="store.$reset()">Reset</button>
            <table class="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Todo</th>
                    <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr :key="index" v-for="(todo, index) in todos">
                        <td>{{ todo.id }}</td>
                        <td>{{ todo.todo }}</td>
                        <td>{{ todo.completed?'Done':'Pending' }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useToDoStore } from './store/todoStore';
import { storeToRefs } from 'pinia';

const store = useToDoStore()
const {todos, todoCount} = storeToRefs(store) 

console.log(store);

onMounted(()=>{
    console.log(todoCount);
    if (!todoCount.value) {
        store.getAllTodos()
    };
})

</script>