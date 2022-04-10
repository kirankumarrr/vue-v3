<template>
    <div class="modals">
        <h1>models</h1>
        <button @click="showModal = true">Show Modal</button>
        <Modal v-if="showModal" subTitle="this is subTitle" @hideModal="showModal = false">
            <template v-slot:title>my new Title</template>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
            </p>
        </Modal>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Modal from '../components/Modal.vue'
const showModal = ref(false)
</script>

