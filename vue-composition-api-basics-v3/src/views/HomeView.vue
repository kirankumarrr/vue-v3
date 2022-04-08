<template>
  <div class="home">
    <div>
      <button class="btn" @click="decrement">-</button>
      <span class="counter">{{ counter }}</span>
      <button class="btn" @click="increment">+</button>
    </div>
  </div>
</template>


<script setup>
import { ref } from "vue";

const counter = ref(0);

const decrement = () => {
  counter.value--;
};
const increment = () => {
  counter.value++;
};
</script>

<!--  this is before v3.2 -> without setup 
<script>
import { ref } from "vue";

export default {
  setup() {
    const counter = ref(0);

    const decrement = () => {
      counter.value--;
    };
    const increment = () => {
      counter.value++;
    };

    return {
      counter,
      decrement,
      increment,
    };
  },
};
</script>
 -->


<!--
  this is optional api
 <script>
 export default {
   data() {
     return {
       counter: 0,
     };
   },
   methods: {
     decrement() {
       this.counter--;
     },
     increment() {
       this.counter++;
     },
   },
 };

</script>
 -->

<style>
.home {
  text-align: center;
  padding: 20px;
}
.btn,
.counter {
  font-size: 40px;
  margin: 10px;
}
</style>