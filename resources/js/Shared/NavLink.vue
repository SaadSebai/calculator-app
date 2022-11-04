<script setup>
import { Link } from '@inertiajs/inertia-vue3'
import { computed } from '@vue/reactivity';

const props = defineProps({
    href: String,
    active: Boolean,
});

const classes = computed(
    () => props.active
        ? "bg-stone-400"
        : ""
)
</script>

<template>
    <Link
        :href="href"
        class="hover:bg-stone-400 text-stone-600 text-xl w-auto text-center py-4 px-4"
        :class="classes"
    >
        <slot />
    </Link>
</template>
