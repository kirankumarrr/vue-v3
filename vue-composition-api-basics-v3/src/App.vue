<template>
  <div class="user-data">{{ userData.name }} && {{ userData.username }} |
    Network Status : <span :style="{
      color: isOnline ? 'green' : 'red'
    }"> {{ isOnline ? 'Online' : 'Offline' }}</span>
  </div>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/post">Post</RouterLink>
        <RouterLink to="/modals">Modals</RouterLink>
      </nav>
    </div>
  </header>

  <!-- this allow us to display views -->
  <RouterView />
</template>



<script setup>
import { RouterLink, RouterView } from "vue-router";
import { reactive, provide } from 'vue';
import { useOnline } from '@vueuse/core'

const isOnline = useOnline();

const userData = reactive({
  name: 'tester',
  username: 'tester-username'
})

// Passing this data throughout the app child components
provide('userData', userData)
</script>



<style>@import "@/assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}</style>
