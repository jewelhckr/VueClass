<script setup>
  import { computed, ref } from 'vue';

  const name = "Jewel";
  const num = ref(0);
  // const checkDay = "twilight";
  const students = [
    {
      id: 1,
      name: "Jewel",
      paid: true,
    },
    {
      id: 2,
      name: "Joshua",
      paid: true,
    },
    {
      id: 3,
      name: "Jason",
      paid: false,
    },
    {
      id: 4,
      name: "Jade",
      paid: true,
    },
    {
      id: 5,
      name: "Jasmine",
      paid: false,
    }
  ]

  const togglePaid = (id)=> {
    let student =  students.find((std)=> std.id == id);
    console.log(student);
    student.paid = !student.paid;
    console.log(student);

  }

  const paidStudents = computed(()=>{
    return students.filter((student)=> student.paid);
  });
</script>

<template>
  <div>
    <h3>Hola {{name}}! Welcome to la Mundo de Vue!</h3>
    <button @click="num++">Increase</button>
    <h4>{{ num }}</h4>
  </div>

  <div v-for="student in students" :key="student.id"> <!-- Can also use :key="index" -->
    <p :id="student.paid ? 'paid' : 'notpaid'" @click="togglePaid(student.id)">{{ student.name }}</p>
  </div>

  <div  v-for="student in paidStudents" :key="student.id">
    <p>{{ student.name }}</p>
  </div>

  <!-- <div v-if="checkDay=='day'">Today is day</div>
  <div v-else-if="checkDay=='twilight'">Today is twilight</div>
  <div v-else>Today is night</div> -->
</template>

<style scoped>
#paid {
  background-color: rgb(114, 255, 114);
}

#notpaid {
  background-color: rgb(243, 121, 121);
}
</style>
