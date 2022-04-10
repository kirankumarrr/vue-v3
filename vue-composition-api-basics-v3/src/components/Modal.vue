<template>
    <teleport to=".modals-container">
        <div class="modal">
            <h1>
                <slot name="title" />
            </h1>
            <h2>{{ subTitle }}</h2>
            <slot />
            <!-- <pre>{{ $slots.title() }}</pre> -->
            <!-- <button @click="$emit('hideModal')">Hide Modal</button> -->
            <button @click="handleBtnClick">Hide Modal</button>
        </div>
    </teleport>
</template>

<script setup>
import { useSlots } from 'vue';

const slots = useSlots()
console.log('slots', slots.title())


/***
 * Props 
 */
const props = defineProps({
    subTitle: {
        type: String,
        default: 'no subtitle sepecified'
    }
})

/***
 * Emits 
 */
const emit = defineEmits(['hideModal'])

// Programatically
const handleBtnClick = () => {
    emit('hideModal')
}

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