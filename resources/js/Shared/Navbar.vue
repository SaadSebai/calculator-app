<script setup>
import { Link } from '@inertiajs/inertia-vue3'
import NavLink from './NavLink.vue';
</script>

<template>
    <nav class="flex justify-between bg-stone-300 text-stone-600 text-lg h-16 px-10 mb-10">
        <Link href="/" class="font-semibold text-xl w-24 text-center py-4">Calculator</Link>

        <div class="flex mr-10">
            <NavLink :href="'basic-calculator'" :active="$page.component === 'BasicCalculator'">Basic Calculator</NavLink>
            <NavLink :href="'/'" :active="$page.component === 'Home'">Home</NavLink>
        </div>
    </nav>
</template>
