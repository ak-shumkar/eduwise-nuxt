<template>
    <div class="listing">
        <el-skeleton v-if="isLoading" :rows="6" animated />
        <template v-else>
            <div v-for="(item, index) in items" :key="index">
                <slot :item="item"></slot>
            </div>
        </template>
    </div>
</template>

<script>
export default {
    name: 'Listing',
    components: {},
    props: {
        items: {
            type: Array,
            required: true,
        },
    },
    computed: {
        isLoading() {
            return this.$store.getters['university/isLoading']
        },
    },
    watch: {
        items(val) {
            console.log(val)
        },
    },
}
</script>

<style lang="scss">
.listing {
    display: block;
    > div {
        width: 100%;
    }
}
</style>
