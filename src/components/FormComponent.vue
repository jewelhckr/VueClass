<template>
    <form class="form card p-3 mx-auto" action="" method="post">
        <div class="form-control my-2">
            <label for="">Name</label>
            <input class="form-control" type="text" name="name" v-model="name" placeholder="Name" required>
        </div>
        <div class="form-control my-2">
            <label for="">Gender</label>
            <input class="p-2" type="radio" name="gender" value="Male" v-model="gender">
            <label for="">Male</label>
            <input class="p-2" type="radio" name="gender" value="Female" v-model="gender">
            <label for="">Female</label>
        </div>
        <div class="form-control my-2">
            <label for="">Skill</label>
            <input class="p-2" type="checkbox" name="skill" value="React" v-model="skill">
            <label for="">React</label>
            <input class="p-2x" type="checkbox" name="skill" value="Vue" v-model="skill">
            <label for="">Vue</label>
        </div>
        <div class="form-control my-2">
            <label for="">Occupation</label>
            <select class="dropdown dropdown-menu" name="occupation" v-model="occupation">
                <option value="student">Student</option>
                <option value="trader">Trader</option>
                <option value="unemployed">unemployed</option>
                <option value="other">Other</option>
            </select>
        </div>
        <button class="btn bg-dark text-light form-control" type="submit" @click="signup">Submit</button>
    </form>
  </template>
  
  <script setup>
    import {computed, onMounted, ref } from 'vue'
    import { useVuelidate } from "@vuelidate/core";
    import { required, minLength, maxLength, email } from "@vuelidate/validators";
    const name = ref('')
    const gender = ref('')
    const skill = ref([])
    const occupation = ref('')
    const users = ref([])

      const form = ref( {
            name: "",
            email: "",
            password: "",
        })
        const rules = computed(()=> ({
            form:{
                name: { required, min: minLength(5), max: maxLength(11) },
                email: { required, email },
                password: { required, min: minLength(6), max: maxLength(20) },
            }
        }))
        const v$ = useVuelidate(rules, form)
        const signup = (e)=>{
            e.preventDefault()
            const user = {name: name.value, gender:gender.value, skill:skill.value, occupation:occupation.value}
            console.log(user);
            users.value.push(user)
            localStorage.setItem('vueUsers', JSON.stringify(users.value))
       }
       onMounted(()=>{
            console.log('Men Mounted');
            users.value=localStorage['vueUsers']?JSON.parse(localStorage['vueUsers']):[]
  
       })
  </script>
  
  <style>
  
  </style>