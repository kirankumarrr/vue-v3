import { RouterLink } from 'vue-router';
<template>
  <div class="postDetailView">
    <h1>This is PostDetail page</h1>
    <p>Display the content of post ID of {{ $route.params.id }}</p>

    <div>
      <button @click="showPostId">Show Post ID</button>
    </div>
    <div>
      <button @click="goHome">Go Home in 3 seconds</button>
    </div>
    <div>
      <button @click="goToFirstPost">goToFirstPost</button>
    </div>
    <p>
      <RouterLink to="/posts">&lt; Back</RouterLink>
    </p>
  </div>
</template>

<script setup>import { useRoute, useRouter } from 'vue-router';
const route = useRoute()
const router = useRouter()
const showPostId = () => {
  console.log('showPostId', route)
  alert(`this is the id of current post ${route.params.id}`)
}

const goHome = () => {
  setTimeout(() => {
    // router.push('/')
    router.push({ name: 'home' })
  }, 3000)
}

const goToFirstPost = () => {
  router.push({ name: 'postDetail', params: { id: 'id1' } })
}

</script>

<style>
@media (min-width: 1024px) {
  .postDetailView {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
