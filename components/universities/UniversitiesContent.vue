<template>
    <section class="content">
        <div class="container content__container">
            <div class="content__main">
                <listing v-if="isUniversity" :items="universities">
                    <template #default="{ item }">
                        <university-card :item="item" />
                    </template>
                </listing>
                <listing v-else :items="programs">
                    <template #default="{ item }">
                        <faculty-card :item="item" />
                    </template>
                </listing>
            </div>
        </div>
    </section>
</template>

<script>
import Listing from '@/components/widget/Listing'
import UniversityCard from '../common/cards/UniversityCard.vue'
import FacultyCard from '../common/cards/FacultyCard.vue'
export default {
    name: 'UniversitiesContent',
    components: {
        Listing,
        UniversityCard,
        FacultyCard,
    },
    props: {
        isUniversity: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        programs() {
            return this.$store.getters['university/programs']
        },
        universities() {
            return this.$store.getters['university/universities']
        },
    },
}
</script>

<style lang="scss">
.content {
    &__main {
        width: 100%;
    }
}
</style>
