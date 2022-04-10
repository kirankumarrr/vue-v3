<template>
    <teleport to=".modals-container">
        <div class="modal-dark" v-if="modelValue">
            <h1>
                <slot name="title" />
            </h1>
            <h2>{{ subTitle }}</h2>
            <slot />
            <!-- <pre>{{ $slots.title() }}</pre> -->
            <!-- <button @click="$emit('hideModal')">Hide Modal</button> -->
            <button @click="$emit('update:modelValue', false)">Hide Modal</button>
            <!-- <button @click="handleBtnClick">Hide Modal</button> -->
        </div>
    </teleport>
</template>

<script setup>
import { useSlots } from 'vue';

const slots = useSlots()
console.log('slots', slots.title())

// modelValue : can access showModal ref

/***
 * Props 
 */
const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false
    },
    subTitle: {
        type: String,
        default: 'no subtitle sepecified'
    }
})

/***
 * Emits 
 */
const emit = defineEmits(['update:modelValue'])

// Programatically
// const handleBtnClick = () => {
//     emit('update:modelValue', false)
// }

</script>

<style>
.modal-dark {
    background: #333;
    padding: 10px;
    color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}
</style>