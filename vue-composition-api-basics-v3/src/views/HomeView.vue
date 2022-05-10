<template>
  <div class="home">
    <h2 ref="appTitleRef">{{ nonReactiveTitle }} :</h2>
    <h3>{{ counter.title }} :</h3>
    <div>
      <button class="btn" @click="counter.decreaseCounter(1)">-</button>
      <span class="counter">{{ counter.count }}</span>
      <button class="btn" @click="counter.increaseCounter(1)">+</button>
    </div>

    <p>This counter is {{ counter.oddOrEven }}</p>

    <div class="edit">
      <h4>Edit Counter Title</h4>
      <input type="text" v-model="counter.title" @input="counter.changeTitle" />
    </div>
    <post-view></post-view>
  </div>
</template>


<script setup>
import { ref, onMounted, onUpdated } from "vue";
import { useCounterStore } from '@/stores/counter';
import PostView from "./PostView.vue";
const nonReactiveTitle = ' My Non reactive Title'

const counterTitle = ref("My Counter");

// Template Ref 
const appTitleRef = ref(null)
onMounted(() => {
  //below will give access to h2
  console.log('appTitleRef.value', appTitleRef.value.offsetWidth)
})

/**
 * Counter 
*/
const counter = useCounterStore()


onUpdated(() => {
  console.log('Home view onUpdated')
})
</script>


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

.edit {
  margin-top: 40px;
}
</style>