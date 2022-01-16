<template>
    <div>
        <div v-for="(item, index) in items" :key="index">
            <university-card :item="item">callback</university-card>
        </div>
    </div>
</template>

<script>
import UniversityCard from '../common/cards/UniversityCard.vue'
export default {
    name: 'List',
    components: { UniversityCard },
    props: {
        items: {
            type: Array,
            required: true,
        },
    },
    computed: {
        universities() {
            return this.$store.getters['university/universities']
        },
    },
    watch: {
        items(val) {
            console.log(val)
        },
    },
}
</script>

<style></style>
