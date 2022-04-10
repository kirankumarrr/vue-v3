<template>
    <div class="modals">
        <h1>models</h1>
        <button @click="showModal = true">Show Modal</button>
        <teleport to=".modals-container">
            <div class="modal" v-if="showModal">
                <h1>This is a modal</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                    optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                    obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                    nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                </p>
                <button @click="showModal = false">Hide Modal</button>
            </div>
        </teleport>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const showModal = ref(false)
</script>

<style>
.modal {
    background: #00bd6e;
    padding: 10px;
    color: black;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}
</style>