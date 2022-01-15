<template>
    <div>
        <div v-for="(item, index) in items" :key="index">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'List',
    props: {
        items: Array,
    },
}
</script>

<style></style>
