<template>
  <div class="home">
    <h2 ref="appTitleRef">{{ nonReactiveTitle }} :</h2>
    <h3>{{ counterData.title }} :</h3>
    <div>
      <button class="btn" @click="decrement">-</button>
      <span class="counter">{{ counterData.count }}</span>
      <button class="btn" @click="increment">+</button>
    </div>
    <div class="edit">
      <h4>Edit Counter Title</h4>
      <input type="text" v-model="counterData.title" />
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted } from "vue";

import { useCounter } from "../use/useCounter";

const nonReactiveTitle = ' My Non reactive Title'

const counterTitle = ref("My Counter");


/***
 * Counter 
 */
const { counterData, decrement, increment } = useCounter()
// Template Ref 
const appTitleRef = ref(null)
onMounted(() => {
  //below will give access to h2
  console.log('appTitleRef.value', appTitleRef.value.offsetWidth)
})
</script>


<style>.home {
  text-align: center;
  padding: 20px;
}

.btn,
.counter {
  font-size: 40px;
  margin: 10px;
}

.edit {
  margin-top: 40px;
}</style>