<script setup>
import Navbar from './Navbar.vue';

</script>

<template>
    <div class="bg-stone-100 min-h-screen">
        <Navbar />

        <div class="max-w-2xl mx-auto">
            <slot />
        </div>
    </div>
</template>
