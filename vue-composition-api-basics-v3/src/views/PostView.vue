import { RouterLink } from 'vue-router';
<template>
  <div class="post">
    <h1>Post</h1>

    <ul class="list">
      <li>
        <RouterLink to="/postDetail/id1">POST 1</RouterLink>
      </li>
      <li>
        <RouterLink to="/postDetail/id2">POST 2</RouterLink>
      </li>
      <li>
        <RouterLink to="/postDetail/id3">POST 3</RouterLink>
      </li>
    </ul>

    <textarea rows="1" cols="40" />
  </div>
</template>

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
</style>
