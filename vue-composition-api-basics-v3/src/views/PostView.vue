import { RouterLink } from 'vue-router';

<template>
  <div class="post">
    <h1>Post</h1>

    <ul class="list">
      <li v-for="post in posts">
        <RouterLink :to="`/postDetail/${post.id}`">{{ post.title }}</RouterLink>
      </li>
    </ul>

    <textarea rows="1" cols="40" />

    <div>
      <button class="counter-button" @click="counter.increaseCounter()"
        :class="{ 'bg-yellow': counter.oddOrEven === 'odd' }">{{
          counter.count
        }}</button>
    </div>
  </div>
</template>


<script setup>
import { useCounterStore } from '@/stores/counter'
import { ref, onUpdated } from 'vue';
const posts = ref([
  {
    id: 'id1',
    title: 'Post 1'
  },
  {
    id: 'id2',
    title: 'Post 2'
  },
  {
    id: 'id3',
    title: 'Post 3'
  }
])

/***
 * Counter 
 */
const counter = useCounterStore()

onUpdated(() => {
  console.log('PoST view onUpdated')
})
</script>

<style >
@media (min-width: 1024px) {
  .post {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }

  .list {
    margin-bottom: 30px;
  }

}

.counter-button {
  font-size: 40px;
  width: 100%;
  margin-top: 20px;
  background-color: rgb(11, 164, 80);
}

.bg-yellow {
  background-color: yellow;
}
</style>
