<template>
    <div>
        <header-page></header-page>
    </div>
</template>

<script>
import HeaderPage from '../components/common/Header.vue'
export default {
    components: { HeaderPage },
    mounted () {
        this.$toast.success('Success toast')
    }
}
</script>

<style>

</style>