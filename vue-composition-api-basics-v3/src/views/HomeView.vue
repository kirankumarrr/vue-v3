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
import { reactive, ref, onMounted, nextTick } from "vue";

const nonReactiveTitle = ' My Non reactive Title'

const counter = ref(0);
const counterTitle = ref("My Counter");

// Reactive Object 

const counterData = reactive({
  count: 0,
  title: 'My Counter'
})

const decrement = () => {
  counter.value--;
  // Reactive object update
  counterData.count--;
};
const increment = async () => {
  counter.value++;
  // Reactive object update
  counterData.count++;
  await nextTick()
  console.log('Updated Dom after incremented')
  // without async
  // nextTick(()=>{
  //    console.log('Updated Dom after incremented')
  // })
};

// Template Ref 
const appTitleRef = ref(null)
onMounted(() => {
  //below will give access to h2
  console.log('appTitleRef.value', appTitleRef.value.offsetWidth)
})
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
.edit {
  margin-top: 40px;
}
</style>